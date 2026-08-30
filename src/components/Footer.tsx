interface FooterProps {
  timeout: boolean;
}

const Footer = ({ timeout }: FooterProps) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    <p className="copyright">&copy;2025 Chris Mlinac</p>
  </footer>
);

export default Footer;
