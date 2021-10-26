/* Assets  */
import MenuHamburguer from "../../assets/svg/menu-hamburguer.svg"
import Close from "../../assets/svg/close.svg"

/* Styles */
import "./styles.css"

function HandleMenu({handleStateMenu, ...props}) {
  return (
    handleStateMenu 
    ? <img {...props} className="close" src={Close} alt="Menu close" /> 
    : <img {...props} className="menu" src={MenuHamburguer} alt="Menu hamburguer" />
  )
}

export default HandleMenu