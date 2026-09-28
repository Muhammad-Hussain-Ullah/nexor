import { NextResponse } from 'next/server';

export async function POST() {
  const apiKey = process.env.RETELL_API_KEY;
  const agentId = process.env.RETELL_AGENT_ID;

  if (!apiKey || !agentId) {
    return NextResponse.json({ error: 'Retell is not configured' }, { status: 500 });
  }

  const res = await fetch('https://api.retellai.com/v2/create-web-call', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ agent_id: agentId }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error('Retell create-web-call failed:', detail);
    return NextResponse.json({ error: 'Could not start call' }, { status: 502 });
  }

  const data = await res.json();
  return NextResponse.json({ access_token: data.access_token });
}