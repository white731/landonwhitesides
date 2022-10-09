
export const FlipCard = (props) => {

    const {image, alt, title, description, description2, description3, description4, description5} = props

    return(
        <div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <img class="main-image" src={image} alt={alt}/>
          </div>
          <div class="flip-box-back">
            <h2>{title}</h2>
            <p class="paragraph">{description}</p>
            <p class="paragraph">{description2 || ""}</p>
            <p class="paragraph">{description3 || ""}</p>
            <p class="paragraph">{description4 || ""}</p>
            <p class="paragraph">{description5 || ""}</p>
          </div>
        </div>
      </div>
    )
}