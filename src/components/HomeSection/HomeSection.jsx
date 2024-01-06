import "./HomeSection.css";
import Typewriter from "typewriter-effect";
import MyResume from "../Navbar/MyResume.pdf";

function HomeSection() {
  const downloadHandle = () => {
    const link = document.createElement("a");
    link.download = "Anjali-Resume.pdf";
    link.href = MyResume;
    link.setAttribute("class", "resume-link-2");
    link.click();

    window.open(
      "https://drive.google.com/file/d/1cfCSSHIZP0cKrhu2S4HdFrmXvRk_ecme/view?usp=sharing",
      "_blank"
    );
  };

  
  return (
    <div id="home">
      <div id="left_home">
        <div>
          <h2 className="Basic">
            Namaste, Hi There!{""}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h2>
          <h1 id="user-detail-name">Anjali Sinha</h1>
          <p>
            {" "}
            I am a proactive and adaptable professional, eager to excel in
            tackling new challenges. I am dedicated to achieving high-quality
            results because I genuinely enjoy learning and growing. With a
            positive approach and a focus on personal development, I am ready to
            contribute meaningfully and achieve success.
          </p>
          <h3>
            {/* <h3>I am a Full Stack Web Developer</h3> */}
            <span>
              <Typewriter
                options={{
                  strings: ["Hello Folks...", "Full Stack Web Developer!"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h3>
          <div className="home_button">
            <button id="resume-button-2" onClick={downloadHandle}>
              Resume
            </button>
          </div>
        </div>
      </div>
      <div id="right_home">
        <img src="./Images/hero.jpg" alt="" className="home-img" />
      </div>
    </div>
  );
}

export default HomeSection;
