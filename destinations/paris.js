// destinations/paris.js
const ParisDestination = {
  template: `
    <div class="destination-container" style="display: flex; width: 100%; min-height: 100vh; background-color: #0f172a; color: #cbd5e1;">
      
      <aside class="side-panel" style="width: 340px; background-color: #1e293b; padding: 2.5rem 2rem; display: flex; flex-direction: column; position: fixed; height: 100vh; max-height: 100vh; overflow-y: auto; box-sizing: border-box; border-right: 1px solid #334155; z-index: 999;">
        <div class="flag-container" style="width: 100%; margin-bottom: 1.5rem;">
          <img :src="flagUrl" :alt="'Flag of ' + countryName" class="drc-flag" style="width: 100%; height: auto; border-radius: 6px;" />
        </div>
        
        <h1 class="city-title" style="font-size: 2.25rem; margin: 0 0 0.25rem 0; font-weight: 800; letter-spacing: -0.025em; color: #ffffff;">{{ cityName }}</h1>
        <p class="airport-sub" style="font-size: 0.9rem; color: #94a3b8; margin: 0;">{{ airportName }}</p>
        
        <hr class="divider" style="border: 0; height: 1px; background-color: #334155; margin: 2rem 0;" />
        
        <div class="meta-section" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="meta-item" style="display: flex; flex-direction: column; gap: 0.35rem;">
            <span class="meta-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600;">Oil Intensity:</span>
            <span class="meta-value" style="font-size: 1.15rem; font-weight: 500; color: #e2e8f0;">{{ oilIntensity }}</span>
          </div>
          
          <div class="meta-item" style="display: flex; flex-direction: column; gap: 0.35rem;">
            <span class="meta-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600;">LNG Dependency:</span>
            <span class="meta-value" style="font-size: 1.15rem; font-weight: 500; color: #e2e8f0;">{{ lngDependency }}</span>
          </div>
        </div>
        
        <a href="#/" class="back-btn" style="margin-top: 2rem; background-color: #38bdf8; color: #0f172a; padding: 0.85rem; border-radius: 8px; font-weight: 700; text-align: center; text-decoration: none; display: block;">⬅ Return to Globe</a>

        <div class="panel-footer" style="margin-top: 1.5rem; font-size: 0.75rem; color: #475569; text-align: center;">
          <p>Data Context: 2026 Geopolitical Briefing</p>
        </div>
      </aside>

      <main class="main-content" style="margin-left: 340px; flex: 1; padding: 3.5rem; box-sizing: border-box; max-width: 1050px; background-color: #0f172a;">
        <header class="content-header" style="margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin: 0 0 0.5rem 0; color: #ffffff; font-weight: 800;">Flight Pricing & Geopolitical Analysis</h2>
          <p class="route-sub" style="font-size: 1.15rem; color: #38bdf8; font-weight: 500; margin: 0;">Route: San Francisco (SFO) ➔ Paris (CDG)</p>
        </header>

        <div class="grid-layout" style="display: flex; flex-direction: column; gap: 1.75rem; margin-top: 1.75rem;">
          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Double-Front Energy Shocks</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Flights to Paris have escalated by an estimated 12% to 20% over the last two months. This sharp upward trend stems directly from severe fuel surcharges, compounding the effects of the conflict in Ukraine—which severed Russian oil and gas access—and the crisis in Iran, which has disrupted energy supplies out of the Middle East. With a high national LNG dependency of 68.5%, regional transportation networks remain highly vulnerable to these international market shocks.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Strategic Capacity Restraints</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Rather than adjusting ticket pricing downward to bolster traveler volume, carriers operating through Paris are actively scaling back their available seat capacity. This targeted reduction keeps base inventory tight and prices elevated, driving a structural, systemic price surge throughout mainland Europe's aviation corridors.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Gateway Dynamics & Intracontinental Competition</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Because Charles de Gaulle functions alongside Frankfurt as one of the twin primary gateways into mainland Europe, long-haul international flights face minimal alternative routes, forcing significant premiums. In stark contrast, intracontinental flight routes are heavily constrained by fierce rail competition from operators like Eurostar, rendering shorter regional flights some of the most budget-friendly transit options on the continent.
            </p>
          </section>
        </div>
      </main>
      
    </div>
  `,
  setup() {
    const { ref } = Vue;
    const countryName = ref('France')
    const cityName = ref('Paris')
    const airportName = ref('Charles de Gaulle International Airport, France')
    const oilIntensity = ref('0.14 barrels per $1,000 GDP')
    const lngDependency = ref('68.5%')
    const flagUrl = ref('https://flagcdn.com/w320/fr.png')

    return {
      countryName, cityName, airportName, oilIntensity, lngDependency, flagUrl
    }
  }
};
