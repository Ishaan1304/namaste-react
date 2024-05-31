import React from "react";
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }
    }

    async componentDidMount()
    {
        //console.log("child component did mount");
        const data = await fetch("https://api.github.com/users/Ishaan1304");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        });
    }

    componentDidUpdate()
    {
        console.log("Component did update");
    }

    componentWillUnmount()
    {
        console.log("Component will unmount");
    }

    render()
    {
        const {name,location,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name : {name} Ishaan Gangrade</h2>
                <h2>Location : {location} Ujjain, India</h2>
                <h3>Contact: ishaangangrade1@gmail.com</h3>
            </div>
        )
    }
}
export default UserClass;