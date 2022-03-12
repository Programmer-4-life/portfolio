import "./About.css"
import Me from "../../img/profile.jpg"
const About =() => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} 
                    alt="photography pic" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                I’m a Front-End Developer located in Pakistan. 
                I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                </p>
                <p className="a-desc">
                Well-organised person, problem solver, independent employee with high attention to detail.
                Fan of cricket, outdoor activities and Gym.<br/>
                Interested in the entire frontend spectrum and working on ambitious projects with positive people.<br/><br/></p>
                <p className="a-color">Let’s make something special.</p>
            </div>
        </div>
    )
}
export default About