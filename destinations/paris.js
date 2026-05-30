const ParisDestination = {
  template: `
    <div style="color: #fff; padding: 24px; max-width: 800px; margin: 0 auto; background: #0b0f19; font-family: system-ui, -apple-system, sans-serif;">
      <div style="border-bottom: 2px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; font-size: 32px; color: #ff9f43;">Charles de Gaulle Airport, Paris, France</h1>
        <h2 style="margin: 4px 0 0 0; font-size: 20px; color: #94a3b8; font-weight: 400; font-style: italic;">French: Aéroport de Paris-Charles-de-Gaulle</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">Oil Intensity</div>
          <div style="font-size: 20px; font-weight: bold; color: #f1f5f9; margin-top: 4px;">0.14 barrels consumed per $1,000 GDP</div>
        </div>
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #00ffcc;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase;">LNG Dependency</div>
          <div style="font-size: 20px; font-weight: bold; color: #f1f5f9; margin-top: 4px;">15%</div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px; line-height: 1.6; font-size: 15px; color: #cbd5e1;">
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">Eco-Taxes & Environmental Policy</h3>
        <p style="margin: 0;">Paris CDG is a hub heavily impacted by European environmental policy, which has raised ticket prices through France's eco-tax on flights. The country's low oil intensity is due to its massive nuclear energy grid, but the aviation sector remains tethered to global oil prices and strict EU carbon offset mandates.</p>
        
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">The War in Ukraine & Routing Delays</h3>
        <p style="margin: 0;">Following the closure of Russian airspace due to the War in Ukraine, flights from Paris to Asia must take longer southern routes, increasing fuel burn and driving up prices for long-haul travel. Additionally, France's 15% LNG dependency means that winter energy spikes can raise the airport's operational costs, forcing airlines to adjust their base fares.</p>
        
        <h3 style="margin: 10px 0 0 0; color: #f1f5f9; font-size: 18px;">Labor Strikes & Operational Costs</h3>
        <p style="margin: 0;">Air France's dominant position at CDG creates a semi-monopoly on certain transatlantic routes, shielding prices from aggressive low-cost competition. Frequent air traffic control strikes in France add an element of operational risk, forcing airlines to price in the cost of potential delays and reroutings.</p>
      </div>

      <div style="margin-top: 40px; border-top: 1px solid #334155; padding-top: 20px; text-align: right;">
        <a href="#/" style="color: #00ffcc; text-decoration: none; font-size: 14px;">← Return to Flight Map Explorer</a>
      </div>
    </div>
  `
};
