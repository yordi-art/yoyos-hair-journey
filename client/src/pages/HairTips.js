const tips = [
  {
    title: '🌿 Oil Your Scalp Weekly',
    body: 'Apply Yoyo Herbal Hair Oil to your scalp every week and massage for 5–10 minutes to stimulate blood flow and promote growth.',
  },
  {
    title: '💧 Stay Hydrated',
    body: 'Drink at least 8 glasses of water daily. Hydration starts from within and directly affects hair moisture and shine.',
  },
  {
    title: '🥗 Eat Protein-Rich Foods',
    body: 'Hair is made of keratin (a protein). Include eggs, beans, fish, and nuts in your diet for stronger, thicker hair.',
  },
  {
    title: '🚿 Avoid Hot Water Washes',
    body: 'Hot water strips natural oils from your scalp. Use lukewarm or cool water when washing your hair.',
  },
  {
    title: '✂️ Trim Regularly',
    body: 'Trim your ends every 6–8 weeks to prevent split ends from traveling up the hair shaft and causing breakage.',
  },
  {
    title: '🧴 Deep Condition Monthly',
    body: 'Use a deep conditioning treatment once a month to restore moisture, elasticity, and softness to your hair.',
  },
];

export default function HairTips() {
  return (
    <div className="page">
      <h2 className="section-title">Hair Growth Tips</h2>
      {tips.map((t) => (
        <div className="tip-card" key={t.title}>
          <h3>{t.title}</h3>
          <p>{t.body}</p>
        </div>
      ))}
    </div>
  );
}
