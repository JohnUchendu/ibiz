
'use client';

import { useState } from 'react';

export default function SSLCheckerPage() {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('443');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function check(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch('/api/ssl-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ host, port: Number(port || 443) })
      });

      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Unknown error');
      } else {
        setResult(json);
      }
    } catch (err: any) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-start justify-center p-6 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">SSL / TLS Checker</h1>

        <form onSubmit={check} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <input value={host} onChange={(e) => setHost(e.target.value)} placeholder="example.com or 1.2.3.4" className="col-span-2 p-3 border rounded" />
          <input value={port} onChange={(e) => setPort(e.target.value)} placeholder="443" className="p-3 border rounded" />
          <div className="sm:col-span-3">
            <button disabled={loading || !host} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60" type="submit">
              {loading ? 'Checking...' : 'Check SSL'}
            </button>
            <button type="button" onClick={() => { setHost(''); setPort('443'); setResult(null); setError(null); }} className="ml-3 px-3 py-2 border rounded">Reset</button>
          </div>
        </form>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        {result && (
          <div className="space-y-3">
            <div className="p-4 border rounded">
              <div><strong>Host:</strong> {result.host}:{result.port}</div>
              <div><strong>TLS Protocol:</strong> {result.protocol || 'N/A'}</div>
              <div><strong>Cipher:</strong> {result.cipher ? JSON.stringify(result.cipher) : 'N/A'}</div>
            </div>

            <div className="p-4 border rounded">
              <h3 className="font-medium mb-2">Certificate</h3>
              <div><strong>Subject:</strong> {result.certificate.subject ? JSON.stringify(result.certificate.subject) : 'N/A'}</div>
              <div><strong>Issuer:</strong> {result.certificate.issuer ? JSON.stringify(result.certificate.issuer) : 'N/A'}</div>
              <div><strong>SubjectAltName:</strong> {result.certificate.subjectAltName || 'N/A'}</div>
              <div><strong>Valid from:</strong> {result.certificate.valid_from || 'N/A'}</div>
              <div><strong>Valid to:</strong> {result.certificate.valid_to || 'N/A'}</div>
              <div><strong>Days remaining:</strong> {result.certificate.daysRemaining ?? 'N/A'}</div>
            </div>

            <details className="p-3 border rounded">
              <summary className="cursor-pointer">Raw certificate object</summary>
              <pre className="whitespace-pre-wrap text-xs mt-2">{JSON.stringify(result.certificate.raw, null, 2)}</pre>
            </details>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <strong>Notes:</strong> This tool opens a TLS connection and reads the peer certificate. In production you may want to: validate hostname/cert chain, avoid returning the full raw certificate to clients, add rate-limiting, and improve error handling.
        </div>
      </div>
    </div>
  );
}

// ---

// ## Production considerations

// * **Validation & security**: Currently `rejectUnauthorized` is set to `false` to allow retrieving certs even when chain validation fails (useful for debug). In production you may want to validate or explicitly handle untrusted chains.
// * **Rate limiting & abuse prevention**: Add rate limits and input validation to avoid misuse.
// * **DNS & IPv6**: For IPs vs hostnames, SNI is set to the host; when passing raw IPs the `servername` may need special handling.
// * **OCSP/CRL**: Checking revocation status requires additional work (OCSP requests or using external services).

// ---

// If you want, I can:

// * Convert the API to return a smaller sanitized certificate object.
// * Add an option to test specific TLS minimum/maximum versions.
// * Add bulk mode (check many hosts at once) with progress streaming.
