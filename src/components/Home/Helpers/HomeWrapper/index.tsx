import { Link } from "react-router-dom";

export const HomeWrapper = () => {
    return (
        <div className="home-wrapper">
            <h5>I am</h5>
            <h1>
                Umer
                <br /> <span>Sacirovic</span>
            </h1>
            <p>
                a proficient and enthusiastic web developer, I specialize in
                harnessing the power of HTML, CSS, JavaScript, Typescript, and
                the React/React Native frameworks. My skills and passion drive
                me to craft innovative and engaging digital experiences.
            </p>
            <br />
            <p style={{ textAlign: "end" }}>
                To learn more{" "}
                <Link className="aboutBtn" to="/about">
                    About
                </Link>{" "}
                me
            </p>
        </div>
    );
};
