/* Styles  */
import "./styles.css"

const Button = ({type, children}) => {
  return (
    <button className={`btn ${type ? `btn-${type}` : ''}`}>{children}</button>
  )
}

export default Button