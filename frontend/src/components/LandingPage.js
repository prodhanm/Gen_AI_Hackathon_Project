import "../style/LandingPage.css";
import Hero from "./Hero";
import Chat from "./Chat";

const LandingPage = () => {
  return (
    <div>
      <header>
        <h3>LOGO</h3>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">ChatBot</a>
          <a href="#">Login</a>
        </nav>
      </header>
      <Hero />
      <Chat />
    </div>
  );
};

export default LandingPage;
