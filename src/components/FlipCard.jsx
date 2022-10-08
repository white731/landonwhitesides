
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
            <p style={{fontSize:"15pt"}}>{description}</p>
            <p style={{fontSize:"15pt"}}>{description2 || ""}</p>
            <p style={{fontSize:"15pt"}}>{description3 || ""}</p>
            <p style={{fontSize:"15pt"}}>{description4 || ""}</p>
            <p style={{fontSize:"15pt"}}>{description5 || ""}</p>
          </div>
        </div>
      </div>
    )
}