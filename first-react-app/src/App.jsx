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
import AllFiles from "./ToDoList/AllFiles"
import { useEffect } from "react"
import { useState } from "react"
import ProjectFetch from "./fetchProjectList/ProjectFetch"
import AjeetWithQuote from './fetchProjectList/FetchThroughAxios'
import Timer from "./components/TimeOne"
import InputRefCompo from "./components/InputRefCompo"
import ProductList from "./customHook/ProductList"
import QuotesComponent from "./customHook/QuotesComponent"
import CoinComponent from "./useReducerCoin/CoinComponent"

function App() {
  const [list1,setList1] = useState(['orange'])
  const [list2,setList2] = useState(['apple', 'mango'])

  function getfruits(){
    // setList1([list1.concat(list2)])
    setList1([...list1, ...list2])
    // setList1([...list1,'banana'])
  }
  useEffect(()=>{
    // console.log("Hello0000")
    getfruits();
    console.log("list of fruits in useEffect",list1);
  },[])
  // useEffect(()=>{},[])

  console.log("list of fruits after useEffect",list1);

  return (
    <>
    <CoinComponent />
    {/* <QuotesComponent /> */}
    {/* <ProductList /> */}
    <Timer />
    <InputRefCompo />
{/* <AjeetWithQuote /> */}
    <AllFiles />
    <ul>
      {list1.map((fruit, index)=>(
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    <ProjectFetch />
    {/* <ConditionMessage />
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
      <Button nameButton={["Anushka","Maithily", "Kajal"]} /> */}

    </>
  )
}

export default App
