import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local (see .env.example).'
  );
}

// This client is imported by the server-only route handler in app/api/contact/route.ts.
// It is never imported directly by a 'use client' component, so the anon key is only
// ever used from the server, even though the env vars are NEXT_PUBLIC_-prefixed.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
