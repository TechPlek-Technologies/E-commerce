const ScrollTopBtn = () => {
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
      <button
        style={{ display: "inline-block" }}
        className="scroll-top scroll-to-target"
        data-target="html"
        onClick={() => scrollTop()}
      >
        <span className="fas fa-angle-double-up" />
      </button>
    );
  };

  export default ScrollTopBtn;