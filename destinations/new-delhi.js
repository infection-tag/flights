// destinations/newdelhi.js
const NewDelhiDestination = {
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
            <span class="meta-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600;">Hindi Name:</span>
            <span class="meta-value highlight" style="color: #38bdf8; font-size: 1.35rem; font-weight: 700;">{{ hindiName }}</span>
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
          <p class="route-sub" style="font-size: 1.15rem; color: #38bdf8; font-weight: 500; margin: 0;">Route: San Francisco (SFO) ➔ New Delhi (DEL)</p>
        </header>

        <div class="grid-layout" style="display: flex; flex-direction: column; gap: 1.75rem; margin-top: 1.75rem;">
          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Overview</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Flights to New Delhi have gone up significantly. This is due to a combination of geopolitical factors and the aviation space's reliance on diversification that has seemed to plague it more than help it. Current crude oil pricing has led to a dramatic surge, though this has impacted some carriers more than others.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Direct Flight Monopoly & Market Shifts</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Air India, India's primary international airline and flagship carrier, has been the only airline to continually possess a direct route from SFO to DEL, flying over Anchorage, Russia, and China to eventually land in North India. However, due to the circumstantial monopoly over this route, surge pricing and growing demand have caused prices to steadily inflate. Similarly, the route's avoidance of volatile areas (Europe and the Middle East) have made the route significantly more desirable.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Airspace Restrictions & Domestic Carrier Financial Strain</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              United and Delta, who have historically flown the same route, are unable to fly over Russian airspace due to the war in Ukraine. Because of this, they have had to find alternate routes that cost airlines up to $12,000 per hour per individual plane. The route is no longer direct, and connecting flights charge a high premium.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Persian Gulf Transit Disruptions</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              The most common flights, carriers from the Persian Gulf (Emirates, Etihad, and Qatar Airlines) have seen the biggest surge due to the War in Iran, which may render their airports inoperable at any moment. They have also had to navigate around closed airspaces due to the same war.
            </p>
          </section>
        </div>
      </main>
      
    </div>
  `,
  setup() {
    const { ref } = Vue;
    const countryName = ref('India')
    const cityName = ref('New Delhi')
    const hindiName = ref('नई दिल्ली')
    const airportName = ref('Indira Gandhi International Airport, India')
    const oilIntensity = ref('0.53 barrels per $1,000 GDP')
    const lngDependency = ref('50.1%')
    const flagUrl = ref('https://flagcdn.com/w320/in.png')

    return {
      countryName, cityName, hindiName, airportName, oilIntensity, lngDependency, flagUrl
    }
  }
};
