'use client';

import { useEffect, useRef, useState } from 'react';
import { PhoneCall, PhoneOff, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { RetellWebClient } from 'retell-client-js-sdk';

type CallStatus = 'idle' | 'connecting' | 'active' | 'error' | 'mic-denied';

export default function LiveCallBanner() {
  const clientRef = useRef<RetellWebClient | null>(null);
  const [status, setStatus] = useState<CallStatus>('idle');

  useEffect(() => {
    const client = new RetellWebClient();
    clientRef.current = client;

    client.on('call_started', () => setStatus('active'));
    client.on('call_ended', () => setStatus('idle'));
    client.on('error', (err) => {
      console.error('Retell error:', err);
      client.stopCall();
      setStatus('error');
    });

    return () => {
      client.stopCall();
      client.removeAllListeners();
    };
  }, []);

  const handleClick = async () => {
    const client = clientRef.current;
    if (!client) return;

    // If a call is running (or connecting), clicking ends it
    if (status === 'active' || status === 'connecting') {
      client.stopCall();
      setStatus('idle');
      return;
    }

    try {
      setStatus('connecting');

      // 1. Trigger the browser's microphone permission pop-up
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((track) => track.stop()); // release mic, Retell reopens it
      } catch (micErr) {
        console.error('Microphone error:', micErr);
        setStatus('mic-denied');
        return;
      }

      // 2. Only if the mic was allowed, create the call
      const res = await fetch('/api/retell/create-web-call', { method: 'POST' });
      if (!res.ok) throw new Error('Failed to create web call');
      const { access_token } = await res.json();

      await client.startCall({ accessToken: access_token });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const isLive = status === 'active';
  const isConnecting = status === 'connecting';

  return (
    <section id="hear-it" className="py-20 md:py-24 border-t border-white/[0.08] bg-[#0c1013] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#122227] via-[#0f1b1e] to-[#0c1316] border border-teal-500/40 p-8 sm:p-12 overflow-hidden shadow-2xl shadow-black/60">
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Interactive Voice Hotline</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Call our AI agent right now and test it for yourself.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Experience the latency, natural voice cadence, and intelligent trade diagnostics firsthand. Click below to start a live voice conversation with Nexor right in your browser.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleClick}
                className={`inline-flex items-center gap-2.5 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                  isLive
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white text-[#0c1013] hover:bg-slate-100'
                }`}
              >
                {isConnecting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : isLive ? (
                  <PhoneOff className="w-4 h-4" />
                ) : (
                  <PhoneCall className="w-4 h-4 text-teal-600" />
                )}
                <span>
                  {isConnecting ? 'Connecting…' : isLive ? 'End Call' : 'Click to Call'}
                </span>
              </button>

              <a
                href="#demo-call"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-300 hover:text-white px-4 py-3 rounded-xl border border-teal-800/60 hover:bg-teal-950/40 transition-colors"
              >
                <span>Or Play Web Audio Recording</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {isLive && (
              <p className="mt-3 text-xs text-teal-300">
                ● Call in progress. Start speaking, the agent is listening.
              </p>
            )}
            {status === 'mic-denied' && (
              <p className="mt-3 text-xs text-amber-400">
                Microphone access is blocked. Click the lock icon in your address bar, allow the microphone, then try again.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-xs text-red-400">
                Couldn&apos;t start the call. Please try again in a moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}