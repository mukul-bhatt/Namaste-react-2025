import User from "./User"; 
import UserClass from "./UserClass";
import {Component} from "react";


class AboutUs extends Component{

    constructor(props){
        super(props);
        console.log("constructor")
        this.state = {
            userInfo: {
                name: "mukul",
                location: "delhi"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mukul-bhatt");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })

        // this.timer = setInterval(()=>console.log("Namaste React"), 1000)

        console.log("compoenent did mount")
        
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentWillUnmount(){
        console.log("component will unmount")
        // clearInterval(this.timer)
    }

    render(){
        console.log("render");
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div>
                {/* <UserClass name={name} location={location} url={avatar_url}/> */}
                <User  name={name} location={location} url={avatar_url}/>
            </div>
        )
    }
}
export default AboutUs;