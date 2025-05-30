import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <div className="landing-content">
                <h1 className="hero-title">POC: Automating Test Procedures with AI and NLP</h1>
                <p className="hero-subtitle">
                    Experience DUT automation with our NLP-enabled test assistant.
                </p>
                <button className="get-started-btn" onClick={() => navigate("/chatbot")}>
                    Get Started
                </button>
            </div>
            <div className="svg-wave">
                <svg viewBox="0 0 1440 320">
                    <path
                        fill="#124191"
                        fillOpacity="1"
                        d="M0,128L40,138.7C80,149,160,171,240,186.7C320,203,400,213,480,202.7C560,192,640,160,720,138.7C800,117,880,107,960,122.7C1040,139,1120,181,1200,202.7C1280,224,1360,224,1400,224L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
