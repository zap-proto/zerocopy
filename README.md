# zerocopy.app

Source for [zerocopy.app](https://zerocopy.app) — the "why zero-copy" landing page for ZAP. Single Next.js 15 marketing page; no docs (docs live at [zap-proto.dev](https://zap-proto.dev)).

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
```

## Deploy

`do-sfo3-lux-k8s`, namespace `zerocopy-app`, served through `hanzoai/spa` behind `hanzoai/ingress`. Cloudflare proxy ON for edge cache + TLS.

Image: `ghcr.io/zap-proto/zerocopy:latest`. Companion domains share the same Service via the `zerocopy-app` Ingress: `zerocopy.app`, `www.zerocopy.app`, `zerocopy.pro`, `www.zerocopy.pro`, `zerocopy.tech`, `www.zerocopy.tech`.

## Related

- [zap-proto.io](https://zap-proto.io) — protocol marketing
- [zap-proto.dev](https://zap-proto.dev) — developer portal + SDK docs

## License

MIT
