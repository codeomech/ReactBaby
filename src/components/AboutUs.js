import UserClass from "./ClassBasedComp";
const AboutUs = () => {

    return (
        <div className="about-body">
            <h1>About us</h1>
            <h2>This is Namste React</h2>
            <UserClass name={"Harshit React"} location={"PUNE"} />
        </div>
    )
}

export default AboutUs;