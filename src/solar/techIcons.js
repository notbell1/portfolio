export const techSvgMap = {
  typescript: "/img/svg/typescript.svg",
  javascript: "/img/svg/javascript.svg",
  php: "/img/svg/php.svg",
  python: "/img/svg/python.svg",
  lua: "/img/svg/luau.svg",
  html5: "/img/svg/html5.svg",
  css3: "/img/svg/css3.svg",
  react: "/img/svg/react.svg",
  laravel: "/img/svg/laravel.svg",
  nodejs: "/img/svg/nodejs.svg",
  vite: "/img/svg/vitejs.svg",
  tailwindcss: "/img/svg/tailwind-css.svg",
  bootstrap: "/img/svg/bootstrap.svg",
  mysqli: "/img/svg/mysql.svg",
  postgresql: "/img/svg/postgresql.svg",
  supabase: "/img/svg/supabase.svg",
  vercel: "/img/svg/vercel-line.svg",
  git: "/img/svg/git.svg",
  github: "/img/svg/github.svg",
  wuaze: "/img/svg/wuaze.svg",
  msoffice: "/img/svg/microsoft.svg",
  leaflet: "/img/svg/leaflet.svg",
  vscode_api: "/img/svg/vscode.svg",
  chrome_extension: "/img/svg/baseline-extension.svg",
  cybersecurity: "/img/svg/web-security.svg",
  ui_ux: "/img/svg/figma.svg",
};

export const getTechIconSvg = (techId) => {
  const svgPath = techSvgMap[techId] || techSvgMap.javascript;
  return `<img src="${svgPath}" alt="${techId}" class="w-full h-full object-contain pointer-events-none select-none block" loading="eager" decoding="async" />`;
};
