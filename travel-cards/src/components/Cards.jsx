import React, { useEffect, useState } from "react";
import useCustomCards from "./useCustomCards";
import Card from "./Card";

const Cards = () => {
  const { cards, err, loading, fetchCards, deleteCard, refreshPage } =
    useCustomCards(
      "https://674e84f1635bad45618eebc1.mockapi.io/api/v1/travel-cards"
    );
    const [len,setLength] = useState(0)
    // useEffect(()=>{
        // setLength(cards.length)
    // },[])
    console.log(cards);
  if (loading) return <p>Loading....</p>;

  if (err) return <p>Error while loading...</p>;

  return (
    <>
     {cards.length && <button onClick={()=>refreshPage()}>Refresh Page</button>}

   
        <div className="container">
      <div className="row">
                {cards.map((card, index) => (
                    <Card card={card} key={index} handleDelete={deleteCard(card.id)}/>
                ))}
      </div>
      </div>

    </>
  );
};

export default Cards;
