// Card per Home Assistant di Simonz82: elettrodomestici (lavatrice, asciugatrice, lavastoviglie,
// forno, TV), FritzBox, server Home Assistant, NAS Synology, Proxmox, UPS, energia casa e raccolta
// differenziata. Popup Impostazioni/Statistiche/Grafici presi dai package "Centro Controllo".
// Indipendente da altre card: legge/scrive solo via hass.

const HERO_BUILDERS = {
  dishwasher: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
      <linearGradient id="shch-steel-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f8fb"/><stop offset=".5" stop-color="#dde4ec"/><stop offset="1" stop-color="#aab6c5"/></linearGradient>
      <radialGradient id="shch-cool-${id}" cx=".5" cy=".42" r=".8"><stop offset="0" stop-color="#f0f9ff"/><stop offset=".5" stop-color="#bae6fd"/><stop offset="1" stop-color="#0e3a5c"/></radialGradient>
    </defs>
    <ellipse cx="120" cy="216" rx="70" ry="11" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <rect x="46" y="28" width="148" height="184" rx="14" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="54" y="36" width="132" height="20" rx="7" fill="#eef2f7" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="100" y="41" width="40" height="11" rx="4.23" fill="#0b1526"/>
    <rect x="105" y="45" width="30" height="3" rx="1.5" fill="#155e75"/>
    <circle cx="66" cy="46" r="2.6" fill="#22c55e"/>
    <rect x="56" y="62" width="128" height="128" rx="9" fill="#0c1930"/>
    <rect x="60" y="66" width="120" height="120" rx="7" fill="url(#shch-cool-${id})" opacity=".9"/>
    <rect x="60" y="66" width="120" height="120" rx="7" fill="#082033" opacity=".45"/>
    <g stroke="#9fd8f5" stroke-width="2.4" opacity=".8">
      <path d="M70 96h100M70 92c8-6 92-6 100 0" fill="none"/>
      <path d="M70 148h100M70 144c8-6 92-6 100 0" fill="none"/>
    </g>
    <g fill="#cfeefd" opacity=".85">
      <ellipse cx="94" cy="86" rx="12" ry="9"/><ellipse cx="120" cy="84" rx="11" ry="8"/><ellipse cx="145" cy="86" rx="12" ry="9"/>
      <ellipse cx="100" cy="138" rx="11" ry="8"/><ellipse cx="138" cy="138" rx="11" ry="8"/>
    </g>
    <g class="shch-spin-spray">
      <line x1="94" y1="126" x2="146" y2="126" stroke="#e0f7ff" stroke-width="3" stroke-linecap="round" opacity=".9"/>
      <line x1="120" y1="108" x2="120" y2="144" stroke="#e0f7ff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
      <circle cx="94" cy="126" r="2.2" fill="#8be2ff"/><circle cx="146" cy="126" r="2.2" fill="#8be2ff"/>
      <circle cx="120" cy="108" r="2.2" fill="#8be2ff"/><circle cx="120" cy="144" r="2.2" fill="#8be2ff"/>
    </g>
    <g stroke="#e0f7ff" stroke-linecap="round" fill="none">
      <path d="M120 178c-16-16-24-38-26-58" stroke-width="3.4" opacity=".9"/>
      <path d="M120 178c0-20 0-42 0-60" stroke-width="3.8"/>
      <path d="M120 178c16-16 24-38 26-58" stroke-width="3.4" opacity=".9"/>
      <path d="M120 178c-26-8-38-24-44-40" stroke-width="2.6" opacity=".7"/>
      <path d="M120 178c26-8 38-24 44-40" stroke-width="2.6" opacity=".7"/>
    </g>
    <circle cx="120" cy="178" r="6" fill="#d3e3ef"/>
    <rect x="46" y="196" width="148" height="16" rx="7" fill="#9fadbc"/>
    <rect x="100" y="199" width="40" height="7" rx="3.5" fill="#78899b"/>
  </svg>`,
  dryer: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
      <linearGradient id="shch-steel-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f8fb"/><stop offset=".5" stop-color="#dde4ec"/><stop offset="1" stop-color="#aab6c5"/></linearGradient>
      <radialGradient id="shch-warm-${id}" cx=".5" cy=".42" r=".8"><stop offset="0" stop-color="#fff7ed"/><stop offset=".5" stop-color="#fed7aa"/><stop offset="1" stop-color="#7c2d12"/></radialGradient>
    </defs>
    <ellipse cx="120" cy="216" rx="70" ry="11" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <rect x="46" y="28" width="148" height="184" rx="14" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="54" y="36" width="132" height="20" rx="7" fill="#eef2f7" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="100" y="41" width="40" height="11" rx="4.23" fill="#0b1526"/>
    <rect x="105" y="45" width="30" height="3" rx="1.5" fill="#c2410c"/>
    <circle cx="66" cy="46" r="2.6" fill="#22c55e"/>
    <circle cx="120" cy="132" r="66" fill="#0c1930"/>
    <circle cx="120" cy="132" r="58" fill="url(#shch-warm-${id})" opacity=".9" class="shch-glow"/>
    <circle cx="120" cy="132" r="58" fill="#4a1d0a" opacity=".35"/>
    <circle cx="120" cy="132" r="58" fill="none" stroke="#e7ecf2" stroke-width="5"/>
    <g fill="#ffedd5" opacity=".85" class="shch-spin-drum">
      <ellipse cx="98" cy="112" rx="13" ry="9" transform="rotate(-18 98 112)"/>
      <ellipse cx="140" cy="120" rx="11" ry="8" transform="rotate(14 140 120)"/>
      <ellipse cx="108" cy="152" rx="12" ry="8" transform="rotate(24 108 152)"/>
      <ellipse cx="142" cy="150" rx="10" ry="7" transform="rotate(-10 142 150)"/>
    </g>
    <path d="M84 132a36 36 0 0 1 66-21" stroke="#ffd9a8" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".55"/>
    <rect x="46" y="196" width="148" height="16" rx="7" fill="#9fadbc"/>
    <rect x="100" y="199" width="40" height="7" rx="3.5" fill="#78899b"/>
  </svg>`,
  washer: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
      <linearGradient id="shch-steel-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f8fb"/><stop offset=".5" stop-color="#dde4ec"/><stop offset="1" stop-color="#aab6c5"/></linearGradient>
      <radialGradient id="shch-cool-${id}" cx=".5" cy=".42" r=".8"><stop offset="0" stop-color="#f0f9ff"/><stop offset=".5" stop-color="#bae6fd"/><stop offset="1" stop-color="#0e3a5c"/></radialGradient>
    </defs>
    <ellipse cx="120" cy="216" rx="70" ry="11" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <rect x="46" y="28" width="148" height="184" rx="14" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="54" y="36" width="132" height="20" rx="7" fill="#eef2f7" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="100" y="41" width="40" height="11" rx="4.23" fill="#0b1526"/>
    <rect x="105" y="45" width="30" height="3" rx="1.5" fill="#155e75"/>
    <circle cx="66" cy="46" r="2.6" fill="#22c55e"/>
    <circle cx="120" cy="132" r="66" fill="#0c1930"/>
    <circle cx="120" cy="132" r="58" fill="url(#shch-cool-${id})" opacity=".9"/>
    <circle cx="120" cy="132" r="58" fill="#082033" opacity=".35"/>
    <circle cx="120" cy="132" r="58" fill="none" stroke="#e7ecf2" stroke-width="5"/>
    <g class="shch-spin-drum">
      <path d="M92 148c10 14 46 14 56 0" stroke="#cfeefd" stroke-width="3" stroke-linecap="round" fill="none" opacity=".8"/>
      <path d="M88 132c12 10 52 10 64 0" stroke="#9fd8f5" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".7"/>
      <g fill="#cfeefd" opacity=".8">
        <circle cx="104" cy="110" r="4.5"/><circle cx="122" cy="102" r="3.4"/><circle cx="140" cy="112" r="5.2"/>
      </g>
    </g>
    <rect x="46" y="196" width="148" height="16" rx="7" fill="#9fadbc"/>
    <rect x="100" y="199" width="40" height="7" rx="3.5" fill="#78899b"/>
  </svg>`,
  oven: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
      <linearGradient id="shch-steel-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f8fb"/><stop offset=".5" stop-color="#dde4ec"/><stop offset="1" stop-color="#aab6c5"/></linearGradient>
      <radialGradient id="shch-hot-${id}" cx=".5" cy=".42" r=".8"><stop offset="0" stop-color="#fff1e6"/><stop offset=".5" stop-color="#fca5a5"/><stop offset="1" stop-color="#7f1d1d"/></radialGradient>
    </defs>
    <ellipse cx="120" cy="216" rx="70" ry="11" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <rect x="46" y="28" width="148" height="184" rx="14" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="54" y="36" width="132" height="20" rx="7" fill="#eef2f7" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="100" y="41" width="40" height="11" rx="4.23" fill="#0b1526"/>
    <rect x="105" y="45" width="30" height="3" rx="1.5" fill="#dc2626"/>
    <circle cx="66" cy="46" r="2.6" fill="#22c55e"/>
    <rect x="56" y="62" width="128" height="128" rx="9" fill="#0c1930"/>
    <rect x="60" y="66" width="120" height="120" rx="7" fill="url(#shch-hot-${id})" opacity=".9" class="shch-glow"/>
    <rect x="60" y="66" width="120" height="120" rx="7" fill="#3a0d0d" opacity=".4"/>
    <g stroke="#fecaca" stroke-width="2.6" opacity=".85">
      <path d="M68 100h104M68 154h104" fill="none"/>
    </g>
    <g stroke="#fee2e2" stroke-width="2" opacity=".55">
      <path d="M76 90c8 4 8 12 0 16M92 90c8 4 8 12 0 16M108 90c8 4 8 12 0 16M124 90c8 4 8 12 0 16M140 90c8 4 8 12 0 16M156 90c8 4 8 12 0 16" fill="none"/>
    </g>
    <g class="shch-spin-spit">
      <line x1="70" y1="126" x2="170" y2="126" stroke="#7f1d1d" stroke-width="2" opacity=".6"/>
      <ellipse cx="120" cy="126" rx="24" ry="15" fill="#b45309"/>
      <ellipse cx="120" cy="126" rx="24" ry="15" fill="#78350f" opacity=".35"/>
      <circle cx="105" cy="121" r="2.6" fill="#92400e"/>
      <circle cx="135" cy="130" r="2.2" fill="#92400e"/>
    </g>
    <rect x="46" y="196" width="148" height="16" rx="7" fill="#9fadbc"/>
    <rect x="100" y="199" width="40" height="7" rx="3.5" fill="#78899b"/>
  </svg>`,
  tv: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
      <radialGradient id="shch-screen-${id}" cx=".5" cy=".4" r=".85"><stop offset="0" stop-color="#dbeafe"/><stop offset=".55" stop-color="#818cf8"/><stop offset="1" stop-color="#1e1b4b"/></radialGradient>
    </defs>
    <ellipse cx="120" cy="196" rx="66" ry="10" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <rect x="30" y="46" width="180" height="112" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
    <rect x="40" y="55" width="160" height="94" rx="5" fill="url(#shch-screen-${id})"/>
    <g stroke="#e0e7ff" stroke-linecap="round" opacity=".55">
      <path d="M60 118l26-22 20 14 30-26 30 20" stroke-width="3" fill="none"/>
    </g>
    <circle cx="120" cy="102" r="14" fill="#fef9c3" opacity=".85"/>
    <clipPath id="shch-screen-clip-${id}"><rect x="40" y="55" width="160" height="94" rx="5"/></clipPath>
    <g class="shch-flicker" clip-path="url(#shch-screen-clip-${id})" opacity=".5">
      <rect x="40" y="55" width="34" height="94" fill="#f472b6"/>
      <rect x="82" y="55" width="34" height="94" fill="#facc15"/>
      <rect x="124" y="55" width="34" height="94" fill="#34d399"/>
      <rect x="166" y="55" width="34" height="94" fill="#60a5fa"/>
    </g>
    <rect x="112" y="158" width="16" height="20" fill="#1f2937"/>
    <rect x="76" y="178" width="88" height="10" rx="5" fill="#1f2937"/>
    <circle cx="196" cy="52" r="3" fill="#22c55e"/>
  </svg>`,
  alexa: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="222" rx="72" ry="9" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <image href="/local/foto-pkg/echo-dot.png" x="8" y="8" width="224" height="224" preserveAspectRatio="xMidYMid meet"/>
  </svg>`,
  fritzbox: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="222" rx="80" ry="9" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <g class="shch-glow" opacity=".7" stroke="#38bdf8" stroke-linecap="round" stroke-width="2.6" fill="none">
      <path d="M111 42c3-3 15-3 18 0"/>
      <path d="M103 36c8-7 26-7 34 0"/>
      <path d="M95 30c13-11 37-11 50 0"/>
    </g>
    <circle cx="120" cy="44" r="2.6" fill="#38bdf8"/>
    <image href="/local/foto-pkg/fritz-box.png" x="-44.43" y="1" width="328.86" height="260.82" preserveAspectRatio="xMidYMid meet"/>
  </svg>`,
  server: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="216" rx="66" ry="10" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <image href="/local/foto-pkg/ha_logo.gif" x="21.33" y="16.3" width="197.34" height="197.34" preserveAspectRatio="xMidYMid meet"/>
  </svg>`,
  proxmox: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="216" rx="66" ry="10" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <image href="/local/foto-pkg/proxmox-logo.svg" x="-1" y="10" width="242" height="193.6" preserveAspectRatio="xMidYMid meet"/>
  </svg>`,
  nas: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="222" rx="70" ry="9" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <image href="/local/foto-pkg/synology-ds925.png" x="-1" y="-7" width="242" height="242" preserveAspectRatio="xMidYMid meet"/>
  </svg>`,
  energy: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
      <linearGradient id="shch-steel-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f8fb"/><stop offset=".5" stop-color="#dde4ec"/><stop offset="1" stop-color="#aab6c5"/></linearGradient>
    </defs>
    <ellipse cx="120" cy="222" rx="70" ry="9" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <rect x="40" y="18" width="160" height="204" rx="14" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="58" y="34" width="124" height="56" rx="8" fill="#0c1930"/>
    <text class="shc-e-watt" x="120" y="70" text-anchor="middle" font-size="30" font-weight="900" fill="#38bdf8" font-family="Roboto, sans-serif">0</text>
    <text x="120" y="84" text-anchor="middle" font-size="10" font-weight="800" fill="#94a3b8" letter-spacing="1" font-family="Roboto, sans-serif">WATT ISTANTANEI</text>
    <rect x="54" y="104" width="24" height="32" rx="3" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".5" stroke-width="1"/>
    <circle cx="66" cy="112" r="2.4" fill="#22c55e" class="shch-flicker"/>
    <rect x="81" y="104" width="24" height="32" rx="3" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".5" stroke-width="1"/>
    <circle cx="93" cy="112" r="2.4" fill="#38bdf8" class="shch-flicker" style="animation-delay:.15s"/>
    <rect x="108" y="104" width="24" height="32" rx="3" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".5" stroke-width="1"/>
    <circle cx="120" cy="112" r="2.4" fill="#38bdf8" class="shch-flicker" style="animation-delay:.3s"/>
    <rect x="135" y="104" width="24" height="32" rx="3" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".5" stroke-width="1"/>
    <circle cx="147" cy="112" r="2.4" fill="#38bdf8" class="shch-flicker" style="animation-delay:.45s"/>
    <rect x="162" y="104" width="24" height="32" rx="3" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".5" stroke-width="1"/>
    <circle cx="174" cy="112" r="2.4" fill="#38bdf8" class="shch-flicker" style="animation-delay:.6s"/>
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" fill="#38bdf8" opacity=".85" class="shch-glow" transform="translate(100 150) scale(1.8)"/>
  </svg>`,
  ups: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="222" rx="60" ry="9" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <image href="/local/foto-pkg/apc-ups.png" x="17.15" y="14" width="205.7" height="211.75" preserveAspectRatio="xMidYMid meet"/>
  </svg>`,
  boiler: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
      <linearGradient id="shch-steel-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f8fb"/><stop offset=".5" stop-color="#dde4ec"/><stop offset="1" stop-color="#aab6c5"/></linearGradient>
      <radialGradient id="shch-flame-${id}" cx=".5" cy=".55" r=".65"><stop offset="0" stop-color="#fff7ed"/><stop offset=".45" stop-color="#fb923c"/><stop offset="1" stop-color="#c2410c"/></radialGradient>
    </defs>
    <ellipse cx="120" cy="222" rx="66" ry="10" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <rect x="48" y="18" width="144" height="196" rx="16" fill="url(#shch-steel-${id})" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="60" y="30" width="120" height="18" rx="6" fill="#eef2f7" stroke="#8fa0b3" stroke-opacity=".5" stroke-width="1.2"/>
    <circle cx="70" cy="39" r="3" fill="#22c55e" class="shch-glow"/>
    <rect x="88" y="34" width="70" height="9" rx="3.5" fill="#0b1526"/>
    <circle cx="120" cy="104" r="46" fill="#eef2f7" stroke="#8fa0b3" stroke-opacity=".6" stroke-width="2"/>
    <circle cx="120" cy="104" r="38" fill="#0b1526"/>
    <path d="M120 104 L120 76" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" transform="rotate(35 120 104)"/>
    <circle cx="120" cy="104" r="3" fill="#38bdf8"/>
    <g font-size="7" fill="#94a3b8" font-family="sans-serif" text-anchor="middle">
      <text x="120" y="74">bar</text>
    </g>
    <rect x="66" y="160" width="108" height="40" rx="9" fill="#0c1930"/>
    <rect x="74" y="168" width="92" height="24" rx="6" fill="url(#shch-flame-${id})" opacity=".92" class="shch-glow shch-flicker"/>
    <path d="M120 172c-6 8-10 12-10 18a10 10 0 0 0 20 0c0-4-2-7-4-10 0 4-3 6-5 5-3-1-3-6-1-9-3 1-6 3-6 6z" fill="#fff7ed" opacity=".9"/>
    <rect x="60" y="204" width="10" height="16" rx="3" fill="#9fadbc"/>
    <rect x="170" y="204" width="10" height="16" rx="3" fill="#9fadbc"/>
    <rect x="52" y="216" width="136" height="10" rx="5" fill="#78899b"/>
  </svg>`,
};

const CHIP_SVGS = {
  dishwasher:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="14" y="10" width="68" height="76" rx="9" fill="#0f2942"/><rect x="20" y="16" width="56" height="14" rx="5" fill="#f8fafc"/><circle cx="28" cy="23" r="3" fill="#0ea5e9"/><rect x="20" y="36" width="56" height="41" rx="6" fill="#f8fafc"/><path fill="none" stroke="#0f2942" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M27 49h42M30 64h36M33 49v15M44 49v15M55 49v15M66 49v15"/><path fill="#8be2ff" d="M23 67c9-6 16 5 25-2 8-6 14 4 25-1v10H23Z"/></svg>',
  dryer:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="14" y="10" width="68" height="76" rx="9" fill="#0f2942"/><rect x="20" y="16" width="56" height="14" rx="5" fill="#f8fafc"/><circle cx="28" cy="23" r="3" fill="#f97316"/><circle cx="48" cy="56" r="24" fill="#f8fafc"/><circle cx="48" cy="56" r="19" fill="#fed7aa"/><circle cx="48" cy="56" r="19" fill="none" stroke="#0f2942" stroke-width="3"/><path fill="none" stroke="#0f2942" stroke-width="2.6" stroke-linecap="round" d="M37 56a11 11 0 0 1 20-6.5"/></svg>',
  washer:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="14" y="10" width="68" height="76" rx="9" fill="#0f2942"/><rect x="20" y="16" width="56" height="14" rx="5" fill="#f8fafc"/><circle cx="28" cy="23" r="3" fill="#0ea5e9"/><circle cx="48" cy="56" r="24" fill="#f8fafc"/><circle cx="48" cy="56" r="19" fill="#bae6fd"/><circle cx="48" cy="56" r="19" fill="none" stroke="#0f2942" stroke-width="3"/><path fill="none" stroke="#0f2942" stroke-width="2.6" stroke-linecap="round" d="M39 58c4 6 14 6 18 0"/></svg>',
  oven:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="14" y="10" width="68" height="76" rx="9" fill="#0f2942"/><rect x="20" y="16" width="56" height="14" rx="5" fill="#f8fafc"/><circle cx="28" cy="23" r="3" fill="#ef4444"/><rect x="20" y="36" width="56" height="41" rx="6" fill="#f8fafc"/><path fill="none" stroke="#0f2942" stroke-width="3" stroke-linecap="round" d="M28 51h40M28 63h40"/></svg>',
  boiler:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="14" y="10" width="68" height="76" rx="9" fill="#0f2942"/><circle cx="48" cy="38" r="17" fill="#f8fafc"/><path d="M48 26c-5 7-9 10-9 16a9 9 0 0 0 18 0c0-3-1-6-3-8 0 3-2 5-4 4-2-1-2-5-1-7-3 1-4 3-4 3z" fill="#fb923c"/><rect x="28" y="62" width="40" height="10" rx="4" fill="#38bdf8"/></svg>',
  tv:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="10" y="20" width="76" height="48" rx="6" fill="#0f2942"/><rect x="16" y="26" width="64" height="36" rx="3" fill="#8be2ff"/><rect x="42" y="68" width="12" height="10" fill="#0f2942"/><rect x="30" y="78" width="36" height="6" rx="3" fill="#0f2942"/></svg>',
  fritzbox:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="10" y="34" width="76" height="30" rx="8" fill="#0f2942"/><circle cx="26" cy="49" r="3" fill="#22c55e"/><circle cx="38" cy="49" r="3" fill="#38bdf8"/><circle cx="50" cy="49" r="3" fill="#38bdf8"/><path d="M48 30c-10-10-10-24 0-34" stroke="#38bdf8" stroke-width="3" fill="none" stroke-linecap="round" transform="translate(0 8)"/><path d="M48 30c-4-4-4-10 0-14" stroke="#38bdf8" stroke-width="3" fill="none" stroke-linecap="round" transform="translate(0 8)"/></svg>',
  server:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="14" y="10" width="68" height="76" rx="9" fill="#0f2942"/><rect x="20" y="16" width="56" height="16" rx="4" fill="#0b1526"/><circle cx="28" cy="24" r="2.6" fill="#22c55e"/><circle cx="36" cy="24" r="2.6" fill="#38bdf8"/><rect x="44" y="21.5" width="26" height="5" rx="2.5" fill="#38bdf8" opacity=".6"/><rect x="20" y="36" width="56" height="16" rx="4" fill="#0b1526"/><circle cx="28" cy="44" r="2.6" fill="#22c55e"/><circle cx="36" cy="44" r="2.6" fill="#38bdf8"/><rect x="44" y="41.5" width="26" height="5" rx="2.5" fill="#38bdf8" opacity=".6"/><rect x="20" y="56" width="56" height="16" rx="4" fill="#0b1526"/><circle cx="28" cy="64" r="2.6" fill="#22c55e"/><circle cx="36" cy="64" r="2.6" fill="#38bdf8"/><rect x="44" y="61.5" width="26" height="5" rx="2.5" fill="#38bdf8" opacity=".6"/></svg>',
  nas:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="30" y="8" width="36" height="80" rx="6" fill="#0f2942"/><rect x="36" y="16" width="24" height="10" rx="2" fill="#0b1526"/><circle cx="42" cy="21" r="2" fill="#22c55e"/><rect x="36" y="30" width="24" height="10" rx="2" fill="#0b1526"/><circle cx="42" cy="35" r="2" fill="#38bdf8"/><rect x="36" y="44" width="24" height="10" rx="2" fill="#0b1526"/><circle cx="42" cy="49" r="2" fill="#38bdf8"/><rect x="36" y="58" width="24" height="10" rx="2" fill="#0b1526"/><circle cx="42" cy="63" r="2" fill="#38bdf8"/></svg>',
  energy:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="14" y="10" width="68" height="76" rx="9" fill="#0f2942"/><path d="M52 22 30 54h14l-2 20 26-34H54l-2-18z" fill="#38bdf8"/></svg>',
  ups:
    '<svg viewBox="0 0 96 96" width="27" height="27"><rect x="24" y="8" width="48" height="80" rx="8" fill="#0f2942"/><rect x="34" y="20" width="28" height="46" rx="4" fill="none" stroke="#8be2ff" stroke-width="3"/><rect x="38" y="26" width="20" height="34" rx="2" fill="#38bdf8"/><circle cx="48" cy="76" r="3" fill="#22c55e"/></svg>',
  garbage:
    '<svg viewBox="0 0 96 96" width="27" height="27"><path fill="#0f2942" d="M30 30h36l-4 50a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6l-4-50z"/><rect x="26" y="22" width="44" height="8" rx="3" fill="#0f2942"/><rect x="40" y="12" width="16" height="8" rx="2" fill="#0f2942"/><path fill="#22c55e" d="M48 38c-5 4-8 8-8 12a8 8 0 0 0 16 0c0-2-.5-4-1.5-6 0 2-1.5 3.5-3 3-1.5-.5-1.5-3.5-.5-5.5-2 .5-3 1.5-3 1.5z"/></svg>',
};

const ICON_GEAR =
  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>';
const ICON_CHART =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="5" y1="20" x2="5" y2="12"/><line x1="12" y1="20" x2="12" y2="5"/><line x1="19" y1="20" x2="19" y2="9"/></svg>';
const ICON_GRAPH =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3,17 9,11 13,15 21,6"/><polyline points="15,6 21,6 21,12"/></svg>';
const ICON_TYPES =
  '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="8" y1="18" x2="14" y2="18"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/><path d="M17 20l4-4 1 1-4 4h-1z"/></svg>';
const ICON_CLOSE =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>';
const ICON_RESTART =
  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>';
const ICON_BELL =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>';
const ICON_NOTIFCENTER =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h3l4 4V6l-4 4H4a1 1 0 0 0-1 1z"/><path d="M16 8a5 5 0 0 1 0 8"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>';
const ICON_SPEED =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l3-3"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>';
const ICON_BOLT =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>';
const ICON_FLAG =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V4"/><path d="M4 4h11l-2 4 2 4H4"/></svg>';
const ICON_TIMER =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2"/><path d="M9 2h6"/></svg>';
const ICON_EURO =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 6.5a6.5 6.5 0 1 0 0 11"/><path d="M5.5 10h9"/><path d="M5.5 14h8"/></svg>';
const ICON_GLOBE =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/></svg>';
const ICON_DOWNLOAD =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13"/><path d="M6 11l6 6 6-6"/><path d="M4 21h16"/></svg>';
const ICON_UPLOAD =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V8"/><path d="M6 13l6-6 6 6"/><path d="M4 21h16"/></svg>';
const ICON_TAG =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 12.6 12 21.2 2.8 12 11.4 3.4H20.6z"/><circle cx="16.3" cy="7.7" r="1.15" fill="currentColor" stroke="none"/></svg>';
const ICON_SHIELD =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3z"/></svg>';
const ICON_BOX =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>';
const ICON_TREND =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 6h6v6"/></svg>';
const ICON_PULSE =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 7 4-14 2 7h6"/></svg>';
const ICON_BATTERY =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 10v4"/><path d="M6 10v4"/></svg>';
const ICON_PLUG =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v5"/><path d="M15 2v5"/><path d="M6 7h12v4a6 6 0 0 1-12 0V7z"/><path d="M12 17v5"/></svg>';
const ICON_CUBE =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7.6 12 12l8.7-4.4"/><path d="M12 22V12"/></svg>';
const ICON_MONITOR =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>';
const ICON_ALERT =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4"/><circle cx="12" cy="17.5" r=".2" fill="currentColor"/></svg>';
const ICON_SAVE =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M7 3v5h9V3"/><path d="M7 21v-8h10v8"/></svg>';
const ICON_CALENDAR =
  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>';
const ICON_BACK =
  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
const ICON_MEGAPHONE =
  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l3.5 4.5V5.5L6 10H4a1 1 0 0 0-1 1z"/><path d="M13 8a3 3 0 0 1 0 8"/><path d="M16 5.5a6.5 6.5 0 0 1 0 13"/></svg>';

// Icone per le righe "gruppo" del dialog Impostazioni (stile vecchia card).
const SETTINGS_GROUP_ICONS = {
  report: ICON_CHART,
  notifiche: ICON_BELL,
  update: ICON_DOWNLOAD,
  alert: ICON_ALERT,
  backup: ICON_SAVE,
  restart: ICON_RESTART,
  euro: ICON_EURO,
};

const WEEKDAY_FULL_IT = ["Domenica", "Luned\u00ec", "Marted\u00ec", "Mercoled\u00ec", "Gioved\u00ec", "Venerd\u00ec", "Sabato"];
const WEEKDAY_ABBR_IT = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];

const DEFAULT_STATE_MAP = {
  run: { mode: "running", label: "IN FUNZIONE" },
  delayedstart: { mode: "standby", label: "AVVIO RITARDATO" },
  pause: { mode: "standby", label: "IN PAUSA" },
  actionrequired: { mode: "standby", label: "AZIONE RICHIESTA" },
  finished: { mode: "off", label: "TERMINATO" },
  ready: { mode: "off", label: "PRONTA" },
  inactive: { mode: "off", label: "SPENTA" },
  error: { mode: "unavailable", label: "ERRORE" },
  aborting: { mode: "standby", label: "INTERRUZIONE" },
};

const STYLE = `
:host{display:block;--shc-blue:#0ea5e9;--shc-blue-deep:#0369a1;--shc-dim:var(--secondary-text-color,#64748b);--shc-card:var(--card-background-color,#ffffff);--shc-border:var(--divider-color,#e6ecf4);--shc-soft:rgba(148,163,184,.10);--shc-text:var(--primary-text-color,#0f172a)}
.shc-ap-card{position:relative;display:flex;flex-direction:column;border:1px solid var(--shc-border);border-radius:22px;background:var(--shc-card);box-shadow:0 12px 30px rgba(15,23,42,.06);overflow:hidden}
.shc-ap-card.is-run{border-color:rgba(34,197,94,.28)}
.shc-ap-card.has-alarm{border-color:rgba(239,68,68,.4)}
.shc-ap-top{display:flex;align-items:center;gap:7px;padding:12px 12px 9px}
.shc-ap-chip{width:34px;height:34px;flex:0 0 34px;display:grid;place-items:center;border-radius:11px;background:#eff6ff;box-shadow:inset 0 0 0 1px rgba(59,130,246,.10)}
.shc-ap-chip svg{width:27px;height:27px}
.shc-ap-headings{display:flex;flex-direction:column;min-width:0;flex:1;gap:1px}
.shc-ap-name{font-size:14.5px;font-weight:900;letter-spacing:-.2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--shc-text)}
.shc-ap-room{font-size:11px;font-weight:750;color:var(--shc-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.shc-ap-badge{display:inline-flex;align-items:center;gap:4px;flex:0 0 auto;padding:4px 7px;border-radius:999px;font-size:9.5px;font-weight:900;letter-spacing:.4px;text-transform:uppercase;white-space:nowrap}
.shc-ap-badge.run{background:#dcfce7;color:#15803d}
.shc-ap-badge.standby{background:#dbeafe;color:#2563eb}
.shc-ap-badge.off{background:#f1f5f9;color:#64748b}
.shc-ap-badge.unavailable{background:#fee2e2;color:#b91c1c}
[data-theme-dark] .shc-ap-badge.off,:host-context([data-theme="dark"]) .shc-ap-badge.off{background:rgba(148,163,184,.16);color:#94a3b8}
.shc-ap-dot{width:7px;height:7px;border-radius:50%;background:currentColor}
.shc-ap-tools{display:flex;gap:4px;flex:0 0 auto}
.shc-ap-tool{width:37px;height:37px;display:grid;place-items:center;border:1px solid var(--shc-border);border-radius:11px;background:var(--shc-card);color:var(--shc-dim);cursor:pointer}
.shc-ap-tool[hidden]{display:none}
.shc-ap-tool svg{width:19px;height:19px}
.shc-ap-tool:hover{border-color:#bae6fd;color:var(--shc-blue-deep)}
.shc-ap-top-row{display:flex;align-items:stretch;gap:10px;margin:0 13px}
.shc-ap-hero{position:relative;flex:1 1 50%;min-width:0;display:grid;place-items:center;height:182px;margin:0;border-radius:18px;background:radial-gradient(120% 90% at 50% 8%,rgba(224,242,254,.65),rgba(241,245,249,.35) 60%,transparent);overflow:hidden}
.shc-ap-card.is-run .shc-ap-hero{background:radial-gradient(120% 90% at 50% 8%,rgba(186,230,253,.85),rgba(224,242,254,.35) 62%,transparent)}
.shc-ap-hero svg{width:100%;height:100%;display:block}
.shc-ap-card.is-off .shc-ap-hero,.shc-ap-card.is-unavailable .shc-ap-hero{filter:grayscale(.55) opacity(.62)}
.shc-ap-card.is-standby .shc-ap-hero{filter:saturate(.85)}
@keyframes shch-spin{to{transform:rotate(360deg)}}
@keyframes shch-glow{0%,100%{opacity:.55}50%{opacity:1}}
@keyframes shch-flicker{0%,100%{opacity:.85}30%{opacity:.5}55%{opacity:1}80%{opacity:.6}}
.shch-spin-drum,.shch-spin-spray,.shch-spin-spit{transform-box:view-box;transform-origin:120px 130px}
/* Layout "centrato" della card energia: foto al centro in alto, sotto il blocco OGGI su 2 colonne */
.shc-ap-card.layout-centrato .shc-ap-top-row{flex-direction:column;align-items:stretch;gap:10px}
.shc-ap-card.layout-centrato .shc-ap-hero{flex:0 0 auto;width:100%;height:200px}
.shc-ap-card.layout-centrato .shc-ap-cycle-side{flex:0 0 auto}
.shc-ap-card.layout-centrato .shc-ap-cycle-cap{margin-bottom:10px}
.shc-ap-card.layout-centrato .shc-ap-cycle-list{display:grid;grid-template-columns:1fr 1fr;gap:6px 8px;flex:0 0 auto}
.shc-ap-card.layout-centrato.shc-e-card .shc-ap-cycle-list{grid-template-columns:2fr 3fr}
.shc-ap-card.layout-centrato .shc-ap-cycle-list>.shc-ap-cycle-row:last-child:nth-child(odd){grid-column:1/-1}
.shc-ap-select{max-width:62%;padding:7px 10px;border-radius:10px;border:1px solid var(--shc-border);background:var(--shc-card);color:var(--shc-text);font-size:14px;font-weight:600;font-family:inherit}
.shc-ap-card.is-run .shch-spin-drum{animation:shch-spin 2.6s linear infinite}
.shc-ap-card.is-run .shch-spin-spray{animation:shch-spin 1.3s linear infinite}
.shc-ap-card.is-run .shch-spin-spit{animation:shch-spin 3.4s linear infinite}
.shc-ap-card.is-run .shch-glow{animation:shch-glow 1.7s ease-in-out infinite}
.shc-ap-card.is-run .shch-flicker{animation:shch-flicker 1.5s ease-in-out infinite}
.shc-ap-cycle-side{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;padding:11px 13px;border-radius:16px;background:var(--shc-soft)}
.shc-ap-cycle-cap{display:flex;align-items:center;gap:6px;margin-top:-3px;margin-bottom:15px;font-size:11px;font-weight:900;letter-spacing:1.4px;text-transform:uppercase;color:var(--shc-dim)}
.shc-ap-cycle-list{display:flex;flex-direction:column;flex:1;justify-content:flex-start;gap:4px}
.shc-ap-cycle-row{display:flex;align-items:baseline;justify-content:space-between;gap:8px;min-width:0}
.shc-ap-cycle-row small{flex:0 0 auto;font-size:10.5px;font-weight:900;letter-spacing:.7px;text-transform:uppercase;color:var(--shc-dim)}
.shc-ap-cycle-row b{min-width:0;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13.5px;font-weight:400;letter-spacing:-.1px;color:var(--shc-text)}
.shc-ap-cycle-row b.shc-e-top{display:flex;justify-content:flex-end;overflow:hidden;text-overflow:clip}
.shc-e-top-n{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.shc-e-top-w{flex:0 0 auto;white-space:nowrap}
.shc-ap-cycle-row-b{padding:4px 8px;border-radius:9px;border:1px solid var(--shc-border);background:var(--shc-card);align-items:center}
.shc-ap-cycle-label{display:flex;align-items:center;gap:5px;min-width:0;flex:0 0 auto}
.shc-ap-cycle-ic{display:flex;align-items:center;flex:0 0 auto;color:var(--shc-blue)}
.shc-ap-panel{display:flex;align-items:center;gap:14px;margin:10px 13px 13px;padding:13px 14px;border-radius:16px;background:var(--shc-soft)}
.shc-ap-meters{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px}
.shc-c-meter-clickable{cursor:pointer;border-radius:8px;transition:background .12s ease}
.shc-c-meter-clickable:active{background:rgba(148,163,184,.18)}
.shc-ap-meter-row{display:flex;align-items:baseline;justify-content:space-between;gap:10px}
.shc-ap-meter-row span{font-size:13px;font-weight:750;color:var(--shc-dim)}
.shc-ap-meter-row strong{font-size:16px;font-weight:950;letter-spacing:-.2px;color:var(--shc-text)}
.shc-ap-bar{position:relative;display:flex;align-items:center;height:8px;margin-top:7px}
.shc-ap-bar::before{content:"";position:absolute;inset:0;border-radius:999px;background:rgba(148,163,184,.22)}
.shc-ap-bar i{position:relative;z-index:1;display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#fb923c,#ef4444);min-width:0;transition:width .6s cubic-bezier(.4,0,.2,1)}
.shc-ap-bar i.shc-ap-progress-bar{background:linear-gradient(90deg,#4ade80,#16a34a)}
.shc-ap-power-open{cursor:pointer}
.shc-ap-power-open:hover{filter:brightness(1.04)}
.shc-ap-chart-svg{width:100%;height:100px;display:block}
.shc-ap-chart-svg.shc-e-chart-tall{height:200px}
.shc-ap-chart-labels{display:flex;justify-content:space-between;margin-top:4px;font-size:10px;font-weight:800;color:var(--shc-dim)}
.shc-ap-chart-labels span{flex:1;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.shc-ap-chart-empty{padding:20px;text-align:center;font-size:13px;font-weight:700;color:var(--shc-dim)}
.shc-ap-chart-loading{padding:20px;text-align:center;font-size:13px;font-weight:700;color:var(--shc-dim)}
.shc-ap-warn{display:flex;align-items:center;gap:6px;margin:0 13px 12px;padding:9px 12px;border-radius:13px;background:#fee2e2;color:#b91c1c;font-size:13px;font-weight:800}
.shc-ap-warn[hidden]{display:none}
.shc-test-flag{position:absolute;top:10px;right:10px;z-index:2;font-size:11px;font-weight:900;letter-spacing:.5px;text-transform:uppercase;color:#0369a1;background:rgba(14,165,233,.14);border-radius:8px;padding:4px 8px}

.shc-ap-overlay{position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.55);display:flex;align-items:center;justify-content:center;padding:18px;backdrop-filter:blur(6px)}
.shc-ap-overlay[hidden]{display:none}
.shc-ap-dialog{width:min(440px,100%);max-height:min(84vh,720px);overflow:auto;background:var(--shc-card);color:var(--shc-text);border:1px solid var(--shc-border);border-radius:22px;box-shadow:0 24px 70px rgba(15,23,42,.3)}
.shc-ap-dialog-head{position:sticky;top:0;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 16px 10px;background:var(--shc-card);border-bottom:1px solid var(--shc-border);z-index:1}
.shc-ap-dialog-head h3{margin:0;font-size:17px;font-weight:900}
.shc-ap-dialog-close{width:30px;height:30px;flex:0 0 auto;display:grid;place-items:center;border:0;border-radius:10px;background:var(--shc-soft);color:var(--shc-dim);cursor:pointer}
.shc-ap-dialog-body{padding:12px 16px 18px;display:flex;flex-direction:column;gap:16px}
.shc-ap-sec-cap{font-size:11.5px;font-weight:900;letter-spacing:1px;text-transform:uppercase;color:var(--shc-blue-deep);margin:0 0 8px;padding-bottom:5px;border-bottom:2px solid var(--shc-border)}
.shc-ap-sec{display:flex;flex-direction:column;gap:6px}
.shc-ap-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 11px;border-radius:13px;background:var(--shc-soft)}
.shc-ap-row-label{font-size:14.5px;font-weight:750;color:var(--shc-text)}
.shc-ap-row-val{font-size:14.5px;font-weight:500;color:var(--shc-dim)}
.shc-ap-switch{position:relative;width:38px;height:22px;flex:0 0 auto;border-radius:999px;border:0;background:#cbd5e1;cursor:pointer;transition:background .15s ease}
.shc-ap-switch::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;transition:transform .15s ease;box-shadow:0 1px 3px rgba(0,0,0,.3)}
.shc-ap-switch.on{background:#22c55e}
.shc-ap-row-group{display:flex;flex-direction:column;gap:9px;padding:10px 12px;border-radius:13px;background:var(--shc-soft)}
.shc-ap-row-group-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.shc-ap-row-group-label{display:flex;align-items:center;gap:8px;min-width:0;font-size:14.5px;font-weight:750;color:var(--shc-text)}
.shc-ap-row-group-ic{flex:0 0 auto;display:flex;align-items:center;color:var(--shc-blue)}
.shc-ap-row-chips{display:flex;flex-wrap:wrap;gap:6px}
.shc-ap-chip{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:800;letter-spacing:.2px;padding:5px 10px;border-radius:999px;background:var(--shc-card);border:1px solid var(--shc-border);color:var(--shc-dim);cursor:pointer;line-height:1}
.shc-ap-chip svg{flex:0 0 auto}
.shc-ap-chip b{color:var(--shc-text);font-weight:800}
.shc-ap-chip.on{background:#dcfce7;border-color:#86efac;color:#15803d}
.shc-ap-chip-action{background:var(--shc-blue);border-color:var(--shc-blue);color:#fff}
.shc-ap-sub-back{display:flex;align-items:center;gap:5px;font-size:12.5px;font-weight:800;color:var(--shc-blue);cursor:pointer;margin:0 0 10px}
.shc-ap-switch.on::after{transform:translateX(16px)}
.shc-ap-action-btn{flex:0 0 auto;border:0;border-radius:10px;padding:0 14px;height:26px;background:var(--shc-blue);color:#fff;font-size:13px;font-weight:850;cursor:pointer}
.shc-ap-action-btn:active{filter:brightness(.92)}
.shc-ap-stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.shc-ap-stat-grid.cols4{grid-template-columns:repeat(4,1fr)}
.shc-ap-stat{display:flex;flex-direction:column;gap:2px;padding:9px 10px;border-radius:13px;background:var(--shc-soft)}
.shc-ap-stat small{font-size:10px;font-weight:900;letter-spacing:.6px;text-transform:uppercase;color:var(--shc-dim)}
.shc-ap-stat b{font-size:15px;font-weight:900;color:var(--shc-text)}
.shc-ap-week-list{display:flex;flex-direction:column;gap:7px}
.shc-ap-week-row{display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--shc-border)}
.shc-ap-week-row:last-child{border-bottom:0}
.shc-ap-week-day{flex:0 0 60px;font-size:13px;font-weight:850;color:var(--shc-text)}
.shc-ap-week-stats{flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:4px;min-width:0}
.shc-ap-week-stats.cols3{grid-template-columns:repeat(3,1fr)}
.shc-ap-week-stats.cols2{grid-template-columns:repeat(2,1fr)}
.shc-ap-week-stat{display:flex;flex-direction:column;align-items:center;gap:0;min-width:0}
.shc-ap-week-stat small{font-size:9px;font-weight:900;letter-spacing:.4px;text-transform:uppercase;color:var(--shc-dim)}
.shc-ap-week-stat b{font-size:13px;font-weight:850;color:var(--shc-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}
.shc-ap-hero{cursor:pointer}
.shc-ap-reset-btn{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;padding:10px;border:0;border-radius:13px;background:var(--shc-blue);color:#fff;font-size:14px;font-weight:850;cursor:pointer}
.shc-ap-reset-note{font-size:12px;color:var(--shc-dim);text-align:center;margin-top:4px}

.shc-gc-dialog{width:min(780px,100%);max-height:94vh;overflow:auto;padding:20px 22px 22px;background:var(--shc-card);color:var(--shc-text);border:1px solid var(--shc-border);border-top:3px solid var(--shc-blue);border-radius:26px;box-shadow:0 32px 64px -28px rgba(2,6,23,.55),0 6px 18px -12px rgba(2,6,23,.3)}
.shc-gc-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-bottom:14px;border-bottom:1px solid var(--shc-border)}
.shc-gc-title{margin:0;font-size:20px;font-weight:900;letter-spacing:.8px;text-transform:uppercase;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.shc-gc-close{flex:0 0 auto;border:1px solid var(--shc-border);border-radius:999px;padding:8px 14px;background:var(--shc-soft);color:var(--shc-dim);font:inherit;font-size:11px;font-weight:900;letter-spacing:1px;text-transform:uppercase;cursor:pointer}
.shc-gc-tabs{display:flex;gap:4px;margin:16px 0 10px;padding:6px;border-radius:999px;background:var(--shc-soft);border:1px solid var(--shc-border)}
.shc-gc-tab{flex:1 1 0;min-width:0;border:0;border-radius:999px;padding:9px 6px;background:transparent;color:var(--shc-dim);font:inherit;font-size:12px;font-weight:900;letter-spacing:1px;text-transform:uppercase;white-space:nowrap;cursor:pointer}
.shc-gc-tab.on{background:linear-gradient(135deg,#0c4a6e,#075985);color:#7dd3fc;box-shadow:0 4px 12px rgba(14,165,233,.25)}
.shc-gc-custom{display:flex;flex-wrap:wrap;align-items:flex-end;gap:10px;margin:0 0 10px;padding:12px;border-radius:16px;background:var(--shc-soft)}
.shc-gc-custom label{display:flex;flex-direction:column;gap:4px;flex:1 1 170px;min-width:0}
.shc-gc-custom label span{font-size:10.5px;font-weight:900;letter-spacing:1px;text-transform:uppercase;color:var(--shc-dim)}
.shc-gc-custom input{width:100%;box-sizing:border-box;padding:9px 10px;border-radius:11px;border:1px solid var(--shc-border);background:var(--shc-card);color:var(--shc-text);font:inherit;font-size:14px;color-scheme:light dark}
.shc-gc-apply{flex:0 0 auto;border:0;border-radius:11px;padding:0 18px;height:38px;background:var(--shc-blue);color:#fff;font:inherit;font-size:13px;font-weight:900;cursor:pointer}
.shc-gc-msg{flex:1 0 100%;color:#ef4444;font-weight:800;font-size:12px}
.shc-gc-msg:empty{display:none}
.shc-gc-custom[hidden],.shc-gc-cross[hidden],.shc-gc-tip[hidden],.shc-gc-chips[hidden]{display:none}
.shc-gc-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px}
.shc-gc-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--shc-border);border-radius:999px;padding:6px 11px;background:var(--shc-card);color:var(--shc-dim);font:inherit;font-size:12px;font-weight:800;cursor:pointer}
.shc-gc-chip i{width:9px;height:9px;border-radius:50%;background:var(--c);opacity:.35}
.shc-gc-chip.on{color:var(--shc-text);border-color:var(--c)}
.shc-gc-chip.on i{opacity:1}
.shc-gc-plot{position:relative;min-height:290px}
.shc-gc-svgwrap{width:100%}
.shc-gc-svg{display:block;max-width:100%;touch-action:pan-y;cursor:crosshair}
.shc-gc-grid{stroke:var(--shc-border);stroke-width:1;stroke-dasharray:2 4}
.shc-gc-ax{font-size:11px;font-weight:700;fill:var(--shc-dim)}
.shc-gc-cross{stroke:var(--shc-dim);stroke-width:1;stroke-dasharray:3 3}
.shc-gc-loading{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:var(--shc-dim);background:color-mix(in srgb,var(--shc-card) 70%,transparent)}
.shc-gc-tip{position:absolute;z-index:3;pointer-events:none;padding:8px 11px;border-radius:12px;background:var(--shc-card);border:1px solid var(--shc-border);box-shadow:0 8px 22px rgba(2,6,23,.3);font-size:12.5px;line-height:1.45;white-space:nowrap}
.shc-gc-tip i{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}
.shc-gc-tip-t{font-size:11px;font-weight:800;color:var(--shc-dim);margin-bottom:2px}
.shc-gc-sum{display:flex;flex-direction:column;gap:3px;margin-top:10px;font-size:12.5px;color:var(--shc-dim);text-align:center}
.shc-gc-sum b{color:var(--shc-text);font-weight:800}
@media (max-width:600px){
  .shc-gc-ov{align-items:flex-end}
  .shc-gc-dialog{width:100%;max-width:100%;min-height:62vh;max-height:94vh;padding:16px 14px 18px;border-radius:24px 24px 0 0}
  .shc-gc-title{font-size:16px}
  .shc-gc-tab{font-size:11px;letter-spacing:.4px;padding:9px 2px}
  .shc-ap-tool{width:33px;height:33px}
}

.shc-gt-help{margin:0 0 10px;font-size:13.5px;line-height:1.45;color:var(--shc-dim)}
.shc-gt-help b{color:var(--shc-text)}
.shc-gt-example{margin:0 0 10px;padding:10px 12px;border-radius:13px;background:var(--shc-soft);border-left:3px solid var(--shc-blue);font-size:13px;line-height:1.6;color:var(--shc-dim)}
.shc-gt-example b{color:var(--shc-text)}
.shc-gt-input{width:100%;box-sizing:border-box;padding:11px 12px;border-radius:13px;border:1px solid var(--shc-border);background:var(--shc-soft);color:var(--shc-text);font:inherit;font-size:15px;resize:vertical}
.shc-gt-count{text-align:right;font-size:11px;font-weight:800;color:var(--shc-dim);margin-top:3px}
.shc-gt-preview{display:flex;flex-wrap:wrap;gap:6px}
.shc-gt-chip{padding:6px 11px;border-radius:999px;background:var(--shc-soft);border:1px solid var(--shc-border);font-size:13.5px;font-weight:700}
@media (max-width:600px){
  .shc-ap-overlay{align-items:flex-end;padding:0;backdrop-filter:blur(4px)}
  .shc-ap-dialog{width:100%;max-width:100%;height:94vh;max-height:94vh;border-radius:22px 22px 0 0;display:flex;flex-direction:column}
  .shc-ap-dialog-body{flex:1}
}
.shc-notif-range{-webkit-appearance:none;appearance:none;width:100%;height:8px;border-radius:999px;margin:7px 0 0;background:var(--shc-border);outline:none;cursor:pointer}
.shc-notif-range::-webkit-slider-runnable-track{height:8px;border-radius:999px;background:transparent}
.shc-notif-range::-webkit-slider-thumb{-webkit-appearance:none;width:15px;height:15px;margin-top:-3.5px;border-radius:50%;background:#fff;border:3px solid var(--shc-blue);box-shadow:0 1px 3px rgba(0,0,0,.35);cursor:pointer}
.shc-notif-range::-moz-range-track{height:8px;border-radius:999px;background:transparent}
.shc-notif-range::-moz-range-thumb{width:15px;height:15px;border:3px solid var(--shc-blue);border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.35);cursor:pointer}
.shc-notif-times{display:flex;align-items:center;gap:6px}
.shc-notif-time{border:0;background:transparent;color:var(--shc-blue);font:inherit;font-size:13px;font-weight:850;padding:0;text-align:right;width:100px}
.shc-notif-times b{color:var(--shc-dim);font-weight:700}
`;

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function meterSeverityColor(pct) {
  if (pct >= 85) return "#ef4444";
  if (pct >= 70) return "#f97316";
  if (pct >= 50) return "#eab308";
  if (pct >= 30) return "#22c55e";
  return "#38bdf8";
}

// Inverso di meterSeverityColor: per grandezze dove ALTO e' un bene (es.
// carica batteria) invece che un problema (es. carico/CPU/disco).
function inverseSeverityColor(pct) {
  if (pct <= 15) return "#ef4444";
  if (pct <= 30) return "#f97316";
  if (pct <= 60) return "#eab308";
  return "#22c55e";
}

// Layout della card: "classico" (foto a sinistra, info a destra) oppure "centrato" (foto in alto
// al centro, info su 2 colonne, poi le barre). Si sceglie dalle Impostazioni della card con
// "layout_entity" (un input_select Classico/Centrato); senza, vale il parametro "layout".
function applyLayoutChoice(root, cfg, hass) {
  const card = root && root.querySelector(".shc-ap-card");
  if (!card) return;
  let layout = cfg.layout;
  if (cfg.layout_entity) {
    const v = String(hass.states[cfg.layout_entity]?.state || "").toLowerCase();
    if (v === "classico" || v === "centrato") layout = v;
  }
  card.classList.toggle("layout-centrato", layout === "centrato");
}

// -----------------------------------------------------------------------
// Popup "Grafici" condiviso da tutte le card: periodi 24h / 7gg / 30gg e
// "Da ... a" (date a scelta), grafico SVG che si ridisegna alla larghezza
// disponibile (piu' grande su PC, piu' stretto su smartphone), con tooltip
// al passaggio del mouse / tocco. Nessuna libreria esterna: dati dalla
// cronologia (24h) e dalle statistiche a lungo termine (7gg, 30gg, date).
//   shcOpenChartPopup(card, { title, series: [{ entity, label, color, unit }] })
// Piu' serie con la stessa unita' si sovrappongono (chip per accenderle).
// -----------------------------------------------------------------------
const GC_RANGES = [
  { key: "24h", label: "24 h", ms: 24 * 3600e3 },
  { key: "7d", label: "7 gg", ms: 7 * 86400e3 },
  { key: "30d", label: "30 gg", ms: 30 * 86400e3 },
];

function gcFmt(v, unit) {
  if (!Number.isFinite(v)) return "—";
  const a = Math.abs(v);
  const s = v.toLocaleString("it-IT", { maximumFractionDigits: a >= 100 ? 0 : a >= 10 ? 1 : 2 });
  return unit ? `${s} ${unit}` : s;
}

function gcNiceTicks(min, max, n) {
  const span = max - min || 1;
  const raw = span / n;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const f = raw / p;
  const step = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
  const lo = Math.floor(min / step) * step;
  const hi = Math.ceil(max / step) * step;
  const ticks = [];
  for (let v = lo; v <= hi + step / 2; v += step) ticks.push(Math.round(v / step) * step);
  return ticks;
}

// Sensori "istantanei" (potenza, corrente, banda): si tiene il PICCO di ogni intervallo, la media
// appiattirebbe i picchi (es. 2100 W di una resistenza diventano 400 W di media oraria).
function gcIsPeak(unit) {
  return /^(k?W|A|mA|Mbit\/s|kbit\/s|Mbps)$/i.test(String(unit || "").trim());
}

function gcDownsample(pts, start, end, target, peak) {
  if (pts.length <= target) return pts;
  const bucket = (end - start) / target;
  const out = [];
  let i = 0;
  while (i < pts.length) {
    const b = Math.floor((pts[i].t - start) / bucket);
    let sum = 0;
    let n = 0;
    let mx = -Infinity;
    let j = i;
    while (j < pts.length && Math.floor((pts[j].t - start) / bucket) === b) {
      sum += pts[j].y;
      if (pts[j].y > mx) mx = pts[j].y;
      n++;
      j++;
    }
    out.push({ t: start + (b + 0.5) * bucket, y: peak ? mx : sum / n });
    i = j;
  }
  return out;
}

async function gcFetch(hass, entityId, start, end, unit) {
  const span = end - start;
  const peak = gcIsPeak(unit);
  const iso = (ms) => new Date(ms).toISOString();
  const history = async () => {
    const res = await hass.connection.sendMessagePromise({
      type: "history/history_during_period",
      start_time: iso(start),
      end_time: iso(end),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
    });
    const pts = (res?.[entityId] || [])
      .map((r) => ({ t: (r.lu || r.last_updated_ts) * 1000 || new Date(r.last_updated).getTime(), y: Number(r.s ?? r.state) }))
      .filter((p) => Number.isFinite(p.y) && Number.isFinite(p.t));
    // Il valore resta quello dell'ultimo cambio fino ad adesso: la linea arriva fino alla fine del periodo.
    if (pts.length && pts[pts.length - 1].t < end - 60e3) pts.push({ t: end, y: pts[pts.length - 1].y });
    return gcDownsample(pts, start, end, span > 26 * 3600e3 ? 520 : 360, peak);
  };
  // Fino a 8 giorni si usano i dati reali della cronologia (picchi veri); oltre, o se la cronologia
  // e' stata eliminata dal database, le statistiche a lungo termine (massimo orario per la potenza).
  if (span <= 8 * 86400e3) {
    try {
      const pts = await history();
      if (pts.length > 1) return pts;
    } catch (e) {
      /* si passa alle statistiche */
    }
  }
  if (span > 26 * 3600e3) {
    try {
      const res = await hass.connection.sendMessagePromise({
        type: "recorder/statistics_during_period",
        start_time: iso(start),
        end_time: iso(end),
        statistic_ids: [entityId],
        period: span > 45 * 86400e3 ? "day" : "hour",
      });
      const pts = (res?.[entityId] || [])
        .map((r) => ({ t: new Date(r.start).getTime(), y: Number((peak ? r.max : r.mean) ?? r.mean ?? r.max ?? r.state) }))
        .filter((p) => Number.isFinite(p.y) && Number.isFinite(p.t));
      if (pts.length) return gcDownsample(pts, start, end, 400, peak);
    } catch (e) {
      /* nessun dato */
    }
  }
  return span <= 8 * 86400e3 ? [] : history();
}

function gcToLocalInput(ms) {
  const d = new Date(ms - new Date(ms).getTimezoneOffset() * 60000);
  return d.toISOString().slice(0, 16);
}

// -----------------------------------------------------------------------
// "Storici automatici": per chi installa la card da HACS, senza scrivere un
// package YAML a mano. Due parti:
//  1) shcCreateEnergyHelper / shcCreateCostHelper: creano i due helper nativi di
//     HA (integrazione Riemann per il kWh, input_number per il costo) con le
//     stesse chiamate che userebbe l'interfaccia "Impostazioni > Dispositivi e
//     servizi > Helper" - solo automatizzate. Girano nel browser di chi
//     installa la card, con i SUOI permessi hass: nessuna dipendenza da me.
//  2) shcComputeAutoPeriods: legge le statistiche a lungo termine gia' salvate
//     da HA per quel sensore energia (campo "change" = consumo del periodo,
//     nessun bisogno di cycle_sensor/utility_meter/week_rows scritti a mano).
// -----------------------------------------------------------------------
async function shcCreateHelperFlow(hass, handler, data) {
  const flow = await hass.callApi("POST", "config/config_entries/flow", { handler, show_advanced_options: false });
  const result = await hass.callApi("POST", `config/config_entries/flow/${flow.flow_id}`, data);
  if (result.type !== "create_entry") {
    throw new Error(result.errors ? JSON.stringify(result.errors) : `Impossibile creare l'helper (${handler}).`);
  }
  const entryId = result.result?.entry_id;
  // L'entita' non compare nel registro nello stesso istante: si aspetta un attimo, riprovando.
  for (let i = 0; i < 20; i++) {
    const entities = await hass.callWS({ type: "config/entity_registry/list" });
    const found = entities.find((e) => e.config_entry_id === entryId);
    if (found) return found.entity_id;
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error("Helper creato ma non trovo ancora la sua entita': riprova tra poco (Impostazioni > Dispositivi e servizi > Helper).");
}

async function shcCreateEnergyHelper(hass, { name, sourceEntity, round = 2 }) {
  return shcCreateHelperFlow(hass, "integration", {
    name,
    unit_time: "h",
    source: sourceEntity,
    method: "trapezoidal",
    round,
    unit_prefix: "k",
  });
}

async function shcCreateCostHelper(hass, { name, initial = 0.25 }) {
  const result = await hass.callWS({
    type: "input_number/create",
    name,
    min: 0,
    max: 2,
    step: 0.01,
    unit_of_measurement: "€/kWh",
    initial,
  });
  return `input_number.${result.id}`;
}

async function shcComputeAutoPeriods(hass, energyEntity, costPerKwh) {
  const now = new Date();
  const iso = (d) => d.toISOString();
  const sumChange = async (start, end, period) => {
    if (end <= start) return 0;
    const res = await hass.connection.sendMessagePromise({
      type: "recorder/statistics_during_period",
      start_time: iso(start),
      end_time: iso(end),
      statistic_ids: [energyEntity],
      period,
      types: ["change"],
    });
    return (res?.[energyEntity] || []).reduce((sum, r) => sum + (Number(r.change) || 0), 0);
  };
  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const today0 = startOfDay(now);
  const yesterday0 = new Date(today0);
  yesterday0.setDate(yesterday0.getDate() - 1);
  const month0 = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthPrev0 = new Date(month0);
  monthPrev0.setMonth(monthPrev0.getMonth() - 1);
  const year0 = new Date(now.getFullYear(), 0, 1);
  const yearPrev0 = new Date(year0);
  yearPrev0.setFullYear(yearPrev0.getFullYear() - 1);

  const [today, yesterday, month, monthPrev, year, yearPrev] = await Promise.all([
    sumChange(today0, now, "hour"),
    sumChange(yesterday0, today0, "hour"),
    sumChange(month0, now, "day"),
    sumChange(monthPrev0, month0, "day"),
    sumChange(year0, now, "month"),
    sumChange(yearPrev0, year0, "month"),
  ]);
  const mk = (kwh) => ({ kwh, cost: Number.isFinite(costPerKwh) ? kwh * costPerKwh : null });
  return { today: mk(today), yesterday: mk(yesterday), month: mk(month), month_prev: mk(monthPrev), year: mk(year), year_prev: mk(yearPrev) };
}

function shcBindGraph(card) {
  const b = card._root.querySelector(".shc-ap-graph");
  if (!b) return;
  b.addEventListener("click", (e) => {
    e.stopPropagation();
    shcOpenChartPopup(card, { title: card._config.name, series: card._graphSeries() });
  });
}

function shcOpenChartPopup(card, opts) {
  const root = card._root;
  const hass = () => card._hass;
  const series = (opts.series || [])
    .filter((s) => s.entity)
    .map((s) => ({
      ...s,
      label: s.label || hass()?.states[s.entity]?.attributes?.friendly_name || s.entity,
      unit: s.unit ?? hass()?.states[s.entity]?.attributes?.unit_of_measurement ?? "",
      color: s.color || "#0ea5e9",
      pts: [],
    }));
  if (!series.length) return;

  root.querySelectorAll(".shc-gc-ov").forEach((n) => n.remove());
  const ov = document.createElement("div");
  ov.className = "shc-ap-overlay shc-gc-ov";
  ov.innerHTML = `<div class="shc-gc-dialog">
    <div class="shc-gc-head"><h3 class="shc-gc-title">${esc(opts.title || series[0].label)}</h3>
      <button type="button" class="shc-gc-close">✕ Chiudi</button></div>
    <div class="shc-gc-tabs">${GC_RANGES.map((r) => `<button type="button" class="shc-gc-tab" data-range="${r.key}">${r.label}</button>`).join("")}<button type="button" class="shc-gc-tab" data-range="custom">Da … a</button></div>
    <div class="shc-gc-custom" hidden>
      <label><span>Da</span><input type="datetime-local" class="shc-gc-from"></label>
      <label><span>A</span><input type="datetime-local" class="shc-gc-to"></label>
      <button type="button" class="shc-gc-apply">Applica</button>
      <small class="shc-gc-msg"></small>
    </div>
    <div class="shc-gc-chips"></div>
    <div class="shc-gc-plot"><div class="shc-gc-loading">Caricamento…</div><div class="shc-gc-svgwrap"></div><div class="shc-gc-tip" hidden></div></div>
    <div class="shc-gc-sum"></div>
  </div>`;
  root.appendChild(ov);
  const q = (s) => ov.querySelector(s);
  const close = () => {
    if (ro) ro.disconnect();
    ov.remove();
  };
  ov.addEventListener("click", (e) => {
    if (e.target === ov) close();
  });
  q(".shc-gc-close").addEventListener("click", close);

  const st = { range: "24h", start: 0, end: 0, active: new Set([Math.min(Math.max(opts.active || 0, 0), series.length - 1)]) };
  let ro = null;

  const chipsEl = q(".shc-gc-chips");
  const drawChips = () => {
    if (series.length < 2) {
      chipsEl.hidden = true;
      return;
    }
    chipsEl.innerHTML = series
      .map((s, i) => `<button type="button" class="shc-gc-chip${st.active.has(i) ? " on" : ""}" data-i="${i}" style="--c:${s.color}"><i></i>${esc(s.label)}</button>`)
      .join("");
  };
  chipsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".shc-gc-chip");
    if (!b) return;
    const i = Number(b.dataset.i);
    const same = [...st.active].every((k) => series[k].unit === series[i].unit);
    if (!same) st.active = new Set([i]);
    else if (st.active.has(i)) {
      if (st.active.size > 1) st.active.delete(i);
    } else st.active.add(i);
    drawChips();
    render();
  });

  const fmtX = (ms, span) => {
    const d = new Date(ms);
    if (span <= 26 * 3600e3) return d.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    if (span <= 4 * 86400e3) return d.toLocaleString("it-IT", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    if (span <= 8 * 86400e3) return d.toLocaleDateString("it-IT", { weekday: "short", day: "numeric" });
    return d.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
  };

  const wrap = q(".shc-gc-svgwrap");
  const tip = q(".shc-gc-tip");
  let geo = null;

  function render() {
    const act = [...st.active].map((i) => series[i]);
    const W = Math.max(260, Math.floor(wrap.clientWidth || q(".shc-gc-plot").clientWidth || 600));
    const H = W < 520 ? Math.round(Math.min(420, Math.max(290, (window.innerHeight || 700) * 0.42))) : 360;
    const all = act.flatMap((s) => s.pts.map((p) => p.y));
    if (!all.length) {
      wrap.innerHTML = `<div class="shc-ap-chart-empty" style="height:${H}px;display:grid;place-items:center">Nessun dato nel periodo</div>`;
      q(".shc-gc-sum").innerHTML = "";
      geo = null;
      return;
    }
    const unit = act[0].unit;
    let lo = Math.min(...all);
    let hi = Math.max(...all);
    const isPct = unit === "%";
    const isTemp = /°/.test(unit);
    if (isPct) {
      lo = 0;
      hi = 100;
    } else if (isTemp) {
      const pad = Math.max(1, (hi - lo) * 0.15);
      lo -= pad;
      hi += pad;
    } else {
      lo = Math.min(0, lo);
      if (hi - lo < 1) hi = lo + (gcIsPeak(unit) ? 10 : 1);
    }
    const ticks = isPct ? [0, 25, 50, 75, 100] : gcNiceTicks(lo, hi, W < 520 ? 4 : 5);
    const yMin = ticks[0];
    const yMax = ticks[ticks.length - 1] || 1;
    const labW = Math.max(...ticks.map((t) => gcFmt(t).length)) * 6.6 + 12;
    const m = { l: labW, r: 10, t: 12, b: 26 };
    const pw = W - m.l - m.r;
    const ph = H - m.t - m.b;
    const X = (t) => m.l + ((t - st.start) / (st.end - st.start)) * pw;
    const Y = (v) => m.t + ph - ((v - yMin) / (yMax - yMin || 1)) * ph;
    const span = st.end - st.start;
    const nx = W < 520 ? 4 : 6;
    let g = "";
    ticks.forEach((t) => {
      g += `<line x1="${m.l}" y1="${Y(t).toFixed(1)}" x2="${W - m.r}" y2="${Y(t).toFixed(1)}" class="shc-gc-grid"/>
        <text x="${m.l - 6}" y="${(Y(t) + 3.5).toFixed(1)}" text-anchor="end" class="shc-gc-ax">${gcFmt(t)}</text>`;
    });
    for (let i = 0; i < nx; i++) {
      const t = st.start + (span * i) / (nx - 1);
      const anchor = i === 0 ? "start" : i === nx - 1 ? "end" : "middle";
      g += `<text x="${X(t).toFixed(1)}" y="${H - 7}" text-anchor="${anchor}" class="shc-gc-ax">${fmtX(t, span)}</text>`;
    }
    let defs = "";
    let body = "";
    act.forEach((s, k) => {
      if (!s.pts.length) return;
      const gid = `gc${k}${Math.random().toString(36).slice(2, 6)}`;
      // A gradini: il valore resta quello dell'ultimo cambio fino al successivo (come lo stato reale).
      const stepped = [];
      s.pts.forEach((p, i) => {
        if (i > 0) stepped.push([p.t, s.pts[i - 1].y]);
        stepped.push([p.t, p.y]);
      });
      const line = stepped.map(([t, y]) => `${X(t).toFixed(1)},${Y(y).toFixed(1)}`);
      const first = X(s.pts[0].t).toFixed(1);
      const last = X(s.pts[s.pts.length - 1].t).toFixed(1);
      defs += `<linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s.color}" stop-opacity="${act.length > 1 ? 0.18 : 0.42}"/><stop offset="1" stop-color="${s.color}" stop-opacity="0.02"/></linearGradient>`;
      body += `<polygon points="${first},${Y(yMin).toFixed(1)} ${line.join(" ")} ${last},${Y(yMin).toFixed(1)}" fill="url(#${gid})"/>
        <polyline points="${line.join(" ")}" fill="none" stroke="${s.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    });
    wrap.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" class="shc-gc-svg"><defs>${defs}</defs>${g}${body}
      <line class="shc-gc-cross" x1="0" y1="${m.t}" x2="0" y2="${m.t + ph}" hidden/></svg>`;
    geo = { W, H, m, X, Y, act, pw, ph };

    const s0 = act[0];
    const vals = s0.pts.map((p) => p.y);
    const avg = vals.reduce((a, b) => a + b, 0) / (vals.length || 1);
    q(".shc-gc-sum").innerHTML = act
      .map((s) => {
        const v = s.pts.map((p) => p.y);
        if (!v.length) return "";
        const a = v.reduce((x, y) => x + y, 0) / v.length;
        return `<span class="shc-gc-sumrow"><b style="color:${s.color}">${act.length > 1 ? esc(s.label) + " · " : ""}</b>Min <b>${gcFmt(Math.min(...v), s.unit)}</b> · Media <b>${gcFmt(a, s.unit)}</b> · Max <b>${gcFmt(Math.max(...v), s.unit)}</b></span>`;
      })
      .join("");
    void avg;
  }

  const onMove = (ev) => {
    if (!geo) return;
    const svg = wrap.querySelector("svg");
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const px = ((ev.clientX - rect.left) / rect.width) * geo.W;
    if (px < geo.m.l || px > geo.W - geo.m.r) {
      tip.hidden = true;
      return;
    }
    const tms = st.start + ((px - geo.m.l) / geo.pw) * (st.end - st.start);
    const rows = geo.act
      .map((s) => {
        if (!s.pts.length) return null;
        let best = s.pts[0];
        for (const p of s.pts) {
          if (p.t <= tms) best = p;
          else break;
        }
        return { s, p: best };
      })
      .filter(Boolean);
    if (!rows.length) return;
    const cx = px;
    const cross = svg.querySelector(".shc-gc-cross");
    cross.setAttribute("x1", cx);
    cross.setAttribute("x2", cx);
    cross.removeAttribute("hidden");
    svg.querySelectorAll(".shc-gc-dot").forEach((n) => n.remove());
    rows.forEach((r) => {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("class", "shc-gc-dot");
      c.setAttribute("cx", px);
      c.setAttribute("cy", geo.Y(r.p.y));
      c.setAttribute("r", 4);
      c.setAttribute("fill", r.s.color);
      svg.appendChild(c);
    });
    const when = new Date(tms).toLocaleString("it-IT", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    tip.innerHTML = `<div class="shc-gc-tip-t">${when}</div>${rows
      .map((r) => `<div><i style="background:${r.s.color}"></i>${geo.act.length > 1 ? esc(r.s.label) + ": " : ""}<b>${gcFmt(r.p.y, r.s.unit)}</b></div>`)
      .join("")}`;
    tip.hidden = false;
    const plot = q(".shc-gc-plot").getBoundingClientRect();
    let left = ev.clientX - plot.left + 14;
    if (left + tip.offsetWidth > plot.width - 4) left = ev.clientX - plot.left - tip.offsetWidth - 14;
    tip.style.left = `${Math.max(4, left)}px`;
    tip.style.top = `${Math.max(4, ev.clientY - plot.top - 10 - tip.offsetHeight / 2)}px`;
  };
  wrap.addEventListener("pointermove", onMove);
  wrap.addEventListener("pointerdown", onMove);
  wrap.addEventListener("pointerleave", () => {
    tip.hidden = true;
    const c = wrap.querySelector(".shc-gc-cross");
    if (c) c.setAttribute("hidden", "");
    wrap.querySelectorAll(".shc-gc-dot").forEach((n) => n.remove());
  });

  let token = 0;
  async function load() {
    const my = ++token;
    q(".shc-gc-loading").style.display = "flex";
    try {
      const idx = [...st.active];
      const need = series.map((_, i) => i).filter((i) => idx.includes(i) && !series[i]._key?.startsWith(`${st.start}|${st.end}`));
      await Promise.all(
        need.map(async (i) => {
          series[i].pts = await gcFetch(hass(), series[i].entity, st.start, st.end, series[i].unit);
          series[i]._key = `${st.start}|${st.end}`;
        }),
      );
    } catch (e) {
      if (my === token) wrap.innerHTML = `<div class="shc-ap-chart-empty">Errore caricamento dati</div>`;
      q(".shc-gc-loading").style.display = "none";
      return;
    }
    if (my !== token) return;
    q(".shc-gc-loading").style.display = "none";
    render();
  }

  // Le serie accese dopo un cambio di periodo vanno ricaricate: si invalida la cache e si ricarica.
  const origRender = render;
  render = function () {
    const missing = [...st.active].some((i) => series[i]._key !== `${st.start}|${st.end}`);
    if (missing) load();
    else origRender();
  };

  function setRange(key) {
    st.range = key;
    ov.querySelectorAll(".shc-gc-tab").forEach((b) => b.classList.toggle("on", b.dataset.range === key));
    const custom = q(".shc-gc-custom");
    if (key === "custom") {
      custom.hidden = false;
      if (!q(".shc-gc-from").value) {
        q(".shc-gc-from").value = gcToLocalInput(Date.now() - 3 * 86400e3);
        q(".shc-gc-to").value = gcToLocalInput(Date.now());
      }
      return;
    }
    custom.hidden = true;
    const r = GC_RANGES.find((x) => x.key === key);
    st.end = Date.now();
    st.start = st.end - r.ms;
    render();
  }
  ov.querySelectorAll(".shc-gc-tab").forEach((b) => b.addEventListener("click", () => setRange(b.dataset.range)));
  q(".shc-gc-apply").addEventListener("click", () => {
    const a = new Date(q(".shc-gc-from").value).getTime();
    const b = new Date(q(".shc-gc-to").value).getTime();
    const msg = q(".shc-gc-msg");
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      msg.textContent = "Scegli entrambe le date";
      return;
    }
    if (b <= a) {
      msg.textContent = "La data finale deve essere dopo quella iniziale";
      return;
    }
    if (b - a > 400 * 86400e3) {
      msg.textContent = "Massimo 400 giorni";
      return;
    }
    msg.textContent = "";
    st.start = a;
    st.end = Math.min(b, Date.now());
    st.range = "custom";
    render();
  });

  drawChips();
  let lastW = 0;
  ro = typeof ResizeObserver === "function" ? new ResizeObserver(() => {
    const w = wrap.clientWidth;
    if (geo && w && w !== lastW) {
      lastW = w;
      origRender();
    }
  }) : null;
  if (ro) ro.observe(q(".shc-gc-plot"));
  setRange("24h");
}

class ShcApplianceCloneCard extends HTMLElement {
  setConfig(config) {
    if (!config.power_entity) throw new Error("power_entity \u00e8 obbligatorio");
    this._config = {
      name: "Elettrodomestico",
      artwork: "dishwasher",
      threshold_run: 5,
      threshold_standby: 1,
      max_power: 2200,
      label: "",
      state_map: DEFAULT_STATE_MAP,
      settings_sections: [],
      warn_entities: [],
      period_labels: {
        today: "Oggi",
        yesterday: "Ieri",
        month: "Mese",
        month_prev: "Mese Precedente",
        year: "Anno",
        year_prev: "Anno Precedente",
      },
      ...config,
    };
    this._activePeriod = "today";
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._heroId = "dw" + Math.random().toString(36).slice(2, 8);
    const hero = (HERO_BUILDERS[this._config.artwork] || HERO_BUILDERS.dishwasher)(this._heroId);
    const chip = CHIP_SVGS[this._config.artwork] || CHIP_SVGS.dishwasher;
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card">
        ${this._config.label ? `<span class="shc-test-flag">${esc(this._config.label)}</span>` : ""}
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${chip}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
            <span class="shc-ap-room" hidden></span>
          </span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-notif-center" title="Centro Notifiche" hidden>${ICON_NOTIFCENTER}</button>
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Impostazioni">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Statistiche" hidden>${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-ap-consumi" title="Consumi">${ICON_BOLT}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero">${hero}</div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Ultimo ciclo</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_FLAG}</span><small>Fine</small></span><b class="shc-c-end">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TIMER}</span><small>Durata</small></span><b class="shc-c-duration">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BOLT}</span><small>Consumo</small></span><b class="shc-c-energy">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_EURO}</span><small>Costo</small></span><b class="shc-c-cost">\u2014</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel shc-ap-power-open" role="button" tabindex="0">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>${esc(this._config.power_label || "Potenza attuale")}</span><strong class="shc-ap-power-val">0 W</strong></div>
              <div class="shc-ap-bar"><i style="width:0%"></i></div>
            </div>
            ${
              this._config.live?.progress_entity
                ? `<div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Avanzamento programma</span><strong class="shc-ap-progress-val">\u2014</strong></div>
              <div class="shc-ap-bar"><i class="shc-ap-progress-bar" style="width:0%"></i></div>
            </div>`
                : ""
            }
          </div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);
    if (this._config.room) {
      const room = this._root.querySelector(".shc-ap-room");
      room.hidden = false;
      room.textContent = this._config.room;
    }
    // Pulsante "Centro Notifiche": compare solo se configuri notif_center_path (facoltativo,
    // pensato per chi centralizza le impostazioni di piu' card in un'unica pagina condivisa -
    // senza, il pulsante resta nascosto invece di puntare a una pagina che non esiste).
    const notifBtn = this._root.querySelector(".shc-ap-notif-center");
    if (this._config.notif_center_path) {
      notifBtn.hidden = false;
      notifBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        history.pushState(null, "", this._config.notif_center_path);
        window.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true }));
      });
    }
    this._root.querySelector(".shc-ap-settings").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openSettings();
    });
    this._root.querySelector(".shc-ap-stats").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-ap-consumi").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openConsumi();
    });
    const heroEl = this._root.querySelector(".shc-ap-hero");
    if (heroEl) {
      heroEl.addEventListener("click", (e) => {
        e.stopPropagation();
        this._openWeek();
      });
    }
    const powerEl = this._root.querySelector(".shc-ap-power-open");
    if (powerEl) {
      powerEl.addEventListener("click", (e) => {
        e.stopPropagation();
        shcOpenChartPopup(this, { title: this._config.name, series: this._graphSeries() });
      });
    }
  }

  _fireMoreInfo(entityId) {
    const e = new Event("hass-more-info", { bubbles: true, composed: true });
    e.detail = { entityId };
    this.dispatchEvent(e);
  }

  _openDialog(title, bodyHtml) {
    let overlay = this._root.querySelector(".shc-ap-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      // Menu a tendina delle impostazioni (righe input_select): la scelta viene applicata subito.
      overlay.addEventListener("change", (e) => {
        const t = e.target;
        if (t && t.dataset && t.dataset.selectEntity && this._hass) {
          this._hass.callService("input_select", "select_option", { entity_id: t.dataset.selectEntity, option: t.value });
        }
      });
      this._root.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.hidden = false;
    return overlay;
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _settingsRowHtml(hass, row) {
    const st = hass.states[row.entity];
    if (!st) return this._row(row.label, `<span class="shc-ap-row-val">n/d</span>`);
    const domain = row.entity.split(".")[0];
    if (["input_boolean", "automation", "switch"].includes(domain)) {
      const on = st.state === "on";
      return this._row(
        row.label,
        `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.entity)}" aria-pressed="${on}"></button>`,
      );
    }
    if (domain === "input_select") {
      const opts = (st.attributes?.options || [])
        .map((o) => `<option value="${esc(o)}"${o === st.state ? " selected" : ""}>${esc(o)}</option>`)
        .join("");
      return this._row(row.label, `<select class="shc-ap-select" data-select-entity="${esc(row.entity)}">${opts}</select>`);
    }
    const unit = st.attributes?.unit_of_measurement || "";
    return `<div class="shc-ap-row" data-open-entity="${esc(row.entity)}" style="cursor:pointer">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <span class="shc-ap-row-val">${esc(st.state)}${unit ? " " + esc(unit) : ""}</span>
    </div>`;
  }

  _openSettings() {
    const hass = this._hass;
    const sections = (this._config.settings_sections || [])
      .map(
        (sec) => `<div class="shc-ap-sec">
          <div class="shc-ap-sec-cap">${esc(sec.title)}</div>
          ${sec.rows.map((row) => this._settingsRowHtml(hass, row)).join("")}
        </div>`,
      )
      .join("");

    const resetBtn = this._config.reset_script
      ? `<div class="shc-ap-sec">
           <div class="shc-ap-sec-cap">Manutenzione</div>
           <button type="button" class="shc-ap-reset-btn" data-reset-script="${esc(this._config.reset_script)}">${ICON_RESTART} Reset contatori</button>
           ${this._config.reset_date_entity ? `<div class="shc-ap-reset-note">Ultimo reset: ${esc(hass.states[this._config.reset_date_entity]?.state || "\u2014")}</div>` : ""}
         </div>`
      : "";

    const overlay = this._openDialog("Impostazioni", `${sections}${resetBtn}`);

    overlay.querySelectorAll("[data-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const entity = btn.dataset.entity;
        const domain = entity.split(".")[0];
        hass.callService(domain, "toggle", { entity_id: entity });
        setTimeout(() => this._openSettings(), 200);
      });
    });
    overlay.querySelectorAll("[data-open-entity]").forEach((row) => {
      row.addEventListener("click", () => this._fireMoreInfo(row.dataset.openEntity));
    });
    const reset = overlay.querySelector("[data-reset-script]");
    if (reset) {
      reset.addEventListener("click", () => {
        hass.callService("script", "turn_on", { entity_id: reset.dataset.resetScript });
        overlay.hidden = true;
      });
    }
  }

  _fmtNum(v, digits = 1) {
    const n = Number(v);
    return Number.isFinite(n) ? n.toFixed(digits) : "\u2014";
  }

  _cycleAttr(hass, key) {
    const cfg = this._config;
    if (!cfg.cycle_sensor || !cfg.cycle_attrs?.[key]) return null;
    const st = hass.states[cfg.cycle_sensor];
    return st ? st.attributes?.[cfg.cycle_attrs[key]] : null;
  }

  _renderPeriodRow(hass, periodKey) {
    const cfg = this._config;
    const st = cfg.cycle_sensor ? hass.states[cfg.cycle_sensor] : null;
    const attrs = st?.attributes || {};
    const pAttrs = cfg.period_attrs?.[periodKey] || {};
    const s = cfg.stats || {};
    // "ieri"/"mese precedente"/"anno precedente" non sono entita' separate: sono
    // l'attributo "last_period" che i contatori utility_meter (cicli_oggi/mese/anno)
    // popolano da soli al rollover del periodo - stesso dato che usava la vecchia card.
    const CYCLE_SOURCE = {
      today: [s.cycles_today, null],
      yesterday: [s.cycles_today, "last_period"],
      month: [s.cycles_month, null],
      month_prev: [s.cycles_month, "last_period"],
      year: [s.cycles_year, null],
      year_prev: [s.cycles_year, "last_period"],
    };
    const [cyclesEnt, cyclesAttr] = CYCLE_SOURCE[periodKey] || [null, null];
    const cyclesSt = cyclesEnt ? hass.states[cyclesEnt] : null;
    const cycles = cyclesSt ? (cyclesAttr ? (cyclesSt.attributes?.[cyclesAttr] ?? "\u2014") : cyclesSt.state) : "\u2014";
    const time = pAttrs.time ? attrs[pAttrs.time] ?? "\u2014" : "\u2014";
    const cost = pAttrs.cost ? attrs[pAttrs.cost] : null;
    const costTxt = Number.isFinite(Number(cost)) ? `${Number(cost).toFixed(2)} \u20ac` : "\u2014";
    const label = cfg.period_labels[periodKey] || periodKey;
    return `<div class="shc-ap-week-row">
      <div class="shc-ap-week-day">${esc(label)}</div>
      <div class="shc-ap-week-stats cols3">
        <div class="shc-ap-week-stat"><small>Cicli</small><b>${esc(cycles)}</b></div>
        <div class="shc-ap-week-stat"><small>Tempo</small><b>${esc(time)}</b></div>
        <div class="shc-ap-week-stat"><small>Costo</small><b>${costTxt}</b></div>
      </div>
    </div>`;
  }

  _openStats() {
    const hass = this._hass;
    const live = this._config.live || {};

    let liveHtml = "";
    if (live.state_entity) {
      const raw = hass.states[live.state_entity]?.state;
      const mapped = this._config.state_map[raw];
      liveHtml += this._row("Stato apparecchio", `<span class="shc-ap-row-val">${esc(mapped?.label || raw || "n/d")}</span>`);
    }
    if (live.progress_entity) {
      const st = hass.states[live.progress_entity];
      const val = st && st.state !== "unavailable" && st.state !== "unknown" ? `${st.state}%` : "n/d";
      liveHtml += this._row("Avanzamento programma", `<span class="shc-ap-row-val">${esc(val)}</span>`);
    }
    if (live.remaining_entity) {
      const st = hass.states[live.remaining_entity];
      const val = st && st.state !== "unavailable" && st.state !== "unknown" ? new Date(st.state).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : "n/d";
      liveHtml += this._row("Fine prevista", `<span class="shc-ap-row-val">${esc(val)}</span>`);
    }
    if (live.salt_entity) {
      const st = hass.states[live.salt_entity]?.state;
      liveHtml += this._row("Sale", `<span class="shc-ap-row-val">${st === "off" ? "OK" : "In esaurimento"}</span>`);
    }
    if (live.rinse_entity) {
      const st = hass.states[live.rinse_entity]?.state;
      liveHtml += this._row("Brillantante", `<span class="shc-ap-row-val">${st === "off" ? "OK" : "In esaurimento"}</span>`);
    }
    // Righe extra generiche per apparecchi con sensori/attributi che non
    // rientrano nei campi fissi sopra (es. fase ciclo di un'asciugatrice,
    // blocco bambini, volume/sorgente di una TV...).
    (live.extra || []).forEach((row) => {
      const st = hass.states[row.entity];
      if (!st) return;
      const raw = row.attribute ? st.attributes?.[row.attribute] : st.state;
      let val;
      if (raw === undefined || raw === null || raw === "") {
        val = "n/d";
      } else if (row.value_map) {
        val = row.value_map[raw] ?? row.fallback_label ?? raw;
      } else if (row.boolean) {
        val = raw === (row.on_state ?? "on") ? row.on_label || "Attivo" : row.off_label || "OK";
      } else if (row.format === "percent") {
        const n = Number(raw);
        val = Number.isFinite(n) ? `${Math.round(n * 100)}%` : "n/d";
      } else if (row.format === "time") {
        const d = new Date(raw);
        val = Number.isFinite(d.getTime()) ? d.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : raw;
      } else {
        val = row.unit ? `${raw}${row.unit}` : raw;
      }
      liveHtml += this._row(row.label, `<span class="shc-ap-row-val">${esc(val)}</span>`);
    });

    this._openDialog("Statistiche", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">In tempo reale</div>${liveHtml}</div>
    `);
  }

  // Consumi per periodo + istogrammi mese/anno: pulsante "Consumi" (fulmine), separato da
  // "Statistiche" (stato live) cosi' ogni pulsante ha un solo scopo, stesso posto su tutte le
  // card che misurano energia (NAS, Proxmox, elettrodomestici).
  _openConsumi() {
    // "Storici automatici" (auto_stats + energy_stat_entity, impostati dall'editor visuale):
    // consumi per periodo calcolati dalle statistiche HA, alternativa a period_attrs/cycle_sensor
    // scritti a mano nel package. Se la card ha gia' una configurazione avanzata (period_attrs),
    // quella resta quella che si vede - questo percorso non la sostituisce mai da solo.
    const useAutoStats = !!(this._config.auto_stats && this._config.energy_stat_entity);

    this._openDialog("Consumi", `
      ${useAutoStats ? this._autoConsumiHtml() : this._consumiHtml()}
      ${this._energyBarsHtml()}
    `);
    const overlay = this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov)");
    this._loadEnergyBars(overlay);
    if (useAutoStats) this._loadAutoPeriods(overlay);
  }

  // Le caselle "week_rows" sono 7 contenitori fissi per nome del giorno
  // (Lunedi..Domenica), riscritti dal package uno alla volta quando quel
  // giorno della settimana si conclude - non una finestra "ultimi 7 giorni"
  // gia' in ordine. Qui li riordiniamo partendo da ieri e andando indietro,
  // cosi' l'elenco corrisponde davvero agli ultimi 7 giorni di calendario
  // (se oggi e' venerdi: giovedi, mercoledi, ... venerdi scorso), con la
  // data accanto per togliere ogni ambiguita'.
  _orderedWeekRows() {
    const rows = this._config.week_rows || [];
    const byDay = {};
    rows.forEach((r) => {
      byDay[r.day] = r;
    });
    const today = new Date();
    const ordered = [];
    for (let i = 1; i <= 7; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dow = d.getDay();
      const row = byDay[WEEKDAY_FULL_IT[dow]];
      if (!row) continue;
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      ordered.push({ ...row, _label: `${WEEKDAY_ABBR_IT[dow]} ${dd}/${mm}` });
    }
    return ordered;
  }

  // Consumi per periodo (oggi, ieri, mese, anno...) + giorni della settimana: usati sia da
  // "Statistiche" (barrette) sia dal tocco sull'immagine.
  _consumiHtml() {
    const hass = this._hass;
    const periods = Object.keys(this._config.period_attrs || {});
    const periodRows = periods.map((p) => this._renderPeriodRow(hass, p)).join("");

    const rows = this._orderedWeekRows();
    const body = rows
      .map((row) => {
        const cicli = hass.states[row.cicli]?.state ?? "\u2014";
        const tempo = hass.states[row.tempo]?.state ?? "\u2014";
        const consumoNum = Number(hass.states[row.consumo]?.state);
        const consumo = Number.isFinite(consumoNum) ? `${consumoNum.toFixed(2)} kWh` : "\u2014";
        const costoNum = Number(hass.states[row.costo]?.state);
        const costo = Number.isFinite(costoNum) ? `${costoNum.toFixed(2)} \u20ac` : "\u2014";
        return `<div class="shc-ap-week-row">
          <div class="shc-ap-week-day">${esc(row._label)}</div>
          <div class="shc-ap-week-stats">
            <div class="shc-ap-week-stat"><small>Cicli</small><b>${esc(cicli)}</b></div>
            <div class="shc-ap-week-stat"><small>Tempo</small><b>${esc(tempo)}</b></div>
            <div class="shc-ap-week-stat"><small>Consumo</small><b>${consumo}</b></div>
            <div class="shc-ap-week-stat"><small>Costo</small><b>${costo}</b></div>
          </div>
        </div>`;
      })
      .join("");

    return `
      ${periodRows ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Consumi per periodo</div><div class="shc-ap-week-list">${periodRows}</div></div>` : ""}
      <div class="shc-ap-sec">
        <div class="shc-ap-sec-cap">Ultimi 7 giorni</div>
        <div class="shc-ap-week-list">${body || `<div class="shc-ap-row-val">Nessun dato configurato</div>`}</div>
      </div>`;
  }

  _openWeek() {
    this._openDialog("Statistiche", this._consumiHtml());
  }

  // Versione "storici automatici": stessa presentazione di _consumiHtml() (Oggi/Ieri/Mese/Anno),
  // ma consumo e costo calcolati al volo dalle statistiche invece che da attributi di un
  // cycle_sensor scritto a mano. Niente "cicli"/"tempo" qui: dalla sola energia non si contano i
  // cicli di un elettrodomestico, serve ancora un sensore di stato per quello (facoltativo).
  _autoConsumiHtml() {
    return `<div class="shc-ap-sec">
      <div class="shc-ap-sec-cap">Consumi per periodo</div>
      <div class="shc-ap-week-list" data-auto-periods><div class="shc-ap-row-val">Caricamento…</div></div>
    </div>`;
  }

  async _loadAutoPeriods(overlay) {
    const cfg = this._config;
    const slot = overlay?.querySelector("[data-auto-periods]");
    if (!slot || !cfg.energy_stat_entity) return;
    const costRaw = cfg.cost_entity ? Number(this._hass.states[cfg.cost_entity]?.state) : NaN;
    try {
      const p = await shcComputeAutoPeriods(this._hass, cfg.energy_stat_entity, costRaw);
      const labels = cfg.period_labels || {};
      const row = (key, def) => {
        const d = p[key];
        const kwh = Number.isFinite(d?.kwh) ? `${d.kwh.toFixed(2)} kWh` : "—";
        const cost = Number.isFinite(d?.cost) ? `${d.cost.toFixed(2)} €` : "—";
        return `<div class="shc-ap-week-row">
          <div class="shc-ap-week-day">${esc(labels[key] || def)}</div>
          <div class="shc-ap-week-stats cols2">
            <div class="shc-ap-week-stat"><small>Consumo</small><b>${kwh}</b></div>
            <div class="shc-ap-week-stat"><small>Costo</small><b>${cost}</b></div>
          </div>
        </div>`;
      };
      slot.innerHTML = [
        row("today", "Oggi"),
        row("yesterday", "Ieri"),
        row("month", "Mese"),
        row("month_prev", "Mese prec."),
        row("year", "Anno"),
        row("year_prev", "Anno prec."),
      ].join("");
    } catch (e) {
      slot.innerHTML = `<div class="shc-ap-row-val">Statistiche non disponibili al momento</div>`;
    }
  }

  // Istogrammi del consumo di questo mese (per giorno) e di quest'anno (per mese).
  _energyBarsHtml() {
    if (!this._config.energy_stat_entity) return "";
    return `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Questo mese (kWh al giorno)</div><div class="shc-ap-chart-loading" data-chart="month">Caricamento...</div></div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Quest'anno (kWh al mese)</div><div class="shc-ap-chart-loading" data-chart="year">Caricamento...</div></div>`;
  }

  _loadEnergyBars(overlay) {
    const energyEntity = this._config.energy_stat_entity;
    if (!energyEntity || !overlay) return;
    const slot = (name) => overlay.querySelector(`[data-chart="${name}"]`);
    const now = new Date();
    const MONTH_ABBR = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
    this._fetchStats(energyEntity, "day", new Date(now.getFullYear(), now.getMonth(), 1), now)
      .then((rows) => {
        const el = slot("month");
        if (!el) return;
        const bars = rows.map((r) => ({ value: r.value }));
        el.outerHTML = `<div data-chart="month">${this._barChartSvg(bars, "#0ea5e9")}${this._labelSpans(rows, 8, (r) => r.t.getDate())}</div>`;
      })
      .catch(() => {
        const el = slot("month");
        if (el) el.textContent = "Errore caricamento dati";
      });
    this._fetchStats(energyEntity, "month", new Date(now.getFullYear(), 0, 1), now)
      .then((rows) => {
        const el = slot("year");
        if (!el) return;
        const bars = rows.map((r) => ({ value: r.value }));
        const labels = `<div class="shc-ap-chart-labels">${rows.map((r) => `<span>${MONTH_ABBR[r.t.getMonth()]}</span>`).join("")}</div>`;
        el.outerHTML = `<div data-chart="year">${this._barChartSvg(bars, "#0ea5e9")}${labels}</div>`;
      })
      .catch(() => {
        const el = slot("year");
        if (el) el.textContent = "Errore caricamento dati";
      });
  }

  // -- grafici potenza (linea 24h + istogrammi mese/anno) ------------------
  // Nessuna libreria esterna: SVG disegnato a mano, dati presi dalla cronologia
  // e dalle statistiche a lungo termine di Home Assistant via WebSocket.

  _fmtAxis(v) {
    if (!Number.isFinite(v)) return "0";
    const s = Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  }

  _lineChartSvg(points, color, fixedMax) {
    if (!points.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 90;
    // asse sinistro: riserva spazio per i valori min/max, riferimento comune ai 3 grafici
    const plotX0 = 24;
    const plotW = width - plotX0;
    const values = points.map((p) => p.y);
    // Con una scala fissa (basata sul picco storico reale) il minimo resta
    // sempre 0: cosi' il rumore di standby appiattisce vicino al fondo del
    // grafico invece di essere "gonfiato" da un auto-scale sul range minimo
    // dei dati del giorno, e un consumo vero resta comunque ben visibile.
    const min = fixedMax ? 0 : Math.min(...values, 0);
    const max = fixedMax ? Math.max(fixedMax, ...values) : Math.max(...values, min + 1);
    const range = max - min || 1;
    const stepX = points.length > 1 ? plotW / (points.length - 1) : 0;
    const coords = points.map((p, i) => {
      const x = (plotX0 + i * stepX).toFixed(1);
      const y = (height - ((p.y - min) / range) * (height - 6) - 3).toFixed(1);
      return `${x},${y}`;
    });
    const area = `${plotX0},${height} ${coords.join(" ")} ${width},${height}`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg" preserveAspectRatio="none">
      <line x1="${plotX0}" y1="3" x2="${plotX0}" y2="${height - 3}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="8" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 3}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(min)}</text>
      <polygon points="${area}" fill="${color}" opacity="0.14"/>
      <polyline points="${coords.join(" ")}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;
  }

  _barChartSvg(bars, color) {
    if (!bars.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 90;
    const plotX0 = 24;
    const plotW = width - plotX0;
    // Spazio riservato in alto per il valore numerico, ruotato di 90 gradi
    // (si legge inclinando la testa/il monitor verso destra), come chiesto.
    const labelSpace = 22;
    const barAreaH = height - labelSpace;
    const max = Math.max(...bars.map((b) => b.value), 0.01);
    const gap = 3;
    const barW = (plotW - gap * (bars.length - 1)) / bars.length;
    const fmt = (v) => {
      if (!(v > 0)) return "";
      const s = v.toFixed(1);
      return s.endsWith(".0") ? s.slice(0, -2) : s;
    };
    const parts = bars
      .map((b, i) => {
        const h = Math.max(1, (b.value / max) * (barAreaH - 2));
        const x = (plotX0 + i * (barW + gap)).toFixed(1);
        const y = (height - h).toFixed(1);
        const cx = (plotX0 + i * (barW + gap) + barW / 2).toFixed(1);
        const labelY = (height - h - 4).toFixed(1);
        const label = fmt(b.value);
        const text = label
          ? `<text x="${cx}" y="${labelY}" transform="rotate(-90 ${cx} ${labelY})" text-anchor="start" font-size="10" font-weight="800" fill="#94a3b8">${label}</text>`
          : "";
        return `<rect x="${x}" y="${y}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${color}"/>${text}`;
      })
      .join("");
    const axis = `<line x1="${plotX0}" y1="${labelSpace}" x2="${plotX0}" y2="${height}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="${labelSpace + 6}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 1}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">0</text>`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg" preserveAspectRatio="none">${axis}${parts}</svg>`;
  }

  async _fetchHistory24h(entityId) {
    const end = new Date();
    const start = new Date(end.getTime() - 24 * 3600 * 1000);
    const result = await this._hass.connection.sendMessagePromise({
      type: "history/history_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
    });
    const rows = result?.[entityId] || [];
    return rows
      .map((r) => ({ t: new Date((r.lu || r.last_updated_ts) * 1000 || r.last_updated), y: Number(r.s ?? r.state) }))
      .filter((p) => Number.isFinite(p.y));
  }

  async _fetchStats(entityId, period, start, end) {
    const result = await this._hass.connection.sendMessagePromise({
      type: "recorder/statistics_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      statistic_ids: [entityId],
      period,
    });
    const rows = result?.[entityId] || [];
    return rows.map((r) => ({ t: new Date(r.start), value: Math.max(0, Number(r.change ?? 0)) }));
  }

  // Sceglie fino a "count" indici distribuiti in modo uniforme (incluso il
  // primo e l'ultimo) per non affollare l'asse con un'etichetta per ogni
  // singolo punto/barra.
  _labelSpans(items, count, formatFn) {
    if (!items.length) return "";
    const n = Math.min(count, items.length);
    const idxs = [];
    for (let i = 0; i < n; i++) {
      idxs.push(n === 1 ? 0 : Math.round((i * (items.length - 1)) / (n - 1)));
    }
    const seen = new Set();
    const unique = idxs.filter((i) => (seen.has(i) ? false : (seen.add(i), true)));
    return `<div class="shc-ap-chart-labels">${unique.map((i) => `<span>${formatFn(items[i], i)}</span>`).join("")}</div>`;
  }

  async _openPowerHistory() {
    const cfg = this._config;
    const powerEntity = cfg.power_history_entity || cfg.power_entity;
    const energyEntity = cfg.energy_stat_entity;

    this._openDialog(
      "Andamento potenza",
      `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Ultime 24 ore</div><div class="shc-ap-chart-loading" data-chart="24h">Caricamento...</div></div>
       ${energyEntity ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Questo mese</div><div class="shc-ap-chart-loading" data-chart="month">Caricamento...</div></div>` : ""}
       ${energyEntity ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Quest'anno</div><div class="shc-ap-chart-loading" data-chart="year">Caricamento...</div></div>` : ""}`,
    );
    const overlay = this._root.querySelector(".shc-ap-overlay");
    const slot = (name) => overlay?.querySelector(`[data-chart="${name}"]`);

    if (powerEntity) {
      this._fetchHistory24h(powerEntity)
        .then((points) => {
          const el = slot("24h");
          if (!el) return;
          const labels = this._labelSpans(points, 7, (p) => p.t.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }));
          // Scala fissa sul picco storico (cfg.max_power, un po' sopra il
          // massimo osservato negli ultimi mesi): il rumore di standby resta
          // vicino allo zero e un consumo vero si vede comunque bene, senza
          // nascondere il dato reale come faceva l'azzeramento.
          el.outerHTML = `<div data-chart="24h">${this._lineChartSvg(points, "#0ea5e9", cfg.max_power)}${labels}</div>`;
        })
        .catch(() => {
          const el = slot("24h");
          if (el) el.textContent = "Errore caricamento dati";
        });
    }

    if (energyEntity) {
      const now = new Date();
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      this._fetchStats(energyEntity, "day", monthStart, now)
        .then((rows) => {
          const el = slot("month");
          if (!el) return;
          const bars = rows.map((r) => ({ value: r.value }));
          const dayLabels = this._labelSpans(rows, 8, (r) => r.t.getDate());
          el.outerHTML = `<div data-chart="month">${this._barChartSvg(bars, "#0ea5e9")}${dayLabels}</div>`;
        })
        .catch(() => {
          const el = slot("month");
          if (el) el.textContent = "Errore caricamento dati";
        });

      const yearStart = new Date(now.getFullYear(), 0, 1);
      const MONTH_ABBR = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
      this._fetchStats(energyEntity, "month", yearStart, now)
        .then((rows) => {
          const el = slot("year");
          if (!el) return;
          const bars = rows.map((r) => ({ value: r.value }));
          const labels = `<div class="shc-ap-chart-labels">${rows.map((r) => `<span>${MONTH_ABBR[r.t.getMonth()]}</span>`).join("")}</div>`;
          el.outerHTML = `<div data-chart="year">${this._barChartSvg(bars, "#0ea5e9")}${labels}</div>`;
        })
        .catch(() => {
          const el = slot("year");
          if (el) el.textContent = "Errore caricamento dati";
        });
    }
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;

    // "Statistiche" (barrette) mostra solo lo stato live del dispositivo (domotico): senza
    // nessuno di questi campi non avrebbe nulla da mostrare, quindi si nasconde da sola. I
    // consumi per periodo vivono nel pulsante "Consumi" (fulmine), non qui.
    const live = cfg.live || {};
    const hasLive = !!(live.state_entity || live.progress_entity || live.remaining_entity || live.salt_entity || live.rinse_entity || (live.extra && live.extra.length));
    const statsBtn = this._root.querySelector(".shc-ap-stats");
    if (statsBtn) statsBtn.hidden = !hasLive;

    const powerState = hass.states[cfg.power_entity];
    const watts = powerState ? Number(powerState.state) : null;
    const powerUnavailable = !powerState || ["unavailable", "unknown"].includes(powerState.state);

    let mode = "off";
    let label = "SPENTO";
    const liveStateEntity = cfg.live?.state_entity;
    const rawState = liveStateEntity ? hass.states[liveStateEntity]?.state : null;
    const mapped = rawState && cfg.state_map[rawState];
    if (mapped) {
      mode = mapped.mode;
      label = mapped.label;
    } else if (powerUnavailable) {
      mode = "unavailable";
      label = "N/D";
    } else if (watts >= cfg.threshold_run) {
      mode = "running";
      label = "IN FUNZIONE";
    } else if (watts >= cfg.threshold_standby) {
      mode = "standby";
      label = "STANDBY";
    }

    const card = this._root.querySelector(".shc-ap-card");
    card.classList.remove("is-run", "is-standby", "is-off", "is-unavailable", "has-alarm");
    card.classList.add(`is-${mode === "running" ? "run" : mode}`);

    const badge = this._root.querySelector(".shc-ap-badge");
    badge.classList.remove("run", "standby", "off", "unavailable");
    badge.classList.add(mode === "running" ? "run" : mode);
    this._root.querySelector(".shc-ap-badge-label").textContent = label;

    const powerVal = Number.isFinite(watts) ? Math.max(0, watts) : 0;
    const powerUnit = cfg.power_unit || "W";
    if (powerUnit === "W") {
      this._root.querySelector(".shc-ap-power-val").textContent =
        powerVal >= 1000 ? `${(powerVal / 1000).toFixed(1)} kW` : `${Math.round(powerVal)} W`;
    } else {
      const powerDecimals = cfg.power_decimals ?? 1;
      this._root.querySelector(".shc-ap-power-val").textContent = `${powerVal.toFixed(powerDecimals)} ${powerUnit}`;
    }
    this._root.querySelector(".shc-ap-bar i").style.width =
      `${Math.min(100, Math.round((powerVal / cfg.max_power) * 100))}%`;

    const progressEntity = cfg.live?.progress_entity;
    const progressBar = this._root.querySelector(".shc-ap-progress-bar");
    if (progressEntity && progressBar) {
      const pState = hass.states[progressEntity];
      const pVal = pState && !["unavailable", "unknown"].includes(pState.state) ? Number(pState.state) : NaN;
      let valText = Number.isFinite(pVal) ? `${Math.round(pVal)}%` : "\u2014";
      const remainingEntity = cfg.live?.remaining_entity;
      const remState = remainingEntity ? hass.states[remainingEntity] : null;
      if (remState && !["unavailable", "unknown"].includes(remState.state)) {
        const finishMs = new Date(remState.state).getTime();
        const diffMin = Math.round((finishMs - Date.now()) / 60000);
        if (Number.isFinite(diffMin) && diffMin > 0) {
          const h = Math.floor(diffMin / 60);
          const m = diffMin % 60;
          valText += ` \u00b7 manca ${h > 0 ? `${h}h ${m}m` : `${m} min`}`;
        }
      }
      this._root.querySelector(".shc-ap-progress-val").textContent = valText;
      progressBar.style.width = `${Number.isFinite(pVal) ? Math.min(100, Math.max(0, pVal)) : 0}%`;
    }

    const end = this._cycleAttr(hass, "end");
    const duration = this._cycleAttr(hass, "duration");
    const energy = this._cycleAttr(hass, "energy");
    const cost = this._cycleAttr(hass, "cost");
    this._root.querySelector(".shc-c-end").textContent = end ?? "\u2014";
    this._root.querySelector(".shc-c-duration").textContent = duration ?? "\u2014";
    this._root.querySelector(".shc-c-energy").textContent = energy ?? "\u2014";
    this._root.querySelector(".shc-c-cost").textContent = Number.isFinite(Number(cost)) ? `${Number(cost).toFixed(2)} \u20ac` : "\u2014";

    const warnEl = this._root.querySelector(".shc-ap-warn");
    const activeWarnings = (cfg.warn_entities || [])
      .filter((w) => hass.states[w.entity]?.state === w.on_state)
      .map((w) => w.label);
    if (activeWarnings.length) {
      warnEl.hidden = false;
      warnEl.textContent = "\u26a0 " + activeWarnings.join(" \u00b7 ");
      card.classList.add("has-alarm");
    } else {
      warnEl.hidden = true;
    }
  }

  _graphSeries() {
    const c = this._config;
    return [{ entity: c.power_history_entity || c.power_entity, label: "Potenza", color: "#0ea5e9" }];
  }

  getCardSize() {
    return 7;
  }

  static getConfigElement() {
    return document.createElement("shc-appliance-clone-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "Elettrodomestico",
      artwork: "dishwasher",
      power_entity: "",
      threshold_run: 5,
      threshold_standby: 1,
      max_power: 2200,
    };
  }
}

// -----------------------------------------------------------------------
// Editor visuale della card Elettrodomestici: si apre da solo quando la
// aggiungi o la modifichi dalla dashboard (icona matita), al posto dello
// YAML scritto a mano. Copre i campi che servono quasi sempre (tipo,
// nome, se e' domotico o solo una presa, l'entita' della potenza e - se
// domotico - stato/programma/fine prevista) con un'entity-picker che
// cerca e propone: non indovina da sola, ma parte gia' filtrata sui
// nomi piu' probabili. Tutto il resto (settings_sections, warn_entities,
// week_rows, period_attrs, energy_stat_entity...) resta come lo trovi:
// l'editor lo lascia intatto, si modifica solo passando alla vista YAML.
// -----------------------------------------------------------------------
const SHC_APPLIANCE_TYPES = [
  { value: "washer", label: "Lavatrice", domotico: false },
  { value: "dryer", label: "Asciugatrice", domotico: true },
  { value: "dishwasher", label: "Lavastoviglie", domotico: true },
  { value: "oven", label: "Forno", domotico: false },
  { value: "tv", label: "TV", domotico: true },
];

const SHC_EDITOR_STYLE = `
  :host{display:block;padding:4px 0 12px}
  .shc-ed-row{margin-bottom:14px}
  .shc-ed-label{display:block;font-size:13px;font-weight:700;color:var(--primary-text-color);margin-bottom:6px}
  .shc-ed-hint{font-size:12px;color:var(--secondary-text-color);margin:2px 0 8px;line-height:1.4}
  .shc-ed-types{display:flex;flex-wrap:wrap;gap:8px}
  .shc-ed-type-btn{flex:1 1 30%;min-width:100px;border:1px solid var(--divider-color,#e0e0e0);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);padding:10px 8px;font:inherit;font-size:13px;font-weight:700;cursor:pointer;text-align:center}
  .shc-ed-type-btn.on{border-color:var(--primary-color,#03a9f4);background:rgba(3,169,244,.12);color:var(--primary-color,#03a9f4)}
  .shc-ed-choice{display:flex;gap:8px}
  .shc-ed-choice-btn{flex:1;border:1px solid var(--divider-color,#e0e0e0);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);padding:12px 10px;font:inherit;font-size:13px;font-weight:700;cursor:pointer;text-align:left;line-height:1.35}
  .shc-ed-choice-btn small{display:block;font-size:11px;font-weight:500;color:var(--secondary-text-color);margin-top:3px}
  .shc-ed-choice-btn.on{border-color:var(--primary-color,#03a9f4);background:rgba(3,169,244,.12)}
  .shc-ed-sec{margin:18px 0 10px;padding-top:12px;border-top:1px solid var(--divider-color,#e0e0e0);font-size:11.5px;font-weight:900;letter-spacing:.5px;text-transform:uppercase;color:var(--secondary-text-color)}
  .shc-ed-grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  ha-entity-picker{width:100%}
  .shc-ed-input{width:100%;box-sizing:border-box;padding:11px 12px;border-radius:10px;border:1px solid var(--divider-color,#e0e0e0);background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:14px}
  .shc-ed-input:focus{outline:none;border-color:var(--primary-color,#03a9f4)}
  details.shc-ed-adv{margin-top:16px}
  details.shc-ed-adv summary{cursor:pointer;font-size:12.5px;font-weight:700;color:var(--primary-color,#03a9f4);padding:6px 0}
  .shc-ed-missing{color:#c62828;font-size:12px;margin-top:4px}
  .shc-ed-btn{margin-top:8px;padding:9px 14px;border:1px solid var(--primary-color,#03a9f4);border-radius:10px;background:rgba(3,169,244,.1);color:var(--primary-color,#03a9f4);font:inherit;font-size:12.5px;font-weight:700;cursor:pointer}
  .shc-ed-btn:disabled{opacity:.6;cursor:default}
  .shc-ed-checkrow{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--primary-text-color);cursor:pointer}
  .shc-ed-storici-msg{display:block;color:#c62828;font-size:12px;margin-top:4px}
`;

// -----------------------------------------------------------------------
// Editor visuale condiviso per le card "a campi fissi" (FritzBox, Server,
// NAS, Proxmox, UPS, Raccolta Differenziata, Energia Casa): a differenza
// dell'elettrodomestico non c'e' da scegliere un "tipo", si va dritti ai
// campi. Ogni card definisce solo il suo elenco (sezioni + campi), il
// motore che disegna il form ed emette config-changed e' unico.
// -----------------------------------------------------------------------
function shcGetPath(obj, path) {
  return path.split(".").reduce((o, k) => (o != null ? o[k] : undefined), obj);
}

function shcSetPath(root, path, value) {
  const keys = path.split(".");
  let obj = root;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const nextIsIndex = /^\d+$/.test(keys[i + 1]);
    const existing = obj[k];
    const container = Array.isArray(existing) ? [...existing] : existing && typeof existing === "object" ? { ...existing } : nextIsIndex ? [] : {};
    obj[k] = container;
    obj = container;
  }
  const lastKey = keys[keys.length - 1];
  if (value === "" || value === undefined) delete obj[lastKey];
  else obj[lastKey] = value;
  return root;
}

class ShcSimpleCardEditorBase extends HTMLElement {
  // Sottoclassi: implementano get schema() -> [{ title, fields: [{key,label,kind,domain,required,hint}] }]
  get schema() {
    return [];
  }

  setConfig(config) {
    this._config = { ...config };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._root) {
      this._root.querySelectorAll("ha-entity-picker").forEach((el) => {
        el.hass = hass;
      });
    }
  }

  _emit() {
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  _set(path, value) {
    this._config = shcSetPath({ ...this._config }, path, value);
    this._emit();
  }

  _render() {
    if (!this._root) {
      this._root = this.attachShadow({ mode: "open" });
      this._root.innerHTML = `<style>${SHC_EDITOR_STYLE}</style><div class="shc-ed-body"></div>`;
    }
    const body = this._root.querySelector(".shc-ed-body");
    const cfg = this._config;
    body.innerHTML = this.schema
      .map(
        (sec) => `
      <div class="shc-ed-sec">${esc(sec.title)}</div>
      ${sec.fields
        .map((f) => {
          const val = shcGetPath(cfg, f.key);
          if (f.kind === "entity" || !f.kind) {
            return `<div class="shc-ed-row">
              <span class="shc-ed-label">${esc(f.label)}${f.required ? " — obbligatorio" : ""}</span>
              ${f.hint ? `<p class="shc-ed-hint">${esc(f.hint)}</p>` : ""}
              <ha-entity-picker data-key="${esc(f.key)}" ${f.domain ? `include-domains='${JSON.stringify(f.domain)}'` : ""} allow-custom-entity></ha-entity-picker>
              ${f.required && !val ? `<div class="shc-ed-missing">Serve un'entita' per far funzionare la card.</div>` : ""}
            </div>`;
          }
          return `<div class="shc-ed-row">
            <span class="shc-ed-label">${esc(f.label)}${f.required ? " — obbligatorio" : ""}</span>
            ${f.hint ? `<p class="shc-ed-hint">${esc(f.hint)}</p>` : ""}
            <input class="shc-ed-input" data-key="${esc(f.key)}" type="${f.kind === "number" ? "number" : "text"}" placeholder="${esc(f.placeholder || "")}">
          </div>`;
        })
        .join("")}
    `,
      )
      .join("");

    body.querySelectorAll("ha-entity-picker[data-key]").forEach((el) => {
      el.hass = this._hass;
      el.value = shcGetPath(cfg, el.dataset.key) || "";
      el.addEventListener("value-changed", (e) => {
        e.stopPropagation();
        this._set(el.dataset.key, e.detail.value);
      });
    });
    body.querySelectorAll("input.shc-ed-input[data-key]").forEach((el) => {
      const v = shcGetPath(cfg, el.dataset.key);
      el.value = v ?? "";
      el.addEventListener("change", () => {
        this._set(el.dataset.key, el.type === "number" ? Number(el.value) : el.value);
      });
    });
  }
}

class ShcFritzCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "FritzBox" },
        { key: "connection_entity", label: "Sensore di connessione (acceso/spento)", domain: ["binary_sensor"], required: true },
      ]},
      { title: "Banda in tempo reale", fields: [
        { key: "stats.mbps_down", label: "Download live (Mbps)", domain: ["sensor"] },
        { key: "stats.mbps_up", label: "Upload live (Mbps)", domain: ["sensor"] },
        { key: "stats.portante_down", label: "Portante Download", domain: ["sensor"] },
        { key: "stats.portante_up", label: "Portante Upload", domain: ["sensor"] },
      ]},
      { title: "Avanzate", fields: [
        { key: "update_entity", label: "Aggiornamento firmware", domain: ["update"] },
        { key: "max_mbps", label: "Fondo scala di riserva (Mbps, usato solo se la portante non e' disponibile)", kind: "number", placeholder: "300" },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-fritz-card-editor", ShcFritzCardEditor);

class ShcServerCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [{ key: "name", label: "Nome", kind: "text", placeholder: "Home Assistant" }]},
      { title: "Sistema", fields: [
        { key: "sensors.cpu", label: "CPU (%)", domain: ["sensor"] },
        { key: "sensors.ram_pct", label: "RAM (%)", domain: ["sensor"] },
        { key: "sensors.disk_pct", label: "Disco (%)", domain: ["sensor"] },
      ]},
      { title: "Avanzate", fields: [
        { key: "ssl_cert", label: "Scadenza certificato SSL", domain: ["sensor"] },
        { key: "updates.core", label: "Aggiornamento Core", domain: ["update"] },
        { key: "updates.supervisor", label: "Aggiornamento Supervisor", domain: ["update"] },
        { key: "uptime.ha_since", label: "Avviato da (data/ora)", domain: ["sensor"] },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-server-card-editor", ShcServerCardEditor);

class ShcNasCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "Synology NAS" },
        { key: "model", label: "Modello", kind: "text", placeholder: "DS925+" },
        { key: "update_entity", label: "Aggiornamento DSM", domain: ["update"], required: true },
      ]},
      { title: "Sistema", fields: [
        { key: "sensors.cpu", label: "CPU (%)", domain: ["sensor"] },
        { key: "sensors.ram_pct", label: "RAM (%)", domain: ["sensor"] },
        { key: "sensors.vol1", label: "Volume 1 (%)", domain: ["sensor"] },
        { key: "sensors.vol2", label: "Volume 2 (%)", domain: ["sensor"] },
        { key: "sensors.usb_pct", label: "USB (%)", domain: ["sensor"] },
        { key: "sensors.temp", label: "Temperatura", domain: ["sensor"] },
      ]},
      { title: "Etichette dei volumi", fields: [
        { key: "vol1_label", label: "Nome Volume 1", kind: "text", placeholder: "Volume 1" },
        { key: "vol2_label", label: "Nome Volume 2", kind: "text", placeholder: "Volume 2" },
      ]},
      { title: "Consumi (pulsante fulmine)", fields: [
        { key: "energy.power", label: "Consumo attuale (W)", domain: ["sensor"] },
        { key: "energy_stat_entity", label: "Sensore energia (kWh, con storico a lungo termine)", domain: ["sensor"], hint: "Facoltativo: se lo colleghi, il pulsante Consumi mostra anche i totali per periodo e gli istogrammi mese/anno." },
        { key: "cost_entity", label: "Costo energia (€/kWh)", domain: ["input_number"] },
      ]},
      { title: "Avanzate", fields: [{ key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] }]},
    ];
  }
}
customElements.define("shc-nas-card-editor", ShcNasCardEditor);

class ShcProxmoxCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [{ key: "name", label: "Nome", kind: "text", placeholder: "Proxmox" }]},
      { title: "Sistema", fields: [
        { key: "sensors.cpu", label: "CPU (%)", domain: ["sensor"] },
        { key: "sensors.ram_pct", label: "RAM (%)", domain: ["sensor"] },
        { key: "sensors.disk_pct", label: "Disco (%)", domain: ["sensor"] },
        { key: "sensors.cpu_temp", label: "Temperatura CPU", domain: ["sensor"] },
        { key: "sensors.gpu_pct", label: "GPU (%)", domain: ["sensor"] },
      ]},
      { title: "Consumi (pulsante fulmine)", fields: [
        { key: "power.power", label: "Consumo attuale (W)", domain: ["sensor"] },
        { key: "power.voltage", label: "Tensione", domain: ["sensor"] },
        { key: "power.current", label: "Corrente", domain: ["sensor"] },
        { key: "energy_stat_entity", label: "Sensore energia (kWh, con storico a lungo termine)", domain: ["sensor"], hint: "Facoltativo: se lo colleghi, il pulsante Consumi mostra anche i totali per periodo e gli istogrammi mese/anno." },
        { key: "cost_entity", label: "Costo energia (€/kWh)", domain: ["input_number"] },
      ]},
      { title: "Avanzate", fields: [{ key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] }]},
    ];
  }
}
customElements.define("shc-proxmox-card-editor", ShcProxmoxCardEditor);

class ShcUpsCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "UPS" },
        { key: "model", label: "Modello", kind: "text", placeholder: "APC Back-UPS BE850G2" },
        { key: "status_entity", label: "Stato UPS", domain: ["sensor"], required: true },
      ]},
      { title: "Batteria e carico", fields: [
        { key: "battery_entity", label: "Carica batteria (%)", domain: ["sensor"] },
        { key: "load_entity", label: "Carico reale (W)", domain: ["sensor"] },
        { key: "runtime_entity", label: "Autonomia residua", domain: ["sensor"] },
      ]},
      { title: "Avanzate", fields: [
        { key: "input_voltage_entity", label: "Tensione ingresso", domain: ["sensor"] },
        { key: "runtime_low_entity", label: "Batteria scarica (avviso)", domain: ["binary_sensor"] },
        { key: "automation_entity", label: "Automazione notifiche caduta corrente", domain: ["automation"] },
        { key: "rated_watts", label: "Potenza nominale (W)", kind: "number", placeholder: "450" },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-ups-card-editor", ShcUpsCardEditor);

class ShcNotifCenterCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [{ key: "name", label: "Nome", kind: "text", placeholder: "Centro Notifiche" }]},
      { title: "Volumi e tempi", fields: [
        { key: "volume_notifica_entity", label: "Volume annuncio", domain: ["input_number"], required: true },
        { key: "volume_ripristino_entity", label: "Volume ripristino", domain: ["input_number"], required: true },
        { key: "tempo_messaggio_entity", label: "Tempo del messaggio (secondi)", domain: ["input_number"], required: true },
      ]},
      { title: "Orario notifiche", fields: [
        { key: "orario_inizio_entity", label: "Orario inizio", domain: ["input_datetime"], required: true },
        { key: "orario_fine_entity", label: "Orario fine", domain: ["input_datetime"], required: true },
      ]},
    ];
  }
}
customElements.define("shc-notif-center-card-editor", ShcNotifCenterCardEditor);

class ShcGarbageCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "Raccolta Differenziata" },
        { key: "entity", label: "Sensore del rifiuto di oggi", domain: ["sensor"], required: true },
      ]},
      { title: "Giorni e orari", fields: [
        { key: "weekday_entity", label: "Giorno della settimana", domain: ["sensor"] },
        { key: "pickup_day_entity", label: "Giorno del ritiro", domain: ["sensor"] },
        { key: "expose_time_entity", label: "Orario di esposizione", domain: ["input_datetime"] },
      ]},
      { title: "Tipi di raccolta scritti a mano", fields: [
        { key: "types_entity", label: "Elenco tipi di raccolta (mostra il pulsante sulla card)", domain: ["input_text"], hint: "Facoltativo: se lo colleghi compare il pulsante per scrivere i tipi di raccolta del tuo comune." },
      ]},
      { title: "Avanzate", fields: [
        { key: "notif_center_path", label: "Percorso pagina Centro Notifiche (facoltativo)", kind: "text", placeholder: "/lovelace/centronotifiche", hint: "Senza questo campo il pulsante megafono resta nascosto invece di puntare a una pagina che non esiste." },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-garbage-card-editor", ShcGarbageCardEditor);

class ShcEnergyCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    const circuits = [0, 1, 2, 3].map((i) => ({
      title: `Barra ${i + 1}`,
      fields: [
        { key: `circuits.${i}.label`, label: "Etichetta", kind: "text", placeholder: i === 0 ? "Generale" : "" },
        { key: `circuits.${i}.entity`, label: "Entita' (potenza in W)", domain: ["sensor"] },
        { key: `circuits.${i}.max`, label: "Fondo scala (W)", kind: "number" },
      ],
    }));
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "Energia Casa" },
        { key: "power_entity", label: "Sensore di potenza generale (W)", domain: ["sensor"], required: true },
        { key: "max_power", label: "Fondo scala generale (W)", kind: "number", placeholder: "4500" },
      ]},
      ...circuits,
      { title: "Avanzate", fields: [
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
        { key: "notif_center_path", label: "Percorso pagina Centro Notifiche (facoltativo)", kind: "text", placeholder: "/lovelace/centronotifiche", hint: "Senza questo campo il pulsante megafono resta nascosto invece di puntare a una pagina che non esiste." },
      ]},
    ];
  }
}
customElements.define("shc-energy-card-editor", ShcEnergyCardEditor);

class ShcApplianceCloneCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = { ...config };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._root) {
      this._root.querySelectorAll("ha-entity-picker").forEach((el) => {
        el.hass = hass;
      });
    }
  }

  // Cerca tra le entita' quella piu' probabile per questo campo, in base al tipo scelto e
  // al nome dell'apparecchio: non sceglie da sola, riempie solo il "suggerimento" di partenza
  // nella entity-picker, che resta comunque cercabile e modificabile a mano.
  _guess(kind) {
    const hass = this._hass;
    if (!hass) return "";
    const type = SHC_APPLIANCE_TYPES.find((t) => t.value === this._config.artwork);
    const nameWords = [type?.label, this._config.name].filter(Boolean).map((s) => s.toLowerCase());
    const ids = Object.keys(hass.states);
    const score = (id, st) => {
      const low = (id + " " + (st.attributes?.friendly_name || "")).toLowerCase();
      let s = 0;
      nameWords.forEach((w) => {
        if (w && low.includes(w)) s += 10;
      });
      return s;
    };
    const byDomainUnit = (domains, units) =>
      ids
        .filter((id) => domains.includes(id.split(".")[0]))
        .filter((id) => !units || units.includes((hass.states[id].attributes?.unit_of_measurement || "").toUpperCase()))
        .map((id) => ({ id, s: score(id, hass.states[id]) }))
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s)[0]?.id || "";
    if (kind === "power") return byDomainUnit(["sensor"], ["W", "KW"]);
    if (kind === "state") return byDomainUnit(["sensor"]);
    return "";
  }

  _emit() {
    const detail = { config: this._config };
    this.dispatchEvent(new CustomEvent("config-changed", { detail, bubbles: true, composed: true }));
  }

  _set(path, value) {
    const keys = path.split(".");
    let obj = this._config;
    for (let i = 0; i < keys.length - 1; i++) {
      obj[keys[i]] = { ...(obj[keys[i]] || {}) };
      obj = obj[keys[i]];
    }
    if (value === "" || value === undefined) delete obj[keys[keys.length - 1]];
    else obj[keys[keys.length - 1]] = value;
    this._config = { ...this._config };
    this._emit();
  }

  _get(path) {
    return path.split(".").reduce((o, k) => (o ? o[k] : undefined), this._config);
  }

  // "Storici automatici": pannello per creare, senza YAML, il sensore energia (kWh) e l'helper
  // costo, poi calcolare i consumi per periodo dalle statistiche HA. Se la card ha GIA' una
  // configurazione avanzata (period_attrs/cycle_sensor, scritta a mano nel package), questo
  // pannello si limita ad avvisare e non tocca nulla: quella resta quella attiva.
  _storiciHtml(cfg) {
    const hasLegacy = !!(cfg.period_attrs || cfg.cycle_sensor || cfg.week_rows);
    if (hasLegacy) {
      return `<div class="shc-ed-sec">Storici</div>
        <p class="shc-ed-hint">Configurazione avanzata rilevata (package YAML): i consumi per periodo restano quelli gia' in uso, invariati.</p>`;
    }
    return `<div class="shc-ed-sec">Storici (consumi per periodo, senza YAML)</div>
      <div class="shc-ed-row">
        <span class="shc-ed-label">Sensore energia (kWh)</span>
        <ha-entity-picker class="shc-ed-energy-stat" include-domains='["sensor"]' allow-custom-entity></ha-entity-picker>
        ${!cfg.energy_stat_entity && cfg.power_entity ? `<button type="button" class="shc-ed-btn shc-ed-create-energy">Crea automaticamente dal sensore di potenza</button>` : ""}
      </div>
      <div class="shc-ed-row">
        <span class="shc-ed-label">Costo energia (€/kWh)</span>
        <ha-entity-picker class="shc-ed-cost" include-domains='["input_number"]' allow-custom-entity></ha-entity-picker>
        ${!cfg.cost_entity ? `<button type="button" class="shc-ed-btn shc-ed-create-cost">Crea helper costo (0,25 €/kWh di partenza)</button>` : ""}
      </div>
      <div class="shc-ed-row">
        <label class="shc-ed-checkrow">
          <input type="checkbox" class="shc-ed-auto-stats" ${cfg.auto_stats ? "checked" : ""} ${!cfg.energy_stat_entity ? "disabled" : ""}>
          <span>Mostra "Consumi per periodo" nella card (Statistiche)</span>
        </label>
      </div>
      <small class="shc-ed-storici-msg"></small>`;
  }

  async _runStorici(btn, label, fn) {
    const msg = this._root.querySelector(".shc-ed-storici-msg");
    const prevText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Creazione in corso…";
    if (msg) msg.textContent = "";
    try {
      await fn();
    } catch (e) {
      if (msg) msg.textContent = `Errore: ${e.message || e}`;
      btn.disabled = false;
      btn.textContent = prevText;
    }
  }

  _render() {
    if (!this._root) {
      this._root = this.attachShadow({ mode: "open" });
      this._root.innerHTML = `<style>${SHC_EDITOR_STYLE}</style><div class="shc-ed-body"></div>`;
    }
    const body = this._root.querySelector(".shc-ed-body");
    const cfg = this._config;
    const currentType = SHC_APPLIANCE_TYPES.find((t) => t.value === cfg.artwork);
    const isDomotico = this._domoticoOverride ?? (cfg.live?.state_entity ? true : currentType ? currentType.domotico : false);

    body.innerHTML = `
      <div class="shc-ed-row">
        <span class="shc-ed-label">Che elettrodomestico e'?</span>
        <div class="shc-ed-types">
          ${SHC_APPLIANCE_TYPES.map(
            (t) => `<button type="button" class="shc-ed-type-btn${t.value === cfg.artwork ? " on" : ""}" data-type="${t.value}">${esc(t.label)}</button>`,
          ).join("")}
        </div>
      </div>

      <div class="shc-ed-row">
        <span class="shc-ed-label">Nome</span>
        <input class="shc-ed-input shc-ed-name" type="text" placeholder="es. Lavastoviglie">
      </div>

      <div class="shc-ed-row">
        <span class="shc-ed-label">Questo elettrodomestico e' domotico o e' solo una presa?</span>
        <p class="shc-ed-hint">Domotico = ha stati e programmi propri (lavastoviglie, asciugatrice, forno smart...). Solo presa = misura solo i Watt (lavatrice o forno collegati a una presa/misuratore Sonoff, Shelly...).</p>
        <div class="shc-ed-choice">
          <button type="button" class="shc-ed-choice-btn${!isDomotico ? " on" : ""}" data-domotico="0">Solo presa<small>Misura solo i Watt</small></button>
          <button type="button" class="shc-ed-choice-btn${isDomotico ? " on" : ""}" data-domotico="1">Domotico<small>Ha stati e programmi</small></button>
        </div>
      </div>

      <div class="shc-ed-sec">Potenza</div>
      <div class="shc-ed-row">
        <span class="shc-ed-label">Sensore della potenza (Watt) — obbligatorio</span>
        <ha-entity-picker class="shc-ed-power" include-domains='["sensor"]' allow-custom-entity></ha-entity-picker>
        ${!cfg.power_entity ? `<div class="shc-ed-missing">Serve un'entita' per far funzionare la card.</div>` : ""}
      </div>

      ${
        isDomotico
          ? `<div class="shc-ed-sec">Stato e programma (domotico)</div>
      <div class="shc-ed-row">
        <span class="shc-ed-label">Entita' dello stato (es. "in funzione", "pronto"...)</span>
        <ha-entity-picker class="shc-ed-live-state" allow-custom-entity></ha-entity-picker>
      </div>
      <div class="shc-ed-row">
        <span class="shc-ed-label">Avanzamento programma (facoltativo)</span>
        <ha-entity-picker class="shc-ed-live-progress" include-domains='["sensor"]' allow-custom-entity></ha-entity-picker>
      </div>
      <div class="shc-ed-row">
        <span class="shc-ed-label">Fine prevista (facoltativo)</span>
        <ha-entity-picker class="shc-ed-live-remaining" include-domains='["sensor"]' allow-custom-entity></ha-entity-picker>
      </div>`
          : ""
      }

      <details class="shc-ed-adv">
        <summary>Impostazioni avanzate (soglie, layout)</summary>
        <div class="shc-ed-grid2">
          <div class="shc-ed-row">
            <span class="shc-ed-label">Soglia "in funzione" (W)</span>
            <input class="shc-ed-input shc-ed-thr-run" type="number" value="${cfg.threshold_run ?? 5}">
          </div>
          <div class="shc-ed-row">
            <span class="shc-ed-label">Soglia "standby" (W)</span>
            <input class="shc-ed-input shc-ed-thr-standby" type="number" value="${cfg.threshold_standby ?? 1}">
          </div>
          <div class="shc-ed-row">
            <span class="shc-ed-label">Fondo scala barra potenza (W)</span>
            <input class="shc-ed-input shc-ed-max-power" type="number" value="${cfg.max_power ?? 2200}">
          </div>
          <div class="shc-ed-row">
            <span class="shc-ed-label">Menu layout (facoltativo)</span>
            <ha-entity-picker class="shc-ed-layout" include-domains='["input_select"]' allow-custom-entity></ha-entity-picker>
          </div>
          <div class="shc-ed-row">
            <span class="shc-ed-label">Percorso pagina Centro Notifiche (facoltativo)</span>
            <input class="shc-ed-input shc-ed-notif-path" type="text" placeholder="/lovelace/centronotifiche" value="${esc(cfg.notif_center_path || "")}">
          </div>
        </div>
        <p class="shc-ed-hint">Senza il percorso Centro Notifiche, il pulsante megafono resta nascosto invece di puntare a una pagina che non esiste. Notifiche e avvisi (sale/brillantante...) si configurano ancora da YAML: segui la guida del pacchetto originale.</p>
      </details>

      ${this._storiciHtml(cfg)}
    `;

    body.querySelectorAll(".shc-ed-type-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = SHC_APPLIANCE_TYPES.find((t) => t.value === btn.dataset.type);
        this._config = { ...this._config, artwork: type.value };
        if (!this._config.name) this._config.name = type.label;
        if (this._domoticoOverride === undefined) this._domoticoOverride = type.domotico;
        this._emit();
        this._render();
      });
    });
    body.querySelectorAll(".shc-ed-choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this._domoticoOverride = btn.dataset.domotico === "1";
        this._emit();
        this._render();
      });
    });
    const name = body.querySelector(".shc-ed-name");
    name.value = cfg.name || "";
    name.addEventListener("change", () => this._set("name", name.value));

    // Le entity-picker si valorizzano assegnando la proprieta' via JS (un attributo scritto nel
    // markup non basta), altrimenti mostrerebbero sempre vuoto anche per una card gia' configurata.
    const wirePicker = (selector, currentValue, guessKind, path) => {
      const el = body.querySelector(selector);
      if (!el) return;
      el.hass = this._hass;
      el.value = currentValue || (guessKind ? this._guess(guessKind) : "") || "";
      el.addEventListener("value-changed", (e) => {
        e.stopPropagation();
        this._set(path, e.detail.value);
      });
    };
    wirePicker(".shc-ed-power", cfg.power_entity, "power", "power_entity");
    wirePicker(".shc-ed-live-state", cfg.live?.state_entity, "state", "live.state_entity");
    wirePicker(".shc-ed-live-progress", cfg.live?.progress_entity, null, "live.progress_entity");
    wirePicker(".shc-ed-live-remaining", cfg.live?.remaining_entity, null, "live.remaining_entity");
    wirePicker(".shc-ed-layout", cfg.layout_entity, null, "layout_entity");
    ["thr-run:threshold_run", "thr-standby:threshold_standby", "max-power:max_power"].forEach((pair) => {
      const [cls, key] = pair.split(":");
      const el = body.querySelector(".shc-ed-" + cls);
      if (el) el.addEventListener("change", () => this._set(key, Number(el.value)));
    });
    const notifPathEl = body.querySelector(".shc-ed-notif-path");
    if (notifPathEl) notifPathEl.addEventListener("change", () => this._set("notif_center_path", notifPathEl.value));

    // Storici automatici: picker + pulsanti "crea" (v. _storiciHtml/_runStorici).
    wirePicker(".shc-ed-energy-stat", cfg.energy_stat_entity, null, "energy_stat_entity");
    wirePicker(".shc-ed-cost", cfg.cost_entity, null, "cost_entity");
    const autoStatsBox = body.querySelector(".shc-ed-auto-stats");
    if (autoStatsBox) autoStatsBox.addEventListener("change", () => this._set("auto_stats", autoStatsBox.checked));
    const createEnergyBtn = body.querySelector(".shc-ed-create-energy");
    if (createEnergyBtn) {
      createEnergyBtn.addEventListener("click", () =>
        this._runStorici(createEnergyBtn, "energia", async () => {
          const entityId = await shcCreateEnergyHelper(this._hass, {
            name: `${cfg.name || "Elettrodomestico"} - Energia`,
            sourceEntity: cfg.power_entity,
          });
          this._config = { ...this._config, energy_stat_entity: entityId, auto_stats: true };
          this._emit();
          this._render();
        }),
      );
    }
    const createCostBtn = body.querySelector(".shc-ed-create-cost");
    if (createCostBtn) {
      createCostBtn.addEventListener("click", () =>
        this._runStorici(createCostBtn, "costo", async () => {
          const entityId = await shcCreateCostHelper(this._hass, { name: "Costo energia" });
          this._config = { ...this._config, cost_entity: entityId };
          this._emit();
          this._render();
        }),
      );
    }
  }
}
customElements.define("shc-appliance-clone-card-editor", ShcApplianceCloneCardEditor);

customElements.define("shc-appliance-clone-card", ShcApplianceCloneCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-appliance-clone-card",
  name: "Elettrodomestico",
  description: "Card per gli elettrodomestici, con popup impostazioni/statistiche completi",
  author: "Simonz82",
});

// -----------------------------------------------------------------------
// shc-fritz-card: stessa grammatica visiva (STYLE, dialog, righe) applicata
// a un dispositivo di rete invece che a un elettrodomestico a ciclo/potenza.
// Nessuna dipendenza da ShcApplianceCloneCard, ma stesse classi CSS/STYLE.
// -----------------------------------------------------------------------

class ShcFritzCard extends HTMLElement {
  setConfig(config) {
    if (!config.connection_entity) throw new Error("connection_entity \u00e8 obbligatorio");
    this._config = {
      name: "FritzBox",
      artwork: "fritzbox",
      max_mbps: 300,
      stats: {},
      actions: [],
      settings_sections: [],
      speedtest: {},
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._heroId = "fz" + Math.random().toString(36).slice(2, 8);
    const hero = (HERO_BUILDERS[this._config.artwork] || HERO_BUILDERS.fritzbox)(this._heroId);
    const chip = CHIP_SVGS[this._config.artwork] || CHIP_SVGS.fritzbox;
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${chip}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
          </span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Impostazioni">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Statistiche">${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-ap-consumi" title="Test di banda">${ICON_SPEED}</button>
            <button type="button" class="shc-ap-tool shc-ap-update" title="Aggiornamenti">${ICON_BELL}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero">${hero}</div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Connessione</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_GLOBE}</span><small>IP</small></span><b class="shc-c-ip">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TIMER}</span><small>Da</small></span><b class="shc-c-uptime">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_DOWNLOAD}</span><small>Portante Down</small></span><b class="shc-c-pdown">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_UPLOAD}</span><small>Portante Up</small></span><b class="shc-c-pup">\u2014</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter shc-c-meter-clickable" data-graph="0">
              <div class="shc-ap-meter-row"><span>Download ora (live)</span><strong class="shc-c-mbps-down-val">0 Mbps</strong></div>
              <div class="shc-ap-bar"><i class="shc-c-mbps-down-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable" data-graph="1">
              <div class="shc-ap-meter-row"><span>Upload ora (live)</span><strong class="shc-c-mbps-up-val">0 Mbps</strong></div>
              <div class="shc-ap-bar"><i class="shc-c-mbps-up-bar" style="width:0%"></i></div>
            </div>
          </div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);
    // Toccando una delle due barre live si apre il grafico storico (24 h / 7 gg / 30 gg / da ... a)
    this._root.querySelectorAll(".shc-c-meter-clickable").forEach((m) => {
      m.addEventListener("click", (e) => {
        e.stopPropagation();
        shcOpenChartPopup(this, { title: this._config.name, series: this._graphSeries(), active: Number(m.dataset.graph) });
      });
    });
    this._root.querySelector(".shc-ap-settings").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openSettings();
    });
    this._root.querySelector(".shc-ap-update").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openUpdate();
    });
    this._root.querySelector(".shc-ap-stats").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-ap-consumi").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openConsumi();
    });
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml) {
    let overlay = this._root.querySelector(".shc-ap-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      // Menu a tendina delle impostazioni (righe input_select): la scelta viene applicata subito.
      overlay.addEventListener("change", (e) => {
        const t = e.target;
        if (t && t.dataset && t.dataset.selectEntity && this._hass) {
          this._hass.callService("input_select", "select_option", { entity_id: t.dataset.selectEntity, option: t.value });
        }
      });
      this._root.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.hidden = false;
    return overlay;
  }

  _fmtDateTime(iso) {
    if (!iso) return "\u2014";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return String(iso);
    return d.toLocaleString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  _settingsRowHtml(hass, row) {
    const st = hass.states[row.entity];
    if (!st) return this._row(row.label, `<span class="shc-ap-row-val">n/d</span>`);
    const domain = row.entity.split(".")[0];
    if (["input_boolean", "automation", "switch"].includes(domain)) {
      const on = st.state === "on";
      return this._row(
        row.label,
        `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.entity)}" aria-pressed="${on}"></button>`,
      );
    }
    if (domain === "input_select") {
      const opts = (st.attributes?.options || [])
        .map((o) => `<option value="${esc(o)}"${o === st.state ? " selected" : ""}>${esc(o)}</option>`)
        .join("");
      return this._row(row.label, `<select class="shc-ap-select" data-select-entity="${esc(row.entity)}">${opts}</select>`);
    }
    const unit = st.attributes?.unit_of_measurement || "";
    return `<div class="shc-ap-row" data-open-entity="${esc(row.entity)}" style="cursor:pointer">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <span class="shc-ap-row-val">${esc(st.state)}${unit ? " " + esc(unit) : ""}</span>
    </div>`;
  }

  _actionRowHtml(row) {
    return `<div class="shc-ap-row">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <button type="button" class="shc-ap-action-btn" data-action-entity="${esc(row.entity)}" data-confirm="${esc(row.confirm || "")}">Esegui</button>
    </div>`;
  }

  _openSettings() {
    const hass = this._hass;
    const sections = (this._config.settings_sections || [])
      .map(
        (sec) => `<div class="shc-ap-sec">
          <div class="shc-ap-sec-cap">${esc(sec.title)}</div>
          ${sec.rows.map((row) => this._settingsRowHtml(hass, row)).join("")}
        </div>`,
      )
      .join("");

    const actions = this._config.actions || [];
    const actionsHtml = actions.length
      ? `<div class="shc-ap-sec">
           <div class="shc-ap-sec-cap">Strumenti</div>
           ${actions.map((a) => this._actionRowHtml(a)).join("")}
         </div>`
      : "";

    const overlay = this._openDialog("Impostazioni", `${sections}${actionsHtml}`);

    overlay.querySelectorAll("[data-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const entity = btn.dataset.entity;
        const domain = entity.split(".")[0];
        hass.callService(domain, "toggle", { entity_id: entity });
        setTimeout(() => this._openSettings(), 200);
      });
    });
    overlay.querySelectorAll("[data-open-entity]").forEach((row) => {
      row.addEventListener("click", () => {
        const e = new Event("hass-more-info", { bubbles: true, composed: true });
        e.detail = { entityId: row.dataset.openEntity };
        this.dispatchEvent(e);
      });
    });
    overlay.querySelectorAll("[data-action-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const confirmText = btn.dataset.confirm;
        if (confirmText && !window.confirm(confirmText)) return;
        hass.callService("script", "turn_on", { entity_id: btn.dataset.actionEntity });
      });
    });
  }

  // Righe semplici (icona-meno) sullo stile della vecchia card: una riga
  // per voce, etichetta a sinistra e valore a destra, stesso "chip" visivo
  // gia' usato in Impostazioni - non il riquadro compatto usato altrove.
  _statRow(label, value) {
    return this._row(label, `<span class="shc-ap-row-val">${esc(value)}</span>`);
  }

  // Una riga sola per una coppia di valori (download/upload o simile):
  // etichette inline nello stesso valore, invece di due righe o due colonne.
  _statRow2(label, aLabel, aVal, bLabel, bVal) {
    const arrows = aLabel === "Download" && bLabel === "Upload";
    const aTxt = arrows ? `\u2193 ${esc(aVal)}` : `${esc(aLabel)} ${esc(aVal)}`;
    const bTxt = arrows ? `\u2191 ${esc(bVal)}` : `${esc(bLabel)} ${esc(bVal)}`;
    return this._row(label, `<span class="shc-ap-row-val">${aTxt}&nbsp;&nbsp;\u00b7&nbsp;&nbsp;${bTxt}</span>`);
  }

  _openStats() {
    const hass = this._hass;
    const cfg = this._config;
    const conn = hass.states[cfg.connection_entity];
    const attrs = conn?.attributes || {};
    const s = cfg.stats || {};
    const val = (entityId, digits) => {
      const st = entityId ? hass.states[entityId] : null;
      if (!st) return "\u2014";
      const n = Number(st.state);
      const unit = st.attributes?.unit_of_measurement || "";
      const num = Number.isFinite(n) && digits != null ? n.toFixed(digits) : st.state;
      return `${num}${unit ? " " + unit : ""}`;
    };

    const connessioneHtml = [
      this._statRow2("Portante", "Download", val(s.portante_down, 1), "Upload", val(s.portante_up, 1)),
      this._statRow2("Banda usata", "Download", val(s.mbps_down, 2), "Upload", val(s.mbps_up, 2)),
      this._statRow2("Banda usata (MB/s)", "Download", val(s.mbs_down, 2), "Upload", val(s.mbs_up, 2)),
    ].join("");

    const segnaleHtml = [
      this._statRow2("Rumore SNR", "Download", attrs.rumore_down ?? "\u2014", "Upload", attrs.rumore_up ?? "\u2014"),
      this._statRow2("Attenuazione", "Download", attrs.attenuzione_down ?? "\u2014", "Upload", attrs.attenuazione_up ?? "\u2014"),
    ].join("");

    const sistemaHtml = [
      this._statRow("Riavviato il", this._fmtDateTime(attrs.uptime)),
      this._statRow("Connesso dal", this._fmtDateTime(attrs.uptime_connect)),
    ].join("");

    this._openDialog("Statistiche", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Connessione</div><div class="shc-ap-week-list">${connessioneHtml}</div></div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Segnale</div><div class="shc-ap-week-list">${segnaleHtml}</div></div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Sistema</div><div class="shc-ap-week-list">${sistemaHtml}</div></div>
    `);
  }

  _openUpdate() {
    const hass = this._hass;
    const cfg = this._config;
    const conn = hass.states[cfg.connection_entity];
    const attrs = conn?.attributes || {};
    const upd = cfg.update_entity ? hass.states[cfg.update_entity] : null;
    const installed = upd?.attributes?.installed_version ?? attrs.firmware_installato ?? "\u2014";
    const latest = upd?.attributes?.latest_version ?? attrs.firmware_disponibilie ?? "\u2014";
    const upToDate = String(installed) === String(latest);
    const html = [
      this._statRow("Firmware installato", installed),
      this._statRow("Firmware disponibile", latest),
      this._statRow("Stato", upToDate ? "Aggiornato" : "Aggiornamento disponibile"),
    ].join("");
    this._openDialog("Aggiornamenti", `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Firmware FritzOS</div><div class="shc-ap-week-list">${html}</div></div>`);
  }

  _openConsumi() {
    const hass = this._hass;
    const cfg = this._config;
    const s = cfg.stats || {};
    const sp = cfg.speedtest || {};
    const val = (entityId, digits) => {
      const st = entityId ? hass.states[entityId] : null;
      if (!st) return "\u2014";
      const n = Number(st.state);
      const unit = st.attributes?.unit_of_measurement || "";
      const num = Number.isFinite(n) && digits != null ? n.toFixed(digits) : st.state;
      return `${num}${unit ? " " + unit : ""}`;
    };

    const liveHtml = this._statRow2("Banda in uso ora", "Download", val(s.mbps_down, 2), "Upload", val(s.mbps_up, 2));

    const speedtestHtml = Object.keys(sp).length
      ? [
          this._statRow2("Ultimo speedtest", "Download", val(sp.download, 1), "Upload", val(sp.upload, 1)),
          this._statRow2("Qualit\u00e0 linea", "Ping", val(sp.ping, 1), "Jitter", val(sp.jitter, 2)),
          this._statRow("Test eseguito il", this._fmtDateTime(hass.states[sp.last_test]?.state)),
        ].join("")
      : "";

    this._openDialog("Test di banda", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Banda in tempo reale</div><div class="shc-ap-week-list">${liveHtml}</div></div>
      ${speedtestHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Speedtest Ookla (misurazione periodica)</div><div class="shc-ap-week-list">${speedtestHtml}</div></div>` : ""}
    `);
  }

  // Fondoscala della barra live = portante agganciata + 2% (la linea non puo' andare oltre la portante).
  // Se la portante non e' disponibile si usa il "max_mbps" della configurazione.
  _maxMbps(portante) {
    let n = portante ? Number(portante.state) : NaN;
    if (!Number.isFinite(n) || n <= 0) return this._config.max_mbps;
    const unit = String(portante.attributes?.unit_of_measurement || "").toLowerCase();
    if (unit.startsWith("k")) n /= 1000;
    else if (unit.startsWith("g")) n *= 1000;
    return n * 1.02;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;

    const conn = hass.states[cfg.connection_entity];
    const online = conn?.state === "on";
    const attrs = conn?.attributes || {};
    const mode = conn ? (online ? "running" : "off") : "unavailable";

    const card = this._root.querySelector(".shc-ap-card");
    card.classList.remove("is-run", "is-standby", "is-off", "is-unavailable", "has-alarm");
    card.classList.add(`is-${mode === "running" ? "run" : mode}`);

    const badge = this._root.querySelector(".shc-ap-badge");
    badge.classList.remove("run", "standby", "off", "unavailable");
    badge.classList.add(mode === "running" ? "run" : mode);
    this._root.querySelector(".shc-ap-badge-label").textContent = conn
      ? online
        ? "CONNESSO"
        : "DISCONNESSO"
      : "N/D";

    this._root.querySelector(".shc-c-ip").textContent = attrs.ip ?? "\u2014";
    this._root.querySelector(".shc-c-uptime").textContent = this._fmtDateTime(attrs.uptime_connect);
    const s = cfg.stats || {};
    const portanteDown = s.portante_down ? hass.states[s.portante_down] : null;
    const portanteUp = s.portante_up ? hass.states[s.portante_up] : null;
    this._root.querySelector(".shc-c-pdown").textContent = portanteDown
      ? `${Number(portanteDown.state).toFixed(1)} ${portanteDown.attributes?.unit_of_measurement || ""}`
      : "\u2014";
    this._root.querySelector(".shc-c-pup").textContent = portanteUp
      ? `${Number(portanteUp.state).toFixed(1)} ${portanteUp.attributes?.unit_of_measurement || ""}`
      : "\u2014";

    const mbpsDown = s.mbps_down ? Number(hass.states[s.mbps_down]?.state) : NaN;
    const downVal = Number.isFinite(mbpsDown) ? Math.max(0, mbpsDown) : 0;
    this._root.querySelector(".shc-c-mbps-down-val").textContent = `${downVal.toFixed(1)} Mbps`;
    this._root.querySelector(".shc-c-mbps-down-bar").style.width = `${Math.min(100, Math.round((downVal / this._maxMbps(portanteDown)) * 100))}%`;

    const mbpsUp = s.mbps_up ? Number(hass.states[s.mbps_up]?.state) : NaN;
    const upVal = Number.isFinite(mbpsUp) ? Math.max(0, mbpsUp) : 0;
    this._root.querySelector(".shc-c-mbps-up-val").textContent = `${upVal.toFixed(1)} Mbps`;
    this._root.querySelector(".shc-c-mbps-up-bar").style.width = `${Math.min(100, Math.round((upVal / this._maxMbps(portanteUp)) * 100))}%`;

    const warnEl = this._root.querySelector(".shc-ap-warn");
    const upd = cfg.update_entity ? hass.states[cfg.update_entity] : null;
    const installed = upd?.attributes?.installed_version ?? attrs.firmware_installato;
    const latest = upd?.attributes?.latest_version ?? attrs.firmware_disponibilie;
    if (installed != null && latest != null && String(installed) !== String(latest)) {
      warnEl.hidden = false;
      warnEl.textContent = `\u26a0 Aggiornamento firmware disponibile: ${latest}`;
      card.classList.add("has-alarm");
    } else {
      warnEl.hidden = true;
    }
  }

  _graphSeries() {
    const s = this._config.stats || {};
    return [
      { entity: s.mbps_down, label: "Download", color: "#0ea5e9" },
      { entity: s.mbps_up, label: "Upload", color: "#22c55e" },
    ];
  }

  getCardSize() {
    return 6;
  }

  static getConfigElement() {
    return document.createElement("shc-fritz-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "FritzBox",
      artwork: "fritzbox",
      max_mbps: 300,
    };
  }
}

customElements.define("shc-fritz-card", ShcFritzCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-fritz-card",
  name: "FritzBox",
  description: "Card per FritzBox/router: stato, banda, segnale, popup statistiche/impostazioni",
  author: "Simonz82",
});

// -----------------------------------------------------------------------
// shc-server-card: stessa grammatica visiva applicata al server/host che fa
// girare Home Assistant (CPU/RAM/disco, aggiornamenti, backup, riavvii
// programmati, certificato SSL, conteggio entita'...). Stessa STYLE/classi
// CSS di ShcApplianceCloneCard/ShcFritzCard, nessuna dipendenza da esse.
// -----------------------------------------------------------------------

class ShcServerCard extends HTMLElement {
  setConfig(config) {
    this._config = {
      name: "Home Assistant",
      artwork: "server",
      sensors: {},
      updates: {},
      uptime: {},
      actions: [],
      settings_sections: [],
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._heroId = "sv" + Math.random().toString(36).slice(2, 8);
    const hero = (HERO_BUILDERS[this._config.artwork] || HERO_BUILDERS.server)(this._heroId);
    const chip = CHIP_SVGS[this._config.artwork] || CHIP_SVGS.server;
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card is-run">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${chip}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
          </span>
          <span class="shc-ap-badge run"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label">ONLINE</span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Impostazioni">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-update" title="Aggiornamenti">${ICON_BELL}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Statistiche">${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero">${hero}</div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Sistema</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TAG}</span><small>Versione Core</small></span><b class="shc-c-core">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TIMER}</span><small>Avviato da</small></span><b class="shc-c-uptime">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_SHIELD}</span><small>Certificato SSL</small></span><b class="shc-c-ssl">\u2014</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter shc-c-meter-clickable shc-c-meter-cpu">
              <div class="shc-ap-meter-row"><span>CPU</span><strong class="shc-c-cpu-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-c-cpu-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-c-meter-ram">
              <div class="shc-ap-meter-row"><span>RAM</span><strong class="shc-c-ram-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-c-ram-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-c-meter-disk">
              <div class="shc-ap-meter-row"><span>Disco HA</span><strong class="shc-c-disk-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-c-disk-bar" style="width:0%"></i></div>
            </div>
          </div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);
    this._root.querySelector(".shc-ap-settings").addEventListener("click", (e) => {
      e.stopPropagation();
      // Riusa pari pari il vecchio popup "Impostazioni" (browser_mod) della
      // card Statistiche Home Assistant, invece del dialog interno moderno:
      // stessa disposizione identica richiesta, senza reinterpretarla.
      if (this._config.legacy_settings_popup) {
        const event = new Event("ll-custom", { bubbles: true, composed: true });
        event.detail = { browser_mod: this._config.legacy_settings_popup };
        this.dispatchEvent(event);
      } else {
        this._openSettings();
      }
    });
    this._root.querySelector(".shc-ap-update").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openUpdate();
    });
    this._root.querySelector(".shc-ap-stats").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStatsOrLegacy();
    });
    this._root.querySelector(".shc-ap-hero").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStatsOrLegacy();
    });
    this._root.querySelector(".shc-c-meter-cpu").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.cpu, "CPU", "#38bdf8");
    });
    this._root.querySelector(".shc-c-meter-ram").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.ram_pct, "RAM", "#22c55e");
    });
    this._root.querySelector(".shc-c-meter-disk").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.disk_pct, "Disco HA", "#eab308");
    });
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml) {
    let overlay = this._root.querySelector(".shc-ap-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      // Menu a tendina delle impostazioni (righe input_select): la scelta viene applicata subito.
      overlay.addEventListener("change", (e) => {
        const t = e.target;
        if (t && t.dataset && t.dataset.selectEntity && this._hass) {
          this._hass.callService("input_select", "select_option", { entity_id: t.dataset.selectEntity, option: t.value });
        }
      });
      this._root.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.hidden = false;
    return overlay;
  }

  _fmtDateTime(iso) {
    if (!iso) return "\u2014";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return String(iso);
    return d.toLocaleString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  _daysUntil(iso) {
    if (!iso) return null;
    const d = new Date(iso);
    if (isNaN(d.getTime())) return null;
    return Math.round((d.getTime() - Date.now()) / 86400000);
  }

  _settingsRowHtml(hass, row) {
    const st = hass.states[row.entity];
    if (!st) return this._row(row.label, `<span class="shc-ap-row-val">n/d</span>`);
    const domain = row.entity.split(".")[0];
    if (["input_boolean", "automation", "switch"].includes(domain)) {
      const on = st.state === "on";
      return this._row(
        row.label,
        `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.entity)}" aria-pressed="${on}"></button>`,
      );
    }
    if (domain === "input_select") {
      const opts = (st.attributes?.options || [])
        .map((o) => `<option value="${esc(o)}"${o === st.state ? " selected" : ""}>${esc(o)}</option>`)
        .join("");
      return this._row(row.label, `<select class="shc-ap-select" data-select-entity="${esc(row.entity)}">${opts}</select>`);
    }
    const unit = st.attributes?.unit_of_measurement || "";
    return `<div class="shc-ap-row" data-open-entity="${esc(row.entity)}" style="cursor:pointer">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <span class="shc-ap-row-val">${esc(st.state)}${unit ? " " + esc(unit) : ""}</span>
    </div>`;
  }

  // Righe "gruppo" (stile della vecchia card Statistiche Home Assistant):
  // icona + titolo + interruttore principale su una riga, e sotto una fila
  // di chip compatti per orario/giorni/soglie/toggle secondari, cosi' non
  // serve piu' una riga separata per ogni singolo giorno della settimana.
  _settingsGroupRowHtml(hass, row) {
    const idx = this._settingsGroupRows.push(row) - 1;
    const icon = SETTINGS_GROUP_ICONS[row.icon] || "";
    const toggleSt = row.toggle ? hass.states[row.toggle] : null;
    const on = toggleSt?.state === "on";

    const chips = [];
    if (row.time) {
      const st = hass.states[row.time];
      const timeTxt = st ? String(st.state).slice(0, 5) : "—";
      chips.push(
        `<span class="shc-ap-chip" data-open-entity="${esc(row.time)}">${ICON_TIMER}<b>${esc(timeTxt)}</b></span>`,
      );
    }
    if (row.days) {
      chips.push(`<span class="shc-ap-chip" data-open-days="${idx}">${ICON_CALENDAR}Giorni</span>`);
    }
    (row.numbers || []).forEach((nu) => {
      const st = hass.states[nu.entity];
      const unit = st?.attributes?.unit_of_measurement || "";
      chips.push(
        `<span class="shc-ap-chip" data-open-entity="${esc(nu.entity)}">${esc(nu.label)} <b>${st ? esc(st.state) : "—"}${unit ? esc(unit) : ""}</b></span>`,
      );
    });
    (row.extraToggles || []).forEach((ex) => {
      const st = hass.states[ex.entity];
      const exOn = st?.state === "on";
      chips.push(
        `<span class="shc-ap-chip${exOn ? " on" : ""}" data-entity="${esc(ex.entity)}">${esc(ex.label)}</span>`,
      );
    });
    if (row.action) {
      chips.push(
        `<span class="shc-ap-chip shc-ap-chip-action" data-action-target="${esc(row.action.script)}" data-action-kind="script">${esc(row.action.label)}</span>`,
      );
    }

    return `<div class="shc-ap-row-group">
      <div class="shc-ap-row-group-top">
        <span class="shc-ap-row-group-label"><span class="shc-ap-row-group-ic">${icon}</span>${esc(row.label)}</span>
        ${row.toggle ? `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.toggle)}" aria-pressed="${on}"></button>` : ""}
      </div>
      ${chips.length ? `<div class="shc-ap-row-chips">${chips.join("")}</div>` : ""}
    </div>`;
  }

  _actionRowHtml(row) {
    const target = row.service ? row.service : row.entity;
    return `<div class="shc-ap-row">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <button type="button" class="shc-ap-action-btn" data-action-target="${esc(target)}" data-action-kind="${row.service ? "service" : "script"}" data-confirm="${esc(row.confirm || "")}">Esegui</button>
    </div>`;
  }

  _openSettings() {
    this._settingsView = { view: "main" };
    this._renderSettingsView();
  }

  _renderSettingsView() {
    const view = this._settingsView || { view: "main" };
    if (view.view === "days") this._renderSettingsDays(view.row);
    else this._renderSettingsMain();
  }

  _renderSettingsMain() {
    const hass = this._hass;
    this._settingsGroupRows = [];
    const sections = (this._config.settings_sections || [])
      .map(
        (sec) => `<div class="shc-ap-sec">
          <div class="shc-ap-sec-cap">${esc(sec.title)}</div>
          ${sec.rows.map((row) => (row.type === "group" ? this._settingsGroupRowHtml(hass, row) : this._settingsRowHtml(hass, row))).join("")}
        </div>`,
      )
      .join("");

    const actions = this._config.actions || [];
    const actionsHtml = actions.length
      ? `<div class="shc-ap-sec">
           <div class="shc-ap-sec-cap">Strumenti</div>
           ${actions.map((a) => this._actionRowHtml(a)).join("")}
         </div>`
      : "";

    const overlay = this._openDialog("Impostazioni", `${sections}${actionsHtml}`);
    this._wireSettingsOverlay(overlay);
  }

  _renderSettingsDays(row) {
    const hass = this._hass;
    const DAY_LABELS = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
    const rowsHtml = row.days
      .map((entityId, i) => {
        const st = hass.states[entityId];
        const on = st?.state === "on";
        return `<div class="shc-ap-row">
          <span class="shc-ap-row-label">${esc(DAY_LABELS[i])}</span>
          <button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(entityId)}" aria-pressed="${on}"></button>
        </div>`;
      })
      .join("");

    const overlay = this._openDialog(`Giorni – ${row.label}`, `
      <div class="shc-ap-sub-back" data-back>${ICON_BACK} Impostazioni</div>
      <div class="shc-ap-sec">${rowsHtml}</div>
    `);
    this._wireSettingsOverlay(overlay);
    overlay.querySelector("[data-back]")?.addEventListener("click", () => {
      this._settingsView = { view: "main" };
      this._renderSettingsView();
    });
  }

  _wireSettingsOverlay(overlay) {
    const hass = this._hass;
    overlay.querySelectorAll("[data-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const entity = btn.dataset.entity;
        const domain = entity.split(".")[0];
        hass.callService(domain, "toggle", { entity_id: entity });
        setTimeout(() => this._renderSettingsView(), 200);
      });
    });
    overlay.querySelectorAll("[data-open-entity]").forEach((row) => {
      row.addEventListener("click", () => {
        const e = new Event("hass-more-info", { bubbles: true, composed: true });
        e.detail = { entityId: row.dataset.openEntity };
        this.dispatchEvent(e);
      });
    });
    overlay.querySelectorAll("[data-open-days]").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        const row = this._settingsGroupRows[Number(chip.dataset.openDays)];
        this._settingsView = { view: "days", row };
        this._renderSettingsView();
      });
    });
    overlay.querySelectorAll("[data-action-target]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const confirmText = btn.dataset.confirm;
        if (confirmText && !window.confirm(confirmText)) return;
        if (btn.dataset.actionKind === "service") {
          const [domain, service] = btn.dataset.actionTarget.split(".");
          hass.callService(domain, service, {});
        } else {
          hass.callService("script", "turn_on", { entity_id: btn.dataset.actionTarget });
        }
      });
    });
  }

  // Righe semplici (stile "lista" della vecchia card): etichetta a
  // sinistra, valore a destra, stesso chip visivo usato in Impostazioni.
  _statRow(label, value) {
    return this._row(label, `<span class="shc-ap-row-val">${esc(value)}</span>`);
  }

  _val(hass, entityId, digits) {
    const st = entityId ? hass.states[entityId] : null;
    if (!st) return "\u2014";
    const n = Number(st.state);
    const unit = st.attributes?.unit_of_measurement || "";
    const num = Number.isFinite(n) && digits != null ? n.toFixed(digits) : st.state;
    return `${num}${unit ? " " + unit : ""}`;
  }

  _fmtAxis(v) {
    if (!Number.isFinite(v)) return "0";
    const s = Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  }

  _smoothPath(coords) {
    if (coords.length < 3) {
      return `M ${coords.map((c) => `${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(" L ")}`;
    }
    let d = `M ${coords[0][0].toFixed(1)},${coords[0][1].toFixed(1)}`;
    for (let i = 1; i < coords.length - 1; i++) {
      const [x0, y0] = coords[i];
      const [x1, y1] = coords[i + 1];
      const mx = (x0 + x1) / 2;
      const my = (y0 + y1) / 2;
      d += ` Q ${x0.toFixed(1)},${y0.toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`;
    }
    const last = coords[coords.length - 1];
    d += ` L ${last[0].toFixed(1)},${last[1].toFixed(1)}`;
    return d;
  }

  _lineChartSvg(points, color) {
    if (!points.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 90;
    const plotX0 = 24;
    const plotW = width - plotX0;
    const values = points.map((p) => p.y);
    const min = Math.min(...values, 0);
    const max = Math.max(...values, min + 1);
    const range = max - min || 1;
    const stepX = points.length > 1 ? plotW / (points.length - 1) : 0;
    const coords = points.map((p, i) => [plotX0 + i * stepX, height - ((p.y - min) / range) * (height - 6) - 3]);
    const lineD = this._smoothPath(coords);
    const areaD = `${lineD} L ${coords[coords.length - 1][0].toFixed(1)},${height} L ${coords[0][0].toFixed(1)},${height} Z`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg" preserveAspectRatio="none">
      <line x1="${plotX0}" y1="3" x2="${plotX0}" y2="${height - 3}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="8" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 3}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(min)}</text>
      <path d="${areaD}" fill="${color}" opacity="0.14"/>
      <path d="${lineD}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;
  }

  _labelSpans(items, count, formatFn) {
    if (!items.length) return "";
    const n = Math.min(count, items.length);
    const idxs = [];
    for (let i = 0; i < n; i++) {
      idxs.push(n === 1 ? 0 : Math.round((i * (items.length - 1)) / (n - 1)));
    }
    const seen = new Set();
    const unique = idxs.filter((i) => (seen.has(i) ? false : (seen.add(i), true)));
    return `<div class="shc-ap-chart-labels">${unique.map((i) => `<span>${formatFn(items[i], i)}</span>`).join("")}</div>`;
  }

  async _fetchHistory6h(entityId) {
    const end = new Date();
    const start = new Date(end.getTime() - 6 * 3600 * 1000);
    const result = await this._hass.connection.sendMessagePromise({
      type: "history/history_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
    });
    const rows = result?.[entityId] || [];
    return rows
      .map((r) => ({ t: new Date((r.lu || r.last_updated_ts) * 1000 || r.last_updated), y: Number(r.s ?? r.state) }))
      .filter((p) => Number.isFinite(p.y));
  }

  _openMeterChart(entityId, title, color) {
    if (!entityId) return;
    shcOpenChartPopup(this, { title, series: [{ entity: entityId, label: title, color }] });
  }

  // Riusa pari pari il vecchio popup "Statistiche" (browser_mod) della card
  // Statistiche Home Assistant, invece del dialog interno moderno.
  _openStatsOrLegacy() {
    if (this._config.legacy_stats_popup) {
      const event = new Event("ll-custom", { bubbles: true, composed: true });
      event.detail = { browser_mod: this._config.legacy_stats_popup };
      this.dispatchEvent(event);
    } else {
      this._openStats();
    }
  }

  _openStats() {
    const hass = this._hass;
    const cfg = this._config;
    const s = cfg.sensors || {};
    const up = cfg.uptime || {};
    const val = (id, digits) => this._val(hass, id, digits);

    const sistemaHtml = [
      this._statRow("CPU", val(s.cpu, 0)),
      this._statRow("Velocit\u00e0 CPU", val(s.cpu_speed, 1)),
      this._statRow("RAM usata", val(s.ram_used, 0)),
      this._statRow("RAM totale", val(s.ram_total, 0)),
      this._statRow("RAM %", val(s.ram_pct, 1)),
      this._statRow("Disco usato", val(s.disk_used, 1)),
      this._statRow("Disco libero", val(s.disk_free, 1)),
      this._statRow("Disco totale", val(s.disk_total, 1)),
      this._statRow("Disco %", val(s.disk_pct, 1)),
    ].join("");

    const reteHtml = [this._statRow("IP locale", val(s.local_ip)), this._statRow("IP pubblico", val(s.public_ip))].join("");

    const avvioHtml = [
      this._statRow("HA avviato il", this._fmtDateTime(hass.states[up.ha_since]?.state)),
      this._statRow("HA in funzione da", val(up.ha_duration)),
      this._statRow("Server avviato il", this._fmtDateTime(hass.states[up.server_since]?.state)),
      this._statRow("Server in funzione da", val(up.server_duration)),
    ].join("");

    const dbHtml = cfg.db_size ? this._statRow("Spazio MariaDB", val(cfg.db_size, 1)) : "";

    this._openDialog("Statistiche", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Sistema</div>${sistemaHtml}</div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Rete</div>${reteHtml}</div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Avvio</div>${avvioHtml}</div>
      ${dbHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Database</div>${dbHtml}</div>` : ""}
    `);
  }

  _openUpdate() {
    const hass = this._hass;
    const cfg = this._config;
    const u = cfg.updates || {};
    const val = (id, digits) => this._val(hass, id, digits);
    const coreUpd = u.core ? hass.states[u.core] : null;
    const supUpd = u.supervisor ? hass.states[u.supervisor] : null;

    const aggiornamentiHtml = [
      this._statRow("Core installato", coreUpd?.attributes?.installed_version ?? "\u2014"),
      this._statRow("Core disponibile", coreUpd?.attributes?.latest_version ?? "\u2014"),
      this._statRow("Supervisor installato", supUpd?.attributes?.installed_version ?? "\u2014"),
      this._statRow("Supervisor disponibile", supUpd?.attributes?.latest_version ?? "\u2014"),
      this._statRow("Addon da aggiornare", val(u.addon_count, 0)),
      this._statRow("HACS da aggiornare", val(u.hacs_count, 0)),
    ].join("");

    const sslIso = cfg.ssl_cert ? hass.states[cfg.ssl_cert]?.state : null;
    const sslDays = this._daysUntil(sslIso);
    const manutenzioneHtml = [
      cfg.last_backup ? this._statRow("Ultimo backup riuscito (Synology)", this._fmtDateTime(hass.states[cfg.last_backup]?.state)) : "",
      cfg.ssl_cert ? this._statRow("Certificato SSL scade il", this._fmtDateTime(sslIso)) : "",
      cfg.ssl_cert ? this._statRow("Giorni rimanenti", sslDays ?? "\u2014") : "",
    ].join("");

    this._openDialog("Aggiornamenti", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Aggiornamenti disponibili</div>${aggiornamentiHtml}</div>
      ${manutenzioneHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Manutenzione</div>${manutenzioneHtml}</div>` : ""}
    `);
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;
    const s = cfg.sensors || {};
    const u = cfg.updates || {};
    const up = cfg.uptime || {};

    const coreUpd = u.core ? hass.states[u.core] : null;
    this._root.querySelector(".shc-c-core").textContent = coreUpd?.attributes?.installed_version ?? "\u2014";
    this._root.querySelector(".shc-c-uptime").textContent = this._fmtDateTime(hass.states[up.ha_since]?.state);
    const sslIso = cfg.ssl_cert ? hass.states[cfg.ssl_cert]?.state : null;
    const sslDays = this._daysUntil(sslIso);
    this._root.querySelector(".shc-c-ssl").textContent = sslDays != null ? `${sslDays} gg` : "\u2014";

    const cpu = s.cpu ? Number(hass.states[s.cpu]?.state) : NaN;
    const cpuVal = Number.isFinite(cpu) ? cpu : 0;
    this._root.querySelector(".shc-c-cpu-val").textContent = `${cpuVal.toFixed(0)}%`;
    const cpuBar = this._root.querySelector(".shc-c-cpu-bar");
    cpuBar.style.width = `${Math.min(100, Math.max(0, cpuVal))}%`;
    cpuBar.style.background = meterSeverityColor(cpuVal);

    const ram = s.ram_pct ? Number(hass.states[s.ram_pct]?.state) : NaN;
    const ramVal = Number.isFinite(ram) ? ram : 0;
    this._root.querySelector(".shc-c-ram-val").textContent = `${ramVal.toFixed(0)}%`;
    const ramBar = this._root.querySelector(".shc-c-ram-bar");
    ramBar.style.width = `${Math.min(100, Math.max(0, ramVal))}%`;
    ramBar.style.background = meterSeverityColor(ramVal);

    const disk = s.disk_pct ? Number(hass.states[s.disk_pct]?.state) : NaN;
    const diskVal = Number.isFinite(disk) ? disk : 0;
    this._root.querySelector(".shc-c-disk-val").textContent = `${diskVal.toFixed(0)}%`;
    const diskBar = this._root.querySelector(".shc-c-disk-bar");
    diskBar.style.width = `${Math.min(100, Math.max(0, diskVal))}%`;
    diskBar.style.background = meterSeverityColor(diskVal);

    const warnEl = this._root.querySelector(".shc-ap-warn");
    const supUpd = u.supervisor ? hass.states[u.supervisor] : null;
    const addonCount = u.addon_count ? Number(hass.states[u.addon_count]?.state) : 0;
    const hacsCount = u.hacs_count ? Number(hass.states[u.hacs_count]?.state) : 0;
    const warnings = [];
    if (coreUpd?.state === "on") warnings.push(`Core \u2192 ${coreUpd.attributes?.latest_version}`);
    if (supUpd?.state === "on") warnings.push(`Supervisor \u2192 ${supUpd.attributes?.latest_version}`);
    if (addonCount > 0) warnings.push(`${addonCount} addon`);
    if (hacsCount > 0) warnings.push(`${hacsCount} HACS`);
    if (sslDays != null && sslDays <= 14) warnings.push(`SSL scade tra ${sslDays}gg`);
    const card = this._root.querySelector(".shc-ap-card");
    if (warnings.length) {
      warnEl.hidden = false;
      warnEl.textContent = "\u26a0 " + warnings.join(" \u00b7 ");
      card.classList.add("has-alarm");
    } else {
      warnEl.hidden = true;
      card.classList.remove("has-alarm");
    }
  }

  _graphSeries() {
    const s = this._config.sensors || {};
    return [
      { entity: s.cpu, label: "CPU", color: "#38bdf8" },
      { entity: s.ram_pct, label: "RAM", color: "#22c55e" },
      { entity: s.disk_pct, label: "Disco HA", color: "#eab308" },
    ];
  }

  getCardSize() {
    return 7;
  }

  static getConfigElement() {
    return document.createElement("shc-server-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "Home Assistant",
      artwork: "server",
    };
  }
}

customElements.define("shc-server-card", ShcServerCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-server-card",
  name: "Server Home Assistant",
  description: "Card per il server/host di Home Assistant: CPU/RAM/disco, aggiornamenti, backup, riavvii",
  author: "Simonz82",
});

class ShcNasCard extends HTMLElement {
  setConfig(config) {
    if (!config.update_entity) throw new Error("update_entity \u00e8 obbligatorio");
    this._config = {
      name: "Synology NAS",
      artwork: "nas",
      model: "DS925+",
      sensors: {},
      disks: [],
      energy: {},
      actions: [],
      settings_sections: [],
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._heroId = "na" + Math.random().toString(36).slice(2, 8);
    const hero = (HERO_BUILDERS[this._config.artwork] || HERO_BUILDERS.nas)(this._heroId);
    const chip = CHIP_SVGS[this._config.artwork] || CHIP_SVGS.nas;
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card is-run">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${chip}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
          </span>
          <span class="shc-ap-badge run"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label">ONLINE</span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Impostazioni">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-update" title="Aggiornamenti">${ICON_BELL}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Statistiche">${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-ap-consumi" title="Consumi">${ICON_BOLT}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero">${hero}</div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Sistema</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BOX}</span><small>Modello</small></span><b class="shc-n-model">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TAG}</span><small>DSM</small></span><b class="shc-n-dsm">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_SHIELD}</span><small>Sicurezza</small></span><b class="shc-n-security">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BOLT}</span><small>Consumo</small></span><b class="shc-n-watt-front">\u2014</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter shc-c-meter-clickable shc-n-meter-cpu">
              <div class="shc-ap-meter-row"><span>CPU</span><strong class="shc-n-cpu-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-n-cpu-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-n-meter-ram">
              <div class="shc-ap-meter-row"><span>RAM</span><strong class="shc-n-ram-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-n-ram-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-n-meter-vol1">
              <div class="shc-ap-meter-row"><span class="shc-n-vol1-label">Volume 1</span><strong class="shc-n-vol1-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-n-vol1-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-n-meter-vol2">
              <div class="shc-ap-meter-row"><span class="shc-n-vol2-label">Volume 2</span><strong class="shc-n-vol2-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-n-vol2-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-n-meter-usb" hidden>
              <div class="shc-ap-meter-row"><span>USB</span><strong class="shc-n-usb-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-n-usb-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-n-meter-temp">
              <div class="shc-ap-meter-row"><span>Temperatura</span><strong class="shc-n-temp-val">0°C</strong></div>
              <div class="shc-ap-bar"><i class="shc-n-temp-bar" style="width:0%"></i></div>
            </div>
          </div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);
    this._root.querySelector(".shc-ap-settings").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openSettings();
    });
    this._root.querySelector(".shc-ap-update").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openUpdate();
    });
    this._root.querySelector(".shc-ap-stats").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-ap-consumi").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openConsumi();
    });
    this._root.querySelector(".shc-ap-hero").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-n-meter-cpu").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.cpu, "CPU", "#38bdf8");
    });
    this._root.querySelector(".shc-n-meter-ram").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.ram_pct, "RAM", "#22c55e");
    });
    this._root.querySelector(".shc-n-meter-vol1").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.vol1, this._config.sensors?.vol1_label || "Volume 1", "#eab308");
    });
    this._root.querySelector(".shc-n-meter-vol2").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.vol2, this._config.sensors?.vol2_label || "Volume 2", "#f97316");
    });
    this._root.querySelector(".shc-n-meter-usb").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.usb_pct, "USB", "#a855f7");
    });
    this._root.querySelector(".shc-n-meter-temp").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.temp, "Temperatura", "#ef4444");
    });
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml) {
    let overlay = this._root.querySelector(".shc-ap-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      // Menu a tendina delle impostazioni (righe input_select): la scelta viene applicata subito.
      overlay.addEventListener("change", (e) => {
        const t = e.target;
        if (t && t.dataset && t.dataset.selectEntity && this._hass) {
          this._hass.callService("input_select", "select_option", { entity_id: t.dataset.selectEntity, option: t.value });
        }
      });
      this._root.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.hidden = false;
    return overlay;
  }

  _fmtDateTime(iso) {
    if (!iso) return "\u2014";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return String(iso);
    return d.toLocaleString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  _settingsRowHtml(hass, row) {
    const st = hass.states[row.entity];
    if (!st) return this._row(row.label, `<span class="shc-ap-row-val">n/d</span>`);
    const domain = row.entity.split(".")[0];
    if (["input_boolean", "automation", "switch"].includes(domain)) {
      const on = st.state === "on";
      return this._row(
        row.label,
        `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.entity)}" aria-pressed="${on}"></button>`,
      );
    }
    if (domain === "input_select") {
      const opts = (st.attributes?.options || [])
        .map((o) => `<option value="${esc(o)}"${o === st.state ? " selected" : ""}>${esc(o)}</option>`)
        .join("");
      return this._row(row.label, `<select class="shc-ap-select" data-select-entity="${esc(row.entity)}">${opts}</select>`);
    }
    const unit = st.attributes?.unit_of_measurement || "";
    return `<div class="shc-ap-row" data-open-entity="${esc(row.entity)}" style="cursor:pointer">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <span class="shc-ap-row-val">${esc(st.state)}${unit ? " " + esc(unit) : ""}</span>
    </div>`;
  }

  // Le azioni di questa card puntano quasi tutte a entita' "button.*"
  // (riavvio/spegnimento nativi Synology, chiamano button.press con target),
  // a differenza di Fritz/Server che usano script.* o servizi senza target:
  // qui serve un terzo ramo dedicato al dominio "button".
  _actionRowHtml(row) {
    const domain = row.entity ? row.entity.split(".")[0] : row.service ? row.service.split(".")[0] : "";
    const target = row.service ? row.service : row.entity;
    const kind = row.service ? "service" : domain === "button" ? "button" : "script";
    return `<div class="shc-ap-row">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <button type="button" class="shc-ap-action-btn" data-action-target="${esc(target)}" data-action-kind="${kind}" data-confirm="${esc(row.confirm || "")}">Esegui</button>
    </div>`;
  }

  _openSettings() {
    const hass = this._hass;
    const sections = (this._config.settings_sections || [])
      .map(
        (sec) => `<div class="shc-ap-sec">
          <div class="shc-ap-sec-cap">${esc(sec.title)}</div>
          ${sec.rows.map((row) => this._settingsRowHtml(hass, row)).join("")}
        </div>`,
      )
      .join("");

    const actions = this._config.actions || [];
    const actionsHtml = actions.length
      ? `<div class="shc-ap-sec">
           <div class="shc-ap-sec-cap">Strumenti</div>
           ${actions.map((a) => this._actionRowHtml(a)).join("")}
         </div>`
      : "";

    const overlay = this._openDialog("Impostazioni", `${sections}${actionsHtml}`);

    overlay.querySelectorAll("[data-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const entity = btn.dataset.entity;
        const domain = entity.split(".")[0];
        hass.callService(domain, "toggle", { entity_id: entity });
        setTimeout(() => this._openSettings(), 200);
      });
    });
    overlay.querySelectorAll("[data-open-entity]").forEach((row) => {
      row.addEventListener("click", () => {
        const e = new Event("hass-more-info", { bubbles: true, composed: true });
        e.detail = { entityId: row.dataset.openEntity };
        this.dispatchEvent(e);
      });
    });
    overlay.querySelectorAll("[data-action-target]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const confirmText = btn.dataset.confirm;
        if (confirmText && !window.confirm(confirmText)) return;
        if (btn.dataset.actionKind === "service") {
          const [domain, service] = btn.dataset.actionTarget.split(".");
          hass.callService(domain, service, {});
        } else if (btn.dataset.actionKind === "button") {
          hass.callService("button", "press", { entity_id: btn.dataset.actionTarget });
        } else {
          hass.callService("script", "turn_on", { entity_id: btn.dataset.actionTarget });
        }
      });
    });
  }

  _statRow(label, value) {
    return this._row(label, `<span class="shc-ap-row-val">${esc(value)}</span>`);
  }

  _statRow2(label, aVal, bVal) {
    return this._row(label, `<span class="shc-ap-row-val">${esc(aVal)}&nbsp;&nbsp;\u00b7&nbsp;&nbsp;${esc(bVal)}</span>`);
  }

  _val(hass, entityId, digits) {
    const st = entityId ? hass.states[entityId] : null;
    if (!st) return "\u2014";
    const n = Number(st.state);
    const unit = st.attributes?.unit_of_measurement || "";
    const num = Number.isFinite(n) && digits != null ? n.toFixed(digits) : st.state;
    return `${num}${unit ? " " + unit : ""}`;
  }

  _fmtAxis(v) {
    if (!Number.isFinite(v)) return "0";
    const s = Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  }

  _smoothPath(coords) {
    if (coords.length < 3) {
      return `M ${coords.map((c) => `${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(" L ")}`;
    }
    let d = `M ${coords[0][0].toFixed(1)},${coords[0][1].toFixed(1)}`;
    for (let i = 1; i < coords.length - 1; i++) {
      const [x0, y0] = coords[i];
      const [x1, y1] = coords[i + 1];
      const mx = (x0 + x1) / 2;
      const my = (y0 + y1) / 2;
      d += ` Q ${x0.toFixed(1)},${y0.toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`;
    }
    const last = coords[coords.length - 1];
    d += ` L ${last[0].toFixed(1)},${last[1].toFixed(1)}`;
    return d;
  }

  _lineChartSvg(points, color) {
    if (!points.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 90;
    const plotX0 = 24;
    const plotW = width - plotX0;
    const values = points.map((p) => p.y);
    const min = Math.min(...values, 0);
    const max = Math.max(...values, min + 1);
    const range = max - min || 1;
    const stepX = points.length > 1 ? plotW / (points.length - 1) : 0;
    const coords = points.map((p, i) => [plotX0 + i * stepX, height - ((p.y - min) / range) * (height - 6) - 3]);
    const lineD = this._smoothPath(coords);
    const areaD = `${lineD} L ${coords[coords.length - 1][0].toFixed(1)},${height} L ${coords[0][0].toFixed(1)},${height} Z`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg" preserveAspectRatio="none">
      <line x1="${plotX0}" y1="3" x2="${plotX0}" y2="${height - 3}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="8" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 3}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(min)}</text>
      <path d="${areaD}" fill="${color}" opacity="0.14"/>
      <path d="${lineD}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;
  }

  _labelSpans(items, count, formatFn) {
    if (!items.length) return "";
    const n = Math.min(count, items.length);
    const idxs = [];
    for (let i = 0; i < n; i++) {
      idxs.push(n === 1 ? 0 : Math.round((i * (items.length - 1)) / (n - 1)));
    }
    const seen = new Set();
    const unique = idxs.filter((i) => (seen.has(i) ? false : (seen.add(i), true)));
    return `<div class="shc-ap-chart-labels">${unique.map((i) => `<span>${formatFn(items[i], i)}</span>`).join("")}</div>`;
  }

  async _fetchHistory6h(entityId) {
    const end = new Date();
    const start = new Date(end.getTime() - 6 * 3600 * 1000);
    const result = await this._hass.connection.sendMessagePromise({
      type: "history/history_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
    });
    const rows = result?.[entityId] || [];
    return rows
      .map((r) => ({ t: new Date((r.lu || r.last_updated_ts) * 1000 || r.last_updated), y: Number(r.s ?? r.state) }))
      .filter((p) => Number.isFinite(p.y));
  }

  _openMeterChart(entityId, title, color) {
    if (!entityId) return;
    shcOpenChartPopup(this, { title, series: [{ entity: entityId, label: title, color }] });
  }

  _stateLabel(raw) {
    const MAP = { normal: "Normale", has_migrated_disk: "Migrato" };
    return MAP[raw] || (raw ? raw.charAt(0).toUpperCase() + raw.slice(1) : "\u2014");
  }

  _openStats() {
    const hass = this._hass;
    const cfg = this._config;
    const s = cfg.sensors || {};
    const val = (id, digits) => this._val(hass, id, digits);

    const sistemaHtml = [
      this._statRow("CPU totale", val(s.cpu, 0)),
      this._statRow("CPU utente", val(s.cpu_user, 0)),
      this._statRow2("Carico medio", val(s.load5, 1), val(s.load15, 1)),
      this._statRow("RAM usata", val(s.ram_pct, 0)),
      this._statRow("RAM disponibile", val(s.ram_free, 0)),
      this._statRow("RAM totale", val(s.ram_total, 0)),
    ].join("");

    const volumiHtml = (cfg.volumes || [])
      .map((v) => this._statRow2(v.label, this._stateLabel(hass.states[v.status_entity]?.state), val(v.temp_entity, 0)))
      .join("");

    const dischiHtml = (cfg.disks || [])
      .map((d) => this._statRow2(d.label, this._stateLabel(hass.states[d.status_entity]?.state), val(d.temp_entity, 0)))
      .join("");

    const reteHtml = s.net_down
      ? this._statRow2("Rete", `\u2193 ${val(s.net_down, 1)}`, `\u2191 ${val(s.net_up, 1)}`)
      : "";

    this._openDialog("Statistiche", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Sistema</div>${sistemaHtml}</div>
      ${volumiHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Volumi</div>${volumiHtml}</div>` : ""}
      ${dischiHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Dischi</div>${dischiHtml}</div>` : ""}
      ${reteHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Rete</div>${reteHtml}</div>` : ""}
    `);
  }

  _openUpdate() {
    const hass = this._hass;
    const cfg = this._config;
    const upd = hass.states[cfg.update_entity];
    const installed = upd?.attributes?.installed_version ?? "\u2014";
    const latest = upd?.attributes?.latest_version ?? "\u2014";
    const upToDate = upd?.state !== "on";

    const html = [
      this._statRow("DSM installato", installed),
      this._statRow("DSM disponibile", latest),
      this._statRow("Stato", upToDate ? "Aggiornato" : "Aggiornamento disponibile"),
    ].join("");

    this._openDialog("Aggiornamenti", `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Sistema Operativo (DSM)</div>${html}</div>`);
  }

  _openConsumi() {
    const hass = this._hass;
    const cfg = this._config;
    const en = cfg.energy || {};
    const val = (id, digits) => this._val(hass, id, digits);
    const costoKwh = Number(hass.states[en.cost_entity || "input_number.costo_energia"]?.state) || 0;

    const attualeHtml = en.power ? this._statRow("Consumo attuale", val(en.power, 1)) : "";
    const todayKwh = en.today_kwh ? Number(hass.states[en.today_kwh]?.state) : NaN;
    const monthKwh = en.month_kwh ? Number(hass.states[en.month_kwh]?.state) : NaN;
    const energiaHtml = [
      Number.isFinite(todayKwh) ? this._statRow2("Oggi", `${todayKwh.toFixed(2)} kWh`, `${(todayKwh * costoKwh).toFixed(2)} \u20ac`) : "",
      Number.isFinite(monthKwh) ? this._statRow2("Mese", `${monthKwh.toFixed(2)} kWh`, `${(monthKwh * costoKwh).toFixed(2)} \u20ac`) : "",
    ].join("");

    const useAutoStats = !!cfg.energy_stat_entity;
    this._openDialog("Consumi", `
      ${attualeHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">In tempo reale</div>${attualeHtml}</div>` : ""}
      ${energiaHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Energia NAS</div>${energiaHtml}</div>` : ""}
      ${useAutoStats ? this._autoConsumiHtml() : ""}
      ${this._energyBarsHtml()}
    `);
    if (useAutoStats) {
      const overlay = this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov)");
      this._loadEnergyBars(overlay);
      this._loadAutoPeriods(overlay);
    }
  }

  // Consumi per periodo (oggi/ieri/mese/anno) calcolati dalle statistiche HA, piu' gli
  // istogrammi mese/anno - stesso motore "storici automatici" della card Elettrodomestici,
  // qui attivo se configuri energy_stat_entity (sensore kWh con storico a lungo termine).
  _autoConsumiHtml() {
    return `<div class="shc-ap-sec">
      <div class="shc-ap-sec-cap">Consumi per periodo</div>
      <div class="shc-ap-week-list" data-auto-periods><div class="shc-ap-row-val">Caricamento…</div></div>
    </div>`;
  }

  async _loadAutoPeriods(overlay) {
    const cfg = this._config;
    const slot = overlay?.querySelector("[data-auto-periods]");
    if (!slot || !cfg.energy_stat_entity) return;
    const costRaw = cfg.cost_entity ? Number(this._hass.states[cfg.cost_entity]?.state) : NaN;
    try {
      const p = await shcComputeAutoPeriods(this._hass, cfg.energy_stat_entity, costRaw);
      const row = (key, def) => {
        const d = p[key];
        const kwh = Number.isFinite(d?.kwh) ? `${d.kwh.toFixed(2)} kWh` : "—";
        const cost = Number.isFinite(d?.cost) ? `${d.cost.toFixed(2)} €` : "—";
        return `<div class="shc-ap-week-row">
          <div class="shc-ap-week-day">${esc(def)}</div>
          <div class="shc-ap-week-stats cols2">
            <div class="shc-ap-week-stat"><small>Consumo</small><b>${kwh}</b></div>
            <div class="shc-ap-week-stat"><small>Costo</small><b>${cost}</b></div>
          </div>
        </div>`;
      };
      slot.innerHTML = [row("today", "Oggi"), row("yesterday", "Ieri"), row("month", "Mese"), row("month_prev", "Mese prec."), row("year", "Anno"), row("year_prev", "Anno prec.")].join("");
    } catch (e) {
      slot.innerHTML = `<div class="shc-ap-row-val">Statistiche non disponibili al momento</div>`;
    }
  }

  _energyBarsHtml() {
    if (!this._config.energy_stat_entity) return "";
    return `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Questo mese (kWh al giorno)</div><div class="shc-ap-chart-loading" data-chart="month">Caricamento...</div></div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Quest'anno (kWh al mese)</div><div class="shc-ap-chart-loading" data-chart="year">Caricamento...</div></div>`;
  }

  async _fetchAutoStats(entityId, period, start, end) {
    const result = await this._hass.connection.sendMessagePromise({
      type: "recorder/statistics_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      statistic_ids: [entityId],
      period,
    });
    const rows = result?.[entityId] || [];
    return rows.map((r) => ({ t: new Date(r.start), value: Math.max(0, Number(r.change ?? 0)) }));
  }

  _barChartSvg(bars, color) {
    if (!bars.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 90;
    const plotX0 = 24;
    const plotW = width - plotX0;
    const labelSpace = 22;
    const barAreaH = height - labelSpace;
    const max = Math.max(...bars.map((b) => b.value), 0.01);
    const gap = 3;
    const barW = (plotW - gap * (bars.length - 1)) / bars.length;
    const fmt = (v) => {
      if (!(v > 0)) return "";
      const s = v.toFixed(1);
      return s.endsWith(".0") ? s.slice(0, -2) : s;
    };
    const parts = bars
      .map((b, i) => {
        const h = Math.max(1, (b.value / max) * (barAreaH - 2));
        const x = (plotX0 + i * (barW + gap)).toFixed(1);
        const y = (height - h).toFixed(1);
        const cx = (plotX0 + i * (barW + gap) + barW / 2).toFixed(1);
        const labelY = (height - h - 4).toFixed(1);
        const label = fmt(b.value);
        const text = label
          ? `<text x="${cx}" y="${labelY}" transform="rotate(-90 ${cx} ${labelY})" text-anchor="start" font-size="10" font-weight="800" fill="#94a3b8">${label}</text>`
          : "";
        return `<rect x="${x}" y="${y}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${color}"/>${text}`;
      })
      .join("");
    const axis = `<line x1="${plotX0}" y1="${labelSpace}" x2="${plotX0}" y2="${height}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="${labelSpace + 6}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 1}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">0</text>`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg" preserveAspectRatio="none">${axis}${parts}</svg>`;
  }

  _loadEnergyBars(overlay) {
    const energyEntity = this._config.energy_stat_entity;
    if (!energyEntity || !overlay) return;
    const slot = (name) => overlay.querySelector(`[data-chart="${name}"]`);
    const now = new Date();
    const MONTH_ABBR = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
    this._fetchAutoStats(energyEntity, "day", new Date(now.getFullYear(), now.getMonth(), 1), now)
      .then((rows) => {
        const el = slot("month");
        if (!el) return;
        const bars = rows.map((r) => ({ value: r.value }));
        el.outerHTML = `<div data-chart="month">${this._barChartSvg(bars, "#0ea5e9")}${this._labelSpans(rows, 8, (r) => r.t.getDate())}</div>`;
      })
      .catch(() => {
        const el = slot("month");
        if (el) el.textContent = "Errore caricamento dati";
      });
    this._fetchAutoStats(energyEntity, "month", new Date(now.getFullYear(), 0, 1), now)
      .then((rows) => {
        const el = slot("year");
        if (!el) return;
        const bars = rows.map((r) => ({ value: r.value }));
        const labels = `<div class="shc-ap-chart-labels">${rows.map((r) => `<span>${MONTH_ABBR[r.t.getMonth()]}</span>`).join("")}</div>`;
        el.outerHTML = `<div data-chart="year">${this._barChartSvg(bars, "#0ea5e9")}${labels}</div>`;
      })
      .catch(() => {
        const el = slot("year");
        if (el) el.textContent = "Errore caricamento dati";
      });
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;
    const s = cfg.sensors || {};

    this._root.querySelector(".shc-n-model").textContent = cfg.model || "\u2014";
    const upd = hass.states[cfg.update_entity];
    this._root.querySelector(".shc-n-dsm").textContent = upd?.attributes?.installed_version ?? "\u2014";

    const secSt = cfg.security_entity ? hass.states[cfg.security_entity] : null;
    this._root.querySelector(".shc-n-security").textContent = secSt ? (secSt.state === "on" ? "Attenzione" : "OK") : "\u2014";

    const cpu = s.cpu ? Number(hass.states[s.cpu]?.state) : NaN;
    const cpuVal = Number.isFinite(cpu) ? cpu : 0;
    this._root.querySelector(".shc-n-cpu-val").textContent = `${cpuVal.toFixed(0)}%`;
    const cpuBar = this._root.querySelector(".shc-n-cpu-bar");
    cpuBar.style.width = `${Math.min(100, Math.max(0, cpuVal))}%`;
    cpuBar.style.background = meterSeverityColor(cpuVal);

    const ram = s.ram_pct ? Number(hass.states[s.ram_pct]?.state) : NaN;
    const ramVal = Number.isFinite(ram) ? ram : 0;
    this._root.querySelector(".shc-n-ram-val").textContent = `${ramVal.toFixed(0)}%`;
    const ramBar = this._root.querySelector(".shc-n-ram-bar");
    ramBar.style.width = `${Math.min(100, Math.max(0, ramVal))}%`;
    ramBar.style.background = meterSeverityColor(ramVal);

    if (s.vol1) {
      this._root.querySelector(".shc-n-vol1-label").textContent = s.vol1_label || "Volume 1";
      const v1 = Number(hass.states[s.vol1]?.state);
      const v1Val = Number.isFinite(v1) ? v1 : 0;
      this._root.querySelector(".shc-n-vol1-val").textContent = `${v1Val.toFixed(0)}%`;
      const vol1Bar = this._root.querySelector(".shc-n-vol1-bar");
      vol1Bar.style.width = `${Math.min(100, Math.max(0, v1Val))}%`;
      vol1Bar.style.background = meterSeverityColor(v1Val);
    }
    if (s.vol2) {
      this._root.querySelector(".shc-n-vol2-label").textContent = s.vol2_label || "Volume 2";
      const v2 = Number(hass.states[s.vol2]?.state);
      const v2Val = Number.isFinite(v2) ? v2 : 0;
      this._root.querySelector(".shc-n-vol2-val").textContent = `${v2Val.toFixed(0)}%`;
      const vol2Bar = this._root.querySelector(".shc-n-vol2-bar");
      vol2Bar.style.width = `${Math.min(100, Math.max(0, v2Val))}%`;
      vol2Bar.style.background = meterSeverityColor(v2Val);
    }

    // Il volume USB compare solo quando c'e' davvero un disco collegato
    // (il sensore Synology va "unavailable" quando la porta e' vuota) -
    // "a scomparsa" come richiesto, non una barra vuota permanente.
    const usbMeter = this._root.querySelector(".shc-n-meter-usb");
    const usbSt = s.usb_pct ? hass.states[s.usb_pct] : null;
    const usbConnected = usbSt && usbSt.state !== "unavailable" && usbSt.state !== "unknown";
    usbMeter.hidden = !usbConnected;
    if (usbConnected) {
      const usbVal = Number(usbSt.state) || 0;
      this._root.querySelector(".shc-n-usb-val").textContent = `${usbVal.toFixed(0)}%`;
      const usbBar = this._root.querySelector(".shc-n-usb-bar");
      usbBar.style.width = `${Math.min(100, Math.max(0, usbVal))}%`;
      usbBar.style.background = meterSeverityColor(usbVal);
    }

    const nasTemp = s.temp ? Number(hass.states[s.temp]?.state) : NaN;
    const nasTempVal = Number.isFinite(nasTemp) ? nasTemp : 0;
    this._root.querySelector(".shc-n-temp-val").textContent = `${nasTempVal.toFixed(0)}°C`;
    const nasTempBar = this._root.querySelector(".shc-n-temp-bar");
    nasTempBar.style.width = `${Math.min(100, Math.max(0, (nasTempVal / 100) * 100))}%`;
    nasTempBar.style.background = nasTempVal >= 90 ? "#ef4444" : nasTempVal >= 80 ? "#f97316" : "#eab308";

    const en = cfg.energy || {};
    const watt = en.power ? Number(hass.states[en.power]?.state) : NaN;
    const wattVal = Number.isFinite(watt) ? Math.max(0, watt) : 0;
    this._root.querySelector(".shc-n-watt-front").textContent = en.power ? `${wattVal.toFixed(0)} W` : "\u2014";

    const warnEl = this._root.querySelector(".shc-ap-warn");
    const warnings = [];
    if (upd?.state === "on") warnings.push(`DSM \u2192 ${upd.attributes?.latest_version}`);
    if (secSt?.state === "on") warnings.push("Controllo sicurezza da verificare");
    const card = this._root.querySelector(".shc-ap-card");
    if (warnings.length) {
      warnEl.hidden = false;
      warnEl.textContent = "\u26a0 " + warnings.join(" \u00b7 ");
      card.classList.add("has-alarm");
    } else {
      warnEl.hidden = true;
      card.classList.remove("has-alarm");
    }
  }

  _graphSeries() {
    const s = this._config.sensors || {};
    return [
      { entity: s.cpu, label: "CPU", color: "#38bdf8" },
      { entity: s.ram_pct, label: "RAM", color: "#22c55e" },
      { entity: s.vol1, label: s.vol1_label || "Volume 1", color: "#eab308" },
      { entity: s.vol2, label: s.vol2_label || "Volume 2", color: "#f97316" },
      { entity: s.usb_pct, label: "USB", color: "#a855f7" },
      { entity: s.temp, label: "Temperatura", color: "#ef4444" },
    ];
  }

  getCardSize() {
    return 7;
  }

  static getConfigElement() {
    return document.createElement("shc-nas-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "Synology NAS",
      artwork: "nas",
      model: "DS925+",
    };
  }
}

customElements.define("shc-nas-card", ShcNasCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-nas-card",
  name: "NAS Synology",
  description: "Card per il NAS Synology: CPU/RAM/volumi, aggiornamenti DSM, consumi, riavvii",
  author: "Simonz82",
});

class ShcEnergyCard extends HTMLElement {
  setConfig(config) {
    if (!config.power_entity) throw new Error("power_entity \u00e8 obbligatorio");
    this._config = {
      name: "Energia Casa",
      artwork: "energy",
      max_power: 4500,
      periods: [],
      periods_prev: [],
      weekdays: {},
      circuits: [],
      switches: [],
      actions: [],
      settings_sections: [],
      layout: "classico", // "classico" (foto a sinistra) oppure "centrato" (foto in alto, blocco OGGI su 2 colonne)
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._heroId = "en" + Math.random().toString(36).slice(2, 8);
    const hero = (HERO_BUILDERS[this._config.artwork] || HERO_BUILDERS.energy)(this._heroId);
    const chip = CHIP_SVGS[this._config.artwork] || CHIP_SVGS.energy;
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card shc-e-card is-run${this._config.layout === "centrato" ? " layout-centrato" : ""}">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${chip}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
          </span>
          <span class="shc-ap-badge run"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label">ONLINE</span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-notif-center" title="Centro Notifiche" hidden>${ICON_NOTIFCENTER}</button>
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Impostazioni">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Statistiche">${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-ap-consumi" title="Consumi">${ICON_BOLT}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero">${hero}</div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Oggi</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BOLT}</span><small>Consumo</small></span><b class="shc-e-today-kwh">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_EURO}</span><small>Costo</small></span><b class="shc-e-today-cost">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_EURO}</span><small>Costo mese</small></span><b class="shc-e-month-cost">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TREND}</span><small>Top consumo</small></span><b class="shc-e-top">\u2014</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters"></div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);

    // Le prime 4 voci di "circuits" (Generale/Prese/Luce/Cantina nel setup
    // reale) diventano le barre sul fronte, come CPU/RAM sulle altre card;
    // il resto compare solo nel popup Circuiti - stesso split usato per
    // Volume1/Volume2/USB sulla card NAS.
    const metersEl = this._root.querySelector(".shc-ap-meters");
    (this._config.circuits || []).slice(0, 4).forEach((c, i) => {
      // Barra mostrata solo se configurata davvero: serve l'entita' da misurare e una scala
      // (max_entity selezionabile, oppure max fisso). Se manca, la barra non compare.
      if (!(c.entity || c.entity_helper) || !(c.max_entity || c.max)) return;
      const div = document.createElement("div");
      div.className = "shc-ap-meter shc-c-meter-clickable";
      div.dataset.circuitIndex = i;
      div.innerHTML = `<div class="shc-ap-meter-row"><span class="shc-e-c-label">${esc(c.label || "")}</span><strong class="shc-e-c-val">0 W</strong></div>
        <div class="shc-ap-bar"><i class="shc-e-c-bar" style="width:0%"></i></div>`;
      div.addEventListener("click", (e) => {
        e.stopPropagation();
        const eid = this._barEntity(c, this._hass);
        if (eid) this._openMeterChart(eid, this._barLabel(c, this._hass, eid), "#38bdf8");
      });
      metersEl.appendChild(div);
    });

    // Pulsante "Centro Notifiche": compare solo se configuri notif_center_path (facoltativo,
    // pensato per chi centralizza le impostazioni di piu' card in un'unica pagina condivisa -
    // senza, il pulsante resta nascosto invece di puntare a una pagina che non esiste).
    const notifBtn = this._root.querySelector(".shc-ap-notif-center");
    if (this._config.notif_center_path) {
      notifBtn.hidden = false;
      notifBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        history.pushState(null, "", this._config.notif_center_path);
        window.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true }));
      });
    }
    this._root.querySelector(".shc-ap-settings").addEventListener("click", (e) => {
      e.stopPropagation();
      if (this._config.legacy_settings_popup) {
        const event = new Event("ll-custom", { bubbles: true, composed: true });
        event.detail = { browser_mod: this._config.legacy_settings_popup };
        this.dispatchEvent(event);
      } else {
        this._openSettings();
      }
    });
    this._root.querySelector(".shc-ap-stats").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-ap-consumi").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openConsumi();
    });
    this._root.querySelector(".shc-ap-hero").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openConsumi();
    });
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml) {
    let overlay = this._root.querySelector(".shc-ap-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      // Menu a tendina delle impostazioni (righe input_select): la scelta viene applicata subito.
      overlay.addEventListener("change", (e) => {
        const t = e.target;
        if (t && t.dataset && t.dataset.selectEntity && this._hass) {
          this._hass.callService("input_select", "select_option", { entity_id: t.dataset.selectEntity, option: t.value });
        }
      });
      this._root.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.hidden = false;
    return overlay;
  }

  _settingsRowHtml(hass, row) {
    const st = hass.states[row.entity];
    if (!st) return this._row(row.label, `<span class="shc-ap-row-val">n/d</span>`);
    const domain = row.entity.split(".")[0];
    if (["input_boolean", "automation", "switch"].includes(domain)) {
      const on = st.state === "on";
      return this._row(
        row.label,
        `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.entity)}" aria-pressed="${on}"></button>`,
      );
    }
    if (domain === "input_select") {
      const opts = (st.attributes?.options || [])
        .map((o) => `<option value="${esc(o)}"${o === st.state ? " selected" : ""}>${esc(o)}</option>`)
        .join("");
      return this._row(row.label, `<select class="shc-ap-select" data-select-entity="${esc(row.entity)}">${opts}</select>`);
    }
    const unit = st.attributes?.unit_of_measurement || "";
    return `<div class="shc-ap-row" data-open-entity="${esc(row.entity)}" style="cursor:pointer">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <span class="shc-ap-row-val">${esc(st.state)}${unit ? " " + esc(unit) : ""}</span>
    </div>`;
  }

  _actionRowHtml(row) {
    const target = row.service ? row.service : row.entity;
    return `<div class="shc-ap-row">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <button type="button" class="shc-ap-action-btn" data-action-target="${esc(target)}" data-action-kind="${row.service ? "service" : "script"}" data-confirm="${esc(row.confirm || "")}">Esegui</button>
    </div>`;
  }

  _openSettings() {
    const hass = this._hass;
    const sections = (this._config.settings_sections || [])
      .map(
        (sec) => `<div class="shc-ap-sec">
          <div class="shc-ap-sec-cap">${esc(sec.title)}</div>
          ${sec.rows.map((row) => this._settingsRowHtml(hass, row)).join("")}
        </div>`,
      )
      .join("");

    const switchesHtml = (this._config.switches || [])
      .map((s) => this._settingsRowHtml(hass, s))
      .join("");

    const actions = this._config.actions || [];
    const actionsHtml = actions.length
      ? `<div class="shc-ap-sec">
           <div class="shc-ap-sec-cap">Strumenti</div>
           ${actions.map((a) => this._actionRowHtml(a)).join("")}
         </div>`
      : "";

    const overlay = this._openDialog(
      "Impostazioni",
      `${sections}${switchesHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Interruttori</div>${switchesHtml}</div>` : ""}${actionsHtml}`,
    );

    overlay.querySelectorAll("[data-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const entity = btn.dataset.entity;
        const domain = entity.split(".")[0];
        hass.callService(domain, "toggle", { entity_id: entity });
        setTimeout(() => this._openSettings(), 200);
      });
    });
    overlay.querySelectorAll("[data-open-entity]").forEach((row) => {
      row.addEventListener("click", () => {
        const e = new Event("hass-more-info", { bubbles: true, composed: true });
        e.detail = { entityId: row.dataset.openEntity };
        this.dispatchEvent(e);
      });
    });
    overlay.querySelectorAll("[data-action-target]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const confirmText = btn.dataset.confirm;
        if (confirmText && !window.confirm(confirmText)) return;
        if (btn.dataset.actionKind === "service") {
          const [domain, service] = btn.dataset.actionTarget.split(".");
          hass.callService(domain, service, {});
        } else {
          hass.callService("script", "turn_on", { entity_id: btn.dataset.actionTarget });
        }
      });
    });
  }

  _statRow(label, value) {
    return this._row(label, `<span class="shc-ap-row-val">${esc(value)}</span>`);
  }

  _statRow2(label, aVal, bVal) {
    return this._row(label, `<span class="shc-ap-row-val">${esc(aVal)}&nbsp;&nbsp;\u00b7&nbsp;&nbsp;${esc(bVal)}</span>`);
  }

  _val(hass, entityId, digits, attr) {
    const st = entityId ? hass.states[entityId] : null;
    if (!st) return "\u2014";
    const raw = attr ? st.attributes?.[attr] : st.state;
    const n = Number(raw);
    const unit = st.attributes?.unit_of_measurement || "";
    const num = Number.isFinite(n) && digits != null ? n.toFixed(digits) : raw;
    return `${num}${unit ? " " + unit : ""}`;
  }

  _fmtAxis(v) {
    if (!Number.isFinite(v)) return "0";
    const s = Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  }

  _smoothPath(coords) {
    if (coords.length < 3) {
      return `M ${coords.map((c) => `${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(" L ")}`;
    }
    let d = `M ${coords[0][0].toFixed(1)},${coords[0][1].toFixed(1)}`;
    for (let i = 1; i < coords.length - 1; i++) {
      const [x0, y0] = coords[i];
      const [x1, y1] = coords[i + 1];
      const mx = (x0 + x1) / 2;
      const my = (y0 + y1) / 2;
      d += ` Q ${x0.toFixed(1)},${y0.toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`;
    }
    const last = coords[coords.length - 1];
    d += ` L ${last[0].toFixed(1)},${last[1].toFixed(1)}`;
    return d;
  }

  _lineChartSvg(points, color, fixedMax) {
    if (!points.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 200; // grafico alto (prima 90, risultava schiacciato)
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava "2623")
    const plotW = width - plotX0;
    const values = points.map((p) => p.y);
    const min = fixedMax ? 0 : Math.min(...values, 0);
    const max = fixedMax ? Math.max(fixedMax, ...values) : Math.max(...values, min + 1);
    const range = max - min || 1;
    const stepX = points.length > 1 ? plotW / (points.length - 1) : 0;
    const coords = points.map((p, i) => [plotX0 + i * stepX, height - ((p.y - min) / range) * (height - 6) - 3]);
    const lineD = this._smoothPath(coords);
    const areaD = `${lineD} L ${coords[coords.length - 1][0].toFixed(1)},${height} L ${coords[0][0].toFixed(1)},${height} Z`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg shc-e-chart-tall" preserveAspectRatio="none">
      <line x1="${plotX0}" y1="3" x2="${plotX0}" y2="${height - 3}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="8" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 3}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(min)}</text>
      <path d="${areaD}" fill="${color}" opacity="0.14"/>
      <path d="${lineD}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;
  }

  _labelSpans(items, count, formatFn) {
    if (!items.length) return "";
    const n = Math.min(count, items.length);
    const idxs = [];
    for (let i = 0; i < n; i++) {
      idxs.push(n === 1 ? 0 : Math.round((i * (items.length - 1)) / (n - 1)));
    }
    const seen = new Set();
    const unique = idxs.filter((i) => (seen.has(i) ? false : (seen.add(i), true)));
    return `<div class="shc-ap-chart-labels">${unique.map((i) => `<span>${formatFn(items[i], i)}</span>`).join("")}</div>`;
  }

  async _fetchHistory6h(entityId) {
    const end = new Date();
    const start = new Date(end.getTime() - 6 * 3600 * 1000);
    const result = await this._hass.connection.sendMessagePromise({
      type: "history/history_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
    });
    const rows = result?.[entityId] || [];
    return rows
      .map((r) => ({ t: new Date((r.lu || r.last_updated_ts) * 1000 || r.last_updated), y: Number(r.s ?? r.state) }))
      .filter((p) => Number.isFinite(p.y));
  }

  _openMeterChart(entityId, title, color) {
    if (!entityId) return;
    shcOpenChartPopup(this, { title, series: [{ entity: entityId, label: title, color }] });
  }

  _openPowerHistory() {
    const cfg = this._config;
    this._openDialog(
      "Andamento potenza",
      `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Ultime 24 ore</div><div class="shc-ap-chart-loading" data-chart="24h">Caricamento...</div></div>`,
    );
    const overlay = this._root.querySelector(".shc-ap-overlay");
    const slot = overlay?.querySelector('[data-chart="24h"]');
    (async () => {
      const end = new Date();
      const start = new Date(end.getTime() - 24 * 3600 * 1000);
      const result = await this._hass.connection.sendMessagePromise({
        type: "history/history_during_period",
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        entity_ids: [cfg.power_entity],
        minimal_response: true,
        no_attributes: true,
      });
      const rows = result?.[cfg.power_entity] || [];
      return rows
        .map((r) => ({ t: new Date((r.lu || r.last_updated_ts) * 1000 || r.last_updated), y: Number(r.s ?? r.state) }))
        .filter((p) => Number.isFinite(p.y));
    })()
      .then((points) => {
        const el = overlay?.querySelector('[data-chart="24h"]');
        if (!el) return;
        const labels = this._labelSpans(points, 7, (p) => p.t.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }));
        el.outerHTML = `<div data-chart="24h">${this._lineChartSvg(points, "#0ea5e9", this._config.max_power)}${labels}</div>`;
      })
      .catch(() => {
        if (slot) slot.textContent = "Errore caricamento dati";
      });
  }

  // Top consumo + tutti i circuiti in ordine decrescente, con una barra proporzionale al
  // consumo di ognuno (stile "istogramma") - pulsante Statistiche (barrette).
  _openStats() {
    const hass = this._hass;
    const cfg = this._config;
    const circuits = (cfg.circuits || [])
      .map((c) => ({ ...c, live: Number(hass.states[c.entity]?.state) || 0 }))
      .sort((a, b) => b.live - a.live);
    const maxLive = Math.max(...circuits.map((c) => c.live), 1);

    const rows = circuits
      .map(
        (c) => `<div class="shc-ap-meter">
          <div class="shc-ap-meter-row"><span>${esc(c.label)}</span><strong>${c.live.toFixed(0)} W</strong></div>
          <div class="shc-ap-bar"><i style="width:${Math.min(100, (c.live / maxLive) * 100).toFixed(0)}%;background:linear-gradient(90deg,#0ea5e9,#38bdf8)"></i></div>
        </div>`,
      )
      .join("");
    const topSt = cfg.top_entity ? hass.states[cfg.top_entity]?.state : null;

    this._openDialog("Statistiche", `
      ${topSt ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">In evidenza</div>${this._statRow("Top consumo", topSt)}</div>` : ""}
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Tutti i circuiti (live, ordine decrescente)</div><div class="shc-ap-meters">${rows}</div></div>
    `);
  }

  // Entita' misurata da una barra: se il circuito ha "entity_helper" (input_text riempito dal
  // menu a tendina nelle Impostazioni) vale quella scelta, e se e' vuota la barra non compare;
  // altrimenti l'"entity" fissa della configurazione.
  _barEntity(c, hass) {
    if (c.entity_helper) {
      const v = (hass?.states[c.entity_helper]?.state || "").trim();
      return v && v !== "unknown" && v !== "unavailable" ? v : "";
    }
    return c.entity || "";
  }

  // Nome della barra: con entita' scelta dal menu segue il nome dell'entita' (senza il
  // suffisso "Potenza/Power"); con un'entita' fissa vale la "label" della configurazione.
  _barLabel(c, hass, eid) {
    if (!c.entity_helper && c.label) return c.label;
    const fn = hass?.states[eid]?.attributes?.friendly_name || eid || "";
    const nome = String(fn).replace(/\s*(potenza|power)$/i, "").trim() || String(fn);
    return nome.charAt(0).toUpperCase() + nome.slice(1);
  }

  // Costi e consumi per periodo - pulsante Consumi (fulmine), stesso posto e stesso tipo di
  // contenuto delle altre card (elettrodomestici, NAS, Proxmox).
  _openConsumi() {
    const hass = this._hass;
    const cfg = this._config;
    const val = (id, digits, attr) => this._val(hass, id, digits, attr);

    const periodsHtml = (cfg.periods || [])
      .map((p) => this._statRow2(p.label, val(p.energy, 2), val(p.cost, 2)))
      .join("");

    const prevHtml = (cfg.periods_prev || [])
      .map((p) => this._statRow2(p.label, val(p.energy, 2, p.energy_attr), val(p.cost, 2)))
      .join("");

    const weekEntries = Object.entries(cfg.weekdays || {});
    const weekHtml = weekEntries.map(([label, entity]) => this._statRow(label, val(entity, 2))).join("");
    const mediaHtml = cfg.media_entity ? this._statRow("Media settimanale", val(cfg.media_entity, 1)) : "";

    this._openDialog("Consumi", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Consumi per periodo</div>${periodsHtml}</div>
      ${prevHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Periodo precedente</div>${prevHtml}</div>` : ""}
      ${weekHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Ultimi 7 giorni</div>${weekHtml}${mediaHtml}</div>` : ""}
    `);
    const overlay = this._root.querySelector(".shc-ap-overlay");
    const chartBtn = document.createElement("button");
    chartBtn.type = "button";
    chartBtn.className = "shc-ap-action-btn";
    chartBtn.style.width = "100%";
    chartBtn.style.marginTop = "2px";
    chartBtn.textContent = "Andamento potenza (24h)";
    chartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this._openPowerHistory();
    });
    overlay.querySelector(".shc-ap-dialog-body").appendChild(chartBtn);
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;

    const watt = Number(hass.states[cfg.power_entity]?.state);
    const wattVal = Number.isFinite(watt) ? Math.max(0, watt) : 0;
    const wattText = this._root.querySelector(".shc-e-watt");
    if (wattText) wattText.textContent = wattVal.toFixed(0);

    if (cfg.periods?.[1]) {
      this._root.querySelector(".shc-e-today-kwh").textContent = this._val(hass, cfg.periods[1].energy, 2);
      this._root.querySelector(".shc-e-today-cost").textContent = this._val(hass, cfg.periods[1].cost, 2);
    }
    if (cfg.periods?.[3]) {
      this._root.querySelector(".shc-e-month-cost").textContent = this._val(hass, cfg.periods[3].cost, 2);
    }
    // "Nome: 57 W": si accorcia (con ...) solo il nome del dispositivo, i watt restano sempre visibili.
    const topEl = this._root.querySelector(".shc-e-top");
    const topTxt = cfg.top_entity ? String(hass.states[cfg.top_entity]?.state ?? "\u2014") : "\u2014";
    const cut = topTxt.lastIndexOf(":");
    if (cut > 0 && /W\s*$/.test(topTxt)) {
      const nome = topTxt.slice(0, cut);
      const watt = topTxt.slice(cut);
      if (topEl.dataset.v !== topTxt) {
        topEl.dataset.v = topTxt;
        topEl.textContent = "";
        const n = document.createElement("span");
        n.className = "shc-e-top-n";
        n.textContent = nome;
        const w = document.createElement("span");
        w.className = "shc-e-top-w";
        w.textContent = watt;
        topEl.append(n, w);
      }
    } else {
      topEl.dataset.v = topTxt;
      topEl.textContent = topTxt;
    }

    (cfg.circuits || []).slice(0, 4).forEach((c, i) => {
      const el = this._root.querySelector(`[data-circuit-index="${i}"]`);
      if (!el) return;
      const eid = this._barEntity(c, hass);
      if (!eid || !hass.states[eid]) { el.style.display = "none"; return; }
      el.querySelector(".shc-e-c-label").textContent = this._barLabel(c, hass, eid);
      const v = Number(hass.states[eid]?.state);
      const vVal = Number.isFinite(v) ? v : 0;
      el.querySelector(".shc-e-c-val").textContent = `${vVal.toFixed(0)} W`;
      // Scala della barra: se il circuito ha "max_entity" (input_number modificabile dalle
      // Impostazioni) vale quel valore, altrimenti il "max" fisso della configurazione.
      const maxLive = c.max_entity ? Number(hass.states[c.max_entity]?.state) : NaN;
      const maxUsed = Number.isFinite(maxLive) && maxLive > 0 ? maxLive : c.max;
      // Nessuna scala valida (entita' non selezionata/non disponibile e nessun max fisso): barra nascosta.
      el.style.display = maxUsed ? "" : "none";
      if (!maxUsed) return;
      const pct = maxUsed ? Math.min(100, (vVal / maxUsed) * 100) : 0;
      const bar = el.querySelector(".shc-e-c-bar");
      bar.style.width = `${pct}%`;
      bar.style.background = meterSeverityColor(pct);
    });

    const warnEl = this._root.querySelector(".shc-ap-warn");
    const soglia = cfg.soglia_entity ? Number(hass.states[cfg.soglia_entity]?.state) : null;
    const card = this._root.querySelector(".shc-ap-card");
    // Layout: se c'e' "layout_entity" (un input_select Classico/Centrato scelto dalle Impostazioni)
    // vale quella scelta, altrimenti il parametro "layout" della configurazione.
    let layoutScelto = cfg.layout;
    if (cfg.layout_entity) {
      const lv = String(hass.states[cfg.layout_entity]?.state || "").toLowerCase();
      if (lv === "classico" || lv === "centrato") layoutScelto = lv;
    }
    card.classList.toggle("layout-centrato", layoutScelto === "centrato");
    if (soglia != null && wattVal > soglia) {
      warnEl.hidden = false;
      warnEl.textContent = `\u26a0 Soglia superata: ${wattVal.toFixed(0)} W (limite ${soglia.toFixed(0)} W)`;
      card.classList.add("has-alarm");
    } else {
      warnEl.hidden = true;
      card.classList.remove("has-alarm");
    }
  }

  _graphSeries() {
    const colors = ["#38bdf8", "#22c55e", "#eab308", "#f97316", "#a855f7", "#ef4444"];
    const out = [];
    (this._config.circuits || []).forEach((c) => {
      const eid = this._barEntity(c, this._hass);
      if (eid) out.push({ entity: eid, label: this._barLabel(c, this._hass, eid), color: colors[out.length % colors.length] });
    });
    return out;
  }

  getCardSize() {
    return 7;
  }

  static getConfigElement() {
    return document.createElement("shc-energy-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "Energia Casa",
      artwork: "energy",
      power_entity: "",
      max_power: 4500,
      circuits: [],
    };
  }
}

customElements.define("shc-energy-card", ShcEnergyCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-energy-card",
  name: "Energia Casa",
  description: "Card per il controllo energia totale casa: consumo istantaneo, circuiti, storici, costi",
  author: "Simonz82",
});

class ShcUpsCard extends HTMLElement {
  setConfig(config) {
    if (!config.status_entity) throw new Error("status_entity \u00e8 obbligatorio");
    this._config = {
      name: "UPS",
      artwork: "ups",
      model: "APC Back-UPS BE850G2",
      rated_watts: 450,
      settings_sections: [],
      actions: [],
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._heroId = "up" + Math.random().toString(36).slice(2, 8);
    const hero = (HERO_BUILDERS[this._config.artwork] || HERO_BUILDERS.ups)(this._heroId);
    const chip = CHIP_SVGS[this._config.artwork] || CHIP_SVGS.ups;
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card is-run">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${chip}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
          </span>
          <span class="shc-ap-badge run"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label">ONLINE</span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Impostazioni">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Statistiche">${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero">${hero}</div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Stato</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_PULSE}</span><small>Stato</small></span><b class="shc-u-status">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BATTERY}</span><small>Autonomia</small></span><b class="shc-u-runtime">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_PLUG}</span><small>Ingresso</small></span><b class="shc-u-voltage">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BOLT}</span><small>Carico</small></span><b class="shc-u-load-front">\u2014</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter shc-c-meter-clickable shc-u-meter-battery">
              <div class="shc-ap-meter-row"><span>Batteria</span><strong class="shc-u-battery-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-u-battery-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-u-meter-load">
              <div class="shc-ap-meter-row"><span>Carico</span><strong class="shc-u-load-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-u-load-bar" style="width:0%"></i></div>
            </div>
          </div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);

    this._root.querySelector(".shc-ap-settings").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openSettings();
    });
    this._root.querySelector(".shc-ap-stats").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-ap-hero").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-u-meter-battery").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.battery_entity, "Batteria", "#22c55e");
    });
    this._root.querySelector(".shc-u-meter-load").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.power_entity || this._config.load_entity, "Carico", "#38bdf8");
    });
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml) {
    let overlay = this._root.querySelector(".shc-ap-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      // Menu a tendina delle impostazioni (righe input_select): la scelta viene applicata subito.
      overlay.addEventListener("change", (e) => {
        const t = e.target;
        if (t && t.dataset && t.dataset.selectEntity && this._hass) {
          this._hass.callService("input_select", "select_option", { entity_id: t.dataset.selectEntity, option: t.value });
        }
      });
      this._root.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.hidden = false;
    return overlay;
  }

  _settingsRowHtml(hass, row) {
    const st = hass.states[row.entity];
    if (!st) return this._row(row.label, `<span class="shc-ap-row-val">n/d</span>`);
    const domain = row.entity.split(".")[0];
    if (["input_boolean", "automation", "switch"].includes(domain)) {
      const on = st.state === "on";
      return this._row(
        row.label,
        `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.entity)}" aria-pressed="${on}"></button>`,
      );
    }
    if (domain === "input_select") {
      const opts = (st.attributes?.options || [])
        .map((o) => `<option value="${esc(o)}"${o === st.state ? " selected" : ""}>${esc(o)}</option>`)
        .join("");
      return this._row(row.label, `<select class="shc-ap-select" data-select-entity="${esc(row.entity)}">${opts}</select>`);
    }
    const unit = st.attributes?.unit_of_measurement || "";
    return `<div class="shc-ap-row" data-open-entity="${esc(row.entity)}" style="cursor:pointer">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <span class="shc-ap-row-val">${esc(st.state)}${unit ? " " + esc(unit) : ""}</span>
    </div>`;
  }

  _openSettings() {
    const hass = this._hass;
    const cfg = this._config;
    const rows = [];
    if (cfg.automation_entity) {
      rows.push(this._settingsRowHtml(hass, { entity: cfg.automation_entity, label: "Notifiche caduta corrente" }));
    }
    // Sezione "Aspetto" (scelta del layout) a parte, in cima; le altre righe restano sotto "Automazioni".
    const aspettoHtml = (cfg.settings_sections || [])
      .filter((sec) => sec.title === "Aspetto")
      .map((sec) => `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">${esc(sec.title)}</div>${sec.rows.map((row) => this._settingsRowHtml(hass, row)).join("")}</div>`)
      .join("");
    (cfg.settings_sections || []).filter((sec) => sec.title !== "Aspetto").forEach((sec) => {
      sec.rows.forEach((row) => rows.push(this._settingsRowHtml(hass, row)));
    });

    const overlay = this._openDialog(
      "Impostazioni",
      aspettoHtml + (rows.length ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Automazioni</div>${rows.join("")}</div>` : (aspettoHtml ? "" : `<div class="shc-ap-row-val">Nessuna impostazione</div>`)),
    );

    overlay.querySelectorAll("[data-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const entity = btn.dataset.entity;
        const domain = entity.split(".")[0];
        hass.callService(domain, "toggle", { entity_id: entity });
        setTimeout(() => this._openSettings(), 200);
      });
    });
    overlay.querySelectorAll("[data-open-entity]").forEach((row) => {
      row.addEventListener("click", () => {
        const e = new Event("hass-more-info", { bubbles: true, composed: true });
        e.detail = { entityId: row.dataset.openEntity };
        this.dispatchEvent(e);
      });
    });
  }

  _statRow(label, value) {
    return this._row(label, `<span class="shc-ap-row-val">${esc(value)}</span>`);
  }

  _val(hass, entityId, digits) {
    const st = entityId ? hass.states[entityId] : null;
    if (!st) return "\u2014";
    const n = Number(st.state);
    const unit = st.attributes?.unit_of_measurement || "";
    const num = Number.isFinite(n) && digits != null ? n.toFixed(digits) : st.state;
    return `${num}${unit ? " " + unit : ""}`;
  }

  _fmtMinutes(seconds) {
    const n = Number(seconds);
    if (!Number.isFinite(n)) return "\u2014";
    const min = Math.round(n / 60);
    if (min < 60) return `${min} min`;
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}h ${m}min`;
  }

  _fmtAxis(v) {
    if (!Number.isFinite(v)) return "0";
    const s = Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  }

  _smoothPath(coords) {
    if (coords.length < 3) {
      return `M ${coords.map((c) => `${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(" L ")}`;
    }
    let d = `M ${coords[0][0].toFixed(1)},${coords[0][1].toFixed(1)}`;
    for (let i = 1; i < coords.length - 1; i++) {
      const [x0, y0] = coords[i];
      const [x1, y1] = coords[i + 1];
      const mx = (x0 + x1) / 2;
      const my = (y0 + y1) / 2;
      d += ` Q ${x0.toFixed(1)},${y0.toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`;
    }
    const last = coords[coords.length - 1];
    d += ` L ${last[0].toFixed(1)},${last[1].toFixed(1)}`;
    return d;
  }

  _lineChartSvg(points, color) {
    if (!points.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 90;
    const plotX0 = 24;
    const plotW = width - plotX0;
    const values = points.map((p) => p.y);
    const min = Math.min(...values, 0);
    const max = Math.max(...values, min + 1);
    const range = max - min || 1;
    const stepX = points.length > 1 ? plotW / (points.length - 1) : 0;
    const coords = points.map((p, i) => [plotX0 + i * stepX, height - ((p.y - min) / range) * (height - 6) - 3]);
    const lineD = this._smoothPath(coords);
    const areaD = `${lineD} L ${coords[coords.length - 1][0].toFixed(1)},${height} L ${coords[0][0].toFixed(1)},${height} Z`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg" preserveAspectRatio="none">
      <line x1="${plotX0}" y1="3" x2="${plotX0}" y2="${height - 3}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="8" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 3}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(min)}</text>
      <path d="${areaD}" fill="${color}" opacity="0.14"/>
      <path d="${lineD}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;
  }

  _labelSpans(items, count, formatFn) {
    if (!items.length) return "";
    const n = Math.min(count, items.length);
    const idxs = [];
    for (let i = 0; i < n; i++) {
      idxs.push(n === 1 ? 0 : Math.round((i * (items.length - 1)) / (n - 1)));
    }
    const seen = new Set();
    const unique = idxs.filter((i) => (seen.has(i) ? false : (seen.add(i), true)));
    return `<div class="shc-ap-chart-labels">${unique.map((i) => `<span>${formatFn(items[i], i)}</span>`).join("")}</div>`;
  }

  async _fetchHistory6h(entityId) {
    const end = new Date();
    const start = new Date(end.getTime() - 6 * 3600 * 1000);
    const result = await this._hass.connection.sendMessagePromise({
      type: "history/history_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
    });
    const rows = result?.[entityId] || [];
    return rows
      .map((r) => ({ t: new Date((r.lu || r.last_updated_ts) * 1000 || r.last_updated), y: Number(r.s ?? r.state) }))
      .filter((p) => Number.isFinite(p.y));
  }

  _openMeterChart(entityId, title, color) {
    if (!entityId) return;
    shcOpenChartPopup(this, { title, series: [{ entity: entityId, label: title, color }] });
  }

  _openStats() {
    const hass = this._hass;
    const cfg = this._config;
    const val = (id, digits) => this._val(hass, id, digits);

    const generaleHtml = [
      this._statRow("Modello", cfg.model || "\u2014"),
      this._statRow("Stato", val(cfg.status_entity)),
      this._statRow("Codice stato", val(cfg.status_code_entity)),
    ].join("");

    const batteriaHtml = [
      this._statRow("Carica", val(cfg.battery_entity, 0)),
      this._statRow("Autonomia residua", this._fmtMinutes(hass.states[cfg.runtime_entity]?.state)),
      this._statRow("Soglia batteria scarica", this._fmtMinutes(hass.states[cfg.runtime_low_entity]?.state)),
    ].join("");

    const reteHtml = [
      this._statRow("Tensione ingresso", val(cfg.input_voltage_entity, 1)),
      ...(cfg.power_entity
        ? [
            this._statRow("Carico reale (Presa NAS)", val(cfg.power_entity, 0)),
            this._statRow("Carico (stima UPS, poco precisa)", val(cfg.load_entity, 0)),
          ]
        : [this._statRow("Carico", val(cfg.load_entity, 0))]),
    ].join("");

    this._openDialog("Statistiche", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Generale</div>${generaleHtml}</div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Batteria</div>${batteriaHtml}</div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Rete elettrica</div>${reteHtml}</div>
    `);
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;

    const statusSt = cfg.status_entity ? hass.states[cfg.status_entity] : null;
    const statusRaw = statusSt?.state ?? "\u2014";
    this._root.querySelector(".shc-u-status").textContent = statusRaw;
    this._root.querySelector(".shc-u-runtime").textContent = this._fmtMinutes(hass.states[cfg.runtime_entity]?.state);
    this._root.querySelector(".shc-u-voltage").textContent = this._val(hass, cfg.input_voltage_entity, 0);

    const powerW = cfg.power_entity ? Number(hass.states[cfg.power_entity]?.state) : NaN;
    const hasPower = Number.isFinite(powerW);
    this._root.querySelector(".shc-u-load-front").textContent = hasPower
      ? `${powerW.toFixed(0)} W`
      : this._val(hass, cfg.load_entity, 0);

    const battery = Number(hass.states[cfg.battery_entity]?.state);
    const batteryVal = Number.isFinite(battery) ? battery : 0;
    this._root.querySelector(".shc-u-battery-val").textContent = `${batteryVal.toFixed(0)}%`;
    const batteryBar = this._root.querySelector(".shc-u-battery-bar");
    batteryBar.style.width = `${Math.min(100, Math.max(0, batteryVal))}%`;
    batteryBar.style.background = inverseSeverityColor(batteryVal);

    let loadPct;
    if (hasPower) {
      loadPct = (powerW / (cfg.rated_watts || 450)) * 100;
      this._root.querySelector(".shc-u-load-val").textContent = `${powerW.toFixed(0)} W`;
    } else {
      const load = Number(hass.states[cfg.load_entity]?.state);
      loadPct = Number.isFinite(load) ? load : 0;
      this._root.querySelector(".shc-u-load-val").textContent = `${loadPct.toFixed(0)}%`;
    }
    const loadBar = this._root.querySelector(".shc-u-load-bar");
    loadBar.style.width = `${Math.min(100, Math.max(0, loadPct))}%`;
    loadBar.style.background = meterSeverityColor(loadPct);

    // Batteria disegnata sull'hero: si riempie dal basso in proporzione alla
    // carica reale, stesso spirito del Watt live sulla card Energia.
    const battFill = this._root.querySelector(".shc-u-battery-fill");
    if (battFill) {
      const cavityY = 76;
      const cavityH = 100;
      const fillH = (cavityH * Math.min(100, Math.max(0, batteryVal))) / 100;
      battFill.setAttribute("height", fillH.toFixed(1));
      battFill.setAttribute("y", (cavityY + (cavityH - fillH)).toFixed(1));
      battFill.setAttribute("fill", inverseSeverityColor(batteryVal));
    }

    const onBattery = statusRaw !== "Online" && statusRaw !== "\u2014";
    const led = this._root.querySelector(".shc-u-led");
    if (led) led.setAttribute("fill", onBattery ? "#ef4444" : "#22c55e");

    const badge = this._root.querySelector(".shc-ap-badge-label");
    if (badge) badge.textContent = onBattery ? "A BATTERIA" : "ONLINE";
    const badgeEl = this._root.querySelector(".shc-ap-badge");
    if (badgeEl) badgeEl.classList.toggle("run", !onBattery);

    const warnEl = this._root.querySelector(".shc-ap-warn");
    const card = this._root.querySelector(".shc-ap-card");
    if (onBattery) {
      warnEl.hidden = false;
      warnEl.textContent = `\u26a0 In funzione a batteria \u2014 autonomia ${this._fmtMinutes(hass.states[cfg.runtime_entity]?.state)}`;
      card.classList.add("has-alarm");
    } else {
      warnEl.hidden = true;
      card.classList.remove("has-alarm");
    }
  }

  _graphSeries() {
    const c = this._config;
    return [
      { entity: c.battery_entity, label: "Batteria", color: "#22c55e" },
      { entity: c.power_entity || c.load_entity, label: "Carico", color: "#38bdf8" },
    ];
  }

  getCardSize() {
    return 6;
  }

  static getConfigElement() {
    return document.createElement("shc-ups-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "UPS",
      artwork: "ups",
      model: "APC Back-UPS BE850G2",
      rated_watts: 450,
    };
  }
}

customElements.define("shc-ups-card", ShcUpsCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-ups-card",
  name: "UPS",
  description: "Card per il gruppo di continuit\u00e0: stato, batteria, carico, autonomia",
  author: "Simonz82",
});

// -----------------------------------------------------------------------
// shc-garbage-card: stessa grammatica visiva applicata alla raccolta
// differenziata. Unica card della famiglia con un "hero" dinamico invece
// di un disegno fisso: l'immagine mostrata cambia in base allo stato del
// sensore (Carta/Vetro/Organico/Plastica/...), leggendo la mappa
// state_images invece di un artwork singolo. Nessuna dipendenza dalle
// altre card della raccolta.
class ShcGarbageCard extends HTMLElement {
  setConfig(config) {
    if (!config.entity) throw new Error("entity è obbligatorio");
    this._config = {
      name: "Raccolta Differenziata",
      artwork: "garbage",
      state_images: {},
      settings_sections: [],
      actions: [],
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    const chip = CHIP_SVGS[this._config.artwork] || CHIP_SVGS.garbage;
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${chip}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
          </span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-alexa" title="Centro Notifiche" hidden>${ICON_MEGAPHONE}</button>
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Impostazioni">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-types" title="Tipi di raccolta" hidden>${ICON_TYPES}</button>
          </span>
        </div>
        <div class="shc-ap-top-row" style="padding-bottom:10px">
          <div class="shc-ap-hero" style="display:flex;align-items:center;justify-content:center;overflow:visible">
            <img class="shc-c-garbage-img" style="width:100%;height:100%;object-fit:contain;transform:scale(0.95) translateY(-5px)" alt="">
            <div class="shc-c-garbage-emoji" style="display:none;font-size:92px;line-height:1"></div>
          </div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Info</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_CALENDAR}</span><small>Oggi è</small></span><b class="shc-c-weekday">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TIMER}</span><small>Esporre dalle</small></span><b class="shc-c-exposetime">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TREND}</span><small>Giorno del ritiro</small></span><b class="shc-c-pickupday">—</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    this._root.querySelector(".shc-ap-settings").addEventListener("click", (e) => {
      e.stopPropagation();
      if (this._config.legacy_settings_popup) {
        const event = new Event("ll-custom", { bubbles: true, composed: true });
        event.detail = { browser_mod: this._config.legacy_settings_popup };
        this.dispatchEvent(event);
      } else {
        this._openSettings();
      }
    });
    const typesBtn = this._root.querySelector(".shc-ap-types");
    if (this._config.types_entity) {
      typesBtn.hidden = false;
      typesBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._openTypes();
      });
    }
    // Pulsante "Centro Notifiche": compare solo se configuri notif_center_path (facoltativo,
    // pensato per chi centralizza le impostazioni di piu' card in un'unica pagina condivisa -
    // senza, il pulsante resta nascosto invece di puntare a una pagina che non esiste).
    const alexaBtn = this._root.querySelector(".shc-ap-alexa");
    if (this._config.notif_center_path) {
      alexaBtn.hidden = false;
      alexaBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        history.pushState(null, "", this._config.notif_center_path);
        window.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true }));
      });
    }
    this._root.querySelector(".shc-ap-hero").addEventListener("click", () => {
      const e = new Event("hass-more-info", { bubbles: true, composed: true });
      e.detail = { entityId: this._config.entity };
      this.dispatchEvent(e);
    });
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml) {
    let overlay = this._root.querySelector(".shc-ap-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      // Menu a tendina delle impostazioni (righe input_select): la scelta viene applicata subito.
      overlay.addEventListener("change", (e) => {
        const t = e.target;
        if (t && t.dataset && t.dataset.selectEntity && this._hass) {
          this._hass.callService("input_select", "select_option", { entity_id: t.dataset.selectEntity, option: t.value });
        }
      });
      this._root.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.hidden = false;
    return overlay;
  }

  _settingsRowHtml(hass, row) {
    const st = hass.states[row.entity];
    if (!st) return this._row(row.label, `<span class="shc-ap-row-val">n/d</span>`);
    const domain = row.entity.split(".")[0];
    if (["input_boolean", "automation", "switch"].includes(domain)) {
      const on = st.state === "on";
      return this._row(
        row.label,
        `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.entity)}" aria-pressed="${on}"></button>`,
      );
    }
    if (domain === "input_select") {
      const opts = (st.attributes?.options || [])
        .map((o) => `<option value="${esc(o)}"${o === st.state ? " selected" : ""}>${esc(o)}</option>`)
        .join("");
      return this._row(row.label, `<select class="shc-ap-select" data-select-entity="${esc(row.entity)}">${opts}</select>`);
    }
    const unit = st.attributes?.unit_of_measurement || "";
    return `<div class="shc-ap-row" data-open-entity="${esc(row.entity)}" style="cursor:pointer">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <span class="shc-ap-row-val">${esc(st.state)}${unit ? " " + esc(unit) : ""}</span>
    </div>`;
  }

  _actionRowHtml(row) {
    return `<div class="shc-ap-row">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <button type="button" class="shc-ap-action-btn" data-action-entity="${esc(row.entity)}" data-confirm="${esc(row.confirm || "")}">Esegui</button>
    </div>`;
  }

  _openSettings() {
    const hass = this._hass;
    const sections = (this._config.settings_sections || [])
      .map(
        (sec) => `<div class="shc-ap-sec">
          <div class="shc-ap-sec-cap">${esc(sec.title)}</div>
          ${sec.rows.map((row) => this._settingsRowHtml(hass, row)).join("")}
        </div>`,
      )
      .join("");

    const actions = this._config.actions || [];
    const actionsHtml = actions.length
      ? `<div class="shc-ap-sec">
           <div class="shc-ap-sec-cap">Strumenti</div>
           ${actions.map((a) => this._actionRowHtml(a)).join("")}
         </div>`
      : "";

    const overlay = this._openDialog("Impostazioni", `${sections}${actionsHtml}`);

    overlay.querySelectorAll("[data-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const entity = btn.dataset.entity;
        const domain = entity.split(".")[0];
        hass.callService(domain, "toggle", { entity_id: entity });
        setTimeout(() => this._openSettings(), 200);
      });
    });
    overlay.querySelectorAll("[data-open-entity]").forEach((row) => {
      row.addEventListener("click", () => {
        const e = new Event("hass-more-info", { bubbles: true, composed: true });
        e.detail = { entityId: row.dataset.openEntity };
        this.dispatchEvent(e);
      });
    });
    overlay.querySelectorAll("[data-action-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const confirmText = btn.dataset.confirm;
        if (confirmText && !window.confirm(confirmText)) return;
        hass.callService("script", "turn_on", { entity_id: btn.dataset.actionEntity });
      });
    });
  }

  // Elenco dei tipi di raccolta scritto a mano: viene salvato in un input_text e un'automazione del
  // package ricostruisce i menu dei giorni (icona automatica per ogni nome, "Nulla" sempre in fondo).
  _parseTypes(text) {
    const MAP = { "organico e resto": "\u{1F52A}", organico: "\u{1F34C}", umido: "\u{1F34C}", indifferenziato: "\u267B", secco: "\u267B", residuo: "\u267B", carta: "\u{1F961}", cartone: "\u{1F961}", vetro: "\u{1F376}", plastica: "\u{1F95B}", lattine: "\u{1F96B}", metalli: "\u{1F96B}", verde: "\u{1F33F}", sfalci: "\u{1F33F}", ingombranti: "\u{1F6CB}", pile: "\u{1F50B}", farmaci: "\u{1F48A}", tessili: "\u{1F455}", oli: "\u{1F6E2}" };
    const out = [];
    String(text || "")
      .split(/[,;\n|]/)
      .map((t) => t.trim())
      .filter((t) => t && t.replace(/^[^A-Za-z\u00C0-\u00FF0-9]+/, "").toLowerCase() !== "nulla")
      .forEach((t) => {
        let item = t;
        if (/^[A-Za-z\u00C0-\u00FF0-9]/.test(t)) {
          const low = t.toLowerCase();
          let emoji = "\u{1F5D1}";
          let n = 0;
          Object.keys(MAP).forEach((k) => {
            if (low.includes(k) && k.length > n) {
              emoji = MAP[k];
              n = k.length;
            }
          });
          item = `${emoji} ${t[0].toUpperCase()}${t.slice(1)}`;
        }
        if (!out.includes(item)) out.push(item);
      });
    return out;
  }

  _openTypes() {
    const hass = this._hass;
    const ent = this._config.types_entity;
    const st = hass.states[ent];
    const val = st && !["unknown", "unavailable"].includes(st.state) ? st.state : "";
    const overlay = this._openDialog(
      "Tipi di raccolta",
      `<div class="shc-ap-sec">
        <div class="shc-ap-sec-cap">Configura la raccolta del tuo comune</div>
        <p class="shc-gt-help">Scrivi le <b>voci</b> dei rifiuti, separate da virgola. <b>Ogni voce è ciò che viene ritirato in una singola giornata</b>: quando poi imposti i giorni, per ogni giorno scegli <b>una sola voce</b>. Se in un giorno fanno <b>due ritiri insieme</b>, scrivi una voce apposta che li comprende entrambi.</p>
        <div class="shc-gt-example"><b>Esempio</b><br>Scrivi: <i>Carta, Vetro, Plastica, Organico, Organico e Resto</i><br>• il lunedì scegli <b>Organico</b> (ritirano solo l'organico)<br>• il giovedì scegli <b>Organico e Resto</b> (quel giorno ritirano organico e resto insieme)<br>• il sabato scegli <b>Nulla</b> (nessun ritiro, viene aggiunta da sola)</div>
        <p class="shc-gt-help" style="margin-top:8px">A ogni voce viene aggiunta un'icona in automatico. Le scelte già fatte per i giorni restano, se la voce esiste ancora.</p>
        <textarea class="shc-gt-input" rows="3" maxlength="255" placeholder="Carta, Vetro, Plastica, Organico, Organico e Resto">${esc(val)}</textarea>
        <div class="shc-gt-count"></div>
        <div class="shc-ap-sec-cap" style="margin-top:12px">Anteprima dei menu</div>
        <div class="shc-gt-preview"></div>
        <button type="button" class="shc-ap-reset-btn shc-gt-save" style="margin-top:12px">Salva elenco</button>
        <div class="shc-ap-reset-note shc-gt-msg"></div>
      </div>`,
    );
    overlay.querySelector(".shc-ap-dialog").style.maxHeight = "min(92vh, 900px)";
    const input = overlay.querySelector(".shc-gt-input");
    const draw = () => {
      const items = this._parseTypes(input.value).concat(["\u{1F937} Nulla"]);
      overlay.querySelector(".shc-gt-preview").innerHTML = items.map((i) => `<span class="shc-gt-chip">${esc(i)}</span>`).join("");
      overlay.querySelector(".shc-gt-count").textContent = `${input.value.length}/255`;
    };
    input.addEventListener("input", draw);
    draw();
    overlay.querySelector(".shc-gt-save").addEventListener("click", async (e) => {
      e.stopPropagation();
      const msg = overlay.querySelector(".shc-gt-msg");
      if (!this._parseTypes(input.value).length) {
        msg.textContent = "Scrivi almeno un tipo di raccolta.";
        return;
      }
      try {
        await hass.callService("input_text", "set_value", { entity_id: ent, value: input.value.trim() });
        try {
          await hass.connection.sendMessagePromise({ type: "fire_event", event_type: "raccolta_tipi_aggiorna" });
        } catch (err) {
          /* l'automazione parte comunque al cambio dell'elenco */
        }
        msg.textContent = "Salvato: i menu dei giorni sono stati aggiornati.";
      } catch (err) {
        msg.textContent = "Non sono riuscito a salvare l'elenco.";
      }
    });
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;

    const st = hass.states[cfg.entity];
    const state = st?.state;

    const badge = this._root.querySelector(".shc-ap-badge");
    badge.classList.remove("run", "standby", "off", "unavailable");
    const nothingDue = !state || state === "Nulla" || state === "unknown" || state === "unavailable";
    badge.classList.add(nothingDue ? "off" : "run");
    this._root.querySelector(".shc-ap-badge-label").textContent = state || "N/D";

    const img = this._root.querySelector(".shc-c-garbage-img");
    // Un tipo scritto a mano puo' non avere una foto: allora si mostra la sua icona grande.
    const own = (cfg.state_images || {})[state];
    const emojiEl = this._root.querySelector(".shc-c-garbage-emoji");
    const emoji = st?.attributes?.emoji;
    const useEmoji = !own && !nothingDue && !!emoji;
    emojiEl.style.display = useEmoji ? "block" : "none";
    emojiEl.textContent = useEmoji ? emoji : "";
    img.style.display = useEmoji ? "none" : "";
    const imgUrl = own || (cfg.state_images || {}).Nulla || "";
    if (img.getAttribute("data-src") !== imgUrl) {
      img.src = imgUrl;
      img.setAttribute("data-src", imgUrl);
    }

    if (cfg.weekday_entity) {
      this._root.querySelector(".shc-c-weekday").textContent = hass.states[cfg.weekday_entity]?.state ?? "—";
    }
    if (cfg.expose_time_entity) {
      const t = hass.states[cfg.expose_time_entity]?.state;
      this._root.querySelector(".shc-c-exposetime").textContent = t ? t.slice(0, 5) : "—";
    }
    if (cfg.pickup_day_entity) {
      this._root.querySelector(".shc-c-pickupday").textContent = hass.states[cfg.pickup_day_entity]?.state ?? "—";
    }
  }

  getCardSize() {
    return 5;
  }

  static getConfigElement() {
    return document.createElement("shc-garbage-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "Raccolta Differenziata",
      artwork: "garbage",
    };
  }
}

customElements.define("shc-garbage-card", ShcGarbageCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-garbage-card",
  name: "Raccolta Differenziata",
  description: "Card per la raccolta differenziata: immagine dinamica in base al rifiuto del giorno, giorno del ritiro, orario di esposizione",
  author: "Simonz82",
});

class ShcProxmoxCard extends HTMLElement {
  setConfig(config) {
    this._config = {
      name: "Proxmox",
      artwork: "server",
      sensors: {},
      power: {},
      disk_health: {},
      settings_sections: [],
      actions: [],
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._heroId = "px" + Math.random().toString(36).slice(2, 8);
    const hero = (HERO_BUILDERS[this._config.artwork] || HERO_BUILDERS.server)(this._heroId);
    const chip = CHIP_SVGS[this._config.artwork] || CHIP_SVGS.server;
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card is-run">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${chip}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
          </span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Impostazioni">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-update" title="Aggiornamenti">${ICON_BELL}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Statistiche">${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-ap-consumi" title="Consumi">${ICON_BOLT}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero">${hero}</div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Nodo</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_CUBE}</span><small>Contenitori attivi</small></span><b class="shc-px-ct">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_MONITOR}</span><small>VM attive</small></span><b class="shc-px-vm">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_TIMER}</span><small>Avviato il</small></span><b class="shc-px-boot">\u2014</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BOLT}</span><small>Consumo</small></span><b class="shc-px-power-info">\u2014</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter shc-c-meter-clickable shc-px-meter-cpu">
              <div class="shc-ap-meter-row"><span>CPU</span><strong class="shc-px-cpu-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-px-cpu-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-px-meter-gpu">
              <div class="shc-ap-meter-row"><span>GPU</span><strong class="shc-px-gpu-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-px-gpu-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-px-meter-ram">
              <div class="shc-ap-meter-row"><span>RAM</span><strong class="shc-px-ram-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-px-ram-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-px-meter-disk">
              <div class="shc-ap-meter-row"><span>Disco</span><strong class="shc-px-disk-val">0%</strong></div>
              <div class="shc-ap-bar"><i class="shc-px-disk-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable shc-px-meter-cputemp">
              <div class="shc-ap-meter-row"><span>Temp CPU</span><strong class="shc-px-cputemp-val">0\u00b0C</strong></div>
              <div class="shc-ap-bar"><i class="shc-px-cputemp-bar" style="width:0%"></i></div>
            </div>
          </div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);
    this._root.querySelector(".shc-ap-settings").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openSettings();
    });
    this._root.querySelector(".shc-ap-update").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openUpdate();
    });
    this._root.querySelector(".shc-ap-stats").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-ap-consumi").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openConsumi();
    });
    this._root.querySelector(".shc-ap-hero").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openStats();
    });
    this._root.querySelector(".shc-px-meter-cpu").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.cpu, "CPU", "#38bdf8");
    });
    this._root.querySelector(".shc-px-meter-ram").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.ram_pct, "RAM", "#22c55e");
    });
    this._root.querySelector(".shc-px-meter-disk").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.disk_pct, "Disco", "#eab308");
    });
    this._root.querySelector(".shc-px-meter-cputemp").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.cpu_temp, "Temp CPU", "#ef4444");
    });
    this._root.querySelector(".shc-px-meter-gpu").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openMeterChart(this._config.sensors?.gpu_pct, "GPU", "#a855f7");
    });
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml) {
    let overlay = this._root.querySelector(".shc-ap-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      // Menu a tendina delle impostazioni (righe input_select): la scelta viene applicata subito.
      overlay.addEventListener("change", (e) => {
        const t = e.target;
        if (t && t.dataset && t.dataset.selectEntity && this._hass) {
          this._hass.callService("input_select", "select_option", { entity_id: t.dataset.selectEntity, option: t.value });
        }
      });
      this._root.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.hidden = false;
    return overlay;
  }

  _fmtDateTime(iso) {
    if (!iso) return "\u2014";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return String(iso);
    return d.toLocaleString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  _settingsRowHtml(hass, row) {
    const st = hass.states[row.entity];
    if (!st) return this._row(row.label, `<span class="shc-ap-row-val">n/d</span>`);
    const domain = row.entity.split(".")[0];
    if (["input_boolean", "automation", "switch"].includes(domain)) {
      const on = st.state === "on";
      return this._row(
        row.label,
        `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-entity="${esc(row.entity)}" aria-pressed="${on}"></button>`,
      );
    }
    if (domain === "input_select") {
      const opts = (st.attributes?.options || [])
        .map((o) => `<option value="${esc(o)}"${o === st.state ? " selected" : ""}>${esc(o)}</option>`)
        .join("");
      return this._row(row.label, `<select class="shc-ap-select" data-select-entity="${esc(row.entity)}">${opts}</select>`);
    }
    const unit = st.attributes?.unit_of_measurement || "";
    return `<div class="shc-ap-row" data-open-entity="${esc(row.entity)}" style="cursor:pointer">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <span class="shc-ap-row-val">${esc(st.state)}${unit ? " " + esc(unit) : ""}</span>
    </div>`;
  }

  _actionRowHtml(row) {
    const target = row.service ? row.service : row.entity;
    return `<div class="shc-ap-row">
      <span class="shc-ap-row-label">${esc(row.label)}</span>
      <button type="button" class="shc-ap-action-btn" data-action-target="${esc(target)}" data-action-kind="${row.service ? "service" : "script"}" data-confirm="${esc(row.confirm || "")}">Esegui</button>
    </div>`;
  }

  _openSettings() {
    const hass = this._hass;
    const sections = (this._config.settings_sections || [])
      .map(
        (sec) => `<div class="shc-ap-sec">
          <div class="shc-ap-sec-cap">${esc(sec.title)}</div>
          ${sec.rows.map((row) => this._settingsRowHtml(hass, row)).join("")}
        </div>`,
      )
      .join("");

    const actions = this._config.actions || [];
    const actionsHtml = actions.length
      ? `<div class="shc-ap-sec">
           <div class="shc-ap-sec-cap">Strumenti</div>
           ${actions.map((a) => this._actionRowHtml(a)).join("")}
         </div>`
      : "";

    const overlay = this._openDialog("Impostazioni", `${sections}${actionsHtml}`);

    overlay.querySelectorAll("[data-entity]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const entity = btn.dataset.entity;
        const domain = entity.split(".")[0];
        hass.callService(domain, "toggle", { entity_id: entity });
        setTimeout(() => this._openSettings(), 200);
      });
    });
    overlay.querySelectorAll("[data-open-entity]").forEach((row) => {
      row.addEventListener("click", () => {
        const e = new Event("hass-more-info", { bubbles: true, composed: true });
        e.detail = { entityId: row.dataset.openEntity };
        this.dispatchEvent(e);
      });
    });
    overlay.querySelectorAll("[data-action-target]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const confirmText = btn.dataset.confirm;
        if (confirmText && !window.confirm(confirmText)) return;
        if (btn.dataset.actionKind === "service") {
          const [domain, service] = btn.dataset.actionTarget.split(".");
          hass.callService(domain, service, {});
        } else {
          hass.callService("script", "turn_on", { entity_id: btn.dataset.actionTarget });
        }
      });
    });
  }

  _statRow(label, value) {
    return this._row(label, `<span class="shc-ap-row-val">${esc(value)}</span>`);
  }

  _val(hass, entityId, digits) {
    const st = entityId ? hass.states[entityId] : null;
    if (!st) return "\u2014";
    const n = Number(st.state);
    const unit = st.attributes?.unit_of_measurement || "";
    const num = Number.isFinite(n) && digits != null ? n.toFixed(digits) : st.state;
    return `${num}${unit ? " " + unit : ""}`;
  }

  _fmtAxis(v) {
    if (!Number.isFinite(v)) return "0";
    const s = Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  }

  _smoothPath(coords) {
    if (coords.length < 3) {
      return `M ${coords.map((c) => `${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(" L ")}`;
    }
    let d = `M ${coords[0][0].toFixed(1)},${coords[0][1].toFixed(1)}`;
    for (let i = 1; i < coords.length - 1; i++) {
      const [x0, y0] = coords[i];
      const [x1, y1] = coords[i + 1];
      const mx = (x0 + x1) / 2;
      const my = (y0 + y1) / 2;
      d += ` Q ${x0.toFixed(1)},${y0.toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`;
    }
    const last = coords[coords.length - 1];
    d += ` L ${last[0].toFixed(1)},${last[1].toFixed(1)}`;
    return d;
  }

  _lineChartSvg(points, color) {
    if (!points.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 90;
    const plotX0 = 24;
    const plotW = width - plotX0;
    const values = points.map((p) => p.y);
    const min = Math.min(...values, 0);
    const max = Math.max(...values, min + 1);
    const range = max - min || 1;
    const stepX = points.length > 1 ? plotW / (points.length - 1) : 0;
    const coords = points.map((p, i) => [plotX0 + i * stepX, height - ((p.y - min) / range) * (height - 6) - 3]);
    const lineD = this._smoothPath(coords);
    const areaD = `${lineD} L ${coords[coords.length - 1][0].toFixed(1)},${height} L ${coords[0][0].toFixed(1)},${height} Z`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg" preserveAspectRatio="none">
      <line x1="${plotX0}" y1="3" x2="${plotX0}" y2="${height - 3}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="8" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 3}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(min)}</text>
      <path d="${areaD}" fill="${color}" opacity="0.14"/>
      <path d="${lineD}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;
  }

  _labelSpans(items, count, formatFn) {
    if (!items.length) return "";
    const n = Math.min(count, items.length);
    const idxs = [];
    for (let i = 0; i < n; i++) {
      idxs.push(n === 1 ? 0 : Math.round((i * (items.length - 1)) / (n - 1)));
    }
    const seen = new Set();
    const unique = idxs.filter((i) => (seen.has(i) ? false : (seen.add(i), true)));
    return `<div class="shc-ap-chart-labels">${unique.map((i) => `<span>${formatFn(items[i], i)}</span>`).join("")}</div>`;
  }

  async _fetchHistory6h(entityId) {
    const end = new Date();
    const start = new Date(end.getTime() - 6 * 3600 * 1000);
    const result = await this._hass.connection.sendMessagePromise({
      type: "history/history_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
    });
    const rows = result?.[entityId] || [];
    return rows
      .map((r) => ({ t: new Date((r.lu || r.last_updated_ts) * 1000 || r.last_updated), y: Number(r.s ?? r.state) }))
      .filter((p) => Number.isFinite(p.y));
  }

  _openMeterChart(entityId, title, color) {
    if (!entityId) return;
    shcOpenChartPopup(this, { title, series: [{ entity: entityId, label: title, color }] });
  }

  _openStats() {
    const hass = this._hass;
    const cfg = this._config;
    const s = cfg.sensors || {};
    const dh = cfg.disk_health || {};
    const val = (id, digits) => this._val(hass, id, digits);

    const sistemaHtml = [
      this._statRow("CPU", val(s.cpu, 1)),
      this._statRow("RAM usata", val(s.ram_used, 1)),
      this._statRow("RAM libera", val(s.ram_free, 1)),
      this._statRow("RAM %", val(s.ram_pct, 1)),
      this._statRow("Disco %", val(s.disk_pct, 1)),
      this._statRow("Disco local-lvm %", val(s.disk_lvm_pct, 1)),
      this._statRow("Contenitori attivi", val(s.containers, 0)),
      this._statRow("VM attive", val(s.vms, 0)),
      this._statRow("Avviato il", this._fmtDateTime(hass.states[s.last_boot]?.state)),
    ].join("");

    const diskHtml = [
      this._statRow("Temperatura SSD", val(dh.temp, 0)),
      this._statRow("Usura SSD", val(dh.wearout, 0)),
      this._statRow("Ore di accensione", val(dh.power_on_hours, 0)),
      this._statRow("Cicli di alimentazione", val(dh.power_cycles, 0)),
      this._statRow("Salute SSD", dh.health ? (hass.states[dh.health]?.state === "on" ? "Problema rilevato" : "OK") : "\u2014"),
    ].join("");

    this._openDialog("Statistiche", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Sistema</div>${sistemaHtml}</div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Disco fisico</div>${diskHtml}</div>
    `);
  }

  // Consumo elettrico: pulsante "Consumi" (fulmine), separato da "Statistiche" cosi' ogni
  // pulsante ha un solo scopo, stesso posto su tutte le card che misurano energia (NAS,
  // elettrodomestici). In piu' dei valori istantanei, se configuri energy_stat_entity (sensore
  // kWh con storico a lungo termine) mostra anche i totali per periodo e gli istogrammi mese/anno.
  _openConsumi() {
    const hass = this._hass;
    const cfg = this._config;
    const p = cfg.power || {};
    const val = (id, digits) => this._val(hass, id, digits);

    const consumoHtml = [
      this._statRow("Potenza attuale", val(p.power, 1)),
      this._statRow("Tensione", val(p.voltage, 0)),
      this._statRow("Corrente", val(p.current, 2)),
      this._statRow("Energia oggi", val(p.energy_day, 2)),
      this._statRow("Energia mese", val(p.energy_month, 1)),
    ].join("");

    const useAutoStats = !!cfg.energy_stat_entity;
    this._openDialog("Consumi", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">In tempo reale</div>${consumoHtml}</div>
      ${useAutoStats ? this._autoConsumiHtml() : ""}
      ${this._energyBarsHtml()}
    `);
    if (useAutoStats) {
      const overlay = this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov)");
      this._loadEnergyBars(overlay);
      this._loadAutoPeriods(overlay);
    }
  }

  _autoConsumiHtml() {
    return `<div class="shc-ap-sec">
      <div class="shc-ap-sec-cap">Consumi per periodo</div>
      <div class="shc-ap-week-list" data-auto-periods><div class="shc-ap-row-val">Caricamento\u2026</div></div>
    </div>`;
  }

  async _loadAutoPeriods(overlay) {
    const cfg = this._config;
    const slot = overlay?.querySelector("[data-auto-periods]");
    if (!slot || !cfg.energy_stat_entity) return;
    const costRaw = cfg.cost_entity ? Number(this._hass.states[cfg.cost_entity]?.state) : NaN;
    try {
      const p = await shcComputeAutoPeriods(this._hass, cfg.energy_stat_entity, costRaw);
      const row = (key, def) => {
        const d = p[key];
        const kwh = Number.isFinite(d?.kwh) ? `${d.kwh.toFixed(2)} kWh` : "\u2014";
        const cost = Number.isFinite(d?.cost) ? `${d.cost.toFixed(2)} \u20ac` : "\u2014";
        return `<div class="shc-ap-week-row">
          <div class="shc-ap-week-day">${esc(def)}</div>
          <div class="shc-ap-week-stats cols2">
            <div class="shc-ap-week-stat"><small>Consumo</small><b>${kwh}</b></div>
            <div class="shc-ap-week-stat"><small>Costo</small><b>${cost}</b></div>
          </div>
        </div>`;
      };
      slot.innerHTML = [row("today", "Oggi"), row("yesterday", "Ieri"), row("month", "Mese"), row("month_prev", "Mese prec."), row("year", "Anno"), row("year_prev", "Anno prec.")].join("");
    } catch (e) {
      slot.innerHTML = `<div class="shc-ap-row-val">Statistiche non disponibili al momento</div>`;
    }
  }

  _energyBarsHtml() {
    if (!this._config.energy_stat_entity) return "";
    return `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Questo mese (kWh al giorno)</div><div class="shc-ap-chart-loading" data-chart="month">Caricamento...</div></div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Quest'anno (kWh al mese)</div><div class="shc-ap-chart-loading" data-chart="year">Caricamento...</div></div>`;
  }

  async _fetchAutoStats(entityId, period, start, end) {
    const result = await this._hass.connection.sendMessagePromise({
      type: "recorder/statistics_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      statistic_ids: [entityId],
      period,
    });
    const rows = result?.[entityId] || [];
    return rows.map((r) => ({ t: new Date(r.start), value: Math.max(0, Number(r.change ?? 0)) }));
  }

  _barChartSvg(bars, color) {
    if (!bars.length) return `<div class="shc-ap-chart-empty">Nessun dato</div>`;
    const width = 300;
    const height = 90;
    const plotX0 = 24;
    const plotW = width - plotX0;
    const labelSpace = 22;
    const barAreaH = height - labelSpace;
    const max = Math.max(...bars.map((b) => b.value), 0.01);
    const gap = 3;
    const barW = (plotW - gap * (bars.length - 1)) / bars.length;
    const fmt = (v) => {
      if (!(v > 0)) return "";
      const s = v.toFixed(1);
      return s.endsWith(".0") ? s.slice(0, -2) : s;
    };
    const parts = bars
      .map((b, i) => {
        const h = Math.max(1, (b.value / max) * (barAreaH - 2));
        const x = (plotX0 + i * (barW + gap)).toFixed(1);
        const y = (height - h).toFixed(1);
        const cx = (plotX0 + i * (barW + gap) + barW / 2).toFixed(1);
        const labelY = (height - h - 4).toFixed(1);
        const label = fmt(b.value);
        const text = label
          ? `<text x="${cx}" y="${labelY}" transform="rotate(-90 ${cx} ${labelY})" text-anchor="start" font-size="10" font-weight="800" fill="#94a3b8">${label}</text>`
          : "";
        return `<rect x="${x}" y="${y}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${color}"/>${text}`;
      })
      .join("");
    const axis = `<line x1="${plotX0}" y1="${labelSpace}" x2="${plotX0}" y2="${height}" stroke="#94a3b840" stroke-width="1"/>
      <text x="${plotX0 - 4}" y="${labelSpace + 6}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">${this._fmtAxis(max)}</text>
      <text x="${plotX0 - 4}" y="${height - 1}" text-anchor="end" font-size="10" font-weight="800" fill="#94a3b8">0</text>`;
    return `<svg viewBox="0 0 ${width} ${height}" class="shc-ap-chart-svg" preserveAspectRatio="none">${axis}${parts}</svg>`;
  }

  _loadEnergyBars(overlay) {
    const energyEntity = this._config.energy_stat_entity;
    if (!energyEntity || !overlay) return;
    const slot = (name) => overlay.querySelector(`[data-chart="${name}"]`);
    const now = new Date();
    const MONTH_ABBR = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
    this._fetchAutoStats(energyEntity, "day", new Date(now.getFullYear(), now.getMonth(), 1), now)
      .then((rows) => {
        const el = slot("month");
        if (!el) return;
        const bars = rows.map((r) => ({ value: r.value }));
        el.outerHTML = `<div data-chart="month">${this._barChartSvg(bars, "#0ea5e9")}${this._labelSpans(rows, 8, (r) => r.t.getDate())}</div>`;
      })
      .catch(() => {
        const el = slot("month");
        if (el) el.textContent = "Errore caricamento dati";
      });
    this._fetchAutoStats(energyEntity, "month", new Date(now.getFullYear(), 0, 1), now)
      .then((rows) => {
        const el = slot("year");
        if (!el) return;
        const bars = rows.map((r) => ({ value: r.value }));
        const labels = `<div class="shc-ap-chart-labels">${rows.map((r) => `<span>${MONTH_ABBR[r.t.getMonth()]}</span>`).join("")}</div>`;
        el.outerHTML = `<div data-chart="year">${this._barChartSvg(bars, "#0ea5e9")}${labels}</div>`;
      })
      .catch(() => {
        const el = slot("year");
        if (el) el.textContent = "Errore caricamento dati";
      });
  }

  _openUpdate() {
    const hass = this._hass;
    const cfg = this._config;
    const upd = cfg.update ? hass.states[cfg.update] : null;

    const aggiornamentiHtml = [
      this._statRow("Versione installata", upd?.attributes?.installed_version ?? "\u2014"),
      this._statRow("Versione disponibile", upd?.attributes?.latest_version ?? "\u2014"),
      this._statRow("Aggiornamento disponibile", upd?.state === "on" ? "S\u00ec" : "No"),
    ].join("");

    this._openDialog("Aggiornamenti", `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Proxmox VE</div>${aggiornamentiHtml}</div>
    `);
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;
    const s = cfg.sensors || {};
    const dh = cfg.disk_health || {};

    const online = s.status ? hass.states[s.status]?.state === "on" : true;
    const badge = this._root.querySelector(".shc-ap-badge");
    badge.classList.remove("run", "standby", "off", "unavailable");
    badge.classList.add(online ? "run" : "off");
    this._root.querySelector(".shc-ap-badge-label").textContent = online ? "ONLINE" : "OFFLINE";
    this._root.querySelector(".shc-px-ct").textContent = this._val(hass, s.containers, 0);
    this._root.querySelector(".shc-px-vm").textContent = this._val(hass, s.vms, 0);
    this._root.querySelector(".shc-px-boot").textContent = this._fmtDateTime(hass.states[s.last_boot]?.state);

    const cpu = s.cpu ? Number(hass.states[s.cpu]?.state) : NaN;
    const cpuVal = Number.isFinite(cpu) ? cpu : 0;
    this._root.querySelector(".shc-px-cpu-val").textContent = `${cpuVal.toFixed(0)}%`;
    const cpuBar = this._root.querySelector(".shc-px-cpu-bar");
    cpuBar.style.width = `${Math.min(100, Math.max(0, cpuVal))}%`;
    cpuBar.style.background = meterSeverityColor(cpuVal);

    const ram = s.ram_pct ? Number(hass.states[s.ram_pct]?.state) : NaN;
    const ramVal = Number.isFinite(ram) ? ram : 0;
    this._root.querySelector(".shc-px-ram-val").textContent = `${ramVal.toFixed(0)}%`;
    const ramBar = this._root.querySelector(".shc-px-ram-bar");
    ramBar.style.width = `${Math.min(100, Math.max(0, ramVal))}%`;
    ramBar.style.background = meterSeverityColor(ramVal);

    const disk = s.disk_pct ? Number(hass.states[s.disk_pct]?.state) : NaN;
    const diskVal = Number.isFinite(disk) ? disk : 0;
    this._root.querySelector(".shc-px-disk-val").textContent = `${diskVal.toFixed(0)}%`;
    const diskBar = this._root.querySelector(".shc-px-disk-bar");
    diskBar.style.width = `${Math.min(100, Math.max(0, diskVal))}%`;
    diskBar.style.background = meterSeverityColor(diskVal);

    const powerCfg = cfg.power || {};
    const power = powerCfg.power ? Number(hass.states[powerCfg.power]?.state) : NaN;
    const powerVal = Number.isFinite(power) ? power : 0;
    this._root.querySelector(".shc-px-power-info").textContent = `${powerVal.toFixed(1)} W`;

    const cpuTemp = s.cpu_temp ? Number(hass.states[s.cpu_temp]?.state) : NaN;
    const cpuTempVal = Number.isFinite(cpuTemp) ? cpuTemp : 0;
    this._root.querySelector(".shc-px-cputemp-val").textContent = `${cpuTempVal.toFixed(0)}\u00b0C`;
    const cpuTempBar = this._root.querySelector(".shc-px-cputemp-bar");
    cpuTempBar.style.width = `${Math.min(100, Math.max(0, (cpuTempVal / 100) * 100))}%`;
    cpuTempBar.style.background = cpuTempVal >= 85 ? "#ef4444" : cpuTempVal >= 70 ? "#f97316" : "#38bdf8";

    const gpuPct = s.gpu_pct ? Number(hass.states[s.gpu_pct]?.state) : NaN;
    const gpuVal = Number.isFinite(gpuPct) ? gpuPct : 0;
    this._root.querySelector(".shc-px-gpu-val").textContent = `${gpuVal.toFixed(0)}%`;
    const gpuBar = this._root.querySelector(".shc-px-gpu-bar");
    gpuBar.style.width = `${Math.min(100, Math.max(0, gpuVal))}%`;
    gpuBar.style.background = "#a855f7";

    const warnEl = this._root.querySelector(".shc-ap-warn");
    const card = this._root.querySelector(".shc-ap-card");
    const diskProblem = dh.health ? hass.states[dh.health]?.state === "on" : false;
    const updAvail = cfg.update ? hass.states[cfg.update]?.state === "on" : false;
    const warnings = [];
    if (!online) warnings.push("Nodo non raggiungibile");
    if (cpuVal >= 90) warnings.push(`CPU al ${cpuVal.toFixed(0)}%`);
    if (ramVal >= 90) warnings.push(`RAM al ${ramVal.toFixed(0)}%`);
    if (cpuTempVal >= 90) warnings.push(`Temp CPU a ${cpuTempVal.toFixed(0)}\u00b0C`);
    if (diskProblem) warnings.push("Problema SSD");
    if (updAvail) warnings.push("Aggiornamento disponibile");
    if (warnings.length) {
      warnEl.hidden = false;
      warnEl.textContent = "\u26a0 " + warnings.join(" \u00b7 ");
      card.classList.add("has-alarm");
    } else {
      warnEl.hidden = true;
      card.classList.remove("has-alarm");
    }
  }

  _graphSeries() {
    const s = this._config.sensors || {};
    return [
      { entity: s.cpu, label: "CPU", color: "#38bdf8" },
      { entity: s.ram_pct, label: "RAM", color: "#22c55e" },
      { entity: s.disk_pct, label: "Disco", color: "#eab308" },
      { entity: s.cpu_temp, label: "Temp CPU", color: "#ef4444" },
      { entity: s.gpu_pct, label: "GPU", color: "#a855f7" },
    ];
  }

  getCardSize() {
    return 7;
  }

  static getConfigElement() {
    return document.createElement("shc-proxmox-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "Proxmox",
      artwork: "server",
    };
  }
}

customElements.define("shc-proxmox-card", ShcProxmoxCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-proxmox-card",
  name: "Proxmox",
  description: "Card per l'host Proxmox: CPU/RAM/disco, contenitori/VM attive, consumo, salute SSD",
  author: "Simonz82",
});

// -----------------------------------------------------------------------
// PROTOTIPO 23/09/2026: shc-notif-center-card - stessa grammatica visiva
// (STYLE, shc-ap-card/top/chip) delle altre card, ma layout fisso, senza
// classico/centrato ne' hero: e' una card di impostazioni pura (volumi +
// finestra oraria del Centro Notifiche Alexa condiviso), tutto in vista
// diretta sulla card, niente popup. NON ancora nel repo pubblico/HACS -
// prova da vedere sotto alle card di Centro Notifiche prima di deciderlo.
// -----------------------------------------------------------------------
class ShcNotifCenterCard extends HTMLElement {
  // Campi obbligatori: qui NON si lancia un'eccezione se mancano (che darebbe la generica,
  // criptica "Configuration error" di HA, senza dire quale campo manca ne' un modo ovvio per
  // sistemarlo) - si mostra invece un avviso chiaro sulla card stessa, con lo stesso stile
  // delle altre, e il pulsante "Modifica" per compilarli resta comunque raggiungibile.
  static get REQUIRED_FIELDS() {
    return [
      ["volume_notifica_entity", "Volume annuncio"],
      ["volume_ripristino_entity", "Volume ripristino"],
      ["tempo_messaggio_entity", "Tempo del messaggio"],
      ["orario_inizio_entity", "Orario inizio"],
      ["orario_fine_entity", "Orario fine"],
    ];
  }

  setConfig(config) {
    this._config = {
      name: "Centro Notifiche",
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    const missing = ShcNotifCenterCard.REQUIRED_FIELDS.filter(([key]) => !this._config[key]);
    if (missing.length) {
      this._root.innerHTML = `<style>${STYLE}</style>
        <article class="shc-ap-card">
          <div class="shc-ap-top">
            <span class="shc-ap-chip">${ICON_BELL}</span>
            <span class="shc-ap-headings"><span class="shc-ap-name">${esc(this._config.name)}</span></span>
          </div>
          <div class="shc-ap-panel">
            <div class="shc-ap-meters">
              <div class="shc-ap-row-val">⚠️ Manca la configurazione di: ${missing.map(([, label]) => esc(label)).join(", ")}.</div>
              <div class="shc-ap-row-val">Apri "Modifica" (⋮ sulla card, in modalità modifica dashboard) e ricompila i campi.</div>
            </div>
          </div>
        </article>`;
      return;
    }
    const hero = HERO_BUILDERS.alexa("nc" + Math.random().toString(36).slice(2, 8));
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card is-run">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${ICON_BELL}</span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name">${esc(this._config.name)}</span>
          </span>
          <span class="shc-ap-badge run"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label">ALEXA</span></span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero">${hero}</div>
        </div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Volume annuncio</span><strong class="shc-notif-vol1-val">—</strong></div>
              <input type="range" class="shc-notif-range shc-notif-vol1" min="0" max="100" step="1">
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Volume ripristino</span><strong class="shc-notif-vol2-val">—</strong></div>
              <input type="range" class="shc-notif-range shc-notif-vol2" min="0" max="100" step="1">
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Tempo del messaggio</span><strong class="shc-notif-tempo-val">—</strong></div>
              <input type="range" class="shc-notif-range shc-notif-tempo" min="0" max="30" step="1">
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row">
                <span>Orario notifiche</span>
                <span class="shc-notif-times">
                  <input type="time" class="shc-notif-time shc-notif-time-start"><b>–</b><input type="time" class="shc-notif-time shc-notif-time-end">
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>`;

    const cfg = this._config;
    const fillRange = (el, pct) => {
      el.style.background = `linear-gradient(to right, var(--shc-blue) ${pct}%, var(--shc-border) ${pct}%)`;
    };
    const bindSlider = (cls, valCls, entity, unit, toState) => {
      const el = this._root.querySelector("." + cls);
      const valEl = this._root.querySelector("." + valCls);
      el.addEventListener("input", () => {
        valEl.textContent = el.value + unit;
        fillRange(el, (100 * (Number(el.value) - Number(el.min))) / (Number(el.max) - Number(el.min)));
      });
      el.addEventListener("change", () => {
        this._hass?.callService("input_number", "set_value", { entity_id: entity, value: toState(Number(el.value)) });
      });
    };
    bindSlider("shc-notif-vol1", "shc-notif-vol1-val", cfg.volume_notifica_entity, "%", (v) => v / 100);
    bindSlider("shc-notif-vol2", "shc-notif-vol2-val", cfg.volume_ripristino_entity, "%", (v) => v / 100);
    bindSlider("shc-notif-tempo", "shc-notif-tempo-val", cfg.tempo_messaggio_entity, "s", (v) => v);

    const bindTime = (cls, entity) => {
      const el = this._root.querySelector("." + cls);
      el.addEventListener("change", () => {
        if (!el.value) return;
        this._hass?.callService("input_datetime", "set_datetime", { entity_id: entity, time: el.value + ":00" });
      });
    };
    bindTime("shc-notif-time-start", cfg.orario_inizio_entity);
    bindTime("shc-notif-time-end", cfg.orario_fine_entity);

    if (this._hass) this.hass = this._hass;
  }

  set hass(hass) {
    this._hass = hass;
    const cfg = this._config;
    if (!cfg || !this._root) return;
    if (ShcNotifCenterCard.REQUIRED_FIELDS.some(([key]) => !cfg[key])) return;
    const fillRange = (el, pct) => {
      el.style.background = `linear-gradient(to right, var(--shc-blue) ${pct}%, var(--shc-border) ${pct}%)`;
    };
    const setSlider = (cls, valCls, entity, unit, toDisplay) => {
      const st = hass.states[entity];
      if (!st) return;
      const slider = this._root.querySelector("." + cls);
      const val = this._root.querySelector("." + valCls);
      const raw = toDisplay(Number(st.state));
      if (document.activeElement !== slider) {
        slider.value = raw;
        fillRange(slider, (100 * (raw - Number(slider.min))) / (Number(slider.max) - Number(slider.min)));
      }
      val.textContent = raw + unit;
    };
    setSlider("shc-notif-vol1", "shc-notif-vol1-val", cfg.volume_notifica_entity, "%", (v) => Math.round(v * 100));
    setSlider("shc-notif-vol2", "shc-notif-vol2-val", cfg.volume_ripristino_entity, "%", (v) => Math.round(v * 100));
    setSlider("shc-notif-tempo", "shc-notif-tempo-val", cfg.tempo_messaggio_entity, "s", (v) => Math.round(v));
    const setTime = (cls, entity) => {
      const st = hass.states[entity];
      const el = this._root.querySelector("." + cls);
      if (!st || document.activeElement === el) return;
      el.value = (st.state || "").slice(0, 5);
    };
    setTime("shc-notif-time-start", cfg.orario_inizio_entity);
    setTime("shc-notif-time-end", cfg.orario_fine_entity);
  }

  getCardSize() {
    return 5;
  }

  static getConfigElement() {
    return document.createElement("shc-notif-center-card-editor");
  }

  static getStubConfig() {
    return {
      name: "Centro Notifiche",
      volume_notifica_entity: "",
      volume_ripristino_entity: "",
      tempo_messaggio_entity: "",
      orario_inizio_entity: "",
      orario_fine_entity: "",
    };
  }
}
customElements.define("shc-notif-center-card", ShcNotifCenterCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-notif-center-card",
  name: "Centro Notifiche",
  description: "Volumi e finestra oraria del Centro Notifiche Alexa condiviso, stessa grafica delle altre card",
  author: "Simonz82",
});
