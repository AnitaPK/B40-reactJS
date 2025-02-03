import React,{ useReducer } from 'react'


const initialState = {coins:10,msg:"Wellcome"}

function gamingForCoin (state,action){
    switch (action.type) {
        case "collect_coin":
            return {coins:state.coins + 5, msg:"SugarCrush"};
        case "GAURAV":
            return {coins:state.coins-2, msg:"You Lose 2 Coins"}
        default:
            return state;
    }
}

const CoinComponent = () => {
    const [state,dispatch] = useReducer(gamingForCoin, initialState)
  return (
    <div>
      <p>Coin:{state.coins}</p>
      <h3>{state.msg}</h3>
      <button onClick={()=>{dispatch({type:"collect_coin"})}}>Collect Coin 🪙</button>
      <button onClick={()=>{dispatch({type:"GAURAV"})}}>Lose Coin 😢</button>
    </div>
  )
}

export default CoinComponent
