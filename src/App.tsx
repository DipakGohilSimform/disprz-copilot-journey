import type { SVGProps } from "react"
import { Check, Eye, Lock, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

const heroPoints = [
  "Real-time rent tracking & reminders",
  "Digital lease signing & storage",
  "Maintenance request management",
  "Secure encrypted data storage",
] as const

function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="#4285F4"
        d="M22 12.2c0-.73-.06-1.24-.2-1.78H12v3.6h5.76c-.12.89-.79 2.23-2.26 3.14l-.02.12 3.3 2.51.23.02c2.1-1.9 2.99-4.69 2.99-7.61z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.82 0 5.18-.91 6.9-2.49l-3.29-2.53c-.88.6-2.06 1.01-3.61 1.01a6.27 6.27 0 0 1-5.93-4.27l-.12.01-3.43 2.61-.04.12A10.02 10.02 0 0 0 12 22z"
      />
      <path
        fill="#FBBC05"
        d="M6.07 13.72A6.14 6.14 0 0 1 5.71 12c0-.6.13-1.2.35-1.72l-.01-.11-3.47-2.65-.11.05A9.8 9.8 0 0 0 2 12c0 1.62.39 3.16 1.08 4.43z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.95 0 3.27.82 4.02 1.5l2.93-2.79C17.17 3.04 14.82 2 12 2a10.02 10.02 0 0 0-9.52 6.44l3.59 2.72A6.27 6.27 0 0 1 12 5.96z"
      />
    </svg>
  )
}

export function App() {
  return (
    <main className="lpx-page">
      <section className="lpx-hero" aria-label="Product highlights">
        <div className="lpx-hero-orb lpx-hero-orb-top" aria-hidden="true" />
        <div className="lpx-hero-orb lpx-hero-orb-bottom" aria-hidden="true" />

        <div className="lpx-hero-brand">LOPX</div>

        <div className="lpx-hero-content">
          <p className="lpx-hero-badge">Secure Access</p>

          <h1 className="lpx-hero-title">
            <span>Manage your properties</span>
            <span className="lpx-hero-title-accent">smarter &amp; faster.</span>
          </h1>

          <p className="lpx-hero-description">
            LOPX gives landlords and tenants a single platform to handle leases,
            payments, and maintenance - all in one place.
          </p>
        </div>

        <ul className="lpx-hero-list" aria-label="Key product features">
          {heroPoints.map((point) => (
            <li key={point} className="lpx-hero-list-item">
              <span className="lpx-hero-list-icon" aria-hidden="true">
                <Check size={10} />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="lpx-auth-shell" aria-label="Sign in form">
        <div className="lpx-auth-card">
          <header className="lpx-auth-header">
            <h2 className="lpx-auth-title">Welcome back</h2>
            <p className="lpx-auth-subtitle">
              Sign in to your LOPX account to continue.
            </p>
          </header>

          <form className="lpx-auth-form" noValidate>
            <div className="lpx-field">
              <label htmlFor="email" className="lpx-field-label">
                Email Address
              </label>
              <div className="lpx-input-wrap">
                <Mail className="lpx-input-icon" size={16} aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="lpx-input"
                />
              </div>
            </div>

            <div className="lpx-field">
              <div className="lpx-field-row">
                <label htmlFor="password" className="lpx-field-label">
                  Password
                </label>
                <a href="#" className="lpx-forgot-link">
                  Forgot password?
                </a>
              </div>
              <div className="lpx-input-wrap">
                <Lock className="lpx-input-icon" size={16} aria-hidden="true" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  defaultValue="••••••••"
                  className="lpx-input lpx-input-password"
                />
                <button
                  type="button"
                  className="lpx-eye-btn"
                  aria-label="Show password"
                >
                  <Eye size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            <label className="lpx-check-row">
              <input type="checkbox" name="remember" className="lpx-checkbox" />
              <span>Remember me for 10 days</span>
            </label>

            <Button type="submit" className="lpx-primary-btn">
              Sign In
            </Button>

            <div className="lpx-divider" aria-hidden="true">
              <span className="lpx-divider-line" />
              <span>or continue with</span>
              <span className="lpx-divider-line" />
            </div>

            <Button type="button" variant="outline" className="lpx-google-btn">
              <GoogleIcon className="lpx-google-icon" />
              Continue with Google
            </Button>
          </form>

          <p className="lpx-signup-note">
            Don&apos;t have an account? <a href="#">Create one free</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
