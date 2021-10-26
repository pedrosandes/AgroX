import { useState } from "react"

/* Assets  */
import Arrow from "../../assets/svg/arrow.svg"

/* Assets  */
import "./styles.css"

const DropDown = ({title, text}) => {

  const [visible, setVisible] = useState(false)
  
  function handleClickDropdown() {
    setVisible(!visible)
  }

  return (
    <section className="c-dropdown" onClick={handleClickDropdown}>
      <div className="c-dropdown-header">
          <span className="c-dropdown-title">{title}</span>
          <img className={`c-dropdown-img ${visible ? 'active' : ''}`} src={Arrow} alt="Arrow" />
      </div>
      <p className={`c-dropdown-body ${visible ? 'active' : ''}`}>
        {text}
      </p>
    </section>
  )
}

export default DropDown