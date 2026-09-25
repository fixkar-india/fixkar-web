export default function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-fix">Fix</span><span className="logo-kar">Kar</span>
        </div>
        <ul className="nav-links">
          <li>Services ⌄</li>
          <li>Solutions ⌄</li>
          <li>How It Works</li>
          <li>Rate Card</li>
          <li>Societies & Commercial</li>
        </ul>
        <div className="nav-actions">
          <span className="login-btn">Log in</span>
          <button className="btn-primary">Book Instant Pro</button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <h1>
            <span className="highlight-pill">Home Repairs</span> for<br />
            Humans, Not Endless<br />
            Hassle
          </h1>
          <p>
            Transform how you maintain your home — verified 30-min technician dispatch, 
            transparent upfront rates, and zero hidden inspection charges.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Book in 60 Seconds</button>
            <div className="search-container">
              <div className="search-box">
                <input type="text" placeholder="Enter your Pincode or Phone" />
                <button className="btn-orange">Request a demo</button>
              </div>
              <span className="guarantee-text">Check technician arrival time in your pin code without any payment form</span>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="icon-wrapper">⚡</div>
            <h3>30-Min Rapid SOS Dispatch</h3>
            <p>Electrical breakdown, pipe bursts, or AC failure? Certified neighborhood pros at your door in under half an hour.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">🛡️</div>
            <h3>100% Police Verified & Insured</h3>
            <p>Every serviceman undergoes 7-step ID checks, criminal record clearance, and ₹25,000 damage protection cover.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">🏷️</div>
            <h3>Standard Rate Cards from ₹149</h3>
            <p>No bargaining, no sudden surprise bills. Digitally standardized rates approve before technician tools touch your walls.</p>
          </div>
        </section>

        <div className="social-proof">
          <span className="dot">●</span> Over <strong>2.4M+ Repairs Done</strong> Across Mumbai, Bengaluru, Delhi NCR & Pune • <span className="star">★</span> <strong>4.9/5 Rating</strong>
        </div>
      </main>

      <footer>
        <div>© 2025 FixKar Technologies India Pvt Ltd. All rights reserved.</div>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Safety Standards</a>
          <a href="#">Join as Pro Partner</a>
        </div>
      </footer>
    </div>
  );
}
