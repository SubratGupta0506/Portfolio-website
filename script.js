// Animated free-fall effect for 'Subrat Gupta' (no hover animation)
const name = "Subrat Gupta";
const animatedName = document.getElementById('animated-name');

function animateName(name) {
  animatedName.innerHTML = '';
  for (let i = 0; i < name.length; i++) {
    const span = document.createElement('span');
    span.textContent = name[i] === ' ' ? '\u00A0' : name[i];
    span.className = 'letter';
    animatedName.appendChild(span);
  }
  // Animate each letter with a delay (drop-in effect)
  const letters = animatedName.querySelectorAll('.letter');
  letters.forEach((letter, idx) => {
    setTimeout(() => {
      letter.classList.add('from-top');
      setTimeout(() => {
        letter.classList.add('visible');
      }, 100);
    }, 110 * idx);
  });
}

window.onload = () => {
  animateName(name);
};

// Custom animated cursor with coding vibe and different effects for left click, right click, and scroll
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
cursor.innerHTML = `<span class="cursor-icon">&lt;/&gt;</span>`;
document.body.appendChild(cursor);

let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let cursorX = mouseX, cursorY = mouseY;

// Smooth follow effect
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.18;
  cursorY += (mouseY - cursorY) * 0.18;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Left click: pulse and rotate
window.addEventListener('mousedown', e => {
  if (e.button === 0) { // Left click
    cursor.classList.add('pulse');
    cursor.querySelector('.cursor-icon').style.transform = 'scale(1.4) rotate(-20deg)';
    cursor.querySelector('.cursor-icon').textContent = "</>";
    setTimeout(() => {
      cursor.classList.remove('pulse');
      cursor.querySelector('.cursor-icon').style.transform = 'scale(1) rotate(0deg)';
      cursor.querySelector('.cursor-icon').textContent = "</>";
    }, 350);
  }
});

// Right click: flash red and show { }
window.addEventListener('contextmenu', e => {
  e.preventDefault();
  cursor.classList.add('right-click');
  cursor.style.borderColor = '#ff4b4b';
  cursor.style.background = 'rgba(255,75,75,0.18)';
  cursor.querySelector('.cursor-icon').textContent = "{ }";
  cursor.querySelector('.cursor-icon').style.color = '#ff4b4b';
  setTimeout(() => {
    cursor.classList.remove('right-click');
    cursor.style.borderColor = '#5bc0be';
    cursor.style.background = 'rgba(91, 192, 190, 0.12)';
    cursor.querySelector('.cursor-icon').textContent = "</>";
    cursor.querySelector('.cursor-icon').style.color = '#5bc0be';
  }, 400);
});

// Scroll: expand and show spinning gear
window.addEventListener('wheel', e => {
  cursor.classList.add('scrolling');
  cursor.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(0deg)';
  cursor.querySelector('.cursor-icon').textContent = "⚙️";
  cursor.querySelector('.cursor-icon').style.color = '#fff';
  cursor.querySelector('.cursor-icon').style.transition = 'transform 0.4s';
  cursor.querySelector('.cursor-icon').style.transform = 'rotate(360deg)';
  setTimeout(() => {
    cursor.classList.remove('scrolling');
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.querySelector('.cursor-icon').textContent = "</>";
    cursor.querySelector('.cursor-icon').style.color = '#5bc0be';
    cursor.querySelector('.cursor-icon').style.transform = 'rotate(0deg)';
  }, 400);
}); 
// Example project data (customize as needed)
const projectDetails = {
  1: {
    title: "KaamKaro.com",
    image: null, // No image, use logo style
    description: "KaamKaro.com connects freelancers in India with employers using AI-driven tools. It features verified profiles and secure payments for efficient hiring.",
    tech: ["AI", "Web Platform", "Secure Payments"],
    moreInfo: `<strong>Description & Tools Used:</strong><br>KaamKaro.com is an innovative freelancing platform connecting Indian gig workers and freelancers with employers. It offers AI-driven applicant sorting, verified freelancer profiles, aptitude tests, and real-time application tracking. The marketplace allows employers to post jobs while freelancers showcase their skills and portfolios. Strong search features and recommendation algorithms enhance matching accuracy. Escrow accounts ensure secure payments, fostering trust between both parties. The platform is designed for a seamless, efficient hiring experience across smartphones and computers. By promoting flexible employment and skill growth, KaamKaro.com drives India's freelance economy forward.<br><br><em>KaamKaro.com's prototype website was created using 10Web AI Website Builder.</em><br><span style='color:#1976d2;font-weight:600;'>Made by 10Web</span>`
  },
  2: {
    title: "Solar Nexa Project",
    image: null, // No image, use logo style
    description: "Solar Nexa is a company dedicated to building innovative solar trees for generating electricity to charge electric vehicles (EVs).",
    tech: ["Solar Energy", "EV Charging", "Sustainable Design"],
    moreInfo: `<strong>Description & Tools Used:</strong><br>Solar Nexa is a company dedicated to building innovative solar trees for generating electricity to charge electric vehicles (EVs). While the number of EVs is growing rapidly, most current charging stations still rely on carbon-based electricity, which harms the environment. Solar Nexa addresses this critical gap by creating solar-powered charging stations that are cleaner, greener, and more sustainable. Our goal is to provide accessible and fast-charging solutions that minimize the environmental impact. Currently, we are in the design phase of the solar tree models. I am working as the Operations Manager for this project, leading the coordination, planning, and operational activities.`
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      status: "Done",
      image: "path/to/image1.jpg"
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      status: "On Going",
      image: "path/to/image2.jpg"
    }
  ];

  const projectsContainer = document.querySelector('.projects-container');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span class="project-status ${project.status.toLowerCase().replace(' ', '-')}">
          ${project.status}
        </span>
      </div>
    `;
    
    projectsContainer.appendChild(projectCard);
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function() {
    const id = this.getAttribute('data-project');
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');
    const data = projectDetails[id];
    if (data) {
      let content = '';
      if (id === '1' || id === '2') {
        // KaamKaro.com or Solar Nexa: logo style heading, short desc, More Info button
        content = `
          <div style="display:flex;align-items:center;justify-content:center;font-size:2.1rem;color:#1976d2;font-weight:800;letter-spacing:1px;margin-bottom:1.2rem;">${data.title}</div>
          <div style="margin-bottom:1.2rem;">
            <span style="display:inline-block;background:${id === '1' ? '#4caf50' : '#ffb300'};color:#fff;border-radius:999px;padding:4px 14px;font-size:0.98rem;font-weight:500;">
              ${id === '1' ? 'Done' : 'On Going'}
            </span>
          </div>
          <p style="color:#444;font-size:1.08rem;margin-bottom:1.1rem;">${data.description}</p>
          <div style="margin-bottom:1.1rem;">
            ${data.tech.map(t => `<span style=\"display:inline-block;background:#e3f0ff;color:#1976d2;border-radius:999px;padding:4px 14px;margin:0 6px 6px 0;font-size:0.98rem;font-weight:500;\">${t}</span>`).join('')}
          </div>
          <button id=\"moreInfoBtn\" style=\"display:inline-block;background:#1976d2;color:#fff;border-radius:999px;padding:7px 22px;margin:0 8px 0 0;font-size:1rem;font-weight:600;border:none;cursor:pointer;transition:background 0.2s;\">More Info</button>
          <div id=\"moreInfoContent\" style=\"display:none;margin-top:1.2rem;font-size:1.01rem;color:#333;\"></div>
        `;
      }
      body.innerHTML = content;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // More Info button logic
      if (id === '1' || id === '2') {
        document.getElementById('moreInfoBtn').onclick = function() {
          const moreInfo = document.getElementById('moreInfoContent');
          moreInfo.innerHTML = projectDetails[id].moreInfo;
          moreInfo.style.display = 'block';
          this.style.display = 'none';
        };
      }
    }
  });
});

document.getElementById('modalClose').onclick = closeModal;
document.querySelector('.modal-backdrop').onclick = closeModal;

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}
// JavaScript for Contact Section Animation

document.addEventListener('DOMContentLoaded', function() {
  const contactCard = document.querySelector('.contact-card');
  const contactItems = document.querySelectorAll('.contact-item');
  const icons = document.querySelectorAll('.icon');

  // Smooth fade-in animation when page loads
  contactCard.style.opacity = 0;
  contactCard.style.transform = 'translateY(50px)';
  
  setTimeout(() => {
    contactCard.style.transition = 'all 1s ease';
    contactCard.style.opacity = 1;
    contactCard.style.transform = 'translateY(0)';
  }, 200);

  // Hover animation on contact items
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });

  // Special glow effect when hovering over icons
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.filter = 'drop-shadow(0 0 5px #00c6ff)';
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'all 0.3s ease';
    });

    icon.addEventListener('mouseleave', () => {
      icon.style.filter = 'none';
      icon.style.transform = 'scale(1)';
    });
  });
});