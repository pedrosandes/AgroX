/* Components  */
import Button from "../Button"

/* Styles  */
import "./styles.css"

const CardSistemas = ({title, image, text, ...props}) => {
  return (
    <div className="card">
        <img className="img"  src={image} {...props} />
        <span className="title">{title}</span>
        <p className="text">
          {text}
        </p>
        <Button type="secundary">Saiba mais</Button>
    </div>
  )
}

export default CardSistemas