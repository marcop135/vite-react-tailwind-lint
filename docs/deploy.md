# Deploy

`npm run build` writes a static site to `dist/`. Any static host serves it.

## SPA fallback

Paths without a file behind them must serve `index.html`, so the app can render its own not-found view.

| Host                      | Setup                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| Apache                    | Included: `public/.htaccess` is copied into `dist/`                                        |
| Netlify, Cloudflare Pages | `public/_redirects` with `/* /index.html 200`                                              |
| Vercel                    | `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }` |

## Apache: `public/.htaccess`

- Forces HTTPS and sets HSTS, `nosniff`, frame, referrer and permissions headers.
- Caches `/assets/` (fingerprinted by Vite) for a year, icons and images for a week, HTML not at all.
- Sets a Content Security Policy of `'self'` plus the Matomo host. Replace `https://mt.marcopontili.com` with your analytics host, or remove it with Matomo.

The CSP blocks inline scripts. Load scripts from files, as `public/matomo.js` does; JSON-LD blocks are data and are allowed.

## Included deploy workflow

`.github/workflows/deploy.yml` runs on push to `main`: test, build, upload `dist/` over SFTP (or FTPS), then purge Cloudflare. It needs these repository secrets:

| Secret                                                           | For                             |
| ---------------------------------------------------------------- | ------------------------------- |
| `FTP_HOST`, `FTP_USERNAME_PRODUCTION`, `FTP_PASSWORD_PRODUCTION` | Upload                          |
| `SFTP_PORT`, `SFTP_KNOWN_HOSTS` or `FTPS_HOST`                   | SFTP with a pinned key, or FTPS |
| `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ZONE_ID`                     | Cache purge                     |

The purge targets `vitereact.marcopontili.com`; change the host in the workflow. If you deploy with Netlify, Vercel or Cloudflare Pages, delete the workflow and connect the repo there.

## Sourcemaps

Production builds emit `hidden` sourcemaps: the `.map` files exist for error-tracking uploads, but the JS does not reference them. Delete `dist/**/*.map` before upload if you do not use them.

## Environment variables

`VITE_*` variables are inlined at build time. Set them in the host's build environment or in `.env.production`; changing one needs a rebuild.
