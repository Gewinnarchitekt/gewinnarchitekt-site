import { c as createComponent } from './astro-component_Da3E-49o.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, c as renderComponent, d as renderHead, e as defineScriptVars, u as unescapeHTML } from './entrypoint_DOXLze2Z.mjs';
import { $ as $$Footer, a as $$Profil, b as $$Nav, c as $$SiteSchema } from './700_BH32JICL.mjs';
import { $ as $$Image } from './_astro_assets_BB984NON.mjs';
import 'clsx';

const imgTowerFacade = new Proxy({"src":"/_astro/tower-facade.BvjBQDUx.png","width":2400,"height":1792,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/assets/tower-facade.png";
							}
							
							return target[name];
						}
					});

const imgRecursiveStairwell = new Proxy({"src":"/_astro/recursive-stairwell.l3YFPhnU.png","width":2150,"height":1952,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/assets/recursive-stairwell.png";
							}
							
							return target[name];
						}
					});

const imgModularBuilding = new Proxy({"src":"/_astro/modular-building.DfhbxPhg.png","width":2150,"height":1952,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/assets/modular-building.png";
							}
							
							return target[name];
						}
					});

const $$Leistungen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Leistungen;
  const { variant = "index" } = Astro2.props;
  const leistungen = [
    {
      num: "01",
      id: "gewinntreiber-verstehen",
      title: "Gewinntreiber verstehen",
      lead: "Transparenz über die echten Gewinntreiber schaffen.",
      description: "Verstehen Sie, wo Ihr Gewinn entsteht und wo er unterwegs verloren geht — durchgerechnet auf Ihren eigenen Zahlen, nicht geschätzt.",
      items: [
        "Produkt- & Sortimentsprofitabilität",
        "Kundenprofitabilität",
        "Preiswasserfall-Analyse",
        "Werttreiberbaum"
      ],
      imageSide: "right",
      alt: "Architektonische Fassade mit klar aufsteigenden Linien",
      image: imgTowerFacade
    },
    {
      num: "02",
      id: "preis-angebot-schaerfen",
      title: "Preis & Angebot schärfen",
      lead: "Kundennutzen, Preislogik und Marge in einer Linie.",
      description: "Erkennen Sie, wie Sie Ihr Angebot von der Value Proposition bis zur Preislogik schärfen — damit der Mehrwert greifbar wird und Ihre Marge nicht im Rabatt verschwindet.",
      items: [
        "Wert- und Nutzenargumentation",
        "Strategische Preisgestaltung",
        "Konditionen- & Rabattlogik",
        "Packaging & Angebotsstruktur"
      ],
      imageSide: "left",
      alt: "Treppenhaus in Sichtbeton",
      image: imgRecursiveStairwell
    },
    {
      num: "03",
      id: "planen-steuern",
      title: "Planen & steuern",
      lead: "Aufgrund der Vergangenheit aktiv die Zukunft planen.",
      description: "Erfahren Sie, ob die Richtung trägt, und erhalten Sie die Steuerung, die Ihren Gewinn planbar hält — vom Mehrjahres-Zielbild bis zum laufenden Forecast.",
      items: [
        "Mittel- und Langfristplanung",
        "Kurzfrist- und Liquiditätsplanung",
        "Reporting und Abweichungsanalyse",
        "Gewinn- und KPI-Dashboards"
      ],
      imageSide: "right",
      alt: "Modulare Gebäudestruktur mit klar gegliederten Elementen",
      image: imgModularBuilding
    }
  ];
  return renderTemplate`${variant === "index" && renderTemplate`${maybeRenderHead()}<section id="Leistungen" class="bg-[#f9fafb] border-b border-[#e5e7eb]"><div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28"><div class="grid grid-cols-12 gap-6 lg:gap-10 mb-16"><div class="col-span-12 lg:col-span-2"><span class="label-eyebrow">Leistungen</span></div><div class="col-span-12 lg:col-span-10"><h2 class="font-serif-display text-[#1f2937] font-light leading-[1.05] text-[36px] sm:text-[48px] lg:text-[60px]">
Dienstleistungen über ${" "}<span class="text-[#16a34a]">drei Bereiche</span> hinweg.
</h2><p class="mt-6 max-w-[640px] text-[16px] leading-[1.6] text-[#6b7280]">
Auf Ihre Bedürfnisse zugeschnitten entscheiden wir über den optimalen Einstiegspunkt.
</p></div></div><div class="border-t border-[#1f2937]">${leistungen.map((s) => renderTemplate`<article class="group grid grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-12 border-b border-[#e5e7eb] hover:bg-white transition-colors"><div class="col-span-12 lg:col-span-1"><span class="font-serif-display text-[#16a34a] text-[28px]">${s.num}</span></div><div class="col-span-12 lg:col-span-4"><h3 class="font-serif-display text-[#1f2937] text-[26px] lg:text-[30px] leading-[1.15]">${s.title}</h3><p class="mt-3 text-[14px] text-[#6b7280] italic font-serif-display">${s.lead}</p></div><div class="col-span-12 lg:col-span-6 lg:col-start-7"><p class="text-[15px] lg:text-[16px] leading-[1.65] text-[#1f2937]">${s.description}</p><a${addAttribute(`/angebot#${s.id}`, "href")} class="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#16a34a] hover:text-[#15803d] transition-colors">
Mehr erfahren
<span aria-hidden="true">→</span></a></div></article>`)}</div></div></section>`}${variant === "page" && renderTemplate`<section class="bg-white"><div class="max-w-[1280px] mx-auto px-6 lg:px-10">${leistungen.map((s, i) => renderTemplate`<article${addAttribute(s.id, "id")}${addAttribute(`grid grid-cols-12 gap-8 lg:gap-16 items-center py-16 lg:py-24 scroll-mt-24 ${i > 0 ? "border-t border-[#e5e7eb]" : ""}`, "class")}><div${addAttribute(`col-span-12 lg:col-span-7 lg:row-start-1 ${s.imageSide === "left" ? "lg:col-start-6" : "lg:col-start-1"}`, "class")}><div class="flex items-baseline gap-3"><span class="font-serif-display text-[#16a34a] text-[28px]">${s.num}</span><h2 class="font-serif-display text-[#1f2937] text-[26px] lg:text-[30px] leading-[1.15]">${s.title}</h2></div><p class="mt-3 text-[15px] text-[#6b7280] italic font-serif-display">${s.description}</p><ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">${s.items.map((it) => renderTemplate`<li class="flex items-start gap-3 text-[15px] leading-[1.5] text-[#1f2937]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mt-0.5 text-[#16a34a] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>${it}</span></li>`)}</ul></div><div${addAttribute(`col-span-12 lg:col-span-5 lg:row-start-1 ${s.imageSide === "left" ? "lg:col-start-1" : "lg:col-start-8"}`, "class")}><div class="relative aspect-[4/5] w-full bg-[#f3f4f6] border border-[#e5e7eb] overflow-hidden grayscale leistung-media">${renderComponent($$result, "Image", $$Image, { "src": s.image, "alt": s.alt, "widths": [400, 600, 800, 1200], "sizes": "(max-width: 1024px) 90vw, 40vw" })}</div></div></article>`)}</div></section>`}`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/Leistungen.astro", void 0);

const $$Angebot$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Angebot" class="bg-[#f9fafb] border-b border-[#e5e7eb]"> <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20"> <!-- Eyebrow + Headline + Subline --> <div class="grid grid-cols-12 gap-6 lg:gap-10 mb-10"> <div class="col-span-12 lg:col-span-2"> <span class="label-eyebrow">Angebot</span> </div> <div class="col-span-12 lg:col-span-10"> <h2 class="font-serif-display text-[#1f2937] font-light leading-[1.05] text-[36px] sm:text-[48px] lg:text-[60px]">
Eine Zusammenarbeit, die sich von selbst <span class="text-[#16a34a]">rechnet</span>.
</h2> <p class="mt-4 max-w-[700px] text-[15px] leading-[1.6] text-[#6b7280]">
Eine vollständige Gewinndiagnose über Ihr ganzes Geschäft. Durchgerechnet mit benanntem Potenzial und einem Cockpit, das bleibt.
</p> </div> </div> <!-- Card grid: 1 full-width + 2 half-width --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-5"> <!-- Karte 1 — Gewinn-Sprint (full width, featured) --> <article class="angebot-card angebot-card--featured lg:col-span-2 bg-[#f3f6f4] border border-[#e5e7eb] p-8 lg:p-10 flex flex-col"> <div class="flex items-center gap-3 mb-4"> <!-- Ebene 1 — Titel --> <h3 class="angebot-card__title font-serif-display text-[#1f2937] text-[22px] lg:text-[24px] leading-tight">
Gewinn-Sprint
</h3> </div> <!-- Ebene 2 — Preis --> <div class="flex items-baseline gap-3 mb-5"> <p class="angebot-card__price text-[20px] lg:text-[22px] font-semibold text-[#1f2937]">
CHF 30'000
</p> <span class="angebot-card__freq text-[12px] text-[#9ca3af]">einmalig</span> </div> <!-- Ebene 3 — Kernzusage --> <p class="angebot-card__promise text-[14px] font-medium text-[#16a34a] mb-4">
Garantie: CHF 150'000 oder Geld zurück
</p> <!-- Ebene 4 — Detail --> <p class="angebot-card__detail text-[14px] lg:text-[15px] leading-[1.6] text-[#1f2937] mb-4">
Treiberbaum · Deckungsbeitragsanalyse · Erlös-Leakage-Assessment · Preismodell-Überprüfung · Massnahmenplan · Business Cases · Steuerungscockpit
</p> <!-- Ebene 5 — Für … --> <p class="angebot-card__fit text-[13px] leading-[1.5] text-[#9ca3af] mt-auto">
Für schnelle Resultate.
</p> </article> <!-- Karte 2 — Gewinnoptimierung --> <article class="angebot-card bg-white border border-[#e5e7eb] p-8 lg:p-10 flex flex-col"> <!-- Ebene 1 — Titel --> <h3 class="angebot-card__title font-serif-display text-[#1f2937] text-[22px] lg:text-[24px] leading-tight mb-4">
Gewinnoptimierung
</h3> <!-- Ebene 2 — Preis --> <div class="flex items-baseline gap-3 mb-5"> <p class="angebot-card__price text-[20px] lg:text-[22px] font-semibold text-[#1f2937]">
CHF 4'900 / Monat
</p> <span class="angebot-card__freq text-[12px] text-[#9ca3af]">pro Monat</span> </div> <!-- Ebene 3 — Kernzusage --> <p class="angebot-card__promise text-[14px] font-medium text-[#16a34a] mb-4">
2 Arbeitspakete pro Monat + kontinuierliche Aktualisierung
</p> <!-- Ebene 4 — Detail --> <p class="angebot-card__detail text-[14px] lg:text-[15px] leading-[1.6] text-[#1f2937] mb-4">
Parallele Bearbeitung zweier Arbeitspakete, laufende Adaption bestehender Modelle und Dashboards.
</p> <!-- Ebene 5 — Für … --> <p class="angebot-card__fit text-[13px] leading-[1.5] text-[#9ca3af] mt-auto">
Für eine kontinuierliche Zusammenarbeit.
</p> </article> <!-- Karte 3 — Gewinnsteuerung --> <article class="angebot-card bg-white border border-[#e5e7eb] p-8 lg:p-10 flex flex-col"> <!-- Ebene 1 — Titel --> <h3 class="angebot-card__title font-serif-display text-[#1f2937] text-[22px] lg:text-[24px] leading-tight mb-4">
Gewinnsteuerung
</h3> <!-- Ebene 2 — Preis --> <div class="flex items-baseline gap-3 mb-5"> <p class="angebot-card__price text-[20px] lg:text-[22px] font-semibold text-[#1f2937]">
CHF 7'400 / Monat
</p> <span class="angebot-card__freq text-[12px] text-[#9ca3af]">pro Monat</span> </div> <!-- Ebene 3 — Kernzusage --> <p class="angebot-card__promise text-[14px] font-medium text-[#16a34a] mb-4">
Unlimitierte Arbeitspakete + durchgehende Kalibrierung
</p> <!-- Ebene 4 — Detail --> <p class="angebot-card__detail text-[14px] lg:text-[15px] leading-[1.6] text-[#1f2937] mb-4">
Profit-Steuerung als fester Bestandteil Ihrer Führung.
</p> <!-- Ebene 5 — Für … --> <p class="angebot-card__fit text-[13px] leading-[1.5] text-[#9ca3af] mt-auto">
Für Phasen, in denen sich viel bewegt und die Zahlen jederzeit stehen müssen.
</p> </article> </div> </div> </section>`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/Angebot.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Angebot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Angebot;
  const PH_KEY = "phc_mybAcSer67kBjAqBJ9CMbGtQeQr9sZnXG34v6kTqCvxD";
  const PH_HOST = "https://eu.i.posthog.com";
  const intro = "Erhalten Sie volle Transparenz über die Hebel zur Gewinnoptimierung — damit Sie wissen, wo Sie ansetzen, und die Grundlage haben, nachhaltig und profitabel zu wachsen.";
  const faqs = [
    {
      q: "Was ist ein Arbeitspaket?",
      a: "Ein abgegrenztes Thema mit festem Umfang und Termin, das gemeinsam definiert wird. Am Ende steht ein greifbares Ergebnis mit klarem Mehrwert. "
    },
    {
      q: "Wie lange dauert ein Arbeitspaket?",
      a: "Die einzelnen Arbeitspakete sind auf Ihre individuelle Situation ausgerichtet und werden im Rahmen der Bestandesaufnahme festgelegt."
    },
    {
      q: "Wann beginnt die bezahlte Zusammenarbeit?",
      a: "Erst wenn Sie von einem echten Mehrwert für Ihre Firma überzeugt sind. Erstgespräch, Bestandesaufnahme und Vorschlag sind kostenlos und unverbindlich."
    },
    {
      q: "Kann ich die Stufe wechseln oder kündigen?",
      a: "Jederzeit. Up- und Downgrade wie Kündigung sind jederzeit möglich."
    },
    {
      q: "Remote oder vor Ort?",
      a: "Standardmässig remote, nach Bedarf vor Ort in der Region Zürich."
    }
  ];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };
  return renderTemplate(_b || (_b = __template(['<html lang="de"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Gewinnarchitekt | Angebot</title>", '<script type="application/ld+json">', "</script>", "", '</head> <body class="bg-white text-slate-900 antialiased"> ', ' <!-- A) Header --------------------------------------------------------- --> <section class="bg-white border-b border-[#e5e7eb]"> <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28"> <div class="grid grid-cols-12 gap-6 lg:gap-10"> <div class="col-span-12 lg:col-span-2"> <span class="label-eyebrow">Leistungen</span> </div> <div class="col-span-12 lg:col-span-10"> <h1 class="font-serif-display text-[#1f2937] font-light leading-[1.05] text-[36px] sm:text-[48px] lg:text-[60px]">\nLeistungen im Überblick\n</h1> <p class="mt-6 max-w-[720px] text-[16px] leading-[1.6] text-[#6b7280]"> ', ' </p> </div> </div> </div> </section> <!-- B) Leistungen — aus Komponente mit variant="page" --------------- --> ', " <!-- C) Angebot --------------------------------------------------------- --> ", ' <!-- E) FAQ ------------------------------------------------------------ --> <section id="faq" class="bg-[#f9fafb] border-b border-[#e5e7eb]"> <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28"> <div class="grid grid-cols-12 gap-6 lg:gap-10 mb-16"> <div class="col-span-12 lg:col-span-2"> <span class="label-eyebrow">FAQ</span> </div> <div class="col-span-12 lg:col-span-10"> <h2 class="font-serif-display text-[#1f2937] font-light leading-[1.05] text-[36px] sm:text-[48px] lg:text-[60px]">\nHäufige Fragen.\n</h2> </div> </div> <div class="border-t border-[#1f2937]"> ', " </div> </div> </section> <!-- D) Contact — existing section component --------------------------- --> ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SiteSchema", $$SiteSchema, {}), unescapeHTML(JSON.stringify(faqJsonLd)), renderTemplate(_a || (_a = __template(["<script>(function(){", `
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        posthog.init(PH_KEY, { api_host: PH_HOST, defaults: '2025-05-24' });
      })();</script>`])), defineScriptVars({ PH_KEY, PH_HOST })), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), intro, renderComponent($$result, "Leistungen", $$Leistungen, { "variant": "page" }), renderComponent($$result, "Angebot", $$Angebot$1, {}), faqs.map((f) => renderTemplate`<div class="grid grid-cols-12 gap-6 lg:gap-10 py-8 lg:py-10 border-b border-[#e5e7eb]"> <div class="col-span-12 lg:col-span-4"> <h3 class="font-serif-display text-[#1f2937] text-[20px] lg:text-[22px] leading-[1.2]"> ${f.q} </h3> </div> <div class="col-span-12 lg:col-span-7 lg:col-start-6"> <p class="text-[15px] lg:text-[16px] leading-[1.65] text-[#1f2937]"> ${f.a} </p> </div> </div>`), renderComponent($$result, "Profil", $$Profil, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/pages/angebot.astro", void 0);
const $$file = "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/pages/angebot.astro";
const $$url = "/angebot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Angebot,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
