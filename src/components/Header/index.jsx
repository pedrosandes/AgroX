import { useState } from "react"

/* Assets  */
import Brand from "../../assets/svg/brand.svg"

/* Styles */
import "./styles.css"

/* Components  */
import HandleMenu from "../HandleMenu"

/* Content  */
import Links from "./content"

const Header = () => {

  const [menuVisibility, setMenuVisibility] = useState(false)

  function handleClickMenu() {
    setMenuVisibility(!menuVisibility)
  }

  function handleClickLink() {
    setMenuVisibility(false)
  }

  return (
    <header className="c-header">
      <img className="brand" src={Brand} alt="Logo da AgroX" />
      <HandleMenu handleStateMenu={menuVisibility} onClick={handleClickMenu}/> 
      <nav className={`c-nav ${menuVisibility ? 'active' : ''}`}>
        <ul className="c-menu">
          {Links.map(({id, text, ref}) => (
          <li onClick={handleClickLink}  className="c-menu-item" key={id}>
             <a className="c-menu-link" href={`#${ref}`}>{text}</a>
           </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header