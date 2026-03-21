import { jersey } from "./layout";

export default function Home() {
  return (
    <main className={`homePage ${jersey.className}`}>
      <nav className="topBar">
        <div className="navLeft">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About Me</a>
          <a href="/contact">Contact Me</a>
        </div>

        <div className="siteTitle">MyPortfolio</div>
      </nav>

      <section className="heroSection">
        <div className="heroTextBlock">
          <h1>Hello!</h1>
          <p className="introLine">You have found my secret website!</p>

          <div className="dividerBlock">
            <div className="pixelLine"></div>
            <div className="pixelLine short"></div>
          </div>

          <div className="infoBlock">
            <p>Name: Eduardo Valdovinos</p>
            <p>Aspiring Network Engineer!</p>
          </div>

          <div className="heroButtons">
            <a href="/projects" className="pixelButton">
              PROJECTS
            </a>
            <a href="/contact" className="pixelButton">
              CONTACT ME
            </a>
          </div>
        </div>

        <div className="heroMediaBox" aria-label="Future video area"></div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Eduardo Valdovinos</p>

        <div className="footerLinks">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:youremail@email.com">Email</a>
        </div>
      </footer>
    </main>
  );
}