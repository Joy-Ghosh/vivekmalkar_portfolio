const Testimonials = () => {
  return (
    <section className="testimonials">
      {/* <div className="testimonials-container flex-column-mobile">
        
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I worked with Steven, he was very helpful and fast to respond
                to my inquiry to help with Wordpress website issues and all
                technical problems. "
              </span>
              <span className="person">Jasmin Aniston</span>
              <span className="job">Director - Adobe</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Steven is a great help managing a very out of date website.
                Everything we ask him to do is done quickly and efficiently, we
                would be lost without him. "
              </span>
              <span className="person">Mark Eliott</span>
              <span className="job">Manager - Envato</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        
      </div> */}

      <div className="testimonials-container flex-column-mobile">
        {/* CONTACT FORM START */}
        <div className="form-container animated-layer fade-in-right-animation fadeInUp wow">
          <form className="contactform-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
