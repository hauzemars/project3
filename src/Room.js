import React, {useState} from "react";
import './Room.css'

function Room() {
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(22)
    
    

    return(

        <div className={`roo, ${isLit? "lit" : "dark"}`}>

            this room is: {isLit? "lit": "dark"}
            <br/>
            age: {age}
            <br/>
            <br/>
            <button onClick= { ()=>{
                
                setLit(!isLit)

            }}>Toggle Light</button>

            <button onClick={ ()=>{

                setAge(++age);

            }}>Update Age</button>
            

        </div>
    )
}
export default Room;
