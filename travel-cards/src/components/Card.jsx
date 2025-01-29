import React from 'react'
import useCustomCards from './useCustomCards'

const Card = ({card,handleDelete}) => {
    // const {deleteCard} = useCustomCards()

  return (
    <div>
   
          <>
            <div className="col ">
              <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-danger">{card.name}</h5>
                  <p className="card-text">
                    {card.description}
                  </p>
                  <a href="#" className="btn btn-primary" onClick={handleDelete}>
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </>
    </div>
  )
}

export default Card
