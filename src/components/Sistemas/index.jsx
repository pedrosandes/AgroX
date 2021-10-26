/* Assets */
import Sistema from "../../assets/svg/sistema.svg"
import Drone from "../../assets/img/drone.png"

/* Components  */
import CardSistemas from "../CardSistemas"

/* Styles  */
import "./styles.css"

const Sistemas = () => {
  return (
    <section id="sistemas" className="c-sistemas">
      <div className="c-title">
        <span className="title">Nossos sistemas</span>
      </div>

      <CardSistemas 
        image={Sistema}
        alt="Imagem do nosso sistema de cadastro"
        title="Cadastro"
        text="Temos um sistema de cadastro de animais
        e controle de colheita, para que você tenha
        tudo de forma simples e fácil na palma da sua mão."
       />      
      <CardSistemas 
        image={Drone}
        alt="Imagem de um drone"
        title="Monitoramento"
        text="Temos um sistema de monitoramento 
        através de drones e cameras, onde sua 
        fazenda sera monitorada. Além de segurança 
        para você e seus animais, você tera controle 
        nas suas mãos."
      />   

    </section>
  )
}

export default Sistemas