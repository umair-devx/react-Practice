import React from 'react'
import { Heart} from "lucide-react"

const App = (props) => {
  return (


   <div className="card">
      <img
        className="product-img"
        src={props.img}
        alt="iPhone"
      />

      <div className="card-body">
        <div className="top-row">
          <h2>{props.price}</h2>
          <Heart className="icon" size={20} />
        </div>

        <p className="title">{props.titel}</p>
        <p className="location">{props.location}</p>
        <p className='listed'>{props.listed}</p>
      </div>
    </div>
  )
  
}

export default App


