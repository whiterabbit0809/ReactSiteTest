import reactLogo from './assets/logo.jpg';

export default function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>My React Site on GitHub Pages</h1>
        <img src={reactLogo} alt="Hello" style={{ maxWidth: 280 }} />
        <p>Deployed with Vite + GitHub Pages 🎉</p>
      </div>
    </main>
  );
}

