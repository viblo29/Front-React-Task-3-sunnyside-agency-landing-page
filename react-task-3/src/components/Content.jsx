import Header from "./Header";
import "./Content.css";
import Arrow from "../../public/white-arrow.svg";
import Infos from "./Infos";
import FeatureCards from "./FeatureCards";
import Footer from './Footer'

function Content() {
  return (
    <>
      <div className="first_page">
        <Header />
        <div className="first_page_title">We are creatives</div>
        <div className="first_page_arrow">
          <img src={Arrow} alt="" />
        </div>
      </div>

      <div className="info_image">
      <Infos
            title="Transform your brand"
            color="#FAD400"
            description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        />
        <div className="info-image"></div>
      </div>

      <div className="info_image2">
      <Infos
            title="Stand out to the right audience"
            color="#FE7766"
            description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
        />
        <div className="info-image2"></div>
      </div>

      <div className="feature-cards">
        <FeatureCards
          title="Graphic Design"
          color="#24554A"
          backgroundImage= "../../public/cherry.svg"
          description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
        <FeatureCards 
          title="Photography"
          color="#052C3B"
          backgroundImage="../../public/mandarin.svg"
          description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </div>
      <Footer />
    </>
  );
}

export default Content;
