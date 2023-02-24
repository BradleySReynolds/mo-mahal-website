const Contact = () => {
  return (
    <div className="App">
      <h2 className="product-name">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-section facebook">
          <h3 className="contact-header">Facebook</h3>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmomoriahmahal&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
            width="300"
            height="500"
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="contact-section youtube">
          <h3 className="contact-header">Youtube</h3>
        </div>
        <div className="contact-section pinterest">
          <h3 className="contact-header">Pinterest</h3>
        </div>
        <div className="contact-section tiktok">
          <h3 className="contact-header">TikTok</h3>
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@momahal"
            data-unique-id="momahal"
            data-embed-type="creator"
            height="300"
            width="300"
          >
            {" "}
            <section>
              {" "}
              <a
                target="_blank"
                href="https://www.tiktok.com/@momahal?refer=creator_embed"
              >
                @momahal
              </a>{" "}
            </section>{" "}
          </blockquote>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
