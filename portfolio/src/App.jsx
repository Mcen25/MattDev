import { createSignal } from "solid-js";
import styles from "./App.module.css";

function App() {
  const [theme, setTheme] = createSignal("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div class={styles.app} data-theme={theme()}>
      {/* Navigation */}
      <nav class={styles.nav}>
        <div class={styles.logo}>Matthew En</div>
        <div class={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} class={styles.themeToggle}>
            {theme() === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      <section id="home" class={styles.hero}>
        <div class={styles.heroGrid}>
          <div class={styles.gridItem}></div>
          <div class={styles.gridItem}></div>
          <div class={styles.gridItem}></div>
          <div class={styles.gridItem}></div>
          <div class={styles.heroContent}>
            <h1>Hello, I'm Matthew En</h1>
            <p>A passionate developer building amazing things</p>
            <button class={styles.primaryBtn}>Get In Touch</button>
          </div>
          <div class={styles.gridItem}></div>
          <div class={styles.gridItem}></div>
          <div class={styles.gridItem}></div>
          <div class={styles.gridItem}></div>
        </div>
      </section>

      <section id="about" class={styles.about}>
        <h2>About Me</h2>
        <div class={styles.aboutContent}>
          <div class={styles.aboutText}>
            <p></p>
            <div class={styles.skills}>
              <h3>Skills</h3>
              <div class={styles.skillTags}>
                <span>JavaScript</span>
                <span>SolidJS</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" class={styles.projects}>
        <h2>My Projects</h2>
        <div class={styles.projectGrid}>
          <div class={styles.projectCard}>
            <div class={styles.projectImg}>Project Image</div>
            <h3>Project Title</h3>
            <p></p>
            <div class={styles.projectLinks}>
              <a href="#" class={styles.projectLink}>
                View Project
              </a>
              <a href="#" class={styles.projectLink}>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class={styles.contact}>
        <h2>Get In Touch</h2>
        <div class={styles.contactContent}>
          <form class={styles.contactForm}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" class={styles.primaryBtn}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer class={styles.footer}>
        <div class={styles.socialLinks}>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
        <p>© 2024 Matthew En. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
