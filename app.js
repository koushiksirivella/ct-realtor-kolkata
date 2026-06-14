/* ============================================================
   CT REALTOR — shared app.js (multi-page)
   Real business data (ctrealtor.co.in) · chrome injection ·
   page builders · interactions · video optimization.
   ============================================================ */

/* ---------- REAL business profile ---------- */
const SITE = {
  brand:"CT Realtor",
  tagline:"Prioritizes People Over Property",
  since:"2004",
  yearsLabel:"Since 2004",
  founder:"Chandra Sekhar Chowdhury",
  phone:"919734236920",
  phoneFmt:"+91 97342 36920",
  email:"info.ctrealtor@gmail.com",
  email2:"ctrealtor.in@gmail.com",
  website:"ctrealtor.co.in",
  websiteUrl:"https://www.ctrealtor.co.in/",
  rating:"4.6",
  reviews:"69",
  address:"Sector-5, Salt Lake City (Bidhannagar), Kolkata 700091",
  areas:["Salt Lake Sector 1","Salt Lake Sector 2","Salt Lake Sector 3","Sector-V","New Town","Rajarhat","Bidhannagar","Durgapur"],
  clients:["DLF","DHL","QSpiders","Cosmos Maya","Delta Plus"],
  youtube:"https://www.youtube.com/@ct-realtor-kolkata"
};
const WA = (msg)=>`https://wa.me/${SITE.phone}?text=${encodeURIComponent(msg)}`;

/* ---------- DATA ---------- */
const WORLDS = {
  commercial:{wTag:"World 01 · Commercial & Office",btn:"Explore commercial space",
    wTitle:'Office, showroom &amp; commercial space in <span class="em">Sector-V &amp; Salt Lake.</span>',
    wText:"Furnished and bare-shell offices, showrooms and shops across Sector-V, Salt Lake and New Town — the space corporate India already trusts CT Realtor to find.",
    feats:["Sector-V IT corridor","Furnished &amp; bare-shell","Corporate-grade"]},
  residential:{wTag:"World 02 · Residential",btn:"Explore homes &amp; flats",
    wTitle:'Flats, houses &amp; bungalows <span class="em">built for the long stay.</span>',
    wText:"Cooperative flats, independent houses and bungalows across Salt Lake, New Town and Bidhannagar — matched to how your family actually lives.",
    feats:["Salt Lake · New Town","Flats to bungalows","Move-in ready"]},
  land:{wTag:"World 03 · Plots &amp; Land",btn:"Explore plots &amp; land",
    wTitle:'HIDCO &amp; KMDA plots on Kolkata\'s <span class="em">fastest-growing corridors.</span>',
    wText:"HIDCO-allotted and clear-title plots along Rajarhat, New Town and Durgapur — verified, ready to build, advised by a 20-year local name.",
    feats:["HIDCO-allotted","New Town · Rajarhat","Clear-title verified"]}
};

const LISTINGS = [
  {id:"sectorv-office", type:"Office", world:"Commercial", featured:true,
   name:"Sector-V Office Space", loc:"Sector-V, Salt Lake", price:"₹95 L",
   specs:["Office","1,800 sqft","IT corridor"], beds:"—", area:"1,800 sqft",
   img:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
   amen:["Bare-shell + furnished options","Power backup","Lift & parking","Walk to Sector-V metro"],
   desc:"A ready-to-fit office floor in the heart of Sector-V — Kolkata's IT and corporate corridor. The same belt CT Realtor has placed names like DLF, DHL and QSpiders into."},
  {id:"newtown-3bhk", type:"Flat", world:"Residential", featured:true,
   name:"New Town 3 BHK Flat", loc:"Action Area, New Town", price:"₹1.1 Cr",
   specs:["3 BHK","1,550 sqft","Gated society"], beds:"3 BHK", area:"1,550 sqft",
   img:"https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop",
   amen:["Gated complex","Clubhouse & gym","Covered parking","Near schools & metro"],
   desc:"A move-in-ready 3 BHK in a gated New Town complex — connectivity, schools and markets in walking reach, on one of the city's best-planned corridors."},
  {id:"saltlake-house", type:"House", world:"Residential", featured:true,
   name:"Salt Lake Independent House", loc:"Salt Lake, Sector 2", price:"₹3.2 Cr",
   specs:["4 BHK","3,400 sqft","Independent"], beds:"4 BHK", area:"3,400 sqft",
   img:"https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
   amen:["Independent G+2","Private garden","Car porch ×2","Quiet Sector-2 block"],
   desc:"A full independent house on a quiet Sector-2 block — the kind of Salt Lake address that rarely reaches a portal and usually changes hands through a name like CT Realtor."},
  {id:"hidco-plot", type:"Plot", world:"Land", featured:true,
   name:"HIDCO Plot, New Town", loc:"Rajarhat · New Town", price:"₹65 L",
   specs:["Plot","2,400 sqft","HIDCO allotted"], beds:"—", area:"2,400 sqft",
   img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
   amen:["HIDCO-allotted","Clear title","Corner plot","Ready to build"],
   desc:"A HIDCO-allotted, clear-title plot on a fast-appreciating New Town corridor — title verified and paperwork handled end-to-end."},
  {id:"sectorv-showroom", type:"Commercial", world:"Commercial",
   name:"Sector-V Showroom Unit", loc:"Sector-V, Salt Lake", price:"₹1.8 Cr",
   specs:["Showroom","2,600 sqft","High footfall"], beds:"—", area:"2,600 sqft",
   img:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop",
   amen:["Ground-floor frontage","High visibility","Ample parking","Flexible fit-out"],
   desc:"A high-footfall ground-floor showroom unit in Sector-V — frontage that does the marketing for you, in a belt buyers already search."},
  {id:"bidhannagar-2bhk", type:"Flat", world:"Residential",
   name:"Bidhannagar 2 BHK Flat", loc:"Salt Lake, Sector 3", price:"₹72 L",
   specs:["2 BHK","1,050 sqft","Co-op housing"], beds:"2 BHK", area:"1,050 sqft",
   img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
   amen:["Cooperative society","Lift & backup","Close to market","Metro connectivity"],
   desc:"A practical 2 BHK in a settled Sector-3 cooperative — established neighbourhood, everyday convenience, sensible price."},
  {id:"sectorv-rent", type:"Rent", world:"Commercial",
   name:"Office for Rent · Sector-V", loc:"Sector-V, Salt Lake", price:"₹1.2 L/mo",
   specs:["Office","2,000 sqft","Furnished"], beds:"—", area:"2,000 sqft",
   img:"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop",
   amen:["Plug-and-play","Workstations included","24×7 access","Backup & parking"],
   desc:"A furnished, plug-and-play office floor for rent in Sector-V — move a team in this week, not next quarter."},
  {id:"durgapur-plot", type:"Plot", world:"Land",
   name:"Durgapur Residential Plot", loc:"Durgapur", price:"₹38 L",
   specs:["Plot","2,160 sqft","Clear title"], beds:"—", area:"2,160 sqft",
   img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
   amen:["Clear title","Gated layout","Wide road frontage","Growth pocket"],
   desc:"A clear-title residential plot in Durgapur, handled by CT Realtor's Durgapur desk — verified and ready for registration."},
  {id:"saltlake-bungalow", type:"House", world:"Residential",
   name:"Salt Lake Bungalow", loc:"Salt Lake, Sector 1", price:"₹4.5 Cr",
   specs:["5 BHK","4,800 sqft","Bungalow"], beds:"5 BHK", area:"4,800 sqft",
   img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
   amen:["Premium Sector-1 address","Landscaped garden","Staff quarters","Triple car porch"],
   desc:"A landmark Sector-1 bungalow — the calibre of address CT Realtor has quietly transacted for two decades."}
];

const SERVICES = [
  {no:"01",t:"Buy",d:"Curated shortlists across offices, flats, houses and plots — we filter the noise so you only see property worth your time.",
   img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
   pts:["Off-market & portal listings","Site visits arranged","Price & title sense-checked"]},
  {no:"02",t:"Sell & Rent",d:"Position, price and market your property to the right buyer and tenant pool — backed by CT Realtor's 4.6★ name since 2004.",
   img:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1600&auto=format&fit=crop",
   pts:["Priced on real local data","Marketed to buyers + corporates","One point of contact to close"]},
  {no:"03",t:"Commercial & Office Leasing",d:"Office, showroom and shop space across Sector-V, Salt Lake and New Town — the corporate brokerage DLF, DHL and QSpiders already use.",
   img:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
   pts:["Furnished & bare-shell","Lease structuring","Corporate fit-out advisory"]},
  {no:"04",t:"Plots, Land & Consultation",d:"HIDCO-allotted plots, clear-title verification and honest market consultation across Rajarhat, New Town and Durgapur.",
   img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
   pts:["HIDCO & KMDA plots","Title & paperwork end-to-end","Investment advisory"]}
];

const TESTI = [
  {q:"We needed corporate office space in Sector-V fast. CT Realtor understood the brief, shortlisted three floors, and we'd signed within the week.",who:"<b>Corporate tenant</b>Office · Sector-V, Salt Lake"},
  {q:"Twenty years in Salt Lake shows. They priced our flat right, marketed it to the correct buyers, and closed it without the usual circus.",who:"<b>Resident seller</b>Flat · Salt Lake"},
  {q:"They verified the title on a HIDCO plot, handled every paper, and made a first land purchase feel safe. People over property — they mean it.",who:"<b>First-time investor</b>Plot · New Town"}
];

const FAQ = [
  {q:"Which areas does CT Realtor cover?",a:"Salt Lake City (Sectors 1, 2, 3 and Sector-V), New Town, Rajarhat, Bidhannagar and Durgapur — both residential and commercial property."},
  {q:"What kinds of property do you deal in?",a:"Offices, showrooms, shops and commercial units; flats, cooperative housing, independent houses and bungalows; and plots including HIDCO-allotted land."},
  {q:"How long has CT Realtor been operating?",a:"Since 2004 — over twenty years as one of Salt Lake's most experienced estate agencies, founded by Chandra Sekhar Chowdhury."},
  {q:"Do you help with selling and renting too?",a:"Yes. We position, price and market your property to the right buyer and tenant pool, and stay the single point of contact through to close."},
  {q:"How do I reach you fastest?",a:`One tap on WhatsApp at ${SITE.phoneFmt}, or email ${SITE.email}. A real person from CT Realtor replies — usually within the hour.`}
];

const TEAM = [
  {name:"Chandra Sekhar Chowdhury",role:"Founder & Principal Realtor",city:"Salt Lake, Kolkata",
   note:"Built CT Realtor in 2004 into one of Salt Lake's most trusted names — corporate and individual clients alike."},
  {name:"Bipadtaran Chowdhury",role:"Realtor — Durgapur Desk",city:"Durgapur",
   note:"Leads CT Realtor's Durgapur property desk — plots, land and residential."}
];

/* ---------- WhatsApp / SVG helpers ---------- */
const waIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5L8.8 7c-.2-.4-.3-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c2.6 1 2.6.7 3.1.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>`;
const arrow = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const pin = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

/* ---------- chrome: header + footer + mobile menu + sticky bar ---------- */
const PAGE = document.body.dataset.page || "home";
const NAV = [
  {h:"index.html",label:"Home",key:"home"},
  {h:"properties.html",label:"Properties",key:"properties"},
  {h:"services.html",label:"Services",key:"services"},
  {h:"about.html",label:"About",key:"about"},
  {h:"contact.html",label:"Contact",key:"contact"}
];
function buildHeader(){
  const mid = NAV.map(n=>`<a href="${n.h}" class="${n.key===PAGE?'active':''}">${n.label}</a>`).join("");
  return `<div class="container nav">
    <a class="brand" href="index.html" aria-label="CT Realtor">
      <svg class="brand-mark" viewBox="0 0 40 40" fill="none">
        <path d="M20 4l1.9 4.1L26 9l-2.7 3.4L24 17l-4-1.5L16 17l.7-4.6L14 9l4.1-.7L20 4z" fill="currentColor"/>
        <path d="M14 21c-2.4 0-4.2 2-4.2 5.4V34h4.7v-6.6c0-1 .5-1.6 1.3-1.6.7 0 1.2.6 1.2 1.6V34H22v-7.7c0-2.9-1.7-4.8-3.9-4.8-1.4 0-2.5.7-3.1 1.8C14.6 21.5 14.4 21 14 21z" fill="currentColor"/>
        <path d="M27 21c-2.3 0-3.9 1.9-3.9 4.8V34H28v-6.6c0-1 .5-1.6 1.2-1.6.8 0 1.3.6 1.3 1.6V34H35v-7.6c0-3.4-1.8-5.4-4.2-5.4z" fill="#c8962f"/>
      </svg>
      <span class="brand-word"><b>CT REALTOR</b><small>SALT LAKE · SINCE 2004</small></span>
    </a>
    <nav class="nav-mid">${mid}</nav>
    <div class="nav-cta">
      <a class="btn-ghost" href="${WA('Hi CT Realtor, I have a property enquiry.')}" target="_blank" rel="noopener">WhatsApp</a>
      <a class="btn-ink" href="contact.html">Enquire ${arrow}</a>
    </div>
    <button class="nav-burger" id="burger" aria-label="Menu"><span></span></button>
  </div>`;
}
function buildMobileMenu(){
  const links = NAV.map(n=>`<a href="${n.h}">${n.label}<span class="em">→</span></a>`).join("");
  return `<div class="container">${links}
    <div class="mm-cta">
      <a class="btn-gold" href="${WA('Hi CT Realtor, I have a property enquiry.')}" target="_blank" rel="noopener">WhatsApp ${SITE.phoneFmt}</a>
    </div></div>`;
}
function buildFooter(){
  return `<div class="container">
    <div class="foot">
      <div>
        <h4>CT Realtor</h4>
        <p>${SITE.tagline}. Salt Lake's trusted estate agency since ${SITE.since} — commercial, residential &amp; plots across Sector-V, New Town &amp; Durgapur. ${SITE.rating}★ across ${SITE.reviews} Google reviews.</p>
      </div>
      <div class="foot-col"><span class="mono">Explore</span>
        <a href="properties.html">Properties</a>
        <a href="services.html">Services</a>
        <a href="about.html">About us</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="foot-col"><span class="mono">Property</span>
        <a href="properties.html?f=Office">Office &amp; commercial</a>
        <a href="properties.html?f=Flat">Flats &amp; houses</a>
        <a href="properties.html?f=Plot">Plots &amp; land</a>
        <a href="properties.html?f=Rent">For rent</a>
      </div>
      <div class="foot-col"><span class="mono">Reach</span>
        <a href="${WA('Hi CT Realtor, I have a property enquiry.')}" target="_blank" rel="noopener">WhatsApp ${SITE.phoneFmt}</a>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        <a href="${SITE.websiteUrl}" target="_blank" rel="noopener">${SITE.website}</a>
        <a href="${SITE.youtube}" target="_blank" rel="noopener">YouTube</a>
      </div>
    </div>
    <div class="foot-bot">
      <span>© ${new Date().getFullYear()} CT Realtor · ${SITE.address}</span>
      <span>Concept &amp; build by Dynasty Studio</span>
      <span class="badge-concept">Concept demo · illustrative listings</span>
    </div>
  </div>`;
}
function buildStickyWa(){
  return `<a class="s-call" href="tel:+${SITE.phone}">Call</a>
    <a class="s-wa" href="${WA('Hi CT Realtor, I have a property enquiry.')}" target="_blank" rel="noopener">${waIcon} WhatsApp</a>`;
}
(function injectChrome(){
  const h=document.getElementById('site-header'); if(h){h.className='';h.id='hdr';h.innerHTML=buildHeader();if(PAGE!=='home')h.classList.add('solid');}
  const mm=document.createElement('div');mm.className='mobile-menu';mm.innerHTML=buildMobileMenu();document.body.appendChild(mm);
  const f=document.getElementById('site-footer'); if(f)f.innerHTML=buildFooter();
  const sw=document.createElement('div');sw.className='sticky-wa';sw.innerHTML=buildStickyWa();document.body.appendChild(sw);
  // scroll progress bar
  const bar=document.createElement('div');bar.className='scrollbar';document.body.appendChild(bar);
  // paper plane that flies down the page on scroll (desktop only via CSS)
  const trail=document.createElement('div');trail.className='flytrail';document.body.appendChild(trail);
  const flyer=document.createElement('div');flyer.className='flyer';
  flyer.innerHTML=`<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M2.2 11.6l18.6-8.4c.7-.3 1.4.4 1.1 1.1l-8.4 18.6c-.3.7-1.3.6-1.5-.1L9.9 14 3 11.9c-.7-.2-.8-1.2-.8-1.3z" opacity=".95"/></svg>`;
  document.body.appendChild(flyer);
  // page-switch wipe overlay
  const wipe=document.createElement('div');wipe.className='pagewipe';
  wipe.innerHTML=`<div class="pw-mark"><div class="pw-line"></div><b>CT Realtor</b><span>Salt Lake · Since 2004</span></div>`;
  document.body.appendChild(wipe);
  const burger=document.getElementById('burger');
  if(burger)burger.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
  mm.querySelectorAll('a[href]').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
})();

/* ---------- card builder ---------- */
function listingCard(p){
  return `<article class="card">
    <div class="card-media"><img alt="${p.name}" data-src="${p.img}"/><span class="card-badge">${p.type}</span>${p.featured?'<span class="card-tag">Featured</span>':''}</div>
    <div class="card-body">
      <h4>${p.name}</h4>
      <div class="card-loc">${pin}${p.loc}</div>
      <div class="card-price">${p.price}</div>
      <div class="card-specs">${p.specs.map(s=>`<span>${s}</span>`).join('')}</div>
      <div class="card-foot">
        <a class="card-wa" href="${WA(`Hi CT Realtor, I'm interested in ${p.name} (${p.price}) in ${p.loc}.`)}" target="_blank" rel="noopener"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.4 12c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5L8.8 7c-.2-.4-.3-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c2.6 1 2.6.7 3.1.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>WhatsApp</a>
        <a class="card-view" href="property.html?id=${p.id}">View details ${arrow}</a>
      </div>
    </div>
  </article>`;
}

/* ---------- HOME builders ---------- */
function buildHome(){
  const rail=document.getElementById('rail');
  if(rail) rail.innerHTML = LISTINGS.filter(p=>p.featured).map(listingCard).join('');

  const srvList=document.getElementById('services-list');
  if(srvList) srvList.innerHTML = SERVICES.map(s=>`
    <a class="srv-row" href="services.html">
      <div class="srv-bg"><img alt="" data-src="${s.img}"/><div class="sgrad"></div></div>
      <div class="srv-in"><div class="srv-no">${s.no}</div><div class="srv-main"><h3>${s.t}</h3><p>${s.d}</p></div>
      <div class="srv-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></div>
    </a>`).join('');

  // world switcher
  const tabs=document.getElementById('worldTabs');
  if(tabs){
    function setWorld(w){const d=WORLDS[w];if(!d)return;document.body.dataset.world=w;
      document.getElementById('wTag').innerHTML=d.wTag;
      document.getElementById('wTitle').innerHTML=d.wTitle;
      document.getElementById('wText').innerHTML=d.wText;
      document.getElementById('wFeats').innerHTML=d.feats.map(f=>`<span>${f}</span>`).join('');
      const wb=document.getElementById('wBtn'); if(wb) wb.childNodes[0].nodeValue=d.btn+' ';
      document.querySelectorAll('#stage .layer').forEach(l=>{const on=l.dataset.world===w;l.classList.toggle('active',on);
        const v=l.querySelector('video');if(v){if(on){v.play().catch(()=>{});}else{v.pause();}}});
      tabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.world===w));}
    tabs.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setWorld(b.dataset.world)));
    setWorld('commercial');
  }
}

/* ---------- PROPERTIES builder ---------- */
const FILTERS = [
  {k:"all",label:"All"},
  {k:"Office",label:"Office"},
  {k:"Commercial",label:"Commercial"},
  {k:"Flat",label:"Flats"},
  {k:"House",label:"Houses"},
  {k:"Plot",label:"Plots & Land"},
  {k:"Rent",label:"For Rent"}
];
function buildProperties(){
  const grid=document.getElementById('propGrid'); if(!grid)return;
  const bar=document.getElementById('propFilters');
  const params=new URLSearchParams(location.search);
  let active=params.get('f')||"all";
  if(!FILTERS.some(f=>f.k===active))active="all";
  bar.innerHTML=FILTERS.map(f=>`<button data-k="${f.k}" class="${f.k===active?'active':''}">${f.label}</button>`).join('');
  function render(){
    const list = active==="all"?LISTINGS:LISTINGS.filter(p=>p.type===active);
    grid.innerHTML = list.length?list.map(listingCard).join(''):`<div class="empty">No listings in this category right now — <a href="${WA('Hi CT Realtor, I am looking for a property.')}" target="_blank" rel="noopener" style="color:var(--gold)">ask us on WhatsApp</a> and we'll source it.</div>`;
    grid.querySelectorAll('img[data-src]').forEach(observeImg);
  }
  bar.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
    active=b.dataset.k;bar.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));render();}));
  render();
}

/* ---------- PROPERTY DETAIL builder ---------- */
function buildPropertyDetail(){
  const root=document.getElementById('pdRoot'); if(!root)return;
  const id=new URLSearchParams(location.search).get('id');
  const p=LISTINGS.find(x=>x.id===id)||LISTINGS[0];
  document.title=`${p.name} · ${p.price} — CT Realtor`;
  const crumb=document.getElementById('pdCrumb'); if(crumb)crumb.innerHTML=`<a href="index.html">Home</a> · <a href="properties.html">Properties</a> · ${p.name}`;
  const others=LISTINGS.filter(x=>x.id!==p.id).slice(0,3);
  const g2="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop";
  const g3="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=900&auto=format&fit=crop";
  root.innerHTML=`
    <div class="pd-gallery rv">
      <div class="g"><img alt="${p.name}" data-src="${p.img}"/></div>
      <div class="g"><img alt="" data-src="${g2}"/></div>
      <div class="g"><img alt="" data-src="${g3}"/></div>
    </div>
    <div class="pd-grid" style="margin-top:38px">
      <div class="pd-body rv">
        <span class="mono kicker gold">${p.type} · ${p.world}</span>
        <h2>${p.name}</h2>
        <div class="pd-sub">${pin}${p.loc}</div>
        <div class="pd-spec-grid">
          <div><div class="k">Type</div><div class="v">${p.type}</div></div>
          <div><div class="k">Configuration</div><div class="v">${p.beds==='—'?p.specs[0]:p.beds}</div></div>
          <div><div class="k">Area</div><div class="v">${p.area}</div></div>
          <div><div class="k">Price</div><div class="v">${p.price}</div></div>
        </div>
        <p>${p.desc}</p>
        <p style="font-size:13px;color:var(--muted)">Concept demo — listing details are illustrative. CT Realtor will confirm live availability, price and title on enquiry.</p>
        <div class="pd-amen">${p.amen.map(a=>`<span>${a}</span>`).join('')}</div>
      </div>
      <aside class="pd-aside rv">
        <div class="pd-price">${p.price}</div>
        <div class="pd-loc">${p.loc}</div>
        <div class="pd-spec-grid" style="grid-template-columns:1fr 1fr">
          ${p.specs.map(s=>`<div><div class="v" style="margin:0">${s}</div></div>`).join('')}
        </div>
        <a class="wa-big" style="width:100%;justify-content:center;margin-top:6px" href="${WA(`Hi CT Realtor, I'm interested in ${p.name} (${p.price}) in ${p.loc}. Is it available?`)}" target="_blank" rel="noopener">${waIcon} Enquire on WhatsApp</a>
        <a class="btn-ghost" style="width:100%;justify-content:center;display:flex;margin-top:12px" href="tel:+${SITE.phone}">Call ${SITE.phoneFmt}</a>
        <p style="font-size:12px;color:var(--muted);margin-top:14px;text-align:center">Reply usually within the hour · ${SITE.rating}★ on ${SITE.reviews} reviews</p>
      </aside>
    </div>
    <div class="container" style="padding:0;margin-top:80px">
      <div class="sec-head"><h2 class="h2 rv">More across <span class="em">Kolkata</span>.</h2><a class="btn-ghost rv" href="properties.html">All properties ${arrow}</a></div>
      <div class="prop-grid rv">${others.map(listingCard).join('')}</div>
    </div>`;
}

/* ---------- generic list injectors (services/about/faq) ---------- */
function buildServicesPage(){
  const root=document.getElementById('svcRoot'); if(!root)return;
  root.innerHTML=SERVICES.map((s,i)=>`
    <div class="svc-block rv">
      <div class="svc-media"><img alt="${s.t}" data-src="${s.img}"/></div>
      <div class="svc-copy">
        <span class="sn">${s.no}</span>
        <h3>${s.t}</h3>
        <p>${s.d}</p>
        <ul>${s.pts.map(pt=>`<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M20 6L9 17l-5-5"/></svg>${pt}</li>`).join('')}</ul>
        <a class="btn-ink" style="margin-top:24px" href="${WA(`Hi CT Realtor, I'd like help with: ${s.t}.`)}" target="_blank" rel="noopener">Enquire about ${s.t} ${arrow}</a>
      </div>
    </div>`).join('');
}
function buildTeam(){
  const root=document.getElementById('teamRoot'); if(!root)return;
  root.innerHTML=TEAM.map(t=>`
    <div class="team-card rv">
      <div class="team-ph">${t.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
      <div><h4>${t.name}</h4><div class="role">${t.role}</div><p>${t.note}</p></div>
    </div>`).join('');
}
function buildAreas(){
  const root=document.getElementById('areasRoot'); if(!root)return;
  root.innerHTML=SITE.areas.map(a=>`<span>${a}</span>`).join('');
}
function buildFaq(){
  const root=document.getElementById('faqRoot'); if(!root)return;
  root.innerHTML=FAQ.map((f,i)=>`<details ${i===0?'open':''}><summary>${f.q}<span class="pl"></span></summary><p>${f.a}</p></details>`).join('');
}

/* ---------- testimonials (home + about) ---------- */
function buildTesti(){
  const dots=document.getElementById('tDots'); if(!dots)return;
  let idx=0;
  dots.innerHTML=TESTI.map((_,i)=>`<button class="${i===0?'active':''}" data-i="${i}" aria-label="Testimonial ${i+1}"></button>`).join('');
  function set(i){idx=i;document.getElementById('tQuote').textContent=TESTI[i].q;document.getElementById('tWho').innerHTML=TESTI[i].who;
    dots.querySelectorAll('button').forEach((d,j)=>d.classList.toggle('active',j===i));}
  dots.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>set(+b.dataset.i)));
  setInterval(()=>set((idx+1)%TESTI.length),6500);
}

/* ---------- lazy images ---------- */
const imgIO=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const img=e.target,src=img.getAttribute('data-src');if(src){const p=new Image();p.onload=()=>{img.src=src;img.classList.add('show');};p.src=src;}imgIO.unobserve(img);}});},{rootMargin:"300px"});
function observeImg(img){imgIO.observe(img);}

/* ---------- VIDEO optimization ---------- */
const SMALL = window.matchMedia('(max-width:760px)').matches;
function posterize(v){const poster=v.getAttribute('poster');if(!poster)return;
  const img=document.createElement('img');img.src=poster;img.alt='';img.className='show';img.loading='lazy';
  img.style.cssText='width:100%;height:100%;object-fit:cover;position:absolute;inset:0';v.replaceWith(img);}
function optimizeVideos(){
  document.querySelectorAll('video').forEach(v=>{
    v.muted=true;v.setAttribute('playsinline','');v.setAttribute('disablepictureinpicture','');
    // hero is the centrepiece — load it eagerly so the video appears fast (no long poster wait)
    if(v.hasAttribute('data-eager')){v.preload='auto';v.load();} else {v.preload='none';}
  });
  // hero + why (standalone videos): load + play only while ~on-screen, pause off — one decode at a time
  document.querySelectorAll('video').forEach(v=>{
    if(v.closest('.worlds-stage'))return;                 // worlds handled separately below
    let loaded=false;
    new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting && e.intersectionRatio>=0.35){ if(!loaded){v.preload='auto';v.load();loaded=true;} v.play().catch(()=>{}); }
      else v.pause();
    }),{threshold:[0,0.35]}).observe(v);
  });
  // worlds switcher: only the ACTIVE layer's video decodes, and only while the stage is on screen
  const stage=document.getElementById('stage');
  if(stage){
    new IntersectionObserver(es=>es.forEach(e=>{
      const v=stage.querySelector('.layer.active video');
      if(e.isIntersecting){ if(v){ if(v.preload==='none'){v.preload='auto';v.load();} v.play().catch(()=>{}); } }
      else stage.querySelectorAll('video').forEach(x=>x.pause());
    }),{threshold:.25}).observe(stage);
  }
}

/* ---------- shared init ---------- */
function init(){
  buildHome();buildProperties();buildPropertyDetail();buildServicesPage();buildTeam();buildAreas();buildFaq();buildTesti();
  document.querySelectorAll('img[data-src]').forEach(observeImg);
  optimizeVideos();

  const REDUCED=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE=window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hdr=document.getElementById('hdr');
  const bar=document.querySelector('.scrollbar'), flyer=document.querySelector('.flyer');
  let ticking=false;
  function frame(){
    const st=window.scrollY||document.documentElement.scrollTop;
    const h=document.documentElement.scrollHeight-window.innerHeight;
    const prog=h>0?Math.min(1,Math.max(0,st/h)):0;
    if(hdr&&PAGE==='home')hdr.classList.toggle('scrolled',st>40);
    if(bar)bar.style.transform='scaleX('+prog.toFixed(4)+')';
    if(flyer){const y=prog*(window.innerHeight-150)+72;const x=Math.sin(prog*Math.PI*5)*16;const r=Math.cos(prog*Math.PI*5)*12+8;
      flyer.style.transform=`translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${r.toFixed(1)}deg)`;}
    ticking=false;
  }
  function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(frame);}
  frame();addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});

  // magnetic primary buttons (desktop, fine pointer)
  if(FINE){document.querySelectorAll('.btn-gold').forEach(btn=>{btn.classList.add('mag');
    btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();const mx=e.clientX-r.left-r.width/2,my=e.clientY-r.top-r.height/2;btn.style.transform=`translate(${(mx*0.22).toFixed(1)}px,${(my*0.3).toFixed(1)}px)`;});
    btn.addEventListener('mouseleave',()=>{btn.style.transform='';});});}

  tiltMedia(FINE);
  pageTransitions();

  // reveals — ONE lightweight IntersectionObserver (native scroll, no Lenis, no per-element ScrollTrigger)
  if(REDUCED){document.querySelectorAll('.rv,#arrowsSec').forEach(el=>el.classList.add('in'));}
  else{
    const rio=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target);}}),{rootMargin:'0px 0px -6% 0px',threshold:.08});
    document.querySelectorAll('.rv,#arrowsSec').forEach(el=>rio.observe(el));
  }

  // hero parallax — desktop only, lightweight (transforms/opacity only, no blur/shadow scrub)
  if(window.gsap&&window.ScrollTrigger&&document.querySelector('.hero-scroll')&&!REDUCED&&!SMALL){
    gsap.registerPlugin(ScrollTrigger);
    heroParallax(FINE);
  }

  // hero search (home)
  const hs=document.getElementById('heroSearch');
  if(hs)hs.addEventListener('submit',e=>{e.preventDefault();location.href='properties.html';});
  // lead/contact forms
  document.querySelectorAll('form[data-lead]').forEach(form=>{
    form.addEventListener('submit',e=>{e.preventDefault();const f=e.target;
      const name=encodeURIComponent((f.name?.value)||'there');
      const phone=encodeURIComponent((f.phone?.value)||'');
      const look=encodeURIComponent((f.looking?.value)||'a property');
      const budget=encodeURIComponent((f.budget?.value)||'');
      const ok=form.parentElement.querySelector('.form-ok');
      if(ok){ok.classList.add('show');form.style.display='none';}
      setTimeout(()=>window.open(WA(`Hi CT Realtor, I'm ${decodeURIComponent(name)} (${decodeURIComponent(phone)}). Looking for: ${decodeURIComponent(look)}${budget?`, budget ${decodeURIComponent(budget)}`:''}.`),'_blank'),1200);
    });
  });
}

/* ---------- page-switch wipe transition ---------- */
function pageTransitions(){
  const wipe=document.querySelector('.pagewipe');
  if(!wipe||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const here=location.pathname.split('/').pop()||'index.html';
  document.addEventListener('click',e=>{
    const a=e.target.closest&&e.target.closest('a[href]'); if(!a)return;
    const href=a.getAttribute('href');
    if(!href||a.target==='_blank'||a.hasAttribute('download'))return;
    if(/^(https?:|mailto:|tel:|#|javascript:)/i.test(href))return;     // external / anchor / mail / tel
    if(!/\.html(\?|#|$)/.test(href))return;                            // only internal page links
    const target=href.split('#')[0].split('/').pop();
    if(target===here && !href.includes('?'))return;                    // same page, no new query
    e.preventDefault();
    document.body.classList.remove('menu-open');
    wipe.classList.add('cover');
    setTimeout(()=>{location.href=href;},470);
  });
  // restore on back/forward (bfcache)
  window.addEventListener('pageshow',ev=>{if(ev.persisted)wipe.classList.remove('cover');});
}

/* ---------- interactive 3D tilt on media (desktop) ---------- */
function tiltMedia(FINE){
  if(!FINE)return;
  document.querySelectorAll('.about-media,.svc-media,.t-media,.why-media,.imgsplit-media,.ph-img').forEach(m=>{
    m.classList.add('tilt'); if(m.parentElement)m.parentElement.classList.add('tilt-wrap');
    m.addEventListener('mousemove',e=>{const r=m.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
      m.style.transform=`rotateY(${(px*6).toFixed(2)}deg) rotateX(${(-py*6).toFixed(2)}deg) scale(1.02)`;});
    m.addEventListener('mouseleave',()=>{m.style.transform='';});
  });
}

/* ---------- hero parallax (home, desktop only) ---------- */
function heroParallax(FINE){
  const ST={trigger:'.hero-scroll',start:'top top',end:'bottom bottom',scrub:.4};
  // transforms only — GPU-composited, no per-frame repaint
  gsap.fromTo('.hero-house',{xPercent:-50,yPercent:12,scale:.92},{xPercent:-50,yPercent:-12,scale:1.08,ease:'none',scrollTrigger:ST});
  gsap.fromTo('.hero-house-glow',{opacity:.3},{opacity:.65,ease:'none',scrollTrigger:ST});
  gsap.to('.c1',{xPercent:-65,yPercent:-22,ease:'none',scrollTrigger:ST});
  gsap.to('.c2',{xPercent:65,yPercent:-28,ease:'none',scrollTrigger:ST});
  gsap.to('.c3',{yPercent:-44,opacity:0,ease:'none',scrollTrigger:ST});
  gsap.to('.hero-word',{yPercent:-18,scale:1.14,opacity:0,ease:'none',scrollTrigger:{trigger:'.hero-scroll',start:'top top',end:'56% bottom',scrub:true}});
  gsap.to('.hero-overlay',{yPercent:-18,ease:'none',scrollTrigger:ST});
  gsap.to('.hero-overlay .container',{opacity:0,ease:'none',scrollTrigger:{trigger:'.hero-scroll',start:'62% top',end:'88% bottom',scrub:true}});
  gsap.to('.scroll-cue',{opacity:0,ease:'none',scrollTrigger:{trigger:'.hero-scroll',start:'top top',end:'14% top',scrub:true}});
  gsap.fromTo('.hero-smoke',{opacity:0},{opacity:1,ease:'none',scrollTrigger:{trigger:'.hero-scroll',start:'80% top',end:'bottom bottom',scrub:true}});
  const stage=document.querySelector('.hero-stage'),inner=document.querySelector('.hero-house-inner'),shine=document.querySelector('.hero-house-shine');
  if(stage&&inner&&FINE){let raf=null;
    stage.addEventListener('mousemove',e=>{const r=stage.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
      if(raf)cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{inner.style.transform=`rotateY(${px*7}deg) rotateX(${-py*6}deg)`;if(shine){shine.style.opacity=.85;shine.style.transform=`translateX(${px*70}px)`;}});});
    stage.addEventListener('mouseleave',()=>{inner.style.transform='';if(shine)shine.style.opacity=0;});}
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
