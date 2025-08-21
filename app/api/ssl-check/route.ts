
// app/api/ssl-check/route.ts
import { NextResponse } from 'next/server';
import tls from 'tls';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const host = (body.host || '').toString().trim();
    const port = Number(body.port || 443);

    if (!host) return NextResponse.json({ ok: false, error: 'Missing host' }, { status: 400 });

    return await new Promise((resolve) => {
      const socket = tls.connect({ host, port, servername: host, rejectUnauthorized: false, timeout: 10000 }, () => {
        try {
          const cert = socket.getPeerCertificate(true) as any || {};
          const protocol = socket.getProtocol();
          const cipher = socket.getCipher && socket.getCipher();

          const validFrom = cert.valid_from ? new Date(cert.valid_from) : null;
          const validTo = cert.valid_to ? new Date(cert.valid_to) : null;
          const now = new Date();

          let daysRemaining: number | null = null;
          if (validTo) {
            daysRemaining = Math.ceil((+validTo - +now) / (1000 * 60 * 60 * 24));
          }

          const response = {
            ok: true,
            host,
            port,
            protocol: protocol || null,
            cipher: cipher || null,
            certificate: {
              subject: cert.subject || null,
              issuer: cert.issuer || null,
              subjectAltName: cert.subjectaltname || cert.altNames || null,
              valid_from: cert.valid_from || null,
              valid_to: cert.valid_to || null,
              daysRemaining,
              raw: cert // includes raw certificate object (avoid very large payloads in production)
            }
          };

          socket.end();
          resolve(NextResponse.json(response));
        } catch (err: any) {
          socket.destroy();
          resolve(NextResponse.json({ ok: false, error: String(err) }, { status: 500 }));
        }
      });

      socket.on('error', (err) => {
        resolve(NextResponse.json({ ok: false, error: err.message }, { status: 502 }));
      });

      socket.on('timeout', () => {
        socket.destroy();
        resolve(NextResponse.json({ ok: false, error: 'Connection timed out' }, { status: 504 }));
      });
    });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
}