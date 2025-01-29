import React, { useEffect } from "react";
import { useState } from "react";

const useCustomProductList = (urlfromComponent) => {
  console.log(urlfromComponent);
  const [cards, setCards] = useState();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchCards = async() => {
    try {
      await fetch(urlfromComponent)
        .then((responce) => responce.json())
        .then((data) => setCards(data));
      setLoading(false);
      setErr(false);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };
  useEffect(() => {
    fetchCards();
  }, [urlfromComponent]);

  const deleteCard = (ID) => {
    setCards(cards.filter((card) => card.id !== ID));
  };

  const refreshPage = () => {
    fetchCards();
  };
  console.log(cards);
  return { cards, err, loading, fetchCards, deleteCard, refreshPage };
};

export default useCustomProductList;
