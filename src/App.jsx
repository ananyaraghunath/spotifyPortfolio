import ananyaImg from "./assets/ananya.jpg";
import HIRF from "./assets/HIRF.jpeg";
import { isValidElement, useMemo, useState } from "react";
import {
  Home,
  Library,
  Menu,
  Play,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BriefcaseBusiness,
  FolderKanban,
  BadgeCheck,
  Expand,
  Heart,
  Wrench,
} from "lucide-react";

export default function AnanyaSpotifyPortfolio() {
  const [currentPage, setCurrentPage] = useState("home");

  const pages = {
    home: {
      title: "Ananya Raghunath",
      subtitle: "Computer Science student, builder, and aspiring SWE",
      heroColor: "#391b5cff",
    },
    projects: {
      title: "Projects",
      subtitle: "My builds in playlist form",
      heroColor: "#265586ff",
    },
    experience: {
      title: "Experience",
      subtitle: "Where I've worked",
      heroColor: "#43104cff",
    },
    education: {
      title: "Education",
      subtitle: "My coursework & degrees",
      heroColor: "#782121ff",
    },
    skills: {
      title: "Skills",
      subtitle: "My technical stack as a playlist library",
      heroColor: "#3a1553",
    },
    about: {
      title: "About Me",
      subtitle: "A quick intro to who I am",
      heroColor: "#41266e",
    },
  };

  const sidebarItems = [
    { key: "about", icon: Heart, label: "About Me", sub: "Playlist" },
    { key: "projects", icon: FolderKanban, label: "Projects", sub: "Playlist" },
    {
      key: "experience",
      icon: BriefcaseBusiness,
      label: "Experience",
      sub: "Playlist",
    },
    {
      key: "education",
      icon: GraduationCap,
      label: "Education",
      sub: "Playlist",
    },
    { key: "skills", icon: Wrench, label: "Skills", sub: "Playlist" },
  ];

  const topCards = [
    {
      key: "projects",
      title: "View My Projects",
      subtitle: "Check out what I've built",
      icon: "💻",
      gradient:
        "linear-gradient(135deg, rgba(44, 21, 87, 0.95), rgba(0, 0, 0, 0.95))",
    },
    {
      key: "experience",
      title: "My Experience",
      subtitle: "Where I've worked",
      icon: "💼",
      gradient:
        "linear-gradient(135deg, rgba(95, 24, 71, 0.95), rgba(18,18,18,0.95))",
    },
    {
      key: "education",
      title: "Education",
      subtitle: "My coursework & degrees",
      icon: "🎓",
      gradient:
        "linear-gradient(135deg, rgba(107, 22, 22, 0.95), rgba(14,18,28,0.95))",
    },
  ];

  const favoriteSongs = [
    {
      rank: 1,
      title: "Go Back",
      artist: "John Summit, Sub Focus & Julia Church",
      album: "Go Back - Single",
      cover: "/assets/goback.jpeg",
    },
    {
      rank: 2,
      title: "Experience",
      artist: "Ludovico Einaudi",
      album: "In A Time Lapse",
      cover: "/assets/exp.jpeg",
    },
    {
      rank: 3,
      title: "White Keys",
      artist: "Dominic Fike",
      album: "White Keys - Single",
      cover: "/assets/whitekey.jpeg",
    },
    {
      rank: 4,
      title: "I Told You Things",
      artist: "Gracie Abrams",
      album: "The Secret of Us (Deluxe)",
      cover: "/assets/gracie.png",
    },
    {
      rank: 5,
      title: "Porch Light",
      artist: "Noah Kahan",
      album: "The Great Divide",
      cover: "/assets/porch.webp",
    },
    {
      rank: 6,
      title: "Where's My Love",
      artist: "SYML",
      album: "Where's My Love - EP",
      cover: "/assets/syml.jpg",
    },
  ];

  const playlistData = {
    about: {
      badge: "Verified Engineer",
      description:
        "I’m a Computer Science student at NJIT interested in software engineering, AI, data systems, and product design.",
      cover: "/assets/ananya copy.jpeg",
      isImage: true,
      items: [
        {
          number: 1,
          title: "Who I Am",
          subtitle: "Builder, problem-solver, and product-minded engineer",
          meta: "NJIT · Dorman Honors Scholar",
        },
        {
          number: 2,
          title: "What I Like Building",
          subtitle:
            "AI tools, dashboards, workflow automation, and polished web apps",
          meta: "Software + systems + UX",
        },
        {
          number: 3,
          title: "What Drives Me",
          subtitle: "Creating things that feel clear, useful, and impactful",
          meta: "Human-centered engineering",
        },
      ],
    },
    projects: {
      badge: "Projects Playlist",
      description: "A playlist of the projects I’m most proud of.",
      cover: "/assets/girlhacks copy.jpeg",
      isImage: true,
      items: [
        {
          number: 1,
          title: "Blend’d Beauty",
          subtitle:
            "AI-powered beauty recommendation app built with Flask, OpenAI API, and Firebase",
          meta: "1st Place · NJIT Forum",
        },
        {
          number: 2,
          title: "Parthenon of Productivity",
          subtitle:
            "Productivity web app focused on accessibility, clean UI, and intuitive user flow",
          meta: "Best UI/UX · Girl Hacks 2025",
        },
        {
          number: 3,
          title: "Connect Newark",
          subtitle:
            "Flask backend MVP with REST APIs and SQLite for a civic hackathon app",
          meta: "30+ testers",
        },
        {
          number: 4,
          title: "Mini-C Like Language Development",
          subtitle:
            "Designed and tested a Mini-C interpreter in C++ using EBNF and lexical analysis",
          meta: "100+ unit tests",
        },
      ],
    },
    experience: {
      badge: "Experience Playlist",
      description:
        "The roles that shaped how I think about engineering, operations, communication, and impact.",
      cover: HIRF,
      isImage: true,
      items: [
        {
          number: 1,
          title: "PSEG",
          subtitle:
            "IT Disaster Recovery Governance Intern — built Power BI dashboards and automated workflows across 200+ IT systems",
          meta: "Jun 2025 — Present",
        },
        {
          number: 2,
          title: "AI4SocialGood Lab",
          subtitle:
            "Undergraduate Research Assistant — developed latent-space classifiers for jailbreak detection",
          meta: "Jan 2025 — Present",
        },
        {
          number: 3,
          title: "CodeNinjas",
          subtitle:
            "Lead Instructor — taught 100+ students programming and built engaging STEM curriculum",
          meta: "Mar 2022 — Sep 2025",
        },
        {
          number: 4,
          title: "MoringaTech",
          subtitle:
            "IT Intern — created modular Java tools and improved API debugging and traceability",
          meta: "Jun 2023 — Sep 2023",
        },
      ],
    },
    education: {
      badge: "Education Playlist",
      description:
        "The academic foundation behind my work in software, systems, and product development.",
      cover: "/assets/njit.jpeg",
      isImage: true,
      items: [
        {
          number: 1,
          title: "New Jersey Institute of Technology",
          subtitle: "B.S. in Computer Science",
          meta: "Expected Dec 2027",
        },
        {
          number: 2,
          title: "Dorman Honors Scholar",
          subtitle: "Full tuition merit scholarship",
          meta: "Ying Wu College of Computing",
        },
        {
          number: 3,
          title: "Core Focus",
          subtitle:
            "Software engineering, AI systems, backend development, and data tools",
          meta: "Hands-on technical track",
        },
      ],
    },
    skills: {
      badge: "Skills Playlist",
      description:
        "A stacked library of the languages, frameworks, and platforms I reach for most often.",
      cover: "🛠️",
      items: [
        {
          number: 1,
          title: "Languages",
          subtitle: "Python, Java, C++, SQL, JavaScript, HTML/CSS, R",
          meta: "Core coding toolkit",
        },
        {
          number: 2,
          title: "Frameworks & Libraries",
          subtitle:
            "React, Flask, Spring Boot, Pandas, NumPy, MATLAB, OpenAI API",
          meta: "App + data work",
        },
        {
          number: 3,
          title: "Developer Tools",
          subtitle:
            "Git, Postman, MySQL, Swagger, Zipkin, VS Code, Eclipse, Xcode",
          meta: "Build + debug stack",
        },
        {
          number: 4,
          title: "Enterprise Platforms",
          subtitle:
            "Power BI, Power Apps, Power Automate, SharePoint, ServiceNow",
          meta: "Automation + governance",
        },
      ],
    },
  };

  const pageInfo = pages[currentPage];
  const playlist = playlistData[currentPage];

  const libraryTitle = useMemo(
    () => (currentPage === "home" ? "Home" : pageInfo.title),
    [currentPage, pageInfo.title],
  );

  const styles = `
  html, body, #root {
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    min-height: 100%;
    background: #000 !important;
  }

  body {
    overflow: hidden;
  }
    :root {
      --bg-black: #000;
      --bg-base: #121212;
      --bg-elevated-base: #242424;
      --bg-highlight: #1a1a1a;
      --bg-card: #181818;
      --bg-card-hover: #282828;
      --bg-tinted-base: #ffffff12;
      --bg-tinted-highlight: #ffffff1a;
      --bg-tinted-press: #ffffff0a;
      --text-primary: #fff;
      --text-secondary: #b3b3b3;
      --text-subdued: #6a6a6a;
      --primary-green: #1db954;
      --primary-green-hover: #1ed760;
      --primary-green-press: #169c46;
      --verified-blue: #3d91f4;
      --essential-negative: #e91429;
      --essential-positive: #1db954;
      --sidebar-width: 248px;
      --footer-height: 72px;
      --top-bar-height: 64px;
      --border-radius-sm: 4px;
      --border-radius-md: 8px;
      --border-radius-lg: 12px;
      --border-radius-pill: 500px;
      --transition-fast: 0.1s ease;
      --transition-normal: 0.2s ease;
    }
    .layout-container { min-height: 100vh; background: var(--bg-black); color: var(--text-primary); font-family: Inter, ui-sans-serif, system-ui, sans-serif; height:100%; overflow:hidden; box-sizing:border-box; margin:0; padding:0; }
.layout-body { display: flex; gap: 8px; height: 100vh; padding: 0; padding-bottom: var(--footer-height); }
    .mobile-header { display:none; }
    .sidebar-overlay { display:none; }
    .sidebar-wrapper { width: var(--sidebar-width); flex-shrink: 0; display:flex; flex-direction:column; gap:8px; }
    .sidebar-top, .library-shell, .main-shell { background:var(--bg-base); border-radius: 18px; box-shadow: 0 20px 60px rgba(0,0,0,0.35); }
    .sidebar-top { padding: 20px; }
    .home-link { width:100%; display:flex; align-items:center; justify-content:space-between; color:var(--text-primary); background:none; border:none; cursor:pointer; }
    .spotify-circle { width:44px; height:44px; border-radius:999px; background:var(--text-primary); color:var(--bg-black); display:flex; align-items:center; justify-content:center; }
    .home-link-right { display:flex; align-items:center; gap:12px; color:var(--text-secondary); }
    .home-link-right span { color:var(--text-primary); font-size:24px; font-weight:700; letter-spacing:-0.03em; }
    .library-shell { flex:1; min-height:0; padding:16px; display:flex; flex-direction:column; }
    .library-header { display:flex; align-items:center; justify-content:space-between; color:var(--text-secondary); margin-bottom:20px; }
    .library-header-left { display:flex; align-items:center; gap:12px; }
    .library-header-left span { font-size:24px; font-weight:700; }
    .library-toolbar { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
    .pill-button { border:none; border-radius:var(--border-radius-pill); padding:12px 20px; font-size:18px; font-weight:500; }
    .pill-button.white { background:var(--text-primary); color:var(--bg-black); }
    .library-toolbar span { color:var(--text-secondary); font-size:18px; }
    .library-list { overflow:auto; padding-right:4px; display:flex; flex-direction:column; gap:8px; }
    .library-item { width:100%; display:flex; align-items:center; gap:16px; padding:12px; border:none; background:transparent; color:var(--text-primary); border-radius:14px; cursor:pointer; text-align:left; transition:background var(--transition-normal); }
    .library-item.active { background:var(--bg-elevated-base); }
    .library-item:hover { background:var(--bg-highlight); }
    .library-item-icon { width:56px; height:56px; border-radius:10px; display:flex; align-items:center; justify-content:center; background:#0f0f0f; color:var(--text-secondary); flex-shrink:0; }
    .library-item.active .library-item-icon { background: linear-gradient(135deg, #8b5cf6, #d1fae5); color:white; }
    .library-item-title { font-size:18px; font-weight:500; }
    .library-item-sub { font-size:18px; color:var(--text-secondary); }
    .main-content { flex:1; min-width:0; }
    .main-shell { height:100%; overflow:hidden; }
    .home-container { height:100%; overflow:auto; position:relative; border-radius:18px; background:var(--bg-base); }
    .home-header-gradient { position:absolute; inset:0 0 auto 0; height:440px; background: linear-gradient(180deg, var(--hero-color), rgba(18,18,18,0.94) 68%, var(--bg-base) 100%); pointer-events:none; }
    .home-content { position:relative; z-index:1; }
    .sticky-topbar { position:sticky; top:0; z-index:10; display:flex; align-items:center; justify-content:space-between; padding:16px 24px; backdrop-filter: blur(10px); min-height:var(--top-bar-height); }
    .topbar-nav { display:flex; align-items:center; gap:8px; }
    .circle-icon-button { width:36px; height:36px; border:none; border-radius:999px; background:rgba(0,0,0,0.4); color:#d4d4d4; display:flex; align-items:center; justify-content:center; cursor:pointer; }
    .topbar-title { font-size:12px; letter-spacing:0.25em; text-transform:uppercase; color:rgba(255,255,255,0.5); }
    .hero-section { display:flex; gap:32px; align-items:flex-end; padding:24px 40px 32px; }
    .hero-image { width:210px; height:210px; border-radius:999px; object-fit:cover; background:black; box-shadow: 0 25px 70px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); flex-shrink:0; }
    .hero-cover { width:210px; height:210px; border-radius:18px; background:rgba(0,0,0,0.38); display:flex; align-items:center; justify-content:center; font-size:92px; box-shadow: 0 25px 70px rgba(0,0,0,0.45); border: 1px solid rgba(255,255,255,0.1); flex-shrink:0; }
    .hero-content { display:flex; flex-direction:column; padding-bottom:8px; }
    .verified-badge { display:flex; align-items:center; gap:10px; margin-bottom:14px; font-size:20px; color:rgba(255,255,255,0.9); }
    .hero-title { font-size:78px; line-height:0.95; letter-spacing:-0.07em; font-weight:900; margin:0; max-width:900px; }
    .hero-subtitle { font-size:22px; color:rgba(255,255,255,0.8); margin:20px 0 0; max-width:900px; }
    .action-bar { padding:0 40px 32px; display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
    .action-buttons-group { display:flex; align-items:center; gap:16px; }
    .play-button { width:56px; height:56px; border:none; border-radius:999px; background:var(--primary-green-hover); color:black; display:flex; align-items:center; justify-content:center; box-shadow: 0 15px 40px rgba(30,215,96,0.35); cursor:pointer; transition:transform var(--transition-fast), background var(--transition-fast); }
    .play-button:hover { transform:scale(1.03); background:var(--primary-green-hover); }
    .follow-button { border:1px solid rgba(255,255,255,0.3); color:var(--text-primary); background:transparent; border-radius:var(--border-radius-pill); padding:11px 18px; font-size:17px; font-weight:600; cursor:pointer; }
    .featured-section { display:flex; gap:16px; padding:0 40px 32px; }
    .featured-card { flex:1; min-height:96px; border-radius:18px; padding:20px 22px; position:relative; overflow:hidden; border:1px solid rgba(255,255,255,0.05); cursor:pointer; text-align:left; transition:transform var(--transition-normal), background var(--transition-normal); }
    .featured-card:hover { transform:translateY(-1px); }
    .featured-card h3 { margin:0; font-size:17px; font-weight:700; color:rgba(255, 255, 255, 1);  }
    .featured-card p { margin:6px 0 0; font-size:14px; color:rgba(255,255,255,0.65); }
    .featured-projects { background: linear-gradient(135deg, rgba(21, 40, 87, 0.95), rgba(8,17,13,0.95)); }
    .featured-experience { background: linear-gradient(135deg, rgba(73, 24, 95, 0.95), rgba(18,18,18,0.95)); }
    .featured-education { background: linear-gradient(135deg, rgba(117, 21, 21, 0.95), rgba(14,18,28,0.95)); }
    .featured-icon { position:absolute; right:18px; bottom:6px; font-size:42px; opacity:0.2; }
    .playlist-section { padding:0 40px 120px; }
    .playlist-header-row { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:28px; }
    .playlist-header-row h2 { margin:0; font-size:30px; font-weight:700; letter-spacing:-0.04em; }
    .outline-button { border:1px solid rgba(255,255,255,0.3); background:transparent; color:rgba(255,255,255,0.9); border-radius:999px; padding:12px 24px; font-size:18px; font-weight:500; }
    .track-list, .playlist-list { display:flex; flex-direction:column; gap:8px; }
    .track-row, .playlist-row { display:grid; align-items:center; gap:16px; border-radius:12px; padding:12px 16px; }
    .track-row:hover, .playlist-row:hover { background:rgba(255,255,255,0.05); }
    .popular-section { padding:0 40px 120px; }
    .section-header { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:28px; }
    .section-title { margin:0; font-size:30px; font-weight:700; letter-spacing:-0.04em; }
    .contest-ranking-btn { border:1px solid rgba(255,255,255,0.3); background:transparent; color:rgba(255,255,255,0.9); border-radius:999px; padding:10px 18px; font-size:16px; font-weight:500; cursor:pointer; }
    .tracks-list { display:flex; flex-direction:column; gap:4px; }
    .track-row { grid-template-columns: 70px minmax(0, 1fr) 180px; }
    .track-index { display:flex; align-items:center; gap:14px; color:#a1a1aa; }
    .track-index-number { width:18px; text-align:right; font-size:18px; }
    .track-index-play { opacity:0; transition:opacity 0.15s ease; }
    .track-row:hover .track-index-play { opacity:1; }
    .track-row:hover .track-index-number { opacity:0; width:0; overflow:hidden; }
    .track-title-col { display:flex; align-items:center; gap:14px; min-width:0; }
    .track-img { width:48px; height:48px; border-radius:6px; object-fit:cover; border:1px solid rgba(255,255,255,0.08); background:#27272a; }
    .track-info-col { min-width:0; display:flex; flex-direction:column; }
    .track-title, .playlist-title { font-size:17px; color:white; font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .track-subtitle, .playlist-subtitle { font-size:14px; color:#a1a1aa; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-top:2px; }
    .track-meta, .playlist-meta { font-size:15px; color:#71717a; text-align:right; }
    .playlist-columns { display:grid; grid-template-columns:40px 1fr 220px; gap:16px; border-bottom:1px solid rgba(255,255,255,0.1); padding:0 16px 12px; margin-bottom:16px; color:#a1a1aa; text-transform:uppercase; letter-spacing:0.08em; font-size:18px; }
    .playlist-row { grid-template-columns:40px 1fr 220px; }
    .playlist-num { font-size:22px; color:#a1a1aa; }
    .playlist-main { min-width:0; }
    .player-footer { position:fixed; left:0; right:0; bottom:0; z-index:20; background:var(--bg-black); border-top:1px solid rgba(255,255,255,0.1); padding:12px 24px; min-height:var(--footer-height); }
    .player-footer-inner { display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .player-now { display:flex; align-items:center; gap:12px; min-width:0; }
    .player-now-art { width:56px; height:56px; border-radius:8px; overflow:hidden; background:#27272a; }
    .player-now-art img { width:100%; height:100%; object-fit:cover; }
    .player-now-title { font-size:18px; font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .player-now-sub { font-size:15px; color:var(--text-secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .player-controls { display:flex; align-items:center; gap:32px; color:#a1a1aa; }
    .player-main-button { width:56px; height:56px; border:none; border-radius:999px; background:#d4d4d8; color:black; display:flex; align-items:center; justify-content:center; }
    @media (max-width: 1100px) {
      .hero-title { font-size:68px; }
      .hero-subtitle { font-size:26px; }
      .featured-section { flex-direction:column; }
    }
    @media (max-width: 1024px) {
      .sidebar-wrapper { display:none; }
      .hero-section, .action-bar, .featured-section, .playlist-section, .popular-section { padding-left:24px; padding-right:24px; }
      .hero-image, .hero-cover { width:220px; height:220px; }
      .hero-title { font-size:72px; }
    }
    @media (max-width: 768px) {
      .layout-body { padding:0; padding-bottom:96px; }
      .main-shell, .home-container { border-radius:0; }
      .hero-section { flex-direction:column; align-items:flex-start; gap:24px; }
      .hero-title { font-size:56px; }
      .hero-subtitle { font-size:22px; }
      .track-row { grid-template-columns: 68px minmax(0, 1fr); }
      .track-meta { display:none; }
      .playlist-columns { grid-template-columns:36px 1fr; }
      .playlist-columns div:last-child { display:none; }
      .playlist-row { grid-template-columns:36px 1fr; }
      .playlist-meta { display:none; }
      .player-footer-inner { gap:12px; }
      .player-controls { gap:18px; }
    }
  `;

  function AlbumArtwork({ song }) {
    return (
      <div className="album-artwork">
        <img src={song.cover} alt={`${song.title} album cover`} />
      </div>
    );
  }

  function HeroSection() {
    if (currentPage === "home") {
      return (
        <div className="hero-section">
          <img alt="Profile" className="hero-image" src={ananyaImg} />
          <div className="hero-content">
            <div className="verified-badge">
              <BadgeCheck size={24} fill="#3b82f6" color="#3b82f6" />
              <span>Verified Engineer</span>
            </div>
            <h1 className="hero-title">Ananya Raghunath</h1>
            <p className="hero-subtitle">{pageInfo.subtitle}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="hero-section">
        {playlist.isImage ? (
          <img
            alt={`${pageInfo.title} cover`}
            className="hero-cover hero-cover-image"
            src={playlist.cover}
          />
        ) : (
          <div className="hero-cover">{playlist.cover}</div>
        )}
        <div className="hero-content">
          <div className="verified-badge">
            <span>{playlist.badge}</span>
          </div>
          <h1 className="hero-title">{pageInfo.title}</h1>
          <p className="hero-subtitle">{playlist.description}</p>
        </div>
      </div>
    );
  }

  function HomeView() {
    return (
      <>
        <div className="action-bar">
          <div className="action-buttons-group">
            <button className="play-button" aria-label="Play">
              <Play size={22} fill="currentColor" style={{ marginLeft: 3 }} />
            </button>
            <button className="follow-button">Follow</button>
          </div>
        </div>

        <div className="featured-section">
          <button
            className="featured-card featured-projects"
            onClick={() => setCurrentPage("projects")}
          >
            <span className="featured-icon">💻</span>
            <div className="featured-card-text">
              <h3>View My Projects</h3>
              <p>Check out what I've built</p>
            </div>
          </button>
          <button
            className="featured-card featured-experience"
            onClick={() => setCurrentPage("experience")}
          >
            <span className="featured-icon">💼</span>
            <div className="featured-card-text">
              <h3>My Experience</h3>
              <p>Where I've worked</p>
            </div>
          </button>
          <button
            className="featured-card featured-education"
            onClick={() => setCurrentPage("education")}
          >
            <span className="featured-icon">🎓</span>
            <div className="featured-card-text">
              <h3>Education</h3>
              <p>My coursework &amp; degrees</p>
            </div>
          </button>
        </div>

        <div className="popular-section">
          <div className="section-header">
            <h2 className="section-title">My Faves</h2>
            <button className="contest-ranking-btn">Contest My Ranking</button>
          </div>

          <div className="tracks-list">
            {favoriteSongs.map((song) => (
              <div className="track-row" key={song.rank}>
                <div className="track-index">
                  <span className="track-index-number">{song.rank}</span>
                  <Play
                    className="track-index-play"
                    size={12}
                    fill="currentColor"
                  />
                </div>

                <div className="track-title-col">
                  <img
                    className="track-img"
                    src={song.cover}
                    alt={`${song.title} album cover`}
                  />
                  <div className="track-info-col">
                    <div className="track-title">{song.title}</div>
                    <div className="track-subtitle">{song.artist}</div>
                  </div>
                </div>

                <div className="track-meta">{song.album}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  function PlaylistView() {
    return (
      <div className="playlist-section">
        <div
          className="action-bar"
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 32 }}
        >
          <div className="action-buttons-group">
            <button className="play-button" aria-label="Play">
              <Play size={22} fill="currentColor" style={{ marginLeft: 3 }} />
            </button>
            <button className="follow-button">Save to Library</button>
          </div>
        </div>

        <div className="playlist-columns">
          <div>#</div>
          <div>Title</div>
          <div style={{ textAlign: "right" }}>Details</div>
        </div>

        <div className="playlist-list">
          {playlist.items.map((item) => (
            <div className="playlist-row" key={item.number}>
              <div className="playlist-num">{item.number}</div>
              <div className="playlist-main">
                <div className="playlist-title">{item.title}</div>
                <div className="playlist-subtitle">{item.subtitle}</div>
              </div>
              <div className="playlist-meta">{item.meta}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="layout-container">
        <div className="mobile-header">@</div>
        <div className="layout-body">
          <div className="sidebar-overlay" />

          <div className="sidebar-wrapper">
            <div className="sidebar-top">
              <button
                className="home-link"
                onClick={() => setCurrentPage("home")}
              >
                <div className="spotify-circle">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm4.817 15.126a.75.75 0 0 1-1.032.248c-2.828-1.728-6.39-2.12-10.588-1.163a.75.75 0 1 1-.333-1.463c4.598-1.046 8.544-.6 11.703 1.33a.75.75 0 0 1 .25 1.048zm1.473-3.278a.938.938 0 0 1-1.289.31c-3.238-1.99-8.171-2.567-11.999-1.403a.938.938 0 0 1-.546-1.794c4.374-1.329 9.813-.684 13.526 1.6.44.27.577.847.308 1.287zm.126-3.412C14.53 7.63 8.114 7.414 4.403 8.54a1.125 1.125 0 1 1-.654-2.153c4.26-1.293 11.346-1.043 15.841 1.627a1.125 1.125 0 0 1-1.174 1.922z" />
                  </svg>
                </div>
                <div className="home-link-right">
                  <Home size={24} color="white" />
                  <span>Home</span>
                </div>
              </button>
            </div>

            <div className="library-shell">
              <div className="library-header">
                <div className="library-header-left">
                  <Library size={24} />
                  <span>Your Library</span>
                </div>
                <Menu size={20} />
              </div>

              <div className="library-toolbar">
                <button className="pill-button white">Playlists</button>
                <span>Recents</span>
              </div>

              <div className="library-list">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const active = currentPage === item.key;
                  return (
                    <button
                      key={item.key}
                      className={`library-item ${active ? "active" : ""}`}
                      onClick={() => setCurrentPage(item.key)}
                    >
                      <div className="library-item-icon">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="library-item-title">{item.label}</div>
                        <div className="library-item-sub">{item.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <main className="main-content">
            <div className="main-shell">
              <div className="home-container">
                <div
                  className="home-header-gradient"
                  style={{ "--hero-color": pageInfo.heroColor }}
                />
                <div className="home-content">
                  <div className="sticky-topbar">
                    <div className="topbar-nav">
                      <button
                        className="circle-icon-button"
                        onClick={() => setCurrentPage("home")}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button className="circle-icon-button">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                    <div className="topbar-title">{libraryTitle}</div>
                  </div>

                  <HeroSection />
                  {currentPage === "home" ? <HomeView /> : <PlaylistView />}
                </div>
              </div>
            </div>
          </main>
        </div>

        <footer className="player-footer">
          <div className="player-footer-inner">
            <div className="player-now">
              <div className="player-now-art">
                <img
                  src={favoriteSongs[0].cover}
                  alt="Current track album art"
                />
              </div>
              <div style={{ minWidth: 0 }}>
                <div className="player-now-title">
                  {currentPage === "home"
                    ? favoriteSongs[0].title
                    : pageInfo.title}
                </div>
                <div className="player-now-sub">
                  {currentPage === "home"
                    ? favoriteSongs[0].artist
                    : "Ananya Raghunath"}
                </div>
              </div>
            </div>

            <div className="player-controls">
              <ChevronLeft size={24} />
              <button className="player-main-button">
                <Play size={22} fill="currentColor" style={{ marginLeft: 3 }} />
              </button>
              <ChevronRight size={24} />
            </div>

            <Expand size={20} color="#a1a1aa" />
          </div>
        </footer>
      </div>
    </>
  );
}
