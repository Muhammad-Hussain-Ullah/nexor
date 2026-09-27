import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const industry = typeof body.industry === 'string' ? body.industry.trim() : '';
  const callVolume = typeof body.callVolume === 'string' ? body.callVolume.trim() : '';
  const notes = typeof body.notes === 'string' ? body.notes.trim() : '';

  if (!name || !company || !email || !phone) {
    return NextResponse.json(
      { error: 'Name, company, email, and phone are required.' },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }

  const { error } = await supabase.from('demo_requests').insert({
    name,
    company,
    email,
    phone,
    industry: industry || null,
    call_volume: callVolume || null,
    challenge: notes || null,
  });

  if (error) {
    console.error('Supabase insert error:', error);
    return NextResponse.json(
      { error: 'Something went wrong saving your request. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
