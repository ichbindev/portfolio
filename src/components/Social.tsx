const LINKS = [
  {
    href: 'https://twitter.com/ichbindev',
    className: 'icon fa-twitter',
    label: 'Twitter',
  },
  {
    href: 'https://linkedin.com/in/cmlinac',
    className: 'icon fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/ichbindev',
    className: 'icon fa-github',
    label: 'GitHub',
  },
];

const Social = () => (
  <ul className="icons" style={{ margin: 0 }}>
    {LINKS.map(({ href, className, label }) => (
      <li key={label}>
        <a href={href} className={className}>
          <span className="label">{label}</span>
        </a>
      </li>
    ))}
  </ul>
);

export default Social;
