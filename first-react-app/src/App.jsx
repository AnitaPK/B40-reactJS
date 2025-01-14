import "./App.css"
import GreetingFromClass from "./components/GreetingFromClass"
import Greetings from "./components/Greetings"
import Virat from "./components/Virat"
import Button from './components/Button'
import LifeCycle from "./components/LifeCycle"
import Navbar from "./components/Navbar/Navbar"
import Counter from "./components/Counter"
import Calculator from "./components/Calculator"
import ConditionMessage from "./components/ConditionMessage"



function App() {
  
  return (
    <>
    <ConditionMessage />
    <div style={{padding:"10px"}}>
    <Calculator />
    </div>
    <Counter />
    <Navbar />
    <LifeCycle />
    <GreetingFromClass name1={{fname:"Girish", lname:"Jagtap"}} />
      <h1 style={{color:"red", backgroundColor:"#000"}}>Hello world now im in ReactJS With B40 with excitment</h1>
      
      <p className="paraClassOne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente repellat nulla nihil fugit culpa dolor eum error deleniti est.</p>
      <Greetings name1="Anushka" name2="Kadu"/>
      <Greetings name1="Maithily" name2="Shinde" />

      <Greetings name1="Kajal" name2="Kadlag" />

      <Virat user1={{name1:"Virat kohli",age:35}} />
      <Button nameButton={["Anushka","Maithily", "Kajal"]} />

    </>
  )
}

export default App
