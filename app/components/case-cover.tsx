import Image from 'next/image'

type CaseType = {
  title: string;
  services: string;
  cover: string;
};

const CaseCover = (props: CaseType) => {

  const { title, services, cover } = props;

  return (
    <div className="case-study">
      <Image
        fill
        src={cover}
        alt="Canary branding image"
        className="img"
      />
      <div className="meta">
        <h2 data-replace={title}><span>{title}</span></h2>
        <p>{services}</p>
      </div>
    </div>
  )
}

export default CaseCover;