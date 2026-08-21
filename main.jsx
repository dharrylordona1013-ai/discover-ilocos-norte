import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Compass, MapPin, Search, Menu, X, Waves, Landmark, Mountain, Utensils, Wind, CalendarDays } from "lucide-react";
import "./styles.css";

const destinations = [
  {slug:"la-paz-sand-dunes",title:"La Paz Sand Dunes",location:"Laoag City",category:"Adventure",keywords:"laoag tourist spots ilocos norte adventure",description:"Ride 4×4s across the coastal dunes, try sandboarding, and watch the sun set over the West Philippine Sea.",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"},
  {slug:"bangui-wind-farm",title:"Bangui Wind Farm",location:"Bangui",category:"Scenic",keywords:"bangui wind farm ilocos norte tourist spot",description:"See the famous wind turbines lined along Bangui Bay and one of the North's most recognizable coastal views.",image:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85"},
  {slug:"paoay-church",title:"Paoay Church",location:"Paoay",category:"Heritage",keywords:"paoay church ilocos norte heritage tourist spot",description:"Admire the massive Earthquake Baroque architecture of this landmark and UNESCO World Heritage Site.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85"},
  {slug:"saud-beach",title:"Saud Beach",location:"Pagudpud",category:"Beach",keywords:"saud beach pagudpud ilocos norte beaches",description:"Relax beside clear water and pale sand in one of northern Luzon's best-known beach destinations.",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"},
  {slug:"kapurpurawan-rock-formation",title:"Kapurpurawan Rock Formation",location:"Burgos",category:"Nature",keywords:"kapurpurawan burgos ilocos norte nature",description:"Explore dramatic white limestone formations shaped by wind, waves and time along the Burgos coast.",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"},
  {slug:"patapat-viaduct",title:"Patapat Viaduct",location:"Pagudpud",category:"Scenic",keywords:"patapat viaduct pagudpud ilocos norte",description:"Take in sweeping mountain-and-sea views from one of the North's most photographed coastal roads.",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"}
];

const experiences=[
  {icon:<Mountain/>,title:"Adventure",text:"Dunes, waterfalls, hiking, kayaking and outdoor thrills."},
  {icon:<Landmark/>,title:"Heritage",text:"Churches, museums, ancestral places and living Ilocano traditions."},
  {icon:<Waves/>,title:"Beaches",text:"Saud, Pagudpud and a spectacular northern coastline."},
  {icon:<Utensils/>,title:"Taste Ilocos",text:"Empanada, local delicacies, garlic, tobacco and craft products."}
];

function App(){
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("All");
  const [menuOpen,setMenuOpen]=useState(false);

  const filtered=useMemo(()=>destinations.filter(d=>{
    const cat=category==="All"||d.category===category;
    const q=query.toLowerCase().trim();
    return cat && (!q||`${d.title} ${d.location} ${d.category} ${d.keywords}`.toLowerCase().includes(q));
  }),[query,category]);

  const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenuOpen(false)};

  return <div className="site">
    <header className="nav">
      <button className="brand" onClick={()=>go("home")} aria-label="Discover Ilocos Norte home">
        <span className="brand-mark">IN</span><span><strong>DISCOVER ILOCOS NORTE</strong><small>YOUR GUIDE TO THE NORTH</small></span>
      </button>
      <nav className={menuOpen?"nav-links open":"nav-links"}>
        <button onClick={()=>go("destinations")}>Destinations</button>
        <button onClick={()=>go("experiences")}>Experiences</button>
        <button onClick={()=>go("itinerary")}>Itineraries</button>
        <button onClick={()=>go("travel-info")}>Travel Guide</button>
      </nav>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-overlay"/>
        <div className="hero-content">
          <div className="eyebrow"><Wind size={16}/> ILOCOS NORTE, PHILIPPINES</div>
          <h1>Discover the <em>North.</em></h1>
          <p>Explore Ilocos Norte's beaches, heritage towns, dramatic landscapes, local food and unforgettable adventures.</p>
          <div className="hero-actions">
            <button className="primary" onClick={()=>go("destinations")}>Explore tourist spots <ArrowRight size={18}/></button>
            <button className="ghost" onClick={()=>go("itinerary")}><Compass size={18}/> Plan my trip</button>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div><span className="kicker">ILOCOS NORTE TRAVEL GUIDE</span><h2>One province.<br/><em>Countless stories.</em></h2></div>
        <p>From Laoag and Paoay to Bangui, Burgos and Pagudpud, Discover Ilocos Norte helps travelers find places to visit, things to do, food to try and routes worth taking.</p>
      </section>

      <section id="destinations" className="section destinations">
        <div className="section-head"><div><span className="kicker">TOURIST SPOTS IN ILOCOS NORTE</span><h2>Find your <em>North.</em></h2></div><div className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search destinations..."/></div></div>
        <div className="filters">{["All","Adventure","Heritage","Beach","Scenic","Nature"].map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div>
        <div className="cards">
          {filtered.map(d=><article className="card" key={d.slug}>
            <div className="card-image"><img src={d.image} alt={`${d.title} in ${d.location}, Ilocos Norte`} loading="lazy"/><span>{d.category}</span></div>
            <div className="card-body"><div className="location"><MapPin size={14}/>{d.location}, Ilocos Norte</div><h3>{d.title}</h3><p>{d.description}</p><button onClick={()=>alert(`${d.title} — destination guide coming next`)}>View guide <ArrowRight size={16}/></button></div>
          </article>)}
        </div>
      </section>

      <section id="experiences" className="section experiences">
        <div className="section-head"><div><span className="kicker">THINGS TO DO IN ILOCOS NORTE</span><h2>Experience Ilocos<br/><em>your way.</em></h2></div></div>
        <div className="experience-grid">{experiences.map(e=><article className="experience" key={e.title}><div className="experience-icon">{e.icon}</div><h3>{e.title}</h3><p>{e.text}</p><button onClick={()=>go("destinations")}>Explore <ArrowRight size={16}/></button></article>)}</div>
      </section>

      <section id="itinerary" className="trip section">
        <div className="trip-copy"><span className="kicker">ILOCOS NORTE ITINERARY</span><h2>Make a trip<br/><em>worth remembering.</em></h2><p>A sample northbound route: arrive in Laoag, discover Paoay, follow the coast through Burgos and Bangui, then slow down in Pagudpud.</p><button className="primary" onClick={()=>alert("Interactive itinerary builder coming next.")}><CalendarDays size={18}/> Start planning</button></div>
        <div className="route">{["Laoag","Paoay","Burgos","Bangui","Pagudpud"].map((p,i)=><div className="route-stop" key={p}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{p}</strong><small>{i===0?"Arrive & explore":i===4?"Beach & unwind":"Discover the North"}</small></div></div>)}</div>
      </section>

      <section id="travel-info" className="info section">
        <span className="kicker">PLAN YOUR VISIT</span><h2>Travel smarter in<br/><em>Ilocos Norte.</em></h2>
        <div className="info-grid">
          <article><MapPin/><h3>Where to go</h3><p>Use the destination guides to build a route across Laoag, Paoay, Burgos, Bangui and Pagudpud.</p></article>
          <article><CalendarDays/><h3>When to visit</h3><p>Plan around the experience you want — beaches, heritage sightseeing, outdoor adventure or food.</p></article>
          <article><Compass/><h3>Plan ahead</h3><p>Check current transportation, accommodation, opening hours and local advisories before your trip.</p></article>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div><span className="brand-mark">IN</span><h2>See you in the North.</h2><p>Discover Ilocos Norte — your independent guide to the province.</p></div>
      <div><span className="kicker">ABOUT THIS SITE</span><p>Travel inspiration and destination information for visitors exploring Ilocos Norte, Philippines.</p></div>
      <div className="copyright">© 2026 Discover Ilocos Norte · Built for organic discovery</div>
    </footer>
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);
