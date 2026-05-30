// destinations/bangui.js
const BanguiDestination = {
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
            <span class="meta-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600;">Sango Name:</span>
            <span class="meta-value highlight" style="color: #38bdf8; font-size: 1.35rem; font-weight: 700;">{{ sangoName }}</span>
          </div>
          
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
          <p class="route-sub" style="font-size: 1.15rem; color: #38bdf8; font-weight: 500; margin: 0;">Route: San Francisco (SFO) ➔ Bangui (BGF)</p>
        </header>

        <div class="grid-layout" style="display: flex; flex-direction: column; gap: 1.75rem; margin-top: 1.75rem;">
          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Extreme Isolation & Western Service Withdrawal</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Bangui remains an isolated outpost within the Central African Republic, a region frequently highlighted as one of the last great wildernesses on earth. Due to this extreme isolation, Air France historically served as the singular Western carrier linking the destination to Paris (CDG). However, the airline operated its final route on February 1, 2026, citing low passenger volume and the operational complications of Nigerian airspace closures. 
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">External Geopolitical Shocks</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Remaining service is dependent on occasional regional carriers—including RwandAir, Ethiopian Airlines, and Royal Air Maroc—requiring highly complex long-haul connections from the United States. Consequently, the war in Iran and subsequent airspace disruptions have become a primary catalyst for dramatic airfare spikes over the last several months.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Internal Conflict & Cost of Living Pressures</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Even prior to the Strait of Hormuz supply shutdown, entry costs were exceptionally high. A decade-long internal conflict, marked by repeated shifts in control of the capital city, has structurally inflated the cost of living. This economic premium severely impacts local conditions, where average individual GDP remains below $700.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Supply Chain Bottlenecks & Overland Logistics</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              The country's landlocked position deep within Central Africa removes any access to maritime trade routes. Consequently, critical aviation supplies like jet fuel must be transported via overland trails passing through highly volatile regions. This process is vastly slower and less efficient than maritime tankers, leaving supply lines highly vulnerable to disruption by various active regional armed groups, including Séléka offshoots and anti-Balaka factions.
            </p>
          </section>
        </div>
      </main>
      
    </div>
  `,
  setup() {
    const { ref } = Vue;
    const countryName = ref('Central African Republic')
    const cityName = ref('Bangui')
    const sangoName = ref('Bangî')
    const airportName = ref("Bangui-M'poko International Airport, Central African Republic")
    const oilIntensity = ref('0.31 Barrels per $1,000 GDP')
    const lngDependency = ref('0%')
    const flagUrl = ref('https://flagcdn.com/w320/cf.png')

    return {
      countryName, cityName, sangoName, airportName, oilIntensity, lngDependency, flagUrl
    }
  }
};
