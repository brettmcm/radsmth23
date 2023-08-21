import Image from 'next/image'

type CaseType = {
  title: string;
  services: string;
  cover: string;
};

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <main>
        <HeroBanner />
        <CaseCover
          title="Canary"
          services="Branding, Visual Identity"
          cover="/covers/canary-cover.png"
        />
        <CaseCover
          title="Island Dwell"
          services="Branding, Visual Identity"
          cover="/covers/islanddwell-hero.jpg"
        />
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

const CaseCover = (props: CaseType) => {

  const { title, services, cover } = props;

  return (
    <div className="case-study">
      <div className="img">
        <Image
          fill
          src={cover}
          alt="Canary branding image"
          className="imgimg"
        />
      </div>
      <h2>{title}</h2>
      <p>{services}</p>
    </div>
  )
}