import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

            <a href="#/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#/">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#/">
              <i className="fa fa-twitter-square"></i>
            </a>
            <a href="#/">
              <i className="fa fa-youtube-square"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'M <span className="highlighted-text">Mijan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Development ",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "FontEnd Development",
                    1000,
                    "MERN Stack Development",
                    1000,
                    "Background Development",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="resume.pdf" download='Mijan resume.pdf'>
                <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
