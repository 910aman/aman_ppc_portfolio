type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) => (
  <div className={`section-intro section-intro--${align}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {description && <p className="section-copy">{description}</p>}
  </div>
);

export default SectionIntro;

