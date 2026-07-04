import { c as createComponent } from './astro-component_Da3E-49o.mjs';
import 'piccolore';
import { p as createRenderInstruction, m as maybeRenderHead, b as addAttribute, r as renderTemplate, c as renderComponent, u as unescapeHTML } from './entrypoint_DOXLze2Z.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className = "", "data-id": dataId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 50"${addAttribute(className, "class")} role="img" aria-label="Gewinnarchitekt Logo"${addAttribute(dataId, "data-id")}> <text x="10" y="35" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="-0.5"> <tspan fill="#16a34a">Gewinn</tspan><tspan fill="currentColor">architekt</tspan> </text> </svg>`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/Logo.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/herangehensweise", label: "Herangehensweise" },
    { href: "/angebot", label: "Angebot" },
    { href: "#kontakt", label: "Kontakt" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#e5e7eb]"> <div class="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between"> <a href="/" aria-label="Gewinnarchitekt — zur Startseite" class="flex items-center"> ${renderComponent($$result, "Logo", $$Logo, { "class": "h-10 w-auto text-[#1f2937]" })} </a> <nav aria-label="Hauptnavigation" class="hidden lg:flex items-center gap-8"> ${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")} class="text-[13px] text-[#1f2937] hover:text-[#16a34a] transition-colors"> ${l.label} </a>`)} </nav> <div class="flex items-center gap-3"> <a href="https://tidycal.com/gewinnarchitekt/potenzialcheck" target="_blank" rel="noopener" data-ph-event="cta_clicked" data-ph-location="nav" class="hidden md:inline-flex items-center gap-2 bg-[#16a34a] text-white text-[13px] font-medium px-4 py-2.5 hover:bg-[#15803d] transition-colors">
Termin vereinbaren
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> </a> <button id="mobile-menu-btn" class="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-[#e5e7eb] text-[#1f2937]" aria-label="Menü öffnen" aria-expanded="false"> <svg id="menu-icon-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 block"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg> <svg id="menu-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 hidden"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> <div id="mobile-menu" class="hidden lg:hidden border-t border-[#e5e7eb] bg-white"> <nav class="max-w-[1280px] mx-auto px-6 py-4 flex flex-col"> ${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")} class="mobile-menu-link flex items-baseline py-3 border-b border-[#f1f5f9] text-[14px] text-[#1f2937]"> ${l.label} </a>`)} <a href="https://tidycal.com/gewinnarchitekt/potenzialcheck" target="_blank" rel="noopener" data-ph-event="cta_clicked" data-ph-location="nav_mobile" class="mobile-menu-link mt-4 inline-flex items-center justify-between bg-[#16a34a] text-white text-[13px] font-medium px-4 py-3">
Termin vereinbaren
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> </a> </nav> </div> </header> ${renderScript($$result, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/Nav.astro", void 0);

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full contact-form-container" data-astro-cid-svshx33u> <!-- Success State Message (completely replaces the form on HTTP 200) --> <div id="success-message" class="hidden py-8 border-t border-[#e5e7eb]" data-astro-cid-svshx33u> <p class="text-[16px] leading-[1.65] text-[#1f2937] font-medium" data-astro-cid-svshx33u>
Danke — Ihre Nachricht ist angekommen und ich werde mich mich zeitnah melden.
</p> </div> <!-- Form element --> <form id="contact-form" class="space-y-6" data-astro-cid-svshx33u> <!-- Error Message Banner (shown inline above the fields/button if POST fails) --> <div id="error-message" class="hidden p-4 bg-[#f9fafb] border border-[#1f2937]/15 text-[#1f2937] text-[14px] leading-relaxed" data-astro-cid-svshx33u>
Das hat nicht geklappt. Schreiben Sie mir direkt an <a href="mailto:info@gewinnarchitekt.ch" class="text-[#16a34a] hover:underline font-medium" data-astro-cid-svshx33u>info@gewinnarchitekt.ch</a> oder rufen Sie an: +41 76 535 26 04.
</div> <!-- 1. E-Mail --> <div class="space-y-2" data-astro-cid-svshx33u> <label for="email" class="block text-[11px] uppercase tracking-[0.18em] font-medium text-[#6b7280]" data-astro-cid-svshx33u>
E-Mail *
</label> <input type="email" name="email" id="email" required class="w-full bg-[#f9fafb] border border-[#e5e7eb] px-4 py-3.5 text-[14px] text-[#1f2937] placeholder-[#6b7280]/50 focus:outline-none focus:border-[#16a34a] transition-colors rounded-none" data-astro-cid-svshx33u> </div> <!-- 2. Vor- und Nachname --> <div class="space-y-2" data-astro-cid-svshx33u> <label for="name" class="block text-[11px] uppercase tracking-[0.18em] font-medium text-[#6b7280]" data-astro-cid-svshx33u>
Vor- und Nachname *
</label> <input type="text" name="name" id="name" required class="w-full bg-[#f9fafb] border border-[#e5e7eb] px-4 py-3.5 text-[14px] text-[#1f2937] placeholder-[#6b7280]/50 focus:outline-none focus:border-[#16a34a] transition-colors rounded-none" data-astro-cid-svshx33u> </div> <!-- 4. Firmenname (optional) --> <div class="space-y-2" data-astro-cid-svshx33u> <label for="firmenname" class="block text-[11px] uppercase tracking-[0.18em] font-medium text-[#6b7280]" data-astro-cid-svshx33u>
Firmenname
</label> <input type="text" name="firmenname" id="firmenname" class="w-full bg-[#f9fafb] border border-[#e5e7eb] px-4 py-3.5 text-[14px] text-[#1f2937] placeholder-[#6b7280]/50 focus:outline-none focus:border-[#16a34a] transition-colors rounded-none" data-astro-cid-svshx33u> </div> <!-- 5. Nachricht --> <div class="space-y-2 nachricht-wrapper" data-astro-cid-svshx33u> <label for="nachricht" class="block text-[11px] uppercase tracking-[0.18em] font-medium text-[#6b7280]" data-astro-cid-svshx33u>
Nachricht *
</label> <textarea name="nachricht" id="nachricht" required class="w-full bg-[#f9fafb] border border-[#e5e7eb] px-4 py-3.5 text-[14px] text-[#1f2937] placeholder-[#6b7280]/50 focus:outline-none focus:border-[#16a34a] transition-colors rounded-none resize-y" data-astro-cid-svshx33u></textarea> </div> <!-- Hidden Honeypot Field (visually hidden + aria-hidden) --> <div style="display: none;" aria-hidden="true" data-astro-cid-svshx33u> <label for="company_website" data-astro-cid-svshx33u>Company Website</label> <input type="text" name="company_website" id="company_website" tabindex="-1" autocomplete="off" data-astro-cid-svshx33u> </div> <!-- Actions & Datenschutz note --> <div class="pt-4 space-y-4" data-astro-cid-svshx33u> <button type="submit" id="submit-btn" class="inline-flex items-center justify-center bg-[#16a34a] text-white text-[14px] font-medium px-6 py-4 hover:bg-[#15803d] transition-colors cursor-pointer rounded-none disabled:bg-[#6b7280] disabled:cursor-not-allowed w-full sm:w-auto" data-astro-cid-svshx33u>
Senden
</button> <p class="text-[12px] leading-relaxed text-[#6b7280]" data-astro-cid-svshx33u>
Mit dem Absenden stimmen Sie der <a href="/datenschutz" class="text-[#16a34a] hover:underline" target="_blank" rel="noopener" data-astro-cid-svshx33u>Datenschutzerklärung</a> zu.
</p> </div> </form> </div> ${renderScript($$result, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/ContactForm.astro", void 0);

const $$Profil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="kontakt" class="bg-white border-b border-[#e5e7eb]"> <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28"> <!-- Eyebrow & Heading --> <div class="grid grid-cols-12 gap-6 lg:gap-10 mb-16"> <div class="col-span-12 lg:col-span-2"> <span class="label-eyebrow">Kontakt</span> </div> <div class="col-span-12 lg:col-span-10"> <h2 class="font-serif-display text-[#1f2937] font-light leading-[1.05] text-[36px] sm:text-[48px] lg:text-[60px]">
Lassen Sie uns sprechen.
</h2> </div> </div> <!-- Main Two-Column Content --> <div class="grid grid-cols-12 gap-6 lg:gap-16 items-start lg:items-stretch"> <!-- LEFT COLUMN — PATH (4-step path list + booking CTA) --> <div class="col-span-12 lg:col-span-6 space-y-10"> <h3 class="font-serif-display text-[#1f2937] text-[22px] sm:text-[28px] leading-tight font-bold">
Der Weg zur <span class="text-[#16a34a]">Zusammenarbeit</span> </h3> <!-- Numbered steps --> <div class="space-y-8"> <!-- Step 1 --> <div class="border-t border-[#e5e7eb] pt-6"> <h4 class="font-serif-display text-[#1f2937] text-[20px] lg:text-[22px] font-semibold mb-2">20 Minuten Kennenlernen</h4> <p class="text-[15px] leading-[1.65] text-[#6b7280]">
Wir lernen uns kennen und schauen, ob die Chemie stimmt.
</p> </div> <!-- Step 2 --> <div class="border-t border-[#e5e7eb] pt-6"> <h4 class="font-serif-display text-[#1f2937] text-[20px] lg:text-[22px] font-semibold mb-2">60 Minuten Bestandesaufnahme</h4> <p class="text-[15px] leading-[1.65] text-[#6b7280]">
Ich verschaffe mir ein klares Bild Ihrer Preis-, Margen- und Kostenstruktur.
</p> </div> <!-- Step 3 --> <div class="border-t border-[#e5e7eb] pt-6"> <h4 class="font-serif-display text-[#1f2937] text-[20px] lg:text-[22px] font-semibold mb-2">Vorschlag prüfen</h4> <p class="text-[15px] leading-[1.65] text-[#6b7280]">
Sie erhalten einen konkreten Vorschlag, zugeschnitten auf Ihre Situation.
</p> </div> <!-- Step 4 --> <div class="border-t border-[#e5e7eb] pt-6"> <h4 class="font-serif-display text-[#1f2937] text-[20px] lg:text-[22px] font-semibold mb-2">Start der Zusammenarbeit</h4> <p class="text-[15px] leading-[1.65] text-[#6b7280]">
Wir starten sobald Sie zusagen.
</p> </div> </div> </div> <!-- RIGHT COLUMN — CONTACT FORM --> <div class="col-span-12 lg:col-span-6 space-y-10 mt-12 lg:mt-0"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> </div> </div> </section>`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/Profil.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#1f2937] text-white"> <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20"> <div class="grid grid-cols-12 gap-6 lg:gap-10"> <div class="col-span-12 lg:col-span-4"> ${renderComponent($$result, "Logo", $$Logo, { "class": "h-12 w-auto text-white" })} <p class="mt-5 text-[13px] text-white/55 max-w-[320px] leading-[1.6]">
Gewinnarchitektur. Pricing, Produktstrategie und
          Finanzmodellierung an der Schnittstelle, an der Marge entsteht.
</p> </div> <div class="col-span-6 lg:col-span-3"> <div class="label-eyebrow text-white/50 mb-4">Kontakt</div> <ul class="space-y-2 text-[14px] text-white/80"> <li>Gewinnarchitekt Aschwanden</li> <li>CHE-233.099.319</li> <li>8055 Zürich</li> <li>+41 76 535 26 04</li> </ul> </div> <div class="col-span-6 lg:col-span-3"> <div class="label-eyebrow text-white/50 mb-4">Navigation</div> <ul class="space-y-2 text-[14px] text-white/80"> <li><a href="/" class="hover:text-[#16a34a]">Home</a></li> <li><a href="/herangehensweise" class="hover:text-[#16a34a]">Herangehensweise</a></li> <li><a href="/angebot" class="hover:text-[#16a34a]">Angebot</a></li> </ul> </div> <div class="col-span-12 lg:col-span-2"> <div class="label-eyebrow text-white/50 mb-4">Rechtliches</div> <ul class="space-y-2 text-[14px] text-white/80"> <li><a href="/impressum" class="hover:text-[#16a34a]">Impressum</a></li> <li><a href="/datenschutz" class="hover:text-[#16a34a]">Datenschutz</a></li> </ul> </div> </div> <div class="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-white/50"> <span>
© ${(/* @__PURE__ */ new Date()).getFullYear()} Gewinnarchitekt · Karl Aschwanden
</span> <span class="tracking-[0.2em] uppercase">
Statik des Gewinns · Fig. 00
</span> </div> </div> </footer>`;
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SiteSchema = createComponent(($$result, $$props, $$slots) => {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gewinnarchitekt.ch/#organization",
        "name": "Gewinnarchitekt",
        "url": "https://gewinnarchitekt.ch/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gewinnarchitekt.ch/favicon.svg"
        },
        "description": "Beratung für Pricing und Profitarchitektur. Wertbasierte Preislogik, Finanzmodellierung und Controlling für Schweizer Startups und KMU",
        "areaServed": { "@type": "Country", "name": "Schweiz" },
        "founder": { "@id": "https://gewinnarchitekt.ch/#karl-aschwanden" },
        "knowsAbout": [
          "Pricing-Strategie",
          "Wertbasierte Preisgestaltung",
          "Profitarchitektur",
          "Deckungsbeitragsrechnung",
          "Finanzmodellierung",
          "Unit Economics",
          "Controlling und Reporting"
        ],
        "sameAs": ["https://www.linkedin.com/company/gewinnarchitekt"]
      },
      {
        "@type": "Person",
        "@id": "https://gewinnarchitekt.ch/#karl-aschwanden",
        "name": "Karl Aschwanden",
        "url": "https://gewinnarchitekt.ch/#kontakt",
        "jobTitle": "Gründer",
        "worksFor": { "@id": "https://gewinnarchitekt.ch/#organization" },
        "description": "Gründer von Gewinnarchitekt. Über 20 Jahre Erfahrung in Commercial und Finance, Chartered Financial Modeler (CFM).",
        "alumniOf": [
          { "@type": "CollegeOrUniversity", "name": "IE Business School" },
          {
            "@type": "CollegeOrUniversity",
            "name": "Fachhochschule Nordwestschweiz FHNW"
          }
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional certification",
          "name": "Chartered Financial Modeler (CFM)",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Financial Modeling Institute"
          }
        },
        "knowsAbout": [
          "Pricing-Strategie",
          "Wertbasierte Preisgestaltung",
          "Finanzmodellierung",
          "Deckungsbeitrag",
          "Unit Economics",
          "Controlling"
        ],
        "sameAs": ["https://www.linkedin.com/in/karlaschwanden/"]
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(siteSchema)));
}, "C:/Users/Gewinnarchitekt/repos/gewinnarchitekt-site/src/components/SiteSchema.astro", void 0);

export { $$Footer as $, $$Profil as a, $$Nav as b, $$SiteSchema as c, renderScript as r };
