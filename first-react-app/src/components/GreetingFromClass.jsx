import React from "react";


class GreetingFromClass extends React.Component{

    render(){
        return <> <h1>{this.props.name1.fname}</h1>
                    <h2>{this.props.name1.lname}</h2>
        </>
    }
}

export default GreetingFromClass;