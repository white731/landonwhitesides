import React from "react"


export const FlipCard = (props) => {

    const {image, alt, title, component} = props

    return(
        <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img className="main-image" src={image} alt={alt}/>
          </div>
          <div className="flip-box-back">
            <h2>{title}</h2>
            {component}
          </div>
        </div>
      </div>
    )
}