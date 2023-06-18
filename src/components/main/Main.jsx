// home
import Arrow from 'src/assets/icons/icon-arrow-down.svg'
import ImgHeaderMobile from 'src/assets/images/mobile/image-header.jpg'
import ImgHeaderDesktop from 'src/assets/images/desktop/image-header.jpg'
// about
import ImgTransformMobile from 'src/assets/images/mobile/image-transform.jpg'
import ImgTransformDesktop from 'src/assets/images/desktop/image-transform.jpg'
import ImgStandOutMobile from 'src/assets/images/mobile/image-stand-out.jpg'
import ImgStandOutDesktop from 'src/assets/images/desktop/image-stand-out.jpg'
// services
import ImgServicesMobile_1 from 'src/assets/images/mobile/image-graphic-design.jpg'
import ImgServicesDesktop_1 from 'src/assets/images/desktop/image-graphic-design.jpg'
import ImgServicesMobile_2 from 'src/assets/images/mobile/image-photography.jpg'
import ImgServicesDesktop_2 from 'src/assets/images/desktop/image-photography.jpg'
// client
import ClientEmily from 'src/assets/images/image-emily.jpg'
import ClientJennie from 'src/assets/images/image-jennie.jpg'
import ClientThomas from 'src/assets/images/image-thomas.jpg'
// projects
import ImgMilkbottlesMobile from 'src/assets/images/mobile/image-gallery-milkbottles.jpg'
import ImgMilkbottlesDesktop from 'src/assets/images/desktop/image-gallery-milkbottles.jpg'
import ImgOrangeMobile from 'src/assets/images/mobile/image-gallery-orange.jpg'
import ImgOrangeDesktop from 'src/assets/images/desktop/image-gallery-orange.jpg'
import ImgConeMobile from 'src/assets/images/mobile/image-gallery-cone.jpg'
import ImgConeDesktop from'src/assets/images/desktop/image-gallery-cone.jpg'
import ImgSugarMobile from 'src/assets/images/mobile/image-gallery-sugar-cubes.jpg'
import ImgSugarDesktop from 'src/assets/images/desktop/image-gallery-sugarcubes.jpg'

const Client = ({ imgUrl, name, context, position}) => {
  return (
    <>
      <li className="client">
        <div className="client__img">
          <img src={imgUrl} alt={name} />
        </div>
        <p className="client__context" data-reveal>{context}</p>
        <h5 className="client__name" >{name}</h5>
        <p className="client__position" >{position}</p>
      </li>
    </>
  )
}

const Project = ({ href, mediaUrl, desktopUrl}) => {
  return (
    <>
      <a href={href} className="projects__img">
        <source media="(min-width: 1024px)" srcset={desktopUrl}/>
        <img src={mediaUrl} alt="media-img"/>
      </a>
    </>
  )
}

function Main() {
  return (
    <>
      <main className="main">
        {/* home */}
        <section className="home" id="home">
          <picture>
            <source media="(min-width: 1024px)" srcset={ImgHeaderDesktop} />
            <img src={ImgHeaderMobile} alt="img-header" className="img-header"/>
          </picture>
          <div className="title">
            <h1 data-reveal>WE ARE CREATIVES</h1>
            <img src={Arrow} alt="arrow" className="arrow"/>
          </div>
        </section>

        {/* about */}
        <section className="about" id="about">
          <div className="about__img">
            <source media="(min-width: 1024px)" srcset={ImgTransformDesktop} />
            <img src={ImgTransformMobile} alt="img-transform" />
          </div>
          <div className="about__content">
            <h2 data-reveal>Transform your brand</h2>
            <p data-reveal>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a href="#home" data-reveal>LEARN MORE</a>
          </div>
          <div className="about__img">
            <source media="(min-width: 1024px)" srcset={ImgStandOutDesktop} />
            <img src={ImgStandOutMobile} alt="img-stand-out" />
          </div>
          <div className="about__content">
            <h2 data-reveal>Stand out to the right audience</h2>
            <p data-reveal>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
            <a href="#home" className="soft-red" data-reveal>LEARN MORE</a>
          </div>
        </section>

        {/* services */}
        <section className="services" id="services">
          <div className="services__box">
            <div className="services__img">
              <picture>
                <source media="(min-width: 1024px)" srcset={ImgServicesDesktop_1} />
                <img src={ImgServicesMobile_1} alt="graphic-design" />
              </picture>
            </div>
            <div className="services__content">
              <h4 data-reveal>Graphic Design</h4>
              <p data-reveal>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
          </div>
          <div className="services__box">
            <div className="services__img">
              <picture>
                <source media="(min-width: 1024px)" srcset={ImgServicesDesktop_2} />
                <img src={ImgServicesMobile_2} alt="photography" />
              </picture>
            </div>
            <div className="services__content">
              <h4 data-reveal>Photography</h4>
              <p data-reveal>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
          </div>
        </section>
        
        {/* testimontals */}
        <section className="testimonials" id="testimonials">
          <h4 className="testimonials__title" data-reveal>CLIENT TESTIMONIALS</h4>
          <ul className="testimonials__list">
            <Client
              imgUrl={ClientEmily}
              name="Emily R."
              context="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              position="Marketing Director"
            />
            <Client
              imgUrl={ClientThomas}
              name="Thomas S."
              context="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
              position="Chief Operating Officer"
            />
            <Client
              imgUrl={ClientJennie}
              name="Jennie F."
              context="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
              position="Business Owner"
            />
          </ul>
        </section>
        {/* projects */}
        <section className="projects" id="projects">
          <Project 
            href='#home'
            mediaUrl={ImgMilkbottlesMobile}
            desktopUrl={ImgMilkbottlesDesktop}
          />
          <Project 
            href='#home'
            mediaUrl={ImgOrangeMobile}
            desktopUrl={ImgOrangeDesktop}
          />
          <Project 
            href='#home'
            mediaUrl={ImgConeMobile}
            desktopUrl={ImgConeDesktop}
          />
          <Project 
            href='#home'
            mediaUrl={ImgSugarMobile}
            desktopUrl={ImgSugarDesktop}
          />
        </section>
      </main>
    </>
  )
}


export default Main