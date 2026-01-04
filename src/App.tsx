import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import SpaydaPage from '@/components/SpaydaPage'
import { SPAYDA_MAN_THEME, SPAYDA_MAN_TEXT } from '@/utils/constants'

function App() {
  const [message, setMessage] = useState("")

  return (
    <main className="hero-section">
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <h1 className="hero-heading text-5xl font-bold">
          {SPAYDA_MAN_TEXT.appTitle}
        </h1>
        <h2 className="hero-subheading text-2xl text-secondary font-semibold">
          {SPAYDA_MAN_TEXT.tagline}
        </h2>
        
        {/* SpaydaPage combines SpaydaImage and SpeechBubble */}
        <SpaydaPage
          speechText="Hey there! I'm Spayda Man, ready to spin some awesome web content!"
          speechPosition="top"
          speechAnimated={true}
        />
        
        <p 
          className="text-lg font-medium max-w-2xl px-4"
          style={{ color: SPAYDA_MAN_THEME.colors.accent }}
        >
          {SPAYDA_MAN_TEXT.heroSubheading}
        </p>
        
        <Button 
          onClick={() => setMessage(SPAYDA_MAN_TEXT.ctaButton)}
          className="mt-4 px-8 py-3 text-lg font-semibold hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: SPAYDA_MAN_THEME.colors.primary,
            color: 'white'
          }}
        >
          {SPAYDA_MAN_TEXT.ctaButton}
        </Button>
        
        {message && (
          <p 
            className="text-lg font-medium mt-6 animate-pulse"
            style={{ color: SPAYDA_MAN_THEME.colors.success }}
          >
            ✓ {message}
          </p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl px-4">
          {Object.entries(SPAYDA_MAN_TEXT.features).map(([key, value]) => (
            <div
              key={key}
              className="p-6 rounded-lg border-2 transition-all hover:shadow-lg focus-within:outline-2 focus-within:outline-offset-2"
              style={{
                borderColor: SPAYDA_MAN_THEME.colors.accent,
                backgroundColor: SPAYDA_MAN_THEME.colors.light,
                outlineColor: SPAYDA_MAN_THEME.colors.primary
              }}
            >
              <p className="font-semibold" style={{ color: SPAYDA_MAN_THEME.colors.primary }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
