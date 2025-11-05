import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Updates from './components/Updates.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}
