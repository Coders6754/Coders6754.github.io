import "./AboutSection.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

function AboutSection() {
  return (
    <div id="about" className="about section">
      <h1>About Me</h1>
      <p id="user-detail-intro">
        I am a Full Stack Web Developer specializing in the <b>MERN</b> Stack. I
        successfully completed an extensive{" "}
        <b>Full Stack Web Development Course</b> at Masai. My tech toolbox
        encompasses{" "}
        <b>
          React, Redux, JAVA, Node, Express, Mongoose, MongoDB, HTML, CSS,
          JavaScript, and Git.
        </b>{" "}
        I approach tasks with a positive attitude and a growth mindset. I am
        ready to make a meaningful impact and strive for significant
        achievements.
      </p>
      <div className="education_card">
        <h2>Education</h2>
        <div>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.05,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent />
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="education_box">
                  <h2>Full Stack Web Development</h2>
                  <p>Masai School, Banglore</p>
                  <p>May 2023 - Present | Remote</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent />
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="education_box">
                  <h2>B.E - Electronics & Telecommunication</h2>
                  <p>JSPM University, Pune</p>
                  <p>Jan 2020 - Jun 2024</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent />
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="education_box">
                  <h2>Higher - Secondary (12th)</h2>
                  <p>Kendriya Vidyalaya, 9BRD, AFS, Pune</p>
                  <p>April 2018 - Mar 2020</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
