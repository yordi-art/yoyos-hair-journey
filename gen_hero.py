svg = """<svg xmlns="http://www.w3.org/2000/svg" width="320" height="380" viewBox="0 0 320 380">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff69b4"/>
      <stop offset="100%" stop-color="#c2185b"/>
    </linearGradient>
    <linearGradient id="hair" x1="0%" y1="0%" x2="30%" y2="100%">
      <stop offset="0%" stop-color="#3d1a00"/>
      <stop offset="100%" stop-color="#6b2d00"/>
    </linearGradient>
    <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5c5a3"/>
      <stop offset="100%" stop-color="#e8a882"/>
    </linearGradient>
    <linearGradient id="bottle" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.5)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.2)"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="320" height="380" fill="url(#bg)" rx="20"/>
  <circle cx="280" cy="40" r="60" fill="rgba(255,255,255,0.07)"/>
  <circle cx="40" cy="340" r="80" fill="rgba(255,255,255,0.05)"/>

  <!-- ── WOMAN ILLUSTRATION ── -->
  <!-- Long flowing hair back layer -->
  <path d="M185 68 Q175 90 168 130 Q160 180 158 230 Q155 270 160 310 Q165 340 170 360 L185 360 Q182 330 180 300 Q178 260 182 220 Q186 170 192 130 Q198 95 195 68 Z" fill="url(#hair)" opacity="0.9"/>
  <path d="M195 68 Q210 85 218 120 Q226 160 228 200 Q230 240 225 280 Q220 315 215 350 L228 350 Q234 315 238 278 Q244 235 242 192 Q240 148 232 110 Q222 80 210 65 Z" fill="url(#hair)" opacity="0.85"/>
  <!-- Hair flow strands -->
  <path d="M188 100 Q200 140 205 190 Q210 240 208 290" stroke="#5a2200" stroke-width="1.5" fill="none" opacity="0.4"/>
  <path d="M175 110 Q170 155 168 200 Q166 245 170 285" stroke="#5a2200" stroke-width="1.5" fill="none" opacity="0.4"/>

  <!-- Neck -->
  <rect x="186" y="108" width="22" height="28" rx="8" fill="url(#skin)"/>

  <!-- Body / dress -->
  <path d="M165 135 Q175 128 197 128 Q218 128 228 135 L238 200 Q240 230 238 260 L155 260 Q153 230 155 200 Z" fill="#ff85c2"/>
  <!-- Dress detail -->
  <path d="M197 128 L197 260" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none"/>
  <path d="M165 155 Q197 165 228 155" stroke="rgba(255,255,255,0.25)" stroke-width="1" fill="none"/>

  <!-- Arms -->
  <path d="M165 140 Q148 155 142 175 Q138 190 142 200 Q146 195 150 185 Q155 168 165 158 Z" fill="url(#skin)"/>
  <path d="M228 140 Q245 155 250 175 Q254 190 250 200 Q246 195 242 185 Q237 168 228 158 Z" fill="url(#skin)"/>

  <!-- Head -->
  <ellipse cx="197" cy="82" rx="26" ry="28" fill="url(#skin)"/>

  <!-- Hair front top -->
  <path d="M171 72 Q175 52 197 50 Q219 52 223 72 Q218 60 197 58 Q176 60 171 72 Z" fill="url(#hair)"/>
  <!-- Hair side pieces -->
  <path d="M171 72 Q164 80 163 95 Q165 88 171 82 Z" fill="url(#hair)"/>
  <path d="M223 72 Q230 80 231 95 Q229 88 223 82 Z" fill="url(#hair)"/>

  <!-- Face features -->
  <!-- Eyes -->
  <ellipse cx="189" cy="80" rx="4" ry="4.5" fill="white"/>
  <ellipse cx="205" cy="80" rx="4" ry="4.5" fill="white"/>
  <ellipse cx="189" cy="81" rx="2.5" ry="3" fill="#3d1a00"/>
  <ellipse cx="205" cy="81" rx="2.5" ry="3" fill="#3d1a00"/>
  <circle cx="190" cy="80" r="1" fill="white"/>
  <circle cx="206" cy="80" r="1" fill="white"/>
  <!-- Eyebrows -->
  <path d="M184 74 Q189 71 194 73" stroke="#3d1a00" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M200 73 Q205 71 210 74" stroke="#3d1a00" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Nose -->
  <path d="M195 86 Q197 91 199 86" stroke="#c8896a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  <!-- Smile -->
  <path d="M189 96 Q197 102 205 96" stroke="#c2185b" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Cheeks blush -->
  <ellipse cx="183" cy="90" rx="5" ry="3" fill="#ffb3c6" opacity="0.5"/>
  <ellipse cx="211" cy="90" rx="5" ry="3" fill="#ffb3c6" opacity="0.5"/>

  <!-- Sparkles around hair -->
  <text x="148" y="75" font-size="12" fill="rgba(255,255,255,0.8)">✨</text>
  <text x="238" y="85" font-size="10" fill="rgba(255,255,255,0.7)">✨</text>
  <text x="155" y="200" font-size="10" fill="rgba(255,255,255,0.5)">🌿</text>

  <!-- ── OIL BOTTLE ── -->
  <!-- Bottle cap -->
  <rect x="62" y="95" width="44" height="16" rx="6" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>
  <rect x="70" y="83" width="28" height="14" rx="5" fill="rgba(255,255,255,0.3)"/>
  <!-- Bottle body -->
  <path d="M50 118 Q44 134 40 155 L40 270 Q40 292 84 292 Q128 292 128 270 L128 155 Q124 134 118 118 Z" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
  <!-- Liquid -->
  <path d="M42 195 L42 270 Q42 290 84 290 Q126 290 126 270 L126 195 Z" fill="rgba(255,255,255,0.18)"/>
  <!-- Label -->
  <rect x="52" y="182" width="64" height="82" rx="8" fill="rgba(255,255,255,0.9)"/>
  <text x="84" y="202" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#c2185b" text-anchor="middle">YOYO S</text>
  <text x="84" y="214" font-family="Arial" font-size="6" fill="#ff69b4" text-anchor="middle">HAIR JOURNEY</text>
  <text x="84" y="238" font-family="Arial" font-size="22" text-anchor="middle">🌿</text>
  <text x="84" y="256" font-family="Arial" font-size="6" fill="#aaa" text-anchor="middle">100% Natural</text>
  <!-- Bottle shine -->
  <ellipse cx="56" cy="160" rx="5" ry="20" fill="rgba(255,255,255,0.2)" transform="rotate(-10 56 160)"/>

  <!-- Bottom text -->
  <text x="160" y="345" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="white" text-anchor="middle">Yoyo Hair Journey</text>
  <text x="160" y="363" font-family="Arial" font-size="9" fill="rgba(255,255,255,0.8)" text-anchor="middle">Natural Herbal Hair Care</text>
</svg>"""

with open("/workspaces/yoyos-hair-journey/client/public/images/hero.svg", "w") as f:
    f.write(svg)
print("hero.svg generated!")
