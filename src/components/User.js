import {useState, useEffect} from "react";


function User({name, location}) {

    useEffect(()=>{
       const timer =  setInterval(()=> console.log("functional component"), 2000);

        return () => {
            clearInterval(timer);
            console.log("useEffect return");
        }
    }, [])

    const [count] = useState(0);

    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Location: {location}</h1>
            <h1>Work Status: {count}</h1>
        </div>
    )
}

export default User;