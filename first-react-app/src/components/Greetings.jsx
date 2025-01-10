import React from "react";


function Greetings(props){
    console.log("props",props);
    Addition(4,5);
    return(
        
        <>
        <button onClick={()=>Addition(2,3)}>Show Addition</button>
            <h3>Hellow {props.name1} {props.name2}</h3>
            {/* <p>{props.user1.name1}</p> */}
        </>
    )
    
}
function Addition(a,b){
    console.log(a+b)
}
export default Greetings;