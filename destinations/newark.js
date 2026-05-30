const NewarkDestination = {
  template: `
    <div style="color: #fff; padding: 24px; max-width: 800px; margin: 0 auto; background: #0b0f19; font-family: system-ui, -apple-system, sans-serif;">
      <div style="border-bottom: 2px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; font-size: 32px; color: #ff9f43; letter-spacing: -0.5px;">Newark Liberty International Airport (EWR)</h1>
        <h2 style="margin: 4px 0 0 0; font-size: 20px; color: #94a3b8; font-weight: 400; font-style: italic;">New Jersey, United States of America</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; tracking-wider: 0.05em;">Oil Intensity</div>
          <div style="font-size: 20px; font-weight: bold; color: #f1f5f9; margin-top: 4px;">0.23 bbl / $1k GDP</div>
        </div>
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #00ffcc;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; tracking-wider: 0.05em;">LNG Dependency</div>
          <div style="font-size: 20px; font-weight: bold; color: #f1f5f9; margin-top: 4px;">0%</div>
        </div>
        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #ff9f43;">
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; tracking-wider: 0.05em;">Hub Concentration</div>
          <div style="font-size: 20px; font-weight: bold; color: #ef4444; margin-top: 4px;">United Airlines Fortress</div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px; line-height: 1.6; font-size: 15px; color: #cbd5e1;">
        
        <div style="background: rgba(30, 41, 59, 0.5); padding: 20px; border-radius: 8px; border: 1px solid #334155;">
          <h3 style="margin-top: 0; color: #f1f5f9; font-size: 18px;">Aviation Policy & The Domino Effect</h3>
          <p style="margin: 0 0 12px 0;">
            Newark serves as a premier case study for how structural regulatory shifts trigger a macroeconomic domino effect across consumer aviation. 
          </p>
          <p style="margin: 0;">
            In 2016, the FAA experimentally revoked United Airlines' exclusive slot monopolies across select terminals to introduce low-cost competition and suppress surcharged legacy airfares. However, severe carrier network incompatibilities yielded only a nominal, temporary dip in price mapping. Instead, it permanently mutated legacy pricing blueprints—spurring the sweeping baseline adoption of unbundled "Basic Economy" tiers and standardizing ancillary fees for rudimentary in-flight amenities.
          </p>
        </div>

        <div>
          <h3 style="margin-top: 0; color: #f1f5f9; font-size: 18px;">Geopolitical Fuel Shock & Operational Vulnerability</h3>
          <p style="margin: 0 0 12px 0;">
            Geopolitical instability tied to the conflict involving Iran has reverberated directly into the domestic energy market, causing regional oil prices to nearly double. Despite a highly efficient baseline oil intensity metric (0.23 bbl per $1,000 GDP), EWR remains hyper-sensitive to fuel volatility due to concentrated overhead costs.
          </p>
          <p style="margin: 0;">
            Compounding this issue is United's dominant consolidation of the Northeast corridor. Because Newark serves as a critical geographic linchpin, localized delays inside EWR create an immediate operational echo effect, dragging down schedule integrity and inflating asset deployment costs for linked flights across the continental United States.
          </p>
        </div>

        <div style="border-left: 3px solid #ef4444; padding-left: 16px; margin: 8px 0;">
          <h3 style="margin-top: 0; color: #f1f5f9; font-size: 18px;">Ultra-Low-Cost Carrier Erosion</h3>
          <p style="margin: 0;">
            The market capacity environment has tightened significantly following the recent bankruptcy of Spirit Airlines. This exit has stripped a critical volume of cheap inventories out of the regional marketplace, rendering budget carriers an increasingly inviable check against legacy pricing. This resulting contraction of overall supply has effectively squeezed price floors upward under aggressive corporate demand.
          </p>
        </div>

      </div>

      <div style="margin-top: 40px; border-top: 1px solid #334155; padding-top: 20px; text-align: right;">
        <a href="#/" style="color: #00ffcc; text-decoration: none; font-size: 14px; font-weight: 500; display: inline-flex; align-items: center; gap: 6px;">
          ← Return to Flight Map Explorer
        </a>
      </div>
    </div>
  `
};
