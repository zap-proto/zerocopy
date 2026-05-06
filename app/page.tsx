'use client';

import { ArrowRight, Zap, Cpu, Lock, MemoryStick, Timer, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 py-32 md:py-40 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-blue-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400 mb-6">
            Zero-copy applications
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
            The future of <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">I/O</span> is here.
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/70 max-w-3xl mx-auto mb-4">
            Less memory. Lower latency. Post-quantum by default.
          </p>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
            DApps were 2020. Cloud apps were 2010. <span className="text-white font-semibold">ZApps are now.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://zap-proto.dev/docs/quick-start"
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all"
            >
              Build a ZApp <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border border-white/20 rounded-full hover:bg-white/5 transition-colors"
            >
              Why zero-copy?
            </a>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="why" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 text-center mb-3">
            Why ZApps
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Three reasons to build different.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Pillar
              icon={MemoryStick}
              eyebrow="Less memory"
              title="Pointer + arena."
              body="Zero-copy parse: messages live in L1 cache where Protobuf forces a heap round-trip. O(1) field access. No marshal/unmarshal allocations."
              stat="O(1)"
              statLabel="vs Θ(n) Protobuf walk"
            />
            <Pillar
              icon={Timer}
              eyebrow="Lower latency"
              title="Tail to floor."
              body="Cap'n Proto–derived wire + per-stream FEC + post-quantum KEM amortized. Tail latency converges to link latency. p99 disappears."
              stat="9–14×"
              statLabel="p99 small msg vs JSON"
            />
            <Pillar
              icon={ShieldCheck}
              eyebrow="Future-proof"
              title="PQ by default."
              body="X-Wing and Z-Wing hybrid post-quantum from byte zero. Harvest-now-decrypt-later? Nothing useful to harvest. Mutual auth at the wire."
              stat="X25519 + ML-KEM-768"
              statLabel="hybrid PQ default"
            />
          </div>
        </div>
      </section>

      {/* What you can build */}
      <section className="px-6 py-24 border-t border-white/10 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 text-center mb-3">
            ZApps in the wild
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What you can build.
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Use title="AI agent meshes" body="Mutual auth, non-repudiation, signed provenance per call. MCP / A2A / ACP over ZAP." />
            <Use title="Real-time markets" body="Sub-microsecond p99 for FIX 4.4 / 5.0 trading channels. Compliance-grade timestamps." />
            <Use title="Sovereign rollups" body="L1/L2 nodes talking PQ-safe across the public internet. No TLS supply chain." />
            <Use title="Edge inference" body="Tiny binaries, mmap-friendly messages, no JSON marshal at the inference boundary." />
            <Use title="Service mesh" body="ZAP-RNS for naming, zap-http for RPC, zap-ws for streaming. One wire end-to-end." />
            <Use title="Sensor fanout" body="Multi-stream pubsub with FEC for lossy networks. p99 independent of stream count." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 border-t border-white/10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready?</h2>
        <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
          One protocol. Many sub-protocols. All composable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://zap-proto.dev"
            className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors"
          >
            Developer docs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://zap-proto.io"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border border-white/20 rounded-full hover:bg-white/5 transition-colors"
          >
            Protocol home
          </a>
          <a
            href="https://github.com/zap-proto"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border border-white/20 rounded-full hover:bg-white/5 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-white/40 text-sm">
        <p>
          <a className="text-blue-400 hover:underline" href="https://zap-proto.io">zap-proto.io</a> · <a className="text-blue-400 hover:underline" href="https://zap-proto.dev">zap-proto.dev</a> · <a className="text-blue-400 hover:underline" href="https://zerocopy.app">zerocopy.app</a>
        </p>
      </footer>
    </main>
  );
}

function Pillar({ icon: Icon, eyebrow, title, body, stat, statLabel }: any) {
  return (
    <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/5 to-transparent hover:border-blue-500/40 transition-colors">
      <Icon className="w-8 h-8 text-blue-400 mb-6" />
      <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">{eyebrow}</p>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/60 mb-8 leading-relaxed">{body}</p>
      <div className="pt-6 border-t border-white/10">
        <div className="text-3xl font-mono font-bold text-blue-400">{stat}</div>
        <div className="text-xs text-white/40 mt-1">{statLabel}</div>
      </div>
    </div>
  );
}

function Use({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-6 border border-white/10 rounded-xl hover:border-blue-500/40 transition-colors">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
