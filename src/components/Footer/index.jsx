/* Assets  */
import Brand from "../../assets/svg/brand.svg"
import ArrowTop from "../../assets/svg/arrow-top.svg"

/* Styles  */
import "./styles.css"

const Footer = () => {

  function handleClickToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="c-footer">
      <div className="c-imgs">
        <img src={Brand} alt="Foto da logo da AgroX" />
        <img src={ArrowTop} alt="Icone de arrow" onClick={handleClickToTop}/>
      </div>
      <span className="copyright">© Copyright AgroX todos direitos reservados</span>
    </footer>
  )
}

export default Footer