import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-200">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
