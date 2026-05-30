const ShanghaiDestination = {
  template: `
    <div style="color: #fff; padding: 24px; max-width: 800px; margin: 0 auto; background: #0b0f19; font-family: system-ui, -apple-system, sans-serif;">
      <div style="border-bottom: 2px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; font-size: 32px; color: #ff9f43;">Shanghai Pudong International Airport, China</h1>
        <h2 style="margin: 4px 0 0 0; font-size: 20px; color: #94a3b8; font-weight: 400; font-style: italic;">Mandarin Chinese: 上海</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">Oil Intensity</div>
          <div style="font-size: 20px; font-weight: bold; color: #f1f5f9; margin-top: 4px;">0.28 barrels consumed per $1,000 GDP</div>
        </div>
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #00ffcc;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">LNG Dependency</div>
          <div style="font-size: 20px; font-weight: bold; color: #f1f5f9; margin-top: 4px;">24.5%</div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px; line-height: 1.6; font-size: 15px; color: #cbd5e1;">
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">War in Iran Insulation</h3>
        <p style="margin: 0;">Flights to Shanghai, unlike many other locations in the world right now, are not impacted by the war in Iran nearly as much as other destinations.</p>
        
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">Airspace & Economic Restrictions</h3>
        <p style="margin: 0;">However, the war in Ukraine has created an unequal playing field between Chinese carriers and American carriers, particularly since the direct route from China to the West Coast involves flying over Russian airspace -- which is restricted to American carriers. Because of this (and the economic war between the US and China), the US Department of the Treasury has limited the number of flights from China to even the playing field.</p>
        
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">Two-Tiered Pricing System</h3>
        <p style="margin: 0;">This has created a two-tiered system for pricing of flights to China -- flights that go through a non-taxed layover (Seoul, Tokyo) which cost around $800-900, and flights that are direct, which cost thousands.</p>
      </div>

      <div style="margin-top: 40px; border-top: 1px solid #334155; padding-top: 20px; text-align: right;">
        <a href="#/" style="color: #00ffcc; text-decoration: none; font-size: 14px;">← Return to Flight Map Explorer</a>
      </div>
    </div>
  `
};
