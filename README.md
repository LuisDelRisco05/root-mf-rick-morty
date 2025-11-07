# Root (Microfront Host)

Este proyecto es el "host" que carga microfrontends (MFs) — por ejemplo `mf-characters`.  
Usa Vite + React + Module Federation (via `@originjs/vite-plugin-federation`) para consumir remotes y mostrarlos en la UI principal.

---

## Requisitos

- Node.js >= 18 (recomendado 18+ / 20+)
- npm >= 9 o yarn
- Git

---

## Scripts útiles

```bash
# instalar dependencias
npm install

# desarrollo (servidor Vite en puerto 5000)
npm run dev

# build para producción
npm run build

# preview (sirve la build)
npm run preview

# tests
npm run test

# start (el principal para correr el root)
npm run start

---

puerto por defecto 5000
