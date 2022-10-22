import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

const Cards = ({title,img,desc,link}) => {
  return (
    <figure
      className="image-block events-card aos-init aos-animate"
      data-aos="fade"
    >
      <img src={img} alt="" />
      <figcaption>
        <h2 className="text-center mb-3">{title}</h2>
        <p>
          {desc}
        </p>
        <Link to={link}>
          <button type="button" className="btn btn-outline-light">
            Know more
          </button>
        </Link>
      </figcaption>
    </figure>
  )
}

export default Cards
