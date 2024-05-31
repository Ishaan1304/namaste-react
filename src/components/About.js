import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

/*
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name={"Ishaan Gangrade"} location={"Ujjain"}/>
        </div>
    );
};
*/

class About extends Component
{
    constructor(props)
    {
        super(props);
        //console.log("parent constructor");
    }
    componentDidMount()
    {
        //console.log("parent did mount");
    }
    render()
    {
        //console.log("parent render");
        return (
        <div>
            <h1>About</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    { ({loggedInUser})=> <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name={"Ishaan Gangrade"} location={"Ujjain"}/>
        </div>
        );
    }
}


export default About;