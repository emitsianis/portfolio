const Footer = () => {
  return (
    <section className="c-space py-6 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Check me out:</p>
      </div>
      <div className="flex gap-3">
        <a className="social-icon" href="https://github.com/emitsianis" target="_blank" rel="noreferrer">
          <img src="/assets/github.svg" alt="github" className="w=1/2 h=1/2" />
        </a>
        <a className="social-icon" href="https://x.com/Emitsianis" target="_blank" rel="noreferrer">
          <img src="/assets/x.svg" alt="x" className="w=1/2 h=1/2" />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/vangelis-mitsianis-66231a168/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/linkedin.svg" alt="linkedin" className="w=1/2 h=1/2" />
        </a>
      </div>
    </section>
  );
};
export default Footer;
