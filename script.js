/**
 * ============================================================================
 * GLOBAL BUSINESS HUB - CORE REACTIVE ENGINE
 * Strictly Root-Level Architecture | Zero Folders | 100% Offline-Friendly
 * ============================================================================
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     1. GLOBAL DATASETS (Realistic Enterprise Demo Data)
     -------------------------------------------------------------------------- */
  const COMPANIES_DATA = [
    {
      id: "comp-techcorp",
      name: "TechCorp Global Systems",
      logoText: "TC",
      industry: "AI & Cloud",
      location: "United Kingdom",
      city: "London",
      size: "1000+",
      rating: 4.9,
      reviewsCount: 142,
      verified: true,
      summary: "Tier-1 hyper-scale cloud infrastructure provider and enterprise AI integration consultancy with global low-latency nodes.",
      services: ["Cloud Migration", "Enterprise AI", "DevSecOps", "Zero Trust Architecture"],
      founded: 2014,
      revenue: "$180M ARR",
      teamSize: "1,450 Engineers",
      overview: "TechCorp Global Systems delivers enterprise-grade cloud transformations for Fortune 500 institutions, sovereign entities, and tier-1 financial hubs. Operating across 18 regional data facilities with full ISO 27001 and SOC 2 Type II compliance.",
      leadership: [
        { name: "Dr. Elena Vance", role: "Chief Executive Officer & Founder" },
        { name: "David Sterling", role: "Chief Technology Officer" }
      ],
      reviews: [
        { author: "Barclays Capital", text: "Transformed our sovereign cloud migration with zero downtime. Exceptional architecture.", stars: 5 },
        { author: "Siemens EMEA", text: "Enterprise AI models deployed with unprecedented throughput and compliance safeguards.", stars: 5 }
      ]
    },
    {
      id: "comp-apex",
      name: "Apex Logistics International",
      logoText: "AL",
      industry: "Logistics",
      location: "UAE",
      city: "Dubai",
      size: "1000+",
      rating: 4.8,
      reviewsCount: 98,
      verified: true,
      summary: "Next-generation multimodal freight management, autonomous warehousing, and customs intelligence for cross-border trade corridors.",
      services: ["Air & Sea Freight", "Cold-Chain Logistics", "Automated Customs Clearance", "IoT Cargo Tracking"],
      founded: 2011,
      revenue: "$420M Annual",
      teamSize: "2,200 Staff",
      overview: "Connecting 85 international maritime ports and 120 air cargo corridors with real-time telemetry and algorithmic route clearance. Apex is the primary logistics gateway between the GCC, South Asia, and European trade corridors.",
      leadership: [
        { name: "Rashid Al-Maktoum", role: "Managing Director" },
        { name: "Farah Qasim", role: "VP of Global Operations" }
      ],
      reviews: [
        { author: "DHL Global Partner", text: "Reduced port dwell times by 42% through their automated customs API.", stars: 5 },
        { author: "Emirates Steel", text: "Reliable, robust, and highly predictable bulk shipping execution.", stars: 4.8 }
      ]
    },
    {
      id: "comp-indus",
      name: "Indus Digital Ventures",
      logoText: "ID",
      industry: "FinTech",
      location: "Pakistan",
      city: "Karachi",
      size: "201-1000",
      rating: 4.9,
      reviewsCount: 184,
      verified: true,
      summary: "Leading digital payments infrastructure, micro-investment engines, and enterprise core banking APIs across emerging markets.",
      services: ["Core Banking API", "Payment Gateway", "Fraud Prevention", "Cross-Border Remittances"],
      founded: 2017,
      revenue: "$64M ARR",
      teamSize: "680 Employees",
      overview: "Indus Digital Ventures powers digital financial connectivity across South Asia and the Middle East, serving over 28 million monthly active transacting wallets with sub-10ms response times.",
      leadership: [
        { name: "Zainab Mirza", role: "Founder & Chief Executive Officer" },
        { name: "Hamza Abbasi", role: "Chief Financial Officer" }
      ],
      reviews: [
        { author: "Habib Bank International", text: "Our digital banking transaction speed doubled after deploying Indus Core Rails.", stars: 5 },
        { author: "Careem Payments", text: "Best-in-class settlement speed and fraud mitigation algorithms.", stars: 5 }
      ]
    },
    {
      id: "comp-veritas",
      name: "Veritas Legal & Compliance",
      logoText: "VL",
      industry: "Legal",
      location: "United States",
      city: "New York",
      size: "51-200",
      rating: 4.9,
      reviewsCount: 76,
      verified: true,
      summary: "Elite corporate legal advisory specializing in cross-border M&A, sovereign regulatory frameworks, and intellectual property litigation.",
      services: ["Cross-Border M&A", "Securities Compliance", "IP Protection", "Arbitration & Dispute"],
      founded: 2008,
      revenue: "$95M Billable",
      teamSize: "140 Attorneys",
      overview: "Veritas acts as primary corporate counsel for Fortune 100 cross-border acquisitions, SEC inquiries, and international bilateral commercial treaties.",
      leadership: [
        { name: "Marcus Sterling, Esq.", role: "Senior Managing Partner" },
        { name: "Sarah Jenkins, Esq.", role: "Head of International Trade" }
      ],
      reviews: [
        { author: "BlackRock Ventures", text: "Flawless execution during our multi-jurisdiction $1.2B merger.", stars: 5 },
        { author: "Goldman Tech Portfolio", text: "Unmatched regulatory clarity across US and EU jurisdictions.", stars: 5 }
      ]
    },
    {
      id: "comp-quantum",
      name: "Quantum Cloud Systems",
      logoText: "QC",
      industry: "AI & Cloud",
      location: "Germany",
      city: "Frankfurt",
      size: "201-1000",
      rating: 4.8,
      reviewsCount: 112,
      verified: true,
      summary: "High-performance compute clusters, post-quantum cryptographic security, and automated sovereign data residency infrastructure.",
      services: ["HPC Clusters", "Quantum-Safe Encryption", "GDPR Cloud Vaults", "Edge AI Nodes"],
      founded: 2016,
      revenue: "$110M ARR",
      teamSize: "490 Researchers & Engineers",
      overview: "Operating state-of-the-art green data centers in Frankfurt and Zurich, Quantum Cloud Systems offers high-throughput computational clusters with zero-latency encryption safeguards.",
      leadership: [
        { name: "Sophie Weber", role: "Chief Security Officer" },
        { name: "Klaus Schmidt", role: "VP of Quantum Architecture" }
      ],
      reviews: [
        { author: "Deutsche Bank", text: "Unbreakable encryption standards and flawless SLA guarantees.", stars: 5 }
      ]
    },
    {
      id: "comp-falcon",
      name: "Falcon Energy Group",
      logoText: "FE",
      industry: "Energy",
      location: "Saudi Arabia",
      city: "Riyadh",
      size: "1000+",
      rating: 4.7,
      reviewsCount: 64,
      verified: true,
      summary: "Pioneering the global clean energy transition with utility-scale solar farms, green hydrogen grids, and carbon capture pipelines.",
      services: ["Solar Utility Grids", "Green Hydrogen", "Carbon Credits", "Grid Storage Solutions"],
      founded: 2012,
      revenue: "$850M Annual",
      teamSize: "3,100 Workforce",
      overview: "Falcon Energy coordinates sovereign renewable energy projects across the GCC, North Africa, and Mediterranean power corridors, driving the global Net-Zero 2050 agenda.",
      leadership: [
        { name: "Tariq Latif", role: "Chief Executive Officer" },
        { name: "Amina Al-Hassan", role: "Chief Sustainability Officer" }
      ],
      reviews: [
        { author: "Saudi Aramco Tech", text: "Instrumental in delivering our 500MW solar micro-grid ahead of schedule.", stars: 4.8 }
      ]
    },
    {
      id: "comp-alnoor",
      name: "Al-Noor Financial Advisory",
      logoText: "AN",
      industry: "Consulting",
      location: "UAE",
      city: "Abu Dhabi",
      size: "51-200",
      rating: 4.9,
      reviewsCount: 88,
      verified: true,
      summary: "Bespoke institutional family office advisory, sovereign wealth management, and private equity syndicate structuring.",
      services: ["Wealth Management", "Private Equity Syndication", "Sukuk Issuance", "Family Office Governance"],
      founded: 2005,
      revenue: "$4.5B AUM",
      teamSize: "95 Specialists",
      overview: "Al-Noor coordinates bilateral institutional capital allocations across private markets in EMEA, East Asia, and North America.",
      leadership: [
        { name: "Sheikh Hamad Al-Noor", role: "Senior Chairman" },
        { name: "Reza Merchant", role: "Managing Director" }
      ],
      reviews: [
        { author: "Mubadala Affiliate", text: "Top-tier syndication execution with deep institutional access.", stars: 5 }
      ]
    },
    {
      id: "comp-zurich",
      name: "Zurich Biotech Labs",
      logoText: "ZB",
      industry: "Healthcare",
      location: "Germany",
      city: "Zurich / Frankfurt",
      size: "201-1000",
      rating: 4.9,
      reviewsCount: 52,
      verified: true,
      summary: "AI-guided molecular discovery, clinical genomic sequencing, and automated biometric diagnostics for global healthcare networks.",
      services: ["Genomic Sequencing", "AI Drug Discovery", "Clinical Trials", "Bio-Informatics"],
      founded: 2018,
      revenue: "$78M Annual",
      teamSize: "320 Scientists",
      overview: "Accelerating pharmaceutical R&D timelines from 7 years to 18 months through algorithmic computational molecular modelling.",
      leadership: [
        { name: "Dr. Marianne Keller", role: "Chief Scientific Officer" }
      ],
      reviews: [
        { author: "Novartis Pipeline", text: "Accelerated our Phase 2 candidate identification by 14 months.", stars: 5 }
      ]
    },
    {
      id: "comp-pacific",
      name: "Pacific Rim Capital",
      logoText: "PR",
      industry: "FinTech",
      location: "Singapore",
      city: "Singapore",
      size: "51-200",
      rating: 4.8,
      reviewsCount: 79,
      verified: true,
      summary: "Venture debt, cross-border equity growth funds, and strategic syndication for high-growth enterprise SaaS across ASEAN.",
      services: ["Venture Capital", "Growth Debt", "Market Expansion", "Syndication"],
      founded: 2015,
      revenue: "$1.2B Capital Deployed",
      teamSize: "70 Investment Partners",
      overview: "Premier early-growth technology investor and institutional syndicate lead bridging ASEAN and Silicon Valley ecosystems.",
      leadership: [
        { name: "Liam Chen", role: "Managing Partner" }
      ],
      reviews: [
        { author: "Grab Ventures", text: "True strategic partners who open commercial enterprise doors in hours.", stars: 5 }
      ]
    },
    {
      id: "comp-maple",
      name: "Maple Leaf Cleantech",
      logoText: "ML",
      industry: "Energy",
      location: "Canada",
      city: "Toronto",
      size: "51-200",
      rating: 4.8,
      reviewsCount: 44,
      verified: true,
      summary: "Smart metropolitan micro-grids, carbon-capture telemetry, and algorithmic energy distribution systems for municipal utilities.",
      services: ["Micro-Grid Systems", "Carbon Accounting", "Smart Metering", "Utility Analytics"],
      founded: 2019,
      revenue: "$32M ARR",
      teamSize: "180 Engineers",
      overview: "Deployed across 14 Canadian municipalities and 6 US states, optimizing urban grid efficiency by 22%.",
      leadership: [
        { name: "Jordan Tremblay", role: "President & CEO" }
      ],
      reviews: [
        { author: "Hydro One Partner", text: "Exceptional grid stability and real-time fault isolation.", stars: 5 }
      ]
    }
  ];

  const SERVICES_DATA = [
    {
      id: "srv-1",
      name: "Enterprise Cloud & AI Migration",
      provider: "TechCorp Global Systems",
      category: "Software",
      price: "From $15,000 / project",
      delivery: "30 Business Days",
      rating: 4.9,
      perks: ["Zero-downtime database cutover", "ISO 27001 & SOC 2 certification", "24/7 dedicated SRE team", "Custom LLM micro-service API"]
    },
    {
      id: "srv-2",
      name: "Cross-Border Multimodal Logistics",
      provider: "Apex Logistics International",
      category: "Logistics",
      price: "From $8,500 / month",
      delivery: "Ongoing SLA",
      rating: 4.8,
      perks: ["Real-time satellite cargo telemetry", "Automated customs bond clearance", "Cold-chain temperature guarantee", "Port priority berthing access"]
    },
    {
      id: "srv-3",
      name: "Global FinTech & Core Banking Rails",
      provider: "Indus Digital Ventures",
      category: "Finance",
      price: "From $12,000 / integration",
      delivery: "14 Business Days",
      rating: 4.9,
      perks: ["Sub-10ms transaction throughput", "PCI-DSS Level 1 compliant gateway", "Automated AML / KYC check engine", "Multi-currency settlement pool"]
    },
    {
      id: "srv-4",
      name: "Cross-Border M&A & Legal Compliance",
      provider: "Veritas Legal & Compliance",
      category: "Legal",
      price: "From $20,000 / deal audit",
      delivery: "21 Business Days",
      rating: 4.9,
      perks: ["Multi-jurisdictional tax structuring", "SEC & FCA regulatory filings", "Virtual data room security audit", "Executive escrow coordination"]
    },
    {
      id: "srv-5",
      name: "Post-Quantum Zero-Trust Security",
      provider: "Quantum Cloud Systems",
      category: "Cybersecurity",
      price: "From $18,000 / setup",
      delivery: "14 Business Days",
      rating: 4.9,
      perks: ["Quantum-resistant lattice encryption", "Penetration testing & red team", "Immutable audit logging", "GDPR compliance verification"]
    },
    {
      id: "srv-6",
      name: "Industrial ESG & Carbon Grid Audit",
      provider: "Falcon Energy Group",
      category: "Consulting",
      price: "From $9,500 / report",
      delivery: "10 Business Days",
      rating: 4.7,
      perks: ["Scope 1, 2, 3 carbon accounting", "Verified carbon offset certificates", "Government tax incentive mapping", "Executive board presentation"]
    },
    {
      id: "srv-7",
      name: "B2B Brand Growth & Global Marketing",
      provider: "TechCorp Global Systems",
      category: "Marketing",
      price: "From $6,500 / month",
      delivery: "Monthly Retainer",
      rating: 4.8,
      perks: ["High-impact C-suite lead generation", "International PR placement", "Account-based marketing (ABM)", "Full funnel ROI attribution"]
    },
    {
      id: "srv-8",
      name: "Institutional Capital Syndication",
      provider: "Al-Noor Financial Advisory",
      category: "Consulting",
      price: "From $25,000 / advisory",
      delivery: "60 Days Horizon",
      rating: 4.9,
      perks: ["Direct sovereign fund access", "Private equity syndicate roadshow", "Term sheet negotiation support", "Financial model stress-testing"]
    }
  ];

  const OPPORTUNITIES_DATA = [
    {
      id: "opp-1",
      title: "GCC-South Asia Clean Energy Power Corridor",
      company: "Falcon Energy Group",
      type: "Joint Venture",
      location: "Saudi Arabia / Pakistan",
      deadline: "Oct 28, 2026",
      status: "Closing Soon",
      statusClass: "status-closing",
      dealSize: "$120,000,000",
      category: "Energy Grid",
      description: "Seeking consortium co-investors and EPC contractors for a 600MW regional high-voltage direct current (HVDC) transmission link."
    },
    {
      id: "opp-2",
      title: "Series B Sovereign FinTech Capital Syndicate",
      company: "Indus Digital Ventures",
      type: "Investment",
      location: "UAE / Singapore",
      deadline: "Nov 15, 2026",
      status: "Active",
      statusClass: "status-active",
      dealSize: "$45,000,000",
      category: "FinTech Scaleup",
      description: "Direct equity allocation for institutional funds to accelerate cross-border payment gateway rollout across 4 emerging central bank rails."
    },
    {
      id: "opp-3",
      title: "Trans-Atlantic Cloud Security Infrastructure RFP",
      company: "Quantum Cloud Systems",
      type: "Contract",
      location: "Germany / United States",
      deadline: "Oct 18, 2026",
      status: "Closing Soon",
      statusClass: "status-closing",
      dealSize: "$18,500,000",
      category: "Cybersecurity RFP",
      description: "Government-accredited enterprise RFP for multi-cloud sovereign data vault deployment across Frankfurt and Washington DC nodes."
    },
    {
      id: "opp-4",
      title: "Global Cold-Chain Port Infrastructure Partnership",
      company: "Apex Logistics International",
      type: "Partnership",
      location: "UAE / United Kingdom",
      deadline: "Dec 05, 2026",
      status: "Active",
      statusClass: "status-active",
      dealSize: "$32,000,000",
      category: "Maritime Logistics",
      description: "Bilateral joint venture to construct temperature-regulated pharmaceutical shipping facilities in Jebel Ali and Felixstowe ports."
    },
    {
      id: "opp-5",
      title: "AI Molecular Synthesis Drug Discovery Seed Pool",
      company: "Zurich Biotech Labs",
      type: "Investment",
      location: "Germany / Switzerland",
      deadline: "Nov 30, 2026",
      status: "Active",
      statusClass: "status-active",
      dealSize: "$14,000,000",
      category: "Biotechnology",
      description: "Early-commercialization syndicate for patented oncology molecular synthesis with Phase 1 FDA clinical clearance."
    },
    {
      id: "opp-6",
      title: "Cross-Border Corporate Legal Advisory Panel",
      company: "Veritas Legal & Compliance",
      type: "Contract",
      location: "United States / UK",
      deadline: "Dec 20, 2026",
      status: "Active",
      statusClass: "status-active",
      dealSize: "$6,500,000",
      category: "Legal Procurement",
      description: "Annual retainer RFP for external antitrust and securities litigation defense across North American trade jurisdictions."
    }
  ];

  const PROFESSIONALS_DATA = [
    {
      id: "pro-1",
      name: "Tariq Latif",
      role: "Managing Partner & CEO",
      company: "Falcon Energy Group",
      location: "Riyadh, Saudi Arabia",
      skills: ["Renewable Energy", "Sovereign Funds", "Infrastructure EPC", "Executive Strategy"],
      connected: false
    },
    {
      id: "pro-2",
      name: "Dr. Elena Vance",
      role: "Chief Executive Officer & Founder",
      company: "TechCorp Global Systems",
      location: "London, United Kingdom",
      skills: ["Enterprise Cloud", "Distributed AI", "DevSecOps", "Venture Scaling"],
      connected: true
    },
    {
      id: "pro-3",
      name: "Zainab Mirza",
      role: "Founder & Chief Executive Officer",
      company: "Indus Digital Ventures",
      location: "Karachi, Pakistan",
      skills: ["FinTech Infrastructure", "Central Bank APIs", "Digital Payments", "Growth"],
      connected: false
    },
    {
      id: "pro-4",
      name: "Marcus Sterling, Esq.",
      role: "Senior Managing Partner",
      company: "Veritas Legal Partners",
      location: "New York, United States",
      skills: ["Cross-Border M&A", "Securities Law", "Antitrust Litigation", "Arbitration"],
      connected: false
    },
    {
      id: "pro-5",
      name: "Liam Chen",
      role: "Managing Partner",
      company: "Pacific Rim Capital",
      location: "Singapore",
      skills: ["Venture Debt", "ASEAN Expansion", "Growth Equity", "Board Advisory"],
      connected: false
    },
    {
      id: "pro-6",
      name: "Sophie Weber",
      role: "Chief Security Officer",
      company: "Quantum Cloud Systems",
      location: "Frankfurt, Germany",
      skills: ["Post-Quantum Crypto", "Zero-Trust Architecture", "GDPR", "Cloud Sec"],
      connected: false
    }
  ];

  const INSIGHTS_DATA = [
    {
      id: "art-1",
      title: "The 2026 Sovereign AI Mandate: Infrastructure, Security & Compliance",
      category: "Technology",
      date: "September 08, 2026",
      readTime: "6 min read",
      excerpt: "Why national governments and multi-national corporations are repatriating sensitive LLM training pipelines into sovereign on-premise cloud architectures.",
      content: `The global artificial intelligence landscape has reached an inflection point where relying solely on centralized foreign hyperscalers introduces intolerable legal and national security liabilities. 

Key Takeaways:
• Over 42 jurisdictions now require algorithmic training data to remain within domestic physical boundaries.
• Sovereign cloud deployments have increased by 138% year-over-year across EMEA and South Asia.
• Enterprises adopting decentralized model checkpoints reduce regulatory friction by up to 60%.

To remain resilient, enterprise CIOs must implement hybrid data pipelines with cryptographic provenance attestations.`
    },
    {
      id: "art-2",
      title: "Cross-Border Capital Flows Between GCC & South Asian Corridors",
      category: "Finance",
      date: "August 29, 2026",
      readTime: "8 min read",
      excerpt: "Analyzing the $42B bilateral trade acceleration between Riyadh, Dubai, Karachi, and Singapore through digital settlement rails.",
      content: `A transformative capital realignment is underway across the Indian Ocean maritime rim. Gulf sovereign wealth vehicles are deploying direct bilateral equity into South Asian FinTech, agricultural logistics, and clean power grids.

Key Takeaways:
• Real-time bilateral currency settlement bridges have reduced FX friction by 240 basis points.
• Strategic logistics corridors through Arabian Sea ports are shortening European transit schedules by 8 days.
• Sovereign family offices in the UAE and Saudi Arabia are prioritizing scalable digital infrastructure investments.`
    },
    {
      id: "art-3",
      title: "Zero-Trust Data Protection in Multi-Cloud Enterprise Environments",
      category: "Cybersecurity",
      date: "August 14, 2026",
      readTime: "5 min read",
      excerpt: "How cryptographic lattice architectures and micro-segmentation protect cross-border financial transactions against quantum threats.",
      content: `Perimeter security is formally obsolete. Modern global enterprises operate across dozens of federated cloud regions, necessitating continuous zero-trust verification for every API invocation.

Key Takeaways:
• NIST-approved post-quantum algorithms are now mandatory for banking infrastructure.
• Granular access policies mitigate lateral movement during containerized microservice breaches.
• Automated key rotation policies prevent credential leakage across distributed remote engineering teams.`
    }
  ];

  const REGIONAL_HOTSPOTS = {
    "Pakistan": {
      name: "Pakistan",
      desc: "Rapidly expanding tech, manufacturing, and industrial trade corridor with over 1,400 active software, energy, and logistics enterprises.",
      companies: "1,420+",
      volume: "$3.8B",
      growth: "+28.4% YoY",
      sector: "FinTech & IT Services"
    },
    "UAE": {
      name: "UAE (Dubai & Abu Dhabi)",
      desc: "The primary Middle Eastern financial gateway, maritime logistics hub, and sovereign wealth syndication capital.",
      companies: "3,850+",
      volume: "$16.2B",
      growth: "+22.1% YoY",
      sector: "Global Logistics & Wealth"
    },
    "United Kingdom": {
      name: "United Kingdom (London)",
      desc: "Premier European financial epicenter, international corporate law hub, and high-frequency institutional trading center.",
      companies: "4,200+",
      volume: "$14.5B",
      growth: "+14.8% YoY",
      sector: "Banking, Legal & FinTech"
    },
    "United States": {
      name: "United States (NYC / SF)",
      desc: "Global epicenter of venture capital syndicates, enterprise software hyperscalers, and deep-tech innovation.",
      companies: "5,600+",
      volume: "$24.0B",
      growth: "+18.2% YoY",
      sector: "Enterprise AI & VC"
    },
    "Germany": {
      name: "Germany (Frankfurt / Munich)",
      desc: "European Union industrial backbone, precision engineering leader, and sovereign quantum-cloud infrastructure anchor.",
      companies: "2,400+",
      volume: "$9.8B",
      growth: "+11.4% YoY",
      sector: "Industrial Automation & Cloud"
    },
    "Saudi Arabia": {
      name: "Saudi Arabia (Riyadh)",
      desc: "Transformative economic powerhouse leading the Vision 2030 renewable grid investments, gigaprojects, and sovereign capital syndication.",
      companies: "2,150+",
      volume: "$11.2B",
      growth: "+31.2% YoY",
      sector: "Clean Energy & Infrastructure"
    },
    "Singapore": {
      name: "Singapore",
      desc: "Asia-Pacific primary financial hub, maritime crossroads, and high-throughput corporate headquarters nexus.",
      companies: "2,900+",
      volume: "$12.4B",
      growth: "+19.5% YoY",
      sector: "ASEAN Finance & Trade"
    },
    "Canada": {
      name: "Canada (Toronto)",
      desc: "Clean-tech powerhouse, AI research center, and natural resources sustainability pioneer.",
      companies: "1,650+",
      volume: "$5.1B",
      growth: "+16.0% YoY",
      sector: "Cleantech & AI"
    },
    "Australia": {
      name: "Australia (Sydney)",
      desc: "Indo-Pacific resources, critical minerals traceability, and green maritime export corridor.",
      companies: "1,520+",
      volume: "$4.9B",
      growth: "+13.7% YoY",
      sector: "Clean Mining & Agri-Trade"
    }
  };

  /* --------------------------------------------------------------------------
     2. LOCAL STORAGE CONTROLLER
     -------------------------------------------------------------------------- */
  const Storage = {
    get: function (key, defaultVal) {
      try {
        const item = localStorage.getItem("gbh_" + key);
        return item ? JSON.parse(item) : defaultVal;
      } catch (e) {
        console.warn("Storage read error", e);
        return defaultVal;
      }
    },
    set: function (key, val) {
      try {
        localStorage.setItem("gbh_" + key, JSON.stringify(val));
      } catch (e) {
        console.warn("Storage write error", e);
      }
    }
  };

  // Global State in memory
  let currentTheme = Storage.get("theme", "dark");
  let savedItems = Storage.get("saved_items", []);
  let scheduledMeetings = Storage.get("scheduled_meetings", [
    {
      id: "meet-1",
      company: "Apex Logistics International",
      date: "2026-09-18",
      time: "02:00 PM GMT",
      type: "Encrypted Video Call (Global Hub Live)",
      notes: "Discussion on cross-border supply chain integration and customs API SLA."
    },
    {
      id: "meet-2",
      company: "TechCorp Global Systems",
      date: "2026-09-24",
      time: "11:30 AM GMT",
      type: "Executive Headquarters In-Person",
      notes: "Executive briefing on sovereign enterprise AI governance and latency optimization."
    }
  ]);
  let notifications = Storage.get("notifications", [
    {
      id: "notif-1",
      title: "Series B Syndicate Opportunity",
      desc: "Indus Digital Ventures opened a $45M equity round. Term sheet available.",
      time: "12m ago",
      read: false
    },
    {
      id: "notif-2",
      title: "New Connection Request",
      desc: "Tariq Latif (CEO, Falcon Energy) requested an executive connection.",
      time: "1h ago",
      read: false
    },
    {
      id: "notif-3",
      title: "Security Verification Active",
      desc: "Your organization account is fully ISO 27001 authenticated.",
      time: "1d ago",
      read: false
    }
  ]);
  let chatMessages = Storage.get("chat_messages", [
    { from: "them", text: "Welcome to Global Business Hub. I reviewed your enterprise profile and would love to explore mutual opportunities.", time: "10:14 AM" },
    { from: "me", text: "Pleasure to connect. We are evaluating sovereign cloud migration and cross-border trade rails.", time: "10:16 AM" },
    { from: "them", text: "Understood. Our engineering leads can coordinate an architectural briefing this Thursday.", time: "10:18 AM" }
  ]);
  let userProfile = Storage.get("user_profile", {
    name: "Asfand Yar",
    email: "asfandyar@enterprise.com",
    company: "Apex Strategic Holdings",
    role: "Managing Director",
    bio: "Pioneering enterprise technology, international trade syndicates, and sovereign business ecosystems across global corridors.",
    skills: "Cross-Border Trade, Enterprise SaaS, FinTech, M&A"
  });

  /* --------------------------------------------------------------------------
     3. TOAST NOTIFICATION UTILITY
     -------------------------------------------------------------------------- */
  function showToast(message, type) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";

    let iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
    if (type === "warning") {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
    }

    toast.innerHTML = `
      <div style="flex-shrink: 0;">${iconSvg}</div>
      <div style="flex: 1; font-size: 0.85rem; line-height: 1.4;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4200);
  }

  /* --------------------------------------------------------------------------
     4. THEME & HEADER CONTROLLER
     -------------------------------------------------------------------------- */
  function initTheme() {
    document.documentElement.setAttribute("data-theme", currentTheme);
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", currentTheme);
        Storage.set("theme", currentTheme);
        showToast(`Switched to ${currentTheme.toUpperCase()} mode.`);
        redrawCharts();
      });
    }
  }

  function initHeaderNavigation() {
    // Header active link on scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link[data-nav]");

    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 140;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            if (link.getAttribute("data-nav") === sectionId) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    });

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById("mobileMenuToggle");
    const mobileDrawer = document.getElementById("mobileNavDrawer");
    const mobileBackdrop = document.getElementById("mobileNavBackdrop");
    const closeMobileBtn = document.getElementById("closeMobileNavBtn");

    function toggleMobileNav(open) {
      if (open) {
        mobileDrawer.classList.add("active");
        mobileBackdrop.classList.add("active");
      } else {
        mobileDrawer.classList.remove("active");
        mobileBackdrop.classList.remove("active");
      }
    }

    if (mobileToggle) mobileToggle.addEventListener("click", () => toggleMobileNav(true));
    if (closeMobileBtn) closeMobileBtn.addEventListener("click", () => toggleMobileNav(false));
    if (mobileBackdrop) mobileBackdrop.addEventListener("click", () => toggleMobileNav(false));

    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => toggleMobileNav(false));
    });

    // Language Toggle
    const langBtn = document.getElementById("langToggleBtn");
    const currentLangText = document.getElementById("currentLangText");
    let currentLang = "EN";
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        currentLang = currentLang === "EN" ? "UR" : "EN";
        currentLangText.textContent = currentLang;
        showToast(`Language switched to ${currentLang === "UR" ? "Urdu (اردو)" : "English"}. Translation matrix enabled.`);
      });
    }

    // User Profile in Header
    updateHeaderProfile();
    const userProfileBtn = document.getElementById("userProfileBtn");
    if (userProfileBtn) {
      userProfileBtn.addEventListener("click", () => openAuthModal("profile"));
    }
  }

  function updateHeaderProfile() {
    const avatarEl = document.getElementById("headerAvatar");
    const nameEl = document.getElementById("headerUserName");
    if (avatarEl && nameEl) {
      nameEl.textContent = userProfile.name;
      const initials = userProfile.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
      avatarEl.textContent = initials || "GB";
    }
  }

  /* --------------------------------------------------------------------------
     5. HERO INTERACTIVE CANVAS (Autonomous Interconnected Nodes)
     -------------------------------------------------------------------------- */
  function initHeroCanvas() {
    const canvas = document.getElementById("networkCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];
    const particleCount = 42;

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    window.addEventListener("resize", resize);
    resize();

    // Generate nodes
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 2,
        alpha: Math.random() * 0.6 + 0.4,
        hub: i < 5 // 5 major central enterprise hubs
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", () => {
      mouseX = -1000;
      mouseY = -1000;
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid
      ctx.strokeStyle = "rgba(0, 229, 255, 0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive mouse push
        const dxM = p.x - mouseX;
        const dyM = p.y - mouseY;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < 80) {
          p.x += (dxM / distM) * 1.5;
          p.y += (dyM / distM) * 1.5;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.25;
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = p.hub || p2.hub ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.hub ? 5 : p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.hub ? "#00e5ff" : "rgba(0, 229, 255, 0.7)";
        ctx.fill();

        if (p.hub) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(0, 229, 255, 0.3)";
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* --------------------------------------------------------------------------
     6. INTERACTIVE WORLD MAP & HUD CONTROLLER
     -------------------------------------------------------------------------- */
  function initWorldMap() {
    const nodes = document.querySelectorAll(".map-region-node");
    const hudName = document.getElementById("hudRegionName");
    const hudDesc = document.getElementById("hudRegionDesc");
    const hudCompanies = document.getElementById("hudStatCompanies");
    const hudVolume = document.getElementById("hudStatVolume");
    const hudGrowth = document.getElementById("hudStatGrowth");
    const hudSector = document.getElementById("hudStatSector");
    const hudFilterBtn = document.getElementById("hudFilterBtn");

    let activeRegion = "Pakistan";

    function updateHud(regionKey) {
      const data = REGIONAL_HOTSPOTS[regionKey];
      if (!data) return;
      activeRegion = regionKey;
      hudName.textContent = data.name;
      hudDesc.textContent = data.desc;
      hudCompanies.textContent = data.companies;
      hudVolume.textContent = data.volume;
      hudGrowth.textContent = data.growth;
      hudSector.textContent = data.sector;
    }

    nodes.forEach(node => {
      node.addEventListener("click", () => {
        const region = node.getAttribute("data-region");
        updateHud(region);
        showToast(`Inspecting regional activity for ${region}.`);
      });
    });

    if (hudFilterBtn) {
      hudFilterBtn.addEventListener("click", () => {
        const locationSelect = document.getElementById("locationFilterSelect");
        if (locationSelect) {
          locationSelect.value = activeRegion;
          renderDirectory();
          const target = document.getElementById("businesses");
          if (target) target.scrollIntoView({ behavior: "smooth" });
          showToast(`Filtered Directory by region: ${activeRegion}`);
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     7. BUSINESS DIRECTORY CONTROLLER & PROFILE MODAL
     -------------------------------------------------------------------------- */
  function renderDirectory() {
    const container = document.getElementById("directoryContainer");
    if (!container) return;

    const searchVal = (document.getElementById("directorySearchInput")?.value || "").toLowerCase();
    const industryVal = document.getElementById("industryFilterSelect")?.value || "All";
    const locationVal = document.getElementById("locationFilterSelect")?.value || "All";
    const sizeVal = document.getElementById("sizeFilterSelect")?.value || "All";
    const sortVal = document.getElementById("sortDirectorySelect")?.value || "popular";

    let filtered = COMPANIES_DATA.filter(comp => {
      const matchSearch =
        comp.name.toLowerCase().includes(searchVal) ||
        comp.industry.toLowerCase().includes(searchVal) ||
        comp.location.toLowerCase().includes(searchVal) ||
        comp.services.some(s => s.toLowerCase().includes(searchVal));

      const matchIndustry = industryVal === "All" || comp.industry === industryVal;
      const matchLocation = locationVal === "All" || comp.location.toLowerCase().includes(locationVal.toLowerCase());
      const matchSize = sizeVal === "All" || comp.size === sizeVal;

      return matchSearch && matchIndustry && matchLocation && matchSize;
    });

    // Sorting
    if (sortVal === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortVal === "newest") {
      filtered.sort((a, b) => b.founded - a.founded);
    } else if (sortVal === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-subtle);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin: 0 auto 16px auto;">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">No Verified Enterprises Found</h3>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 20px;">Adjust search keywords, clear filters, or reset selections to view all organizations.</p>
          <button class="btn btn-secondary btn-sm" id="emptyResetBtn">Reset All Filters</button>
        </div>
      `;
      document.getElementById("emptyResetBtn")?.addEventListener("click", resetDirectoryFilters);
      return;
    }

    container.innerHTML = filtered
      .map(comp => {
        const isSaved = savedItems.some(item => item.id === comp.id);
        return `
          <div class="business-card" data-id="${comp.id}">
            <div>
              <div class="business-card-header">
                <div class="company-logo-badge">${comp.logoText}</div>
                <button class="card-save-btn ${isSaved ? "saved" : ""}" data-save-id="${comp.id}" data-save-type="company" title="${isSaved ? "Saved" : "Save Company"}">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                  </svg>
                </button>
              </div>

              <div class="business-identity">
                <div class="business-name-row">
                  <h3 class="business-name">${comp.name}</h3>
                  <span class="verified-badge" title="Verified Enterprise Tier-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" stroke-width="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </span>
                </div>
                
                <div class="business-meta-row">
                  <span class="meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 6 12 12 16 14"/></svg>
                    ${comp.industry}
                  </span>
                  <span>•</span>
                  <span class="meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    ${comp.city}, ${comp.location}
                  </span>
                  <span>•</span>
                  <span class="meta-item" style="color: #f59e0b; font-weight: 700;">
                    ★ ${comp.rating}
                  </span>
                </div>
              </div>

              <p class="business-description">${comp.summary}</p>

              <div class="business-services-chips">
                ${comp.services.map(s => `<span class="service-pill">${s}</span>`).join("")}
              </div>
            </div>

            <div class="business-card-footer">
              <button class="btn btn-secondary btn-sm btn-view-profile" data-profile-id="${comp.id}">
                View Profile
              </button>
              <button class="btn btn-outline btn-sm btn-quick-book" data-comp-name="${comp.name}">
                Consultation
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    // Attach card action events
    attachDirectoryEvents();
  }

  function attachDirectoryEvents() {
    // View profile
    document.querySelectorAll(".btn-view-profile").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-profile-id");
        openCompanyModal(id);
      });
    });

    // Quick Book
    document.querySelectorAll(".btn-quick-book").forEach(btn => {
      btn.addEventListener("click", () => {
        const compName = btn.getAttribute("data-comp-name");
        const companySelect = document.getElementById("bookingCompanySelect");
        if (companySelect) {
          companySelect.value = compName;
          document.getElementById("appointments")?.scrollIntoView({ behavior: "smooth" });
          showToast(`Selected ${compName} for consultation booking.`);
        }
      });
    });

    // Bookmark / Save toggle
    document.querySelectorAll(".card-save-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-save-id");
        toggleSaveItem(id, "company");
      });
    });
  }

  function resetDirectoryFilters() {
    const searchInput = document.getElementById("directorySearchInput");
    const indSelect = document.getElementById("industryFilterSelect");
    const locSelect = document.getElementById("locationFilterSelect");
    const sizeSelect = document.getElementById("sizeFilterSelect");
    const sortSelect = document.getElementById("sortDirectorySelect");

    if (searchInput) searchInput.value = "";
    if (indSelect) indSelect.value = "All";
    if (locSelect) locSelect.value = "All";
    if (sizeSelect) sizeSelect.value = "All";
    if (sortSelect) sortSelect.value = "popular";

    renderDirectory();
    showToast("Directory filters reset.");
  }

  function openCompanyModal(companyId) {
    const comp = COMPANIES_DATA.find(c => c.id === companyId);
    if (!comp) return;

    const modal = document.getElementById("companyProfileModal");
    const logoEl = document.getElementById("modalCompanyLogo");
    const nameEl = document.getElementById("modalCompanyName");
    const subtitleEl = document.getElementById("modalCompanySubtitle");
    const bodyEl = document.getElementById("modalCompanyBody");
    const actionBtn = document.getElementById("modalCompanyActionBtn");
    const saveBtn = document.getElementById("modalCompanySaveBtn");
    const shareBtn = document.getElementById("modalCompanyShareBtn");

    logoEl.textContent = comp.logoText;
    nameEl.textContent = comp.name;
    subtitleEl.textContent = `${comp.industry} • ${comp.city}, ${comp.location} • Founded ${comp.founded}`;

    bodyEl.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 0.9375rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">Executive Overview</h4>
        <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">${comp.overview}</p>
      </div>

      <!-- Institutional Metrics -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 28px;">
        <div class="hud-stat-box">
          <div class="hud-stat-label">Annual Revenue</div>
          <div class="hud-stat-val" style="color: var(--brand-cyan);">${comp.revenue}</div>
        </div>
        <div class="hud-stat-box">
          <div class="hud-stat-label">Team Scale</div>
          <div class="hud-stat-val">${comp.teamSize}</div>
        </div>
        <div class="hud-stat-box">
          <div class="hud-stat-label">Client Rating</div>
          <div class="hud-stat-val" style="color: #f59e0b;">★ ${comp.rating} / 5.0</div>
        </div>
        <div class="hud-stat-box">
          <div class="hud-stat-label">Verification</div>
          <div class="hud-stat-val" style="color: var(--color-success);">Tier-1 Verified</div>
        </div>
      </div>

      <!-- Core Capabilities -->
      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 0.9375rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Verified Enterprise Services</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${comp.services.map(s => `<span class="service-pill" style="font-size: 0.8125rem; padding: 6px 14px; background: rgba(0, 229, 255, 0.08); border-color: var(--cyan-border); color: var(--brand-cyan);">${s}</span>`).join("")}
        </div>
      </div>

      <!-- Executive Leadership -->
      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 0.9375rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Executive Leadership</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          ${comp.leadership.map(l => `
            <div style="background: var(--bg-tertiary); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-primary);">${l.name}</div>
              <div style="font-size: 0.78125rem; color: var(--brand-cyan);">${l.role}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Verified Testimonials -->
      <div>
        <h4 style="font-size: 0.9375rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Enterprise Partner Reviews</h4>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${comp.reviews.map(r => `
            <div style="background: var(--bg-tertiary); padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
                <span>${r.author}</span>
                <span style="color: #f59e0b;">★ ${r.stars}.0</span>
              </div>
              <p style="font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.5;">"${r.text}"</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    // Action button handlers
    actionBtn.onclick = () => {
      modal.classList.remove("active");
      const companySelect = document.getElementById("bookingCompanySelect");
      if (companySelect) companySelect.value = comp.name;
      document.getElementById("appointments")?.scrollIntoView({ behavior: "smooth" });
      showToast(`Booking briefing session with ${comp.name}.`);
    };

    saveBtn.onclick = () => {
      toggleSaveItem(comp.id, "company");
    };

    shareBtn.onclick = () => {
      navigator.clipboard?.writeText(window.location.href);
      showToast(`Direct profile link for ${comp.name} copied to clipboard.`);
    };

    modal.classList.add("active");
  }

  /* --------------------------------------------------------------------------
     8. SERVICES MARKETPLACE CONTROLLER & RFQ MODAL
     -------------------------------------------------------------------------- */
  function renderServices(selectedCategory = "All") {
    const container = document.getElementById("servicesContainer");
    if (!container) return;

    let filtered = SERVICES_DATA;
    if (selectedCategory !== "All") {
      filtered = SERVICES_DATA.filter(s => s.category === selectedCategory);
    }

    container.innerHTML = filtered
      .map(service => {
        return `
          <div class="service-card" data-service-id="${service.id}">
            <div>
              <div class="service-card-top">
                <span class="service-category-tag">${service.category}</span>
                <div class="service-pricing-badge">${service.price}</div>
              </div>

              <h3 class="service-title">${service.name}</h3>

              <div class="service-provider-info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                <span>${service.provider}</span>
                <span class="verified-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </span>
              </div>

              <div class="service-perks-list">
                ${service.perks.map(p => `
                  <div class="service-perk-item">
                    <svg class="perk-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>${p}</span>
                  </div>
                `).join("")}
              </div>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
              <button class="btn btn-secondary btn-sm btn-service-save" data-save-id="${service.id}" style="padding: 8px 12px;" title="Bookmark Service">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                </svg>
              </button>
              <button class="btn btn-primary btn-sm btn-request-rfq" data-service-id="${service.id}" style="flex: 1;">
                Request RFQ
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    // Attach category tab clicks
    document.querySelectorAll(".service-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".service-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderServices(btn.getAttribute("data-category"));
      });
    });

    // Attach RFQ buttons
    document.querySelectorAll(".btn-request-rfq").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-service-id");
        openRfqModal(id);
      });
    });

    // Attach bookmark
    document.querySelectorAll(".btn-service-save").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-save-id");
        toggleSaveItem(id, "service");
      });
    });
  }

  function openRfqModal(serviceId) {
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (!service) return;

    const modal = document.getElementById("serviceRequestModal");
    const nameInput = document.getElementById("rfqServiceName");
    const providerInput = document.getElementById("rfqProviderName");

    nameInput.value = service.name;
    providerInput.value = service.provider;
    modal.classList.add("active");
  }

  /* --------------------------------------------------------------------------
     9. BUSINESS INTELLIGENCE CHARTS (Pure HTML5 Canvas)
     -------------------------------------------------------------------------- */
  let activeHorizon = "30d";

  function initDashboardCharts() {
    // Horizon Switcher
    const rangeButtons = document.querySelectorAll("#dashboardRangeSelector .range-tab-btn");
    rangeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        rangeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeHorizon = btn.getAttribute("data-range");
        document.getElementById("chartHorizonBadge").textContent = `${activeHorizon.toUpperCase()} HORIZON`;
        updateKpisForHorizon(activeHorizon);
        redrawCharts();
        showToast(`Analytics re-indexed for ${activeHorizon.toUpperCase()} horizon.`);
      });
    });

    // Refresh Sync button
    const refreshBtn = document.getElementById("refreshDashboardBtn");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", () => {
        refreshBtn.classList.add("spinning");
        setTimeout(() => {
          refreshBtn.classList.remove("spinning");
          redrawCharts();
          showToast("Real-time telemetry synchronized with all 142 enterprise regional nodes.");
        }, 600);
      });
    }

    drawAreaChart();
    drawDonutChart();
    window.addEventListener("resize", redrawCharts);
  }

  function updateKpisForHorizon(range) {
    const kpi1 = document.getElementById("kpiValBusinesses");
    const kpi2 = document.getElementById("kpiValOpportunities");
    const kpi3 = document.getElementById("kpiValPartners");
    const kpi4 = document.getElementById("kpiValGrowth");

    if (range === "7d") {
      if (kpi1) kpi1.textContent = "18,210";
      if (kpi2) kpi2.textContent = "$58.4M";
      if (kpi3) kpi3.textContent = "1,265";
      if (kpi4) kpi4.textContent = "$11.4B";
    } else if (range === "30d") {
      if (kpi1) kpi1.textContent = "18,420";
      if (kpi2) kpi2.textContent = "$240.8M";
      if (kpi3) kpi3.textContent = "1,280";
      if (kpi4) kpi4.textContent = "$48.2B";
    } else if (range === "90d") {
      if (kpi1) kpi1.textContent = "17,800";
      if (kpi2) kpi2.textContent = "$680.5M";
      if (kpi3) kpi3.textContent = "1,210";
      if (kpi4) kpi4.textContent = "$138.6B";
    } else if (range === "1y") {
      if (kpi1) kpi1.textContent = "15,400";
      if (kpi2) kpi2.textContent = "$2.14B";
      if (kpi3) kpi3.textContent = "980";
      if (kpi4) kpi4.textContent = "$420.0B";
    }
  }

  function redrawCharts() {
    drawAreaChart();
    drawDonutChart();
  }

  function drawAreaChart() {
    const canvas = document.getElementById("growthAreaChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Dynamic data sets based on horizon
    let points = [32, 45, 41, 58, 62, 75, 82, 98, 92, 114, 128, 142];
    let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (activeHorizon === "7d") {
      points = [98, 104, 110, 108, 122, 135, 142];
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    } else if (activeHorizon === "30d") {
      points = [62, 68, 74, 82, 89, 95, 108, 115, 124, 132, 138, 142];
      labels = ["D1", "D3", "D6", "D9", "D12", "D15", "D18", "D21", "D24", "D27", "D29", "D30"];
    }

    const padding = { top: 30, right: 20, bottom: 40, left: 40 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const maxVal = Math.max(...points) * 1.15;
    const minVal = 0;

    // Draw horizontal guidelines
    ctx.strokeStyle = currentTheme === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = currentTheme === "dark" ? "#64748b" : "#94a3b8";
      ctx.font = "10px sans-serif";
      const val = Math.round(maxVal - (maxVal / 4) * i);
      ctx.fillText(`$${val}M`, 4, y + 3);
    }

    // Map coordinates
    const coords = points.map((p, index) => {
      const x = padding.left + (chartW / (points.length - 1)) * index;
      const y = padding.top + chartH - ((p - minVal) / (maxVal - minVal)) * chartH;
      return { x, y, val: p, label: labels[index] };
    });

    // Fill Gradient Area
    const grad = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    grad.addColorStop(0, "rgba(0, 229, 255, 0.35)");
    grad.addColorStop(1, "rgba(0, 229, 255, 0.00)");

    ctx.beginPath();
    ctx.moveTo(coords[0].x, height - padding.bottom);
    ctx.lineTo(coords[0].x, coords[0].y);

    for (let i = 1; i < coords.length; i++) {
      const xc = (coords[i].x + coords[i - 1].x) / 2;
      const yc = (coords[i].y + coords[i - 1].y) / 2;
      ctx.quadraticCurveTo(coords[i - 1].x, coords[i - 1].y, xc, yc);
    }
    ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
    ctx.lineTo(coords[coords.length - 1].x, height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Draw Smooth Line
    ctx.beginPath();
    ctx.moveTo(coords[0].x, coords[0].y);
    for (let i = 1; i < coords.length; i++) {
      const xc = (coords[i].x + coords[i - 1].x) / 2;
      const yc = (coords[i].y + coords[i - 1].y) / 2;
      ctx.quadraticCurveTo(coords[i - 1].x, coords[i - 1].y, xc, yc);
    }
    ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
    ctx.strokeStyle = "#00e5ff";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw Nodes & X-labels
    coords.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#050b14";
      ctx.fill();
      ctx.strokeStyle = "#00e5ff";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = currentTheme === "dark" ? "#94a3b8" : "#475569";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(c.label, c.x, height - padding.bottom + 18);
    });
  }

  function drawDonutChart() {
    const canvas = document.getElementById("industryDonutChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const segments = [
      { name: "FinTech & Banking", share: 0.32, color: "#00e5ff" },
      { name: "AI & Cloud Systems", share: 0.28, color: "#00b4d8" },
      { name: "Logistics & Ports", share: 0.18, color: "#0077b6" },
      { name: "Energy & CleanTech", share: 0.14, color: "#10b981" },
      { name: "Legal & Healthcare", share: 0.08, color: "#f59e0b" }
    ];

    const centerX = width * 0.38;
    const centerY = height * 0.5;
    const outerRadius = Math.min(centerX, centerY) * 0.85;
    const innerRadius = outerRadius * 0.58;

    let startAngle = -Math.PI / 2;

    segments.forEach(seg => {
      const sliceAngle = seg.share * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, startAngle + sliceAngle);
      ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();
      startAngle += sliceAngle;
    });

    // Center Hub Text
    ctx.fillStyle = currentTheme === "dark" ? "#ffffff" : "#0a1526";
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("100%", centerX, centerY - 8);
    ctx.font = "10px sans-serif";
    ctx.fillStyle = currentTheme === "dark" ? "#64748b" : "#94a3b8";
    ctx.fillText("CAPITAL SHARE", centerX, centerY + 10);

    // Draw Legend
    const legendX = width * 0.68;
    let legendY = height * 0.22;

    segments.forEach(seg => {
      ctx.beginPath();
      ctx.arc(legendX, legendY, 5, 0, Math.PI * 2);
      ctx.fillStyle = seg.color;
      ctx.fill();

      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillStyle = currentTheme === "dark" ? "#f0f6fc" : "#0a1526";
      ctx.font = "11px sans-serif";
      ctx.fillText(seg.name, legendX + 12, legendY);

      ctx.fillStyle = currentTheme === "dark" ? "#64748b" : "#94a3b8";
      ctx.fillText(`${Math.round(seg.share * 100)}%`, legendX + 12, legendY + 14);

      legendY += 34;
    });
  }

  /* --------------------------------------------------------------------------
     10. OPPORTUNITIES CONTROLLER
     -------------------------------------------------------------------------- */
  function renderOpportunities(type = "All") {
    const container = document.getElementById("opportunitiesContainer");
    if (!container) return;

    let filtered = OPPORTUNITIES_DATA;
    if (type !== "All") {
      filtered = OPPORTUNITIES_DATA.filter(o => o.type === type);
    }

    container.innerHTML = filtered
      .map(opp => {
        return `
          <div class="opportunity-card" data-opp-id="${opp.id}">
            <div>
              <div class="opp-badge-row">
                <span class="opp-status-badge ${opp.statusClass}">${opp.status}</span>
                <span style="font-size: 0.78125rem; color: var(--text-muted);">Deadline: ${opp.deadline}</span>
              </div>

              <h3 class="opp-title">${opp.title}</h3>
              <div class="opp-company">${opp.company} • ${opp.location}</div>
              <p class="opp-desc">${opp.description}</p>

              <div class="opp-details-grid">
                <div>
                  <div class="opp-detail-label">Deal / Pool Size</div>
                  <div class="opp-detail-val" style="color: var(--brand-cyan);">${opp.dealSize}</div>
                </div>
                <div>
                  <div class="opp-detail-label">Structure</div>
                  <div class="opp-detail-val">${opp.type}</div>
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 20px;">
              <button class="btn btn-secondary btn-sm btn-save-opp" data-save-id="${opp.id}" style="padding: 8px 12px;" title="Save Deal">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                </svg>
              </button>
              <button class="btn btn-primary btn-sm btn-apply-opp" data-opp-id="${opp.id}" style="flex: 1;">
                Apply / Review Term Sheet
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    // Category Tabs
    document.querySelectorAll("#opportunityCategoryTabs .service-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#opportunityCategoryTabs .service-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderOpportunities(btn.getAttribute("data-type"));
      });
    });

    // Apply Opportunity Action
    document.querySelectorAll(".btn-apply-opp").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-opp-id");
        const opp = OPPORTUNITIES_DATA.find(o => o.id === id);
        if (opp) {
          showToast(`Application submitted for: "${opp.title}". Institutional NDA dispatched.`);
          // Add notification
          addNotification(`Applied to Deal: ${opp.title}`, "Your institutional expression of interest was recorded.");
        }
      });
    });

    // Save Opportunity Action
    document.querySelectorAll(".btn-save-opp").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-save-id");
        toggleSaveItem(id, "opportunity");
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. PROFESSIONAL NETWORK CONTROLLER
     -------------------------------------------------------------------------- */
  function renderProfessionals() {
    const container = document.getElementById("professionalsContainer");
    if (!container) return;

    container.innerHTML = PROFESSIONALS_DATA.map(pro => {
      const initials = pro.name.split(" ").map(n => n[0]).join("");
      return `
        <div class="pro-card" data-pro-id="${pro.id}">
          <div class="pro-avatar">${initials}</div>
          <h3 class="pro-name">${pro.name}</h3>
          <div class="pro-role">${pro.role}</div>
          <div class="pro-location">${pro.company} • ${pro.location}</div>

          <div class="pro-skills-wrap">
            ${pro.skills.map(s => `<span class="pro-skill-chip">${s}</span>`).join("")}
          </div>

          <div class="pro-actions-row">
            <button class="btn ${pro.connected ? "btn-secondary" : "btn-primary"} btn-sm btn-connect-pro" data-pro-id="${pro.id}" style="flex: 1;">
              ${pro.connected ? "Connected ✓" : "Connect"}
            </button>
            <button class="btn btn-outline btn-sm btn-msg-pro" data-pro-name="${pro.name}" data-pro-avatar="${initials}">
              Message
            </button>
          </div>
        </div>
      `;
    }).join("");

    // Attach Connect buttons
    document.querySelectorAll(".btn-connect-pro").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-pro-id");
        const pro = PROFESSIONALS_DATA.find(p => p.id === id);
        if (pro) {
          pro.connected = !pro.connected;
          btn.textContent = pro.connected ? "Connected ✓" : "Connect";
          btn.className = `btn ${pro.connected ? "btn-secondary" : "btn-primary"} btn-sm btn-connect-pro`;
          showToast(pro.connected ? `Connected with ${pro.name}.` : `Connection removed with ${pro.name}.`);
        }
      });
    });

    // Attach Direct Message buttons
    document.querySelectorAll(".btn-msg-pro").forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-pro-name");
        const avatar = btn.getAttribute("data-pro-avatar");
        openMessenger(name, avatar);
      });
    });
  }

  /* --------------------------------------------------------------------------
     12. BUSINESS INSIGHTS & ARTICLES CONTROLLER
     -------------------------------------------------------------------------- */
  function renderInsights() {
    const container = document.getElementById("insightsContainer");
    if (!container) return;

    container.innerHTML = INSIGHTS_DATA.map(art => {
      return `
        <div class="article-card" data-art-id="${art.id}">
          <div class="article-banner">
            <svg class="article-banner-icon" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
              <path d="M6 6h10M6 10h10"/>
            </svg>
          </div>

          <div class="article-body">
            <div>
              <div class="article-meta-top">
                <span class="hero-pill-badge" style="font-size: 0.65rem;">${art.category}</span>
                <span>${art.date} • ${art.readTime}</span>
              </div>

              <h3 class="article-title">${art.title}</h3>
              <p class="article-excerpt">${art.excerpt}</p>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 18px;">
              <button class="btn btn-secondary btn-sm btn-save-art" data-save-id="${art.id}" style="padding: 8px 12px;" title="Bookmark Article">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                </svg>
              </button>
              <button class="btn btn-outline btn-sm btn-read-art" data-art-id="${art.id}" style="flex: 1;">
                Read Strategic Brief
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Read Article
    document.querySelectorAll(".btn-read-art").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-art-id");
        openArticleModal(id);
      });
    });

    // Save Article
    document.querySelectorAll(".btn-save-art").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-save-id");
        toggleSaveItem(id, "article");
      });
    });
  }

  function openArticleModal(articleId) {
    const article = INSIGHTS_DATA.find(a => a.id === articleId);
    if (!article) return;

    const modal = document.getElementById("articleModal");
    const categoryBadge = document.getElementById("articleModalCategory");
    const contentBox = document.getElementById("articleModalContent");

    categoryBadge.textContent = article.category.toUpperCase();
    contentBox.innerHTML = `
      <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 12px; line-height: 1.3;">${article.title}</h2>
      <div style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-subtle);">
        Published: ${article.date} • ${article.readTime} • Global Intelligence Desk
      </div>
      <div style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.8; white-space: pre-line;">
        ${article.content}
      </div>
    `;

    document.getElementById("articleBookmarkBtn").onclick = () => {
      toggleSaveItem(article.id, "article");
    };

    modal.classList.add("active");
  }

  /* --------------------------------------------------------------------------
     13. APPOINTMENT BOOKING SYSTEM CONTROLLER
     -------------------------------------------------------------------------- */
  function initAppointments() {
    const form = document.getElementById("appointmentBookingForm");
    if (!form) return;

    // Set minimum date to tomorrow
    const dateInput = document.getElementById("bookingDateInput");
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.min = tomorrow.toISOString().split("T")[0];
      dateInput.value = tomorrow.toISOString().split("T")[0];
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const company = document.getElementById("bookingCompanySelect").value;
      const date = document.getElementById("bookingDateInput").value;
      const time = document.getElementById("bookingTimeSelect").value;
      const type = document.getElementById("bookingMeetingType").value;
      const notes = document.getElementById("bookingNotesInput").value;

      const newMeeting = {
        id: "meet-" + Date.now(),
        company,
        date,
        time,
        type,
        notes
      };

      scheduledMeetings.unshift(newMeeting);
      Storage.set("scheduled_meetings", scheduledMeetings);
      renderMeetingsList();

      showToast(`Appointment confirmed with ${company} on ${date}!`);
      addNotification("Meeting Confirmed", `Executive consultation booked with ${company} for ${date} at ${time}.`);

      form.reset();
      if (dateInput) dateInput.value = tomorrow.toISOString().split("T")[0];
    });

    renderMeetingsList();
  }

  function renderMeetingsList() {
    const list = document.getElementById("scheduledMeetingsList");
    const badge = document.getElementById("bookedCountBadge");
    if (!list) return;

    if (badge) badge.textContent = `${scheduledMeetings.length} CONFIRMED`;

    if (scheduledMeetings.length === 0) {
      list.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No upcoming appointments. Reserve an executive briefing using the form.
        </div>
      `;
      return;
    }

    list.innerHTML = scheduledMeetings.map(m => {
      return `
        <div class="meeting-item" data-meet-id="${m.id}">
          <div>
            <div style="font-weight: 700; font-size: 0.9375rem; color: var(--text-primary);">${m.company}</div>
            <div style="font-size: 0.78125rem; color: var(--brand-cyan); margin-top: 2px;">${m.date} • ${m.time}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Format: ${m.type}</div>
          </div>
          <button class="btn btn-ghost btn-sm btn-cancel-meeting" data-meet-id="${m.id}" style="color: var(--color-danger); font-size: 0.78125rem;">
            Cancel
          </button>
        </div>
      `;
    }).join("");

    document.querySelectorAll(".btn-cancel-meeting").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-meet-id");
        scheduledMeetings = scheduledMeetings.filter(m => m.id !== id);
        Storage.set("scheduled_meetings", scheduledMeetings);
        renderMeetingsList();
        showToast("Appointment canceled.");
      });
    });
  }

  /* --------------------------------------------------------------------------
     14. ENTERPRISE CONTACT SYSTEM & FORM VALIDATION
     -------------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("enterpriseContactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contactFullName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const company = document.getElementById("contactCompany").value.trim();
      const subject = document.getElementById("contactSubject").value;
      const message = document.getElementById("contactMessage").value.trim();

      if (!name || !email || !company || !message) {
        showToast("Please fill in all mandatory inquiry fields.", "warning");
        return;
      }

      // Email regex check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showToast("Please provide a valid corporate email address.", "warning");
        return;
      }

      showToast(`Thank you, ${name}! Your inquiry for "${subject}" has been routed to our managing partners.`);
      addNotification("Corporate Inquiry Received", `We received your inquiry regarding ${company}. A partner is assigned.`);

      form.reset();
    });
  }

  /* --------------------------------------------------------------------------
     15. SAVED ITEMS (BOOKMARKS) CONTROLLER
     -------------------------------------------------------------------------- */
  function toggleSaveItem(id, type) {
    const index = savedItems.findIndex(item => item.id === id);
    if (index > -1) {
      savedItems.splice(index, 1);
      showToast("Item removed from Saved Bookmarks.");
    } else {
      let title = "Saved Item";
      let meta = "";

      if (type === "company") {
        const comp = COMPANIES_DATA.find(c => c.id === id);
        if (comp) { title = comp.name; meta = `${comp.industry} • ${comp.location}`; }
      } else if (type === "service") {
        const srv = SERVICES_DATA.find(s => s.id === id);
        if (srv) { title = srv.name; meta = `${srv.provider} • ${srv.price}`; }
      } else if (type === "opportunity") {
        const opp = OPPORTUNITIES_DATA.find(o => o.id === id);
        if (opp) { title = opp.title; meta = `${opp.company} • ${opp.dealSize}`; }
      } else if (type === "article") {
        const art = INSIGHTS_DATA.find(a => a.id === id);
        if (art) { title = art.title; meta = `${art.category} • ${art.date}`; }
      }

      savedItems.push({ id, type, title, meta, date: new Date().toLocaleDateString() });
      showToast("Item bookmarked into your Saved Portfolio!");
    }

    Storage.set("saved_items", savedItems);
    updateSavedCountBadge();
    renderDirectory();
    renderSavedItemsDrawer();
  }

  function updateSavedCountBadge() {
    const badge = document.getElementById("savedCountBadge");
    if (badge) badge.textContent = savedItems.length;
  }

  function renderSavedItemsDrawer() {
    const container = document.getElementById("savedItemsListContainer");
    if (!container) return;

    if (savedItems.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 12px auto;">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
          </svg>
          <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">No Saved Items Yet</div>
          <p style="font-size: 0.8125rem;">Bookmark companies, services, deals, or articles across the hub to quickly access them here.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = savedItems.map(item => {
      return `
        <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <span class="hero-pill-badge" style="font-size: 0.6rem;">${item.type.toUpperCase()}</span>
            <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-primary); margin-top: 4px;">${item.title}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">${item.meta}</div>
          </div>
          <button class="modal-close-btn btn-remove-saved" data-id="${item.id}" title="Remove">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      `;
    }).join("");

    document.querySelectorAll(".btn-remove-saved").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        toggleSaveItem(id, "item");
      });
    });
  }

  /* --------------------------------------------------------------------------
     16. NOTIFICATIONS DRAWER CONTROLLER
     -------------------------------------------------------------------------- */
  function addNotification(title, desc) {
    const newNotif = {
      id: "notif-" + Date.now(),
      title,
      desc,
      time: "Just now",
      read: false
    };
    notifications.unshift(newNotif);
    Storage.set("notifications", notifications);
    renderNotifications();
  }

  function renderNotifications() {
    const container = document.getElementById("notificationsListContainer");
    const countBadge = document.getElementById("notificationsCountBadge");
    if (!container) return;

    const unreadCount = notifications.filter(n => !n.read).length;
    if (countBadge) {
      countBadge.textContent = unreadCount;
      countBadge.style.display = unreadCount > 0 ? "flex" : "none";
    }

    if (notifications.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-muted);">No new notifications.</div>`;
      return;
    }

    container.innerHTML = notifications.map(n => {
      return `
        <div style="background: ${n.read ? "var(--bg-tertiary)" : "rgba(0, 229, 255, 0.08)"}; border: 1px solid ${n.read ? "var(--border-subtle)" : "var(--cyan-border)"}; padding: 14px; border-radius: var(--radius-md); margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span style="font-weight: 700; font-size: 0.875rem; color: var(--text-primary);">${n.title}</span>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${n.time}</span>
          </div>
          <p style="font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.4;">${n.desc}</p>
        </div>
      `;
    }).join("");
  }

  /* --------------------------------------------------------------------------
     17. BUSINESS MESSENGER DRAWER & SIMULATED CHAT
     -------------------------------------------------------------------------- */
  function openMessenger(targetName = "Tariq Latif", targetAvatar = "TL") {
    const drawer = document.getElementById("messengerDrawer");
    const backdrop = document.getElementById("messengerDrawerBackdrop");
    const nameEl = document.getElementById("chatActiveName");
    const avatarEl = document.getElementById("chatActiveAvatar");

    if (nameEl) nameEl.textContent = targetName;
    if (avatarEl) avatarEl.textContent = targetAvatar;

    drawer.classList.add("active");
    backdrop.classList.add("active");
    renderChatMessages();
  }

  function renderChatMessages() {
    const area = document.getElementById("chatMessagesArea");
    if (!area) return;

    area.innerHTML = chatMessages.map(msg => {
      return `
        <div class="chat-bubble ${msg.from === "me" ? "bubble-out" : "bubble-in"}">
          <div>${msg.text}</div>
          <div style="font-size: 0.65rem; opacity: 0.7; margin-top: 4px; text-align: right;">${msg.time}</div>
        </div>
      `;
    }).join("");

    area.scrollTop = area.scrollHeight;
  }

  function initMessenger() {
    const form = document.getElementById("chatForm");
    const input = document.getElementById("chatInputBox");
    if (!form || !input) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      chatMessages.push({ from: "me", text, time: timeStr });
      input.value = "";
      renderChatMessages();
      Storage.set("chat_messages", chatMessages);

      // Intelligent simulated partner reply
      setTimeout(() => {
        const smartReplies = [
          "Acknowledged. We are reviewing our bilateral SLA requirements.",
          "Confirmed. I am loop-connecting our chief technical architect.",
          "Excellent progress. Let us formalize the NDA before Friday's executive sync.",
          "Our managing committee has authorized the procurement term sheet."
        ];
        const randomReply = smartReplies[Math.floor(Math.random() * smartReplies.length)];
        const replyTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        chatMessages.push({ from: "them", text: randomReply, time: replyTime });
        renderChatMessages();
        Storage.set("chat_messages", chatMessages);
        showToast("New message received in Business Messenger.");
      }, 1200);
    });
  }

  /* --------------------------------------------------------------------------
     18. GLOBAL SEARCH SPOTLIGHT (Ctrl + K)
     -------------------------------------------------------------------------- */
  function initGlobalSearch() {
    const modal = document.getElementById("searchModal");
    const input = document.getElementById("globalSpotlightInput");
    const triggerBtn = document.getElementById("searchTriggerBtn");
    const closeBtn = document.getElementById("closeSearchModalBtn");
    const resultsContainer = document.getElementById("searchResultsContainer");
    const filterPills = document.querySelectorAll(".search-categories-bar .category-chip");

    let currentFilter = "all";

    function openSearch() {
      modal.classList.add("active");
      input.focus();
      renderSearchResults(input.value);
    }

    function closeSearch() {
      modal.classList.remove("active");
    }

    triggerBtn?.addEventListener("click", openSearch);
    closeBtn?.addEventListener("click", closeSearch);
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) closeSearch();
    });

    // Keyboard shortcut Ctrl + K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape") {
        closeSearch();
        closeAllModals();
      }
    });

    filterPills.forEach(pill => {
      pill.addEventListener("click", () => {
        filterPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        currentFilter = pill.getAttribute("data-search-filter");
        renderSearchResults(input.value);
      });
    });

    input?.addEventListener("input", () => {
      renderSearchResults(input.value);
    });

    function renderSearchResults(query) {
      query = query.toLowerCase().trim();
      let results = [];

      // Companies
      if (currentFilter === "all" || currentFilter === "companies") {
        COMPANIES_DATA.forEach(c => {
          if (!query || c.name.toLowerCase().includes(query) || c.industry.toLowerCase().includes(query)) {
            results.push({ type: "Company", title: c.name, meta: `${c.industry} • ${c.location}`, id: c.id, category: "company" });
          }
        });
      }

      // Services
      if (currentFilter === "all" || currentFilter === "services") {
        SERVICES_DATA.forEach(s => {
          if (!query || s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query)) {
            results.push({ type: "Service", title: s.name, meta: `${s.provider} • ${s.price}`, id: s.id, category: "service" });
          }
        });
      }

      // Opportunities
      if (currentFilter === "all" || currentFilter === "opportunities") {
        OPPORTUNITIES_DATA.forEach(o => {
          if (!query || o.title.toLowerCase().includes(query) || o.type.toLowerCase().includes(query)) {
            results.push({ type: "Deal", title: o.title, meta: `${o.company} • ${o.dealSize}`, id: o.id, category: "opportunity" });
          }
        });
      }

      // Articles
      if (currentFilter === "all" || currentFilter === "insights") {
        INSIGHTS_DATA.forEach(a => {
          if (!query || a.title.toLowerCase().includes(query)) {
            results.push({ type: "Insight", title: a.title, meta: `${a.category} • ${a.date}`, id: a.id, category: "article" });
          }
        });
      }

      // Leaders
      if (currentFilter === "all" || currentFilter === "professionals") {
        PROFESSIONALS_DATA.forEach(p => {
          if (!query || p.name.toLowerCase().includes(query) || p.company.toLowerCase().includes(query)) {
            results.push({ type: "Leader", title: p.name, meta: `${p.role} • ${p.company}`, id: p.id, category: "leader" });
          }
        });
      }

      if (results.length === 0) {
        resultsContainer.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
            No matching resources found for "${query}". Try another corporate term.
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = results.slice(0, 10).map(r => {
        return `
          <div class="search-result-item" data-res-id="${r.id}" data-res-cat="${r.category}">
            <div class="result-item-left">
              <span class="result-type-tag">${r.type}</span>
              <div>
                <div class="result-item-name">${r.title}</div>
                <div class="result-item-meta">${r.meta}</div>
              </div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        `;
      }).join("");

      // Result click handles
      resultsContainer.querySelectorAll(".search-result-item").forEach(item => {
        item.addEventListener("click", () => {
          const id = item.getAttribute("data-res-id");
          const cat = item.getAttribute("data-res-cat");
          closeSearch();

          if (cat === "company") openCompanyModal(id);
          else if (cat === "service") openRfqModal(id);
          else if (cat === "article") openArticleModal(id);
          else if (cat === "leader") openMessenger();
          else if (cat === "opportunity") {
            document.getElementById("opportunities")?.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }
  }

  /* --------------------------------------------------------------------------
     19. DEMO AUTHENTICATION & USER PROFILE MODAL
     -------------------------------------------------------------------------- */
  function openAuthModal(initialTab = "signin") {
    const modal = document.getElementById("authModal");
    const body = document.getElementById("authModalBody");
    const tabSignIn = document.getElementById("tabSignIn");
    const tabSignUp = document.getElementById("tabSignUp");
    const tabEditProfile = document.getElementById("tabEditProfile");

    function renderTab(tab) {
      tabSignIn.classList.toggle("active", tab === "signin");
      tabSignUp.classList.toggle("active", tab === "signup");
      tabEditProfile.classList.toggle("active", tab === "profile");

      if (tab === "signin") {
        body.innerHTML = `
          <form id="signInForm">
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Corporate Email</label>
              <input type="email" id="authEmail" class="form-control" value="${userProfile.email}" required>
            </div>
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label">Password</label>
              <input type="password" id="authPassword" class="form-control" value="••••••••••••" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
              Sign In to Global Hub
            </button>
          </form>
        `;
        document.getElementById("signInForm").addEventListener("submit", (e) => {
          e.preventDefault();
          showToast(`Signed in successfully as ${userProfile.name}!`);
          modal.classList.remove("active");
        });
      } else if (tab === "signup") {
        body.innerHTML = `
          <form id="signUpForm">
            <div class="form-group" style="margin-bottom: 12px;">
              <label class="form-label">Full Name</label>
              <input type="text" id="regName" class="form-control" placeholder="e.g. Asfand Yar" required>
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label class="form-label">Corporate Email</label>
              <input type="email" id="regEmail" class="form-control" placeholder="asfand@company.com" required>
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label class="form-label">Organization Name</label>
              <input type="text" id="regCompany" class="form-control" placeholder="Apex Holdings" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
              Create Verified Account
            </button>
          </form>
        `;
        document.getElementById("signUpForm").addEventListener("submit", (e) => {
          e.preventDefault();
          const name = document.getElementById("regName").value;
          const email = document.getElementById("regEmail").value;
          const company = document.getElementById("regCompany").value;
          userProfile.name = name;
          userProfile.email = email;
          userProfile.company = company;
          Storage.set("user_profile", userProfile);
          updateHeaderProfile();
          showToast(`Account created for ${name}!`);
          modal.classList.remove("active");
        });
      } else if (tab === "profile") {
        body.innerHTML = `
          <form id="profileEditForm">
            <div class="form-row" style="margin-bottom: 12px;">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" id="profName" class="form-control" value="${userProfile.name}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Executive Role</label>
                <input type="text" id="profRole" class="form-control" value="${userProfile.role}" required>
              </div>
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label class="form-label">Company / Organization</label>
              <input type="text" id="profCompany" class="form-control" value="${userProfile.company}" required>
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label class="form-label">Executive Bio</label>
              <textarea id="profBio" class="form-control" rows="2" required>${userProfile.bio}</textarea>
            </div>
            <div class="form-group" style="margin-bottom: 16px;">
              <label class="form-label">Strategic Skills (comma-separated)</label>
              <input type="text" id="profSkills" class="form-control" value="${userProfile.skills}" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">
              Save Profile Changes
            </button>
          </form>
        `;
        document.getElementById("profileEditForm").addEventListener("submit", (e) => {
          e.preventDefault();
          userProfile.name = document.getElementById("profName").value;
          userProfile.role = document.getElementById("profRole").value;
          userProfile.company = document.getElementById("profCompany").value;
          userProfile.bio = document.getElementById("profBio").value;
          userProfile.skills = document.getElementById("profSkills").value;
          Storage.set("user_profile", userProfile);
          updateHeaderProfile();
          showToast("Executive profile updated and saved to local cache.");
          modal.classList.remove("active");
        });
      }
    }

    tabSignIn.onclick = () => renderTab("signin");
    tabSignUp.onclick = () => renderTab("signup");
    tabEditProfile.onclick = () => renderTab("profile");

    renderTab(initialTab);
    modal.classList.add("active");
  }

  function closeAllModals() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
    document.querySelectorAll(".side-drawer").forEach(d => d.classList.remove("active"));
    document.querySelectorAll(".side-drawer-backdrop").forEach(b => b.classList.remove("active"));
  }

  function initGlobalModalListeners() {
    // Close buttons
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", closeAllModals);
    });

    // Backdrop clicks
    document.querySelectorAll(".modal-backdrop").forEach(b => {
      b.addEventListener("click", (e) => {
        if (e.target === b) closeAllModals();
      });
    });

    document.querySelectorAll(".side-drawer-backdrop").forEach(b => {
      b.addEventListener("click", closeAllModals);
    });

    // Drawer Triggers
    document.getElementById("savedItemsTriggerBtn")?.addEventListener("click", () => {
      document.getElementById("savedItemsDrawer")?.classList.add("active");
      document.getElementById("savedItemsDrawerBackdrop")?.classList.add("active");
      renderSavedItemsDrawer();
    });

    document.getElementById("notificationsTriggerBtn")?.addEventListener("click", () => {
      document.getElementById("notificationsDrawer")?.classList.add("active");
      document.getElementById("notificationsDrawerBackdrop")?.classList.add("active");
      renderNotifications();
    });

    document.getElementById("messengerTriggerBtn")?.addEventListener("click", () => {
      openMessenger();
    });

    document.getElementById("markAllNotificationsReadBtn")?.addEventListener("click", () => {
      notifications.forEach(n => n.read = true);
      Storage.set("notifications", notifications);
      renderNotifications();
      showToast("All notifications marked as read.");
    });

    // Mobile specific auth / book buttons
    document.getElementById("mobileSignInBtn")?.addEventListener("click", () => {
      closeAllModals();
      openAuthModal("signin");
    });
    document.getElementById("mobileBookBtn")?.addEventListener("click", () => {
      closeAllModals();
      document.getElementById("appointments")?.scrollIntoView({ behavior: "smooth" });
    });

    // RFQ form submission
    document.getElementById("serviceRfqForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const srvName = document.getElementById("rfqServiceName").value;
      const provider = document.getElementById("rfqProviderName").value;
      const budget = document.getElementById("rfqBudgetSelect").value;
      document.getElementById("serviceRequestModal")?.classList.remove("active");
      showToast(`RFQ for ${srvName} dispatched to ${provider}!`);
      addNotification("RFQ Submitted", `Your quote request for ${srvName} (${budget}) was submitted.`);
    });
    document.getElementById("cancelRfqBtn")?.addEventListener("click", () => {
      document.getElementById("serviceRequestModal")?.classList.remove("active");
    });

    document.getElementById("articleCloseBtn")?.addEventListener("click", () => {
      document.getElementById("articleModal")?.classList.remove("active");
    });

    // Filter bar direct inputs
    document.getElementById("directorySearchInput")?.addEventListener("input", renderDirectory);
    document.getElementById("industryFilterSelect")?.addEventListener("change", renderDirectory);
    document.getElementById("locationFilterSelect")?.addEventListener("change", renderDirectory);
    document.getElementById("sizeFilterSelect")?.addEventListener("change", renderDirectory);
    document.getElementById("sortDirectorySelect")?.addEventListener("change", renderDirectory);
    document.getElementById("resetFiltersBtn")?.addEventListener("click", resetDirectoryFilters);

    // Hero CTAs
    document.getElementById("heroGetStartedBtn")?.addEventListener("click", () => {
      openAuthModal("signup");
    });
  }

  /* --------------------------------------------------------------------------
     20. INITIALIZATION ENTRY POINT
     -------------------------------------------------------------------------- */
  function init() {
    initTheme();
    initHeaderNavigation();
    initHeroCanvas();
    initWorldMap();
    renderDirectory();
    renderServices();
    initDashboardCharts();
    renderOpportunities();
    renderProfessionals();
    renderInsights();
    initAppointments();
    initContactForm();
    initMessenger();
    initGlobalSearch();
    initGlobalModalListeners();
    updateSavedCountBadge();
    renderNotifications();

    console.log("Global Business Hub engine initialized successfully.");
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
