const Home = () => {
  const url = "https://www.youtube.com/embed/uOmKnmwdxhc";

  return (
    <div className="App">
      <img className="main--img" src={"./images/main-img.jpg"} />

      <hr />

      <h2 className="sub-heading">Mo Mahal's Mission</h2>
      <p className="quote">
        "Every single year, Americans throw away 12 million tons of furniture,
        that's roughly 5% of everything that ends up there. According to the
        EPA, most of this mountain of solid waste could very easily be recycled.
        That's why my mission is to not refinish, and recycle this furniture,
        but to breath new life into a peice that is destined for the landfill."
      </p>
      <p className="quoteName">- Mo Mahal</p>

      <img className="main--img" src={"./images/main-img2.jpg"} />
      <hr />
      <h2 className="sub-heading">About Mo Mahal</h2>
      <div className="about--container">
        <img
          className="about--container-item about--image"
          src={"./images/momo.jpg"}
        />
        <p className="about--container-item about--para">
          It all started when my family and I moved to Naperville. We had this
          new house that needed to be furnished, but by circumstance we had no
          furnuture of our own so I began browsing Facebook Marketplace. At
          first, I became pretty adept at pricing the items I found, for example
          I'd see someone selling a peice for $75, knowing well that I could
          flip it easily for $400. Then I thought, 'I could touch this up with a
          wood marker', and I was purchasing less than ideal peices and turning
          them into something better. This soon turned into full blown
          refinishing with painting, sanding and everything in between. What
          originally piqued my interest became my passion and business: turning
          long forgotten, long undervalued peiced of furniture into something
          beautiful that can add tremedous value to people's living spaces.
        </p>
      </div>

      <hr />

      <h2 className="sub-heading">More From Mo Mahal</h2>

      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Home;
