
import UserClass from "./UserClass";
import { Component } from "react";

class AboutClass extends Component{

    constructor(props){
        super(props);

        //console.log("Parent constructor");
    }

    render(){

        // console.log("Parent render");
        return(
            <div>
            <h1>About</h1>
            <h2>Hello! this is food app</h2>
            <UserClass name={"xyz class"} location={"Jsr"}/>
        </div>
        )
    };
};


// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>Hello! this is food app</h2>
//             <User name = {"abc func name"}/>
//             <UserClass name={"xyz class name"}/>
//         </div>
        
//     );
// };

export default AboutClass;