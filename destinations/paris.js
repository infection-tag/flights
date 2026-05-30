const ParisDestination = {
  template: `
    <div style="color: #fff; padding: 24px; max-width: 800px; margin: 0 auto; background: #0b0f19; font-family: system-ui, -apple-system, sans-serif;">
      <div style="border-bottom: 2px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; font-size: 32px; color: #ff9f43;">Charles de Gaulle International Airport, France</h1>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">Oil Intensity</div>
          <div style="font-size: 20px; font-weight: bold; color: #f1f5f9; margin-top: 4px;">0.14 barrels per $1,000 GDP</div>
        </div>
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #00ffcc;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">LNG Dependency</div>
          <div style="font-size: 20px; font-weight: bold; color: #f1f5f9; margin-top: 4px;">68.5%</div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px; line-height: 1.6; font-size: 15px; color: #cbd5e1;">
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">War Surcharges</h3>
        <p style="margin: 0;">Flights to Paris have gone up in the last two months by an estimated 12-20%. The war in Ukraine (which has cut off gas and oil from Russia) and the war in Iran (which has cut off gas and oil from the Middle East) has caused major fuel surcharges.</p>
        
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">Capacity Reduction Tactics</h3>
        <p style="margin: 0;">Instead of lowering prices to stimulate demand, flights in and out of Paris are lowering the number of seats, which keep prices high but continue to inculcate a major price jump in Europe.</p>
        
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">Gateway Pricing Dynamics</h3>
        <p style="margin: 0;">Similarly, since Charles de Gaulle acts as one of two gateways to mainland Europe (the second being Frankfurt, a hub for Lufthansa), international flights are significantly more expensive. Intracontinental flights, however, compete with the Eurostar and are one of the cheapest ways to get around.</p>
      </div>

      <div style="margin-top: 40px; border-top: 1px solid #334155; padding-top: 20px; text-align: right;">
        <a href="#/" style="color: #00ffcc; text-decoration: none; font-size: 14px;">← Return to Flight Map Explorer</a>
      </div>
    </div>
  `
};
