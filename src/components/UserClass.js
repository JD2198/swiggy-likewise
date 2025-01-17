import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
     
        // create state
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };

        // console.log("Child constructor");
    };

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/JD2198");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }
    
    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render (){

        // console.log("Child render");

        const {name, location} = this.state.userInfo;
        
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: xyz@gmail.com</h4>
            </div>   
        );
    }
}

export default UserClass;