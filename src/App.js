import { useEffect } from "react";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

// images import
import mainImg from "./assets/main-sec-img.jpeg";
import introImg from "./assets/introimgsec.jpeg";
import s1 from "./assets/Screenshot_1.png";
import s2 from "./assets/Screenshot_2.png";
import s3 from "./assets/Screenshot_3.png";
import resume from "./assets/Resume Balveer Singh Solanki (2) (1).pdf";

function App() {


const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  useEffect(() => {

  // ===== SKILL BAR ANIMATION =====
  const bars = document.querySelectorAll(".new-skill-bar-fill");

  bars.forEach((bar) => {
    const width = bar.getAttribute("data-width");

    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.width = width + "%";
    }, 200);
  });

  // ===== SCROLL REVEAL =====
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => observer.observe(el));

  // ===== PARTICLES =====
  const createParticles = (id, count) => {
    const container = document.getElementById(id);
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = Math.random() * 10 + 8 + "s";
      p.style.animationDelay = Math.random() * 8 + "s";
      p.style.width = p.style.height = Math.random() * 3 + 1 + "px";
      container.appendChild(p);
    }
  };

  createParticles("particles-home", 20);
  createParticles("particles-contact", 15);

  // ===== NAVBAR SCROLL =====
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
      nav.style.borderBottomColor =
        window.scrollY > 50
          ? "rgba(201,147,58,0.3)"
          : "rgba(201,147,58,0.15)";
    }
  });

}, []);

const handleWhatsApp = () => {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    toast.error("Please fill all fields ❌");
    return;
  }

  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  window.open(`https://wa.me/918875150838?text=${text}`, "_blank");

  toast.success("Redirecting to WhatsApp 🚀");
};
  return (
    <>
      {/* Navbar */}
     <nav className="navbar">
        <div className="logo">BALVEER.DEV</div>
        <input type="checkbox" id="menu-toggle" hidden/>
        <label htmlFor="menu-toggle" className="menu-icon"><i className="fas fa-bars"></i></label>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

      {/* Hero */}
       <div id="particles-js">
        <section className="hero">
             <div className="particles" id="particles-home"></div>
            <div className="hero-left">
                <p className="s-label  reveal">WE DESIGN & BUILD BRANDS</p>
                <h1 className="reveal delay-1">Hi, I am <span>Balveer Solanki</span> <br/>I build responsive & modern websites.</h1>
                <div className="buttons reveal delay-2">
                    <a href="#contact" className="btn primary">Hire me</a>
                    <a href={resume} className="btn outline" download>
                        Download CV
                    </a>
                </div>
            </div>
            <div className="hero-right reveal-right delay-2">
                <div className="bg-skew"></div>
                <img src={mainImg} alt="Balveer" />
            </div>
        </section>
    </div>

      {/* About */}
     <section id="about" className="about-section">
        <div className="container">
            <div className="about-grid">
                <div className="about-img reveal-left">
                    <img src={introImg} alt="Profile Picture"/>
                </div>
                <div className="about-content">
                    <h5 className="s-label reveal">MY INTRODUCTION</h5>
                    <h2 className="reveal delay-1">About Me</h2>
                    <p className="reveal delay-2">
                        I'm Balveer Solanki, a frontend developer from Jaipur, Rajasthan.
                        I enjoy building responsive and user-friendly websites.
                        Skilled in HTML, CSS, JavaScript, and React.Js with hands-on project experience.
                        Created a fashion e-commerce site and personal portfolio.
                        I'm passionate about clean UI and mobile-first design.
                        Looking to grow in a tech-driven team and learn more every day.
                    </p>

                    <p className="reveal delay-2"><em>“Design is intelligence made visible. Code brings it to life.”</em></p>


                    <div className="about-details reveal delay-3">
                        <p><strong>Name:</strong> Balveer Solanki</p>
                        <p><strong>Date of birth:</strong> March 06, 2006</p>
                        <p><strong>Address:</strong> Jaipur, Rajasthan, India</p>
                        <p><strong>Zip code:</strong> 302020</p>
                        <p><strong>Email:</strong> balveersolanki0123@gmail.com</p>
                        <p><strong>Phone:</strong> +91-88751-50838</p>
                    </div>
                    <div className="interests reveal delay-4">
                        <span className="conver"><i className="fas fa-music"></i> Music</span>
                        <span className="conver"><i className="fas fa-plane"></i> Travel</span>
                        <span className="conver"><i className="fas fa-film"></i> Movie</span>
                        <span className="conver"><i className="fas fa-futbol"></i> Sports</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

<div id="skills-sec" className="skills-section">
    <section id="skills" className="skills-section">
   
 <div className="s-label reveal">Technical Proficiency</div>

    <div className="skills-inner">
      {/* <!-- Left copy --> */}
      <div className="skills-copy">
        <h2 className="s-heading reveal delay-1">My Skills</h2>
        <p className="reveal delay-2">
          A focused toolkit built through real projects —
          from pixel-perfect layouts to interactive React apps.
          Every percentage reflects honest, hands-on experience.
        </p>
      </div>

      {/* <!-- Right grid --> */}
      <div className="new-skill-grid" id="skillGrid">

        {/* <!-- HTML --> */}
       <div className="new-skill-card reveal delay-1">
          <div className="new-skill-icon">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M106.7 45.7L128 464l128 35.6L384 464l21.3-418.3z" fill="#E54D26"/>
              <path d="M256 480.5l103.5-28.7 18.2-203.8H256z" fill="#EF652A"/>
              <path d="M256 268h-71l-4.9-55h75.9V159h-136l12.9 144H256zM256 386l-.3.1-55.6-15-3.6-40h-55.5l7 78.4 108 29.9.1-.1z" fill="#EBEBEB"/>
              <path d="M256 268v54h66.5l-6.3 70-60.2 16.2v56.2l108.1-30 .8-8.9 12.4-138.7 1.3-14.8zM256 159v54h131.5l1.1-13.1 2.5-27.8 1.3-13.1z" fill="#fff"/>
            </svg>
          </div>
          <span className="new-skill-name">HTML</span>
          <span className="new-skill-pct">95%</span>
          <div className="new-skill-bar"><div className="new-skill-bar-fill" data-width="95"></div></div>
        </div>

        {/* <!-- CSS --> */}
      <div className="new-skill-card reveal delay-2">
          <div className="new-skill-icon">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M106.7 45.7L128 464l128 35.6L384 464l21.3-418.3z" fill="#264DE4"/>
              <path d="M256 480.5l103.5-28.7 18.2-203.8H256z" fill="#2965F1"/>
              <path d="M256 268H185l-5-55h76V159H137l13 144H256zM256 386l-.3.1-55.6-15-3.6-40h-55.5l7 78.4 108 29.9.1-.1z" fill="#EBEBEB"/>
              <path d="M256 268v54h65.6l-6.3 70-59.3 16v56.2l108-30 12.8-146.2zM256 159v54h129.5l2.5-54z" fill="#fff"/>
            </svg>
          </div>
          <span className="new-skill-name">CSS</span>
          <span className="new-skill-pct">92%</span>
          <div className="new-skill-bar"><div className="new-skill-bar-fill" data-width="92"></div></div>
        </div>

        {/* <!-- JavaScript --> */}
        <div className="new-skill-card reveal delay-3">
          <div className="new-skill-icon">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <rect width="512" height="512" rx="50" fill="#F7DF1E"/>
              <path d="M324 370c8 13 19 23 39 23 16 0 27-8 27-19 0-13-11-18-28-25l-10-4c-28-12-47-27-47-58 0-29 22-51 55-51 24 0 41 8 54 30l-30 19c-6-11-13-16-24-16-11 0-18 7-18 16 0 11 7 16 23 23l10 4c33 14 52 28 52 60 0 34-27 54-63 54-35 0-58-17-69-39zm-126 3c6 10 11 19 23 19 12 0 19-5 19-23V193h38v179c0 38-22 55-55 55-29 0-46-15-55-34z"/>
            </svg>
          </div>
          <span className="new-skill-name">JavaScript</span>
          <span className="new-skill-pct">80%</span>
          <div className="new-skill-bar"><div className="new-skill-bar-fill" data-width="80"></div></div>
        </div>

        {/* <!-- Bootstrap --> */}
        <div className="new-skill-card reveal delay-4">
          <div className="new-skill-icon">
            <svg viewBox="0 0 118 94" xmlns="http://www.w3.org/2000/svg">
              <rect width="118" height="94" rx="14" fill="#7952B3"/>
              <path d="M28.5 20h28.7c5.3 0 9.4 1.3 12 3.8 2.6 2.5 3.9 5.7 3.9 9.6 0 3.2-.8 5.9-2.4 8.1a14 14 0 01-6.6 4.7v.3c3.7.9 6.5 2.7 8.5 5.2 2 2.5 3 5.6 3 9.3 0 2.4-.5 4.7-1.4 6.7a15 15 0 01-4 5.3c-1.7 1.5-3.8 2.7-6.2 3.5C61.9 77.6 59 78 55.8 78H28.5V20zm13 22.7h12.7c3 0 5.3-.7 6.9-2.2 1.6-1.5 2.5-3.5 2.5-6.1 0-2.4-.7-4.3-2.2-5.6-1.5-1.3-3.7-2-6.7-2H41.5v15.9zm0 24.5h14.2c3.3 0 5.8-.8 7.6-2.3 1.8-1.6 2.7-3.7 2.7-6.5 0-2.7-.9-4.8-2.8-6.3-1.8-1.5-4.4-2.2-7.7-2.2H41.5v17.3z" fill="#fff"/>
            </svg>
          </div>
          <span className="new-skill-name">Bootstrap</span>
          <span className="new-skill-pct">90%</span>
          <div className="new-skill-bar"><div className="new-skill-bar-fill" data-width="90"></div></div>
        </div>

        {/* <!-- React --> */}
       <div className="new-skill-card reveal delay-4">
          <div className="new-skill-icon">
            <svg viewBox="-11.5 -10.23 23 20.46" xmlns="http://www.w3.org/2000/svg">
              <circle r="2.05" fill="#61DAFB"/>
              <g stroke="#61DAFB" stroke-width="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
          </div>
          <span className="new-skill-name">React</span>
          <span className="new-skill-pct">80%</span>
          <div className="new-skill-bar"><div className="new-skill-bar-fill" data-width="80"></div></div>
        </div>

        {/* <!-- Tailwind --> */}
        <div className="new-skill-card reveal delay-5">
          <div className="new-skill-icon">
            <svg viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.672 33.808 15.9 40.5 15.9c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C37.256 3.228 34.192 0 27 0zM13.5 15.9C6.3 15.9 1.8 19.5 0 26.7c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.744 28.572 19.808 31.8 26.5 31.8c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.756 19.128 20.692 15.9 13.5 15.9z" fill="#38BDF8"/>
            </svg>
          </div>
          <span className="new-skill-name">Tailwind</span>
          <span className="new-skill-pct">85%</span>
          <div className="new-skill-bar"><div className="new-skill-bar-fill" data-width="85"></div></div>
        </div>

      </div>
    </div>
  </section>

      {/* Projects */}
      <section id="projects" className="projects-section">

    <div className="projects-header-new">
      <div>
        <div className="s-label reveal">Selected Work</div>
        <h2 className="s-heading reveal delay-1">My Projects</h2>
      </div>
      <a href="#home" className="view-all">View All</a>
    </div>

    <div className="new-projects-grid">

      {/* <!-- Featured: Shoes Store --> */}
      <a href="https://swift-kicks-m9et.vercel.app" target="_blank" rel="noopener" className="new-project-card featured reveal delay-1">
        <div className="new-project-thumb">
          <img src={s1} alt="Shoes Store – Trendy Slick Pro" loading="lazy" />
          <div className="thumb-overlay"><span>Live Preview</span></div>
        </div>
        <div className="new-project-body">
          <div className="new-project-tags">
            <span className="new-project-tag">React.JS</span>
            <span className="new-project-tag">Tailwind</span>
            <span className="new-project-tag">E-Commerce</span>
          </div>
          <h3 className="new-project-title">Trendy Slick Pro</h3>
          <p className="new-project-desc">
            Fashion e-commerce experience with smooth browsing,
            cart management and a fully mobile-first responsive layout.
          </p>
          <div className="new-project-footer">
            <span className="view-link">Live Preview</span>
            <span className="year-tag">2025</span>
          </div>
        </div>
      </a>

      {/* <!-- Card 2: Event Organiser --> */}
      <a href="https://event-organiser-kappa.vercel.app" target="_blank" rel="noopener" className="new-project-card reveal delay-2">
        <div className="new-project-thumb">
          <img src={s2} alt="Solanki Events" loading="lazy" />
          <div className="thumb-overlay"><span>Live Preview</span></div>
        </div>
        <div className="new-project-body">
          <div className="new-project-tags">
            <span className="new-project-tag">HTML/CSS</span>
            <span className="new-project-tag">JS</span>
          </div>
          <h3 className="new-project-title">Solanki Events</h3>
          <p className="new-project-desc">
            Event management landing page with bold visuals and dynamic layout.
          </p>
          <div className="new-project-footer">
            <span className="view-link">Live Preview</span>
            <span className="year-tag">2025</span>
          </div>
        </div>
      </a>

      {/* <!-- Card 3: Wheel Dice --> */}
      <a href="https://wheel-dice.vercel.app" target="_blank" rel="noopener" className="new-project-card reveal delay-3">
        <div className="new-project-thumb">
          <img src={s3} alt="Wheel Dice" loading="lazy" />
          <div className="thumb-overlay"><span>Live Preview</span></div>
        </div>
        <div className="new-project-body">
          <div className="new-project-tags">
            <span className="new-project-tag">React.JS</span>
            <span className="new-project-tag">CSS 3D</span>
          </div>
          <h3 className="new-project-title">Wheel Dice</h3>
          <p className="new-project-desc">
            Interactive 3D dice & wheel experience built with React and CSS transforms.
          </p>
          <div className="new-project-footer">
            <span className="view-link">Live Preview</span>
            <span className="year-tag">2025</span>
          </div>
        </div>
      </a>

    </div>
  </section>

      {/* Contact */}
      <section id="contact">
    <div className="particles" id="particles-contact"></div>

    <div className="contact-header">
      <div className="section-label reveal">GET IN TOUCH</div>
      <h2 className="reveal delay-1">Let's Work <span style={{ color: "#c9933a" }}>Together</span></h2>
      <p className="reveal delay-2">Have a project in mind or just want to say hi? Feel free to drop a message — I usually reply within 24 hours.</p>
    </div>

    <div className="contact-layout">
         {/* <!-- Form --> */}
      <div className="contact-form">
        <div className="form-row reveal delay-1">
          <div className="input-wrap">
            <input type="text" name="name" value={formData.name}
            onChange={handleChange} placeholder="Your Name"/>
          </div>
          <div className="input-wrap">
            <input type="email" name="email" value={formData.email}
            onChange={handleChange} placeholder="Your Email"/>
          </div>
        </div>
        <div className="input-wrap reveal delay-2">
          <input type="text" name="subject" value={formData.subject}
          onChange={handleChange} placeholder="Subject"/>
        </div>
        <div className="input-wrap reveal delay-3">
          <textarea name="message" value={formData.message}
          onChange={handleChange} placeholder="Your Message..."></textarea>
        </div>
        <button className="btn-send reveal delay-4" onClick={handleWhatsApp}>
          Send Message <i className="fas fa-paper-plane"></i>
        </button>
      </div>
      
      {/* <!-- Info cards --> */}
      <div className="contact-info">
        <div className="contact-info-card reveal delay-1">
          <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
          <div className="info-text">
            <p>Location</p>
            <p>Jaipur, Rajasthan, India — 302020</p>
          </div>
        </div>
        <div className="contact-info-card reveal delay-2">
          <div className="info-icon"><i className="fas fa-envelope"></i></div>
          <div className="info-text">
            <p>Email</p>
            <p>balveersolanki0123@gmail.com</p>
          </div>
        </div>
        <div className="contact-info-card reveal delay-3">
          <div className="info-icon"><i className="fas fa-phone"></i></div>
          <div className="info-text">
            <p>Phone</p>
            <p>+91-88751-50838</p>
          </div>
        </div>

        <div className="contact-info-card reveal delay-3">
        <div className="social-row reveal delay-4">
          <p>Find me on</p>
          <div className="social-icons">
  <div
    className="soc-btn"
    onClick={() => window.open("https://github.com/balveerdev", "_blank", "noopener,noreferrer")}
  >
    <i className="fab fa-github"></i>
  </div>

  <div
    className="soc-btn"
    onClick={() =>
      window.open(
        "https://www.linkedin.com/in/balveer-solanki-67b488359",
        "_blank", "noopener,noreferrer"
      )
    }
  >
    <i className="fab fa-linkedin-in"></i>
  </div>

  <div
    className="soc-btn"
    onClick={() =>
      window.open("https://instagram.com/hiii_balveer", "_blank", "noopener,noreferrer")
    }
  >
    <i className="fab fa-instagram"></i>
  </div>

  <div
    className="soc-btn"
    onClick={() => window.open("https://t.me/Blackcode636", "_blank", "noopener,noreferrer")}
  >
    <i className="fab fa-telegram"></i>
  </div>
</div>
        </div>
        </div>
      </div>

     
    </div>
  </section>

      {/* Footer */}
      <footer>
    <div className="logo">BALVEER.DEV</div>
    <p>Crafting frontend experiences with code & creativity ✨</p>
    <p style={{ marginTop: "12px" }}>© 2025 Balveer Solanki. All rights reserved.</p>
  </footer>
  </div>
  <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;