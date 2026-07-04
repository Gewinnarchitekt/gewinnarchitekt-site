import { c as createComponent } from './astro-component_Da3E-49o.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, c as renderComponent, e as defineScriptVars, d as renderHead } from './entrypoint_DOXLze2Z.mjs';
import { r as renderScript, c as $$SiteSchema, b as $$Nav, a as $$Profil, $ as $$Footer } from './700_BH32JICL.mjs';
import 'clsx';

const $$GewinnVenn = createComponent(($$result, $$props, $$slots) => {
  const zones = [
    {
      id: "kunden",
      label: "Kunden",
      text: "Nur wenn man die Bedürfnisse der Kunden versteht, kann man Lösungen entwickeln, für die echtes Interesse und eine hohe Zahlungsbereitschaft bestehen.",
      x: 50,
      y: 25,
      popover: "below"
    },
    {
      id: "markt",
      label: "Markt",
      text: "Der Markt entscheidet über das langfristige Potential des eigenen Angebots. Die bestehende Konkurrenz über die Schwierigkeit, damit Erfolg zu haben.",
      x: 30.1,
      y: 74.6,
      popover: "above"
    },
    {
      id: "firma",
      label: "Firma",
      text: "Nur wenn sämtliche Ressourcen aufeinander abgestimmt sind, wird die Firma langfristig Erfolg haben.",
      x: 69.9,
      y: 74.6,
      popover: "above"
    },
    {
      id: "volumen",
      label: "Volumen",
      text: "Eine klare Positionierung und starke Differenzierung gegenüber der Konkurrenz beeinflussen das Absatzvolumen positiv.",
      x: 36.8,
      y: 45.9,
      popover: "right"
    },
    {
      id: "marge",
      label: "Marge",
      text: "Die optimale Marge bringt Attraktivität für den Kunden mit Profitabilität für die Firma in Einklang.",
      x: 63.2,
      y: 45.9,
      popover: "left"
    },
    {
      id: "kosten",
      label: "Kosten",
      text: "Eine optimierte Kostenstruktur ermöglicht strategische Vorteile gegenüber der Konkurrenz.",
      x: 50,
      y: 73.4,
      popover: "above"
    },
    {
      id: "gewinn",
      label: "Gewinn",
      text: "Eine optimale Preisgestaltung und Profitarchitektur berücksichtigt sämtliche Einflussfaktoren: Volumen × Marge − Kosten.",
      x: 50,
      y: 55.1,
      popover: "right"
    }
  ];
  zones.find((z) => z.id === "gewinn");
  return renderTemplate`${maybeRenderHead()}<div class="ga-venn-root" data-venn-root data-astro-cid-5uslst3o> <!-- Hints (above graphic) --> <p class="ga-hint-mobile mb-6 text-center text-[13px] text-[#6b7280] md:hidden" data-astro-cid-5uslst3o>
Begriffe antippen für Erklärung.
</p> <p class="ga-hint-desktop mb-4 text-center text-[13px] text-[#6b7280] hidden md:block" data-astro-cid-5uslst3o>
Bereiche anklicken für die Erklärung.
</p> <!-- Desktop interactive Venn diagram (md and up only) --> <div class="ga-venn-stage hidden md:block" data-venn-stage data-astro-cid-5uslst3o> <svg viewBox="0 0 680 492" role="img" aria-labelledby="venn-t venn-d" class="ga-venn-svg" data-astro-cid-5uslst3o> <title id="venn-t">Gewinn aus drei Perspektiven — interaktiv</title> <desc id="venn-d" data-astro-cid-5uslst3o>
Interaktives Diagramm mit drei überlappenden Kreisen für Kunden, Markt und Finanzen.
        Sieben Bereiche auswählbar für Erklärungen.
</desc> <circle class="ga-c ga-kunde" cx="340" cy="193" r="140" data-astro-cid-5uslst3o></circle> <circle class="ga-c ga-markt" cx="269" cy="316" r="140" data-astro-cid-5uslst3o></circle> <circle class="ga-c ga-firma" cx="411" cy="316" r="140" data-astro-cid-5uslst3o></circle> <g aria-hidden="true" class="ga-svg-labels ga-svg-labels--hidden" data-astro-cid-5uslst3o> <text class="ga-name ga-t-kunde" x="340" y="123" text-anchor="middle" data-astro-cid-5uslst3o>Kunden</text> <text class="ga-name ga-t-markt" x="205" y="367" text-anchor="middle" data-astro-cid-5uslst3o>Markt</text> <text class="ga-name ga-t-firma" x="475" y="367" text-anchor="middle" data-astro-cid-5uslst3o>Finanzen</text> <text class="ga-lever" x="250" y="226" text-anchor="middle" data-astro-cid-5uslst3o>Volumen</text> <text class="ga-lever" x="430" y="226" text-anchor="middle" data-astro-cid-5uslst3o>Marge</text> <text class="ga-lever" x="340" y="361" text-anchor="middle" data-astro-cid-5uslst3o>Kosten</text> <text class="ga-gewinn" x="340" y="271" text-anchor="middle" data-astro-cid-5uslst3o>Gewinn</text> </g> </svg> ${zones.map((z) => renderTemplate`<button type="button"${addAttribute(["ga-label-btn", z.id === "gewinn" && "ga-label-btn--gewinn"], "class:list")}${addAttribute(`left:${z.x}%;top:${z.y}%`, "style")}${addAttribute(z.id, "data-zone")}${addAttribute(z.popover, "data-popover")} aria-expanded="false" aria-controls="venn-mobile-panel venn-popover" data-astro-cid-5uslst3o> ${z.label} </button>`)} <!-- Desktop popover --> <div id="venn-popover" class="ga-popover" role="dialog" aria-label="Erklärung" aria-modal="true" hidden data-venn-popover data-astro-cid-5uslst3o> <button type="button" class="ga-popover-close" aria-label="Schliessen" data-popover-close data-astro-cid-5uslst3o> <span aria-hidden="true" data-astro-cid-5uslst3o>×</span> </button> <h3 class="font-serif-display text-[#1f2937] text-[18px] leading-tight mb-3" data-popover-title data-astro-cid-5uslst3o></h3> <p class="text-[14px] leading-[1.65] text-[#6b7280]" data-popover-text data-astro-cid-5uslst3o></p> </div> </div> <!-- Mobile-only alternative layout (below md) --> <div class="md:hidden space-y-6 mt-4" data-venn-mobile-interactive data-astro-cid-5uslst3o> <!-- Small visual Venn diagram (non-interactive) --> <div class="relative w-[280px] h-[280px] mx-auto mb-8 select-none animate-fadeIn" aria-hidden="true" data-astro-cid-5uslst3o> <!-- Circle 1 (Kunden) --> <div class="absolute w-44 h-44 rounded-full bg-[#1f9e8e]/5 border border-[#1f9e8e]/20 left-[52px] top-0" data-astro-cid-5uslst3o> <span class="absolute left-1/2 -translate-x-1/2 top-6 text-[12px] font-semibold text-[#15706a]/70 font-sans tracking-wide" data-astro-cid-5uslst3o>Kunden</span> </div> <!-- Circle 2 (Markt) --> <div class="absolute w-44 h-44 rounded-full bg-[#c9892b]/5 border border-[#c9892b]/20 left-0 bottom-0" data-astro-cid-5uslst3o> <span class="absolute left-6 bottom-6 text-[12px] font-semibold text-[#8a5e16]/70 font-sans tracking-wide" data-astro-cid-5uslst3o>Markt</span> </div> <!-- Circle 3 (Firma) --> <div class="absolute w-44 h-44 rounded-full bg-[#5b6cc4]/5 border border-[#5b6cc4]/20 right-0 bottom-0" data-astro-cid-5uslst3o> <span class="absolute right-6 bottom-6 text-[12px] font-semibold text-[#3d49a0]/70 font-sans tracking-wide" data-astro-cid-5uslst3o>Firma</span> </div> <!-- Overlay badges ①②③④ --> <!-- ① Volumen (Kunden/Markt overlap) --> <div class="absolute left-[84px] top-[128px] w-7 h-7 rounded-full bg-white border border-[#d1d5db] flex items-center justify-center text-[15px] font-semibold text-[#4b5563] shadow-sm" data-astro-cid-5uslst3o>
①
</div> <!-- ② Marge (Kunden/Firma overlap) --> <div class="absolute right-[84px] top-[128px] w-7 h-7 rounded-full bg-white border border-[#d1d5db] flex items-center justify-center text-[15px] font-semibold text-[#4b5563] shadow-sm" data-astro-cid-5uslst3o>
②
</div> <!-- ③ Kosten (Markt/Firma overlap) --> <div class="absolute left-[126px] bottom-[50px] w-7 h-7 rounded-full bg-white border border-[#d1d5db] flex items-center justify-center text-[15px] font-semibold text-[#4b5563] shadow-sm" data-astro-cid-5uslst3o>
③
</div> <!-- ④ Gewinn (Center overlap) --> <div class="absolute left-[124px] top-[140px] w-8 h-8 rounded-full bg-[#16a34a] flex items-center justify-center text-[16px] font-bold text-white shadow-md z-20" data-astro-cid-5uslst3o>
④
</div> </div> <!-- Row 1: Chips (Kunden, Markt, Firma) --> <div class="flex flex-col items-center" data-astro-cid-5uslst3o> <div class="flex justify-center gap-3" data-astro-cid-5uslst3o> ${["kunden", "markt", "firma"].map((id) => {
    const z = zones.find((x) => x.id === id);
    return renderTemplate`<button type="button" class="ga-mobile-chip px-4 py-2 border border-[#e5e7eb] rounded-full text-[14px] text-[#4b5563] bg-white transition-all font-medium focus:outline-none ga-mobile-btn"${addAttribute(id, "data-mobile-zone")} data-row="row1" data-astro-cid-5uslst3o> ${z.label} </button>`;
  })} </div> <div class="ga-mobile-explanation hidden w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] p-4 text-left mt-3" data-mobile-explanation="row1" data-astro-cid-5uslst3o> <h4 class="font-serif-display text-[#1f2937] text-[16px] font-semibold mb-1" data-mobile-title data-astro-cid-5uslst3o></h4> <p class="text-[14px] leading-[1.65] text-[#6b7280]" data-mobile-text data-astro-cid-5uslst3o></p> </div> </div> <!-- Row 2: Relationship line (① Volumen × ② Marge − ③ Kosten = ④ Gewinn) --> <div class="flex flex-col items-center" data-astro-cid-5uslst3o> <div class="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[#6b7280] font-medium text-[16px] sm:text-[18px]" data-astro-cid-5uslst3o> <button type="button" class="ga-mobile-equation-btn border-b border-dashed border-[#d1d5db] pb-0.5 text-[#4b5563] transition-colors focus:outline-none ga-mobile-btn" data-mobile-zone="volumen" data-row="row2" data-astro-cid-5uslst3o>
① Volumen
</button> <span class="select-none text-[#9ca3af] font-light px-0.5" data-astro-cid-5uslst3o>×</span> <button type="button" class="ga-mobile-equation-btn border-b border-dashed border-[#d1d5db] pb-0.5 text-[#4b5563] transition-colors focus:outline-none ga-mobile-btn" data-mobile-zone="marge" data-row="row2" data-astro-cid-5uslst3o>
② Marge
</button> <span class="select-none text-[#9ca3af] font-light px-0.5" data-astro-cid-5uslst3o>−</span> <button type="button" class="ga-mobile-equation-btn border-b border-dashed border-[#d1d5db] pb-0.5 text-[#4b5563] transition-colors focus:outline-none ga-mobile-btn" data-mobile-zone="kosten" data-row="row2" data-astro-cid-5uslst3o>
③ Kosten
</button> <span class="select-none text-[#9ca3af] font-light px-0.5" data-astro-cid-5uslst3o>=</span> <button type="button" class="ga-mobile-equation-btn ga-mobile-equation-btn--gewinn border-b border-dashed border-green-300 pb-0.5 text-[#16a34a] transition-colors focus:outline-none ga-mobile-btn" data-mobile-zone="gewinn" data-row="row2" data-astro-cid-5uslst3o>
④ Gewinn
</button> </div> <div class="ga-mobile-explanation hidden w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] p-4 text-left mt-3" data-mobile-explanation="row2" data-astro-cid-5uslst3o> <h4 class="font-serif-display text-[#1f2937] text-[16px] font-semibold mb-1" data-mobile-title data-astro-cid-5uslst3o></h4> <p class="text-[14px] leading-[1.65] text-[#6b7280]" data-mobile-text data-astro-cid-5uslst3o></p> </div> </div> </div> <!-- Dummy elements for desktop script to pass initial check on mobile removal --> <div class="hidden" aria-hidden="true" data-astro-cid-5uslst3o> <div data-venn-mobile-panel data-astro-cid-5uslst3o> <div data-mobile-title data-astro-cid-5uslst3o></div> <div data-mobile-text data-astro-cid-5uslst3o></div> </div> </div> <!-- Zone data for JS --> <div class="hidden" aria-hidden="true" data-venn-zones data-astro-cid-5uslst3o> ${zones.map((z) => renderTemplate`<div${addAttribute(z.id, "data-zone-id")}${addAttribute(z.label, "data-zone-label")} data-astro-cid-5uslst3o> ${z.text} </div>`)} </div> </div>  ${renderScript($$result, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/GewinnVenn.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/GewinnVenn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Herangehensweise = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Herangehensweise;
  const PH_KEY = "phc_mybAcSer67kBjAqBJ9CMbGtQeQr9sZnXG34v6kTqCvxD";
  const PH_HOST = "https://eu.i.posthog.com";
  const ablaufSteps = [
    {
      num: "01",
      title: "Diagnose",
      subtitle: "Klarheit über Ihre Gewinnstruktur.",
      text: "Ihre eigenen Zahlen sind der Ausgangspunkt. Eine forensische Analyse von Preisen, Margen und Kosten zeigt, welche Produkte, Kunden und Kanäle Ihren Gewinn tragen und an welchen Stellen er abfliesst. Sie erhalten ein beziffertes Bild Ihrer Gewinnstruktur."
    },
    {
      num: "02",
      title: "Modellierung",
      subtitle: "Die Wirkung sehen, bevor Sie entscheiden.",
      text: "Auf dieser Grundlage entstehen dynamische Szenarien. Sensitivitätsanalysen zeigen, wie empfindlich Ihr Gewinn auf einzelne Stellschrauben reagiert, und machen die Bandbreite zwischen günstigem und ungünstigem Verlauf sichtbar. So kennen Sie die Wirkung einer Preis-, Volumen- oder Kostenänderung und ihr Risiko, bevor Sie sie umsetzen."
    },
    {
      num: "03",
      title: "Validierung",
      subtitle: "Annahmen, die am Markt halten.",
      text: "Belastbare Annahmen zur Zahlungsbereitschaft entstehen am Markt und beim Kunden. Ich prüfe die kritischen Punkte Ihres Modells direkt mit Referenzen, Vergleichen und gezielter Marktevidenz. Ihre Entscheidung ruht damit auf belegten Grössen."
    },
    {
      num: "04",
      title: "Umsetzung & Steuerung",
      subtitle: "Aus der Entscheidung wird gesteuerte Wirkung.",
      text: "Aus der validierten Entscheidung wird ein priorisierter Massnahmenplan. Ich begleite die Umsetzung, halte die Wirkung im Steuerungscockpit nach und plane vom Mehrjahres-Zielbild bis zum laufenden Forecast voraus. So bleibt Ihr Gewinn über das Jahr steuerbar und sichtbar."
    }
  ];
  return renderTemplate`<html lang="de"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Herangehensweise | Gewinnarchitekt</title>${renderComponent($$result, "SiteSchema", $$SiteSchema, {})}${renderTemplate(_a || (_a = __template(["<script>(function(){", `
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        posthog.init(PH_KEY, { api_host: PH_HOST, defaults: '2025-05-24' });
      })();</script>`])), defineScriptVars({ PH_KEY, PH_HOST }))}${renderHead()}</head> <body class="bg-white text-slate-900 antialiased"> ${renderComponent($$result, "Nav", $$Nav, {})} <!-- A) Herangehensweise + Venn (unified) -------------------------------- --> <section class="bg-white border-b border-[#e5e7eb]"> <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28"> <div class="grid grid-cols-12 gap-6 lg:gap-10"> <div class="col-span-12 lg:col-span-2"> <span class="label-eyebrow">Herangehensweise</span> </div> <div class="col-span-12 lg:col-span-10"> <h1 class="font-serif-display text-[#1f2937] font-light leading-[1.05] text-[36px] sm:text-[48px] lg:text-[60px]">
Gewinn entsteht aus einer <span class="text-[#16a34a]">gesamtheitlichen </span>Herangehensweise.
</h1> <p class="mt-6 max-w-[720px] text-[16px] leading-[1.6] text-[#6b7280]">
Gute Preis- und Profitentscheidungen entstehen dort, wo Kundenverständnis, Marktbeobachtung und Finanzkompetenz zusammenkommen.
</p> </div> </div> <div class="mt-10 lg:mt-12"> ${renderComponent($$result, "GewinnVenn", $$GewinnVenn, {})} </div> </div> </section> <!-- B) Ablauf ----------------------------------------------------------- --> <section class="bg-[#f9fafb] border-b border-[#e5e7eb]"> <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28"> <div class="grid grid-cols-12 gap-6 lg:gap-10 mb-16"> <div class="col-span-12 lg:col-span-2"> <span class="label-eyebrow">Ablauf</span> </div> <div class="col-span-12 lg:col-span-10"> <h2 class="font-serif-display text-[#1f2937] font-light leading-[1.05] text-[36px] sm:text-[48px] lg:text-[60px]">
Vom Befund zur <span class="text-[#16a34a]">belastbaren</span> Entscheidung.
</h2> </div> </div> <div class="ablauf-steps max-w-[720px] mx-auto"> <div class="flex flex-col"> ${ablaufSteps.map((step, i) => renderTemplate`<div class="relative pb-8 last:pb-0 pl-10 sm:pl-14">  ${i > 0 && renderTemplate`<div class="absolute left-[11px] sm:left-[15px] top-0 h-[36px] sm:h-[44px] w-[1px] bg-[#e5e7eb]" aria-hidden="true"></div>`}  ${i < ablaufSteps.length - 1 && renderTemplate`<div class="absolute left-[11px] sm:left-[15px] top-[60px] sm:top-[68px] bottom-0 w-[1px] bg-[#e5e7eb]" aria-hidden="true"></div>`}  <div class="absolute left-0 sm:left-1 top-[36px] sm:top-[44px] w-6 h-6 rounded-full border border-[#d1d5db] bg-white flex items-center justify-center shadow-sm" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3 text-[#4b5563]"> <line x1="12" y1="5" x2="12" y2="19"></line> <polyline points="19 12 12 19 5 12"></polyline> </svg> </div> <article class="bg-white border border-[#e5e7eb] rounded-[6px] p-8 lg:p-10 flex flex-col shadow-sm"> <span class="label-eyebrow mb-2 block">${step.subtitle}</span> <h3 class="font-serif-display text-[#1f2937] text-[20px] lg:text-[22px] font-semibold leading-tight mb-4"> ${step.title} </h3> <p class="text-[15px] lg:text-[16px] leading-[1.65] text-[#1f2937]"> ${step.text} </p> </article> </div>`)} </div> </div> </div> </section> ${renderComponent($$result, "Profil", $$Profil, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/pages/herangehensweise.astro", void 0);
const $$file = "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/pages/herangehensweise.astro";
const $$url = "/herangehensweise";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Herangehensweise,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
