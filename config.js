/**
 * ==========================================
 * PORTFOLIO CONFIGURATION SOURCE OF TRUTH
 * ==========================================
 * Central configuration file for Jason Trevor Simon's portfolio.
 */
const PortfolioConfig = {
  // --- MEDIA DIRECTORY SETTING ---
  // If you uploaded your images/videos to a subfolder on GitHub (e.g. a folder named "images"),
  // change this to "images/". If they are in the root directory alongside index.html, leave it as "".
  mediaFolder: "images/", 

  // --- THEME OPTIONS ---
  theme: {
    accentBlue: "#0072ff",   // Primary accent color (default high-tech blue)
    accentCyan: "#00d2ff",   // Secondary accent color (default glowing cyan)
    particlesCount: 60,       // Number of active nodes in the sensor fusion canvas
    enableParticles: true,    // Toggle the animated node background
  },

  // --- PROFILE & HERO SECTION ---
  profile: {
    name: "Jason Simon",
    // tagline: "Building autonomous systems and AI Hardware. Feel free to reach out!",
    title: "Jason Simon | Building Autonomous Systems and AI Hardware",
    description: "Currently interning at Shield AI working on development of the X-Bat autonomous drone \n Past experience ranges from engineering automation cells at SpaceX to building collaborative lunar mechanisms for NASA \n Interested in artificial intelligence, robotics, aerospace, entrepreneurship, and investing",
    location: "Home: SoCal | School: Philly",
    email: "jasonsimon343@gmail.com",
    linkedin: "https://www.linkedin.com/in/jason-simon3",
    github: "#",
    
    // Academic Credentials (the 3 blocks)
    education: [
      { value: "MS + BSE, Mechanical Engineering", label: "UPenn | May 2027 (pursuing both degrees simultaneously)" },
      { value: "4.0 / 4.0 GPA", label: "Cumulative (MS+BSE)" },
      { value: "Minors", label: "Entrepreneurship & Math" }
    ]
  },

  // --- WORK EXPERIENCE HISTORY ---
  experience: [
    {
      role: "Starlink PCB Production Engineering Intern",
      company: "SpaceX",
      location: "Bastrop, TX",
      period: "May 2025 – August 2025",
      metrics: [
        { value: "$5.5M", label: "Annual Savings" },
        { value: "> 2x", label: "Capacity Increase" },
        { value: "+21%", label: "PCB Panel Yield" }
      ],
      bulletPoints: [
        "Implemented a $600k drill bit resharpening system and designed a $100k automation cell to completely automate the process that can generate $5.5M in annual savings on drill bits",
        "Collaborated with specialists and vendors to place, install, and perform quality tests for new drill room manufacturing equipment that will help more than 2x current PCB panel output capacity",
        "Integrated air knives, cleaning rollers, UV lights, and 3 enclosures throughout the manufacturing line to reduce foreign object debris, helping contribute to a 21% yield increase in 12 weeks"
      ]
    },
    {
      role: "Undergraduate Student Researcher",
      company: "NASA LuSTR (Modular Robotics Lab)",
      location: "Philadelphia, PA",
      period: "Sept 2023 – May 2025",
      metrics: [
        { value: "$2.0M", label: "NASA Grant Scope" },
        { value: "5.0m", label: "Linkage Reach" },
        { value: "10:1", label: "Strength-to-Weight" }
      ],
      bulletPoints: [
        "Worked with $2 million NASA Lunar Surface Technology Research grant to design and test novel lunar technologies to facilitate linkages between robots to safely traverse hazardous terrains and overcome entrapment on moon using SolidWorks, rapid prototyping, and metal machining",
        "Built rigid, extendable arms with a docking mechanism, 5 meter reach, and 10:1 strength-to-weight ratio, allowing robots to apply 200N pushing and 300N pulling forces to each other"
      ]
    },
    {
      role: "Engineering Intern",
      company: "DPA Components International",
      location: "Simi Valley, CA",
      period: "May 2024 – August 2024",
      metrics: [
        { value: "5,000+", label: "Devices Analyzed" },
        { value: "ASME Y14.5", label: "Standard Compliance" }
      ],
      bulletPoints: [
        "Created CAD models and engineering drawings using SolidWorks for custom fixtures to integrate electronic components to test machines, enhancing the efficiency and accuracy of electrical tests",
        "Performed destructive physical analysis and electrical tests on 5,000+ micro electronic devices to determine temperature, shear stress, and gravitational force limits the parts can reliably function"
      ]
    },
    {
      role: "Mechanical Design and Analysis Intern",
      company: "Boeing",
      location: "Huntington Beach, CA",
      period: "June 2022 – August 2022",
      metrics: [
        { value: "Lead", label: "4-Person Design Team" },
        { value: "Europa", label: "Target Mission" }
      ],
      bulletPoints: [
        "Led team of 4 in design of satellite and mission to analyze the geology and chemistry of Europa, Jupiter’s 4th moon, to determine its potential to support life and drive key astrobiology insights",
        "Constructed detailed reports, calculations, and CAD models for spacecraft’s ideal launch vehicle, trajectory, thermal control, budget, timeline, command and data handling, and computer system"
      ]
    }
  ],

  // --- PORTFOLIO PROJECTS LIST ---
  projects: [
    {
      id: "bb8",
      title: "Star Wars BB-8 Droid",
      shortDescription: "A fully functional, radio-controlled BB-8 replica featuring a custom pendulum drive chassis, floating magnetic head tracking, and real-time WiFi telemetry.",
      tech: ["Mechanical Design", "Mechatronics", "ESP32-S2 / C3"],
      category: "robotics",
      media: [
        { type: "image", src: "BB8 image 1.jpeg" },
        { type: "image", src: "BB8 image 2.jpeg" },
        { type: "image", src: "BB8 image 3.jpeg" },
        { type: "video", src: "BB8 video.mov" }
      ],
      modal: {
        badgeAccent: "Mechatronics Highlight",
        location: "Independent Project (Team of 10)",
        period: "April 2026 - May 2026",
        bullets: [
          "Designed and fabricated a fully functional, radio-controlled Star Wars BB-8 replica droid from scratch featuring a 16.125-inch outer diameter hollow body for less than $200",
          "Engineered an active, stabilized floating head mechanism using three high-grade Neodymium magnets and omnidirectional ball bearing casters to counteract physical magnetic forces during rotation",
          "Built a custom internal pendulum drive chassis housing motor mounts, batteries, and controllers that remain vertically stabilized by gravity as the sphere rotates around it",
          "Programmed dual microcontroller logic with an ESP32-S2 for locomotion torque ramps and an ESP32-C3 for wireless live MJPEG video telemetry to an HTML dashboard",
          "Conducted FEA structural analysis on the central aluminum shaft to verify a 18.6 factor of safety and optimized flywheel torque geometry to overcome static friction"
        ]
      }
    },
    {
      id: "meam510",
      title: "MEAM 5100 Autonomous Vehicle",
      shortDescription: "A heavy-duty, autonomous combat robot utilizing Time-of-Flight dynamic avoidance, Vive photodiode bilinear localization transforms, and custom 3-tier PCB towers.",
      tech: ["Autonomous Systems", "Sensor Fusion", "Mechatronics"],
      category: "robotics",
      media: [
        { type: "image", src: "5100 image 1.png" },
        { type: "image", src: "5100 image 2.png" },
        { type: "image", src: "5100 image 1 CAD.png" },
        { type: "image", src: "5100 image 2 CAD.png" }
      ],
      modal: {
        badgeAccent: "3rd Highest Score Overall",
        location: "Meam 5100 Project (Team of 3)",
        period: "April 2026 - May 2026",
        bullets: [
          "Designed, built, and programmed an autonomous combat vehicle to navigate unstructured fields, avoid obstacles, and capture target milestones under zero-latency network restrictions",
          "Soldered a vertical three-tier perfboard PCB tower to route command signals, isolate low-voltage sensor inputs, and prevent high-current motor EMI brownouts",
          "Implemented real-time sensor fusion combining dead-reckoning encoder odometry, VL53L0X Time-of-Flight sensors, and Vive photodiode bilinear localization transforms",
          "Programmed concurrent time-sliced control loops and finite state machine (FSM) logic in C++ on an ESP32-S2 for pathfinding and wall-following subroutines",
          "Secured the 3rd overall tournament seed and achieved 63 out of 66 points in department performance evaluations"
        ]
      }
    },
    {
      id: "sensor4150",
      title: "MEAM 4150 Proximity Sensor Wearable",
      shortDescription: "A wearable running safety belt. Integrates Time-of-Flight sensors and proportional waist haptics to alert runners of approaching vehicle threats.",
      tech: ["Wearable Tech", "ESP32-C3", "Sensors"],
      category: "embedded",
      media: [
        { type: "image", src: "Sensor image 1.jpeg" },
        { type: "image", src: "Sensor image 2.jpeg" },
        { type: "image", src: "Sensor image 3.jpeg" },
        { type: "image", src: "Sensor Image 4.png" }
      ],
      modal: {
        badgeAccent: "Sensors & Haptics",
        location: "MEAM 4150 Project (team of 4)",
        period: "April 2026 - May 2026",
        bullets: [
          "Designed and fabricated a wearable athletic running safety belt to detect rear-approaching vehicles and alert the runner via localized waist haptics",
          "Developed C++ firmware on an ultra-compact ESP32-C3 (M5Stamp Core) to sample long-range Time-of-Flight (TOF4M) distance data independent of lighting conditions",
          "Implemented a moving-average data filter to smooth out vertical running oscillation noise and trigger proportional haptic vibration sequences when a threat enters the 1.5m perimeter",
          "3D-printed a compact, water-resistant enclosure with integrated belt loops, keeping the belt low-profile and eliminating bounce during high-velocity running"
        ]
      }
    },
    {
      id: "turbojet",
      title: "Penn Jet Propulsion Micro Turbojet Engine",
      shortDescription: "A functioning micro turbojet engine designed and machined fully from scratch, achieving sustained stable combustion and 140N of thrust.",
      tech: ["Aerospace", "Propulsion", "CNC Machining"],
      category: "mechanical",
      media: [
        { type: "image", src: "Jet Engine image 1.png" },
        { type: "image", src: "Jet Engine image 2.png" },
        { type: "image", src: "Jet Engine image 3.png" },
        { type: "image", src: "Jet Engine image 4.png" }
      ],
      modal: {
        badgeAccent: "PJP Group Highlight",
        location: "Penn Jet Propulsion Club",
        period: "August 2024 - May 2025",
        bullets: [
          "Part of a team creating the first functioning micro turbojet engine fully developed from scratch by undergraduate students",
          "Engine achieved sustained combustion during testing and has a theoretical thrust of 140N and thrust to weight ratio of 3.5",
          "Designed in SolidWorks and manufactured using a ProtoTrak mill and lathe a new mount to hold the engine securely during future testing",
          "Worked with 2 other students to design the combustion chamber and plan out the overarching integration and interfacing of all the subsystems"
        ]
      }
    },
    {
      id: "stirling",
      title: "Custom Stirling Heat Engine",
      shortDescription: "A high-speed Stirling heat engine featuring custom Deadpool aesthetic geometries and low-friction metal links reaching 1,350+ RPM.",
      tech: ["SolidWorks", "Precision Machining", "Kinematics"],
      category: "mechanical",
      media: [
        { type: "image", src: "Heat Engine image 1.png" },
        { type: "image", src: "Heat Engine image 2.png" },
        { type: "image", src: "Heat Engine image 3.png" }
      ],
      modal: {
        badgeAccent: "Mechanical Design",
        location: "MEAM 2010 Project",
        period: "January 2024 - May 2024",
        bullets: [
          "Designed and fabricated a stirling heat engine with a Deadpool inspired design from scratch using Prototrak mill, lathe, bandsaw, and CNC operations for metal machining",
          "Modeled and assembled all parts in SolidWorks with mates to replicate final engine movements",
          "Created ASME standard engineering drawings to obtain machining approval for all custom parts",
          "Flywheel reached 1350+ RPM during testing"
        ]
      }
    },
    {
      id: "comsol",
      title: "COMSOL Fluid Dynamics Modeling",
      shortDescription: "Computational fluid dynamics simulations mapping 2D and 3D fluid boundary layers to analyze aerodynamic drag coefficients.",
      tech: ["Aerospace", "COMSOL Multiphysics", "Fluid Simulation"],
      category: "mechanical",
      media: [
        { type: "image", src: "COMSOL image 1.png" },
        { type: "image", src: "COMSOL image 2.png" },
        { type: "video", src: "COMSOL video.mov" }
      ],
      modal: {
        badgeAccent: "Aerodynamics & CFD",
        location: "MEAM 2030 Project (Team of 4)",
        period: "November 2025 - December 2025",
        bullets: [
          "Modeled fluid flow over different shapes using COMSOL in both 2D and 3D in order to calculate the drag coefficient of different shapes",
          "Simulation is planned to be used to optimize cars, planes, and more projects for different clubs at Penn in the future"
        ]
      }
    }
  ]
};
