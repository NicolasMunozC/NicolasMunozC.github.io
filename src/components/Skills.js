import reactIcon from "../assets/img/react.svg";
import htmlIcon from "../assets/img/html5.svg";
import bootstrapIcon from "../assets/img/bootstrap.svg";
import cIcon from "../assets/img/c.svg";
import chrakraUIIcon from "../assets/img/chakraui.svg";
import css3Icon from "../assets/img/css3.svg";
import expressIcon from "../assets/img/express.svg";
import javascriptIcon from "../assets/img/javascript.svg";
import mongodbIcon from "../assets/img/mongodb.svg";
import nextIcon from "../assets/img/nextdotjs.svg";
import nodeIcon from "../assets/img/nodedotjs.svg";
import shopifyIcon from "../assets/img/shopify.svg";
import swiftIcon from "../assets/img/swift.svg";
import tailwindcssIcon from "../assets/img/tailwindcss.svg";
import woocommerceIcon from "../assets/img/woocommerce.svg";
import wordpressIcon from "../assets/img/wordpress.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = ( {skillsRef }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills" ref={skillsRef}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I'm at junior level for the moment,<br></br>and for that reason I feel some Impostor Syndrome. <br></br> But I'm working on it so hard!</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactIcon} alt="React JS" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={htmlIcon} alt="HTML5" />
                                <h5>HTML 5</h5>
                            </div>
                            <div className="item">
                                <img src={css3Icon} alt="CSS3" />
                                <h5>CSS 3</h5>
                            </div>
                            <div className="item">
                                <img src={javascriptIcon} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrapIcon} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={cIcon} alt="C" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={chrakraUIIcon} alt="Chakra UI" />
                                <h5>Chakra UI</h5>
                            </div>
                            <div className="item">
                                <img src={expressIcon} alt="Express" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={mongodbIcon} alt="Mongo DB" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={nextIcon} alt="Next JS" />
                                <h5>Next JS</h5>
                            </div>
                            <div className="item">
                                <img src={nodeIcon} alt="Node JS" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={shopifyIcon} alt="Shopify" />
                                <h5>Shopify</h5>
                            </div>
                            <div className="item">
                                <img src={swiftIcon} alt="Swift" />
                                <h5>Swift (Learning)</h5>
                            </div>
                            <div className="item">
                                <img src={tailwindcssIcon} alt="Tailwind CSS" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={woocommerceIcon} alt="WooCommerce" />
                                <h5>WooCommerce</h5>
                            </div>
                            <div className="item">
                                <img src={wordpressIcon} alt="Wordpress" />
                                <h5>Wordpress</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="backgroundSharp" />
    </section>
  )
}
