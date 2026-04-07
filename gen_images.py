import os

DIR = "/workspaces/yoyos-hair-journey/client/public/images"
os.makedirs(DIR, exist_ok=True)

products = [
    ("oil1.jpg",  "Growth Oil",       "Coconut - Castor - Rosemary",   "🌱", "#e91e8c", "#880e4f"),
    ("oil2.jpg",  "Strengthening",    "Argan - Jojoba - Vitamin E",    "💪", "#8e24aa", "#4a148c"),
    ("oil3.jpg",  "Scalp Repair",     "Tea Tree - Peppermint - Aloe",  "🍃", "#00897b", "#004d40"),
    ("oil4.jpg",  "Moisture Boost",   "Avocado - Almond - Shea",       "💧", "#1e88e5", "#0d47a1"),
    ("oil5.jpg",  "Anti-Breakage",    "Biotin - Keratin - Olive",      "🛡", "#d81b60", "#880e4f"),
    ("oil6.jpg",  "Shine and Glow",   "Argan - Marula - Vitamin C",    "⭐", "#f57c00", "#e65100"),
    ("oil7.jpg",  "Deep Root Oil",    "Black Seed - Neem - Fenugreek", "🌑", "#37474f", "#102027"),
    ("oil8.jpg",  "Curl Defining",    "Flaxseed - Coconut - Glycerin", "🌀", "#6d4c41", "#3e2723"),
    ("oil9.jpg",  "Dandruff Control", "Tea Tree - Eucalyptus - Zinc",  "❄", "#0288d1", "#01579b"),
    ("oil10.jpg", "Silk Smooth",      "Silk Protein - Camellia - Rose","🌹", "#c2185b", "#880e4f"),
    ("combo.jpg", "Complete Combo",   "All 10 Oils Mixed",             "🎁", "#7b1fa2", "#4a148c"),
]

def make_svg(title, sub, emoji, c1, c2):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
    <linearGradient id="liq" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.35)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.1)"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)" rx="24"/>
  <circle cx="340" cy="60" r="80" fill="rgba(255,255,255,0.07)"/>
  <circle cx="60" cy="340" r="100" fill="rgba(255,255,255,0.05)"/>
  <circle cx="200" cy="200" r="160" fill="rgba(255,255,255,0.03)"/>
  <rect x="172" y="62" width="56" height="20" rx="6" fill="rgba(255,255,255,0.35)"/>
  <rect x="162" y="80" width="76" height="22" rx="8" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
  <path d="M148 112 Q140 132 136 158 L136 288 Q136 314 200 314 Q264 314 264 288 L264 158 Q260 132 252 112 Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
  <path d="M138 198 L138 288 Q138 312 200 312 Q262 312 262 288 L262 198 Z" fill="url(#liq)"/>
  <rect x="155" y="188" width="90" height="102" rx="10" fill="rgba(255,255,255,0.9)"/>
  <text x="200" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="{c2}" text-anchor="middle">YOYO S</text>
  <text x="200" y="226" font-family="Arial" font-size="7.5" fill="{c1}" text-anchor="middle">HAIR JOURNEY</text>
  <text x="200" y="256" font-family="Arial" font-size="28" text-anchor="middle">{emoji}</text>
  <text x="200" y="276" font-family="Arial" font-size="7" fill="#999" text-anchor="middle">100% Natural</text>
  <ellipse cx="168" cy="168" rx="7" ry="26" fill="rgba(255,255,255,0.22)" transform="rotate(-10 168 168)"/>
  <text x="200" y="346" font-family="Georgia,serif" font-size="17" font-weight="bold" fill="white" text-anchor="middle">{title}</text>
  <text x="200" y="366" font-family="Arial" font-size="10" fill="rgba(255,255,255,0.82)" text-anchor="middle">{sub}</text>
  <text x="44" y="96" font-family="Arial" font-size="20" fill="rgba(255,255,255,0.7)" text-anchor="middle">✨</text>
  <text x="356" y="296" font-family="Arial" font-size="18" fill="rgba(255,255,255,0.6)" text-anchor="middle">🌿</text>
  <text x="44" y="216" font-family="Arial" font-size="14" fill="rgba(255,255,255,0.5)" text-anchor="middle">💧</text>
</svg>"""

for filename, title, sub, emoji, c1, c2 in products:
    svg = make_svg(title, sub, emoji, c1, c2)
    path = os.path.join(DIR, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"✅ {filename}")

print("All 11 images generated!")
