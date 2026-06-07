/* ==========================================
   DYNAMIC MEDIA PLAYER LOGIC
   ========================================== */
window.switchModalMedia = function(projectId, mediaIndex) {
  const project = PortfolioConfig.projects.find(p => p.id === projectId);
  if (!project) return;

  const mediaItem = project.media[mediaIndex];
  const mainViewport = document.getElementById(`media-main-${projectId}`);
  if (!mainViewport) return;

  // Render video or image
  if (mediaItem.type === 'video') {
    mainViewport.innerHTML = `
      <video controls muted autoplay loop style="width: 100%; height: 100%; max-height: 380px; object-fit: contain; border-radius: var(--border-radius-sm);">
        <source src="${mediaItem.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    mainViewport.innerHTML = `
      <img src="${mediaItem.src}" alt="${project.title}" style="width: 100%; height: 100%; max-height: 380px; object-fit: contain; border-radius: var(--border-radius-sm);">
    `;
  }

  // Update active thumbnail state
  const thumbnails = document.querySelectorAll(`#thumbs-${projectId} .modal-thumbnail`);
  thumbnails.forEach((thumb, idx) => {
    if (idx === mediaIndex) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
};

/* ==========================================
   DYNAMIC PAGE RENDERING FROM CONFIG
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Inject theme colors into CSS variables
  if (PortfolioConfig.theme) {
    document.documentElement.style.setProperty('--accent-blue', PortfolioConfig.theme.accentBlue);
    document.documentElement.style.setProperty('--accent-cyan', PortfolioConfig.theme.accentCyan);
  }

  const profile = PortfolioConfig.profile;

  // 1. Populate Hero Content
  document.getElementById('hero-tagline').innerHTML = `<span class="hero-meta-pulse"></span>${profile.tagline}`;
  
  // Format title to color highlight the last words or "Hardware & Autonomous Systems"
  let formattedTitle = profile.title;
  if (profile.title.includes("Systems, Robotics & Aerospace")) {
    formattedTitle = profile.title.replace("Systems, Robotics & Aerospace Portfolio", `Systems, Robotics & <span>Aerospace Portfolio</span>`);
  } else {
    // Fallback: wrap last 2 words
    const words = profile.title.split(" ");
    if (words.length > 2) {
      const lastWords = words.slice(-2).join(" ");
      formattedTitle = words.slice(0, -2).join(" ") + ` <span>${lastWords}</span>`;
    }
  }
  document.getElementById('hero-title').innerHTML = formattedTitle;
  document.getElementById('hero-desc').innerText = profile.description;

  // Render Hero Stats (Education)
  const statsContainer = document.getElementById('hero-stats');
  statsContainer.innerHTML = profile.education.map(edu => `
    <div class="stat-item">
      <div class="stat-val">${edu.value}</div>
      <div class="stat-lbl">${edu.label}</div>
    </div>
  `).join('');

  // Render Hero Contact Strip
  const contactStrip = document.getElementById('hero-contact-strip');
  contactStrip.innerHTML = `
    <div class="hero-contact-item">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <span>${profile.location}</span>
    </div>
    <div class="hero-contact-item">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
      <a href="mailto:${profile.email}">${profile.email}</a>
    </div>
    <div class="hero-contact-item">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.184-4.162-7-7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      <a href="tel:${profile.phone}">${profile.phone}</a>
    </div>
    <div class="hero-contact-item">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
      <a href="${profile.linkedin}" target="_blank" rel="noopener">linkedin.com/in/${profile.linkedin.split('/').pop()}</a>
    </div>
  `;

  // 2. Populate Work Experience Timeline
  const timelineContainer = document.getElementById('experience-timeline');
  timelineContainer.innerHTML = PortfolioConfig.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="glass-panel">
        <div class="timeline-header">
          <div class="role-title">
            ${exp.role}
            <span class="role-company">@ ${exp.company}</span>
          </div>
          <div class="role-duration">${exp.period} | ${exp.location}</div>
        </div>
        
        <div class="timeline-metrics">
          ${exp.metrics.map(met => `
            <div class="metric-pill">
              <span class="metric-val">${met.value}</span>
              <span class="metric-lbl">${met.label}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="timeline-body">
          <ul>
            ${exp.bulletPoints.map(bp => `<li>${bp}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');

  // 3. Populate Projects Grid & Modals Container
  const gridContainer = document.getElementById('projects-grid');
  const modalsContainer = document.getElementById('modals-container');

  gridContainer.innerHTML = '';
  modalsContainer.innerHTML = '';

  PortfolioConfig.projects.forEach(project => {
    // A. Create Project Card HTML
    const card = document.createElement('div');
    card.className = "project-card glass-panel";
    card.setAttribute('onclick', `openModal('modal-${project.id}')`);

    // Get first image as card thumbnail cover
    const firstImage = project.media.find(m => m.type === 'image');
    const imagePath = firstImage ? firstImage.src : '';
    const imageElement = imagePath 
      ? `<img src="${imagePath}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">`
      : `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">Blueprint</div>`;

    card.innerHTML = `
      <div class="project-more">
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </div>
      <div class="project-blueprint">
        ${imageElement}
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDescription}</p>
        <div class="project-tech">
          ${project.tech.map(t => `<span class="badge">${t}</span>`).join('')}
        </div>
      </div>
    `;
    gridContainer.appendChild(card);

    // B. Create Modal HTML
    const dialog = document.createElement('dialog');
    dialog.className = "project-modal";
    dialog.id = `modal-${project.id}`;

    // Generate thumbnails preview list
    const thumbnailsHtml = project.media.map((media, idx) => {
      if (media.type === 'video') {
        return `
          <div class="modal-thumbnail-wrapper" onclick="event.stopPropagation(); switchModalMedia('${project.id}', ${idx});">
            <div class="modal-thumbnail video-thumb">
              <svg fill="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px; color: var(--accent-cyan);"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        `;
      } else {
        return `
          <img class="modal-thumbnail ${idx === 0 ? 'active' : ''}" src="${media.src}" alt="Thumb" onclick="event.stopPropagation(); switchModalMedia('${project.id}', ${idx});">
        `;
      }
    }).join('');

    dialog.innerHTML = `
      <div class="modal-header">
        <div class="modal-header-info">
          <h2 class="modal-title">${project.title}</h2>
          <div class="modal-meta-row">
            <span class="badge badge-accent">${project.modal.badgeAccent}</span>
            <span class="badge">${project.modal.location}</span>
            <span class="badge">${project.modal.period}</span>
          </div>
        </div>
        <button class="modal-close-btn" onclick="closeModal('modal-${project.id}')" aria-label="Close modal">
          <svg stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="modal-content">
        <!-- Media Gallery Component -->
        <div class="modal-section" style="margin-bottom: 25px;">
          <div class="modal-media-main" id="media-main-${project.id}">
            <!-- Initialized with media[0] -->
          </div>
          <div class="modal-media-thumbnails" id="thumbs-${project.id}">
            ${thumbnailsHtml}
          </div>
        </div>

        <!-- Dynamic Bullet Descriptions (matches PDF style) -->
        <div class="modal-section">
          <h4 class="modal-section-title">Project Details</h4>
          <ul class="modal-bullet-list">
            ${project.modal.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    modalsContainer.appendChild(dialog);
    
    // Initialize modal with first media item
    setTimeout(() => {
      switchModalMedia(project.id, 0);
    }, 50);

    // Bind click closing listener on newly added dialog elements
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeModal(dialog.id);
      }
    });

    dialog.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  });

  // 4. Populate Footer Info
  const footerInfoCol = document.getElementById('footer-info-col');
  footerInfoCol.innerHTML = `
    <h3 class="footer-logo">JASON <span>SIMON</span></h3>
    <p class="footer-desc">${profile.description}</p>
    <div class="footer-contact-details">
      <div class="footer-contact-item">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <span>${profile.location}</span>
      </div>
      <div class="footer-contact-item">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <a href="mailto:${profile.email}">${profile.email}</a>
      </div>
      <div class="footer-contact-item">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.184-4.162-7-7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <a href="tel:${profile.phone}">${profile.phone}</a>
      </div>
    </div>
  `;

  // Copyright details
  document.getElementById('footer-copyright').innerHTML = `
    &copy; 2026 ${profile.name}. Built with dynamic Semantic HTML, CSS Grid, and Canvas.
  `;

  // Socials block
  document.getElementById('footer-socials').innerHTML = `
    <a href="${profile.linkedin}" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn Profile">
      <svg viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
    </a>
    <a href="${profile.github}" class="social-btn" aria-label="GitHub Profile">
      <svg viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
    </a>
  `;
});

/* ==========================================
   Hero Canvas: Sensor Fusion Particle System
   ========================================== */
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Mouse coordinates tracker
const mouse = {
  x: null,
  y: null,
  radius: 150
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY + window.scrollY; // adjust for scroll position if page scrolled
});

window.addEventListener('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

// Update dimensions on resize
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Particle Class
class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.6; // slow, smooth drift
    this.vy = (Math.random() - 0.5) * 0.6;
    this.baseRadius = Math.random() * 2 + 1;
    this.radius = this.baseRadius;
    this.color = 'rgba(0, 210, 255, 0.4)';
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    
    // Draw minor technical coordinates labels for a select few particles to look high-tech
    if (this.baseRadius > 2.5 && mouse.x !== null) {
      const dist = Math.hypot(this.x - mouse.x, this.y - mouse.y);
      if (dist < mouse.radius) {
        ctx.font = '7px JetBrains Mono, monospace';
        ctx.fillStyle = 'rgba(0, 210, 255, 0.35)';
        ctx.fillText(`[${Math.round(this.x)},${Math.round(this.y)}]`, this.x + 8, this.y - 4);
      }
    }
  }

  update() {
    // Wall bounce
    if (this.x < 0 || this.x > width) this.vx = -this.vx;
    if (this.y < 0 || this.y > height) this.vy = -this.vy;

    this.x += this.vx;
    this.y += this.vy;

    // Mouse attraction / interaction
    if (mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      
      if (dist < mouse.radius) {
        // Subtle magnetic pull
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 0.8;
        this.y -= Math.sin(angle) * force * 0.8;
        this.radius = this.baseRadius * 1.5;
        this.color = 'rgba(0, 210, 255, 0.85)';
      } else {
        this.radius = this.baseRadius;
        this.color = 'rgba(0, 114, 255, 0.4)';
      }
    }
  }
}

// Instantiate particles
const particleCount = PortfolioConfig.theme && PortfolioConfig.theme.particlesCount 
  ? PortfolioConfig.theme.particlesCount 
  : 75;
const particles = Array.from({ length: particleCount }, () => new Particle());

// Render Loop
function animate() {
  ctx.clearRect(0, 0, width, height);

  if (PortfolioConfig.theme && !PortfolioConfig.theme.enableParticles) return;

  // Draw static technical gridlines in background
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
  ctx.lineWidth = 0.5;
  const gridSize = 80;
  for (let x = 0; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Draw sensor connection paths (network lines)
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.hypot(dx, dy);

      if (dist < 120) {
        const opacity = (120 - dist) / 120 * 0.18;
        ctx.strokeStyle = `rgba(0, 210, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Update and draw particles
  particles.forEach(p => {
    p.update();
    p.draw();
  });

  // Cursor overlay data
  if (mouse.x !== null && mouse.y !== null) {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 210, 255, 0.9)';
    ctx.fill();

    // Dotted radar boundary
    ctx.strokeStyle = 'rgba(0, 210, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Telemetry label next to cursor
    ctx.font = '8px JetBrains Mono, monospace';
    ctx.fillStyle = '#00d2ff';
    ctx.fillText(`FUSION_RAD: 150m | TRACKING [X: ${Math.round(mouse.x)} Y: ${Math.round(mouse.y)}]`, mouse.x + 15, mouse.y + 5);
  }

  requestAnimationFrame(animate);
}

if (PortfolioConfig.theme && PortfolioConfig.theme.enableParticles) {
  animate();
}

/* ==========================================
   Native Dialog Modals Manager
   ========================================== */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.showModal();
    document.body.style.overflow = 'hidden';
    modal.classList.add('open');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    // Stop all playing videos inside the modal when closing
    const videos = modal.querySelectorAll('video');
    videos.forEach(v => v.pause());

    // Allow animation to finish before calling native close
    setTimeout(() => {
      modal.close();
      document.body.style.overflow = '';
    }, 250); // Matches CSS transition duration
  }
}

/* ==========================================
   Navbar Active Link Scroll Spy
   ========================================== */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSec = '';
  const scrollPos = window.scrollY + 100; // offset for nav header height

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSec = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').substring(1) === currentSec) {
      item.classList.add('active');
    }
  });
});
