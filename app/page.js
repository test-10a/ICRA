export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '48px 20px' }}>
      <header style={{ marginBottom: 32, textAlign: 'center' }}>
        <div style={{ fontSize: 14, opacity: 0.8, letterSpacing: 1.2 }}>UNOFFICIAL DEMO SITE</div>
        <h1 style={{ fontSize: '2.5rem', margin: '8px 0 4px' }}>ICRA 2026</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>IEEE International Conference on Robotics and Automation</p>
        <p style={{ margin: '6px 0 0', opacity: 0.7 }}>
          Host city & venue: <strong>TBD</strong> (Illustrative information only)
        </p>
      </header>

      <section style={{ background: '#121a34', padding: 24, borderRadius: 12, boxShadow: '0 6px 20px rgba(0,0,0,0.25)', marginBottom: 24 }}>
        <h2 style={{ marginTop: 0 }}>Important Dates (Tentative / Example)</h2>
        <ul style={{ lineHeight: 1.8, margin: 0, paddingLeft: 20 }}>
          <li><strong>Workshop Proposals Due:</strong> August 25, 2025</li>
          <li><strong>Paper Submission Deadline:</strong> September 30, 2025</li>
          <li><strong>Rebuttal / Revision Window:</strong> Oct 25 – Nov 5, 2025</li>
          <li><strong>Notification of Acceptance:</strong> December 20, 2025</li>
          <li><strong>Final Paper Submission:</strong> January 31, 2026</li>
          <li><strong>Conference Dates:</strong> May 18–22, 2026 (TBD)</li>
        </ul>
        <p style={{ fontSize: 13, opacity: 0.7, marginTop: 12 }}>
          This is a demonstration site. Dates and details are placeholders—refer to the official ICRA website for authoritative info.
        </p>
      </section>

      <section style={{ background: '#121a34', padding: 24, borderRadius: 12, boxShadow: '0 6px 20px rgba(0,0,0,0.25)', marginBottom: 24 }}>
        <h2 style={{ marginTop: 0 }}>Example Workshops (Illustrative)</h2>
        <ul style={{ lineHeight: 1.8, margin: 0, paddingLeft: 20 }}>
          <li>Large-Scale Multi-Agent Coordination in Robotics</li>
          <li>Learning-Based Control for Legged Locomotion</li>
          <li>Robotics for Healthcare & Assistive Technologies</li>
          <li>Trustworthy and Safe Human-Robot Interaction</li>
          <li>Foundations and Benchmarks for Robot Foundation Models</li>
          <li>Robotics in the Wild: Field Deployments & Lessons</li>
        </ul>
      </section>

      <section style={{ background: '#121a34', padding: 24, borderRadius: 12, boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}>
        <h2 style={{ marginTop: 0 }}>About</h2>
        <p style={{ lineHeight: 1.7, margin: 0 }}>
          ICRA is a premier annual conference covering the full spectrum of robotics research—from fundamental methods to real-world deployments.
          This unofficial demo page showcases an example homepage and demonstrates request logging on Vercel. Try visiting paths like
          <code style={{ background: '#0b1020', padding: '2px 6px', borderRadius: 6, marginLeft: 6, marginRight: 6 }}>/abc123</code>
          or <code style={{ background: '#0b1020', padding: '2px 6px', borderRadius: 6 }}>/?ref=test</code> and then check logs.
        </p>
      </section>

      <footer style={{ textAlign: 'center', opacity: 0.7, fontSize: 13, marginTop: 32 }}>
        © 2025 ICRA Demo — Not affiliated with the official conference
      </footer>
    </main>
  );
}
