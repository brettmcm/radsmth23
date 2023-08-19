import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <main>
        <HeroBanner />
        <CaseCover />
        <CaseCover />
      </main>
    </div>
  )
}

export function HeaderNav() {
  return (
    <header>
      <h1>Radsmth—</h1>
      <a href="mailto:brett@radsmth.com">Contact</a>
    </header>
  )
}

export function HeroBanner() {

  return (
    <div className="hero-banner">
        <div className="anchor-square"></div>
        Boutique, family-owned branding and graphic design studio
    </div>
  )
}

export function CaseCover() {

  return (
    <div className="case-study">
      <div className="img">
        <Image
          fill
          src="/covers/canary-05.png"
          alt="Canary branding image"
          className="imgimg"
        />
      </div>
      <h2>Canary</h2>
      <p>Branding, Visual Identity</p>
    </div>
  )
}