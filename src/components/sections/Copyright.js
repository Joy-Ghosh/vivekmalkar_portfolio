const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Vivek Malakar</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/joy-webdesigner/"
          >
            Joy
          </a>
        </span>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/joy-webdesigner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>

          <li>
            <a
              href="https://dribbble.com/Joyg03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-dribbble" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
