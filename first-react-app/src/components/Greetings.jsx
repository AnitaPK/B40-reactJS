import React from "react";


function Greetings(props){
    console.log("props",props);
    return(
        <>
            <h3>Hellow {props.name1} {props.name2}</h3>
            {/* <p>{props.user1.name1}</p> */}
        </>
    )
}

export default Greetings;