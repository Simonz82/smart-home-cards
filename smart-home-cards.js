// Card per Home Assistant di Simonz82: elettrodomestici (lavatrice, asciugatrice, lavastoviglie,
// forno, TV), FritzBox, climatizzatore, server Home Assistant, NAS Synology, Proxmox, UPS, energia casa, raccolta
// differenziata e rete Zigbee. Popup Impostazioni/Statistiche/Grafici presi dai package "Centro Controllo".
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
    <image href="/local/foto-pkg/echo-dot.png" x="8" y="8" width="224" height="224" preserveAspectRatio="xMidYMid meet" onerror="this.style.display='none'"/>
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
    <image href="/local/foto-pkg/fritz-box.png" x="-44.43" y="1" width="328.86" height="260.82" preserveAspectRatio="xMidYMid meet" onerror="this.style.display='none'"/>
  </svg>`,
  server: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="216" rx="66" ry="10" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <image href="/local/foto-pkg/ha_logo.gif" x="21.33" y="16.3" width="197.34" height="197.34" preserveAspectRatio="xMidYMid meet" onerror="this.style.display='none'"/>
  </svg>`,
  proxmox: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="216" rx="66" ry="10" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <image href="/local/foto-pkg/proxmox-logo.svg" x="-1" y="10" width="242" height="193.6" preserveAspectRatio="xMidYMid meet" onerror="this.style.display='none'"/>
  </svg>`,
  nas: (id) => `<svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shch-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="120" cy="222" rx="70" ry="9" fill="#0f172a" opacity=".14" filter="url(#shch-blur-${id})"/>
    <image href="/local/foto-pkg/synology-ds925.png" x="-1" y="-7" width="242" height="242" preserveAspectRatio="xMidYMid meet" onerror="this.style.display='none'"/>
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
    <image href="/local/foto-pkg/apc-ups.png" x="17.15" y="14" width="205.7" height="211.75" preserveAspectRatio="xMidYMid meet" onerror="this.style.display='none'"/>
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
const ICON_INFO =
  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16.5"/><circle cx="12" cy="7.7" r="0.15" fill="currentColor" stroke-width="2.6"/></svg>';
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
const ICON_RADIO =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="15" r="3"/><path d="M2 10.5 12 3l10 7.5"/><path d="M4 10.5V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.5"/></svg>';

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
.shc-ap-badge.pending{background:#fef3c7;color:#b45309}
[data-theme-dark] .shc-ap-badge.pending,:host-context([data-theme="dark"]) .shc-ap-badge.pending{background:rgba(245,158,11,.18);color:#fbbf24}
.shc-am-block{display:flex;flex-direction:column;gap:8px}
.shc-am-block[hidden]{display:none}
.shc-am-status{font-size:12.5px;font-weight:700;color:var(--shc-dim);padding:2px 2px 0}
.shc-am-status.warn{color:#b45309}
[data-theme-dark] .shc-am-status.warn,:host-context([data-theme="dark"]) .shc-am-status.warn{color:#fbbf24}
.shc-am-chips{display:flex;flex-wrap:wrap;gap:6px}
.shc-am-dev-chip{padding:7px 12px;border-radius:999px;border:1px solid var(--shc-border);background:var(--shc-card);color:var(--shc-dim);font:inherit;font-size:12.5px;font-weight:700;cursor:pointer}
.shc-am-dev-chip.on{background:var(--shc-blue);border-color:var(--shc-blue);color:#fff}
.shc-am-slots{display:flex;align-items:center;gap:8px}
.shc-am-slots-val{min-width:34px;text-align:center;font-size:13.5px;font-weight:800;color:var(--shc-text)}
.shc-am-info-body p{margin:0 0 10px;font-size:14px;line-height:1.5;color:var(--shc-text)}
.shc-am-info-body p:last-child{margin-bottom:0}
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
.shc-ap-ctrl{margin:0 13px 12px;padding:11px 12px;border-radius:16px;background:var(--shc-soft);display:flex;flex-direction:column;gap:9px}
.shc-ap-ctrl[hidden]{display:none}
.shc-ap-ctrl-head{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;font-weight:850;letter-spacing:.3px;text-transform:uppercase;color:var(--shc-dim)}
.shc-ap-ctrl-prog{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:none;letter-spacing:0;font-size:13px;color:var(--shc-text);cursor:pointer;text-decoration:underline dotted;text-underline-offset:3px}
.shc-ap-ctrl-btns{display:flex;flex-wrap:wrap;gap:7px}
.shc-ap-cbtn{flex:1 1 0;min-width:84px;display:flex;align-items:center;justify-content:center;gap:6px;padding:10px 8px;border:1px solid var(--shc-border);border-radius:13px;background:var(--shc-card);color:var(--shc-text);font:inherit;font-size:13.5px;font-weight:850;cursor:pointer}
.shc-ap-cbtn.go{background:#16a34a;border-color:#16a34a;color:#fff}
.shc-ap-cbtn.pause{background:#f59e0b;border-color:#f59e0b;color:#fff}
.shc-ap-cbtn.stop{color:#dc2626;border-color:rgba(220,38,38,.45)}
.shc-ap-cbtn.stop.armed{background:#dc2626;border-color:#dc2626;color:#fff}
.shc-ap-cbtn:disabled{opacity:.45;cursor:not-allowed}
.shc-ap-ctrl-note{font-size:12.5px;font-weight:700;line-height:1.4;color:var(--shc-dim)}
.shc-ap-ctrl-note.bad{color:#b45309}
.shc-ap-chips{display:flex;flex-wrap:wrap;gap:6px}
.shc-ap-pchip{padding:7px 11px;border:1px solid var(--shc-border);border-radius:999px;background:var(--shc-card);color:var(--shc-text);font:inherit;font-size:13px;font-weight:800;cursor:pointer}
.shc-ap-pchip.on{background:var(--shc-blue);border-color:var(--shc-blue);color:#fff}
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
.shc-at-speaker-row{display:flex;align-items:center;gap:8px}
.shc-at-pm{flex:0 0 auto;width:34px;height:34px;border-radius:10px;border:1px solid var(--shc-border);background:var(--shc-card);color:var(--shc-text);font-size:18px;font-weight:900;line-height:1;cursor:pointer}
.shc-at-pm:active{background:var(--shc-blue);color:#fff;border-color:var(--shc-blue)}
.shc-at-select{flex:1;min-width:0;border:1px solid var(--shc-border);border-radius:10px;background:var(--shc-card);color:var(--shc-text);font:inherit;font-size:13.5px;font-weight:700;padding:9px 10px}
.shc-at-active{display:flex;flex-direction:column;gap:6px}
.shc-at-active-row{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px;font-weight:700;color:var(--shc-text)}
.shc-at-active-row small{color:var(--shc-dim);font-weight:800;text-transform:uppercase;letter-spacing:.3px;font-size:10px}
.shc-wr-now{display:flex;align-items:center;gap:10px}
.shc-wr-now img{width:40px;height:40px;border-radius:50%;object-fit:cover;flex:0 0 auto;box-shadow:0 0 0 2px var(--shc-card),0 0 0 3px var(--shc-blue)}
.shc-wr-now-info{flex:1;min-width:0}
.shc-wr-now-name{font-size:14.5px;font-weight:850;color:var(--shc-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.shc-wr-now-tag{display:inline-block;margin-top:2px;font-size:9.5px;font-weight:900;letter-spacing:.5px;padding:2px 7px;border-radius:999px;background:var(--shc-card);color:var(--shc-blue-deep);border:1px solid var(--shc-border)}
.shc-wr-meter-row{display:flex;align-items:baseline;justify-content:space-between;gap:10px}
.shc-wr-meter-row span{font-size:12.5px;font-weight:750;color:var(--shc-dim)}
.shc-wr-meter-row strong{font-size:14px;font-weight:900;color:var(--shc-text)}
.shc-wr-station-grid{display:flex;flex-wrap:wrap;gap:10px 6px}
.shc-wr-station{width:60px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;background:none;border:0;font:inherit;padding:0}
.shc-wr-station img{width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid transparent;box-shadow:0 1px 4px rgba(15,23,42,.18)}
.shc-wr-station.on img{border-color:var(--shc-blue)}
.shc-wr-station span{font-size:9.5px;line-height:1.2;text-align:center;color:var(--shc-dim);max-width:60px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.4em}
.shc-wr-station.on span{color:var(--shc-text);font-weight:800}
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

// Nomi italiani dei programmi Home Connect piu' comuni (lavastoviglie Bosch/Siemens/Neff).
// Ogni card puo' aggiungerne o cambiarli con controls.program_names.
const SHC_PROGRAM_NAMES = {
  dishcare_dishwasher_program_eco_50: "Eco 50\u00b0",
  dishcare_dishwasher_program_auto_1: "Auto 35-45\u00b0",
  dishcare_dishwasher_program_auto_2: "Auto 45-65\u00b0",
  dishcare_dishwasher_program_auto_3: "Auto 65-75\u00b0",
  dishcare_dishwasher_program_intensiv_70: "Intensivo 70\u00b0",
  dishcare_dishwasher_program_quick_45: "Rapido 45\u00b0",
  dishcare_dishwasher_program_quick_65: "Rapido 65\u00b0",
  dishcare_dishwasher_program_night_wash: "Notte",
  dishcare_dishwasher_program_machine_care: "Cura macchina",
  dishcare_dishwasher_program_pre_rinse: "Prelavaggio",
  dishcare_dishwasher_program_glas_40: "Delicato 40\u00b0",
  dishcare_dishwasher_program_kurz_60: "Breve 60\u00b0",
  dishcare_dishwasher_program_express_sparkle_65: "Express 65\u00b0",
};

// Etichette della scala dei gradi della gauge dritta: con passo 1 diventano tante,
// quindi niente simbolo del grado (c'e' gia' "°C" accanto al valore) e tutte
// centrate sul loro valore (classe "dense").
function shcDegTicks(el, min, max, step) {
  const pos = (v) => Math.min(100, Math.max(0, ((v - min) / (max - min)) * 100));
  const out = [];
  for (let t = min; t <= max + 1e-9; t += step) {
    out.push(`<span style="left:${pos(t).toFixed(2)}%">${t}${step >= 2 ? "\u00b0" : ""}</span>`);
  }
  el.innerHTML = out.join("");
  el.classList.toggle("dense", step < 2);
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
        ${this._config.controls ? `<div class="shc-ap-ctrl" hidden></div>` : ""}
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

    const shcSettingsBody = `${sections}${resetBtn}`;
    const overlay = this._openDialog("Impostazioni", shcSettingsBody.trim() ? shcSettingsBody : `<div class="shc-ap-row-val">Nessuna impostazione configurata per questa card (vedi la guida, campo "settings_sections").</div>`);

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
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava es. "2623")
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
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava es. "2623")
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
    this._renderControls(hass);
  }

  // -----------------------------------------------------------------------
  // Comandi a distanza (facoltativi, campo "controls"): per gli elettrodomestici
  // domotici che accettano comandi. Due modi, anche insieme:
  //  - machine_select: un select con le opzioni run/pause/stop (SmartThings,
  //    es. asciugatrice Samsung) -> Avvia/Riprendi, Pausa, Stop;
  //  - program_select + start_select: programma scelto + programma attivo
  //    (Home Connect, es. lavastoviglie Bosch/Siemens) -> scegli il programma,
  //    le opzioni e l'avvio ritardato, poi Avvia; Stop con stop_button.
  // Se remote_entity e' spento l'elettrodomestico rifiuta i comandi: i pulsanti
  // restano visibili ma disattivati, con la spiegazione di cosa fare.
  // -----------------------------------------------------------------------
  _ctrlOk(hass, entity) {
    const st = entity ? hass.states[entity] : null;
    return !!st && !["unavailable", "unknown"].includes(st.state);
  }

  _remoteAllowed(hass) {
    const c = this._config.controls || {};
    if (!c.remote_entity) return true;
    return hass.states[c.remote_entity]?.state === "on";
  }

  _programLabel(opt) {
    const c = this._config.controls || {};
    if (!opt || ["unknown", "unavailable"].includes(opt)) return "\u2014";
    if (c.program_names && c.program_names[opt]) return c.program_names[opt];
    if (SHC_PROGRAM_NAMES[opt]) return SHC_PROGRAM_NAMES[opt];
    const tail = String(opt).split("_program_").pop().replace(/_/g, " ");
    return tail.charAt(0).toUpperCase() + tail.slice(1);
  }

  _ctrlRunning(hass) {
    const c = this._config.controls || {};
    const ms = c.machine_select ? hass.states[c.machine_select]?.state : null;
    if (ms) return ms;
    const act = c.start_select ? hass.states[c.start_select]?.state : null;
    const op = this._config.live?.state_entity ? hass.states[this._config.live.state_entity]?.state : null;
    if (["run", "delayedstart"].includes(op) || (act && !["unknown", "unavailable"].includes(act))) return op === "pause" ? "pause" : "run";
    if (op === "pause") return "pause";
    return "stop";
  }

  _renderControls(hass) {
    const c = this._config.controls;
    const box = this._root.querySelector(".shc-ap-ctrl");
    if (!c || !box) return;
    const avail = [c.machine_select, c.start_select, c.power_switch].some((e) => this._ctrlOk(hass, e));
    box.hidden = !avail;
    if (!avail) return;
    const remote = this._remoteAllowed(hass);
    const state = this._ctrlRunning(hass);
    const dis = remote ? "" : " disabled";
    const btns = [];
    if (c.power_switch && this._ctrlOk(hass, c.power_switch) && state === "stop") {
      const on = hass.states[c.power_switch].state === "on";
      btns.push(`<button type="button" class="shc-ap-cbtn" data-cact="power"${dis}>${on ? "Spegni" : "Accendi"}</button>`);
    }
    if (c.machine_select) {
      if (state === "run") btns.push(`<button type="button" class="shc-ap-cbtn pause" data-cact="pause"${dis}>\u275a\u275a Pausa</button>`);
      else btns.push(`<button type="button" class="shc-ap-cbtn go" data-cact="run"${dis}>\u25b6 ${state === "pause" ? "Riprendi" : "Avvia"}</button>`);
      if (state !== "stop") btns.push(`<button type="button" class="shc-ap-cbtn stop" data-cact="stop"${dis}>\u25a0 Stop</button>`);
    } else if (c.start_select) {
      if (state === "stop") btns.push(`<button type="button" class="shc-ap-cbtn go" data-cact="start"${dis}>\u25b6 Avvia</button>`);
      else if (c.stop_button) btns.push(`<button type="button" class="shc-ap-cbtn stop" data-cact="stop"${dis}>\u25a0 Stop</button>`);
    }
    if (c.program_select) btns.push(`<button type="button" class="shc-ap-cbtn" data-cact="programs">Programmi</button>`);
    const prog = c.program_select ? this._programLabel(hass.states[c.program_select]?.state) : "";
    const delay = c.delay_entity ? Number(hass.states[c.delay_entity]?.state) : 0;
    const progTxt = prog && state === "stop" ? `${prog}${delay > 0 ? ` \u00b7 tra ${this._fmtDelay(delay)}` : ""}` : "";
    let note = "";
    if (!remote) note = `<div class="shc-ap-ctrl-note bad">${esc(c.remote_hint || "Comandi a distanza disattivati sull'elettrodomestico: attiva il controllo remoto (Smart Control / Avvio remoto) dal suo pannello.")}</div>`;
    else if (state === "pause" && c.machine_select) note = `<div class="shc-ap-ctrl-note">In pausa: premi Riprendi per continuare il ciclo.</div>`;
    const html = `<div class="shc-ap-ctrl-head"><span>Comandi</span>${progTxt ? `<span class="shc-ap-ctrl-prog" data-cact="programs">${esc(progTxt)}</span>` : ""}</div>
      <div class="shc-ap-ctrl-btns">${btns.join("")}</div>${note}`;
    if (html === this._ctrlHtml) return;
    this._ctrlHtml = html;
    box.innerHTML = html;
    box.querySelectorAll("[data-cact]").forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        this._ctrlAction(b.dataset.cact, b);
      }),
    );
  }

  _fmtDelay(sec) {
    const m = Math.round(sec / 60);
    const h = Math.floor(m / 60);
    return h > 0 ? `${h} h${m % 60 ? ` ${m % 60} min` : ""}` : `${m} min`;
  }

  _ctrlAction(act, btn) {
    const hass = this._hass;
    const c = this._config.controls || {};
    if (!hass) return;
    if (act === "programs") return this._openPrograms();
    if (act === "power") return hass.callService("switch", "toggle", { entity_id: c.power_switch });
    if (act === "stop") {
      // Fermare un ciclo non si annulla: serve un secondo tocco entro 4 secondi.
      if (!btn.classList.contains("armed")) {
        btn.classList.add("armed");
        btn.textContent = "Tocca ancora";
        clearTimeout(this._stopTimer);
        this._stopTimer = setTimeout(() => {
          this._ctrlHtml = null;
          this._renderControls(this._hass);
        }, 4000);
        return;
      }
      clearTimeout(this._stopTimer);
      if (c.machine_select) hass.callService("select", "select_option", { entity_id: c.machine_select, option: "stop" });
      else if (c.stop_button) hass.callService("button", "press", { entity_id: c.stop_button });
      return;
    }
    if (act === "run" || act === "pause") {
      return hass.callService("select", "select_option", { entity_id: c.machine_select, option: act });
    }
    if (act === "start") return this._startProgram();
  }

  async _startProgram() {
    const hass = this._hass;
    const c = this._config.controls || {};
    const prog = hass.states[c.program_select]?.state;
    if (!prog || ["unknown", "unavailable"].includes(prog)) return this._openPrograms();
    if (c.power_switch && hass.states[c.power_switch]?.state === "off") {
      await hass.callService("switch", "turn_on", { entity_id: c.power_switch });
      await new Promise((r) => setTimeout(r, 3000));
    }
    hass.callService("select", "select_option", { entity_id: c.start_select, option: prog });
  }

  _openPrograms() {
    const hass = this._hass;
    const c = this._config.controls || {};
    const pst = hass.states[c.program_select];
    const cur = pst?.state;
    const opts = (pst?.attributes?.options || [])
      .map((o) => `<button type="button" class="shc-ap-pchip${o === cur ? " on" : ""}" data-prog="${esc(o)}">${esc(this._programLabel(o))}</button>`)
      .join("");
    const optRows = (c.options || [])
      .filter((o) => hass.states[o.entity])
      .map((o) => this._settingsRowHtml(hass, { entity: o.entity, label: o.name || hass.states[o.entity].attributes?.friendly_name || o.entity }))
      .join("");
    const delay = c.delay_entity && hass.states[c.delay_entity] ? Number(hass.states[c.delay_entity].state) || 0 : null;
    const delayChips = delay === null ? "" : (c.delay_choices || [0, 1, 2, 3, 4, 6, 8])
      .map((h) => `<button type="button" class="shc-ap-pchip${Math.round(delay / 3600) === h && (h > 0 || delay === 0) ? " on" : ""}" data-delay="${h * 3600}">${h ? `${h} h` : "Subito"}</button>`)
      .join("");
    const state = this._ctrlRunning(hass);
    const remote = this._remoteAllowed(hass);
    const body = `${opts ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Programma</div><div class="shc-ap-chips">${opts}</div></div>` : ""}
      ${optRows ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Opzioni</div>${optRows}</div>` : ""}
      ${delayChips ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Avvio ritardato</div><div class="shc-ap-chips">${delayChips}</div></div>` : ""}
      ${c.start_select && state === "stop" ? `<button type="button" class="shc-ap-reset-btn" data-pstart${remote ? "" : " disabled"}>\u25b6 Avvia ${esc(this._programLabel(cur))}</button>` : ""}
      ${remote ? "" : `<div class="shc-ap-ctrl-note bad">${esc(c.remote_hint || "Comandi a distanza disattivati sull'elettrodomestico: attiva il controllo remoto dal suo pannello.")}</div>`}
      ${state !== "stop" ? `<div class="shc-ap-ctrl-note">Ciclo in corso: programma e opzioni si cambiano a macchina ferma.</div>` : ""}`;
    const overlay = this._openDialog("Programmi", body);
    const reopen = () => setTimeout(() => this._openPrograms(), 700);
    overlay.querySelectorAll("[data-prog]").forEach((b) =>
      b.addEventListener("click", () => {
        hass.callService("select", "select_option", { entity_id: c.program_select, option: b.dataset.prog });
        reopen();
      }),
    );
    overlay.querySelectorAll("[data-delay]").forEach((b) =>
      b.addEventListener("click", () => {
        hass.callService("number", "set_value", { entity_id: c.delay_entity, value: Number(b.dataset.delay) });
        reopen();
      }),
    );
    overlay.querySelectorAll("[data-entity]").forEach((b) =>
      b.addEventListener("click", () => {
        hass.callService(b.dataset.entity.split(".")[0], "toggle", { entity_id: b.dataset.entity });
        reopen();
      }),
    );
    const start = overlay.querySelector("[data-pstart]");
    if (start)
      start.addEventListener("click", () => {
        overlay.hidden = true;
        this._startProgram();
      });
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
  .shc-ed-check{display:flex;align-items:flex-start;gap:10px;cursor:pointer}
  .shc-ed-check input{width:20px;height:20px;margin:0;flex:0 0 auto;accent-color:var(--primary-color)}
  .shc-ed-check .shc-ed-label{margin-bottom:2px}
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
  .shc-ed-list-item{display:flex;flex-direction:column;gap:6px;padding:10px;margin-bottom:8px;border:1px solid var(--divider-color,#e0e0e0);border-radius:12px}
  .shc-ed-sublabel{font-size:11.5px;font-weight:700;color:var(--secondary-text-color)}
  details.shc-ed-list summary{cursor:pointer;font-size:12.5px;font-weight:700;color:var(--primary-color,#03a9f4);padding:6px 0}
  .shc-ed-list-del{align-self:flex-end;margin-top:0;border-color:#c62828;background:rgba(198,40,40,.08);color:#c62828}
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

// Valori predefiniti delle card Alexa: sono quelli dei miei package (alexa_webradio.yaml ecc.).
// Ogni elenco si puo' sostituire dalla configurazione della card (devices, speakers, stations,
// alarm_days), quindi chi ha speaker o stazioni diverse non deve toccare questo file.
const SHC_ALEXA_DEFAULT_DEVICES = [
  { entity: "media_player.alexa_salone", name: "Salone" },
  { entity: "media_player.alexa_bagno", name: "Bagno" },
  { entity: "media_player.alexa_cameretta", name: "Cameretta" },
  { entity: "media_player.alexa_camera", name: "Camera" },
];

const WR_DEFAULT_SPEAKERS = [
  { entity: "media_player.alexa_salone", name: "Salone", option: "Alexa Salone" },
  { entity: "media_player.alexa_bagno", name: "Bagno", option: "Alexa Bagno" },
  { entity: "media_player.alexa_cameretta", name: "Cameretta", option: "Alexa Cameretta" },
  { entity: "media_player.alexa_camera", name: "Camera", option: "Alexa Camera" },
];

const WR_DEFAULT_IMAGE_PATH = "/local/loghi_radio_alexa/4_4/";

const WR_DEFAULT_STATIONS = [
  { group: "TuneIn Radio", option: "M2O", name: "M2O", image: "m2o.jpg" },
  { group: "TuneIn Radio", option: "RADIO DEEJAY", name: "Radio Deejay", image: "radio_deejay.jpg" },
  { group: "TuneIn Radio", option: "RTL 102.5", name: "RTL 102.5", image: "rtl.png" },
  { group: "TuneIn Radio", option: "KISS KISS NAPOLI", name: "Kiss Kiss Napoli", image: "kisskiss.jpg" },
  { group: "TuneIn Radio", option: "RADIO CAPITAL", name: "Radio Capital", image: "radio_capital.jpg" },
  { group: "TuneIn Radio", option: "VIRGIN RADIO", name: "Virgin Radio", image: "virgin_radio.jpg" },
  { group: "TuneIn Radio", option: "RADIO ZETA", name: "Radio Zeta", image: "radio_z.jpg" },
  { group: "TuneIn Radio", option: "RADIO 101", name: "R101", image: "101.jpg" },
  { group: "TuneIn Radio", option: "RADIO 105", name: "Radio 105", image: "105.jpg" },
  { group: "TuneIn Radio", option: "RADIO NORBA", name: "Radio Norba", image: "norba.jpg" },
  { group: "TuneIn Radio", option: "RDS", name: "RDS", image: "rds.jpg" },
  { group: "Spotify", option: "NOVITA'", name: "Novità", image: "spotify.jpg" },
  { group: "Spotify", option: "FUEGO", name: "Fuego", image: "spotify.jpg" },
  { group: "Amazon Music", option: "BUONA GIORNATA", name: "Buona Giornata", image: "amazon.jpg" },
  { group: "Amazon Music", option: "TOP HITS", name: "Top Hits", image: "amazon.jpg" },
  { group: "Deezer", option: "FLOW", name: "Flow", image: "deezer.png" },
  { group: "Deezer", option: "TOP ITALY", name: "Top Italy", image: "deezer.png" },
];

const WR_DEFAULT_ALARM_DAYS = [
  ["lunedi", "Lunedì"],
  ["martedi", "Martedì"],
  ["mercoledi", "Mercoledì"],
  ["giovedi", "Giovedì"],
  ["venerdi", "Venerdì"],
  ["sabato", "Sabato"],
  ["domenica", "Domenica"],
].map(([key, name]) => ({ entity: `input_boolean.alexa_sveglia_${key}`, name }));

// Elenco dalla config della card (oggetti, o semplici entity_id come stringhe), altrimenti i default.
function shcConfigList(value, defaults, firstKey = "entity") {
  const items = Array.isArray(value) ? value : defaults;
  return items
    .map((it) => (typeof it === "string" ? { [firstKey]: it } : it))
    .filter((it) => it && it[firstKey]);
}

function shcEntityName(hass, entityId) {
  return hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
}

// Chip senza "name" in config: il testo segue il friendly_name, che arriva solo con hass.
function shcRefreshAutoNames(root, hass) {
  root.querySelectorAll("[data-autoname]").forEach((el) => {
    const name = shcEntityName(hass, el.dataset.autoname);
    if (el.textContent !== name) el.textContent = name;
  });
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

  _listItems(f) {
    const val = shcGetPath(this._config, f.key);
    const items = Array.isArray(val) ? val : f.defaults || [];
    return items.map((it) => (typeof it === "string" ? { [f.itemFields[0].key]: it } : it || {}));
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
          if (f.kind === "list") {
            // Elenco di oggetti (speaker, stazioni, giorni...): se la card non ha ancora la chiave
            // si parte dai default, cosi' modificarne una riga salva l'elenco completo in config.
            const items = this._listItems(f);
            const open = this._openLists?.has(f.key) ? " open" : "";
            return `<div class="shc-ed-row">
              <span class="shc-ed-label">${esc(f.label)}</span>
              ${f.hint ? `<p class="shc-ed-hint">${esc(f.hint)}</p>` : ""}
              <details class="shc-ed-list" data-list-box="${esc(f.key)}"${open}>
              <summary>${items.length} element${items.length === 1 ? "o" : "i"} — mostra/modifica</summary>
              ${items
                .map(
                  (item, i) => `<div class="shc-ed-list-item">
                ${f.itemFields
                  .map((sf) =>
                    `<span class="shc-ed-sublabel">${esc(sf.label)}</span>` +
                    (sf.kind === "entity"
                      ? `<ha-entity-picker data-list="${esc(f.key)}" data-idx="${i}" data-sub="${esc(sf.key)}" ${sf.domain ? `include-domains='${JSON.stringify(sf.domain)}'` : ""} allow-custom-entity></ha-entity-picker>`
                      : `<input class="shc-ed-input" data-list="${esc(f.key)}" data-idx="${i}" data-sub="${esc(sf.key)}" type="text">`),
                  )
                  .join("")}
                <button type="button" class="shc-ed-btn shc-ed-list-del" data-list-del="${esc(f.key)}" data-idx="${i}">Rimuovi</button>
              </div>`,
                )
                .join("")}
              <button type="button" class="shc-ed-btn" data-list-add="${esc(f.key)}">Aggiungi</button>
              </details>
            </div>`;
          }
          if (f.kind === "entity" || !f.kind) {
            return `<div class="shc-ed-row">
              <span class="shc-ed-label">${esc(f.label)}${f.required ? " — obbligatorio" : ""}</span>
              ${f.hint ? `<p class="shc-ed-hint">${esc(f.hint)}</p>` : ""}
              <ha-entity-picker data-key="${esc(f.key)}" ${f.domain ? `include-domains='${JSON.stringify(f.domain)}'` : ""} allow-custom-entity></ha-entity-picker>
              ${f.required && !val ? `<div class="shc-ed-missing">Serve un'entita' per far funzionare la card.</div>` : ""}
            </div>`;
          }
          if (f.kind === "bool") {
            return `<label class="shc-ed-row shc-ed-check">
              <input type="checkbox" data-bool="${esc(f.key)}"${val ? " checked" : ""}>
              <span><span class="shc-ed-label">${esc(f.label)}</span>${f.hint ? `<p class="shc-ed-hint">${esc(f.hint)}</p>` : ""}</span>
            </label>`;
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

    const listField = (key) => this.schema.flatMap((sec) => sec.fields).find((f) => f.key === key);
    const setListValue = (el, value) => {
      const f = listField(el.dataset.list);
      const items = this._listItems(f).map((it) => ({ ...it }));
      items[Number(el.dataset.idx)][el.dataset.sub] = value;
      this._set(f.key, items);
    };
    body.querySelectorAll("ha-entity-picker[data-list]").forEach((el) => {
      el.hass = this._hass;
      el.value = this._listItems(listField(el.dataset.list))[Number(el.dataset.idx)]?.[el.dataset.sub] || "";
      el.addEventListener("value-changed", (e) => {
        e.stopPropagation();
        setListValue(el, e.detail.value);
      });
    });
    body.querySelectorAll("input.shc-ed-input[data-list]").forEach((el) => {
      el.value = this._listItems(listField(el.dataset.list))[Number(el.dataset.idx)]?.[el.dataset.sub] ?? "";
      el.addEventListener("change", () => setListValue(el, el.value));
    });
    // gli elenchi aperti restano aperti quando Aggiungi/Rimuovi ridisegna l'editor
    const rememberOpenLists = () => {
      this._openLists = new Set([...body.querySelectorAll("details[data-list-box][open]")].map((el) => el.dataset.listBox));
    };
    body.querySelectorAll("[data-list-add]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const f = listField(btn.dataset.listAdd);
        rememberOpenLists();
        this._set(f.key, this._listItems(f).concat([{}]));
        this._render();
      });
    });
    body.querySelectorAll("[data-list-del]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const f = listField(btn.dataset.listDel);
        rememberOpenLists();
        this._set(f.key, this._listItems(f).filter((_, i) => i !== Number(btn.dataset.idx)));
        this._render();
      });
    });

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
    body.querySelectorAll("input[data-bool]").forEach((el) => {
      el.addEventListener("change", () => this._set(el.dataset.bool, el.checked));
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
        { key: "security_entity", label: "Stato di sicurezza", domain: ["binary_sensor"], hint: "Creato in automatico dall'integrazione Synology DSM (device_class 'safety': acceso = problema rilevato)" },
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
        { key: "sensors.status", label: "Stato del nodo (online/offline)", domain: ["binary_sensor", "sensor"] },
        { key: "sensors.containers", label: "Contenitori (LXC) attivi", domain: ["sensor"] },
        { key: "sensors.vms", label: "Macchine virtuali attive", domain: ["sensor"] },
        { key: "sensors.last_boot", label: "Ultimo avvio del nodo", domain: ["sensor"] },
        { key: "sensors.ram_used", label: "RAM usata", domain: ["sensor"] },
        { key: "sensors.ram_free", label: "RAM libera", domain: ["sensor"] },
        { key: "sensors.disk_lvm_pct", label: "Disco local-lvm (%)", domain: ["sensor"] },
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

class ShcAlexaTextCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [{ key: "name", label: "Nome", kind: "text", placeholder: "Alexa" }] },
      { title: "Speaker e testo", fields: [
        { key: "speaker_select_entity", label: "Selettore speaker", domain: ["input_select"], required: true },
        { key: "add_script", label: "Script aggiungi speaker al gruppo", domain: ["script"], required: true },
        { key: "remove_script", label: "Script rimuovi speaker dal gruppo", domain: ["script"], required: true },
        { key: "text_entity", label: "Campo testo", domain: ["input_text"], required: true },
      ]},
      { title: "Riproduzione", fields: [
        { key: "volume_entity", label: "Volume", domain: ["input_number"], required: true },
        { key: "play_script", label: "Script riproduci", domain: ["script"], required: true },
        { key: "group_entity", label: "Gruppo multiroom", domain: ["group"], required: true, hint: "Il group.* aggiornato dagli script aggiungi/rimuovi speaker, mostrato in card come \"In riproduzione su\"." },
      ]},
    ];
  }
}
customElements.define("shc-alexa-text-card-editor", ShcAlexaTextCardEditor);

class ShcAlexaMemoCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [{ key: "name", label: "Nome", kind: "text", placeholder: "Memo" }] },
      { title: "Messaggio", fields: [
        { key: "active_entity", label: "Attivo", domain: ["input_boolean"], required: true },
        { key: "text_entity", label: "Messaggio", domain: ["input_text"], required: true },
        { key: "devices_entity", label: "Dispositivi Alexa scelti", domain: ["input_text"], required: true, hint: "input_text con gli entity_id dei media_player scelti, separati da virgola (vuoto = dispositivo predefinito)." },
        { key: "devices", label: "Speaker mostrati come chip", kind: "list", defaults: SHC_ALEXA_DEFAULT_DEVICES, itemFields: [
          { key: "entity", label: "Speaker", kind: "entity", domain: ["media_player"] },
          { key: "name", label: "Nome sul chip (vuoto = nome dell'entita')" },
        ]},
      ]},
      { title: "Quando annunciare", fields: [
        { key: "repeat_entity", label: "Ripeti ogni giorno nel periodo", domain: ["input_boolean"], required: true },
        { key: "date_start_entity", label: "Data inizio", domain: ["input_datetime"], required: true },
        { key: "date_end_entity", label: "Data fine", domain: ["input_datetime"], required: true },
        { key: "time_entity", label: "Orario", domain: ["input_datetime"], required: true },
        { key: "once_datetime_entity", label: "Data e ora (una tantum)", domain: ["input_datetime"], required: true },
      ]},
      { title: "Persona e riprova al rientro", fields: [
        { key: "person_entity", label: "Persona (entity_id salvato qui, vuoto = nessuna)", domain: ["input_text"], required: true },
        { key: "pending_entity", label: "In sospeso (interno)", domain: ["input_boolean"], required: true },
        { key: "retry_delay_entity", label: "Ritardo dopo il rientro (minuti)", domain: ["input_number"], required: true },
      ]},
      { title: "Avanzate", fields: [
        { key: "slot_count_entity", label: "Quanti memo mostrare (solo su Memo 1)", domain: ["input_number"], hint: "Facoltativo: collegalo solo sulla card Memo 1 per far apparire lo stepper che sblocca Memo 3/4." },
      ]},
    ];
  }
}
customElements.define("shc-alexa-memo-card-editor", ShcAlexaMemoCardEditor);

class ShcAlexaWebradioCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [{ key: "name", label: "Nome", kind: "text", placeholder: "Radio Alexa" }] },
      { title: "Radio e volume", fields: [
        { key: "power_entity", label: "Radio ON/OFF", domain: ["input_boolean"], required: true },
        { key: "station_select_entity", label: "Selettore stazione/playlist", domain: ["input_select"], required: true },
        { key: "station_sensor_entity", label: "Sensore stazione corrente", domain: ["sensor"], required: true, hint: "Sensore template con attributi select/servizi/entity_picture." },
        { key: "volume_entity", label: "Volume", domain: ["input_number"], required: true },
      ]},
      { title: "Multiroom", fields: [
        { key: "group_entity", label: "Gruppo multiroom", domain: ["group"], required: true },
        { key: "speaker_list_entity", label: "Selettore speaker da aggiungere/rimuovere", domain: ["input_select"], required: true, hint: "Toccando un chip la card sceglie qui l'opzione dello speaker e poi lancia lo script aggiungi o rimuovi." },
        { key: "add_script", label: "Script aggiungi speaker al gruppo", domain: ["script"] },
        { key: "remove_script", label: "Script rimuovi speaker dal gruppo", domain: ["script"] },
        { key: "speakers", label: "Speaker mostrati come chip", kind: "list", defaults: WR_DEFAULT_SPEAKERS, itemFields: [
          { key: "entity", label: "Speaker", kind: "entity", domain: ["media_player"] },
          { key: "name", label: "Nome sul chip (vuoto = nome dell'entita')" },
          { key: "option", label: "Opzione del selettore speaker (vuoto = nome dell'entita')" },
        ]},
      ]},
      { title: "Stazioni e playlist", fields: [
        { key: "image_path", label: "Cartella immagini", kind: "text", placeholder: WR_DEFAULT_IMAGE_PATH, hint: "Usata per le immagini indicate solo come nome file. Un percorso che inizia con / o http resta com'e'." },
        { key: "stations", label: "Stazioni", kind: "list", defaults: WR_DEFAULT_STATIONS, itemFields: [
          { key: "option", label: "Opzione del selettore stazione" },
          { key: "name", label: "Nome mostrato (vuoto = opzione)" },
          { key: "image", label: "Immagine (nome file o percorso)" },
          { key: "group", label: "Gruppo (es. TuneIn Radio, Spotify)" },
        ]},
      ]},
      { title: "Sveglia (facoltativa)", fields: [
        { key: "alarm_entity", label: "Sveglia attiva", domain: ["input_boolean"] },
        { key: "alarm_on_entity", label: "Orario accensione", domain: ["input_datetime"] },
        { key: "alarm_off_entity", label: "Orario spegnimento", domain: ["input_datetime"] },
        { key: "alarm_days", label: "Giorni della sveglia", kind: "list", defaults: WR_DEFAULT_ALARM_DAYS, itemFields: [
          { key: "entity", label: "Interruttore del giorno", kind: "entity", domain: ["input_boolean"] },
          { key: "name", label: "Nome sul chip" },
        ]},
      ]},
      { title: "Volume ridotto automatico (facoltativo)", fields: [
        { key: "volume_off_automation", label: "Automazione volume ridotto", domain: ["automation"] },
        { key: "volume_off_entity", label: "Volume dopo lo spegnimento", domain: ["input_number"] },
      ]},
    ];
  }
}
customElements.define("shc-alexa-webradio-card-editor", ShcAlexaWebradioCardEditor);

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

    const shcSettingsBody = `${sections}${actionsHtml}`;
    const overlay = this._openDialog("Impostazioni", shcSettingsBody.trim() ? shcSettingsBody : `<div class="shc-ap-row-val">Nessuna impostazione configurata per questa card (vedi la guida, campo "settings_sections").</div>`);

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

    const shcSettingsBody = `${sections}${actionsHtml}`;
    const overlay = this._openDialog("Impostazioni", shcSettingsBody.trim() ? shcSettingsBody : `<div class="shc-ap-row-val">Nessuna impostazione configurata per questa card (vedi la guida, campo "settings_sections").</div>`);
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
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava es. "2623")
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

    const shcSettingsBody = `${sections}${actionsHtml}`;
    const overlay = this._openDialog("Impostazioni", shcSettingsBody.trim() ? shcSettingsBody : `<div class="shc-ap-row-val">Nessuna impostazione configurata per questa card (vedi la guida, campo "settings_sections").</div>`);

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
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava es. "2623")
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
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava es. "2623")
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

    const shcSettingsBody = `${sections}${switchesHtml ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Interruttori</div>${switchesHtml}</div>` : ""}${actionsHtml}`;
    const overlay = this._openDialog(
      "Impostazioni",
      shcSettingsBody.trim() ? shcSettingsBody : `<div class="shc-ap-row-val">Nessuna impostazione configurata per questa card (vedi la guida, campo "settings_sections").</div>`,
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
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava es. "2623")
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

    const shcSettingsBody = `${sections}${actionsHtml}`;
    const overlay = this._openDialog("Impostazioni", shcSettingsBody.trim() ? shcSettingsBody : `<div class="shc-ap-row-val">Nessuna impostazione configurata per questa card (vedi la guida, campo "settings_sections").</div>`);

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
      artwork: "proxmox",
      sensors: {},
      power: {},
      disk_health: {},
      settings_sections: [],
      actions: [],
      ...config,
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._heroId = "px" + Math.random().toString(36).slice(2, 8);
    const hero = (HERO_BUILDERS[this._config.artwork] || HERO_BUILDERS.proxmox)(this._heroId);
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

    const shcSettingsBody = `${sections}${actionsHtml}`;
    const overlay = this._openDialog("Impostazioni", shcSettingsBody.trim() ? shcSettingsBody : `<div class="shc-ap-row-val">Nessuna impostazione configurata per questa card (vedi la guida, campo "settings_sections").</div>`);

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
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava es. "2623")
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
    const plotX0 = 36; // spazio per etichette a 4 cifre (prima 24, tagliava es. "2623")
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
      artwork: "proxmox",
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
      if (this._root.activeElement !== slider) {
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
      if (!st || this._root.activeElement === el) return;
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

// -----------------------------------------------------------------------
// PROTOTIPO 23/09/2026: shc-alexa-text-card - stessa impaginazione della
// vecchia card "Alexa Google Speaker Text" (selettore speaker +/-, testo
// libero, volume, pulsante riproduci, elenco dispositivi attivi), ma con
// grafica/colori della famiglia nuova. Solo locale, non ancora nel repo
// pubblico/HACS - prova da confrontare con la vecchia prima di deciderlo.
// -----------------------------------------------------------------------
class ShcAlexaTextCard extends HTMLElement {
  static get REQUIRED_FIELDS() {
    return [
      ["speaker_select_entity", "Selettore speaker"],
      ["add_script", "Script aggiungi speaker"],
      ["remove_script", "Script rimuovi speaker"],
      ["text_entity", "Campo testo"],
      ["volume_entity", "Volume"],
      ["play_script", "Script riproduci"],
      ["group_entity", "Gruppo multiroom"],
    ];
  }

  setConfig(config) {
    this._config = { name: "Alexa", ...config };
    this._root = this._root || this.attachShadow({ mode: "open" });
    const missing = ShcAlexaTextCard.REQUIRED_FIELDS.filter(([key]) => !this._config[key]);
    if (missing.length) {
      this._root.innerHTML = `<style>${STYLE}</style>
        <article class="shc-ap-card">
          <div class="shc-ap-top">
            <span class="shc-ap-chip">${ICON_MEGAPHONE}</span>
          </div>
          <div class="shc-ap-panel">
            <div class="shc-ap-meters">
              <div class="shc-ap-row-val">⚠️ Manca la configurazione di: ${missing.map(([, label]) => esc(label)).join(", ")}.</div>
            </div>
          </div>
        </article>`;
      return;
    }
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card is-run">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${ICON_MEGAPHONE}</span>
          <span class="shc-ap-badge run"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label">TTS</span></span>
        </div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Speaker</span></div>
              <div class="shc-at-speaker-row">
                <button type="button" class="shc-at-pm shc-at-minus" title="Rimuovi dal gruppo">−</button>
                <select class="shc-at-select"></select>
                <button type="button" class="shc-at-pm shc-at-plus" title="Aggiungi al gruppo">+</button>
              </div>
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Testo</span></div>
              <input type="text" class="shc-ed-input shc-at-text" placeholder="Scrivi il messaggio...">
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Volume</span><strong class="shc-at-vol-val">—</strong></div>
              <input type="range" class="shc-notif-range shc-at-vol" min="0" max="100" step="1">
            </div>
            <button type="button" class="shc-ap-reset-btn shc-at-play">${ICON_MEGAPHONE} Riproduci</button>
            <div class="shc-ap-sec-cap">In riproduzione su</div>
            <div class="shc-at-active"></div>
          </div>
        </div>
      </article>`;

    const cfg = this._config;
    this._root.querySelector(".shc-at-minus").addEventListener("click", (e) => {
      e.stopPropagation();
      this._hass?.callService("script", "turn_on", { entity_id: cfg.remove_script });
    });
    this._root.querySelector(".shc-at-plus").addEventListener("click", (e) => {
      e.stopPropagation();
      this._hass?.callService("script", "turn_on", { entity_id: cfg.add_script });
    });
    this._root.querySelector(".shc-at-select").addEventListener("change", (e) => {
      this._hass?.callService("input_select", "select_option", { entity_id: cfg.speaker_select_entity, option: e.target.value });
    });
    this._root.querySelector(".shc-at-text").addEventListener("change", (e) => {
      this._hass?.callService("input_text", "set_value", { entity_id: cfg.text_entity, value: e.target.value });
    });
    const volEl = this._root.querySelector(".shc-at-vol");
    const volValEl = this._root.querySelector(".shc-at-vol-val");
    volEl.addEventListener("input", () => {
      volValEl.textContent = volEl.value + "%";
      volEl.style.background = `linear-gradient(to right, var(--shc-blue) ${volEl.value}%, var(--shc-border) ${volEl.value}%)`;
    });
    volEl.addEventListener("change", () => {
      this._hass?.callService("input_number", "set_value", { entity_id: cfg.volume_entity, value: Number(volEl.value) / 100 });
    });
    this._root.querySelector(".shc-at-play").addEventListener("click", (e) => {
      e.stopPropagation();
      this._hass?.callService("script", "turn_on", { entity_id: cfg.play_script });
    });

    if (this._hass) this.hass = this._hass;
  }

  set hass(hass) {
    this._hass = hass;
    const cfg = this._config;
    if (!cfg || !this._root) return;
    if (ShcAlexaTextCard.REQUIRED_FIELDS.some(([key]) => !cfg[key])) return;

    const selectEl = this._root.querySelector(".shc-at-select");
    if (selectEl && this._root.activeElement !== selectEl) {
      const options = hass.states[cfg.speaker_select_entity]?.attributes?.options || [];
      const current = hass.states[cfg.speaker_select_entity]?.state || "";
      selectEl.innerHTML = options.map((o) => `<option value="${esc(o)}"${o === current ? " selected" : ""}>${esc(o)}</option>`).join("");
    }

    const textEl = this._root.querySelector(".shc-at-text");
    if (textEl && this._root.activeElement !== textEl) {
      textEl.value = hass.states[cfg.text_entity]?.state || "";
    }

    const volEl = this._root.querySelector(".shc-at-vol");
    const volValEl = this._root.querySelector(".shc-at-vol-val");
    const volSt = hass.states[cfg.volume_entity];
    if (volEl && volSt && this._root.activeElement !== volEl) {
      const pct = Math.round(Number(volSt.state) * 100);
      volEl.value = pct;
      volValEl.textContent = pct + "%";
      volEl.style.background = `linear-gradient(to right, var(--shc-blue) ${pct}%, var(--shc-border) ${pct}%)`;
    }

    const activeEl = this._root.querySelector(".shc-at-active");
    if (activeEl) {
      const ids = hass.states[cfg.group_entity]?.attributes?.entity_id || [];
      activeEl.innerHTML = ids.length
        ? ids
            .map((id) => {
              const st = hass.states[id];
              const name = st?.attributes?.friendly_name || id;
              const state = (st?.state || "—").toUpperCase();
              return `<div class="shc-at-active-row"><span>${esc(name)}</span><small>${esc(state)}</small></div>`;
            })
            .join("")
        : `<div class="shc-ap-row-val">Nessun dispositivo inserito per la riproduzione.</div>`;
    }
  }

  getCardSize() {
    return 5;
  }

  static getConfigElement() {
    return document.createElement("shc-alexa-text-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "Alexa",
    };
  }
}
customElements.define("shc-alexa-text-card", ShcAlexaTextCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-alexa-text-card",
  name: "Alexa Annuncio Testo",
  description: "Scrivi un testo e falo annunciare su uno o più speaker Alexa, con selettore multiroom e volume",
  author: "Simonz82",
});

class ShcAlexaMemoCard extends HTMLElement {
  static get REQUIRED_FIELDS() {
    return [
      ["active_entity", "Attivo"],
      ["text_entity", "Messaggio"],
      ["repeat_entity", "Ripetizione"],
      ["date_start_entity", "Data inizio"],
      ["date_end_entity", "Data fine"],
      ["time_entity", "Orario"],
      ["once_datetime_entity", "Data/ora singola"],
      ["person_entity", "Persona"],
      ["pending_entity", "In sospeso"],
      ["retry_delay_entity", "Ritardo rientro"],
      ["devices_entity", "Dispositivi Alexa"],
    ];
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

  _openInfo() {
    this._openDialog(
      "Come funziona",
      `<div class="shc-am-info-body">
        <p>Annuncia un messaggio vocale su Alexa a un orario stabilito: ogni giorno per un periodo, oppure una tantum in una data precisa.</p>
        <p>Se imposti una <b>Persona</b> e all'orario previsto non è in casa, l'annuncio non va perso: viene ripetuto pochi minuti dopo il suo rientro.</p>
        <p>Il volume, il tempo di attesa e la finestra oraria in cui è permesso annunciare sono <b>condivisi con tutte le notifiche Alexa</b> e si impostano nella card Centro Notifiche qui sopra, valgono anche per questo memo.</p>
      </div>`,
    );
  }

  setConfig(config) {
    this._config = { name: "Memo", ...config };
    this._root = this._root || this.attachShadow({ mode: "open" });
    const missing = ShcAlexaMemoCard.REQUIRED_FIELDS.filter(([key]) => !this._config[key]);
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
            </div>
          </div>
        </article>`;
      return;
    }
    const cfg = this._config;
    const slotsRow = cfg.slot_count_entity
      ? `<div class="shc-ap-row">
           <span class="shc-ap-row-label">Altri memo attivi</span>
           <div class="shc-am-slots">
             <button type="button" class="shc-at-pm shc-am-slots-minus" title="Meno memo">−</button>
             <span class="shc-am-slots-val">—</span>
             <button type="button" class="shc-at-pm shc-am-slots-plus" title="Più memo">+</button>
           </div>
         </div>`
      : "";
    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card is-run">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${ICON_BELL}</span>
          <span class="shc-ap-headings"><span class="shc-ap-name">${esc(this._config.name)}</span></span>
          <span class="shc-ap-badge off"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label">OFF</span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-am-info" title="Come funziona">${ICON_INFO}</button>
          </span>
        </div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-row">
              <span class="shc-ap-row-label">Attivo</span>
              <button type="button" class="shc-ap-switch shc-am-active"></button>
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Messaggio</span></div>
              <input type="text" class="shc-ed-input shc-am-text" placeholder="Scrivi il messaggio...">
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Dispositivi Alexa (vuoto = predefinito)</span></div>
              <div class="shc-am-chips">
                ${shcConfigList(cfg.devices, SHC_ALEXA_DEFAULT_DEVICES).map((d) => `<button type="button" class="shc-am-dev-chip" data-device="${esc(d.entity)}"${d.name ? "" : ` data-autoname="${esc(d.entity)}"`}>${esc(d.name || shcEntityName(this._hass, d.entity))}</button>`).join("")}
              </div>
            </div>
            <div class="shc-ap-row">
              <span class="shc-ap-row-label">Ripeti ogni giorno nel periodo</span>
              <button type="button" class="shc-ap-switch shc-am-repeat"></button>
            </div>
            <div class="shc-am-block shc-am-repeat-block">
              <div class="shc-ap-meter">
                <div class="shc-ap-meter-row"><span>Data inizio</span></div>
                <input type="date" class="shc-ed-input shc-am-date-start">
              </div>
              <div class="shc-ap-meter">
                <div class="shc-ap-meter-row"><span>Data fine</span></div>
                <input type="date" class="shc-ed-input shc-am-date-end">
              </div>
              <div class="shc-ap-meter">
                <div class="shc-ap-meter-row"><span>Orario</span></div>
                <input type="time" class="shc-ed-input shc-am-time">
              </div>
            </div>
            <div class="shc-am-block shc-am-once-block" hidden>
              <div class="shc-ap-meter">
                <div class="shc-ap-meter-row"><span>Data e ora</span></div>
                <input type="datetime-local" class="shc-ed-input shc-am-once">
              </div>
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Persona (opzionale)</span></div>
              <select class="shc-ap-select shc-am-person" style="max-width:100%;width:100%"></select>
            </div>
            <div class="shc-ap-meter">
              <div class="shc-ap-meter-row"><span>Ritardo dopo il rientro</span><strong class="shc-am-retry-val">—</strong></div>
              <input type="range" class="shc-notif-range shc-am-retry" min="0" max="60" step="1">
            </div>
            ${slotsRow}
            <div class="shc-am-status"></div>
          </div>
        </div>
      </article>`;

    const call = (domain, service, data) => this._hass?.callService(domain, service, data);

    this._root.querySelector(".shc-am-info").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openInfo();
    });
    this._root.querySelector(".shc-am-active").addEventListener("click", (e) => {
      e.stopPropagation();
      call("input_boolean", "toggle", { entity_id: cfg.active_entity });
    });
    this._root.querySelector(".shc-am-repeat").addEventListener("click", (e) => {
      e.stopPropagation();
      call("input_boolean", "toggle", { entity_id: cfg.repeat_entity });
    });
    this._root.querySelector(".shc-am-text").addEventListener("change", (e) => {
      call("input_text", "set_value", { entity_id: cfg.text_entity, value: e.target.value });
    });
    this._root.querySelectorAll(".shc-am-dev-chip").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        const current = (this._hass?.states?.[cfg.devices_entity]?.state || "")
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s && s !== "unknown" && s !== "unavailable");
        const id = chip.dataset.device;
        const next = current.includes(id) ? current.filter((x) => x !== id) : current.concat([id]);
        call("input_text", "set_value", { entity_id: cfg.devices_entity, value: next.join(",") });
      });
    });
    this._root.querySelector(".shc-am-date-start").addEventListener("change", (e) => {
      if (e.target.value) call("input_datetime", "set_datetime", { entity_id: cfg.date_start_entity, date: e.target.value });
    });
    this._root.querySelector(".shc-am-date-end").addEventListener("change", (e) => {
      if (e.target.value) call("input_datetime", "set_datetime", { entity_id: cfg.date_end_entity, date: e.target.value });
    });
    this._root.querySelector(".shc-am-time").addEventListener("change", (e) => {
      if (e.target.value) call("input_datetime", "set_datetime", { entity_id: cfg.time_entity, time: e.target.value + ":00" });
    });
    this._root.querySelector(".shc-am-once").addEventListener("change", (e) => {
      if (e.target.value) call("input_datetime", "set_datetime", { entity_id: cfg.once_datetime_entity, datetime: e.target.value.replace("T", " ") + ":00" });
    });
    this._root.querySelector(".shc-am-person").addEventListener("change", (e) => {
      call("input_text", "set_value", { entity_id: cfg.person_entity, value: e.target.value });
    });
    const retryEl = this._root.querySelector(".shc-am-retry");
    const retryValEl = this._root.querySelector(".shc-am-retry-val");
    retryEl.addEventListener("input", () => {
      retryValEl.textContent = retryEl.value + " min";
    });
    retryEl.addEventListener("change", () => {
      call("input_number", "set_value", { entity_id: cfg.retry_delay_entity, value: Number(retryEl.value) });
    });
    if (cfg.slot_count_entity) {
      const step = (delta) => {
        const cur = Number(this._hass?.states?.[cfg.slot_count_entity]?.state ?? 1);
        const next = Math.max(1, Math.min(4, Math.round(cur) + delta));
        call("input_number", "set_value", { entity_id: cfg.slot_count_entity, value: next });
      };
      this._root.querySelector(".shc-am-slots-minus").addEventListener("click", (e) => {
        e.stopPropagation();
        step(-1);
      });
      this._root.querySelector(".shc-am-slots-plus").addEventListener("click", (e) => {
        e.stopPropagation();
        step(1);
      });
    }

    if (this._hass) this.hass = this._hass;
  }

  set hass(hass) {
    this._hass = hass;
    const cfg = this._config;
    if (!cfg || !this._root) return;
    if (ShcAlexaMemoCard.REQUIRED_FIELDS.some(([key]) => !cfg[key])) return;
    shcRefreshAutoNames(this._root, hass);

    const activeOn = hass.states[cfg.active_entity]?.state === "on";
    const repeatOn = hass.states[cfg.repeat_entity]?.state === "on";
    const pendingOn = hass.states[cfg.pending_entity]?.state === "on";
    const personId = hass.states[cfg.person_entity]?.state || "";
    const personValid = personId && personId !== "unknown" && personId !== "unavailable";

    const badge = this._root.querySelector(".shc-ap-badge");
    const badgeLabel = this._root.querySelector(".shc-ap-badge-label");
    badge.className = "shc-ap-badge " + (pendingOn ? "pending" : activeOn ? "run" : "off");
    badgeLabel.textContent = pendingOn ? "IN SOSPESO" : activeOn ? "ON" : "OFF";

    const activeBtn = this._root.querySelector(".shc-am-active");
    activeBtn.classList.toggle("on", activeOn);
    const repeatBtn = this._root.querySelector(".shc-am-repeat");
    repeatBtn.classList.toggle("on", repeatOn);

    this._root.querySelector(".shc-am-repeat-block").hidden = !repeatOn;
    this._root.querySelector(".shc-am-once-block").hidden = repeatOn;

    const textEl = this._root.querySelector(".shc-am-text");
    if (textEl && this._root.activeElement !== textEl) {
      textEl.value = hass.states[cfg.text_entity]?.state || "";
    }

    const selectedDevices = (hass.states[cfg.devices_entity]?.state || "")
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s && s !== "unknown" && s !== "unavailable");
    this._root.querySelectorAll(".shc-am-dev-chip").forEach((chip) => {
      chip.classList.toggle("on", selectedDevices.includes(chip.dataset.device));
    });

    const setDateField = (cls, entity) => {
      const el = this._root.querySelector("." + cls);
      const st = hass.states[entity];
      if (!el || !st || this._root.activeElement === el) return;
      el.value = ["unknown", "unavailable"].includes(st.state) ? "" : st.state;
    };
    setDateField("shc-am-date-start", cfg.date_start_entity);
    setDateField("shc-am-date-end", cfg.date_end_entity);

    const timeEl = this._root.querySelector(".shc-am-time");
    const timeSt = hass.states[cfg.time_entity];
    if (timeEl && timeSt && this._root.activeElement !== timeEl) {
      timeEl.value = (timeSt.state || "").slice(0, 5);
    }

    const onceEl = this._root.querySelector(".shc-am-once");
    const onceSt = hass.states[cfg.once_datetime_entity];
    if (onceEl && onceSt && this._root.activeElement !== onceEl) {
      onceEl.value = ["unknown", "unavailable"].includes(onceSt.state) ? "" : onceSt.state.slice(0, 16).replace(" ", "T");
    }

    const personEl = this._root.querySelector(".shc-am-person");
    if (personEl && this._root.activeElement !== personEl) {
      const persons = Object.values(hass.states)
        .filter((s) => s.entity_id.startsWith("person."))
        .sort((a, b) => (a.attributes?.friendly_name || a.entity_id).localeCompare(b.attributes?.friendly_name || b.entity_id));
      const opts = [`<option value=""${!personValid ? " selected" : ""}>Nessuna – annuncia sempre</option>`]
        .concat(
          persons.map(
            (s) =>
              `<option value="${esc(s.entity_id)}"${s.entity_id === personId ? " selected" : ""}>${esc(s.attributes?.friendly_name || s.entity_id)}</option>`,
          ),
        )
        .join("");
      personEl.innerHTML = opts;
    }

    const retryEl = this._root.querySelector(".shc-am-retry");
    const retryValEl = this._root.querySelector(".shc-am-retry-val");
    const retrySt = hass.states[cfg.retry_delay_entity];
    if (retryEl && retrySt && this._root.activeElement !== retryEl) {
      retryEl.value = retrySt.state;
      retryValEl.textContent = Math.round(Number(retrySt.state)) + " min";
    }

    if (cfg.slot_count_entity) {
      const slotsValEl = this._root.querySelector(".shc-am-slots-val");
      if (slotsValEl) {
        const n = Math.round(Number(hass.states[cfg.slot_count_entity]?.state ?? 1));
        slotsValEl.textContent = `${n} di 4`;
      }
    }

    const statusEl = this._root.querySelector(".shc-am-status");
    if (statusEl) {
      let text = "";
      let warn = false;
      if (!activeOn) {
        text = "Disattivato.";
      } else if (pendingOn) {
        const personName = personValid ? hass.states[personId]?.attributes?.friendly_name || personId : "";
        text = personName ? `⏳ In sospeso — annuncerà al rientro di ${personName}.` : "⏳ In sospeso.";
        warn = true;
      } else if (repeatOn) {
        const start = hass.states[cfg.date_start_entity]?.state || "—";
        const end = hass.states[cfg.date_end_entity]?.state || "—";
        const time = (hass.states[cfg.time_entity]?.state || "").slice(0, 5) || "—";
        text = `Ogni giorno alle ${time}, dal ${start} al ${end}.`;
      } else {
        const raw = hass.states[cfg.once_datetime_entity]?.state || "";
        text = raw && !["unknown", "unavailable"].includes(raw) ? `Una tantum: ${raw.slice(0, 16).replace("T", " ")}.` : "Nessuna data impostata.";
      }
      statusEl.textContent = text;
      statusEl.classList.toggle("warn", warn);
    }
  }

  getCardSize() {
    return 6;
  }

  static getConfigElement() {
    return document.createElement("shc-alexa-memo-card-editor");
  }

  static getStubConfig(hass) {
    return {
      name: "Memo",
    };
  }
}
customElements.define("shc-alexa-memo-card", ShcAlexaMemoCard);
window.customCards.push({
  type: "shc-alexa-memo-card",
  name: "Alexa Memo",
  description: "Promemoria vocale programmato su Alexa, con ripetizione opzionale e riprova automatica al rientro in casa",
  author: "Simonz82",
});

class ShcAlexaWebradioCard extends HTMLElement {
  static get REQUIRED_FIELDS() {
    return [
      ["power_entity", "Radio ON/OFF"],
      ["station_select_entity", "Selettore stazione"],
      ["station_sensor_entity", "Sensore stazione"],
      ["volume_entity", "Volume"],
      ["group_entity", "Gruppo multiroom"],
    ];
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

  _call(domain, service, data) {
    return this._hass?.callService(domain, service, data);
  }

  _openInfo() {
    this._openDialog(
      "Come funziona",
      `<div class="shc-am-info-body">
        <p>Accende la web radio Alexa sugli speaker selezionati, con la stazione o playlist scelta qui sotto.</p>
        <p>Gli speaker si aggiungono/rimuovono dal gruppo multiroom toccando i loro chip: quello evidenziato in blu è già acceso.</p>
        <p>La <b>Sveglia</b> (icona orologio) accende/spegne automaticamente la radio a due orari, nei giorni scelti. Il <b>Volume ridotto</b> (icona restart) abbassa il volume da solo quando la radio si spegne.</p>
      </div>`,
    );
  }

  _openAlarmDialog() {
    const hass = this._hass;
    const cfg = this._config;
    const onEntity = cfg.alarm_on_entity;
    const offEntity = cfg.alarm_off_entity;
    const daysHtml = shcConfigList(cfg.alarm_days, WR_DEFAULT_ALARM_DAYS)
      .map(
        (d) =>
          `<button type="button" class="shc-am-dev-chip shc-wr-day" data-entity="${esc(d.entity)}">${esc(d.name || shcEntityName(hass, d.entity))}</button>`,
      )
      .join("");
    const overlay = this._openDialog(
      "Sveglia Radio",
      `<div class="shc-ap-row">
        <span class="shc-ap-row-label">Sveglia attiva</span>
        <button type="button" class="shc-ap-switch shc-wr-alarm-active"></button>
      </div>
      <div>
        <div class="shc-ap-sec-cap">Orario</div>
        <div style="display:flex;gap:10px;">
          <div style="flex:1;">
            <div class="shc-wr-meter-row" style="margin-bottom:4px;"><span>Accensione</span></div>
            <input type="time" class="shc-ed-input shc-wr-alarm-on">
          </div>
          <div style="flex:1;">
            <div class="shc-wr-meter-row" style="margin-bottom:4px;"><span>Spegnimento</span></div>
            <input type="time" class="shc-ed-input shc-wr-alarm-off">
          </div>
        </div>
      </div>
      <div>
        <div class="shc-ap-sec-cap">Giorni</div>
        <div class="shc-am-chips">${daysHtml}</div>
      </div>`,
    );

    const activeBtn = overlay.querySelector(".shc-wr-alarm-active");
    const setActive = () => activeBtn.classList.toggle("on", hass.states[cfg.alarm_entity]?.state === "on");
    setActive();
    activeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this._call("input_boolean", "toggle", { entity_id: cfg.alarm_entity });
      setTimeout(setActive, 200);
    });

    const onInput = overlay.querySelector(".shc-wr-alarm-on");
    const offInput = overlay.querySelector(".shc-wr-alarm-off");
    onInput.value = (hass.states[onEntity]?.state || "00:00:00").slice(0, 5);
    offInput.value = (hass.states[offEntity]?.state || "00:00:00").slice(0, 5);
    onInput.addEventListener("change", (e) => {
      if (e.target.value) this._call("input_datetime", "set_datetime", { entity_id: onEntity, time: e.target.value + ":00" });
    });
    offInput.addEventListener("change", (e) => {
      if (e.target.value) this._call("input_datetime", "set_datetime", { entity_id: offEntity, time: e.target.value + ":00" });
    });

    overlay.querySelectorAll(".shc-wr-day").forEach((chip) => {
      const entity = chip.dataset.entity;
      chip.classList.toggle("on", hass.states[entity]?.state === "on");
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        this._call("input_boolean", "toggle", { entity_id: entity });
        setTimeout(() => chip.classList.toggle("on", hass.states[entity]?.state === "on"), 200);
      });
    });
  }

  _openVolumeOffDialog() {
    const hass = this._hass;
    const cfg = this._config;
    const overlay = this._openDialog(
      "Volume Ridotto Automatico",
      `<div class="shc-ap-row">
        <span class="shc-ap-row-label">Attivo allo spegnimento</span>
        <button type="button" class="shc-ap-switch shc-wr-vo-active"></button>
      </div>
      <div>
        <div class="shc-wr-meter-row"><span>Volume dopo lo spegnimento</span><strong class="shc-wr-vo-val">—</strong></div>
        <input type="range" class="shc-notif-range shc-wr-vo-range" min="0" max="1" step="0.05">
      </div>`,
    );
    const activeBtn = overlay.querySelector(".shc-wr-vo-active");
    const isOn = () => hass.states[cfg.volume_off_automation]?.state === "on";
    activeBtn.classList.toggle("on", isOn());
    activeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this._call("automation", isOn() ? "turn_off" : "turn_on", { entity_id: cfg.volume_off_automation });
      setTimeout(() => activeBtn.classList.toggle("on", isOn()), 200);
    });
    const range = overlay.querySelector(".shc-wr-vo-range");
    const val = overlay.querySelector(".shc-wr-vo-val");
    const cur = Number(hass.states[cfg.volume_off_entity]?.state ?? 0);
    range.value = cur;
    val.textContent = Math.round(cur * 100) + "%";
    range.addEventListener("input", () => {
      val.textContent = Math.round(Number(range.value) * 100) + "%";
    });
    range.addEventListener("change", () => {
      this._call("input_number", "set_value", { entity_id: cfg.volume_off_entity, value: Number(range.value) });
    });
  }

  setConfig(config) {
    this._config = { name: "Radio Alexa", ...config };
    this._root = this._root || this.attachShadow({ mode: "open" });
    const missing = ShcAlexaWebradioCard.REQUIRED_FIELDS.filter(([key]) => !this._config[key]);
    if (missing.length) {
      this._root.innerHTML = `<style>${STYLE}</style>
        <article class="shc-ap-card">
          <div class="shc-ap-top">
            <span class="shc-ap-chip">${ICON_RADIO}</span>
            <span class="shc-ap-headings"><span class="shc-ap-name">${esc(this._config.name)}</span></span>
          </div>
          <div class="shc-ap-panel">
            <div class="shc-ap-meters">
              <div class="shc-ap-row-val">⚠️ Manca la configurazione di: ${missing.map(([, label]) => esc(label)).join(", ")}.</div>
            </div>
          </div>
        </article>`;
      return;
    }
    const cfg = this._config;

    // Stazioni raggruppate per "group" nell'ordine in cui compaiono la prima volta.
    const imagePath = cfg.image_path || WR_DEFAULT_IMAGE_PATH;
    const imageSrc = (img) => (!img ? "" : /^(\/|https?:)/.test(img) ? img : imagePath.replace(/\/?$/, "/") + img);
    const groups = [];
    shcConfigList(cfg.stations, WR_DEFAULT_STATIONS, "option").forEach((st) => {
      const cap = st.group || "";
      let g = groups.find((x) => x.cap === cap);
      if (!g) groups.push((g = { cap, items: [] }));
      g.items.push(st);
    });
    const groupsHtml = groups
      .map(
        (g) => `<div>
        ${g.cap ? `<div class="shc-ap-sec-cap">${esc(g.cap)}</div>` : ""}
        <div class="shc-wr-station-grid">
          ${g.items
            .map(
              (st) =>
                `<button type="button" class="shc-wr-station" data-option="${esc(st.option)}">
                  ${st.image ? `<img src="${esc(imageSrc(st.image))}" alt="">` : ""}
                  <span>${esc(st.name || st.option)}</span>
                </button>`,
            )
            .join("")}
        </div>
      </div>`,
      )
      .join("");

    this._speakers = shcConfigList(cfg.speakers, WR_DEFAULT_SPEAKERS);
    const chipsHtml = this._speakers
      .map(
        (sp) =>
          `<button type="button" class="shc-am-dev-chip shc-wr-speaker" data-entity="${esc(sp.entity)}"${sp.name ? "" : ` data-autoname="${esc(sp.entity)}"`}>${esc(sp.name || shcEntityName(this._hass, sp.entity))}</button>`,
      )
      .join("");

    this._root.innerHTML = `<style>${STYLE}</style>
      <article class="shc-ap-card">
        <div class="shc-ap-top">
          <span class="shc-ap-chip">${ICON_RADIO}</span>
          <span class="shc-ap-headings"><span class="shc-ap-name">${esc(cfg.name)}</span></span>
          <span class="shc-ap-badge off"><i class="shc-ap-dot"></i><span class="shc-wr-badge-label">OFF</span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-wr-alarm-tool" title="Sveglia">${ICON_TIMER}</button>
            <button type="button" class="shc-ap-tool shc-wr-volumeoff-tool" title="Volume ridotto">${ICON_RESTART}</button>
            <button type="button" class="shc-ap-tool shc-wr-info" title="Come funziona">${ICON_INFO}</button>
          </span>
        </div>
        <div class="shc-ap-panel">
         <div class="shc-ap-meters">
          <div class="shc-wr-now">
            <img class="shc-wr-now-img" src="" alt="">
            <div class="shc-wr-now-info">
              <div class="shc-wr-now-name">—</div>
              <span class="shc-wr-now-tag">—</span>
            </div>
          </div>

          <div class="shc-ap-row">
            <span class="shc-ap-row-label">Radio</span>
            <button type="button" class="shc-ap-switch shc-wr-power"></button>
          </div>

          <div>
            <div class="shc-wr-meter-row"><span>Volume</span><strong class="shc-wr-volume-val">—</strong></div>
            <input type="range" class="shc-notif-range shc-wr-volume" min="0" max="1" step="0.05">
          </div>

          <div>
            <div class="shc-ap-sec-cap">Speaker multiroom</div>
            <div class="shc-am-chips">${chipsHtml}</div>
          </div>

          ${groupsHtml}
         </div>
        </div>
      </article>`;

    this._root.querySelector(".shc-wr-info").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openInfo();
    });
    this._root.querySelector(".shc-wr-alarm-tool").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openAlarmDialog();
    });
    this._root.querySelector(".shc-wr-volumeoff-tool").addEventListener("click", (e) => {
      e.stopPropagation();
      this._openVolumeOffDialog();
    });
    this._root.querySelector(".shc-wr-power").addEventListener("click", (e) => {
      e.stopPropagation();
      this._call("input_boolean", "toggle", { entity_id: cfg.power_entity });
    });

    const volEl = this._root.querySelector(".shc-wr-volume");
    const volValEl = this._root.querySelector(".shc-wr-volume-val");
    volEl.addEventListener("input", () => {
      volValEl.textContent = Math.round(Number(volEl.value) * 100) + "%";
    });
    volEl.addEventListener("change", () => {
      this._call("input_number", "set_value", { entity_id: cfg.volume_entity, value: Number(volEl.value) });
    });

    this._root.querySelectorAll(".shc-wr-speaker").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        const entityId = chip.dataset.entity;
        const speaker = this._speakers.find((sp) => sp.entity === entityId);
        if (!speaker) return;
        const option = speaker.option || shcEntityName(this._hass, entityId);
        const current = this._hass?.states?.[cfg.group_entity]?.attributes?.entity_id || [];
        const alreadyIn = current.includes(entityId);
        this._call("input_select", "select_option", { entity_id: cfg.speaker_list_entity, option });
        const script = alreadyIn ? cfg.remove_script || "script.remove_alexa" : cfg.add_script || "script.add_alexa";
        setTimeout(() => {
          this._call("script", "turn_on", { entity_id: script });
        }, 200);
      });
    });

    this._root.querySelectorAll(".shc-wr-station").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._call("input_select", "select_option", { entity_id: cfg.station_select_entity, option: btn.dataset.option });
      });
    });

    if (this._hass) this.hass = this._hass;
  }

  set hass(hass) {
    this._hass = hass;
    const cfg = this._config;
    if (!cfg || !this._root) return;
    if (ShcAlexaWebradioCard.REQUIRED_FIELDS.some(([key]) => !cfg[key])) return;
    shcRefreshAutoNames(this._root, hass);

    const powerOn = hass.states[cfg.power_entity]?.state === "on";
    const badge = this._root.querySelector(".shc-ap-badge");
    const badgeLabel = this._root.querySelector(".shc-wr-badge-label");
    badge.className = "shc-ap-badge " + (powerOn ? "run" : "off");
    badgeLabel.textContent = powerOn ? "ON" : "OFF";
    this._root.querySelector(".shc-wr-power").classList.toggle("on", powerOn);

    const sensor = hass.states[cfg.station_sensor_entity];
    const nowImg = this._root.querySelector(".shc-wr-now-img");
    const nowName = this._root.querySelector(".shc-wr-now-name");
    const nowTag = this._root.querySelector(".shc-wr-now-tag");
    if (sensor) {
      nowImg.src = sensor.attributes?.entity_picture || "";
      nowName.textContent = sensor.attributes?.select || sensor.state || "—";
      nowTag.textContent = sensor.attributes?.servizi || "—";
    }

    const currentOption = hass.states[cfg.station_select_entity]?.state;
    this._root.querySelectorAll(".shc-wr-station").forEach((btn) => {
      btn.classList.toggle("on", btn.dataset.option === currentOption);
    });

    const volEl = this._root.querySelector(".shc-wr-volume");
    const volValEl = this._root.querySelector(".shc-wr-volume-val");
    const volSt = hass.states[cfg.volume_entity];
    if (volEl && volSt && this._root.activeElement !== volEl) {
      volEl.value = volSt.state;
      volValEl.textContent = Math.round(Number(volSt.state) * 100) + "%";
    }

    const groupMembers = hass.states[cfg.group_entity]?.attributes?.entity_id || [];
    this._root.querySelectorAll(".shc-wr-speaker").forEach((chip) => {
      chip.classList.toggle("on", groupMembers.includes(chip.dataset.entity));
    });
  }

  getCardSize() {
    return 9;
  }

  static getConfigElement() {
    return document.createElement("shc-alexa-webradio-card-editor");
  }

  static getStubConfig() {
    return {
      name: "Radio Alexa",
      power_entity: "input_boolean.web_radio_alexa",
      station_select_entity: "input_select.stazioni_radio_alexa",
      station_sensor_entity: "sensor.template_radio_alexa",
      volume_entity: "input_number.volume_radio_alexa",
      volume_off_entity: "input_number.volume_radio_off_alexa",
      volume_off_automation: "automation.radio_off_volume_alexa",
      group_entity: "group.multiroom_alexa",
      speaker_list_entity: "input_select.list_alexa_speaker_multiroom",
      add_script: "script.add_alexa",
      remove_script: "script.remove_alexa",
      alarm_entity: "input_boolean.sveglia_alexa",
      alarm_on_entity: "input_datetime.ora_sveglia_alexa_on",
      alarm_off_entity: "input_datetime.ora_sveglia_alexa_off",
    };
  }
}
customElements.define("shc-alexa-webradio-card", ShcAlexaWebradioCard);
window.customCards.push({
  type: "shc-alexa-webradio-card",
  name: "Alexa WebRadio",
  description: "Web radio e playlist su Alexa multiroom, con sveglia programmata e volume ridotto automatico",
  author: "Simonz82",
});

// -----------------------------------------------------------------------
// shc-zigbee-card: rete Zigbee (Zigbee2MQTT). Stessa grammatica visiva della
// card FritzBox: simbolo Zigbee animato, segnale e alimentazione a destra,
// barre online/segnale, popup Abbinamenti (ingranaggio), Dispositivi,
// Grafici, Segnale e batterie, Notifiche (campanella).
// Dati dal package centro_controllo_zigbee.yaml (sensor.zigbee_dispositivi_offline
// con l'elenco dei dispositivi negli attributi).
// -----------------------------------------------------------------------

const ZB_STYLE = `
.shc-zb-chip ha-icon{--mdc-icon-size:25px;color:#16a34a}
.shc-ap-card.has-alarm .shc-zb-chip ha-icon{color:#ef4444}
.shc-zb-hero{position:relative;width:100%;height:100%;display:grid;place-items:center}
.shc-zb-hero ha-icon{position:relative;z-index:1;--mdc-icon-size:96px;color:#22c55e;filter:drop-shadow(0 0 10px rgba(34,197,94,.45));animation:shc-zb-spin 9s linear infinite}
.shc-zb-wave{position:absolute;left:50%;top:50%;width:96px;height:96px;margin:-48px 0 0 -48px;border-radius:50%;border:3px solid #22c55e;opacity:0;animation:shc-zb-wave 2.7s ease-out infinite}
.shc-zb-wave:nth-child(2){animation-delay:.9s}
.shc-zb-wave:nth-child(3){animation-delay:1.8s}
.shc-ap-card.has-alarm .shc-zb-hero ha-icon{color:#ef4444;filter:drop-shadow(0 0 10px rgba(239,68,68,.55));animation:shc-zb-shake .6s ease-in-out infinite,shc-zb-blink 1.1s ease infinite}
.shc-ap-card.has-alarm .shc-zb-wave{border-color:#ef4444;animation-duration:1.3s}
.shc-ap-card.has-alarm .shc-zb-wave:nth-child(2){animation-delay:.43s}
.shc-ap-card.has-alarm .shc-zb-wave:nth-child(3){animation-delay:.86s}
.shc-ap-card.is-unavailable .shc-zb-hero ha-icon{color:#94a3b8;filter:none;animation:none}
.shc-ap-card.is-unavailable .shc-zb-wave{display:none}
@keyframes shc-zb-wave{0%{transform:scale(.6);opacity:.9}100%{transform:scale(2.3);opacity:0}}
@keyframes shc-zb-spin{to{transform:rotate(360deg)}}
@keyframes shc-zb-shake{0%,100%{transform:translateX(0) rotate(0)}20%{transform:translateX(-3px) rotate(-8deg)}40%{transform:translateX(3px) rotate(8deg)}60%{transform:translateX(-3px) rotate(-5deg)}80%{transform:translateX(3px) rotate(5deg)}}
@keyframes shc-zb-blink{0%,100%{opacity:1}50%{opacity:.4}}
.shc-zb-low[hidden]{display:none}
.shc-zb-low b{color:#ef4444;font-weight:800}
.shc-zb-filters{display:flex;flex-wrap:wrap;gap:6px}
.shc-zb-filter{display:inline-flex;align-items:center;gap:5px;padding:7px 11px;border-radius:999px;border:1px solid var(--shc-border);background:var(--shc-card);color:var(--shc-dim);font:inherit;font-size:12.5px;font-weight:800;cursor:pointer}
.shc-zb-filter b{color:var(--shc-text)}
.shc-zb-filter.on{background:var(--shc-blue);border-color:var(--shc-blue);color:#fff}
.shc-zb-filter.on b{color:#fff}
.shc-zb-filter.alarm:not(.on){border-color:#ef4444;color:#ef4444}
.shc-zb-search{width:100%;box-sizing:border-box;padding:9px 12px;border-radius:12px;border:1px solid var(--shc-border);background:var(--shc-soft);color:var(--shc-text);font:inherit;font-size:14px}
.shc-zb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:7px}
.shc-zb-item{display:flex;align-items:center;gap:9px;padding:8px 9px;border-radius:13px;background:var(--shc-soft);border:1px solid transparent;cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%}
.shc-zb-item.off{border-color:rgba(239,68,68,.55);background:rgba(239,68,68,.08)}
.shc-zb-item.escl{opacity:.6}
.shc-zb-foto{position:relative;flex:0 0 40px;width:40px;height:40px;display:grid;place-items:center}
.shc-zb-foto img{max-width:40px;max-height:40px}
.shc-zb-item.off .shc-zb-foto img,.shc-zb-item.escl .shc-zb-foto img{filter:grayscale(1);opacity:.5}
.shc-zb-dot{position:absolute;right:-2px;top:-2px;width:9px;height:9px;border-radius:50%;background:#22c55e;box-shadow:0 0 5px #22c55e}
.shc-zb-dot.off{background:#ef4444;box-shadow:0 0 5px #ef4444;animation:shc-zb-blink .8s ease infinite}
.shc-zb-dot.escl{background:#94a3b8;box-shadow:none}
.shc-zb-txt{min-width:0;flex:1;display:flex;flex-direction:column;gap:2px}
.shc-zb-nome{font-size:13px;font-weight:800;color:var(--shc-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.shc-zb-riga{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:800;color:var(--shc-dim)}
.shc-zb-st{color:#16a34a}
.shc-zb-st.off{color:#ef4444}
.shc-zb-st.escl{color:#94a3b8}
.shc-zb-tacche{display:inline-flex;align-items:flex-end;gap:1px;height:13px}
.shc-zb-tacche i{display:block;width:3px;border-radius:1px}
.shc-zb-info{display:flex;align-items:center;gap:4px;font-size:10.5px;font-weight:700;color:var(--shc-dim);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.shc-zb-info svg{width:11px;height:11px;flex:0 0 auto}
.shc-zb-da{font-size:10.5px;font-weight:800;color:#ef4444}
.shc-zb-empty{padding:16px;text-align:center;font-size:13px;font-weight:700;color:var(--shc-dim)}
.shc-zb-detail-head{display:flex;align-items:center;gap:12px}
.shc-zb-detail-head img{width:64px;height:64px;object-fit:contain}
.shc-zb-detail-head b{display:block;font-size:16px;font-weight:900;color:var(--shc-text)}
.shc-zb-detail-head small{font-size:12px;font-weight:700;color:var(--shc-dim)}
.shc-zb-rank{display:flex;flex-direction:column;gap:3px;padding:8px 11px;border-radius:13px;background:var(--shc-soft)}
.shc-zb-rank-top{display:flex;justify-content:space-between;gap:10px;font-size:13.5px;font-weight:750;color:var(--shc-text)}
.shc-zb-rank-top span:last-child{font-weight:900;white-space:nowrap}
.shc-zb-rank .shc-ap-bar{margin-top:3px;height:6px}
.shc-zb-tags{display:flex;flex-wrap:wrap;gap:6px}
.shc-zb-tag{display:inline-flex;align-items:center;gap:5px;padding:6px 10px;border-radius:999px;background:var(--shc-card);border:1px solid var(--shc-border);font-size:12.5px;font-weight:750;color:var(--shc-text)}
.shc-zb-tag button{border:0;background:none;color:var(--shc-dim);font-size:15px;line-height:1;cursor:pointer;padding:0 0 0 2px}
.shc-zb-stepper{display:flex;align-items:center;gap:8px}
.shc-zb-stepper span{min-width:58px;text-align:center;font-size:14px;font-weight:850;color:var(--shc-text)}
.shc-zb-note{font-size:12px;line-height:1.45;color:var(--shc-dim);margin:0}
.shc-zb-pair{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 12px;border-radius:16px;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.45)}
.shc-zb-pair small{font-size:12px;font-weight:800;color:var(--shc-dim);text-transform:uppercase;letter-spacing:.06em}
.shc-zb-cd{font-size:38px;font-weight:900;color:#16a34a;font-variant-numeric:tabular-nums;line-height:1}
.shc-zb-pair .shc-ap-bar{width:100%;height:6px}
.shc-zb-pair .shc-ap-bar i{background:#22c55e;transition:width 1s linear}
.shc-zb-pair-via{font-size:13px;font-weight:750;color:var(--shc-text);text-align:center}
.shc-zb-pair-btns{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap}
.shc-zb-stop{background:#ef4444 !important}
.shc-zb-history{display:flex;flex-direction:column;gap:5px}
.shc-zb-history div{padding:8px 11px;border-radius:12px;background:var(--shc-soft);font-size:13px;font-weight:650;color:var(--shc-text)}
.shc-zb-history small{display:block;font-size:11px;font-weight:800;color:var(--shc-dim)}
`;

const ZB_DEFAULT_NOTIFY = {
  enabled: "input_boolean.zigbee_avvisi",
  battery_enabled: "input_boolean.zigbee_avviso_batteria",
  offline_minutes: "input_number.zigbee_minuti_offline",
  battery_threshold: "input_number.zigbee_soglia_batteria",
  from: "input_datetime.zigbee_avvisi_dalle",
  to: "input_datetime.zigbee_avvisi_alle",
  notified: "input_text.zigbee_avvisati",
  battery_notified: "input_text.zigbee_batterie_avvisate",
  pending: "input_text.zigbee_nuovi_attesa",
  test_script: "script.zigbee_test_notifica",
};

const ZB_DEFAULT_GRAPH = {
  online: "sensor.zigbee_dispositivi_online",
  lqi_avg: "sensor.zigbee_segnale_medio",
  lqi_min: "sensor.zigbee_segnale_minimo",
};

// LQI: 0 = rosso, da 200 in su = verde pieno (come la card originale "Rete Zigbee")
function zbLqiColor(q) {
  return `hsl(${Math.round((Math.min(Math.max(q, 0), 200) / 200) * 120)}, 85%, 45%)`;
}

function zbTacche(q) {
  return q >= 200 ? 4 : q >= 130 ? 3 : q >= 70 ? 2 : q > 0 ? 1 : 0;
}

function zbDurata(iso) {
  const t = Date.parse(iso);
  if (!t) return "";
  const m = Math.max(0, Math.round((Date.now() - t) / 60000));
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} h ${m % 60} min`;
  return `${Math.floor(h / 24)} g ${h % 24} h`;
}

function zbJsonList(st) {
  try {
    const v = JSON.parse(st?.state || "[]");
    return Array.isArray(v) ? v : [];
  } catch (e) {
    return [];
  }
}

class ShcZigbeeCard extends HTMLElement {
  setConfig(config) {
    if (!config.entity) throw new Error("entity è obbligatorio (sensor.zigbee_dispositivi_offline del package)");
    this._config = {
      name: "Rete Zigbee",
      permit_join_entity: "switch.zigbee2mqtt_bridge_permit_join",
      restart_entity: "button.zigbee2mqtt_bridge_restart",
      version_entity: "sensor.zigbee2mqtt_bridge_version",
      log_level_entity: "select.zigbee2mqtt_bridge_log_level",
      history_entity: "input_text.zigbee_ultimi_abbinati",
      pairing_end_entity: "sensor.zigbee_abbinamento_fine",
      base_topic: "zigbee2mqtt",
      excluded_entity: "input_text.zigbee_esclusi",
      image_path: "/local/zigbee_img/",
      ...config,
      notify: { ...ZB_DEFAULT_NOTIFY, ...(config.notify || {}) },
      graph: { ...ZB_DEFAULT_GRAPH, ...(config.graph || {}) },
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._filter = "all";
    this._search = "";
    this._root.innerHTML = `<style>${STYLE}${ZB_STYLE}</style>
      <article class="shc-ap-card">
        <div class="shc-ap-top">
          <span class="shc-ap-chip shc-zb-chip"><ha-icon icon="mdi:zigbee"></ha-icon></span>
          <span class="shc-ap-headings">
            <span class="shc-ap-name"></span>
          </span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Abbinamenti">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Dispositivi">${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-zb-signal" title="Segnale e batterie">${ICON_BATTERY}</button>
            <button type="button" class="shc-ap-tool shc-ap-update" title="Notifiche">${ICON_BELL}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-ap-hero"><div class="shc-zb-hero"><span class="shc-zb-wave"></span><span class="shc-zb-wave"></span><span class="shc-zb-wave"></span><ha-icon icon="mdi:zigbee"></ha-icon></div></div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Rete</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_ALERT}</span><small>LQI min</small></span><b class="shc-zb-min">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_PLUG}</span><small>A rete</small></span><b class="shc-zb-mains">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BATTERY}</span><small>A batteria</small></span><b class="shc-zb-batt">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b shc-zb-low" hidden><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic" style="color:#ef4444">${ICON_BATTERY}</span><small>Batt. bassa</small></span><b class="shc-zb-lowval">—</b></div>
            </div>
          </div>
        </div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter shc-c-meter-clickable" data-graph="0">
              <div class="shc-ap-meter-row"><span>Dispositivi online</span><strong class="shc-zb-online-val">—</strong></div>
              <div class="shc-ap-bar"><i class="shc-zb-online-bar" style="width:0%"></i></div>
            </div>
            <div class="shc-ap-meter shc-c-meter-clickable" data-graph="1">
              <div class="shc-ap-meter-row"><span>Segnale medio</span><strong class="shc-zb-lqi-val">—</strong></div>
              <div class="shc-ap-bar"><i class="shc-zb-lqi-bar" style="width:0%"></i></div>
            </div>
          </div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);
    this._root.querySelectorAll(".shc-c-meter-clickable").forEach((m) => {
      m.addEventListener("click", (e) => {
        e.stopPropagation();
        shcOpenChartPopup(this, { title: this._config.name, series: this._graphSeries(), active: Number(m.dataset.graph) });
      });
    });
    const bind = (sel, fn) =>
      this._root.querySelector(sel).addEventListener("click", (e) => {
        e.stopPropagation();
        fn();
      });
    bind(".shc-ap-settings", () => this._openPairing());
    bind(".shc-ap-stats", () => this._openDevices());
    bind(".shc-ap-hero", () => this._openDevices());
    bind(".shc-zb-signal", () => this._openSignal());
    bind(".shc-ap-update", () => this._openNotify());
    bind(".shc-ap-warn", () => {
      this._filter = "off";
      this._openDevices();
    });
  }

  // --- dati ---------------------------------------------------------------

  _data() {
    const st = this._hass?.states[this._config.entity];
    const a = st?.attributes || {};
    const list = Array.isArray(a.dispositivi) ? a.dispositivi : [];
    const excluded = Array.isArray(a.esclusi) ? a.esclusi : [];
    const soglia = Number(a.soglia_batteria) || 15;
    const stato = (d) => (excluded.includes(d.n) ? "escl" : d.on ? "on" : "off");
    // prima gli offline, poi in ordine di nome
    const ordine = { off: 0, on: 1, escl: 1 };
    const devices = [...list].sort(
      (x, y) => ordine[stato(x)] - ordine[stato(y)] || String(x.n).localeCompare(String(y.n), "it", { sensitivity: "base", numeric: true }),
    );
    const withLqi = devices.filter((d) => d.on && d.q >= 0);
    const minDev = withLqi.length ? withLqi.reduce((m, d) => (d.q < m.q ? d : m), withLqi[0]) : null;
    return {
      st,
      devices,
      excluded,
      stato,
      soglia,
      total: Number(a.totale) || 0,
      online: Number(a.online) || 0,
      offline: devices.filter((d) => stato(d) === "off"),
      avg: withLqi.length ? Math.round(withLqi.reduce((t, d) => t + d.q, 0) / withLqi.length) : -1,
      minDev,
      mains: devices.filter((d) => d.b === -2),
      battery: devices.filter((d) => d.b !== -2),
      low: devices.filter((d) => d.b >= 0 && d.b < soglia && stato(d) !== "escl"),
    };
  }

  // Fine dell'abbinamento in corso (ms), 0 se chiuso. Dal sensore del package,
  // altrimenti accensione dell'interruttore + 254 s (durata standard di Zigbee2MQTT).
  _pairEnd() {
    const cfg = this._config;
    const pj = this._hass?.states[cfg.permit_join_entity];
    if (pj && pj.state !== "on") return 0;
    const t = Date.parse(this._hass?.states[cfg.pairing_end_entity]?.state || "");
    if (t) return t;
    if (pj?.state === "on") return Date.parse(pj.last_changed) + 254000;
    return 0;
  }

  _cdText(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }

  _img(model) {
    const file = String(model || "").replace(/\//g, "_").replace(/:/g, "-").replace(/ /g, "_") + ".png";
    const local = `${this._config.image_path}${file}`;
    const remote = `https://www.zigbee2mqtt.io/images/devices/${file}`;
    return `<img src="${esc(local)}" data-r="${esc(remote)}" alt="" onerror="if(this.dataset.r){this.src=this.dataset.r;this.dataset.r=''}else{this.style.visibility='hidden'}">`;
  }

  _battHtml(d) {
    if (d.b === -2) return `${ICON_PLUG}<span>a rete</span>`;
    if (d.b < 0) return `${ICON_BATTERY}<span>?</span>`;
    const col = inverseSeverityColor(d.b);
    return `<span style="color:${col};display:inline-flex">${ICON_BATTERY}</span><span style="color:${col}">${d.b}%</span>`;
  }

  // --- card -----------------------------------------------------------------

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;
    const d = this._data();
    const bridge = cfg.bridge_entity ? hass.states[cfg.bridge_entity] : null;
    const bridgeDown = bridge && bridge.state !== "on";
    const mode = !d.st || bridgeDown ? "unavailable" : "running";

    const card = this._root.querySelector(".shc-ap-card");
    card.classList.remove("is-run", "is-standby", "is-off", "is-unavailable", "has-alarm");
    card.classList.add(mode === "running" ? "is-run" : "is-unavailable");
    if (d.offline.length || bridgeDown) card.classList.add("has-alarm");

    const badge = this._root.querySelector(".shc-ap-badge");
    badge.classList.remove("run", "standby", "off", "unavailable");
    badge.classList.add(mode === "running" && !d.offline.length ? "run" : "unavailable");
    const pairEnd = this._pairEnd();
    if (pairEnd > Date.now()) {
      if (!this._badgeTimer) {
        this._badgeTimer = setInterval(() => {
          const left = this._pairEnd() - Date.now();
          if (left <= 0 || !this.isConnected) {
            clearInterval(this._badgeTimer);
            this._badgeTimer = null;
            if (this._hass) this.hass = this._hass;
            return;
          }
          this._root.querySelector(".shc-ap-badge-label").textContent = `ABBINAMENTO ${this._cdText(left)}`;
        }, 1000);
      }
      badge.classList.remove("unavailable");
      badge.classList.add("run");
      this._root.querySelector(".shc-ap-badge-label").textContent = `ABBINAMENTO ${this._cdText(pairEnd - Date.now())}`;
    } else this._root.querySelector(".shc-ap-badge-label").textContent = !d.st
      ? "N/D"
      : bridgeDown
        ? "BRIDGE OFFLINE"
        : d.offline.length
          ? `${d.offline.length} OFFLINE`
          : `${d.online}/${d.total} ONLINE`;

    const q = (sel) => this._root.querySelector(sel);
    q(".shc-zb-min").innerHTML = d.minDev
      ? `<span style="color:${zbLqiColor(d.minDev.q)};font-weight:800">${d.minDev.q}</span> <span style="color:var(--shc-dim)">${esc(d.minDev.n)}</span>`
      : "—";
    q(".shc-zb-min").title = d.minDev ? `${d.minDev.n}: LQI ${d.minDev.q}` : "";
    q(".shc-zb-mains").textContent = String(d.mains.length);
    q(".shc-zb-batt").textContent = String(d.battery.length);
    const lowRow = q(".shc-zb-low");
    lowRow.hidden = !d.low.length;
    q(".shc-zb-lowval").innerHTML = d.low.length ? `<b>${d.low.length}</b> <span style="color:var(--shc-dim)">sotto ${d.soglia}%</span>` : "";

    const pct = d.total ? Math.round((d.online / d.total) * 100) : 0;
    q(".shc-zb-online-val").textContent = d.st ? `${d.online}/${d.total}` : "—";
    const ob = q(".shc-zb-online-bar");
    ob.style.width = `${pct}%`;
    ob.style.background = d.offline.length ? "linear-gradient(90deg,#fb923c,#ef4444)" : "linear-gradient(90deg,#4ade80,#16a34a)";
    q(".shc-zb-lqi-val").textContent = d.avg >= 0 ? `${d.avg} LQI` : "—";
    const lb = q(".shc-zb-lqi-bar");
    lb.style.width = `${d.avg >= 0 ? Math.min(100, Math.round((d.avg / 255) * 100)) : 0}%`;
    lb.style.background = d.avg >= 0 ? zbLqiColor(d.avg) : "";

    const warn = q(".shc-ap-warn");
    if (bridgeDown) {
      warn.hidden = false;
      warn.textContent = "⚠ Zigbee2MQTT non risponde: tutti i dispositivi risultano irraggiungibili";
    } else if (d.offline.length) {
      warn.hidden = false;
      warn.style.cursor = "pointer";
      warn.textContent = `⚠ Offline: ${d.offline.map((x) => (x.da ? `${x.n} (da ${zbDurata(x.da)})` : x.n)).join(", ")}`;
    } else {
      warn.hidden = true;
    }

    // popup aperto: si ridisegna solo quando cambia una delle entita' della card
    const n = cfg.notify || {};
    const key = [cfg.entity, cfg.permit_join_entity, cfg.pairing_end_entity, cfg.history_entity, cfg.bridge_entity, cfg.log_level_entity, ...Object.values(n)]
      .map((e) => (e && hass.states[e] ? hass.states[e].last_updated : ""))
      .join("|");
    if (key !== this._liveKey) {
      this._liveKey = key;
      if (this._live && this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov):not([hidden])")) this._live();
    }
  }

  _graphSeries() {
    const g = this._config.graph || {};
    return [
      { entity: g.online, label: "Dispositivi online", color: "#16a34a" },
      { entity: g.lqi_avg, label: "LQI medio", color: "#0ea5e9" },
      { entity: g.lqi_min, label: "LQI minimo", color: "#f97316" },
    ];
  }

  // --- popup ------------------------------------------------------------------

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml, live) {
    let overlay = this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov)");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.hidden = true;
      });
      this._root.appendChild(overlay);
    }
    const prevBody = overlay.querySelector(".shc-ap-dialog-body");
    const keepScroll = overlay.dataset.title === title && !overlay.hidden ? overlay.querySelector(".shc-ap-dialog")?.scrollTop || 0 : 0;
    overlay.dataset.title = title;
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    if (prevBody && keepScroll) overlay.querySelector(".shc-ap-dialog").scrollTop = keepScroll;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
      this._live = null;
    });
    overlay.hidden = false;
    this._live = live || null;
    return overlay;
  }

  _call(domain, service, data) {
    return this._hass?.callService(domain, service, data);
  }

  _moreInfo(entityId) {
    const e = new Event("hass-more-info", { bubbles: true, composed: true });
    e.detail = { entityId };
    this.dispatchEvent(e);
  }

  _navigate(path) {
    if (/^https?:/.test(path)) {
      window.open(path, "_blank");
      return;
    }
    history.pushState(null, "", path);
    window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } }));
  }

  _switchHtml(entity) {
    const st = entity ? this._hass.states[entity] : null;
    if (!st) return `<span class="shc-ap-row-val">n/d</span>`;
    const on = st.state === "on";
    return `<button type="button" class="shc-ap-switch${on ? " on" : ""}" data-toggle="${esc(entity)}" aria-pressed="${on}"></button>`;
  }

  _stepperHtml(entity, unit) {
    const st = entity ? this._hass.states[entity] : null;
    if (!st) return `<span class="shc-ap-row-val">n/d</span>`;
    return `<span class="shc-zb-stepper">
      <button type="button" class="shc-at-pm" data-step="${esc(entity)}" data-dir="-1">−</button>
      <span>${esc(Math.round(Number(st.state)))} ${esc(unit)}</span>
      <button type="button" class="shc-at-pm" data-step="${esc(entity)}" data-dir="1">+</button>
    </span>`;
  }

  _timeHtml(entity) {
    const st = entity ? this._hass.states[entity] : null;
    if (!st) return `<span class="shc-ap-row-val">n/d</span>`;
    return `<input type="time" class="shc-notif-time" data-time="${esc(entity)}" value="${esc(String(st.state).slice(0, 5))}">`;
  }

  // Collega i controlli comuni dei popup (interruttori, +/-, orari, pulsanti)
  _bindControls(overlay, reopen) {
    const hass = this._hass;
    overlay.querySelectorAll("[data-toggle]").forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        const ent = b.dataset.toggle;
        this._call(ent.split(".")[0], "toggle", { entity_id: ent });
        setTimeout(reopen, 350);
      }),
    );
    overlay.querySelectorAll("[data-step]").forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        const st = hass.states[b.dataset.step];
        if (!st) return;
        const step = Number(st.attributes.step) || 1;
        const min = Number(st.attributes.min);
        const max = Number(st.attributes.max);
        const v = Math.min(max, Math.max(min, Number(st.state) + step * Number(b.dataset.dir)));
        this._call("input_number", "set_value", { entity_id: b.dataset.step, value: v });
        setTimeout(reopen, 350);
      }),
    );
    overlay.querySelectorAll("[data-time]").forEach((el) =>
      el.addEventListener("change", () => {
        if (el.value) this._call("input_datetime", "set_datetime", { entity_id: el.dataset.time, time: `${el.value}:00` });
      }),
    );
    overlay.querySelectorAll("[data-open-entity]").forEach((el) => el.addEventListener("click", () => this._moreInfo(el.dataset.openEntity)));
  }

  // ⚙️ Abbinamenti: permit join, ultimi abbinati, Zigbee2MQTT
  _openPairing() {
    const hass = this._hass;
    const cfg = this._config;
    const pj = hass.states[cfg.permit_join_entity];
    const pjOn = pj?.state === "on";
    const end = this._pairEnd();
    const sinceTxt = pjOn && pj.last_changed ? new Date(pj.last_changed).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : "";
    const total = Math.max(1, end - Date.parse(pj?.last_changed || "") || 254000);
    // ripetitori (dispositivi a rete online) attraverso cui forzare l'abbinamento
    const routers = this._data().devices.filter((x) => x.b === -2 && x.on);
    if (this._pairVia && !routers.some((x) => x.n === this._pairVia) && this._pairVia !== "Coordinator") this._pairVia = "";
    const viaOpts = [
      ["", "Tutta la rete"],
      ["Coordinator", "Solo coordinatore"],
      ...routers.map((x) => [x.n, x.n]),
    ]
      .map(([v, l]) => `<option value="${esc(v)}"${v === (this._pairVia || "") ? " selected" : ""}>${esc(l)}</option>`)
      .join("");
    const pairBox = pjOn
      ? `<div class="shc-zb-pair">
          <small>Abbinamento attivo dalle ${esc(sinceTxt)}</small>
          <span class="shc-zb-cd">${end ? this._cdText(end - Date.now()) : "--:--"}</span>
          <div class="shc-ap-bar"><i class="shc-zb-cd-bar" style="width:${end ? Math.max(0, Math.min(100, ((end - Date.now()) / total) * 100)) : 0}%"></i></div>
          ${this._pairStartedVia === undefined ? "" : `<span class="shc-zb-pair-via">Tramite: <b>${esc(this._pairStartedVia === "Coordinator" ? "solo coordinatore" : this._pairStartedVia || "tutta la rete")}</b></span>`}
        </div>
        <div class="shc-zb-pair-btns"><button type="button" class="shc-ap-action-btn shc-zb-stop" data-pair="stop">Ferma abbinamento</button></div>`
      : `${this._row("Abbina tramite", `<select class="shc-ap-select" data-via="1">${viaOpts}</select>`)}
        <div class="shc-zb-pair-btns"><button type="button" class="shc-ap-action-btn" data-pair="start">Avvia abbinamento (4 min)</button></div>`;
    const hist = String(hass.states[cfg.history_entity]?.state || "");
    const histItems = ["", "unknown", "unavailable"].includes(hist) ? [] : hist.split(" | ");
    const ver = hass.states[cfg.version_entity]?.state;
    const bridge = cfg.bridge_entity ? hass.states[cfg.bridge_entity] : null;
    const log = hass.states[cfg.log_level_entity];
    const logOpts = (log?.attributes?.options || [])
      .map((o) => `<option value="${esc(o)}"${o === log.state ? " selected" : ""}>${esc(o)}</option>`)
      .join("");
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Nuovi dispositivi</div>
        ${pairBox}
        <p class="shc-zb-note">Avvia, poi metti il dispositivo in modalità abbinamento. "Abbina tramite" forza l'ingresso da un ripetitore preciso: scegli quello più vicino al punto dove andrà il dispositivo, così si aggancia lì e non a uno lontano. Zigbee2MQTT richiude da solo allo scadere. Quando l'abbinamento riesce arriva l'avviso (nella fascia oraria delle notifiche).</p>
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Ultimi abbinati</div>
        <div class="shc-zb-history">${
          histItems.length
            ? histItems.map((h) => `<div><small>${esc(h.slice(0, 11))}</small>${esc(h.slice(12))}</div>`).join("")
            : `<div class="shc-zb-empty">Nessun abbinamento registrato finora</div>`
        }</div>
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Zigbee2MQTT</div>
        ${ver ? this._row("Versione", `<span class="shc-ap-row-val">${esc(ver)}</span>`) : ""}
        ${bridge ? this._row("Bridge", `<span class="shc-ap-row-val" style="color:${bridge.state === "on" ? "#16a34a" : "#ef4444"};font-weight:800">${bridge.state === "on" ? "Connesso" : "Non connesso"}</span>`) : ""}
        ${log ? this._row("Livello log", `<select class="shc-ap-select" data-log="1">${logOpts}</select>`) : ""}
        ${cfg.frontend_url ? this._row("Interfaccia Zigbee2MQTT", `<button type="button" class="shc-ap-action-btn" data-z2m="1">Apri</button>`) : ""}
        ${hass.states[cfg.restart_entity] ? this._row("Riavvia Zigbee2MQTT", `<button type="button" class="shc-ap-action-btn" data-restart="1">Riavvia</button>`) : ""}
      </div>`;
    const overlay = this._openDialog("Abbinamenti", html, () => this._openPairing());
    this._bindControls(overlay, () => this._openPairing());
    clearInterval(this._cdTimer);
    if (pjOn && end) {
      this._cdTimer = setInterval(() => {
        const left = end - Date.now();
        const cd = overlay.querySelector(".shc-zb-cd");
        if (overlay.hidden || !cd) {
          clearInterval(this._cdTimer);
          return;
        }
        cd.textContent = this._cdText(left);
        const bar = overlay.querySelector(".shc-zb-cd-bar");
        if (bar) bar.style.width = `${Math.max(0, Math.min(100, (left / total) * 100))}%`;
        if (left <= 0) clearInterval(this._cdTimer);
      }, 1000);
    }
    overlay.querySelector("[data-via]")?.addEventListener("change", (e) => {
      this._pairVia = e.target.value;
    });
    overlay.querySelector("[data-pair]")?.addEventListener("click", (e) => {
      const start = e.target.dataset.pair === "start";
      const payload = start ? { time: 254 } : { time: 0 };
      if (start && this._pairVia) payload.device = this._pairVia;
      this._pairStartedVia = start ? this._pairVia || "" : undefined;
      this._call("mqtt", "publish", { topic: `${cfg.base_topic}/bridge/request/permit_join`, payload: JSON.stringify(payload) });
      e.target.disabled = true;
      e.target.textContent = start ? "Avvio..." : "Chiusura...";
    });
    overlay.querySelector("[data-log]")?.addEventListener("change", (e) => {
      this._call("select", "select_option", { entity_id: cfg.log_level_entity, option: e.target.value });
    });
    overlay.querySelector("[data-z2m]")?.addEventListener("click", () => {
      overlay.hidden = true;
      this._navigate(cfg.frontend_url);
    });
    overlay.querySelector("[data-restart]")?.addEventListener("click", () => {
      if (!window.confirm("Riavviare Zigbee2MQTT? Per circa un minuto i dispositivi Zigbee non rispondono.")) return;
      this._call("button", "press", { entity_id: cfg.restart_entity });
    });
  }

  // 📊 Dispositivi: elenco completo con filtri, ricerca e scheda del singolo dispositivo
  _openDevices() {
    const d = this._data();
    const cnt = {
      all: d.devices.length,
      on: d.devices.filter((x) => d.stato(x) === "on").length,
      off: d.offline.length,
      mains: d.mains.length,
      batt: d.battery.length,
    };
    const filters = [
      ["all", "Tutti"],
      ["on", "Online"],
      ["off", "Offline"],
      ["mains", "A rete"],
      ["batt", "A batteria"],
    ];
    const match = (x) => {
      const f = this._filter;
      if (f === "on" && d.stato(x) !== "on") return false;
      if (f === "off" && d.stato(x) !== "off") return false;
      if (f === "mains" && x.b !== -2) return false;
      if (f === "batt" && x.b === -2) return false;
      const s = this._search.trim().toLowerCase();
      return !s || `${x.n} ${x.m} ${x.v || ""}`.toLowerCase().includes(s);
    };
    const testo = { on: "Online", off: "Offline", escl: "Escluso" };
    const items = d.devices.filter(match).map((x) => {
      const st = d.stato(x);
      const t = x.on ? zbTacche(x.q) : 0;
      const col = x.on && x.q >= 0 ? zbLqiColor(x.q) : "#94a3b8";
      const barre = [1, 2, 3, 4].map((b) => `<i style="height:${2 + b * 3}px;background:${b <= t ? col : "rgba(148,163,184,.3)"}"></i>`).join("");
      return `<button type="button" class="shc-zb-item ${st}" data-dev="${esc(x.n)}">
        <span class="shc-zb-foto">${this._img(x.m)}<span class="shc-zb-dot ${st}"></span></span>
        <span class="shc-zb-txt">
          <span class="shc-zb-nome">${esc(x.n)}</span>
          <span class="shc-zb-riga"><span class="shc-zb-st ${st}">${testo[st]}</span><span class="shc-zb-tacche">${barre}</span>${x.on && x.q >= 0 ? `<span style="color:${col}">LQI ${x.q}</span>` : ""}</span>
          <span class="shc-zb-info">${esc(x.m || "?")} · ${this._battHtml(x)}</span>
          ${st === "off" && x.da ? `<span class="shc-zb-da">offline da ${esc(zbDurata(x.da))}</span>` : ""}
        </span>
      </button>`;
    });
    const html = `
      <div class="shc-zb-filters">${filters
        .map(([k, l]) => `<button type="button" class="shc-zb-filter${this._filter === k ? " on" : ""}${k === "off" && cnt.off ? " alarm" : ""}" data-filter="${k}">${l} <b>${cnt[k]}</b></button>`)
        .join("")}</div>
      <input type="search" class="shc-zb-search" placeholder="Cerca per nome o modello" value="${esc(this._search)}">
      <div class="shc-zb-grid">${items.join("") || `<div class="shc-zb-empty">Nessun dispositivo</div>`}</div>`;
    const overlay = this._openDialog(`Dispositivi Zigbee (${d.devices.length})`, html, () => {
      if (this._root.activeElement?.classList?.contains("shc-zb-search")) return;
      this._openDevices();
    });
    overlay.querySelectorAll("[data-filter]").forEach((b) =>
      b.addEventListener("click", () => {
        this._filter = this._filter === b.dataset.filter ? "all" : b.dataset.filter;
        this._openDevices();
      }),
    );
    const search = overlay.querySelector(".shc-zb-search");
    search.addEventListener("input", () => {
      this._search = search.value;
      const s = search.value.trim().toLowerCase();
      overlay.querySelectorAll(".shc-zb-item").forEach((el) => {
        const x = d.devices.find((y) => y.n === el.dataset.dev);
        el.style.display = !s || `${x.n} ${x.m} ${x.v || ""}`.toLowerCase().includes(s) ? "" : "none";
      });
    });
    overlay.querySelectorAll("[data-dev]").forEach((b) => b.addEventListener("click", () => this._openDevice(b.dataset.dev)));
  }

  _openDevice(name) {
    const d = this._data();
    const x = d.devices.find((y) => y.n === name);
    if (!x) return this._openDevices();
    const st = d.stato(x);
    const col = x.on && x.q >= 0 ? zbLqiColor(x.q) : "#94a3b8";
    const escluso = d.excluded.includes(x.n);
    const stTxt = { on: "Online", off: "Offline", escl: x.on ? "Online (escluso)" : "Offline (escluso)" }[st];
    const html = `
      <div class="shc-ap-sub-back" data-back="1">${ICON_BACK} Tutti i dispositivi</div>
      <div class="shc-zb-detail-head">${this._img(x.m)}<div><b>${esc(x.n)}</b><small>${esc([x.v, x.m].filter(Boolean).join(" · "))}</small></div></div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Stato</div>
        ${this._row("Stato", `<span class="shc-ap-row-val" style="font-weight:800;color:${x.on ? "#16a34a" : "#ef4444"}">${esc(stTxt)}</span>`)}
        ${!x.on && x.da ? this._row("Offline da", `<span class="shc-ap-row-val">${esc(zbDurata(x.da))}</span>`) : ""}
        ${this._row("Segnale (LQI)", `<span class="shc-ap-row-val" style="font-weight:800;color:${col}">${x.on && x.q >= 0 ? x.q : "—"}</span>`)}
        ${this._row("Alimentazione", `<span class="shc-ap-row-val shc-zb-info" style="font-size:14.5px">${this._battHtml(x)}</span>`)}
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Gestione</div>
        ${this._row("Escludi da conteggio e avvisi", `<button type="button" class="shc-ap-switch${escluso ? " on" : ""}" data-escl="1"></button>`)}
        <p class="shc-zb-note">Utile per un dispositivo che spegni di proposito (es. una presa stagionale): resta in elenco ma non fa scattare il rosso né gli avvisi.</p>
        ${x.id ? this._row("Scheda del dispositivo in HA", `<button type="button" class="shc-ap-action-btn" data-device="1">Apri</button>`) : ""}
      </div>`;
    const overlay = this._openDialog("Dispositivo", html, () => this._openDevice(name));
    overlay.querySelector("[data-back]").addEventListener("click", () => this._openDevices());
    overlay.querySelector("[data-escl]").addEventListener("click", () => {
      const list = d.excluded.filter((n) => n !== x.n);
      if (!escluso) list.push(x.n);
      const value = JSON.stringify(list);
      if (value.length > 255) {
        window.alert("Troppi dispositivi esclusi: l'elenco supera i 255 caratteri dell'input_text.");
        return;
      }
      this._call("input_text", "set_value", { entity_id: this._config.excluded_entity, value });
      setTimeout(() => this._openDevice(name), 3500);
    });
    overlay.querySelector("[data-device]")?.addEventListener("click", () => {
      overlay.hidden = true;
      this._live = null;
      this._navigate(`/config/devices/device/${x.id}`);
    });
  }

  // 🔋 Segnale e batterie: classifiche dal piu' debole
  _openSignal() {
    const d = this._data();
    const lqi = d.devices.filter((x) => x.on && x.q >= 0).sort((a, b) => a.q - b.q);
    const batt = d.devices.filter((x) => x.b >= 0).sort((a, b) => a.b - b.b);
    const noBatt = d.devices.filter((x) => x.b === -1);
    const rank = (label, valTxt, pct, color) => `<div class="shc-zb-rank">
        <div class="shc-zb-rank-top"><span>${esc(label)}</span><span style="color:${color}">${valTxt}</span></div>
        <div class="shc-ap-bar"><i style="width:${pct}%;background:${color}"></i></div>
      </div>`;
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Segnale (dal più debole)</div>
        ${lqi.length ? lqi.map((x) => rank(x.n, `LQI ${x.q}`, Math.min(100, Math.round((x.q / 255) * 100)), zbLqiColor(x.q))).join("") : `<div class="shc-zb-empty">Nessun valore LQI: abilita le entità *_linkquality</div>`}
        <p class="shc-zb-note">Sotto 50 il collegamento è debole: avvicina un dispositivo alimentato a rete (fa da ripetitore) o sposta quello in fondo alla lista.</p>
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Batterie (dalla più scarica)</div>
        ${batt.length ? batt.map((x) => rank(x.n, `${x.b}%`, x.b, inverseSeverityColor(x.b))).join("") : `<div class="shc-zb-empty">Nessun dispositivo a batteria</div>`}
        ${noBatt.length ? this._row("Livello non disponibile", `<span class="shc-ap-row-val">${esc(noBatt.map((x) => x.n).join(", "))}</span>`) : ""}
      </div>`;
    this._openDialog("Segnale e batterie", html, () => this._openSignal());
  }

  // 🔔 Notifiche: tutto quello che riguarda gli avvisi
  _openNotify() {
    const hass = this._hass;
    const cfg = this._config;
    const n = cfg.notify;
    const d = this._data();
    const notified = zbJsonList(hass.states[n.notified]);
    const battNotified = zbJsonList(hass.states[n.battery_notified]);
    const pending = String(hass.states[n.pending]?.state || "");
    const tags = (list, attr) =>
      list.length
        ? `<div class="shc-zb-tags">${list.map((x) => `<span class="shc-zb-tag">${esc(x)}${attr ? `<button type="button" ${attr}="${esc(x)}" title="Togli">×</button>` : ""}</span>`).join("")}</div>`
        : `<div class="shc-zb-empty" style="padding:6px">Nessuno</div>`;
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Avvisi</div>
        ${this._row("Avvisi offline e nuovi dispositivi", this._switchHtml(n.enabled))}
        ${this._row("Avviso batteria bassa", this._switchHtml(n.battery_enabled))}
        ${this._row("Offline da almeno", this._stepperHtml(n.offline_minutes, "min"))}
        ${this._row("Batteria bassa sotto", this._stepperHtml(n.battery_threshold, "%"))}
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Fascia oraria</div>
        ${this._row("Dalle", this._timeHtml(n.from))}
        ${this._row("Fino alle", this._timeHtml(n.to))}
        <p class="shc-zb-note">Fuori fascia non parte nessuna notifica: quello che succede di notte arriva in un riepilogo all'apertura della fascia.</p>
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Già avvisati</div>
        ${this._row("Offline", `<span class="shc-ap-row-val">${esc(notified.join(", ") || "nessuno")}</span>`)}
        ${this._row("Batteria bassa", `<span class="shc-ap-row-val">${esc(battNotified.join(", ") || "nessuno")}</span>`)}
        ${pending && !["unknown", "unavailable"].includes(pending) ? this._row("Nuovi in attesa della fascia", `<span class="shc-ap-row-val">${esc(pending)}</span>`) : ""}
        <p class="shc-zb-note">Un dispositivo avvisato non viene ripetuto finché non torna online (o la batteria non risale sopra soglia).</p>
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Esclusi da conteggio e avvisi</div>
        ${tags(d.excluded, "data-unexcl")}
        <p class="shc-zb-note">Per escludere un dispositivo: elenco Dispositivi → tocca il dispositivo.</p>
      </div>
      ${hass.states[n.test_script] ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Prova</div>${this._row("Invia una notifica di prova", `<button type="button" class="shc-ap-action-btn" data-test="1">Invia</button>`)}</div>` : ""}`;
    const overlay = this._openDialog("Notifiche", html, () => {
      if (this._root.activeElement?.classList?.contains("shc-notif-time")) return;
      this._openNotify();
    });
    this._bindControls(overlay, () => this._openNotify());
    overlay.querySelectorAll("[data-unexcl]").forEach((b) =>
      b.addEventListener("click", () => {
        const value = JSON.stringify(d.excluded.filter((x) => x !== b.dataset.unexcl));
        this._call("input_text", "set_value", { entity_id: cfg.excluded_entity, value });
        setTimeout(() => this._openNotify(), 3500);
      }),
    );
    overlay.querySelector("[data-test]")?.addEventListener("click", (e) => {
      this._call("script", "turn_on", { entity_id: n.test_script });
      e.target.textContent = "Inviata";
    });
  }

  getCardSize() {
    return 6;
  }

  static getConfigElement() {
    return document.createElement("shc-zigbee-card-editor");
  }

  static getStubConfig() {
    return { name: "Rete Zigbee", entity: "sensor.zigbee_dispositivi_offline" };
  }
}

class ShcZigbeeCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "Rete Zigbee" },
        { key: "entity", label: "Sensore riepilogo del package (sensor.zigbee_dispositivi_offline)", domain: ["sensor"], required: true },
        { key: "bridge_entity", label: "Stato del bridge Zigbee2MQTT (connessione)", domain: ["binary_sensor"] },
      ]},
      { title: "Zigbee2MQTT", fields: [
        { key: "permit_join_entity", label: "Permetti abbinamento (permit join)", domain: ["switch"] },
        { key: "pairing_end_entity", label: "Fine abbinamento (conto alla rovescia)", domain: ["sensor"] },
        { key: "base_topic", label: "Topic base MQTT di Zigbee2MQTT", kind: "text", placeholder: "zigbee2mqtt" },
        { key: "restart_entity", label: "Pulsante riavvio", domain: ["button"] },
        { key: "version_entity", label: "Versione", domain: ["sensor"] },
        { key: "log_level_entity", label: "Livello log", domain: ["select"] },
        { key: "frontend_url", label: "Indirizzo interfaccia Zigbee2MQTT", kind: "text", placeholder: "/45df7312_zigbee2mqtt", hint: "Il percorso che vedi nella barra degli indirizzi aprendo Zigbee2MQTT dal menu laterale, oppure un indirizzo http completo." },
        { key: "image_path", label: "Cartella foto dispositivi", kind: "text", placeholder: "/local/zigbee_img/", hint: "Se una foto manca la card la prende dal sito di Zigbee2MQTT." },
      ]},
      { title: "Notifiche (helper del package)", fields: [
        { key: "notify.enabled", label: "Avvisi attivi", domain: ["input_boolean"] },
        { key: "notify.battery_enabled", label: "Avviso batteria bassa", domain: ["input_boolean"] },
        { key: "notify.offline_minutes", label: "Minuti di offline prima dell'avviso", domain: ["input_number"] },
        { key: "notify.battery_threshold", label: "Soglia batteria bassa", domain: ["input_number"] },
        { key: "notify.from", label: "Avvisi dalle", domain: ["input_datetime"] },
        { key: "notify.to", label: "Avvisi fino alle", domain: ["input_datetime"] },
        { key: "notify.test_script", label: "Script notifica di prova", domain: ["script"] },
      ]},
      { title: "Grafici", fields: [
        { key: "graph.online", label: "Dispositivi online", domain: ["sensor"] },
        { key: "graph.lqi_avg", label: "LQI medio", domain: ["sensor"] },
        { key: "graph.lqi_min", label: "LQI minimo", domain: ["sensor"] },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-zigbee-card-editor", ShcZigbeeCardEditor);

customElements.define("shc-zigbee-card", ShcZigbeeCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-zigbee-card",
  name: "Rete Zigbee",
  description: "Card per la rete Zigbee2MQTT: dispositivi online/offline, segnale, batterie, abbinamenti e notifiche",
  author: "Simonz82",
});

// -----------------------------------------------------------------------
// shc-climate-card: climatizzatore. Stessa grafica delle altre card, layout
// centrato di default. Al posto della foto c'e' la gauge (gauge-card-pro se
// installata, altrimenti la gauge standard di HA) con temperatura stanza,
// temperatura impostata e umidita'. Comandi diretti (accendi/spegni, -/+,
// modalita', alette), popup Programmazione (ingranaggio), Consumi, Grafici,
// Ventola e alette, Stato e diagnostica.
// -----------------------------------------------------------------------

const CL_STYLE = `
.shc-cl-chip ha-icon{--mdc-icon-size:25px;color:#0ea5e9}
.shc-ap-card.cl-heat .shc-cl-chip ha-icon{color:#f97316}
.shc-ap-card.cl-off .shc-cl-chip ha-icon,.shc-ap-card.is-unavailable .shc-cl-chip ha-icon{color:#94a3b8}
.shc-cl-card .shc-ap-hero{height:auto;min-height:170px;background:none !important;display:block;overflow:visible}
.shc-cl-card.layout-centrato .shc-ap-hero{height:auto}
.shc-cl-gauge{width:100%;max-width:330px;margin:0 auto}
.shc-cl-gauge>*{--ha-card-background:transparent;--card-background-color:transparent;--ha-card-box-shadow:none;--ha-card-border-width:0;--ha-card-border-color:transparent;--main-needle-stroke-width:1px;--main-needle-stroke-color:black;--inner-needle-stroke-width:1px;--inner-needle-stroke-color:black}
.shc-cl-herocol{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:6px}
.shc-ap-card.layout-centrato .shc-cl-herocol{flex:0 0 auto}
.shc-cl-card.cl-img .shc-ap-hero,.shc-cl-card.cl-img.layout-centrato .shc-ap-hero{flex:0 0 auto;height:150px;min-height:0;cursor:pointer}
.shc-cl-card.cl-img .shc-ap-hero svg{width:100%;height:100%}
.shc-cl-herocol .shc-cl-line,.shc-cl-herocol .shc-cl-gauge{display:none}
.shc-cl-card.cl-img .shc-cl-line,.shc-cl-card:not(.cl-img) .shc-cl-gauge{display:block}
/* aria del clima: si muove solo quando sta lavorando */
@keyframes shc-cl-flow{to{stroke-dashoffset:-48}}
@keyframes shc-cl-drift{0%{transform:translateY(-4px);opacity:0}25%{opacity:.95}100%{transform:translateY(54px);opacity:0}}
.shc-cl-air{color:#38bdf8;opacity:0;transition:opacity .6s}
.shc-cl-air path{stroke:currentColor;stroke-dasharray:10 14}
.shc-cl-air circle{fill:currentColor;transform-box:fill-box;transform-origin:center;opacity:0}
.shc-ap-card.cl-heat .shc-cl-air{color:#fb923c}
.shc-ap-card.cl-dry .shc-cl-air{color:#22d3ee}
.shc-ap-card.cl-fan .shc-cl-air{color:#94a3b8}
.shc-ap-card.is-run:not(.cl-idle) .shc-cl-air{opacity:var(--cl-air-op,1)}
.shc-ap-card.is-run:not(.cl-idle) .shc-cl-air path{animation:shc-cl-flow var(--cl-air-dur,1.1s) linear infinite}
.shc-ap-card.is-run:not(.cl-idle) .shc-cl-air circle{animation:shc-cl-drift calc(var(--cl-air-dur,1.1s) * 2) ease-in infinite}
.shc-ap-card.is-run.cl-idle .shc-cl-air{opacity:.25}
.shc-cl-led{fill:#94a3b8}
.shc-ap-card.is-run .shc-cl-led{fill:#22c55e}
.shc-cl-disp{font:800 13px/1 system-ui,sans-serif;fill:#0ea5e9}
.shc-ap-card.cl-heat .shc-cl-disp{fill:#f97316}
.shc-ap-card.cl-off .shc-cl-disp,.shc-ap-card.is-unavailable .shc-cl-disp{fill:#94a3b8}
/* gauge dritta: stessa scala e colori della gauge, temperatura sopra, umidita' sotto */
.shc-cl-line{padding:8px 12px 7px;border-radius:16px;background:var(--shc-soft);cursor:pointer}
.shc-cl-line-head{display:flex;align-items:flex-end;justify-content:space-between;gap:8px;margin-bottom:2px}
.shc-cl-line-title{display:flex;flex-direction:column;min-width:0}
.shc-cl-line-title b{font-size:15px;font-weight:850;color:var(--shc-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.shc-cl-line-title small{font-size:12px;font-weight:750;color:var(--shc-dim)}
.shc-cl-line-val{display:flex;align-items:baseline;gap:6px;white-space:nowrap;font-variant-numeric:tabular-nums}
.shc-cl-line-val b{font-size:30px;font-weight:900;line-height:1;color:var(--shc-text)}
.shc-cl-line-val i{font-style:normal;font-size:14px;font-weight:800;color:var(--shc-dim)}
.shc-cl-line-val span{font-size:15px;font-weight:850;color:#38bdf8}
.shc-cl-track{position:relative;height:30px}
.shc-cl-lbar{position:absolute;left:0;right:0;border-radius:999px}
.shc-cl-lbar.main{top:7px;height:12px}
.shc-cl-lbar.inner{top:21px;height:5px}
.shc-cl-ndl{position:absolute;left:0;width:5px;margin-left:-2.5px;border-radius:3px;background:#fff;border:1px solid #000;box-sizing:border-box;box-shadow:0 1px 2px rgba(0,0,0,.35);transition:left .6s}
.shc-cl-ndl.main{top:3px;height:20px}
.shc-cl-ndl.inner{top:19px;width:4px;margin-left:-2px;height:9px}
/* temperatura impostata: lancetta rossa con triangolo sopra la barra */
.shc-cl-spt{position:absolute;top:0;left:0;width:0;transition:left .6s}
.shc-cl-spt i{position:absolute;top:0;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #d96c6c;filter:drop-shadow(0 0 .6px #000)}
.shc-cl-spt b{position:absolute;top:5px;left:-2px;width:4px;height:16px;border-radius:2px;background:#d96c6c;border:1px solid #000;box-sizing:border-box}
.shc-cl-spt[hidden],.shc-cl-ndl[hidden],.shc-cl-lbar[hidden],.shc-cl-scale[hidden]{display:none}
.shc-cl-scale{position:relative;height:13px;font-size:10.5px;font-weight:800;color:var(--shc-dim);font-variant-numeric:tabular-nums;line-height:13px}
.shc-cl-scale span{position:absolute;top:0;transform:translateX(-50%);white-space:nowrap}
.shc-cl-scale span:first-child{transform:none}
.shc-cl-scale span:last-child{transform:translateX(-100%)}
.shc-cl-scale.h{color:#38bdf8}
.shc-cl-scale.dense{font-size:9.5px}
.shc-cl-scale.dense span:first-child,.shc-cl-scale.dense span:last-child{transform:translateX(-50%)}
.shc-cl-track.sep{height:35px}
.shc-cl-track.sep .shc-cl-lbar.inner{top:26px}
.shc-cl-track.sep .shc-cl-ndl.inner{top:24px}
.shc-cl-line-title small em{font-style:normal;font-weight:850;color:#d96c6c}
.shc-cl-card .shc-ap-tool ha-icon{--mdc-icon-size:20px}
/* 5 pulsanti: il nome sta gia' nella gauge, qui lo nascondiamo */
.shc-cl-card .shc-ap-headings{display:none}
.shc-cl-card .shc-ap-top{justify-content:space-between}
.shc-cl-ctrl{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin:10px 0 2px}
.shc-cl-btn{width:44px;height:44px;border-radius:50%;border:1px solid var(--shc-border);background:var(--shc-soft);color:var(--shc-text);display:grid;place-items:center;cursor:pointer;padding:0;transition:background .2s,color .2s}
.shc-cl-btn ha-icon{--mdc-icon-size:22px}
.shc-cl-btn:disabled{opacity:.4;cursor:default}
.shc-cl-btn.on{border-color:transparent}
.shc-cl-btn.power.on{background:rgba(34,197,94,.18);color:#16a34a}
.shc-cl-btn.m-cool.on{background:rgba(14,165,233,.2);color:#0284c7}
.shc-cl-btn.m-heat.on{background:rgba(249,115,22,.2);color:#ea580c}
.shc-cl-btn.m-dry.on{background:rgba(6,182,212,.2);color:#0891b2}
.shc-cl-btn.m-fan_only.on,.shc-cl-btn.m-heat_cool.on,.shc-cl-btn.m-auto.on{background:rgba(100,116,139,.22);color:var(--shc-text)}
.shc-cl-btn.swing.on{background:rgba(139,92,246,.2);color:#7c3aed}
.shc-cl-set{min-width:76px;text-align:center;font-size:26px;font-weight:900;color:var(--shc-text);font-variant-numeric:tabular-nums;line-height:1}
.shc-cl-set small{display:block;font-size:10.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--shc-dim);margin-top:3px}
.shc-cl-sep{width:1px;height:28px;background:var(--shc-border);margin:0 2px}
.shc-cl-sched{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:8px}
.shc-cl-sched span{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:999px;background:var(--shc-soft);border:1px solid var(--shc-border);font-size:12px;font-weight:800;color:var(--shc-text);cursor:pointer}
.shc-cl-sched ha-icon{--mdc-icon-size:15px;color:#0ea5e9}
.shc-cl-sched[hidden]{display:none}
.shc-cl-chips{display:flex;flex-wrap:wrap;gap:6px}
.shc-cl-chipbtn{display:inline-flex;align-items:center;gap:5px;padding:8px 12px;border-radius:999px;border:1px solid var(--shc-border);background:var(--shc-card);color:var(--shc-text);font:inherit;font-size:13px;font-weight:800;cursor:pointer}
.shc-cl-chipbtn ha-icon{--mdc-icon-size:17px}
.shc-cl-chipbtn.on{background:var(--shc-blue);border-color:var(--shc-blue);color:#fff}
.shc-cl-note{font-size:12px;line-height:1.45;color:var(--shc-dim);margin:0}
.shc-cl-stepper{display:flex;align-items:center;gap:8px}
.shc-cl-stepper span{min-width:62px;text-align:center;font-size:14px;font-weight:850;color:var(--shc-text)}
.shc-cl-grid{display:grid;grid-template-columns:auto 1fr 1fr;gap:6px 12px;align-items:center;font-size:13.5px;padding:8px 11px;border-radius:13px;background:var(--shc-soft)}
.shc-cl-grid b{font-weight:900;color:var(--shc-text);text-align:right}
.shc-cl-grid span{color:var(--shc-dim);font-weight:750}
.shc-cl-grid .h{font-size:11px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;color:var(--shc-dim);text-align:right}
`;

const CL_MODES = {
  off: { label: "Spento", icon: "mdi:power" },
  cool: { label: "Raffresca", icon: "mdi:snowflake" },
  heat: { label: "Riscalda", icon: "mdi:fire" },
  heat_cool: { label: "Auto", icon: "mdi:autorenew" },
  auto: { label: "Auto", icon: "mdi:autorenew" },
  dry: { label: "Deumidifica", icon: "mdi:water-percent" },
  fan_only: { label: "Ventilazione", icon: "mdi:fan" },
};

const CL_FAN = { auto: "Auto", quiet: "Silenzioso", low: "Bassa", medium: "Media", high: "Alta" };
const CL_SWING = { stop: "Ferme", swing: "Oscillanti", windnice: "Comfort", off: "Ferme", on: "Oscillanti", vertical: "Verticale", horizontal: "Orizzontale", both: "Entrambe" };
const CL_PRESET = { none: "Normale", away: "Fuori casa", boost: "Boost", eco: "Eco", comfort: "Comfort", sleep: "Notte" };

const CL_DEFAULT_SCHEDULE = {
  on_enabled: "input_boolean.clima_salone_programmazione_attiva",
  on_time: "input_datetime.clima_salone_orario_accensione",
  on_mode: "input_select.clima_salone_modalita_accensione",
  on_temperature: "input_number.clima_salone_temperatura_accensione",
  off_enabled: "input_boolean.clima_salone_programmazione_spegnimento_attiva",
  off_time: "input_datetime.clima_salone_orario_spegnimento",
};

// stessi colori della gauge della stanza
const CL_LINE_SEGMENTS = [
  { from: 18, color: "#1565c0" },
  { from: 20, color: "#039be5" },
  { from: 22, color: "#00c853" },
  { from: 24, color: "#43a047" },
  { from: 26, color: "#7cb342" },
  { from: 28, color: "#fb8c00" },
  { from: 30, color: "#f4511e" },
  { from: 32, color: "#d32f2f" },
];
const CL_HUM_SEGMENTS = [
  { from: 0, color: "var(--red-color, #f44336)" },
  { from: 40, color: "var(--light-blue-color, #03a9f4)" },
  { from: 60, color: "var(--light-blue-color, #03a9f4)" },
  { from: 100, color: "var(--black-color, #000)" },
];

// split a parete che soffia aria (blu freddo, arancio caldo, grigia ventilazione)
function clHeroSvg(id) {
  const flows = [
    "M48 84c-6 14 4 24-4 38s-2 22-10 30",
    "M84 86c-3 14 5 24-1 38s1 20-3 28",
    "M120 87c0 14 6 24 0 38s4 20 0 28",
    "M156 86c3 14-5 24 1 38s-1 20 3 28",
    "M192 84c6 14-4 24 4 38s2 22 10 30",
  ];
  const dots = [
    [62, 92, 0], [101, 96, 0.7], [138, 94, 1.4], [178, 92, 0.35], [120, 100, 1.05], [80, 104, 1.75], [160, 104, 0.2],
  ];
  return `<svg width="100%" height="100%" viewBox="0 0 240 160" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shcl-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4"/></filter>
      <linearGradient id="shcl-body-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#e9eef4"/><stop offset="1" stop-color="#c7d1dd"/></linearGradient>
      <linearGradient id="shcl-fade-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <mask id="shcl-mask-${id}"><rect x="0" y="78" width="240" height="82" fill="url(#shcl-fade-${id})"/></mask>
    </defs>
    <ellipse cx="120" cy="80" rx="104" ry="7" fill="#0f172a" opacity=".16" filter="url(#shcl-blur-${id})"/>
    <g class="shc-cl-air" mask="url(#shcl-mask-${id})">
      <g fill="none" stroke-width="3.2" stroke-linecap="round">${flows.map((d, i) => `<path d="${d}" style="animation-delay:-${(i * 0.23).toFixed(2)}s"/>`).join("")}</g>
      ${dots.map(([x, y, d]) => `<circle cx="${x}" cy="${y}" r="2.2" style="animation-delay:${d}s"/>`).join("")}
    </g>
    <rect x="18" y="16" width="204" height="62" rx="16" fill="url(#shcl-body-${id})" stroke="#8fa0b3" stroke-opacity=".6" stroke-width="1.5"/>
    <path d="M34 25h172" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".9"/>
    <g stroke="#b6c2d0" stroke-width="1.2" stroke-linecap="round"><path d="M40 31h96"/><path d="M40 35h96"/></g>
    <rect x="164" y="34" width="44" height="20" rx="6" fill="#0f172a" opacity=".86"/>
    <text class="shc-cl-disp" x="186" y="49" text-anchor="middle">--</text>
    <circle class="shc-cl-led" cx="40" cy="48" r="2.6"/>
    <rect x="26" y="64" width="188" height="9" rx="4.5" fill="#1f2937" opacity=".85"/>
    <path d="M30 74c40 7 140 7 180 0" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

function clNum(v, dec = 1) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "—";
  return n.toFixed(dec).replace(".", ",");
}

class ShcClimateCard extends HTMLElement {
  setConfig(config) {
    if (!config.entity || !String(config.entity).startsWith("climate.")) throw new Error("entity è obbligatorio (climate.xxx)");
    this._config = {
      name: "Climatizzatore",
      layout: "centrato",
      min: 18,
      max: 32,
      max_power: 1500,
      hero: "immagine",
      ...config,
      schedule: { ...CL_DEFAULT_SCHEDULE, ...(config.schedule || {}) },
      consumption: config.consumption || {},
      diagnostics: Array.isArray(config.diagnostics) ? config.diagnostics : [],
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._gauge = null;
    this._uid = this._uid || Math.random().toString(36).slice(2, 8);
    this._root.innerHTML = `<style>${STYLE}${CL_STYLE}</style>
      <article class="shc-ap-card shc-cl-card">
        <div class="shc-ap-top">
          <span class="shc-ap-chip shc-cl-chip"><ha-icon icon="mdi:air-conditioner"></ha-icon></span>
          <span class="shc-ap-headings"><span class="shc-ap-name"></span></span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Programmazione">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-ap-stats" title="Consumi">${ICON_CHART}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-cl-fan" title="Ventola e alette"><ha-icon icon="mdi:fan"></ha-icon></button>
            <button type="button" class="shc-ap-tool shc-cl-info" title="Stato e diagnostica">${ICON_INFO}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-cl-herocol">
            <div class="shc-ap-hero">${clHeroSvg(this._uid)}</div>
            <div class="shc-cl-gauge"></div>
            <div class="shc-cl-line" title="Temperatura stanza, impostata e umidità">
              <div class="shc-cl-line-head">
                <span class="shc-cl-line-title"><b class="cl-l-room"></b><small class="cl-l-mode">—</small></span>
                <span class="shc-cl-line-val"><b class="cl-l-temp">—</b><i>°C</i><span class="cl-l-hum"></span></span>
              </div>
              <div class="shc-cl-scale t"></div>
              <div class="shc-cl-track">
                <div class="shc-cl-lbar main"></div>
                <div class="shc-cl-lbar inner"></div>
                <div class="shc-cl-ndl inner" hidden></div>
                <div class="shc-cl-spt" hidden title="Temperatura impostata"><i></i><b></b></div>
                <div class="shc-cl-ndl main" hidden></div>
              </div>
              <div class="shc-cl-scale h"></div>
            </div>
          </div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Clima</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:home-thermometer" style="--mdc-icon-size:16px"></ha-icon></span><small>Stanza</small></span><b class="cl-room">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:target" style="--mdc-icon-size:16px"></ha-icon></span><small>Impostata</small></span><b class="cl-target">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:water-percent" style="--mdc-icon-size:16px"></ha-icon></span><small>Umidità</small></span><b class="cl-hum">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:sun-thermometer" style="--mdc-icon-size:16px"></ha-icon></span><small>Esterna</small></span><b class="cl-out">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_BOLT}</span><small>Potenza</small></span><b class="cl-power">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic">${ICON_CALENDAR}</span><small>Oggi</small></span><b class="cl-today">—</b></div>
            </div>
          </div>
        </div>
        <div class="shc-cl-ctrl">
          <button type="button" class="shc-cl-btn power" title="Accendi / spegni"><ha-icon icon="mdi:power"></ha-icon></button>
          <button type="button" class="shc-cl-btn" data-step="-1" title="Meno"><ha-icon icon="mdi:minus"></ha-icon></button>
          <div class="shc-cl-set"><span class="cl-set-val">—</span><small>impostata</small></div>
          <button type="button" class="shc-cl-btn" data-step="1" title="Più"><ha-icon icon="mdi:plus"></ha-icon></button>
        </div>
        <div class="shc-cl-ctrl shc-cl-modes"></div>
        <div class="shc-cl-sched" hidden></div>
        <div class="shc-ap-warn" hidden></div>
        <div class="shc-ap-panel">
          <div class="shc-ap-meters">
            <div class="shc-ap-meter shc-c-meter-clickable" data-graph="power">
              <div class="shc-ap-meter-row"><span>Potenza assorbita</span><strong class="cl-power-val">—</strong></div>
              <div class="shc-ap-bar"><i class="cl-power-bar" style="width:0%"></i></div>
            </div>
          </div>
        </div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    shcBindGraph(this);
    this._root.querySelectorAll(".shc-c-meter-clickable").forEach((m) =>
      m.addEventListener("click", (e) => {
        e.stopPropagation();
        const series = this._graphSeries();
        const idx = Math.max(0, series.findIndex((s) => s.key === m.dataset.graph));
        shcOpenChartPopup(this, { title: this._config.name, series, active: idx });
      }),
    );
    const bind = (sel, fn) =>
      this._root.querySelector(sel).addEventListener("click", (e) => {
        e.stopPropagation();
        fn(e);
      });
    bind(".shc-ap-settings", () => this._openSchedule());
    bind(".shc-ap-stats", () => this._openConsumption());
    bind(".shc-cl-fan", () => this._openFan());
    bind(".shc-cl-info", () => this._openInfo());
    bind(".shc-cl-sched", () => this._openSchedule());
    bind(".shc-ap-hero", () => this._moreInfo(this._config.entity));
    bind(".shc-cl-line", () => this._moreInfo(this._config.entity));
    this._useGauge = String(this._config.hero).toLowerCase() === "gauge";
    this._root.querySelector(".shc-ap-card").classList.toggle("cl-img", !this._useGauge);
    this._buildLine();
    bind(".shc-cl-btn.power", () => {
      const st = this._st();
      if (!st || st.state === "unavailable") return;
      if (st.state === "off") {
        const last = this._lastMode && this._lastMode !== "off" ? this._lastMode : null;
        if (last && (st.attributes.hvac_modes || []).includes(last)) this._call("climate", "set_hvac_mode", { entity_id: this._config.entity, hvac_mode: last });
        else this._call("climate", "turn_on", { entity_id: this._config.entity });
      } else this._call("climate", "turn_off", { entity_id: this._config.entity });
    });
    this._root.querySelectorAll(".shc-cl-ctrl [data-step]").forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        this._stepTarget(Number(b.dataset.step));
      }),
    );
    if (this._useGauge) this._buildGauge();
  }

  // --- gauge ------------------------------------------------------------------

  // gauge dritta: gradiente fisso, si spostano solo lancette e setpoint
  _buildLine() {
    const cfg = this._config;
    const min = Number(cfg.min);
    const max = Number(cfg.max);
    const pos = (v, lo, hi) => Math.min(100, Math.max(0, ((v - lo) / (hi - lo)) * 100));
    const grad = (segs, lo, hi) => `linear-gradient(90deg,${segs.map((g) => `${g.color} ${pos(Number(g.from), lo, hi).toFixed(1)}%`).join(",")})`;
    const q = (sel) => this._root.querySelector(sel);
    q(".shc-cl-lbar.main").style.background = grad(cfg.segments || CL_LINE_SEGMENTS, min, max);
    q(".shc-cl-lbar.inner").style.background = grad(cfg.humidity_segments || CL_HUM_SEGMENTS, 0, 100);
    // etichette nel punto esatto del valore, allineate a lancette e cursori
    shcDegTicks(q(".shc-cl-scale.t"), min, max, Number(cfg.scale_step) || 1);
    // barra dell'umidita' staccata da quella della temperatura (bar_gap: false per attaccarle)
    q(".shc-cl-track").classList.toggle("sep", cfg.bar_gap !== false);
    q(".shc-cl-scale.h").innerHTML = [0, 20, 40, 60, 80, 100].map((h) => `<span style="left:${h}%">${h}%</span>`).join("");
    q(".cl-l-room").textContent = cfg.room_name || cfg.name;
  }

  _updateLine(room, target, hum, mode, unav) {
    const cfg = this._config;
    const q = (sel) => this._root.querySelector(sel);
    const min = Number(cfg.min);
    const max = Number(cfg.max);
    const pos = (v, lo, hi) => `${Math.min(100, Math.max(0, ((v - lo) / (hi - lo)) * 100)).toFixed(2)}%`;
    const hasSet = !unav && Number.isFinite(target);
    q(".cl-l-mode").innerHTML = `${esc(unav ? "Non raggiungibile" : CL_MODES[mode]?.label || mode)}${hasSet ? ` · impostata <em>${esc(clNum(target))}°</em>` : ""}`;
    q(".cl-l-temp").textContent = room !== null ? clNum(room) : "—";
    q(".cl-l-hum").textContent = hum !== null ? `${Math.round(hum)}%` : "";
    const nm = q(".shc-cl-ndl.main");
    nm.hidden = room === null;
    if (room !== null) nm.style.left = pos(room, min, max);
    const showHum = hum !== null;
    const humBar = !showHum && !cfg.humidity_entity;
    q(".shc-cl-lbar.inner").hidden = humBar;
    q(".shc-cl-scale.h").hidden = humBar;
    const ni = q(".shc-cl-ndl.inner");
    ni.hidden = !showHum;
    if (showHum) ni.style.left = pos(hum, 0, 100);
    const sp = q(".shc-cl-spt");
    sp.hidden = !hasSet;
    if (hasSet) sp.style.left = pos(this._pendingTarget ?? target, min, max);
    const disp = q(".shc-cl-disp");
    if (disp) disp.textContent = unav ? "--" : mode === "off" ? "OFF" : hasSet ? `${clNum(target)}°` : "--";
  }

  _defaultGauge() {
    const cfg = this._config;
    const e = cfg.entity;
    const hum = cfg.humidity_entity;
    const modeTpl = `{% set m = states('${e}') %}{% if m == 'heat' %}Riscalda{% elif m == 'cool' %}Raffresca{% elif m == 'dry' %}Deumidifica{% elif m == 'fan_only' %}Ventilazione{% elif m in ['heat_cool','auto'] %}Auto{% elif m == 'off' %}Spento{% else %}Non raggiungibile{% endif %}`;
    const g = {
      type: "custom:gauge-card-pro",
      entity: e,
      min: cfg.min,
      max: cfg.max,
      needle: true,
      gradient: true,
      gradient_resolution: "high",
      hide_background: true,
      color_interpolation: true,
      smooth_segments: true,
      value: `{{ state_attr('${e}', 'current_temperature') | float(0) }}`,
      setpoint: {
        type: "template",
        value: `{{ state_attr('${e}', 'temperature') | float(0) }}`,
        color: "#d96c6c",
        label: `{% set t = state_attr('${e}', 'temperature') | float(0) %}{{ ('%.1f' | format(t)).replace('.', ',') }}`,
      },
      segments: [
        { from: 18, color: "#1565c0" },
        { from: 20, color: "#039be5" },
        { from: 22, color: "#00c853" },
        { from: 24, color: "#43a047" },
        { from: 26, color: "#7cb342" },
        { from: 28, color: "#fb8c00" },
        { from: 30, color: "#f4511e" },
        { from: 32, color: "#d32f2f" },
      ],
      value_texts: {
        primary: `{{ state_attr('${e}', 'current_temperature') | round(0) }}`,
        primary_unit: "°C",
        primary_font_size_reduction: 5,
      },
      titles: {
        primary: cfg.room_name || cfg.name,
        primary_font_size: "17px",
        secondary: modeTpl,
        secondary_font_size: "13px",
      },
      shapes: { main_needle: "M-46.8 2.4-35.6.8A.8.8 90 00-35.6-.8L-46.8-2.4A1.6 1.6 90 00-46.8 2.4Z" },
      tap_action: { action: "more-info" },
    };
    if (hum) {
      g.inner = {
        entity: hum,
        min: 0,
        max: 100,
        mode: "needle",
        value: `{{ states('${hum}') | float(0) }}`,
        gradient: true,
        color_interpolation: true,
        smooth_segments: true,
        segments: [
          { from: 0, color: "var(--red-color)" },
          { from: 40, color: "var(--light-blue-color)" },
          { from: 60, color: "var(--light-blue-color)" },
          { from: 100, color: "var(--black-color)" },
        ],
      };
      g.value_texts.secondary = `{{ states('${hum}') | round(0) }}`;
      g.value_texts.secondary_unit = "%";
      g.value_texts.secondary_color = "#38bdf8";
      g.value_texts.secondary_font_size_reduction = 6;
    }
    return g;
  }

  async _buildGauge() {
    const host = this._root.querySelector(".shc-cl-gauge");
    const cfg = this._config;
    let conf = cfg.gauge ? { ...cfg.gauge } : this._defaultGauge();
    if (String(conf.type).includes("gauge-card-pro")) {
      const ok = await Promise.race([
        customElements.whenDefined("gauge-card-pro").then(() => true),
        new Promise((r) => setTimeout(() => r(false), 4000)),
      ]);
      // senza gauge-card-pro: gauge standard di Home Assistant
      if (!ok) {
        conf = { type: "gauge", entity: cfg.temperature_entity || cfg.entity, min: cfg.min, max: cfg.max, needle: true, name: cfg.room_name || cfg.name };
        if (!cfg.temperature_entity) conf.attribute = "current_temperature";
      }
    }
    try {
      const helpers = await window.loadCardHelpers();
      const el = helpers.createCardElement(conf);
      if (this._hass) el.hass = this._hass;
      host.replaceChildren(el);
      this._gauge = el;
    } catch (e) {
      host.innerHTML = `<div class="shc-cl-note" style="text-align:center;padding:30px 0">Gauge non disponibile</div>`;
    }
  }

  // --- dati -------------------------------------------------------------------

  _st() {
    return this._hass?.states[this._config.entity];
  }

  _val(entity) {
    const st = entity ? this._hass?.states[entity] : null;
    if (!st || ["unknown", "unavailable", ""].includes(st.state)) return null;
    const n = Number(st.state);
    return Number.isFinite(n) ? n : null;
  }

  _todayKwh() {
    const c = this._config.consumption || {};
    const vals = [c.cooling_day, c.heating_day].map((e) => this._val(e)).filter((v) => v !== null);
    return vals.length ? vals.reduce((a, b) => a + b, 0) : null;
  }

  _graphSeries() {
    const cfg = this._config;
    const s = [];
    if (cfg.temperature_entity) s.push({ key: "temp", entity: cfg.temperature_entity, label: "Temperatura stanza", color: "#f97316" });
    if (cfg.outdoor_entity) s.push({ key: "out", entity: cfg.outdoor_entity, label: "Temperatura esterna", color: "#eab308" });
    if (cfg.humidity_entity) s.push({ key: "humidity", entity: cfg.humidity_entity, label: "Umidità", color: "#0ea5e9" });
    if (cfg.power_entity) s.push({ key: "power", entity: cfg.power_entity, label: "Potenza", color: "#16a34a" });
    return s;
  }

  _stepTarget(dir) {
    const st = this._st();
    if (!st || st.state === "unavailable") return;
    const step = Number(st.attributes.target_temp_step) || 0.5;
    const min = Number(st.attributes.min_temp) || this._config.min;
    const max = Number(st.attributes.max_temp) || this._config.max;
    const base = this._pendingTarget ?? Number(st.attributes.temperature);
    if (!Number.isFinite(base)) return;
    const t = Math.min(max, Math.max(min, Math.round((base + dir * step) / step) * step));
    this._pendingTarget = t;
    this._root.querySelector(".cl-set-val").textContent = `${clNum(t)}°`;
    const sp = this._root.querySelector(".shc-cl-spt");
    sp.hidden = false;
    sp.style.left = `${Math.min(100, Math.max(0, ((t - this._config.min) / (this._config.max - this._config.min)) * 100)).toFixed(2)}%`;
    // piu' tocchi veloci = una sola chiamata
    clearTimeout(this._stepTimer);
    clearTimeout(this._pendingReset);
    this._stepTimer = setTimeout(() => {
      this._call("climate", "set_temperature", { entity_id: this._config.entity, temperature: t });
      this._pendingReset = setTimeout(() => (this._pendingTarget = null), 2500);
    }, 700);
  }

  // --- card -------------------------------------------------------------------

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    if (this._gauge) this._gauge.hass = hass;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;
    const st = this._st();
    const q = (sel) => this._root.querySelector(sel);
    const unav = !st || st.state === "unavailable" || st.state === "unknown";
    const mode = unav ? "unavailable" : st.state;
    if (!unav && mode !== "off") this._lastMode = mode;
    const a = st?.attributes || {};

    const card = q(".shc-ap-card");
    card.classList.remove("is-run", "is-standby", "is-off", "is-unavailable", "has-alarm", "cl-heat", "cl-cool", "cl-off", "cl-dry", "cl-fan", "cl-idle");
    card.classList.add(unav ? "is-unavailable" : mode === "off" ? "is-off" : "is-run");
    card.classList.add(mode === "heat" ? "cl-heat" : mode === "off" || unav ? "cl-off" : mode === "dry" ? "cl-dry" : mode === "fan_only" ? "cl-fan" : "cl-cool");
    // compressore fermo (temperatura raggiunta): aria quasi ferma. Molte
    // integrazioni (es. Daikin Onecta) non danno hvac_action: allora decide la
    // potenza della presa, e l'aria rallenta e sbiadisce quando l'inverter modula.
    const airW = this._val(cfg.power_entity);
    const pwIdle = !a.hvac_action && airW !== null && airW < (Number(cfg.idle_power) || 60);
    const idle = ["idle", "off"].includes(a.hvac_action) || pwIdle;
    if (idle) card.classList.add("cl-idle");
    const ratio = airW !== null && airW > 0 ? Math.min(1, Math.max(0.15, airW / (Number(cfg.max_power) || 1500))) : null;
    card.style.setProperty("--cl-air-dur", ratio !== null ? `${(0.9 + 1.6 * (1 - ratio)).toFixed(2)}s` : "1.1s");
    card.style.setProperty("--cl-air-op", ratio !== null ? (0.45 + 0.55 * ratio).toFixed(2) : "1");
    const errors = (cfg.diagnostics || []).filter((d) => d.alarm && this._hass.states[d.entity]?.state === "on");
    if (errors.length) card.classList.add("has-alarm");

    const badge = q(".shc-ap-badge");
    badge.classList.remove("run", "standby", "off", "unavailable");
    badge.classList.add(unav ? "unavailable" : mode === "off" ? "off" : "run");
    const action = a.hvac_action;
    q(".shc-ap-badge-label").textContent = unav
      ? "OFFLINE"
      : mode === "off"
        ? "SPENTO"
        : (action === "idle" || pwIdle ? "IN PAUSA" : (CL_MODES[mode]?.label || mode).toUpperCase());

    const room = cfg.temperature_entity ? this._val(cfg.temperature_entity) : Number.isFinite(Number(a.current_temperature)) ? Number(a.current_temperature) : null;
    const target = Number(a.temperature);
    const hum = this._val(cfg.humidity_entity) ?? (Number.isFinite(Number(a.current_humidity)) ? Number(a.current_humidity) : null);
    const out = this._val(cfg.outdoor_entity);
    const power = this._val(cfg.power_entity);
    const today = this._todayKwh();
    q(".cl-room").textContent = room !== null ? `${clNum(room)} °C` : "—";
    q(".cl-target").textContent = !unav && Number.isFinite(target) ? `${clNum(target)} °C` : "—";
    q(".cl-hum").textContent = hum !== null ? `${Math.round(hum)} %` : "—";
    q(".cl-out").textContent = out !== null ? `${clNum(out)} °C` : "—";
    q(".cl-power").textContent = power !== null ? `${Math.round(power)} W` : "—";
    q(".cl-today").textContent = today !== null ? `${clNum(today, 2)} kWh` : "—";
    this._updateLine(room, target, hum, mode, unav);
    // righe senza sensore configurato: nascoste
    q(".cl-hum").closest(".shc-ap-cycle-row").hidden = !cfg.humidity_entity && a.current_humidity === undefined;
    q(".cl-out").closest(".shc-ap-cycle-row").hidden = !cfg.outdoor_entity;
    q(".cl-power").closest(".shc-ap-cycle-row").hidden = !cfg.power_entity;
    q(".cl-today").closest(".shc-ap-cycle-row").hidden = !cfg.consumption?.cooling_day && !cfg.consumption?.heating_day;

    // comandi
    if (this._pendingTarget == null) q(".cl-set-val").textContent = !unav && Number.isFinite(target) ? `${clNum(target)}°` : "—";
    const pw = q(".shc-cl-btn.power");
    pw.classList.toggle("on", !unav && mode !== "off");
    pw.disabled = unav;
    this._root.querySelectorAll(".shc-cl-ctrl [data-step]").forEach((b) => (b.disabled = unav));
    const modes = (cfg.modes || a.hvac_modes || ["off", "cool", "heat"]).filter((m) => m !== "off");
    const swingModes = a.swing_modes || [];
    const swingOn = a.swing_mode && !["stop", "off"].includes(a.swing_mode);
    const modesKey = `${modes.join()}|${mode}|${a.swing_mode}|${unav}`;
    if (modesKey !== this._modesKey) {
      this._modesKey = modesKey;
      const box = q(".shc-cl-modes");
      box.innerHTML =
        modes
          .map((m) => `<button type="button" class="shc-cl-btn m-${esc(m)}${m === mode ? " on" : ""}" data-mode="${esc(m)}" title="${esc(CL_MODES[m]?.label || m)}"${unav ? " disabled" : ""}><ha-icon icon="${CL_MODES[m]?.icon || "mdi:thermostat"}"></ha-icon></button>`)
          .join("") +
        (swingModes.length
          ? `<span class="shc-cl-sep"></span><button type="button" class="shc-cl-btn swing${swingOn ? " on" : ""}" data-swing="1" title="Alette: ${esc(CL_SWING[a.swing_mode] || a.swing_mode || "")}"${unav ? " disabled" : ""}><ha-icon icon="mdi:arrow-up-down"></ha-icon></button>`
          : "");
      box.querySelectorAll("[data-mode]").forEach((b) =>
        b.addEventListener("click", (e) => {
          e.stopPropagation();
          this._call("climate", "set_hvac_mode", { entity_id: cfg.entity, hvac_mode: b.dataset.mode });
        }),
      );
      box.querySelector("[data-swing]")?.addEventListener("click", (e) => {
        e.stopPropagation();
        const st2 = this._st();
        const on = st2.attributes.swing_mode && !["stop", "off"].includes(st2.attributes.swing_mode);
        const list = st2.attributes.swing_modes || [];
        const target2 = on ? list.find((s) => ["stop", "off"].includes(s)) : list.find((s) => ["swing", "on", "vertical", "both"].includes(s)) || list.find((s) => !["stop", "off"].includes(s));
        if (target2) this._call("climate", "set_swing_mode", { entity_id: cfg.entity, swing_mode: target2 });
      });
    }

    // programmazione attiva
    const sc = cfg.schedule;
    const hs = this._hass.states;
    const chips = [];
    if (hs[sc.on_enabled]?.state === "on") {
      const m = hs[sc.on_mode]?.state;
      const t = hs[sc.on_temperature]?.state;
      chips.push(`<span><ha-icon icon="mdi:clock-start"></ha-icon>Accensione ${esc(String(hs[sc.on_time]?.state || "").slice(0, 5))}${m && m !== "off" ? ` · ${esc(CL_MODES[m]?.label || m)}${t ? ` ${esc(clNum(t))}°` : ""}` : ""}</span>`);
    }
    if (hs[sc.off_enabled]?.state === "on") chips.push(`<span><ha-icon icon="mdi:clock-end"></ha-icon>Spegnimento ${esc(String(hs[sc.off_time]?.state || "").slice(0, 5))}</span>`);
    const schedBox = q(".shc-cl-sched");
    schedBox.hidden = !chips.length;
    schedBox.innerHTML = chips.join("");

    // barre
    const maxP = Number(cfg.max_power) || 1500;
    q(".cl-power-val").textContent = power !== null ? `${Math.round(power)} W` : "—";
    const pb = q(".cl-power-bar");
    pb.style.width = `${power !== null ? Math.min(100, (power / maxP) * 100) : 0}%`;
    pb.style.background = power !== null ? meterSeverityColor(Math.min(100, (power / maxP) * 100)) : "";
    q(".cl-power-val").closest(".shc-ap-meter").hidden = !cfg.power_entity;

    const warn = q(".shc-ap-warn");
    if (unav) {
      warn.hidden = false;
      warn.textContent = "⚠ Climatizzatore non raggiungibile: controlla alimentazione e collegamento al cloud";
    } else if (errors.length) {
      warn.hidden = false;
      warn.textContent = `⚠ ${errors.map((d) => d.name || hs[d.entity]?.attributes?.friendly_name || d.entity).join(", ")}`;
    } else warn.hidden = true;

    // popup aperto: si aggiorna quando cambia il clima
    const key = [cfg.entity, ...Object.values(sc)].map((x) => hs[x]?.last_updated || "").join("|");
    if (key !== this._liveKey) {
      this._liveKey = key;
      if (this._live && this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov):not([hidden])")) this._live();
    }
  }

  // --- popup ------------------------------------------------------------------

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _openDialog(title, bodyHtml, live) {
    let overlay = this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov)");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.hidden = true;
          this._live = null;
        }
      });
      this._root.appendChild(overlay);
    }
    const keepScroll = overlay.dataset.title === title && !overlay.hidden ? overlay.querySelector(".shc-ap-dialog")?.scrollTop || 0 : 0;
    overlay.dataset.title = title;
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    if (keepScroll) overlay.querySelector(".shc-ap-dialog").scrollTop = keepScroll;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
      this._live = null;
    });
    overlay.hidden = false;
    this._live = live || null;
    return overlay;
  }

  _call(domain, service, data) {
    return this._hass?.callService(domain, service, data);
  }

  _moreInfo(entityId) {
    const e = new Event("hass-more-info", { bubbles: true, composed: true });
    e.detail = { entityId };
    this.dispatchEvent(e);
  }

  _switchHtml(entity) {
    const st = entity ? this._hass.states[entity] : null;
    if (!st) return `<span class="shc-ap-row-val">n/d</span>`;
    return `<button type="button" class="shc-ap-switch${st.state === "on" ? " on" : ""}" data-toggle="${esc(entity)}"></button>`;
  }

  // ⚙️ Programmazione: accensione e spegnimento una tantum
  _openSchedule() {
    const hs = this._hass.states;
    const sc = this._config.schedule;
    const has = (e) => e && hs[e];
    if (!has(sc.on_enabled) && !has(sc.off_enabled)) {
      this._openDialog("Programmazione", `<div class="shc-ap-sec"><p class="shc-cl-note">Nessuna programmazione configurata. Copia il package <b>clima.yaml</b> (vedi guida) oppure indica i tuoi helper nell'opzione <code>schedule</code> della card.</p></div>`);
      return;
    }
    const timeHtml = (e) => (has(e) ? `<input type="time" class="shc-notif-time" data-time="${esc(e)}" value="${esc(String(hs[e].state).slice(0, 5))}">` : `<span class="shc-ap-row-val">n/d</span>`);
    const modeSel = has(sc.on_mode)
      ? `<div class="shc-cl-chips">${(hs[sc.on_mode].attributes.options || [])
          .map((o) => `<button type="button" class="shc-cl-chipbtn${o === hs[sc.on_mode].state ? " on" : ""}" data-onmode="${esc(o)}"><ha-icon icon="${CL_MODES[o]?.icon || "mdi:thermostat"}"></ha-icon>${esc(CL_MODES[o]?.label || o)}</button>`)
          .join("")}</div>`
      : "";
    const tSt = hs[sc.on_temperature];
    const tempHtml = tSt
      ? `<span class="shc-cl-stepper"><button type="button" class="shc-at-pm" data-num="-1">−</button><span>${esc(clNum(tSt.state))} °C</span><button type="button" class="shc-at-pm" data-num="1">+</button></span>`
      : `<span class="shc-ap-row-val">n/d</span>`;
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Accensione programmata</div>
        ${this._row("Attiva", this._switchHtml(sc.on_enabled))}
        ${this._row("Alle", timeHtml(sc.on_time))}
        ${modeSel ? `${this._row("Modalità", "")}${modeSel}` : ""}
        ${this._row("Temperatura", tempHtml)}
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Spegnimento programmato</div>
        ${this._row("Attivo", this._switchHtml(sc.off_enabled))}
        ${this._row("Alle", timeHtml(sc.off_time))}
      </div>
      <p class="shc-cl-note">Programmazioni <b>una tantum</b>: scattano una volta sola all'orario scelto, poi si disattivano da sole. Riaccendile per la volta successiva. Quando sono attive compaiono sotto i comandi della card.</p>`;
    const reopen = () => {
      if (this._root.activeElement?.classList?.contains("shc-notif-time")) return;
      this._openSchedule();
    };
    const overlay = this._openDialog("Programmazione", html, reopen);
    overlay.querySelectorAll("[data-toggle]").forEach((b) =>
      b.addEventListener("click", () => {
        this._call("input_boolean", "toggle", { entity_id: b.dataset.toggle });
      }),
    );
    overlay.querySelectorAll("[data-time]").forEach((el) =>
      el.addEventListener("change", () => {
        if (el.value) this._call("input_datetime", "set_datetime", { entity_id: el.dataset.time, time: `${el.value}:00` });
      }),
    );
    overlay.querySelectorAll("[data-onmode]").forEach((b) =>
      b.addEventListener("click", () => this._call("input_select", "select_option", { entity_id: sc.on_mode, option: b.dataset.onmode })),
    );
    overlay.querySelectorAll("[data-num]").forEach((b) =>
      b.addEventListener("click", () => {
        const s = hs[sc.on_temperature];
        const step = Number(s.attributes.step) || 0.5;
        const v = Math.min(Number(s.attributes.max), Math.max(Number(s.attributes.min), Number(s.state) + step * Number(b.dataset.num)));
        this._call("input_number", "set_value", { entity_id: sc.on_temperature, value: v });
      }),
    );
  }

  // 📊 Consumi: raffrescamento / riscaldamento per periodo
  _openConsumption() {
    const c = this._config.consumption || {};
    const cfg = this._config;
    const per = [
      ["Oggi", "cooling_day", "heating_day"],
      ["Settimana", "cooling_week", "heating_week"],
      ["Mese", "cooling_month", "heating_month"],
      ["Anno", "cooling_year", "heating_year"],
    ].filter(([, a, b]) => c[a] || c[b]);
    const v = (e) => {
      const n = this._val(e);
      return n === null ? "—" : `${clNum(n, 2)} kWh`;
    };
    const total = this._val(cfg.energy_entity);
    const power = this._val(cfg.power_entity);
    const html = `
      ${per.length
        ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Consumi del climatizzatore</div>
          <div class="shc-cl-grid"><span></span><span class="h">Freddo</span><span class="h">Caldo</span>
          ${per.map(([l, a, b]) => `<span>${l}</span><b>${v(c[a])}</b><b>${v(c[b])}</b>`).join("")}</div>
          <p class="shc-cl-note">Valori dall'integrazione del climatizzatore (si aggiornano qualche volta all'ora).</p></div>`
        : ""}
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Presa / misuratore</div>
        ${cfg.power_entity ? this._row("Potenza adesso", `<span class="shc-ap-row-val">${power === null ? "—" : `${Math.round(power)} W`}</span>`) : ""}
        ${cfg.energy_entity ? this._row("Energia totale", `<span class="shc-ap-row-val">${total === null ? "—" : `${clNum(total, 1)} kWh`}</span>`) : ""}
        ${cfg.price_entity && total !== null ? this._row("Costo totale stimato", `<span class="shc-ap-row-val">${clNum(total * (this._val(cfg.price_entity) || 0), 2)} €</span>`) : ""}
        ${!cfg.power_entity && !cfg.energy_entity ? `<p class="shc-cl-note">Nessun misuratore configurato (power_entity / energy_entity).</p>` : ""}
      </div>
      ${cfg.power_entity ? `<div class="shc-ap-sec">${this._row("Grafico della potenza", `<button type="button" class="shc-ap-action-btn" data-pg="1">Apri</button>`)}</div>` : ""}`;
    const overlay = this._openDialog("Consumi", html);
    overlay.querySelector("[data-pg]")?.addEventListener("click", () => {
      overlay.hidden = true;
      const series = this._graphSeries();
      shcOpenChartPopup(this, { title: this._config.name, series, active: Math.max(0, series.findIndex((s) => s.key === "power")) });
    });
  }

  // 🌀 Ventola, alette, preset
  _openFan() {
    const st = this._st();
    const a = st?.attributes || {};
    const unav = !st || st.state === "unavailable";
    const chips = (list, cur, attr, names) =>
      `<div class="shc-cl-chips">${list
        .map((m) => `<button type="button" class="shc-cl-chipbtn${m === cur ? " on" : ""}" ${attr}="${esc(m)}"${unav ? " disabled" : ""}>${esc(names[m] || (/^\d+$/.test(m) ? `Velocità ${m}` : m))}</button>`)
        .join("")}</div>`;
    const html = `
      ${unav ? `<p class="shc-cl-note">Il climatizzatore non è raggiungibile: i comandi tornano attivi appena si ricollega.</p>` : ""}
      ${(a.fan_modes || []).length ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Ventola</div>${chips(a.fan_modes, a.fan_mode, "data-fan", CL_FAN)}</div>` : ""}
      ${(a.swing_modes || []).length ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Alette</div>${chips(a.swing_modes, a.swing_mode, "data-swing", CL_SWING)}</div>` : ""}
      ${(a.preset_modes || []).length ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Modalità speciali</div>${chips(a.preset_modes, a.preset_mode, "data-preset", CL_PRESET)}
        <p class="shc-cl-note">Boost: massima potenza per circa 20 minuti. Fuori casa: mantiene una temperatura di sicurezza.</p></div>` : ""}
      ${!(a.fan_modes || a.swing_modes || a.preset_modes) ? `<p class="shc-cl-note">Il climatizzatore non espone velocità della ventola, alette o preset.</p>` : ""}`;
    const overlay = this._openDialog("Ventola e alette", html, () => this._openFan());
    const e = this._config.entity;
    overlay.querySelectorAll("[data-fan]").forEach((b) => b.addEventListener("click", () => this._call("climate", "set_fan_mode", { entity_id: e, fan_mode: b.dataset.fan })));
    overlay.querySelectorAll("[data-swing]").forEach((b) => b.addEventListener("click", () => this._call("climate", "set_swing_mode", { entity_id: e, swing_mode: b.dataset.swing })));
    overlay.querySelectorAll("[data-preset]").forEach((b) => b.addEventListener("click", () => this._call("climate", "set_preset_mode", { entity_id: e, preset_mode: b.dataset.preset })));
  }

  // ℹ️ Stato e diagnostica
  _openInfo() {
    const cfg = this._config;
    const hs = this._hass.states;
    const st = this._st();
    const a = st?.attributes || {};
    const fmtState = (s) => {
      if (!s) return "n/d";
      if (s.state === "unavailable") return "non disponibile";
      if (s.attributes.device_class && s.entity_id.startsWith("binary_sensor.")) return s.state === "on" ? "SÌ" : "no";
      return `${s.state}${s.attributes.unit_of_measurement ? ` ${s.attributes.unit_of_measurement}` : ""}`;
    };
    const rows = (cfg.diagnostics || [])
      .map((d) => {
        const s = hs[d.entity];
        const bad = d.alarm && s?.state === "on";
        return `<div class="shc-ap-row" data-open="${esc(d.entity)}" style="cursor:pointer"><span class="shc-ap-row-label">${esc(d.name || s?.attributes?.friendly_name || d.entity)}</span><span class="shc-ap-row-val" style="${bad ? "color:#ef4444;font-weight:800" : ""}">${esc(fmtState(s))}</span></div>`;
      })
      .join("");
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Climatizzatore</div>
        ${this._row("Stato", `<span class="shc-ap-row-val">${esc(!st || st.state === "unavailable" ? "Non raggiungibile" : CL_MODES[st.state]?.label || st.state)}</span>`)}
        ${a.hvac_action ? this._row("Sta facendo", `<span class="shc-ap-row-val">${esc({ cooling: "Raffresca", heating: "Riscalda", idle: "In pausa", drying: "Deumidifica", fan: "Ventila", off: "Spento" }[a.hvac_action] || a.hvac_action)}</span>`) : ""}
        ${st ? this._row("Ultimo cambio", `<span class="shc-ap-row-val">${esc(new Date(st.last_changed).toLocaleString("it-IT", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }))}</span>`) : ""}
        ${a.min_temp !== undefined ? this._row("Intervallo temperatura", `<span class="shc-ap-row-val">${esc(clNum(a.min_temp))} – ${esc(clNum(a.max_temp))} °C, passo ${esc(clNum(a.target_temp_step || 0.5))}</span>`) : ""}
        ${this._row("Scheda completa", `<button type="button" class="shc-ap-action-btn" data-more="1">Apri</button>`)}
        ${cfg.refresh_entity && hs[cfg.refresh_entity] ? this._row("Aggiorna dati dal cloud", `<button type="button" class="shc-ap-action-btn" data-refresh="1">Aggiorna</button>`) : ""}
      </div>
      ${rows ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Diagnostica</div>${rows}</div>` : ""}`;
    const overlay = this._openDialog("Stato e diagnostica", html, () => this._openInfo());
    overlay.querySelector("[data-more]").addEventListener("click", () => this._moreInfo(cfg.entity));
    overlay.querySelector("[data-refresh]")?.addEventListener("click", (e) => {
      this._call("button", "press", { entity_id: cfg.refresh_entity });
      e.target.textContent = "Richiesto";
    });
    overlay.querySelectorAll("[data-open]").forEach((r) => r.addEventListener("click", () => this._moreInfo(r.dataset.open)));
  }

  getCardSize() {
    return 8;
  }

  static getConfigElement() {
    return document.createElement("shc-climate-card-editor");
  }

  static getStubConfig(hass) {
    const e = Object.keys(hass?.states || {}).find((x) => x.startsWith("climate.")) || "climate.climatizzatore";
    return { name: "Climatizzatore", entity: e };
  }
}

class ShcClimateCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "Climatizzatore" },
        { key: "entity", label: "Climatizzatore", domain: ["climate"], required: true },
        { key: "room_name", label: "Nome stanza (titolo della gauge)", kind: "text", placeholder: "Soggiorno" },
        { key: "hero", label: "In alto: immagine (con barra) oppure gauge", kind: "text", placeholder: "immagine" },
        { key: "temperature_entity", label: "Sensore temperatura stanza (per il grafico)", domain: ["sensor"] },
        { key: "humidity_entity", label: "Sensore umidità stanza", domain: ["sensor"] },
        { key: "outdoor_entity", label: "Sensore temperatura esterna", domain: ["sensor"] },
      ]},
      { title: "Consumi", fields: [
        { key: "power_entity", label: "Potenza (W) della presa del clima", domain: ["sensor"] },
        { key: "energy_entity", label: "Energia totale (kWh)", domain: ["sensor"] },
        { key: "max_power", label: "Fondo scala potenza (W)", kind: "text", placeholder: "1500" },
        { key: "consumption.cooling_day", label: "Freddo oggi (kWh)", domain: ["sensor"] },
        { key: "consumption.heating_day", label: "Caldo oggi (kWh)", domain: ["sensor"] },
        { key: "consumption.cooling_month", label: "Freddo mese (kWh)", domain: ["sensor"] },
        { key: "consumption.heating_month", label: "Caldo mese (kWh)", domain: ["sensor"] },
      ]},
      { title: "Programmazione (helper del package clima.yaml)", fields: [
        { key: "schedule.on_enabled", label: "Accensione programmata attiva", domain: ["input_boolean"] },
        { key: "schedule.on_time", label: "Orario accensione", domain: ["input_datetime"] },
        { key: "schedule.on_mode", label: "Modalità accensione", domain: ["input_select"] },
        { key: "schedule.on_temperature", label: "Temperatura accensione", domain: ["input_number"] },
        { key: "schedule.off_enabled", label: "Spegnimento programmato attivo", domain: ["input_boolean"] },
        { key: "schedule.off_time", label: "Orario spegnimento", domain: ["input_datetime"] },
      ]},
      { title: "Altro", fields: [
        { key: "refresh_entity", label: "Pulsante aggiorna dati (button)", domain: ["button"] },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-climate-card-editor", ShcClimateCardEditor);

customElements.define("shc-climate-card", ShcClimateCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "shc-climate-card",
  name: "Climatizzatore",
  description: "Card climatizzatore con gauge integrata, comandi, programmazione, consumi, ventola/alette e diagnostica",
  author: "Simonz82",
});

// -----------------------------------------------------------------------
// shc-heater-card (stufetta) e shc-fan-card (ventilatore): stessa famiglia
// della card Climatizzatore. In alto il disegno animato dell'apparecchio,
// sotto la gauge dritta (temperatura sopra, umidita' sotto), comandi diretti
// e popup. Base comune: ShcDeviceCardBase.
// -----------------------------------------------------------------------

const DV_STYLE = `
.shc-dv-txt{font-size:13px;font-weight:900;letter-spacing:.02em}
.shc-cl-btn.lvl.on{background:linear-gradient(135deg,#fb923c,#ef4444);color:#fff}
.shc-cl-btn.lvl.eco.on{background:linear-gradient(135deg,#4ade80,#16a34a);color:#fff}
.shc-cl-btn.fanonly.on,.shc-cl-btn.preset.on{background:rgba(14,165,233,.2);color:#0284c7}
.shc-cl-btn.mist.on{background:rgba(6,182,212,.2);color:#0891b2}
.shc-cl-btn.osc.on{background:rgba(139,92,246,.2);color:#7c3aed}
.shc-dv-htgt{position:absolute;top:19px;left:0;width:4px;height:10px;margin-left:-2px;border-radius:2px;background:#d96c6c;border:1px solid #000;box-sizing:border-box;transition:left .6s}
.shc-dv-htgt[hidden]{display:none}
.shc-dv-svg{width:100%;height:100%;display:block}
@keyframes shc-dv-flow{to{stroke-dashoffset:-36}}
@keyframes shc-dv-rise{0%{transform:translateY(6px);opacity:0}30%{opacity:.9}100%{transform:translateY(-12px);opacity:0}}
@keyframes shc-dv-sway{0%,100%{transform:rotate(-2.5deg)}50%{transform:rotate(2.5deg)}}
@keyframes shc-dv-osc{0%,100%{transform:scaleX(1)}25%{transform:scaleX(.84)}75%{transform:scaleX(.84)}}
@keyframes shc-dv-mistl{0%{transform:translate(0,0);opacity:0}25%{opacity:.85}100%{transform:translate(-42px,-10px);opacity:0}}
@keyframes shc-dv-mistr{0%{transform:translate(0,0);opacity:0}25%{opacity:.85}100%{transform:translate(42px,-10px);opacity:0}}
/* versione ridotta quando il dispositivo e' scollegato */
.shc-dv-mini{display:none;align-items:center;gap:12px;cursor:pointer;padding:0 6px}
.shc-ap-card.dv-compact{padding-top:12px;padding-bottom:12px}
.shc-ap-card.dv-compact>:not(.shc-dv-mini){display:none!important}
.shc-ap-card.dv-compact>.shc-dv-mini{display:flex}
.shc-dv-mini .shc-ap-chip{width:42px!important;min-width:0!important;height:42px!important;border-radius:14px!important;flex:0 0 auto;padding:0!important;display:grid;place-items:center}
.shc-dv-mini .shc-dv-mini-txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.shc-dv-mini b{font-size:15px;font-weight:850;color:var(--shc-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.shc-dv-mini small{font-size:12px;font-weight:650;color:var(--shc-dim)}
.shc-dv-mini .shc-ap-badge{flex:0 0 auto}
/* stufetta */
.ht-glow{opacity:0;transition:opacity .6s}
.shc-ap-card.is-run.ht-heat .ht-glow{opacity:var(--ht-glow,.9)}
.ht-wave{fill:none;stroke:#fb923c;stroke-width:3;stroke-linecap:round;stroke-dasharray:8 10;opacity:0;transition:opacity .6s}
.shc-ap-card.ht-fan .ht-wave{stroke:#38bdf8}
.shc-ap-card.is-run .ht-wave{opacity:1;animation:shc-dv-flow 1.3s linear infinite}
.shc-ap-card.is-run.lvl-1 .ht-wave.l2,.shc-ap-card.is-run.lvl-1 .ht-wave.l3,.shc-ap-card.is-run.lvl-2 .ht-wave.l3{opacity:0;animation:none}
.ht-rise{opacity:0;fill:none;stroke:#fdba74;stroke-width:2.6;stroke-linecap:round;transform-box:fill-box}
.shc-ap-card.is-run.ht-heat .ht-rise{animation:shc-dv-rise 2.2s ease-in infinite}
.ht-body{transform-box:fill-box;transform-origin:50% 100%}
.shc-ap-card.is-run.dv-osc .ht-body{animation:shc-dv-sway 5s ease-in-out infinite}
.ht-disp{font:900 12px/1 system-ui,sans-serif;fill:#fb923c}
.shc-ap-card.ht-fan .ht-disp{fill:#38bdf8}
.shc-ap-card.is-off .ht-disp,.shc-ap-card.is-unavailable .ht-disp{fill:#94a3b8}
.shc-ap-card.ht-heat .shc-cl-chip ha-icon{color:#f97316}
/* ventilatore */
.fn-blades{transform-box:view-box;transform-origin:120px 58px}
.shc-ap-card.is-run .fn-blades{animation:shch-spin var(--fn-dur,1s) linear infinite}
.fn-head{transform-box:view-box;transform-origin:120px 58px}
.shc-ap-card.is-run.dv-osc .fn-head{animation:shc-dv-osc 6s ease-in-out infinite}
.fn-mist circle{fill:#e0f2fe;stroke:#7dd3fc;stroke-width:.8;opacity:0;transform-box:fill-box}
.shc-ap-card.is-run.fn-mist-on .fn-mist .ml{animation:shc-dv-mistl 2.6s ease-out infinite}
.shc-ap-card.is-run.fn-mist-on .fn-mist .mr{animation:shc-dv-mistr 2.6s ease-out infinite}
.fn-light{opacity:0;transition:opacity .6s,fill .6s}
.shc-ap-card.fn-light-on .fn-light{opacity:.85}
.fn-air{fill:none;stroke:#7dd3fc;stroke-width:2.4;stroke-linecap:round;stroke-dasharray:6 12;opacity:0}
.shc-ap-card.is-run .fn-air{opacity:.8;animation:shc-dv-flow var(--fn-dur,1s) linear infinite}
`;

class ShcDeviceCardBase extends HTMLElement {
  _st() {
    return this._hass?.states[this._config.entity];
  }

  _val(entity) {
    const st = entity ? this._hass?.states[entity] : null;
    if (!st || ["unknown", "unavailable", ""].includes(st.state)) return null;
    const n = Number(st.state);
    return Number.isFinite(n) ? n : null;
  }

  _on(entity) {
    return this._hass?.states[entity]?.state === "on";
  }

  _has(entity) {
    return !!(entity && this._hass?.states[entity]);
  }

  _call(domain, service, data) {
    return this._hass?.callService(domain, service, data);
  }

  _moreInfo(entityId) {
    const e = new Event("hass-more-info", { bubbles: true, composed: true });
    e.detail = { entityId };
    this.dispatchEvent(e);
  }

  _row(label, valueHtml) {
    return `<div class="shc-ap-row"><span class="shc-ap-row-label">${esc(label)}</span>${valueHtml}</div>`;
  }

  _switchHtml(entity) {
    const st = entity ? this._hass.states[entity] : null;
    if (!st) return `<span class="shc-ap-row-val">n/d</span>`;
    return `<button type="button" class="shc-ap-switch${st.state === "on" ? " on" : ""}" data-toggle="${esc(entity)}"></button>`;
  }

  _valHtml(text) {
    return `<span class="shc-ap-row-val">${esc(text)}</span>`;
  }

  _openDialog(title, bodyHtml, live) {
    let overlay = this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov)");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "shc-ap-overlay";
      overlay.hidden = true;
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.hidden = true;
          this._live = null;
        }
      });
      this._root.appendChild(overlay);
    }
    const keepScroll = overlay.dataset.title === title && !overlay.hidden ? overlay.querySelector(".shc-ap-dialog")?.scrollTop || 0 : 0;
    overlay.dataset.title = title;
    overlay.innerHTML = `<div class="shc-ap-dialog">
      <div class="shc-ap-dialog-head"><h3>${esc(title)}</h3><button type="button" class="shc-ap-dialog-close">${ICON_CLOSE}</button></div>
      <div class="shc-ap-dialog-body">${bodyHtml}</div>
    </div>`;
    if (keepScroll) overlay.querySelector(".shc-ap-dialog").scrollTop = keepScroll;
    overlay.querySelector(".shc-ap-dialog-close").addEventListener("click", () => {
      overlay.hidden = true;
      this._live = null;
    });
    overlay.hidden = false;
    this._live = live || null;
    // interruttori, orari e scelte rapide comuni a tutti i popup
    overlay.querySelectorAll("[data-toggle]").forEach((b) =>
      b.addEventListener("click", () => {
        const id = b.dataset.toggle;
        this._call(id.split(".")[0], "toggle", { entity_id: id });
      }),
    );
    overlay.querySelectorAll("[data-time]").forEach((el) =>
      el.addEventListener("change", () => {
        if (el.value) this._call("input_datetime", "set_datetime", { entity_id: el.dataset.time, time: `${el.value}:00` });
      }),
    );
    overlay.querySelectorAll("[data-numset]").forEach((b) =>
      b.addEventListener("click", () => {
        const id = b.dataset.numset;
        this._call(id.split(".")[0], "set_value", { entity_id: id, value: Number(b.dataset.v) });
      }),
    );
    overlay.querySelectorAll("[data-numstep]").forEach((b) =>
      b.addEventListener("click", () => {
        const id = b.dataset.numstep;
        const s = this._hass.states[id];
        if (!s) return;
        const step = Number(b.dataset.step) || Number(s.attributes.step) || 1;
        const v = Math.min(Number(s.attributes.max), Math.max(Number(s.attributes.min), Number(s.state) + step * Number(b.dataset.dir)));
        this._call(id.split(".")[0], "set_value", { entity_id: id, value: v });
      }),
    );
    overlay.querySelectorAll("[data-option]").forEach((b) =>
      b.addEventListener("click", () => {
        const id = b.dataset.select;
        this._call(id.split(".")[0], "select_option", { entity_id: id, option: b.dataset.option });
      }),
    );
    overlay.querySelectorAll("[data-more]").forEach((b) => b.addEventListener("click", () => this._moreInfo(b.dataset.more)));
    overlay.querySelectorAll("[data-hidepref]").forEach((b) =>
      b.addEventListener("click", async () => {
        const value = !b.classList.contains("on");
        b.classList.toggle("on", value);
        b.disabled = true;
        const saved = await this._saveHideOption(value);
        b.disabled = false;
        const note = overlay.querySelector(".shc-dv-hidenote");
        if (note) note.textContent = saved ? "Salvato nella dashboard." : "Salvato solo su questo dispositivo (per salvarlo nella dashboard serve un utente amministratore).";
        if (this._hass) this.hass = this._hass;
      }),
    );
    return overlay;
  }

  // riga "Nascondi se scollegata" per i popup delle card
  _hidePrefHtml() {
    return `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Visualizzazione</div>
      ${this._row("Nascondi se scollegata", `<button type="button" class="shc-ap-switch${this._hideWhenOffline() ? " on" : ""}" data-hidepref="1"></button>`)}
      <p class="shc-cl-note shc-dv-hidenote">Quando è scollegata dalla corrente o dal Wi‑Fi resta solo una striscia bassa con il nome e OFFLINE. Toccandola si riapre questo comando.</p>
    </div>`;
  }

  _timeHtml(entity) {
    return this._has(entity)
      ? `<input type="time" class="shc-notif-time" data-time="${esc(entity)}" value="${esc(String(this._hass.states[entity].state).slice(0, 5))}">`
      : this._valHtml("n/d");
  }

  _stepperHtml(entity, text, step) {
    if (!this._has(entity)) return this._valHtml("n/d");
    return `<span class="shc-cl-stepper"><button type="button" class="shc-at-pm" data-numstep="${esc(entity)}" data-dir="-1"${step ? ` data-step="${step}"` : ""}>−</button><span>${esc(text)}</span><button type="button" class="shc-at-pm" data-numstep="${esc(entity)}" data-dir="1"${step ? ` data-step="${step}"` : ""}>+</button></span>`;
  }

  _chipsHtml(items) {
    return `<div class="shc-cl-chips">${items
      .map((i) => `<button type="button" class="shc-cl-chipbtn${i.on ? " on" : ""}" ${i.attrs}>${i.icon ? `<ha-icon icon="${i.icon}"></ha-icon>` : ""}${esc(i.label)}</button>`)
      .join("")}</div>`;
  }

  _reopenUnlessTyping(fn) {
    return () => {
      if (this._root.activeElement?.classList?.contains("shc-notif-time")) return;
      fn();
    };
  }

  _liveRefresh(entities) {
    const hs = this._hass.states;
    const key = entities.map((x) => hs[x]?.last_updated || "").join("|");
    if (key !== this._liveKey) {
      this._liveKey = key;
      if (this._live && this._root.querySelector(".shc-ap-overlay:not(.shc-gc-ov):not([hidden])")) this._live();
    }
  }

  // --- gauge dritta (stessa della card Climatizzatore) ------------------------

  _lineHtml(title) {
    return `<div class="shc-cl-line" title="${esc(title)}">
      <div class="shc-cl-line-head">
        <span class="shc-cl-line-title"><b class="cl-l-room"></b><small class="cl-l-mode">—</small></span>
        <span class="shc-cl-line-val"><b class="cl-l-temp">—</b><i>°C</i><span class="cl-l-hum"></span></span>
      </div>
      <div class="shc-cl-scale t"></div>
      <div class="shc-cl-track">
        <div class="shc-cl-lbar main"></div>
        <div class="shc-cl-lbar inner"></div>
        <div class="shc-cl-ndl inner" hidden></div>
        <div class="shc-dv-htgt" hidden title="Umidità obiettivo"></div>
        <div class="shc-cl-spt" hidden><i></i><b></b></div>
        <div class="shc-cl-ndl main" hidden></div>
      </div>
      <div class="shc-cl-scale h"></div>
    </div>`;
  }

  _lineBuild(segments) {
    const cfg = this._config;
    const min = Number(cfg.min);
    const max = Number(cfg.max);
    const pos = (v, lo, hi) => Math.min(100, Math.max(0, ((v - lo) / (hi - lo)) * 100));
    const grad = (segs, lo, hi) => `linear-gradient(90deg,${segs.map((g) => `${g.color} ${pos(Number(g.from), lo, hi).toFixed(1)}%`).join(",")})`;
    const q = (sel) => this._root.querySelector(sel);
    q(".shc-cl-lbar.main").style.background = grad(cfg.segments || segments, min, max);
    q(".shc-cl-lbar.inner").style.background = grad(cfg.humidity_segments || CL_HUM_SEGMENTS, 0, 100);
    shcDegTicks(q(".shc-cl-scale.t"), min, max, Number(cfg.scale_step) || (max - min > 16 ? 4 : 2));
    q(".shc-cl-scale.h").innerHTML = [0, 20, 40, 60, 80, 100].map((h) => `<span style="left:${h}%">${h}%</span>`).join("");
    q(".cl-l-room").textContent = cfg.room_name || cfg.name;
  }

  // o: { temp, hum, set, humTarget, subHtml }
  _lineUpdate(o) {
    const cfg = this._config;
    const q = (sel) => this._root.querySelector(sel);
    const min = Number(cfg.min);
    const max = Number(cfg.max);
    const pos = (v, lo, hi) => `${Math.min(100, Math.max(0, ((v - lo) / (hi - lo)) * 100)).toFixed(2)}%`;
    q(".cl-l-mode").innerHTML = o.subHtml;
    q(".cl-l-temp").textContent = o.temp !== null ? clNum(o.temp) : "—";
    q(".cl-l-hum").textContent = o.hum !== null ? `${Math.round(o.hum)}%` : "";
    const nm = q(".shc-cl-ndl.main");
    nm.hidden = o.temp === null;
    if (o.temp !== null) nm.style.left = pos(o.temp, min, max);
    const noHum = o.hum === null && !cfg.humidity_entity;
    q(".shc-cl-lbar.inner").hidden = noHum;
    q(".shc-cl-scale.h").hidden = noHum;
    const ni = q(".shc-cl-ndl.inner");
    ni.hidden = o.hum === null;
    if (o.hum !== null) ni.style.left = pos(o.hum, 0, 100);
    const sp = q(".shc-cl-spt");
    sp.hidden = o.set === null || o.set === undefined;
    if (!sp.hidden) sp.style.left = pos(o.set, min, max);
    const ht = q(".shc-dv-htgt");
    ht.hidden = o.humTarget === null || o.humTarget === undefined;
    if (!ht.hidden) ht.style.left = pos(o.humTarget, 0, 100);
  }

  _commonBind() {
    shcBindGraph(this);
    const bind = (sel, fn) =>
      this._root.querySelectorAll(sel).forEach((el) =>
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          fn(e, el);
        }),
      );
    bind(".shc-ap-hero", () => this._moreInfo(this._config.entity));
    bind(".shc-cl-line", () => this._moreInfo(this._config.entity));
    return bind;
  }

  _setBadge(cls, label) {
    const badge = this._root.querySelector(".shc-ap-badge");
    badge.classList.remove("run", "standby", "off", "unavailable");
    badge.classList.add(cls);
    this._root.querySelector(".shc-ap-badge-label").textContent = label;
  }

  // opzione hide_when_offline: se il dispositivo e' scollegato resta solo una striscia bassa
  _applyCompact(unav) {
    const card = this._root.querySelector(".shc-ap-card");
    const compact = this._hideWhenOffline() && unav && !this._showFull;
    if (!unav) this._showFull = false;
    let mini = card.querySelector(".shc-dv-mini");
    // tornato online: via la striscia, altrimenti il suo badge resta il primo .shc-ap-badge
    // e _setBadge aggiornerebbe quello (nascosto) invece del badge della card
    if (!compact && mini) {
      mini.remove();
      mini = null;
    }
    if (compact && !mini) {
      mini = document.createElement("div");
      mini.className = "shc-dv-mini";
      mini.innerHTML = `<span class="shc-ap-chip shc-cl-chip">${card.querySelector(".shc-ap-chip")?.innerHTML || ""}</span>
        <span class="shc-dv-mini-txt"><b></b><small></small></span>
        <span class="shc-ap-badge unavailable"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label">OFFLINE</span></span>`;
      mini.addEventListener("click", () => this._openMini());
      card.prepend(mini);
    }
    card.classList.toggle("dv-compact", compact);
    if (!compact) return;
    const st = this._st();
    mini.querySelector("b").textContent = `${this._config.name} offline`;
    const since = st?.last_changed ? new Date(st.last_changed) : null;
    mini.querySelector("small").textContent = since && !isNaN(since)
      ? `Scollegato dal ${since.toLocaleString("it-IT", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}`
      : "Scollegato dalla corrente o dal Wi‑Fi";
  }

  // preferenza: config della card, oppure scelta fatta dal popup su questo dispositivo
  _prefKey() {
    return `shc-hide-offline:${this.localName}:${this._config.entity}`;
  }

  _hideWhenOffline() {
    try {
      const v = localStorage.getItem(this._prefKey());
      if (v !== null) return v === "1";
    } catch (e) {
      /* storage non disponibile */
    }
    return !!this._config.hide_when_offline;
  }

  // salva la scelta nella dashboard (serve un utente admin); se non si puo', la ricorda solo su questo dispositivo
  async _saveHideOption(value) {
    const type = `custom:${this.localName}`;
    let saved = false;
    try {
      const seg = location.pathname.split("/")[1];
      const urlPath = !seg || seg === "lovelace" ? null : seg;
      const conf = await this._hass.callWS({ type: "lovelace/config", url_path: urlPath });
      let found = 0;
      const walk = (o) => {
        if (Array.isArray(o)) o.forEach(walk);
        else if (o && typeof o === "object") {
          if (o.type === type && o.entity === this._config.entity) {
            if (value) o.hide_when_offline = true;
            else delete o.hide_when_offline;
            found++;
          }
          Object.values(o).forEach(walk);
        }
      };
      walk(conf);
      if (found) {
        await this._hass.callWS({ type: "lovelace/config/save", url_path: urlPath, config: conf });
        saved = true;
      }
    } catch (e) {
      saved = false;
    }
    try {
      if (saved) localStorage.removeItem(this._prefKey());
      else localStorage.setItem(this._prefKey(), value ? "1" : "0");
    } catch (e) {
      /* storage non disponibile */
    }
    this._config = { ...this._config, hide_when_offline: value };
    return saved;
  }

  _openMini() {
    const st = this._st();
    const since = st?.last_changed ? new Date(st.last_changed) : null;
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">${esc(this._config.name)}</div>
        ${this._row("Stato", `<span class="shc-ap-row-val" style="color:#ef4444;font-weight:800">Non raggiungibile</span>`)}
        ${since && !isNaN(since) ? this._row("Dal", this._valHtml(since.toLocaleString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }))) : ""}
        <p class="shc-cl-note">Spegni l'interruttore qui sotto per vedere sempre la card completa, anche quando il dispositivo è scollegato. Quando torna online la card completa ricompare comunque da sola.</p>
      </div>
      ${this._hidePrefHtml()}
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Adesso</div>
        ${this._row("Card completa", `<button type="button" class="shc-ap-action-btn" data-showfull="1">Mostra</button>`)}
        ${this._row("Scheda dell'entità", `<button type="button" class="shc-ap-action-btn" data-more="${esc(this._config.entity)}">Apri</button>`)}
      </div>`;
    const overlay = this._openDialog(this._config.name, html);
    overlay.querySelector("[data-showfull]").addEventListener("click", () => {
      overlay.hidden = true;
      this._showFull = true;
      if (this._hass) this.hass = this._hass;
    });
  }

  _setWarn(text) {
    const warn = this._root.querySelector(".shc-ap-warn");
    warn.hidden = !text;
    warn.textContent = text || "";
  }

  getCardSize() {
    return this._root?.querySelector(".dv-compact") ? 1 : 8;
  }
}

// --- Stufetta ---------------------------------------------------------------

const HT_SEGMENTS = [
  { from: 15, color: "#1565c0" },
  { from: 18, color: "#039be5" },
  { from: 20, color: "#00c853" },
  { from: 22, color: "#43a047" },
  { from: 24, color: "#fb8c00" },
  { from: 26, color: "#f4511e" },
  { from: 30, color: "#d32f2f" },
];

const HT_LEVELS = { eco: "Eco", H1: "H1", H2: "H2", H3: "H3" };

function htHeroSvg(id) {
  const wave = (side, y, cls) => {
    const x = side < 0 ? 86 : 154;
    const d = side < 0 ? `M${x} ${y}c-8-6-16 6-24 0s-16-6-24 0s-16 6-24 0` : `M${x} ${y}c8-6 16 6 24 0s16-6 24 0s16 6 24 0`;
    return `<path class="ht-wave ${cls}" d="${d}"/>`;
  };
  return `<svg class="shc-dv-svg" viewBox="0 0 240 160" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shht-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4"/></filter>
      <linearGradient id="shht-body-${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c7d1dd"/><stop offset=".35" stop-color="#ffffff"/><stop offset=".7" stop-color="#eef2f6"/><stop offset="1" stop-color="#b9c4d1"/></linearGradient>
      <radialGradient id="shht-glow-${id}" cx=".5" cy=".5" r=".7"><stop offset="0" stop-color="#fff7ed"/><stop offset=".45" stop-color="#fb923c"/><stop offset="1" stop-color="#c2410c"/></radialGradient>
    </defs>
    <ellipse cx="120" cy="151" rx="46" ry="6" fill="#0f172a" opacity=".16" filter="url(#shht-blur-${id})"/>
    ${wave(-1, 74, "l2")}${wave(-1, 98, "l1")}${wave(-1, 122, "l3")}
    ${wave(1, 74, "l2")}${wave(1, 98, "l1")}${wave(1, 122, "l3")}
    <g>${[106, 120, 134].map((x, i) => `<path class="ht-rise" style="animation-delay:${(i * 0.6).toFixed(1)}s" d="M${x} 24c-4-4 4-8 0-12"/>`).join("")}</g>
    <g class="ht-body">
      <rect x="90" y="28" width="60" height="120" rx="20" fill="url(#shht-body-${id})" stroke="#8fa0b3" stroke-opacity=".6" stroke-width="1.5"/>
      <rect x="100" y="36" width="40" height="16" rx="5" fill="#0f172a" opacity=".88"/>
      <text class="ht-disp" x="120" y="48.5" text-anchor="middle">--</text>
      <rect x="99" y="58" width="42" height="80" rx="9" fill="#1f2937"/>
      <rect class="ht-glow" x="99" y="58" width="42" height="80" rx="9" fill="url(#shht-glow-${id})"/>
      <g stroke="#475569" stroke-width="2.6" stroke-linecap="round">${[66, 76, 86, 96, 106, 116, 126].map((y) => `<path d="M105 ${y}h30"/>`).join("")}</g>
      <rect x="104" y="141" width="32" height="5" rx="2.5" fill="#94a3b8" opacity=".7"/>
    </g>
  </svg>`;
}

class ShcHeaterCard extends ShcDeviceCardBase {
  setConfig(config) {
    if (!config.entity || !String(config.entity).startsWith("climate.")) throw new Error("entity è obbligatorio (climate.xxx)");
    this._config = {
      name: "Stufetta",
      layout: "centrato",
      min: 15,
      max: 30,
      scale_step: 1,
      threshold_entity: "input_number.stufetta_soglia_bagno",
      reduced_level_entity: "input_select.stufetta_livello_ridotto",
      auto_entity: "input_boolean.stufetta_gestione_automatica",
      start_level: "H3",
      ...config,
      switches: Array.isArray(config.switches) ? config.switches : [],
      diagnostics: Array.isArray(config.diagnostics) ? config.diagnostics : [],
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._uid = this._uid || Math.random().toString(36).slice(2, 8);
    this._root.innerHTML = `<style>${STYLE}${CL_STYLE}${DV_STYLE}</style>
      <article class="shc-ap-card shc-cl-card cl-img shc-ht-card">
        <div class="shc-ap-top">
          <span class="shc-ap-chip shc-cl-chip"><ha-icon icon="mdi:radiator"></ha-icon></span>
          <span class="shc-ap-headings"><span class="shc-ap-name"></span></span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Gestione automatica">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-dv-opts" title="Impostazioni"><ha-icon icon="mdi:tune-variant"></ha-icon></button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-dv-info" title="Stato">${ICON_INFO}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-cl-herocol">
            <div class="shc-ap-hero">${htHeroSvg(this._uid)}</div>
            ${this._lineHtml("Temperatura e umidità della stanza, soglia")}
          </div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Stufetta</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:home-thermometer" style="--mdc-icon-size:16px"></ha-icon></span><small>Stanza</small></span><b class="ht-room">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:water-percent" style="--mdc-icon-size:16px"></ha-icon></span><small>Umidità</small></span><b class="ht-hum">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:fire" style="--mdc-icon-size:16px"></ha-icon></span><small>Livello</small></span><b class="ht-lvl">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:thermometer-high" style="--mdc-icon-size:16px"></ha-icon></span><small>Interna</small></span><b class="ht-int">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:thermometer-chevron-up" style="--mdc-icon-size:16px"></ha-icon></span><small>Soglia</small></span><b class="ht-thr">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:fire-off" style="--mdc-icon-size:16px"></ha-icon></span><small>Poi</small></span><b class="ht-red">—</b></div>
            </div>
          </div>
        </div>
        <div class="shc-cl-ctrl">
          <button type="button" class="shc-cl-btn power" title="Accendi / spegni"><ha-icon icon="mdi:power"></ha-icon></button>
          <button type="button" class="shc-cl-btn" data-step="-1" title="Meno"><ha-icon icon="mdi:minus"></ha-icon></button>
          <div class="shc-cl-set"><span class="cl-set-val">—</span><small class="ht-set-cap">soglia</small></div>
          <button type="button" class="shc-cl-btn" data-step="1" title="Più"><ha-icon icon="mdi:plus"></ha-icon></button>
        </div>
        <div class="shc-cl-ctrl shc-ht-levels"></div>
        <div class="shc-cl-sched" hidden></div>
        <div class="shc-ap-warn" hidden></div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    this._lineBuild(HT_SEGMENTS);
    this._root.querySelector(".shc-cl-track").classList.toggle("sep", this._config.bar_gap !== false);
    const bind = this._commonBind();
    bind(".shc-ap-settings", () => this._openAuto());
    bind(".shc-cl-sched", () => this._openAuto());
    bind(".shc-dv-opts", () => this._openOptions());
    bind(".shc-dv-info", () => this._openInfo());
    bind(".shc-cl-btn.power", () => {
      const st = this._st();
      if (!st || st.state === "unavailable") return;
      if (st.state === "off") this._call("climate", "set_hvac_mode", { entity_id: this._config.entity, hvac_mode: "heat" });
      else this._call("climate", "turn_off", { entity_id: this._config.entity });
    });
    bind(".shc-cl-ctrl [data-step]", (e, b) => this._stepSet(Number(b.dataset.step)));
  }

  // la soglia del bagno se c'e' l'helper, altrimenti la temperatura della stufetta
  _setEntity() {
    return this._has(this._config.threshold_entity) ? this._config.threshold_entity : null;
  }

  _stepSet(dir) {
    const st = this._st();
    const thr = this._setEntity();
    let base, step, lo, hi;
    if (thr) {
      const s = this._hass.states[thr];
      step = Number(s.attributes.step) || 1;
      lo = Number(s.attributes.min);
      hi = Number(s.attributes.max);
      base = this._pending ?? Number(s.state);
    } else {
      if (!st || st.state === "unavailable") return;
      step = Number(st.attributes.target_temp_step) || 1;
      lo = Number(st.attributes.min_temp) || 5;
      hi = Number(st.attributes.max_temp) || 35;
      base = this._pending ?? Number(st.attributes.temperature);
    }
    if (!Number.isFinite(base)) return;
    const t = Math.min(hi, Math.max(lo, Math.round((base + dir * step) / step) * step));
    this._pending = t;
    this._root.querySelector(".cl-set-val").textContent = `${clNum(t, step < 1 ? 1 : 0)}°`;
    const sp = this._root.querySelector(".shc-cl-spt");
    sp.hidden = false;
    sp.style.left = `${Math.min(100, Math.max(0, ((t - this._config.min) / (this._config.max - this._config.min)) * 100)).toFixed(2)}%`;
    clearTimeout(this._stepTimer);
    clearTimeout(this._pendingReset);
    this._stepTimer = setTimeout(() => {
      if (thr) this._call(thr.split(".")[0], "set_value", { entity_id: thr, value: t });
      else this._call("climate", "set_temperature", { entity_id: this._config.entity, temperature: t });
      this._pendingReset = setTimeout(() => (this._pending = null), 2500);
    }, 700);
  }

  _setLevel(level) {
    const st = this._st();
    if (!st || st.state === "unavailable") return;
    const e = this._config.entity;
    if (st.state !== "heat") {
      // accesa in riscaldamento; il package porta a H3 dopo 2 s, il livello scelto arriva dopo
      this._call("climate", "set_hvac_mode", { entity_id: e, hvac_mode: "heat" });
      setTimeout(() => this._call("climate", "set_preset_mode", { entity_id: e, preset_mode: level }), 3500);
    } else this._call("climate", "set_preset_mode", { entity_id: e, preset_mode: level });
  }

  _graphSeries() {
    const cfg = this._config;
    const s = [];
    if (cfg.temperature_entity) s.push({ key: "temp", entity: cfg.temperature_entity, label: "Temperatura stanza", color: "#f97316" });
    if (cfg.humidity_entity) s.push({ key: "humidity", entity: cfg.humidity_entity, label: "Umidità", color: "#0ea5e9" });
    if (cfg.power_entity) s.push({ key: "power", entity: cfg.power_entity, label: "Potenza", color: "#16a34a" });
    return s;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;
    const hs = hass.states;
    const st = this._st();
    const q = (sel) => this._root.querySelector(sel);
    const unav = !st || ["unavailable", "unknown"].includes(st.state);
    const mode = unav ? "unavailable" : st.state;
    const a = st?.attributes || {};
    const preset = a.preset_mode && a.preset_mode !== "none" ? a.preset_mode : null;
    const lvlNum = { eco: 1, H1: 1, H2: 2, H3: 3 }[preset] || 3;
    const oscOn = cfg.oscillation_entity ? this._on(cfg.oscillation_entity) : a.swing_mode === "on";

    this._applyCompact(unav);
    const card = q(".shc-ap-card");
    card.classList.remove("is-run", "is-off", "is-unavailable", "ht-heat", "ht-fan", "cl-off", "lvl-1", "lvl-2", "lvl-3", "dv-osc");
    card.classList.add(unav ? "is-unavailable" : mode === "off" ? "is-off" : "is-run");
    if (mode === "heat") card.classList.add("ht-heat", `lvl-${lvlNum}`);
    else if (mode === "fan_only") card.classList.add("ht-fan", "lvl-2");
    else card.classList.add("cl-off");
    if (oscOn) card.classList.add("dv-osc");
    card.style.setProperty("--ht-glow", { 1: ".5", 2: ".75", 3: "1" }[lvlNum]);

    const room = this._val(cfg.temperature_entity) ?? (Number.isFinite(Number(a.current_temperature)) ? Number(a.current_temperature) : null);
    const hum = this._val(cfg.humidity_entity);
    const inner = Number.isFinite(Number(a.current_temperature)) ? Number(a.current_temperature) : null;
    const thrE = this._setEntity();
    const thr = thrE ? this._val(thrE) : Number.isFinite(Number(a.temperature)) ? Number(a.temperature) : null;
    const red = hs[cfg.reduced_level_entity]?.state;
    const auto = this._has(cfg.auto_entity) ? this._on(cfg.auto_entity) : false;

    this._setBadge(unav ? "unavailable" : mode === "off" ? "off" : "run", unav ? "OFFLINE" : mode === "off" ? "SPENTA" : mode === "fan_only" ? "VENTILA" : `RISCALDA ${HT_LEVELS[preset] || ""}`.trim());
    const disp = q(".ht-disp");
    disp.textContent = unav ? "--" : mode === "off" ? "OFF" : mode === "fan_only" ? "FAN" : HT_LEVELS[preset] || "ON";

    q(".ht-room").textContent = room !== null ? `${clNum(room)} °C` : "—";
    q(".ht-hum").textContent = hum !== null ? `${Math.round(hum)} %` : "—";
    q(".ht-lvl").textContent = unav ? "—" : mode === "off" ? "Spenta" : mode === "fan_only" ? "Ventila" : HT_LEVELS[preset] || "—";
    q(".ht-int").textContent = inner !== null ? `${clNum(inner, 0)} °C` : "—";
    q(".ht-thr").textContent = thr !== null ? `${clNum(thr, 0)} °C` : "—";
    q(".ht-red").textContent = auto && red ? red : auto ? "—" : "Manuale";
    q(".ht-hum").closest(".shc-ap-cycle-row").hidden = !cfg.humidity_entity;
    q(".ht-int").closest(".shc-ap-cycle-row").hidden = inner === null || !cfg.temperature_entity;
    q(".ht-red").closest(".shc-ap-cycle-row").hidden = !this._has(cfg.reduced_level_entity);

    const modeTxt = unav ? "Non raggiungibile" : mode === "off" ? "Spenta" : mode === "fan_only" ? "Ventilazione" : `Riscalda ${HT_LEVELS[preset] || ""}`.trim();
    const thrTxt = thr !== null ? ` · ${thrE ? "soglia" : "impostata"} <em>${esc(clNum(thr, 0))}°</em>` : "";
    this._lineUpdate({ temp: room, hum, set: this._pending ?? thr, subHtml: `${esc(modeTxt)}${thrTxt}` });

    // comandi
    if (this._pending == null) q(".cl-set-val").textContent = thr !== null ? `${clNum(thr, 0)}°` : "—";
    q(".ht-set-cap").textContent = thrE ? "soglia" : "impostata";
    const pw = q(".shc-cl-btn.power");
    pw.classList.toggle("on", !unav && mode !== "off");
    pw.disabled = unav;
    this._root.querySelectorAll(".shc-cl-ctrl [data-step]").forEach((b) => (b.disabled = !thrE && unav));
    const presets = (a.preset_modes || ["H1", "H2", "H3", "eco"]).filter((p) => p !== "none");
    const order = ["H1", "H2", "H3", "eco"];
    presets.sort((x, y) => (order.indexOf(x) + 99) % 99 - (order.indexOf(y) + 99) % 99);
    const hasFan = (a.hvac_modes || []).includes("fan_only");
    const key = `${presets.join()}|${mode}|${preset}|${oscOn}|${unav}`;
    if (key !== this._lvlKey) {
      this._lvlKey = key;
      const box = q(".shc-ht-levels");
      box.innerHTML =
        presets
          .map((p) => `<button type="button" class="shc-cl-btn lvl${p === "eco" ? " eco" : ""}${mode === "heat" && p === preset ? " on" : ""}" data-level="${esc(p)}" title="${esc(p === "eco" ? "Eco" : `Livello ${p}`)}"${unav ? " disabled" : ""}>${p === "eco" ? `<ha-icon icon="mdi:leaf"></ha-icon>` : `<span class="shc-dv-txt">${esc(p)}</span>`}</button>`)
          .join("") +
        `<span class="shc-cl-sep"></span>` +
        (hasFan ? `<button type="button" class="shc-cl-btn fanonly${mode === "fan_only" ? " on" : ""}" data-fanonly="1" title="Solo ventilazione"${unav ? " disabled" : ""}><ha-icon icon="mdi:fan"></ha-icon></button>` : "") +
        `<button type="button" class="shc-cl-btn osc${oscOn ? " on" : ""}" data-osc="1" title="Oscillazione"${unav ? " disabled" : ""}><ha-icon icon="mdi:arrow-left-right"></ha-icon></button>`;
      box.querySelectorAll("[data-level]").forEach((b) =>
        b.addEventListener("click", (e) => {
          e.stopPropagation();
          this._setLevel(b.dataset.level);
        }),
      );
      box.querySelector("[data-fanonly]")?.addEventListener("click", (e) => {
        e.stopPropagation();
        const cur = this._st()?.state;
        this._call("climate", "set_hvac_mode", { entity_id: cfg.entity, hvac_mode: cur === "fan_only" ? "off" : "fan_only" });
      });
      box.querySelector("[data-osc]").addEventListener("click", (e) => {
        e.stopPropagation();
        if (cfg.oscillation_entity) this._call("switch", "toggle", { entity_id: cfg.oscillation_entity });
        else this._call("climate", "set_swing_mode", { entity_id: cfg.entity, swing_mode: this._st().attributes.swing_mode === "on" ? "off" : "on" });
      });
    }

    // pillola gestione automatica
    const sched = q(".shc-cl-sched");
    sched.hidden = !this._has(cfg.auto_entity);
    sched.innerHTML = auto
      ? `<span><ha-icon icon="mdi:radiator"></ha-icon>Automatica: parte in ${esc(cfg.start_level)}${thr !== null ? `, a ${esc(clNum(thr, 0))}° passa a ${esc(red || "—")}` : ""}</span>`
      : `<span><ha-icon icon="mdi:hand-back-right-outline" style="color:var(--shc-dim)"></ha-icon>Gestione automatica spenta</span>`;

    const errors = cfg.diagnostics.filter((d) => d.alarm && hs[d.entity]?.state === "on");
    card.classList.toggle("has-alarm", errors.length > 0);
    this._setWarn(
      unav
        ? "⚠ Stufetta non raggiungibile: controlla che sia collegata alla corrente e al Wi‑Fi"
        : errors.length
          ? `⚠ ${errors.map((d) => d.name || hs[d.entity]?.attributes?.friendly_name || d.entity).join(", ")}`
          : "",
    );
    this._liveRefresh([cfg.entity, cfg.auto_entity, cfg.threshold_entity, cfg.reduced_level_entity, ...cfg.switches.map((s) => s.entity)]);
  }

  // ⚙️ Gestione automatica: parte in H3, a soglia scende a H1/H2
  _openAuto() {
    const cfg = this._config;
    const hs = this._hass.states;
    if (!this._has(cfg.auto_entity) && !this._has(cfg.threshold_entity)) {
      this._openDialog("Gestione automatica", `<div class="shc-ap-sec"><p class="shc-cl-note">Nessuna gestione automatica configurata. Copia il package <b>stufetta.yaml</b> (vedi guida) oppure indica i tuoi helper nelle opzioni <code>auto_entity</code>, <code>threshold_entity</code>, <code>reduced_level_entity</code>.</p></div>`);
      return;
    }
    const thr = hs[cfg.threshold_entity];
    const sel = hs[cfg.reduced_level_entity];
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Gestione automatica</div>
        ${this._row("Attiva", this._switchHtml(cfg.auto_entity))}
        ${thr ? this._row("Soglia della stanza", this._stepperHtml(cfg.threshold_entity, `${clNum(thr.state, 0)} °C`)) : ""}
        ${sel ? `${this._row("Raggiunta la soglia passa a", "")}${this._chipsHtml((sel.attributes.options || []).map((o) => ({ label: o, on: o === sel.state, attrs: `data-select="${esc(cfg.reduced_level_entity)}" data-option="${esc(o)}"`, icon: "mdi:fire" })))}` : ""}
      </div>
      <p class="shc-cl-note">Ogni accensione (dalla card, dall'app o con Alexa) parte in <b>${esc(cfg.start_level)}</b>, il massimo. Quando il sensore della stanza arriva alla soglia la stufetta scende al livello scelto. Per tornare in ${esc(cfg.start_level)} basta spegnerla e riaccenderla, oppure toccare ${esc(cfg.start_level)} sulla card. La temperatura usata è quella del sensore della stanza, non quella interna della stufetta, che vicino alla resistenza legge sempre alta.</p>`;
    this._openDialog("Gestione automatica", html, this._reopenUnlessTyping(() => this._openAuto()));
  }

  // 🎛️ Impostazioni: interruttori della stufetta
  _openOptions() {
    const cfg = this._config;
    const st = this._st();
    const a = st?.attributes || {};
    const rows = cfg.switches.filter((s) => this._has(s.entity)).map((s) => this._row(s.name || this._hass.states[s.entity].attributes.friendly_name, this._switchHtml(s.entity))).join("");
    const html = `
      ${rows ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Stufetta</div>${rows}</div>` : ""}
      ${Number.isFinite(Number(a.temperature)) && this._setEntity()
        ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Termostato interno</div>${this._row("Temperatura obiettivo", `<span class="shc-cl-stepper"><button type="button" class="shc-at-pm" data-tt="-1">−</button><span>${esc(clNum(a.temperature, 0))} °C</span><button type="button" class="shc-at-pm" data-tt="1">+</button></span>`)}
          <p class="shc-cl-note">È il termostato della stufetta stessa (sensore interno, legge alto). La gestione automatica usa invece la soglia della stanza.</p></div>`
        : ""}
      ${!rows ? `<p class="shc-cl-note">Nessun interruttore configurato: aggiungili nell'opzione <code>switches</code> (oscillazione, blocco bambini, suono…).</p>` : ""}`;
    const overlay = this._openDialog("Impostazioni", html, () => this._openOptions());
    overlay.querySelectorAll("[data-tt]").forEach((b) =>
      b.addEventListener("click", () => {
        const s = this._st();
        const step = Number(s.attributes.target_temp_step) || 1;
        const v = Math.min(Number(s.attributes.max_temp) || 35, Math.max(Number(s.attributes.min_temp) || 5, Number(s.attributes.temperature) + step * Number(b.dataset.tt)));
        this._call("climate", "set_temperature", { entity_id: cfg.entity, temperature: v });
      }),
    );
  }

  // ℹ️ Stato
  _openInfo() {
    const cfg = this._config;
    const hs = this._hass.states;
    const st = this._st();
    const a = st?.attributes || {};
    const fmtTime = (iso) => (iso ? new Date(iso).toLocaleString("it-IT", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "mai");
    const diag = cfg.diagnostics
      .map((d) => {
        const s = hs[d.entity];
        const val = !s ? "n/d" : d.entity.startsWith("automation.") ? `ultima volta ${fmtTime(s.attributes.last_triggered)}` : `${s.state}${s.attributes.unit_of_measurement ? ` ${s.attributes.unit_of_measurement}` : ""}`;
        const bad = d.alarm && s?.state === "on";
        return `<div class="shc-ap-row" data-more="${esc(d.entity)}" style="cursor:pointer"><span class="shc-ap-row-label">${esc(d.name || s?.attributes?.friendly_name || d.entity)}</span><span class="shc-ap-row-val" style="${bad ? "color:#ef4444;font-weight:800" : ""}">${esc(val)}</span></div>`;
      })
      .join("");
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Stufetta</div>
        ${this._row("Stato", this._valHtml(!st || st.state === "unavailable" ? "Non raggiungibile" : st.state === "off" ? "Spenta" : st.state === "fan_only" ? "Ventilazione" : "Riscalda"))}
        ${a.preset_mode && a.preset_mode !== "none" ? this._row("Livello", this._valHtml(HT_LEVELS[a.preset_mode] || a.preset_mode)) : ""}
        ${a.current_temperature !== undefined ? this._row("Temperatura interna", this._valHtml(`${clNum(a.current_temperature, 0)} °C`)) : ""}
        ${a.model ? this._row("Modello", this._valHtml(a.model)) : ""}
        ${st ? this._row("Ultimo cambio", this._valHtml(fmtTime(st.last_changed))) : ""}
        ${this._row("Scheda completa", `<button type="button" class="shc-ap-action-btn" data-more="${esc(cfg.entity)}">Apri</button>`)}
      </div>
      ${diag ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Automazioni e diagnostica</div>${diag}</div>` : ""}
      ${this._hidePrefHtml()}`;
    this._openDialog("Stato", html, () => this._openInfo());
  }

  static getConfigElement() {
    return document.createElement("shc-heater-card-editor");
  }

  static getStubConfig(hass) {
    const e = Object.keys(hass?.states || {}).find((x) => x.startsWith("climate.")) || "climate.stufetta";
    return { name: "Stufetta", entity: e };
  }
}

class ShcHeaterCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "Stufetta" },
        { key: "entity", label: "Stufetta", domain: ["climate"], required: true },
        { key: "room_name", label: "Nome stanza (titolo della gauge)", kind: "text", placeholder: "Bagno" },
        { key: "temperature_entity", label: "Sensore temperatura stanza", domain: ["sensor"] },
        { key: "humidity_entity", label: "Sensore umidità stanza", domain: ["sensor"] },
        { key: "oscillation_entity", label: "Interruttore oscillazione (se separato)", domain: ["switch"] },
        { key: "power_entity", label: "Potenza (W) della presa", domain: ["sensor"] },
      ]},
      { title: "Gestione automatica (helper del package stufetta.yaml)", fields: [
        { key: "auto_entity", label: "Gestione automatica attiva", domain: ["input_boolean"] },
        { key: "threshold_entity", label: "Soglia temperatura stanza", domain: ["input_number"] },
        { key: "reduced_level_entity", label: "Livello dopo la soglia", domain: ["input_select"] },
        { key: "start_level", label: "Livello di partenza", kind: "text", placeholder: "H3" },
      ]},
      { title: "Altro", fields: [
        { key: "switches", label: "Interruttori (popup Impostazioni)", kind: "list", itemFields: [
          { key: "entity", label: "Interruttore", kind: "entity", domain: ["switch"] },
          { key: "name", label: "Nome", kind: "text" },
        ]},
        { key: "hide_when_offline", label: "Nascondi se scollegata dalla corrente", kind: "bool", hint: "Quando la card non riceve dati resta solo una striscia bassa con il nome e OFFLINE. Toccala per i dettagli." },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-heater-card-editor", ShcHeaterCardEditor);
customElements.define("shc-heater-card", ShcHeaterCard);
window.customCards.push({
  type: "shc-heater-card",
  name: "Stufetta",
  description: "Stufetta animata con gauge dritta, livelli H1/H2/H3/Eco, soglia della stanza e gestione automatica",
  author: "Simonz82",
});

// --- Ventilatore ---------------------------------------------------------------

const FN_SEGMENTS = [
  { from: 15, color: "#1565c0" },
  { from: 20, color: "#039be5" },
  { from: 23, color: "#00c853" },
  { from: 26, color: "#7cb342" },
  { from: 29, color: "#fb8c00" },
  { from: 32, color: "#f4511e" },
  { from: 35, color: "#d32f2f" },
];

const FN_PRESETS = {
  normal: { label: "Normale", icon: "mdi:fan" },
  natural: { label: "Naturale", icon: "mdi:leaf" },
  sleep: { label: "Notte", icon: "mdi:power-sleep" },
  auto: { label: "Auto", icon: "mdi:fan-auto" },
  turbo: { label: "Turbo", icon: "mdi:fan-plus" },
  eco: { label: "Eco", icon: "mdi:leaf-circle-outline" },
};

const FN_DEFAULT_SCHEDULE = {
  on_enabled: "input_boolean.ventilatore_prog_accensione",
  on_time: "input_datetime.ventilatore_orario_accensione",
  off_enabled: "input_boolean.ventilatore_prog_spegnimento",
  off_time: "input_datetime.ventilatore_orario_spegnimento",
  auto_day: "input_boolean.ventilatore_auto_giorno",
};

function fnHeroSvg(id) {
  const blade = (r) => `<path transform="rotate(${r} 120 58)" d="M120 58C112 44 110 26 120 14C132 22 132 42 120 58Z"/>`;
  const mist = [
    [96, 62, "ml", 0], [92, 74, "ml", 0.9], [100, 50, "ml", 1.7], [144, 62, "mr", 0.4], [148, 74, "mr", 1.3], [140, 50, "mr", 2.1],
  ];
  return `<svg class="shc-dv-svg" viewBox="0 0 240 160" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shfn-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4"/></filter>
      <linearGradient id="shfn-body-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#e9eef4"/><stop offset="1" stop-color="#c7d1dd"/></linearGradient>
      <radialGradient id="shfn-grill-${id}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e2e8f0" stop-opacity=".2"/><stop offset="1" stop-color="#94a3b8" stop-opacity=".35"/></radialGradient>
    </defs>
    <ellipse class="fn-light" cx="120" cy="150" rx="52" ry="9" fill="#38bdf8" filter="url(#shfn-blur-${id})"/>
    <ellipse cx="120" cy="152" rx="40" ry="5" fill="#0f172a" opacity=".16" filter="url(#shfn-blur-${id})"/>
    <g>${[[58, 40, "M58 40c-10-4-20 4-30 0"], [60, 76, "M60 76c-10-4-20 4-30 0"], [182, 40, "M182 40c10-4 20 4 30 0"], [180, 76, "M180 76c10-4 20 4 30 0"]].map(([, , d]) => `<path class="fn-air" d="${d}"/>`).join("")}</g>
    <rect x="115" y="104" width="10" height="40" rx="4" fill="url(#shfn-body-${id})" stroke="#8fa0b3" stroke-opacity=".6"/>
    <ellipse cx="120" cy="146" rx="32" ry="7" fill="url(#shfn-body-${id})" stroke="#8fa0b3" stroke-opacity=".6" stroke-width="1.2"/>
    <rect x="104" y="138" width="32" height="6" rx="3" fill="#0f172a" opacity=".82"/>
    <circle class="fn-led" cx="120" cy="141" r="1.6" fill="#22c55e"/>
    <g class="fn-head">
      <circle cx="120" cy="58" r="50" fill="url(#shfn-grill-${id})" stroke="url(#shfn-body-${id})" stroke-width="6"/>
      <circle cx="120" cy="58" r="50" fill="none" stroke="#8fa0b3" stroke-opacity=".55" stroke-width="1"/>
      <g class="fn-blades" fill="#94a3b8" fill-opacity=".85" stroke="#64748b" stroke-width=".8">${blade(0)}${blade(120)}${blade(240)}</g>
      <g fill="none" stroke="#cbd5e1" stroke-opacity=".7" stroke-width="1"><circle cx="120" cy="58" r="36"/><circle cx="120" cy="58" r="22"/></g>
      <g stroke="#cbd5e1" stroke-opacity=".55" stroke-width="1">${[0, 30, 60, 90, 120, 150].map((r) => `<path transform="rotate(${r} 120 58)" d="M120 9v98"/>`).join("")}</g>
      <circle cx="120" cy="58" r="9" fill="url(#shfn-body-${id})" stroke="#8fa0b3" stroke-opacity=".7"/>
      <g class="fn-mist">${mist.map(([x, y, c, d]) => `<circle class="${c}" cx="${x}" cy="${y}" r="3.2" style="animation-delay:${d}s"/>`).join("")}</g>
    </g>
  </svg>`;
}

class ShcFanCard extends ShcDeviceCardBase {
  setConfig(config) {
    if (!config.entity || !String(config.entity).startsWith("fan.")) throw new Error("entity è obbligatorio (fan.xxx)");
    this._config = {
      name: "Ventilatore",
      layout: "centrato",
      min: 15,
      max: 35,
      cleaning_hours: 100,
      ...config,
      schedule: { ...FN_DEFAULT_SCHEDULE, ...(config.schedule || {}) },
      switches: Array.isArray(config.switches) ? config.switches : [],
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._uid = this._uid || Math.random().toString(36).slice(2, 8);
    this._root.innerHTML = `<style>${STYLE}${CL_STYLE}${DV_STYLE}</style>
      <article class="shc-ap-card shc-cl-card cl-img shc-fn-card">
        <div class="shc-ap-top">
          <span class="shc-ap-chip shc-cl-chip"><ha-icon icon="mdi:fan"></ha-icon></span>
          <span class="shc-ap-headings"><span class="shc-ap-name"></span></span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Programmazione">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-dv-mist" title="Nebbia e luce"><ha-icon icon="mdi:weather-fog"></ha-icon></button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-dv-info" title="Stato e manutenzione">${ICON_INFO}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-cl-herocol">
            <div class="shc-ap-hero">${fnHeroSvg(this._uid)}</div>
            ${this._lineHtml("Temperatura e umidità della stanza, umidità obiettivo")}
          </div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Ventilatore</span>
            <div class="shc-ap-cycle-list">
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:home-thermometer" style="--mdc-icon-size:16px"></ha-icon></span><small>Stanza</small></span><b class="fn-room">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:water-percent" style="--mdc-icon-size:16px"></ha-icon></span><small>Umidità</small></span><b class="fn-hum">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:speedometer" style="--mdc-icon-size:16px"></ha-icon></span><small>Velocità</small></span><b class="fn-speed">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:fan" style="--mdc-icon-size:16px"></ha-icon></span><small>Modalità</small></span><b class="fn-preset">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:weather-fog" style="--mdc-icon-size:16px"></ha-icon></span><small>Nebbia</small></span><b class="fn-mistv">—</b></div>
              <div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="mdi:broom" style="--mdc-icon-size:16px"></ha-icon></span><small>Pulizia</small></span><b class="fn-clean">—</b></div>
            </div>
          </div>
        </div>
        <div class="shc-cl-ctrl">
          <button type="button" class="shc-cl-btn power" title="Accendi / spegni"><ha-icon icon="mdi:power"></ha-icon></button>
          <button type="button" class="shc-cl-btn" data-step="-1" title="Più lento"><ha-icon icon="mdi:minus"></ha-icon></button>
          <div class="shc-cl-set"><span class="cl-set-val">—</span><small>velocità</small></div>
          <button type="button" class="shc-cl-btn" data-step="1" title="Più veloce"><ha-icon icon="mdi:plus"></ha-icon></button>
        </div>
        <div class="shc-cl-ctrl shc-fn-presets"></div>
        <div class="shc-cl-sched" hidden></div>
        <div class="shc-ap-warn" hidden></div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    this._lineBuild(FN_SEGMENTS);
    const bind = this._commonBind();
    bind(".shc-ap-settings", () => this._openSchedule());
    bind(".shc-cl-sched", () => this._openSchedule());
    bind(".shc-dv-mist", () => this._openMist());
    bind(".shc-dv-info", () => this._openInfo());
    bind(".shc-cl-btn.power", () => {
      const st = this._st();
      if (!st || st.state === "unavailable") return;
      this._call("fan", st.state === "on" ? "turn_off" : "turn_on", { entity_id: this._config.entity });
    });
    bind(".shc-cl-ctrl [data-step]", (e, b) => this._stepSpeed(Number(b.dataset.step)));
  }

  _speedStep() {
    const s = Number(this._st()?.attributes?.percentage_step);
    return Number.isFinite(s) && s > 0 ? s : 100 / 12;
  }

  _speedText(pct) {
    if (pct === null || pct === undefined || !Number.isFinite(Number(pct))) return "—";
    const step = this._speedStep();
    const levels = Math.round(100 / step);
    return levels <= 12 && this._config.show_levels !== false ? `${Math.max(1, Math.round(pct / step))}/${levels}` : `${Math.round(pct)}%`;
  }

  _stepSpeed(dir) {
    const st = this._st();
    if (!st || st.state === "unavailable") return;
    const step = this._speedStep();
    const base = this._pending ?? (st.state === "on" ? Number(st.attributes.percentage) || 0 : 0);
    const t = Math.min(100, Math.max(step, Math.round((base + dir * step) / step) * step));
    this._pending = t;
    this._root.querySelector(".cl-set-val").textContent = this._speedText(t);
    clearTimeout(this._stepTimer);
    clearTimeout(this._pendingReset);
    this._stepTimer = setTimeout(() => {
      // set_percentage accende anche il ventilatore se era spento
      this._call("fan", "set_percentage", { entity_id: this._config.entity, percentage: Math.round(t) });
      this._pendingReset = setTimeout(() => (this._pending = null), 2500);
    }, 700);
  }

  _graphSeries() {
    const cfg = this._config;
    const s = [];
    if (cfg.temperature_entity) s.push({ key: "temp", entity: cfg.temperature_entity, label: "Temperatura stanza", color: "#f97316" });
    if (cfg.humidity_entity) s.push({ key: "humidity", entity: cfg.humidity_entity, label: "Umidità", color: "#0ea5e9" });
    if (cfg.power_entity) s.push({ key: "power", entity: cfg.power_entity, label: "Potenza", color: "#16a34a" });
    return s;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;
    const hs = hass.states;
    const st = this._st();
    const q = (sel) => this._root.querySelector(sel);
    const unav = !st || ["unavailable", "unknown"].includes(st.state);
    const on = !unav && st.state === "on";
    const a = st?.attributes || {};
    const pct = on && Number.isFinite(Number(a.percentage)) ? Number(a.percentage) : null;
    const mistOn = this._on(cfg.mist_entity);
    const lightSt = hs[cfg.light_entity];
    const humidify = cfg.humidify_entity ? this._on(cfg.humidify_entity) : mistOn;
    const waterEmpty = this._on(cfg.water_entity);
    const cleanH = this._val(cfg.cleaning_entity);
    const needClean = cleanH !== null && cleanH >= Number(cfg.cleaning_hours);

    this._applyCompact(unav);
    const card = q(".shc-ap-card");
    card.classList.remove("is-run", "is-off", "is-unavailable", "cl-off", "dv-osc", "fn-mist-on", "fn-light-on", "has-alarm");
    card.classList.add(unav ? "is-unavailable" : on ? "is-run" : "is-off");
    if (!on) card.classList.add("cl-off");
    if (on && a.oscillating) card.classList.add("dv-osc");
    if (on && mistOn) card.classList.add("fn-mist-on");
    if (lightSt?.state === "on") {
      card.classList.add("fn-light-on");
      const rgb = lightSt.attributes.rgb_color;
      q(".fn-light").style.fill = Array.isArray(rgb) ? `rgb(${rgb.join(",")})` : "#38bdf8";
    }
    if (waterEmpty || needClean) card.classList.add("has-alarm");
    // pale: da 2,4 s a giro (minimo) a 0,35 s (massimo)
    card.style.setProperty("--fn-dur", `${(2.4 - ((pct ?? 30) / 100) * 2.05).toFixed(2)}s`);

    const preset = a.preset_mode;
    const pLabel = FN_PRESETS[preset]?.label || preset || "—";
    this._setBadge(unav ? "unavailable" : on ? "run" : "off", unav ? "OFFLINE" : on ? `${pLabel} ${this._speedText(pct)}`.toUpperCase() : "SPENTO");

    const room = this._val(cfg.temperature_entity);
    const hum = this._val(cfg.humidity_entity);
    const hTarget = humidify ? this._val(cfg.humidity_target_entity) : null;
    const mistLvl = this._val(cfg.mist_level_entity);
    q(".fn-room").textContent = room !== null ? `${clNum(room)} °C` : "—";
    q(".fn-hum").textContent = hum !== null ? `${Math.round(hum)} %` : "—";
    q(".fn-speed").textContent = on ? this._speedText(pct) : "—";
    q(".fn-preset").textContent = on ? pLabel : "—";
    q(".fn-mistv").textContent = unav || !this._has(cfg.mist_entity) ? "—" : mistOn ? `Livello ${mistLvl ?? "—"}` : "Spenta";
    q(".fn-clean").textContent = cleanH !== null ? `${Math.round(cleanH)} h` : "—";
    q(".fn-clean").style.color = needClean ? "#ef4444" : "";
    q(".fn-mistv").closest(".shc-ap-cycle-row").hidden = !cfg.mist_entity;
    q(".fn-clean").closest(".shc-ap-cycle-row").hidden = !cfg.cleaning_entity;

    const sub = unav ? "Non raggiungibile" : on ? `${pLabel}${a.oscillating ? " · oscilla" : ""}` : "Spento";
    this._lineUpdate({ temp: room, hum, humTarget: hTarget, subHtml: `${esc(sub)}${hTarget !== null ? ` · obiettivo <em>${Math.round(hTarget)}%</em>` : ""}` });

    if (this._pending == null) q(".cl-set-val").textContent = on ? this._speedText(pct) : unav ? "—" : "OFF";
    const pw = q(".shc-cl-btn.power");
    pw.classList.toggle("on", on);
    pw.disabled = unav;
    this._root.querySelectorAll(".shc-cl-ctrl [data-step]").forEach((b) => (b.disabled = unav));

    const presets = a.preset_modes || [];
    const key = `${presets.join()}|${on}|${preset}|${a.oscillating}|${mistOn}|${unav}`;
    if (key !== this._presetKey) {
      this._presetKey = key;
      const box = q(".shc-fn-presets");
      box.innerHTML =
        presets
          .map((p) => `<button type="button" class="shc-cl-btn preset${on && p === preset ? " on" : ""}" data-preset="${esc(p)}" title="${esc(FN_PRESETS[p]?.label || p)}"${unav ? " disabled" : ""}><ha-icon icon="${FN_PRESETS[p]?.icon || "mdi:fan"}"></ha-icon></button>`)
          .join("") +
        `<span class="shc-cl-sep"></span><button type="button" class="shc-cl-btn osc${on && a.oscillating ? " on" : ""}" data-osc="1" title="Oscillazione"${unav ? " disabled" : ""}><ha-icon icon="mdi:arrow-left-right"></ha-icon></button>` +
        (cfg.mist_entity ? `<button type="button" class="shc-cl-btn mist${mistOn ? " on" : ""}" data-mist="1" title="Nebulizzatore"${unav ? " disabled" : ""}><ha-icon icon="mdi:weather-fog"></ha-icon></button>` : "");
      box.querySelectorAll("[data-preset]").forEach((b) =>
        b.addEventListener("click", (e) => {
          e.stopPropagation();
          this._call("fan", "set_preset_mode", { entity_id: cfg.entity, preset_mode: b.dataset.preset });
        }),
      );
      box.querySelector("[data-osc]").addEventListener("click", (e) => {
        e.stopPropagation();
        this._call("fan", "oscillate", { entity_id: cfg.entity, oscillating: !this._st().attributes.oscillating });
      });
      box.querySelector("[data-mist]")?.addEventListener("click", (e) => {
        e.stopPropagation();
        this._call("switch", "toggle", { entity_id: cfg.mist_entity });
      });
    }

    // programmazione attiva
    const sc = cfg.schedule;
    const chips = [];
    if (this._on(sc.on_enabled)) chips.push(`<span><ha-icon icon="mdi:clock-start"></ha-icon>Accensione ${esc(String(hs[sc.on_time]?.state || "").slice(0, 5))}</span>`);
    if (this._on(sc.off_enabled)) chips.push(`<span><ha-icon icon="mdi:clock-end"></ha-icon>Spegnimento ${esc(String(hs[sc.off_time]?.state || "").slice(0, 5))}</span>`);
    if (this._on(sc.auto_day)) chips.push(`<span><ha-icon icon="mdi:sun-clock"></ha-icon>Giorno/notte automatico</span>`);
    const tOff = this._val(cfg.timer_off_entity);
    if (on && tOff) chips.push(`<span><ha-icon icon="mdi:timer-off-outline"></ha-icon>Si spegne tra ${tOff >= 60 ? `${Math.floor(tOff / 60)} h ${tOff % 60} min` : `${tOff} min`}</span>`);
    const sched = q(".shc-cl-sched");
    sched.hidden = !chips.length;
    sched.innerHTML = chips.join("");

    this._setWarn(
      unav
        ? "⚠ Ventilatore non raggiungibile: controlla che sia collegato alla corrente e al Wi‑Fi"
        : waterEmpty
          ? "💧 Serbatoio dell'acqua vuoto: riempilo per la nebbia"
          : needClean
            ? `🧽 ${Math.round(cleanH)} ore dall'ultima pulizia: è ora di pulirlo`
            : "",
    );
    this._liveRefresh([cfg.entity, cfg.mist_entity, cfg.mist_level_entity, cfg.humidify_entity, cfg.humidity_target_entity, cfg.light_entity, cfg.light_mode_entity, cfg.timer_off_entity, ...Object.values(sc), ...cfg.switches.map((s) => s.entity)].filter(Boolean));
  }

  // ⚙️ Programmazione
  _openSchedule() {
    const cfg = this._config;
    const sc = cfg.schedule;
    const hs = this._hass.states;
    const any = [sc.on_enabled, sc.off_enabled, sc.auto_day, cfg.timer_off_entity].some((e) => this._has(e));
    if (!any) {
      this._openDialog("Programmazione", `<div class="shc-ap-sec"><p class="shc-cl-note">Nessuna programmazione configurata. Copia il package <b>ventilatore.yaml</b> (vedi guida) oppure indica i tuoi helper nell'opzione <code>schedule</code> della card.</p></div>`);
      return;
    }
    const tOff = hs[cfg.timer_off_entity];
    const html = `
      ${this._has(sc.on_enabled) ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Accensione programmata</div>${this._row("Attiva", this._switchHtml(sc.on_enabled))}${this._row("Alle", this._timeHtml(sc.on_time))}</div>` : ""}
      ${this._has(sc.off_enabled) ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Spegnimento programmato</div>${this._row("Attivo", this._switchHtml(sc.off_enabled))}${this._row("Alle", this._timeHtml(sc.off_time))}</div>` : ""}
      ${this._has(sc.auto_day) ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Setup automatico all'accensione</div>${this._row("Giorno / notte", this._switchHtml(sc.auto_day))}<p class="shc-cl-note">Quando lo accendi sceglie da solo: di giorno modalità Normale, velocità media, nebbia e luce; di notte modalità Notte, velocità minima, nebbia bassa e luce spenta.</p></div>` : ""}
      ${tOff ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Timer del ventilatore</div>${this._row("Si spegne tra", this._valHtml(Number(tOff.state) ? `${tOff.state} min` : "timer spento"))}${this._chipsHtml([0, 30, 60, 120, 240, 480].map((m) => ({ label: m ? (m >= 60 ? `${m / 60} h` : `${m} min`) : "Spento", on: Number(tOff.state) === m, attrs: `data-numset="${esc(cfg.timer_off_entity)}" data-v="${m}"` })))}</div>` : ""}
      <p class="shc-cl-note">Accensione e spegnimento programmati sono <b>una tantum</b>: scattano una volta e si disattivano da soli. Quando sono attivi compaiono sotto i comandi della card.</p>`;
    this._openDialog("Programmazione", html, this._reopenUnlessTyping(() => this._openSchedule()));
  }

  // 💧 Nebbia e luce
  _openMist() {
    const cfg = this._config;
    const hs = this._hass.states;
    const lvl = hs[cfg.mist_level_entity];
    const tgt = hs[cfg.humidity_target_entity];
    const light = hs[cfg.light_entity];
    const lmode = hs[cfg.light_mode_entity];
    const LM = { humidity: "Segue l'umidità", color: "Colore fisso" };
    const lvls = [];
    if (lvl) for (let i = Number(lvl.attributes.min) || 1; i <= (Number(lvl.attributes.max) || 4); i++) lvls.push(i);
    const html = `
      ${cfg.mist_entity ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Nebulizzatore</div>
        ${this._row("Nebbia", this._switchHtml(cfg.mist_entity))}
        ${lvl ? `${this._row("Intensità", "")}${this._chipsHtml(lvls.map((i) => ({ label: String(i), on: Number(lvl.state) === i, attrs: `data-numset="${esc(cfg.mist_level_entity)}" data-v="${i}"`, icon: "mdi:weather-fog" })))}` : ""}
        ${cfg.humidify_entity ? this._row("Umidificazione automatica", this._switchHtml(cfg.humidify_entity)) : ""}
        ${tgt ? this._row("Umidità obiettivo", this._stepperHtml(cfg.humidity_target_entity, `${Math.round(Number(tgt.state)) || "—"} %`, 5)) : ""}
        <p class="shc-cl-note">Con l'umidificazione automatica la nebbia si ferma quando la stanza arriva all'umidità obiettivo (trattino rosso sotto la barra dell'umidità).</p></div>` : ""}
      ${light ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Luce ambientale</div>
        ${this._row("Accesa", this._switchHtml(cfg.light_entity))}
        ${this._chipsHtml([25, 50, 75, 100].map((b) => ({ label: `${b}%`, on: light.state === "on" && Math.round(((light.attributes.brightness || 0) / 255) * 100) === b, attrs: `data-bri="${b}"` })))}
        ${lmode ? `${this._row("Colore", "")}${this._chipsHtml((lmode.attributes.options || []).map((o) => ({ label: LM[o] || o, on: o === lmode.state, attrs: `data-select="${esc(cfg.light_mode_entity)}" data-option="${esc(o)}"` })))}` : ""}
      </div>` : ""}
      ${!cfg.mist_entity && !light ? `<p class="shc-cl-note">Nebulizzatore e luce non configurati (opzioni <code>mist_entity</code>, <code>light_entity</code>).</p>` : ""}`;
    const overlay = this._openDialog("Nebbia e luce", html, () => this._openMist());
    overlay.querySelectorAll("[data-bri]").forEach((b) =>
      b.addEventListener("click", () => this._call("light", "turn_on", { entity_id: cfg.light_entity, brightness_pct: Number(b.dataset.bri) })),
    );
  }

  // ℹ️ Stato e manutenzione
  _openInfo() {
    const cfg = this._config;
    const hs = this._hass.states;
    const st = this._st();
    const a = st?.attributes || {};
    const cleanH = this._val(cfg.cleaning_entity);
    const rows = cfg.switches.filter((s) => this._has(s.entity)).map((s) => this._row(s.name || hs[s.entity].attributes.friendly_name, this._switchHtml(s.entity))).join("");
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Ventilatore</div>
        ${this._row("Stato", this._valHtml(!st || st.state === "unavailable" ? "Non raggiungibile" : st.state === "on" ? "Acceso" : "Spento"))}
        ${st?.state === "on" ? this._row("Modalità e velocità", this._valHtml(`${FN_PRESETS[a.preset_mode]?.label || a.preset_mode || "—"} · ${this._speedText(a.percentage)}`)) : ""}
        ${cfg.water_entity ? this._row("Serbatoio acqua", `<span class="shc-ap-row-val" style="${this._on(cfg.water_entity) ? "color:#ef4444;font-weight:800" : ""}">${this._on(cfg.water_entity) ? "Vuoto" : hs[cfg.water_entity]?.state === "off" ? "OK" : "n/d"}</span>`) : ""}
        ${cfg.cleaning_entity ? this._row("Ore dall'ultima pulizia", `<span class="shc-ap-row-val" style="${cleanH !== null && cleanH >= cfg.cleaning_hours ? "color:#ef4444;font-weight:800" : ""}">${cleanH !== null ? `${Math.round(cleanH)} h su ${cfg.cleaning_hours}` : "n/d"}</span>`) : ""}
        ${st ? this._row("Ultimo cambio", this._valHtml(new Date(st.last_changed).toLocaleString("it-IT", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }))) : ""}
        ${this._row("Scheda completa", `<button type="button" class="shc-ap-action-btn" data-more="${esc(cfg.entity)}">Apri</button>`)}
      </div>
      ${rows ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Impostazioni</div>${rows}</div>` : ""}
      ${cfg.cleaning_entity ? `<p class="shc-cl-note">Il contatore della pulizia si azzera dal ventilatore (o dall'app) dopo averlo pulito. Il package avvisa ogni ${esc(cfg.cleaning_hours)} ore di utilizzo.</p>` : ""}
      ${this._hidePrefHtml()}`;
    this._openDialog("Stato e manutenzione", html, () => this._openInfo());
  }

  static getConfigElement() {
    return document.createElement("shc-fan-card-editor");
  }

  static getStubConfig(hass) {
    const e = Object.keys(hass?.states || {}).find((x) => x.startsWith("fan.")) || "fan.ventilatore";
    return { name: "Ventilatore", entity: e };
  }
}

class ShcFanCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "Ventilatore" },
        { key: "entity", label: "Ventilatore", domain: ["fan"], required: true },
        { key: "room_name", label: "Nome stanza (titolo della gauge)", kind: "text", placeholder: "Camera" },
        { key: "temperature_entity", label: "Sensore temperatura", domain: ["sensor"] },
        { key: "humidity_entity", label: "Sensore umidità", domain: ["sensor"] },
        { key: "power_entity", label: "Potenza (W) della presa", domain: ["sensor"] },
      ]},
      { title: "Nebbia e luce", fields: [
        { key: "mist_entity", label: "Nebulizzatore", domain: ["switch"] },
        { key: "mist_level_entity", label: "Livello nebbia", domain: ["number"] },
        { key: "humidify_entity", label: "Umidificazione automatica", domain: ["switch"] },
        { key: "humidity_target_entity", label: "Umidità obiettivo", domain: ["number"] },
        { key: "light_entity", label: "Luce ambientale", domain: ["light"] },
        { key: "light_mode_entity", label: "Modalità luce", domain: ["select"] },
      ]},
      { title: "Manutenzione e timer", fields: [
        { key: "water_entity", label: "Serbatoio acqua vuoto (binary_sensor)", domain: ["binary_sensor"] },
        { key: "cleaning_entity", label: "Ore dall'ultima pulizia", domain: ["sensor"] },
        { key: "cleaning_hours", label: "Avviso pulizia ogni (ore)", kind: "number", placeholder: "100" },
        { key: "timer_off_entity", label: "Timer spegnimento del ventilatore (min)", domain: ["number"] },
      ]},
      { title: "Programmazione (helper del package ventilatore.yaml)", fields: [
        { key: "schedule.on_enabled", label: "Accensione programmata attiva", domain: ["input_boolean"] },
        { key: "schedule.on_time", label: "Orario accensione", domain: ["input_datetime"] },
        { key: "schedule.off_enabled", label: "Spegnimento programmato attivo", domain: ["input_boolean"] },
        { key: "schedule.off_time", label: "Orario spegnimento", domain: ["input_datetime"] },
        { key: "schedule.auto_day", label: "Setup automatico giorno/notte", domain: ["input_boolean"] },
      ]},
      { title: "Altro", fields: [
        { key: "switches", label: "Interruttori (popup Stato)", kind: "list", itemFields: [
          { key: "entity", label: "Interruttore", kind: "entity", domain: ["switch"] },
          { key: "name", label: "Nome", kind: "text" },
        ]},
        { key: "hide_when_offline", label: "Nascondi se scollegata dalla corrente", kind: "bool", hint: "Quando la card non riceve dati resta solo una striscia bassa con il nome e OFFLINE. Toccala per i dettagli." },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-fan-card-editor", ShcFanCardEditor);
customElements.define("shc-fan-card", ShcFanCard);
window.customCards.push({
  type: "shc-fan-card",
  name: "Ventilatore",
  description: "Ventilatore animato (pale, oscillazione, nebbia, luce) con gauge dritta, velocità, modalità, programmazione e manutenzione",
  author: "Simonz82",
});

// --- Caldaia e caloriferi ---------------------------------------------------------

const BL_STYLE = `
@keyframes shc-bl-flick{0%,100%{transform:scale(1,1)}30%{transform:scale(.92,1.08)}60%{transform:scale(1.06,.94)}}
@keyframes shc-bl-drop{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(16px);opacity:0}}
.bl-flame{opacity:0;transform-box:fill-box;transform-origin:50% 100%;transition:opacity .5s}
.shc-ap-card.bl-burn .bl-flame{opacity:1;animation:shc-bl-flick .5s ease-in-out infinite}
.bl-flame.small{opacity:0}
.shc-ap-card.is-run:not(.bl-burn) .bl-flame.small{opacity:.9;animation:shc-bl-flick 1.4s ease-in-out infinite}
.bl-rad-glow{opacity:0;transition:opacity .8s}
.shc-ap-card.bl-heat .bl-rad-glow{opacity:.85}
.shc-ap-card.is-run:not(.bl-heat) .bl-rad-glow{opacity:.18}
.bl-pipe-hot{stroke:#94a3b8;transition:stroke .6s}
.shc-ap-card.bl-heat .bl-pipe-hot{stroke:#ef4444}
.shc-ap-card.bl-heat .bl-pipe-cold{stroke:#3b82f6}
.bl-flow{fill:none;stroke:#fecaca;stroke-width:1.6;stroke-linecap:round;stroke-dasharray:4 8;opacity:0}
.shc-ap-card.bl-heat .bl-flow{opacity:.95;animation:shc-dv-flow 1.2s linear infinite}
.bl-drop{fill:#38bdf8;opacity:0;transform-box:fill-box}
.shc-ap-card.bl-dhw-on .bl-drop{animation:shc-bl-drop 1s ease-in infinite}
.bl-disp{font:900 13px/1 system-ui,sans-serif;fill:#fb923c}
.shc-ap-card.is-off .bl-disp,.shc-ap-card.is-unavailable .bl-disp{fill:#94a3b8}
.shc-ap-card.bl-heat .shc-cl-chip ha-icon{color:#f97316}
.shc-ap-card.bl-heat .ht-rise{animation:shc-dv-rise 2.2s ease-in infinite}
.shc-cl-btn.mode.on{background:rgba(249,115,22,.18);color:#ea580c}
.shc-cl-btn.mode.auto.on{background:rgba(14,165,233,.2);color:#0284c7}
.shc-cl-btn.mode.off.on{background:rgba(100,116,139,.2);color:#475569}
.shc-cl-btn.prog.on{background:rgba(14,165,233,.2);color:#0284c7}
.shc-cl-btn.fire.on{background:linear-gradient(135deg,#fb923c,#ef4444);color:#fff}
.shc-bl-sum{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
.shc-bl-sumbox{display:flex;flex-direction:column;gap:2px;padding:10px 12px;border-radius:14px;background:var(--shc-soft,rgba(148,163,184,.12))}
.shc-bl-sumbox small{font-size:11px;font-weight:850;letter-spacing:.06em;text-transform:uppercase;color:var(--shc-dim)}
.shc-bl-sumbox b{font-size:19px;font-weight:900;color:var(--shc-text)}
.shc-bl-sumbox i{font-style:normal;font-size:12px;font-weight:800;color:#16a34a}
.shc-bl-sumbox span{display:flex;align-items:center;gap:4px;font-size:12px;font-weight:700;color:var(--shc-dim)}
.shc-bl-sumbox span em:last-of-type{margin-left:6px}
.shc-bl-sum em,.shc-bl-legend em{display:inline-block;width:9px;height:9px;border-radius:3px}
em.h{background:#f97316}
em.w{background:#0ea5e9}
.shc-bl-legend{display:flex;flex-wrap:wrap;gap:12px;font-size:12px;font-weight:700;color:var(--shc-dim);margin:0 2px 6px}
.shc-bl-legend span{display:flex;align-items:center;gap:5px}
.shc-bl-tbl{width:100%;border-collapse:collapse;margin-top:10px;font-size:13px;color:var(--shc-text)}
.shc-bl-tbl th{font-size:11px;font-weight:850;text-transform:uppercase;letter-spacing:.04em;color:var(--shc-dim);text-align:right;padding:4px 4px 6px}
.shc-bl-tbl th:first-child,.shc-bl-tbl td:first-child{text-align:left}
.shc-bl-tbl th.h{color:#ea580c}
.shc-bl-tbl th.w{color:#0284c7}
.shc-bl-tbl td{text-align:right;padding:6px 4px 1px;font-variant-numeric:tabular-nums;white-space:nowrap}
.shc-bl-tbl td small{display:block;font-size:11px;color:#16a34a;font-weight:800}
.shc-bl-tbl tr.bar td{padding:0 4px 6px;border-bottom:1px solid var(--shc-border)}
.shc-bl-tbl tr.bar span{display:inline-block;height:5px;vertical-align:top}
.shc-bl-tbl tr.bar span.h{background:#f97316;border-radius:3px 0 0 3px}
.shc-bl-tbl tr.bar span.w{background:#0ea5e9;border-radius:0 3px 3px 0}
.shc-bl-tbl tfoot td{padding-top:8px;font-weight:900}
`;

const BL_SEGMENTS = [
  { from: 10, color: "#1565c0" },
  { from: 15, color: "#039be5" },
  { from: 18, color: "#00c853" },
  { from: 21, color: "#43a047" },
  { from: 23, color: "#7cb342" },
  { from: 25, color: "#fb8c00" },
  { from: 26, color: "#f4511e" },
  { from: 27, color: "#d32f2f" },
];

// stessi range della vecchia gauge "Pressione Impianto"
const BL_PRESS_SEGMENTS = [
  { from: 0, color: "var(--red-color, #f44336)" },
  { from: 0.9, color: "var(--red-color, #f44336)" },
  { from: 1, color: "var(--orange-color, #ff9800)" },
  { from: 1.07, color: "var(--orange-color, #ff9800)" },
  { from: 1.1, color: "var(--light-green-color, #8bc34a)" },
  { from: 1.5, color: "var(--light-green-color, #8bc34a)" },
  { from: 1.53, color: "var(--orange-color, #ff9800)" },
  { from: 1.97, color: "var(--orange-color, #ff9800)" },
  { from: 2, color: "var(--red-color, #f44336)" },
];

const BL_PROGRAMS = { clock_program_1: "P1", clock_program_2: "P2", clock_program_3: "P3" };

function blHeroSvg(id) {
  const flame = (cls, s) =>
    `<g transform="translate(82 96) scale(${s}) translate(-82 -96)"><path class="bl-flame ${cls}" d="M82 72c6 8 12 13 12 21a12 12 0 0 1-24 0c0-5 3-8 5-11 1 4 3 6 5 6-2-6-1-11 2-16Z" fill="url(#shbl-fire-${id})"/></g>`;
  const cols = [0, 1, 2, 3, 4, 5].map((i) => 152 + i * 12);
  return `<svg class="shc-dv-svg" viewBox="0 0 240 160" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
    <defs>
      <filter id="shbl-blur-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4"/></filter>
      <linearGradient id="shbl-body-${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d5dde7"/><stop offset=".3" stop-color="#ffffff"/><stop offset=".75" stop-color="#eef2f6"/><stop offset="1" stop-color="#c3cdd9"/></linearGradient>
      <linearGradient id="shbl-fire-${id}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2563eb"/><stop offset=".35" stop-color="#f97316"/><stop offset="1" stop-color="#fde047"/></linearGradient>
      <linearGradient id="shbl-rad-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdba74"/><stop offset="1" stop-color="#ef4444"/></linearGradient>
    </defs>
    <ellipse cx="190" cy="150" rx="46" ry="5" fill="#0f172a" opacity=".14" filter="url(#shbl-blur-${id})"/>
    <g fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <path class="bl-pipe-hot" d="M96 132v10h50v-8"/>
      <path class="bl-pipe-cold" stroke="#94a3b8" d="M108 132v4h112v-2"/>
    </g>
    <path class="bl-flow" d="M96 134v8h50v-8"/>
    <g>
      ${cols.map((x) => `<rect x="${x}" y="70" width="10" height="66" rx="4" fill="url(#shbl-body-${id})" stroke="#8fa0b3" stroke-opacity=".7"/>`).join("")}
      ${cols.map((x) => `<rect class="bl-rad-glow" x="${x + 1}" y="71" width="8" height="64" rx="3.5" fill="url(#shbl-rad-${id})"/>`).join("")}
      <rect x="150" y="76" width="74" height="4" rx="2" fill="#cbd5e1"/><rect x="150" y="126" width="74" height="4" rx="2" fill="#cbd5e1"/>
    </g>
    <g>${[160, 187, 214].map((x, i) => `<path class="ht-rise" style="animation-delay:${(i * 0.7).toFixed(1)}s" d="M${x} 62c-4-4 4-8 0-12"/>`).join("")}</g>
    <rect x="40" y="12" width="84" height="120" rx="11" fill="url(#shbl-body-${id})" stroke="#8fa0b3" stroke-opacity=".6" stroke-width="1.5"/>
    <rect x="52" y="22" width="60" height="20" rx="5" fill="#0f172a" opacity=".88"/>
    <text class="bl-disp" x="82" y="36.5" text-anchor="middle">--</text>
    <circle cx="82" cy="88" r="22" fill="#1f2937"/>
    <circle cx="82" cy="88" r="22" fill="none" stroke="#94a3b8" stroke-width="2"/>
    ${flame("small", 0.45)}${flame("", 1)}
    <g fill="#94a3b8">${[60, 72, 92, 104].map((x) => `<circle cx="${x}" cy="122" r="2.6"/>`).join("")}</g>
    <path d="M60 132v8h-6" fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
    <g>${[0, 0.33, 0.66].map((d) => `<ellipse class="bl-drop" style="animation-delay:${d}s" cx="52" cy="144" rx="1.8" ry="2.6"/>`).join("")}</g>
  </svg>`;
}

class ShcBoilerCard extends ShcDeviceCardBase {
  setConfig(config) {
    if (!config.entity || !String(config.entity).startsWith("climate.")) throw new Error("entity è obbligatorio (climate.xxx)");
    this._config = {
      name: "Caloriferi",
      layout: "centrato",
      min: 10,
      max: 28,
      scale_step: 1,
      step: 0.5,
      pressure_min: 1,
      pressure_max: 2.5,
      ...config,
      diagnostics: Array.isArray(config.diagnostics) ? config.diagnostics : [],
    };
    this._root = this._root || this.attachShadow({ mode: "open" });
    this._uid = this._uid || Math.random().toString(36).slice(2, 8);
    const row = (cls, icon, label) =>
      `<div class="shc-ap-cycle-row shc-ap-cycle-row-b"><span class="shc-ap-cycle-label"><span class="shc-ap-cycle-ic"><ha-icon icon="${icon}" style="--mdc-icon-size:16px"></ha-icon></span><small>${label}</small></span><b class="${cls}">—</b></div>`;
    this._root.innerHTML = `<style>${STYLE}${CL_STYLE}${DV_STYLE}${BL_STYLE}</style>
      <article class="shc-ap-card shc-cl-card cl-img shc-bl-card">
        <div class="shc-ap-top">
          <span class="shc-ap-chip shc-cl-chip"><ha-icon icon="mdi:radiator"></ha-icon></span>
          <span class="shc-ap-headings"><span class="shc-ap-name"></span></span>
          <span class="shc-ap-badge"><i class="shc-ap-dot"></i><span class="shc-ap-badge-label"></span></span>
          <span class="shc-ap-tools">
            <button type="button" class="shc-ap-tool shc-ap-settings" title="Programma">${ICON_GEAR}</button>
            <button type="button" class="shc-ap-tool shc-dv-cons" title="Consumi">${ICON_EURO}</button>
            <button type="button" class="shc-ap-tool shc-ap-graph" title="Grafici">${ICON_GRAPH}</button>
            <button type="button" class="shc-ap-tool shc-dv-info" title="Stato caldaia">${ICON_INFO}</button>
          </span>
        </div>
        <div class="shc-ap-top-row">
          <div class="shc-cl-herocol">
            <div class="shc-ap-hero">${blHeroSvg(this._uid)}</div>
            ${this._lineHtml("Temperatura della casa e impostata, sotto la pressione dell'impianto")}
          </div>
          <div class="shc-ap-cycle-side">
            <span class="shc-ap-cycle-cap">Caldaia</span>
            <div class="shc-ap-cycle-list">
              ${row("bl-room", "mdi:home-thermometer", "Casa")}
              ${row("bl-out", "mdi:thermometer", "Esterna")}
              ${row("bl-press", "mdi:gauge", "Pressione")}
              ${row("bl-dhw", "mdi:water-boiler", "Acqua")}
              ${row("bl-next", "mdi:clock-outline", "Poi")}
              ${row("bl-gas", "mdi:fire", "Gas oggi")}
            </div>
          </div>
        </div>
        <div class="shc-cl-ctrl">
          <button type="button" class="shc-cl-btn power" title="Accendi (programma) / spegni"><ha-icon icon="mdi:power"></ha-icon></button>
          <button type="button" class="shc-cl-btn" data-step="-1" title="Meno"><ha-icon icon="mdi:minus"></ha-icon></button>
          <div class="shc-cl-set"><span class="cl-set-val">—</span><small class="bl-set-cap">impostata</small></div>
          <button type="button" class="shc-cl-btn" data-step="1" title="Più"><ha-icon icon="mdi:plus"></ha-icon></button>
        </div>
        <div class="shc-cl-ctrl shc-bl-modes"></div>
        <div class="shc-cl-sched" hidden></div>
        <div class="shc-ap-warn" hidden></div>
      </article>`;
    this._root.querySelector(".shc-ap-name").textContent = this._config.name;
    this._lineBuild(BL_SEGMENTS);
    this._pressBuild();
    const bind = this._commonBind();
    bind(".shc-ap-settings", () => this._openProgram());
    bind(".shc-cl-sched", () => this._openProgram());
    bind(".shc-dv-cons", () => this._openConsumption());
    bind(".shc-dv-info", () => this._openInfo());
    bind(".shc-cl-btn.power", () => {
      const st = this._st();
      if (!st || st.state === "unavailable") return;
      if (st.state !== "off") {
        this._call("climate", "set_hvac_mode", { entity_id: this._config.entity, hvac_mode: "off" });
        return;
      }
      const pre = this._preset();
      if (pre === null) {
        this._call("climate", "set_hvac_mode", { entity_id: this._config.entity, hvac_mode: "auto" });
        return;
      }
      // scelta fatta a caldaia spenta: accende in manuale e poi imposta la temperatura
      this._call("climate", "set_hvac_mode", { entity_id: this._config.entity, hvac_mode: "heat" });
      setTimeout(() => this._call("climate", "set_temperature", { entity_id: this._config.entity, temperature: pre }), 3000);
      this._setPreset(null);
    });
    bind(".shc-cl-ctrl [data-step]", (e, b) => this._stepSet(Number(b.dataset.step)));
  }

  // la seconda barra (quella dell'umidita' nelle altre card) mostra la pressione dell'impianto
  _usePressBar() {
    return !!this._config.pressure_entity && !this._config.humidity_entity;
  }

  _pressRange() {
    const cfg = this._config;
    return [Number(cfg.pressure_scale_min ?? 0.5), Number(cfg.pressure_scale_max ?? 2.5)];
  }

  _pressBuild() {
    if (!this._usePressBar()) return;
    const [lo, hi] = this._pressRange();
    const pos = (v) => Math.min(100, Math.max(0, ((v - lo) / (hi - lo)) * 100));
    const segs = this._config.pressure_segments || BL_PRESS_SEGMENTS;
    const q = (sel) => this._root.querySelector(sel);
    q(".shc-cl-lbar.inner").style.background = `linear-gradient(90deg,${segs.map((g) => `${g.color} ${pos(Number(g.from)).toFixed(1)}%`).join(",")})`;
    const ticks = [];
    const st = Number(this._config.pressure_scale_step) || 0.25;
    for (let v = lo; v <= hi + 1e-9; v += st) ticks.push(`<span style="left:${pos(v).toFixed(2)}%">${String(Math.round(v * 100) / 100).replace(".", ",")}${st >= 0.5 && v + st > hi + 1e-9 ? " bar" : ""}</span>`);
    q(".shc-cl-scale.h").innerHTML = ticks.join("");
    q(".shc-cl-scale.h").classList.toggle("dense", st < 0.5);
    // barra dei gradi e barra della pressione staccate di qualche pixel
    q(".shc-cl-track").classList.add("sep");
    q(".shc-cl-lbar.inner").title = "Pressione impianto";
  }

  _pressUpdate(press, bad) {
    if (!this._usePressBar()) return;
    const [lo, hi] = this._pressRange();
    const q = (sel) => this._root.querySelector(sel);
    q(".shc-cl-lbar.inner").hidden = false;
    q(".shc-cl-scale.h").hidden = false;
    const ni = q(".shc-cl-ndl.inner");
    ni.hidden = press === null;
    if (press !== null) ni.style.left = `${Math.min(100, Math.max(0, ((press - lo) / (hi - lo)) * 100)).toFixed(2)}%`;
    const lbl = q(".cl-l-hum");
    lbl.textContent = press !== null ? `${clNum(press)} bar` : "";
    lbl.style.color = bad ? "#ef4444" : "";
  }

  // temperatura scelta a caldaia spenta (la Remeha da spenta ignora set_temperature):
  // si usa alla riaccensione dal pulsante della card
  _presetKey() {
    return `shc-boiler-preset:${this._config.entity}`;
  }

  _preset() {
    try {
      const v = localStorage.getItem(this._presetKey());
      return v === null ? null : Number(v);
    } catch (e) {
      return this._presetMem ?? null;
    }
  }

  _setPreset(v) {
    this._presetMem = v;
    try {
      if (v === null) localStorage.removeItem(this._presetKey());
      else localStorage.setItem(this._presetKey(), String(v));
    } catch (e) {
      /* storage non disponibile */
    }
  }

  // temperatura impostata: quella attiva; da spenta quella scelta per la riaccensione,
  // altrimenti l'ultima usata o quella del programma
  _target() {
    const st = this._st();
    const a = st?.attributes || {};
    if (a.temperature !== null && a.temperature !== undefined && Number.isFinite(Number(a.temperature))) {
      this._lastTarget = Number(a.temperature);
      return this._lastTarget;
    }
    if (st?.state === "off") {
      const pre = this._preset();
      if (pre !== null && Number.isFinite(pre)) return pre;
    }
    return this._val(this._config.schedule_setpoint_entity) ?? this._lastTarget ?? null;
  }

  _stepSet(dir) {
    const st = this._st();
    if (!st || st.state === "unavailable") return;
    const step = Number(this._config.step) || 0.5;
    const base = this._pending ?? this._target();
    if (!Number.isFinite(base)) return;
    const lo = Number(st.attributes.min_temp) || 5;
    const hi = Number(st.attributes.max_temp) || 30;
    const t = Math.min(hi, Math.max(lo, Math.round((base + dir * step) / step) * step));
    this._pending = t;
    this._root.querySelector(".cl-set-val").textContent = `${clNum(t)}°`;
    const sp = this._root.querySelector(".shc-cl-spt");
    sp.hidden = false;
    sp.style.left = `${Math.min(100, Math.max(0, ((t - this._config.min) / (this._config.max - this._config.min)) * 100)).toFixed(2)}%`;
    clearTimeout(this._stepTimer);
    clearTimeout(this._pendingReset);
    this._stepTimer = setTimeout(() => {
      if (this._st()?.state === "off") {
        this._setPreset(t);
        this._pending = null;
        if (this._hass) this.hass = this._hass;
        return;
      }
      this._call("climate", "set_temperature", { entity_id: this._config.entity, temperature: t });
      this._pendingReset = setTimeout(() => (this._pending = null), 4000);
    }, 800);
  }

  _graphSeries() {
    const cfg = this._config;
    const s = [];
    if (cfg.temperature_entity) s.push({ key: "temp", entity: cfg.temperature_entity, label: "Temperatura casa", color: "#f97316" });
    if (cfg.outdoor_entity) s.push({ key: "out", entity: cfg.outdoor_entity, label: "Esterna", color: "#0ea5e9" });
    if (cfg.pressure_entity) s.push({ key: "press", entity: cfg.pressure_entity, label: "Pressione", color: "#8b5cf6" });
    return s;
  }

  _gasToday() {
    const cfg = this._config;
    const a = this._val(cfg.gas_heating_entity);
    const b = this._val(cfg.gas_hot_water_entity);
    if (a === null && b === null) return null;
    return (a || 0) + (b || 0);
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    applyLayoutChoice(this._root, this._config, hass);
    const cfg = this._config;
    const hs = hass.states;
    const st = this._st();
    const q = (sel) => this._root.querySelector(sel);
    const unav = !st || ["unavailable", "unknown"].includes(st.state);
    const mode = unav ? "unavailable" : st.state;
    const a = st?.attributes || {};
    const heating = !unav && (a.hvac_action === "heating" || (cfg.heating_status_entity && this._on(cfg.heating_status_entity)));
    const dhw = !unav && cfg.hot_water_status_entity ? this._on(cfg.hot_water_status_entity) : false;
    const prog = BL_PROGRAMS[a.preset_mode] || null;
    const fire = this._on(cfg.fireplace_entity);

    this._applyCompact(unav);
    const card = q(".shc-ap-card");
    card.classList.remove("is-run", "is-off", "is-unavailable", "bl-heat", "bl-dhw-on", "bl-burn", "cl-off", "has-alarm");
    card.classList.add(unav ? "is-unavailable" : mode === "off" ? "is-off" : "is-run");
    if (mode === "off" || unav) card.classList.add("cl-off");
    if (heating) card.classList.add("bl-heat");
    if (dhw) card.classList.add("bl-dhw-on");
    if (heating || dhw) card.classList.add("bl-burn");

    const room = Number.isFinite(Number(a.current_temperature)) && a.current_temperature !== null ? Number(a.current_temperature) : this._val(cfg.temperature_entity);
    const target = this._target();
    const out = this._val(cfg.outdoor_entity);
    const press = this._val(cfg.pressure_entity);
    const pLow = press !== null && press < Number(cfg.pressure_min);
    const pHigh = press !== null && press > Number(cfg.pressure_max);
    const modeTxt = unav ? "Non raggiungibile" : mode === "off" ? "Spenti (antigelo)" : mode === "heat" ? "Manuale" : `Programma ${prog || ""}`.trim();
    const actTxt = heating ? "scalda i caloriferi" : dhw ? "fa acqua calda" : mode === "off" ? "" : "in attesa";

    this._setBadge(unav ? "unavailable" : mode === "off" ? "off" : heating || dhw ? "run" : "standby", unav ? "OFFLINE" : mode === "off" ? "SPENTI" : heating ? "SCALDA" : dhw ? "ACQUA CALDA" : mode === "heat" ? "MANUALE" : `PROGRAMMA ${prog || ""}`.trim());
    q(".bl-disp").textContent = unav ? "--" : mode === "off" ? "OFF" : this._target() !== null ? `${clNum(this._target())}°` : "ON";

    q(".bl-room").textContent = room !== null ? `${clNum(room)} °C` : "—";
    q(".bl-out").textContent = out !== null ? `${clNum(out)} °C` : "—";
    q(".bl-press").textContent = press !== null ? `${clNum(press)} bar` : "—";
    q(".bl-press").style.color = pLow || pHigh ? "#ef4444" : "";
    const dhwT = this._val(cfg.hot_water_temperature_entity);
    q(".bl-dhw").textContent = !cfg.hot_water_status_entity ? "—" : dhw ? (dhwT !== null ? `In uso ${clNum(dhwT, 0)}°` : "In uso") : "Pronta";
    const nsp = this._val(cfg.next_setpoint_entity);
    const nst = hs[cfg.next_setpoint_time_entity]?.state;
    const nDate = nst && !["unknown", "unavailable"].includes(nst) ? new Date(nst) : null;
    const nTime = nDate && !isNaN(nDate) ? nDate.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) : null;
    q(".bl-next").textContent = mode === "auto" && nsp !== null && nTime ? `${clNum(nsp, 0)}° ${nTime}` : "—";
    const gas = this._gasToday();
    q(".bl-gas").textContent = gas !== null ? `${clNum(gas, 2)} m³` : "—";
    q(".bl-out").closest(".shc-ap-cycle-row").hidden = !cfg.outdoor_entity;
    q(".bl-press").closest(".shc-ap-cycle-row").hidden = !cfg.pressure_entity;
    q(".bl-dhw").closest(".shc-ap-cycle-row").hidden = !cfg.hot_water_status_entity;
    q(".bl-next").closest(".shc-ap-cycle-row").hidden = !cfg.next_setpoint_entity;
    q(".bl-gas").closest(".shc-ap-cycle-row").hidden = gas === null;

    const setTxt = target !== null && !unav ? ` · ${mode === "off" ? "all'accensione" : "impostata"} <em>${esc(clNum(target))}°</em>` : "";
    this._lineUpdate({ temp: room, hum: this._val(cfg.humidity_entity), set: unav ? null : this._pending ?? target, subHtml: `${esc(modeTxt)}${actTxt ? ` · ${esc(actTxt)}` : ""}${setTxt}` });
    this._pressUpdate(press, pLow || pHigh);

    if (this._pending == null) q(".cl-set-val").textContent = unav ? "—" : target !== null ? `${clNum(target)}°` : "—";
    q(".bl-set-cap").textContent = mode === "auto" ? "programma" : mode === "off" ? "all'accensione" : "impostata";
    const pw = q(".shc-cl-btn.power");
    pw.classList.toggle("on", !unav && mode !== "off");
    pw.disabled = unav;
    this._root.querySelectorAll(".shc-cl-ctrl [data-step]").forEach((b) => (b.disabled = unav));

    const key = `${mode}|${a.preset_mode}|${fire}|${unav}|${(a.preset_modes || []).join()}`;
    if (key !== this._modeKey) {
      this._modeKey = key;
      const dis = unav ? " disabled" : "";
      const box = q(".shc-bl-modes");
      box.innerHTML =
        `<button type="button" class="shc-cl-btn mode off${mode === "off" ? " on" : ""}" data-mode="off" title="Spenti (antigelo)"${dis}><ha-icon icon="mdi:snowflake-thermometer"></ha-icon></button>` +
        `<button type="button" class="shc-cl-btn mode${mode === "heat" ? " on" : ""}" data-mode="heat" title="Manuale"${dis}><ha-icon icon="mdi:hand-back-right-outline"></ha-icon></button>` +
        `<button type="button" class="shc-cl-btn mode auto${mode === "auto" ? " on" : ""}" data-mode="auto" title="Programma"${dis}><ha-icon icon="mdi:calendar-clock"></ha-icon></button>` +
        `<span class="shc-cl-sep"></span>` +
        (a.preset_modes || [])
          .filter((p) => BL_PROGRAMS[p])
          .map((p) => `<button type="button" class="shc-cl-btn prog${mode === "auto" && p === a.preset_mode ? " on" : ""}" data-prog="${esc(p)}" title="Programma orario ${esc(BL_PROGRAMS[p])}"${dis}><span class="shc-dv-txt">${esc(BL_PROGRAMS[p])}</span></button>`)
          .join("") +
        (this._has(cfg.fireplace_entity) ? `<button type="button" class="shc-cl-btn fire${fire ? " on" : ""}" data-fire="1" title="Modalità camino"${dis}><ha-icon icon="mdi:fireplace"></ha-icon></button>` : "");
      box.querySelectorAll("[data-mode]").forEach((b) =>
        b.addEventListener("click", (e) => {
          e.stopPropagation();
          this._call("climate", "set_hvac_mode", { entity_id: cfg.entity, hvac_mode: b.dataset.mode });
        }),
      );
      box.querySelectorAll("[data-prog]").forEach((b) =>
        b.addEventListener("click", (e) => {
          e.stopPropagation();
          this._call("climate", "set_preset_mode", { entity_id: cfg.entity, preset_mode: b.dataset.prog });
        }),
      );
      box.querySelector("[data-fire]")?.addEventListener("click", (e) => {
        e.stopPropagation();
        this._call("switch", "toggle", { entity_id: cfg.fireplace_entity });
      });
    }

    const chips = [];
    if (!unav && mode === "auto" && nsp !== null && nTime) chips.push(`<span><ha-icon icon="mdi:calendar-clock"></ha-icon>Programma ${esc(prog || "")}: alle ${esc(nTime)} passa a ${esc(clNum(nsp))}°</span>`);
    if (!unav && mode === "heat") chips.push(`<span><ha-icon icon="mdi:hand-back-right-outline"></ha-icon>Manuale: tiene ${target !== null ? `${esc(clNum(target))}°` : "la temperatura"} finché non cambi</span>`);
    if (!unav && mode === "off" && this._preset() !== null) chips.push(`<span><ha-icon icon="mdi:power"></ha-icon>Con il pulsante accensione parte in manuale a ${esc(clNum(this._preset()))}°</span>`);
    if (fire) chips.push(`<span><ha-icon icon="mdi:fireplace" style="color:#f97316"></ha-icon>Modalità camino attiva</span>`);
    const sched = q(".shc-cl-sched");
    sched.hidden = !chips.length;
    sched.innerHTML = chips.join("");

    const errors = cfg.diagnostics.filter((d) => d.alarm && hs[d.entity]?.state === "on");
    if (pLow || pHigh || errors.length) card.classList.add("has-alarm");
    this._setWarn(
      unav
        ? "⚠ Caldaia non raggiungibile: controlla la corrente e il modulo internet della caldaia"
        : pLow
          ? `🔧 Pressione bassa (${clNum(press)} bar): apri la valvola blu di carico fino a circa 1,5 bar`
          : pHigh
            ? `🔧 Pressione alta (${clNum(press)} bar): sfiata un calorifero o chiama il tecnico`
            : errors.length
              ? `⚠ ${errors.map((d) => d.name || hs[d.entity]?.attributes?.friendly_name || d.entity).join(", ")}`
              : "",
    );
    this._liveRefresh([cfg.entity, cfg.fireplace_entity, cfg.pressure_entity, cfg.hot_water_status_entity, cfg.gas_heating_entity, cfg.gas_hot_water_entity].filter(Boolean));
  }

  // ⚙️ Programma
  _openProgram() {
    const cfg = this._config;
    const hs = this._hass.states;
    const st = this._st();
    const a = st?.attributes || {};
    const mode = st?.state;
    const MODES = { off: "Spenti (antigelo)", heat: "Manuale", auto: "Programma" };
    const nsp = this._val(cfg.next_setpoint_entity);
    const nst = hs[cfg.next_setpoint_time_entity]?.state;
    const nDate = nst ? new Date(nst) : null;
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Modalità</div>
        ${this._chipsHtml(Object.entries(MODES).map(([m, l]) => ({ label: l, on: mode === m, attrs: `data-hvac="${m}"`, icon: { off: "mdi:snowflake-thermometer", heat: "mdi:hand-back-right-outline", auto: "mdi:calendar-clock" }[m] })))}
      </div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Programma orario</div>
        ${this._chipsHtml((a.preset_modes || []).filter((p) => BL_PROGRAMS[p]).map((p) => ({ label: `Programma ${BL_PROGRAMS[p].slice(1)}`, on: mode === "auto" && a.preset_mode === p, attrs: `data-prog="${esc(p)}"`, icon: "mdi:calendar-clock" })))}
        ${this._val(cfg.schedule_setpoint_entity) !== null ? this._row("Temperatura del programma adesso", this._valHtml(`${clNum(this._val(cfg.schedule_setpoint_entity))} °C`)) : ""}
        ${nsp !== null && nDate && !isNaN(nDate) ? this._row("Prossimo cambio", this._valHtml(`${nDate.toLocaleString("it-IT", { weekday: "short", hour: "2-digit", minute: "2-digit" })} → ${clNum(nsp)} °C`)) : ""}
      </div>
      ${this._has(cfg.fireplace_entity) ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Modalità camino</div>${this._row("Attiva", this._switchHtml(cfg.fireplace_entity))}<p class="shc-cl-note">Con il camino (o una stufa) acceso nella stanza del termostato, la caldaia continua a scaldare le altre stanze anche se lì fa già caldo.</p></div>` : ""}
      <p class="shc-cl-note">In <b>Programma</b> i tasti − e + cambiano la temperatura solo fino al prossimo cambio orario, poi torna quella del programma. In <b>Manuale</b> la temperatura resta fissa. <b>Spenti</b> lascia attivo l'antigelo e l'acqua calda. Gli orari dei programmi si cambiano dall'app Baxi.</p>`;
    const overlay = this._openDialog("Programma", html, () => this._openProgram());
    overlay.querySelectorAll("[data-hvac]").forEach((b) => b.addEventListener("click", () => this._call("climate", "set_hvac_mode", { entity_id: cfg.entity, hvac_mode: b.dataset.hvac })));
    overlay.querySelectorAll("[data-prog]").forEach((b) => b.addEventListener("click", () => this._call("climate", "set_preset_mode", { entity_id: cfg.entity, preset_mode: b.dataset.prog })));
  }

  // € Consumi: oggi/settimana/mese/anno e tabelle per giorni, settimane, mesi, anni
  // dalle statistiche a lungo termine di HA (sensori gas total_increasing), diviso riscaldamento / acqua calda
  _consRanges() {
    const now = new Date();
    const day0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const week0 = new Date(day0);
    week0.setDate(day0.getDate() - ((day0.getDay() + 6) % 7));
    const month0 = new Date(now.getFullYear(), now.getMonth(), 1);
    const year0 = new Date(now.getFullYear(), 0, 1);
    return { now, day0, week0, month0, year0 };
  }

  async _consFetch(start, period) {
    const cfg = this._config;
    const ids = [cfg.gas_heating_entity, cfg.gas_hot_water_entity].filter(Boolean);
    const res = await this._hass.callWS({
      type: "recorder/statistics_during_period",
      start_time: start.toISOString(),
      end_time: new Date().toISOString(),
      statistic_ids: ids,
      period,
      types: ["change"],
    });
    // righe per inizio periodo: { start, heat, water }
    const rows = new Map();
    const add = (id, key) =>
      (res[id] || []).forEach((r) => {
        const t = typeof r.start === "number" ? r.start : Date.parse(r.start);
        const row = rows.get(t) || { start: t, heat: 0, water: 0 };
        row[key] += Math.max(0, Number(r.change) || 0);
        rows.set(t, row);
      });
    add(cfg.gas_heating_entity, "heat");
    add(cfg.gas_hot_water_entity, "water");
    return [...rows.values()].sort((a, b) => a.start - b.start);
  }

  async _openConsumption() {
    const cfg = this._config;
    if (!cfg.gas_heating_entity && !cfg.gas_hot_water_entity) {
      this._openDialog("Consumi", `<p class="shc-cl-note">Indica i sensori del gas (opzioni <code>gas_heating_entity</code> e <code>gas_hot_water_entity</code>).</p>`);
      return;
    }
    const tab = this._consTab || "day";
    const TABS = { day: "Giorni", week: "Settimane", month: "Mesi", year: "Anni" };
    this._openDialog("Consumi gas", `<div class="shc-ap-sec"><p class="shc-cl-note">Carico i consumi…</p></div>`);
    const R = this._consRanges();
    const back = new Date(R.day0);
    if (tab === "day") back.setDate(back.getDate() - 13);
    if (tab === "week") back.setTime(R.week0.getTime() - 11 * 7 * 864e5);
    if (tab === "month") back.setFullYear(R.month0.getFullYear(), R.month0.getMonth() - 11, 1);
    if (tab === "year") back.setFullYear(R.year0.getFullYear() - 4, 0, 1);
    let sums, rows;
    try {
      const sumOf = async (start, period) => (await this._consFetch(start, period)).reduce((t, r) => ({ heat: t.heat + r.heat, water: t.water + r.water }), { heat: 0, water: 0 });
      [sums, rows] = await Promise.all([
        Promise.all([sumOf(R.day0, "day"), sumOf(R.week0, "week"), sumOf(R.month0, "month"), sumOf(R.year0, "month")]),
        this._consFetch(back, tab),
      ]);
    } catch (e) {
      this._openDialog("Consumi gas", `<div class="shc-ap-sec"><p class="shc-cl-note">Non riesco a leggere le statistiche: ${esc(e?.message || e)}</p></div>`);
      return;
    }
    const price = Number(cfg.gas_price) || 0;
    const m3 = (v) => `${clNum(v, 2)} m³`;
    const eur = (v) => (price ? `<i>${clNum(v * price, 2)} €</i>` : "");
    const box = (label, s) => `<div class="shc-bl-sumbox"><small>${label}</small><b>${m3(s.heat + s.water)}</b>${eur(s.heat + s.water)}
      <span><em class="h"></em>${clNum(s.heat, 2)}<em class="w"></em>${clNum(s.water, 2)}</span></div>`;
    const fmt = (t) => {
      const d = new Date(t);
      if (tab === "day") return d.toLocaleDateString("it-IT", { weekday: "short", day: "2-digit", month: "2-digit" });
      if (tab === "week") return `dal ${d.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" })}`;
      if (tab === "month") return d.toLocaleDateString("it-IT", { month: "short", year: "numeric" });
      return String(d.getFullYear());
    };
    const max = Math.max(0.0001, ...rows.map((r) => r.heat + r.water));
    const tot = rows.reduce((t, r) => ({ heat: t.heat + r.heat, water: t.water + r.water }), { heat: 0, water: 0 });
    const list = [...rows].reverse();
    const table = list.length
      ? `<table class="shc-bl-tbl">
          <thead><tr><th>${{ day: "Giorno", week: "Settimana", month: "Mese", year: "Anno" }[tab]}</th><th class="h">Riscald.</th><th class="w">Acqua</th><th>Totale</th></tr></thead>
          <tbody>${list
            .map(
              (r) => `<tr><td>${esc(fmt(r.start))}</td><td>${clNum(r.heat, 2)}</td><td>${clNum(r.water, 2)}</td><td><b>${clNum(r.heat + r.water, 2)}</b>${price ? `<small>${clNum((r.heat + r.water) * price, 2)} €</small>` : ""}</td></tr>
              <tr class="bar"><td colspan="4"><span class="h" style="width:${((r.heat / max) * 100).toFixed(1)}%"></span><span class="w" style="width:${((r.water / max) * 100).toFixed(1)}%"></span></td></tr>`,
            )
            .join("")}</tbody>
          <tfoot><tr><td>Totale</td><td>${clNum(tot.heat, 2)}</td><td>${clNum(tot.water, 2)}</td><td><b>${clNum(tot.heat + tot.water, 2)}</b>${price ? `<small>${clNum((tot.heat + tot.water) * price, 2)} €</small>` : ""}</td></tr></tfoot>
        </table>`
      : `<p class="shc-cl-note">Nessun dato in questo periodo.</p>`;
    const kwh = (e) => (this._val(e) !== null ? `${clNum(this._val(e), 1)} kWh` : "n/d");
    const today = [
      [cfg.heating_energy_entity, "Riscaldamento: energia consumata"],
      [cfg.heating_delivered_entity, "Riscaldamento: calore prodotto"],
      [cfg.hot_water_energy_entity, "Acqua calda: energia consumata"],
      [cfg.hot_water_delivered_entity, "Acqua calda: calore prodotto"],
    ].filter(([e]) => e);
    const html = `
      <div class="shc-bl-sum">${box("Oggi", sums[0])}${box("Settimana", sums[1])}${box("Mese", sums[2])}${box("Anno", sums[3])}</div>
      <div class="shc-bl-legend"><span><em class="h"></em>Riscaldamento</span><span><em class="w"></em>Acqua calda</span><span>m³ di gas stimati</span></div>
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Storico</div>
        ${this._chipsHtml(Object.entries(TABS).map(([k, l]) => ({ label: l, on: k === tab, attrs: `data-ctab="${k}"` })))}
        ${table}
      </div>
      ${today.length ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Oggi dalla caldaia (kWh)</div>${today.map(([e, l]) => `<div class="shc-ap-row" data-more="${esc(e)}" style="cursor:pointer"><span class="shc-ap-row-label">${esc(l)}</span>${this._valHtml(kwh(e))}</div>`).join("")}</div>` : ""}
      <p class="shc-cl-note">Il gas è stimato dai kWh che comunica la caldaia (circa 10,7 kWh per m³ di metano). Lo storico parte da quando esistono i sensori in Home Assistant.${price ? ` Costo calcolato a ${clNum(price, 2)} €/m³.` : " Per vedere anche il costo aggiungi l'opzione <code>gas_price</code> (€/m³)."}</p>`;
    const overlay = this._openDialog("Consumi gas", html);
    overlay.querySelectorAll("[data-ctab]").forEach((b) =>
      b.addEventListener("click", () => {
        this._consTab = b.dataset.ctab;
        this._openConsumption();
      }),
    );
  }

  // ℹ️ Stato caldaia
  _openInfo() {
    const cfg = this._config;
    const hs = this._hass.states;
    const st = this._st();
    const a = st?.attributes || {};
    const press = this._val(cfg.pressure_entity);
    const fmtTime = (iso) => (iso ? new Date(iso).toLocaleString("it-IT", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "mai");
    const diag = cfg.diagnostics
      .map((d) => {
        const s = hs[d.entity];
        const val = !s ? "n/d" : d.entity.startsWith("automation.") ? `ultima volta ${fmtTime(s.attributes.last_triggered)}` : `${s.state}${s.attributes.unit_of_measurement ? ` ${s.attributes.unit_of_measurement}` : ""}`;
        return `<div class="shc-ap-row" data-more="${esc(d.entity)}" style="cursor:pointer"><span class="shc-ap-row-label">${esc(d.name || s?.attributes?.friendly_name || d.entity)}</span>${this._valHtml(val)}</div>`;
      })
      .join("");
    const pBad = press !== null && (press < cfg.pressure_min || press > cfg.pressure_max);
    const ACT = { heating: "Scalda", idle: "In attesa", off: "Spenta" };
    const html = `
      <div class="shc-ap-sec"><div class="shc-ap-sec-cap">Caldaia</div>
        ${this._row("Stato", this._valHtml(!st || st.state === "unavailable" ? "Non raggiungibile" : ACT[a.hvac_action] || a.hvac_action || "—"))}
        ${cfg.pressure_entity ? `<div class="shc-ap-row" data-more="${esc(cfg.pressure_entity)}" style="cursor:pointer"><span class="shc-ap-row-label">Pressione acqua</span><span class="shc-ap-row-val" style="${pBad ? "color:#ef4444;font-weight:800" : ""}">${press !== null ? `${clNum(press)} bar` : "n/d"}</span></div>` : ""}
        ${cfg.hot_water_status_entity ? this._row("Acqua calda", this._valHtml(this._on(cfg.hot_water_status_entity) ? "In uso" : "Pronta")) : ""}
        ${cfg.internet_entity ? this._row("Accesso a internet (router)", this._switchHtml(cfg.internet_entity)) : ""}
        ${st ? this._row("Ultimo cambio", this._valHtml(fmtTime(st.last_changed))) : ""}
        ${this._row("Scheda completa", `<button type="button" class="shc-ap-action-btn" data-more="${esc(cfg.entity)}">Apri</button>`)}
      </div>
      ${diag ? `<div class="shc-ap-sec"><div class="shc-ap-sec-cap">Avvisi automatici</div>${diag}</div>` : ""}
      <p class="shc-cl-note">Pressione giusta a impianto freddo: tra ${clNum(cfg.pressure_min)} e ${clNum(cfg.pressure_max)} bar (ideale circa 1,5). Se scende, apri piano la valvola blu di carico sotto la caldaia e chiudila a 1,5 bar.</p>
      ${this._hidePrefHtml()}`;
    this._openDialog("Stato caldaia", html, () => this._openInfo());
  }

  static getConfigElement() {
    return document.createElement("shc-boiler-card-editor");
  }

  static getStubConfig(hass) {
    const e = Object.keys(hass?.states || {}).find((x) => x.startsWith("climate.")) || "climate.caldaia";
    return { name: "Caloriferi", entity: e };
  }
}

class ShcBoilerCardEditor extends ShcSimpleCardEditorBase {
  get schema() {
    return [
      { title: "Base", fields: [
        { key: "name", label: "Nome", kind: "text", placeholder: "Caloriferi" },
        { key: "entity", label: "Termostato / zona caldaia", domain: ["climate"], required: true },
        { key: "room_name", label: "Nome stanza (titolo della gauge)", kind: "text", placeholder: "Casa" },
        { key: "outdoor_entity", label: "Temperatura esterna", domain: ["sensor"] },
        { key: "humidity_entity", label: "Umidità della casa (facoltativa)", domain: ["sensor"] },
        { key: "pressure_entity", label: "Pressione acqua impianto (bar)", domain: ["sensor"] },
        { key: "fireplace_entity", label: "Modalità camino", domain: ["switch"] },
      ]},
      { title: "Stato e programma", fields: [
        { key: "heating_status_entity", label: "Caldaia in riscaldamento", domain: ["binary_sensor"] },
        { key: "hot_water_status_entity", label: "Acqua calda in uso", domain: ["binary_sensor"] },
        { key: "hot_water_temperature_entity", label: "Temperatura acqua calda", domain: ["sensor"] },
        { key: "schedule_setpoint_entity", label: "Temperatura del programma adesso", domain: ["sensor"] },
        { key: "next_setpoint_entity", label: "Prossima temperatura", domain: ["sensor"] },
        { key: "next_setpoint_time_entity", label: "Ora del prossimo cambio", domain: ["sensor"] },
      ]},
      { title: "Consumi", fields: [
        { key: "gas_heating_entity", label: "Gas riscaldamento (m³)", domain: ["sensor"] },
        { key: "gas_hot_water_entity", label: "Gas acqua calda (m³)", domain: ["sensor"] },
        { key: "heating_energy_entity", label: "Energia riscaldamento consumata (kWh)", domain: ["sensor"] },
        { key: "heating_delivered_entity", label: "Calore riscaldamento prodotto (kWh)", domain: ["sensor"] },
        { key: "hot_water_energy_entity", label: "Energia acqua calda consumata (kWh)", domain: ["sensor"] },
        { key: "hot_water_delivered_entity", label: "Calore acqua calda prodotto (kWh)", domain: ["sensor"] },
        { key: "gas_price", label: "Prezzo gas €/m³ (facoltativo)", kind: "number" },
      ]},
      { title: "Altro", fields: [
        { key: "internet_entity", label: "Accesso internet della caldaia (router)", domain: ["switch"] },
        { key: "diagnostics", label: "Automazioni / sensori (popup Stato)", kind: "list", itemFields: [
          { key: "entity", label: "Entità", kind: "entity" },
          { key: "name", label: "Nome", kind: "text" },
        ]},
        { key: "hide_when_offline", label: "Nascondi se scollegata dalla corrente", kind: "bool", hint: "Quando la card non riceve dati resta solo una striscia bassa con il nome e OFFLINE. Toccala per i dettagli." },
        { key: "layout_entity", label: "Menu layout (classico/centrato)", domain: ["input_select"] },
      ]},
    ];
  }
}
customElements.define("shc-boiler-card-editor", ShcBoilerCardEditor);
customElements.define("shc-boiler-card", ShcBoilerCard);
window.customCards.push({
  type: "shc-boiler-card",
  name: "Caldaia e caloriferi",
  description: "Caldaia animata (fiamma, caloriferi, acqua calda) con gauge dritta, modalità, programmi orari, pressione e consumi gas",
  author: "Simonz82",
});
