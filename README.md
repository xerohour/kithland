# Kithland — GitHub Pages mirror

A creature-keeping RPG on a pocket console that never existed. Plays in the
browser on phones and computers: no install, no account.

- Live mirror: https://xerohour.github.io/kithland/
- Canonical site: https://play.kithland.com/
- © 2026 Alejandro Pacheco

## Port notes

- Static mirror of the `play.kithland.com` release build
  (`__KK_BUILD__` hash `9d6141d0`, built 2026-11-03T10:39:54Z), ported 2026-11-03.
- The game engine is pure JavaScript (no WASM, no SharedArrayBuffer), so GitHub
  Pages hosts it with no special headers.
- All 48 files are byte-identical to the live site, including the service
  worker (`sw.js`, registered with scope `./`) and its precache list. The 25
  `art-*.bin` model files were each verified against the SHA-256 prefix baked
  into their filenames.
- Web workers (`assets/mesh/worker-*.js`) and art packs load from relative
  paths; there are no absolute backend or CDN dependencies in the game code.
- `og:`/canonical meta tags intentionally still point at `play.kithland.com`
  and `kithland.com` (link previews, canonical URL).
- Saves live in the browser's localStorage/IndexedDB per origin, so progress on
  this mirror is separate from progress on play.kithland.com.
