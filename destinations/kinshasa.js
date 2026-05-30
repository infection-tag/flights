// destinations/kinshasa.js
const KinshasaDestination = {
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
            <span class="meta-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600;">Lingala Name:</span>
            <span class="meta-value highlight" style="color: #38bdf8; font-size: 1.35rem; font-weight: 700;">{{ lingalaName }}</span>
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
          <p class="route-sub" style="font-size: 1.15rem; color: #38bdf8; font-weight: 500; margin: 0;">Route: San Francisco (SFO) ➔ Kinshasa (FIH)</p>
        </header>

        <div class="grid-layout" style="display: flex; flex-direction: column; gap: 1.75rem; margin-top: 1.75rem;">
          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Overview</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Several critical geopolitical events have combined to cause a major surge in flight pricing from San Francisco to Kinshasa, the world's largest Francophone city. Though the DRC has an astoundingly low oil intensity and 0% LNG dependency—primarily due to a widespread lack of a centralized grid system, forcing populations to rely heavily on biomaterial like wood—external global pressures have heavily penalized transit routes.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Global Energy & War Impacts</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              The ongoing war in Iran has caused a minor surge in pricing. Because the primary flight connections originate from or transit through the United States, the domestic economic strain of the war is felt on ticket prices. However, the DRC's low internal oil intensity provides some buffer and economic leeway compared to harder-hit global routes, such as flights bound for London Heathrow.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Health Bottlenecks & Routing Restrictions</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              A recent outbreak of Ebola in Northern and Eastern Congo (specifically affecting the Ituri, North Kivu, and South Kivu regions) has prompted strict international containment measures. The United States government now mandates that all incoming flights route exclusively through Washington Dulles International Airport (IAD). This creates an artificial bottleneck, compounding costs as US domestic flights bear the brunt of price surges triggered by the broader Hormuz crisis. Additionally, Uganda Airlines has entirely suspended its operations to Kinshasa due to health and containment fears.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Regional Airspace & Security Conflicts</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              The government of the DRC has openly accused Rwanda of actively jamming flight navigation systems over Rwandan airspace. This hostile interference stems from ongoing tensions regarding Rwanda's alleged funding of the March 23rd alliance (M23), a primary driver of instability in the eastern Congo. 
            </p>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              The resulting safety hazards have driven up insurance and flight pricing for carriers utilizing these flight paths. RwandAir, previously one of the most budget-friendly carriers out of Kinshasa, has completely shut down operations between Kigali and Kinshasa. Furthermore, a diplomatic fallout between Uganda Airlines and Rwanda has dissolved prior transit agreements that once facilitated smooth, affordable travel via Kigali.
            </p>
          </section>

          <section class="analysis-card" style="background-color: #1e293b; padding: 2.25rem; border-radius: 12px; border: 1px solid #334155;">
            <h3 style="margin: 0 0 1.25rem 0; color: #38bdf8; font-size: 1.4rem; font-weight: 700;">Airspace Avoidance</h3>
            <p style="line-height: 1.75; font-size: 1.05rem; margin: 0 0 1.25rem 0; color: #cbd5e1;">
              Compounding these issues, regional carriers must completely avoid Sudanese airspace due to the ongoing war and genocide in Darfur. Major African airlines, including Ethiopian Airlines (operating out of Addis Ababa) and Kenya Airways (operating out of Nairobi), are forced to divert away from efficient straight-line routes, adding significant flight time and fuel costs to the journey.
            </p>
          </section>
        </div>
      </main>
      
    </div>
  `,
  setup() {
    const { ref } = Vue;
    const countryName = ref('Democratic Republic of the Congo')
    const cityName = ref('Kinshasa')
    const lingalaName = ref('Kinsásá')
    const airportName = ref("N'djili International Airport, Democratic Republic of the Congo")
    const oilIntensity = ref('0.08 barrels per $1,000 GDP')
    const lngDependency = ref('0%')
    const flagUrl = ref('https://flagcdn.com/w320/cd.png')

    return {
      countryName, cityName, lingalaName, airportName, oilIntensity, lngDependency, flagUrl
    }
  }
};
