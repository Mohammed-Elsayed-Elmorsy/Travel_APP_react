import React from 'react'
import { Link } from 'react-router-dom'
const CardItem = (props) => {
  return (
    <>
      <li className="card_item">
        <Link to={props.path}>
          <figure className="card_pic" data-category={props.label}>
            <img src={props.src} alt=''/>
          </figure>
          <div className="card_info">
            <p>{props.name}</p>
            <h1>{props.text}</h1>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
