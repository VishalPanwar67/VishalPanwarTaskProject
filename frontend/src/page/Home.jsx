import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img3 from "../assets/About.png";
import img1 from "../assets/img3.jpg";
import img2 from "../assets/img2.jpg";
import roundimg1 from "../assets/roundima1.webp";
import roundimg2 from "../assets/roundimage2.png";
import roundimg3 from "../assets/roundimage3.jpg";
import "./Home.css";

const Home = ({
  projects,
  clients,
  contactForm,
  newsletterEmail,
  loading,
  message,
  setContactForm,
  setNewsletterEmail,
  handleContactSubmit,
  handleNewsletter,
}) => {
  return (
    <div className="page">
      <Navbar />
      <header className="hero hero-bg" id="home">
        <div className="hero-overlay">
          <div className="hero-left">
            <h1>Consultation, Design & Marketing</h1>
          </div>
          <div id="contact" className="anchor-offset" />
          <div className="hero-form-card">
            <h2>Get a Free Consultation</h2>
            <form className="form stacked" onSubmit={handleContactSubmit}>
              <input
                required
                value={contactForm.fullName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, fullName: e.target.value })
                }
                placeholder="Full Name"
              />
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                placeholder="email: xyz@gmial.com"
              />
              <input
                required
                value={contactForm.phone}
                onChange={(e) =>
                  setContactForm({ ...contactForm, phone: e.target.value })
                }
                placeholder="Mobile no."
              />
              <input
                required
                value={contactForm.city}
                onChange={(e) =>
                  setContactForm({ ...contactForm, city: e.target.value })
                }
                placeholder="Address"
              />
              <button
                className="button primary full"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Get Quick Quote"}
              </button>
              {message && <p className="muted">{message}</p>}
            </form>
          </div>
        </div>
      </header>

      <main>
        <section className="section light" id="services">
          <div className="split">
            <div className="text-block">
              <p className="eyebrow blue">Not Your Average Realtor</p>
              <p className="muted">
                Real Trust delivers a modern, client-first approach to
                marketing. Our proactive strategies are designed to maximize
                your investment and respect your time, ensuring the best
                possible results.
              </p>
            </div>
            <div className="circle-stack">
              <img
                src="https://imgs.search.brave.com/29rxCmCuR__QGxfYqkT2RRYarnj3pa3w0xhSVz1dayA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/ZnJpY2FuLXdvbWFu/LW1hbmFnZXItbG9v/a2luZy1jYW1lcmEt/c21pbGluZy1ob2xk/aW5nLWNsaXBib2Fy/ZC13aGlsZS1kaXZl/cnNlLWNvd29ya2Vy/cy10YWxraW5nLWJh/Y2tncm91bmRfNDgy/MjU3LTUwMjEuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MA"
                alt="Agent 1"
                className="circle large"
              />
              <img
                src="https://imgs.search.brave.com/Ys7htrYfuCPoSttenI-N_jW1mo4YwoLP6218OEFZrFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/MTU2NDg3OS9waG90/by9zbWlsaW5nLWZl/bWFsZS1wYXRpZW50/LXJlY2VpdmVzLWdv/b2QtbmV3cy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9LXJt/QkpBc1ZJaWpxYXox/REdDQWRSdkVfbnJX/TEpYcWV5ZXpqaXVI/YUdlRT0"
                alt="Agent 2"
                className="circle medium"
              />
              <img
                src="https://imgs.search.brave.com/odIyXd4LtDijWPZYP3yegD8YjOwLKb7oVXt8M-8Od3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b3Jwb3JhdGUtZW1w/bG95ZWUtcG9zaW5n/LW9mZmljZV8yMy0y/MTQ4ODA0NDgzLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA"
                alt="Agent 3"
                className="circle small"
              />
            </div>
          </div>
        </section>

        {/* --- WHY US SECTION --- */}
        <section className="section why" id="why">
          <h2 className="centered">Why Choose Us?</h2>
          <div className="pill-grid">
            <div className="pill">
              <div className="pill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3>Potential ROI</h3>
              <p className="muted">
                Maximize your investment value. Whether buying new or
                renovating, our expert strategies help you secure the highest
                possible returns.
              </p>
            </div>
            <div className="pill">
              <div className="pill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18.375 2.625a3.875 3.875 0 0 0-5.48 0l-9.13 9.13a1.875 1.875 0 0 0 0 2.65l2.65 2.65a1.875 1.875 0 0 0 2.65 0l9.13-9.13a3.875 3.875 0 0 0 0-5.48zM14 8l3 3M10 18l-4 4h-2v-2l4-4"></path>
                </svg>
              </div>
              <h3>Design</h3>
              <p className="muted">
                Realize your vision. Our in-house design team guides every step,
                ensuring your project perfectly reflects your personal style and
                goals.
              </p>
            </div>
            <div className="pill">
              <div className="pill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>Marketing</h3>
              <p className="muted">
                Stand out from the crowd. We deliver sophisticated, high-impact
                marketing campaigns designed to give you a competitive edge.
              </p>
            </div>
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section className="section gallery">
          <div className="gallery-row">
            <img src={img1} alt="Gallery 1" className="gallery-row1" />
            <img src={img3} alt="Gallery 2" className="gallery-row2" />
            <img src={img2} alt="Gallery 3" className="gallery-row3" />
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="section about" id="about">
          <h2 className="centered heading">About Us</h2>
          <p className="muted centered wide">
            We specialize in real estate, delivering excellent customer service
            with a firm commitment to work hard, listen to your needs, and
            follow through on every detail.
          </p>
          <a href="/admin" className="button">
            Learn more
          </a>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section className="section projects-section" id="projects">
          <div className="projects-container">
            <div className="projects-header">
              <h2 className="projects-main-title">Our Projects</h2>
              <p className="projects-description">
                We leverage our knowledge of buyer preferences to suggest
                high-impact projects that ensure you get top market value.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((p) => (
                <article className="project-card" key={p._id}>
                  <div className="project-image-wrapper">
                    <img src={p.image} alt={p.name} className="project-image" />
                  </div>
                  <div className="project-card-body">
                    <h3 className="project-title">{p.name}</h3>
                    <p className="project-location">
                      {p.location
                        ? `${p.name}, ${p.location}`
                        : `${p.name}, Location`}
                    </p>
                    <button
                      Clients
                      className="button project-read-more"
                      disabled
                    >
                      READ MORE
                    </button>
                  </div>
                </article>
              ))}
              {!projects.length && (
                <p className="muted centered projects-empty">
                  No projects yet. Add projects from the admin panel.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* --- CLIENTS SECTION --- */}
        <section className="section clients-section" id="clients">
          <div className="clients-container">
            <div className="clients-decorative-bg">
              <div className="clients-bg-shape clients-bg-shape-left"></div>
              <div className="clients-bg-shape clients-bg-shape-right"></div>
            </div>
            <h2 className="clients-title">Happy Clients</h2>
            <div className="clients-grid">
              {clients.map((c) => (
                <article className="client-card" key={c._id}>
                  <div className="client-avatar-wrapper">
                    <img src={c.image} alt={c.name} className="client-avatar" />
                  </div>
                  <div className="client-card-body">
                    <p className="client-testimonial">{c.description}</p>
                    <h3 className="client-name">{c.name}</h3>
                    <p className="client-designation">{c.designation}</p>
                  </div>
                </article>
              ))}
              {!clients.length && (
                <p className="muted centered clients-empty">
                  No client testimonials yet.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* --- BANNER SECTION --- */}
        <section className="section banner-section">
          <div className="banner-container">
            <div className="banner-overlay">
              <p className="banner-text">
                Learn more about our listing process, as well as our additional
                staging and design work.
              </p>
              <button className="banner-button">LEARN MORE</button>
            </div>
          </div>
        </section>

        {/* --- BLUE BANNER SECTION --- */}
        <section className="section blue-banner">
          <div className="blue-banner-container">
            <div className="blue-banner-nav">
              <a href="#home" className="blue-banner-link">
                Home
              </a>
              <a href="#services" className="blue-banner-link">
                Services
              </a>
              <a href="#projects" className="blue-banner-link">
                Projects
              </a>
              <a href="#about" className="blue-banner-link">
                Testimonials
              </a>
              <a href="#contact" className="blue-banner-link">
                Contact
              </a>
            </div>
            <div className="blue-banner-subscribe">
              <span className="blue-banner-subscribe-label">Subscribe Us</span>
              <form className="blue-banner-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="blue-banner-input"
                />
                <button
                  className="blue-banner-button"
                  type="submit"
                  disabled={loading}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
