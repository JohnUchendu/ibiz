// function formatEMVTag(id: string, value: string) {
//   const len = value.length.toString().padStart(2, "0");
//   return id + len + value;
// }

// function generateNIBSSQR({
//   businessName,
//   bank,
//   accountNumber,
//   amount,
// }: {
//   businessName: string;
//   bank: string;
//   accountNumber: string;
//   amount?: string;
// }) {
//   // Very simplified example for Nigeria
//   let payload = "";

//   // Payload format indicator
//   payload += formatEMVTag("00", "01");
//   // Point of initiation (static)
//   payload += formatEMVTag("01", "12");
//   // Merchant account info - this would normally follow NIBSS scheme
//   payload += formatEMVTag("26", `0014com.nibss.mcash${accountNumber}`);
//   // Transaction currency: 566 = NGN
//   payload += formatEMVTag("53", "566");
//   // Country: NG
//   payload += formatEMVTag("58", "NG");
//   // Merchant name
//   payload += formatEMVTag("59", businessName || "Merchant");
//   // Merchant city
//   payload += formatEMVTag("60", "Lagos");

//   if (amount) {
//     payload += formatEMVTag("54", amount);
//   }

//   // CRC placeholder (required by EMVCo)
//   payload += "6304";

//   // TODO: calculate CRC16 of payload and append (instead of XXXX)
//   payload += "XXXX";

//   return payload;
// }



// lib/nibss.ts

// function formatEMVTag(id: string, value: string) {
//   const len = value.length.toString().padStart(2, "0");
//   return id + len + value;
// }

// // CRC16-CCITT (Kermit) checksum calculation
// function crc16(payload: string): string {
//   let crc = 0xFFFF;
//   for (let i = 0; i < payload.length; i++) {
//     crc ^= payload.charCodeAt(i) << 8;
//     for (let j = 0; j < 8; j++) {
//       if (crc & 0x8000) {
//         crc = (crc << 1) ^ 0x1021;
//       } else {
//         crc <<= 1;
//       }
//       crc &= 0xFFFF;
//     }
//   }
//   return crc.toString(16).toUpperCase().padStart(4, "0");
// }

// export function generateNIBSSQR({
//   businessName,
//   bank,
//   accountNumber,
//   amount,
// }: {
//   businessName: string;
//   bank: string;
//   accountNumber: string;
//   amount?: string;
// }) {
//   let payload = "";

//   // Format indicator
//   payload += formatEMVTag("00", "01");
//   // Point of initiation
//   payload += formatEMVTag("01", "12");
//   // Merchant account info (simplified for demo)
//   payload += formatEMVTag("26", `0014com.nibss.mcash${accountNumber}`);
//   // Transaction currency: NGN
//   payload += formatEMVTag("53", "566");
//   // Country code
//   payload += formatEMVTag("58", "NG");
//   // Merchant name
//   payload += formatEMVTag("59", businessName || "Merchant");
//   // Merchant city
//   payload += formatEMVTag("60", "Lagos");
//   // Optional amount
//   if (amount) {
//     payload += formatEMVTag("54", amount);
//   }

//   // Append CRC placeholder
//   const payloadForCRC = payload + "6304";
//   const checksum = crc16(payloadForCRC);
//   payload = payloadForCRC + checksum;

//   return payload;
// }


// lib/nibss.ts

// Minimal mapping of common Nigerian bank codes (NUBAN/NIP style).
// Tweak/extend if any code differs for your flow.
export const BANK_CODES: Record<string, string> = {
  "Access Bank": "044",
  "Access Bank (Diamond)": "063",
  "Citibank": "023",
  "Ecobank": "050",
  "Fidelity Bank": "070",
  "First Bank": "011",
  "FCMB": "214",
  "FSDH": "400",          // investment bank; may not apply to retail transfers
  "Globus Bank": "00103",
  "GTBank": "058",
  "Heritage Bank": "030",
  "Jaiz Bank": "301",
  "Keystone Bank": "082",
  "Kuda": "50211",
  "Moniepoint MFB": "50515",
  "Opay": "305",          // many use 999 or 996 elsewhere; adjust if needed
  "PalmPay": "999",       // placeholder; confirm and change if needed
  "Polaris Bank": "076",
  "Providus Bank": "101",
  "Stanbic IBTC": "221",
  "Standard Chartered": "068",
  "Sterling Bank": "232",
  "SunTrust": "100",
  "Titan Trust": "102",
  "Union Bank": "032",
  "UBA": "033",
  "Unity Bank": "215",
  "Wema Bank": "035",
  "Zenith Bank": "057",
};

// EMVCo TLV helper
function tlv(id: string, value: string): string {
  const len = value.length.toString().padStart(2, "0");
  return `${id}${len}${value}`;
}

// CRC16-CCITT (XModem) used by EMVCo
function crc16xmodem(input: string): string {
  let crc = 0xFFFF;
  for (let i = 0; i < input.length; i++) {
    crc ^= input.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

/**
 * Generate an OFFLINE NIBSS-style EMVCo QR payload (no credentials required).
 * This packs account + bank code into Merchant Account Info (ID 26).
 *
 * Fields included:
 *  - 00 Payload Format Indicator = "01"
 *  - 01 Point of Initiation Method = "11" (dynamic)  // "12" for static, if you prefer
 *  - 26 Merchant Account Info (sub-TLV):
 *      00 AID (placeholder for NIBSS) -> "com.nibss.nqr"   // change to official AID when you get it
 *      01 Beneficiary Account Number
 *      02 Destination Institution Code (bank code)
 *  - 52 MCC = "0000" (uncategorized)
 *  - 53 Currency = "566" (NGN)
 *  - 54 Amount (optional, if provided)
 *  - 58 Country = "NG"
 *  - 59 Merchant Name
 *  - 60 Merchant City
 *  - 63 CRC (auto-computed)
 */
export function generateNqrOffline(opts: {
  businessName: string;
  bankName: string;
  accountNumber: string;
  amount?: string;
  merchantCity?: string;
  aidOverride?: string; // if your acquirer gives you an official AID, set it here
}): string {
  const {
    businessName,
    bankName,
    accountNumber,
    amount,
    merchantCity = "Lagos",
    aidOverride,
  } = opts;

  const bankCode = BANK_CODES[bankName] || "";
  if (!bankCode) {
    throw new Error(`Unknown bank code for "${bankName}". Update BANK_CODES map.`);
  }

  // Merchant Account Info (ID 26) with sub-tags
  const AID = aidOverride || "com.nibss.nqr"; // replace when your acquirer shares official AID
  const mai =
    tlv("00", AID) +                  // AID
    tlv("01", accountNumber) +        // beneficiary account
    tlv("02", bankCode);              // destination institution code

  let payload = "";
  payload += tlv("00", "01");         // Payload Format Indicator
  payload += tlv("01", "11");         // Dynamic QR (use "12" for static if you prefer)
  payload += tlv("26", mai);          // Merchant Account Info
  payload += tlv("52", "0000");       // MCC
  payload += tlv("53", "566");        // Currency NGN
  if (amount && String(amount).trim()) {
    payload += tlv("54", String(amount).trim()); // Amount
  }
  payload += tlv("58", "NG");         // Country
  payload += tlv("59", (businessName || "Merchant").slice(0, 25)); // Merchant Name (trim to be safe)
  payload += tlv("60", merchantCity.slice(0, 15));                 // Merchant City (trim)

  // CRC
  const withCrcId = payload + "6304";
  const checksum = crc16xmodem(withCrcId);
  payload = withCrcId + checksum;

  return payload;
}
