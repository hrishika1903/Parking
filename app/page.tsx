import Link from "next/link";

import "./landing.css";



export default function Home() {
  return (
    <main className="landing">

      {/* NAVBAR */}
      <nav className="container nav">
        <div className="logo">Parking system</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#preview">Preview</a>
          <Link href="/sign-in">Login</Link>
          <Link href="/sign-up" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="container hero">
  <div className="hero-text">

  {/* College Header */}
  <div className="college-header">
    <img
      src="/college-logo.png"
      alt="St Aloysius College Logo"
      className="college-logo"
    />

    <div className="college-info">
      <h2>ST ALOYSIUS</h2>
      <p>(Deemed to be University)</p>
      <span>Mangaluru – 575003</span>
    </div>
  </div>

  {/* Main Heading */}
  <h1 className="main-title">
    College 
    <span>Parking Management</span>
  </h1>

  <p className="hero-desc">
    Manage vehicle registrations, control campus entry,
    track parking availability, 
    and ensure secure access 
    all from one powerful dashboard.
  </p>

  <div className="hero-buttons">
    <Link href="/sign-up" className="btn-primary">Get Started</Link>
    <Link href="/sign-up" className="btn-secondary">Watch Demo</Link>
  </div>

</div>


 
</section>



      {/* FEATURES */}
      <section className="features">
  <div className="container">
    <h2>Powerful Features for Campus Parking</h2>

    <div className="feature-grid">
      <div className="feature-card">🚗 Vehicle Registration</div>
      <div className="feature-card">🔐 Secure Access</div>
      <div className="feature-card">📊 Live Status</div>
      <div className="feature-card">📱 QR Entry</div>
      <div className="feature-card">⚡ Fast & Responsive</div>
      <div className="feature-card">☁️ Cloud Based</div>
    </div>
  </div>
</section>


      {/* HOW IT WORKS */}
      <section className="how">
  <h2>How It Works</h2>

  <div className="how-steps">
    <div className="step">
      <span className="step-number">1</span>
      <div className="step-content">
        <h4>Sign Up</h4>
        <p>Create your account securely</p>
      </div>
    </div>

    <div className="step">
      <span className="step-number">2</span>
      <div className="step-content">
        <h4>Register Vehicle</h4>
        <p>Add vehicle details and assign access</p>
      </div>
    </div>

    <div className="step">
      <span className="step-number">3</span>
      <div className="step-content">
        <h4>Park Smart</h4>
        <p>Enter campus using QR verification</p>
      </div>
    </div>
  </div>
</section>



      {/* CTA */}
     <section className="cta">
  <div className="container">
    <h3>Ready to modernize campus parking?</h3>
    <p>Join colleges adopting smart parking solutions.</p>
    <Link href="/sign-up" className="btn-primary">
      Get Started Now
    </Link>
  </div>
</section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 College Parking Management <br />
        <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Contact</a>
      </footer>

    </main>
  );
}
