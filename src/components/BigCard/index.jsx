/* Assets  */
import Drone from "../../assets/img/drone.png"

/* Components */
import Button from "../Button"

/* Styles  */
import "./styles.css"

const BigCard = () => {
  return (
   <section className="c-bigcard">
      <div className="c-img">
        <img src={Drone} alt="Imagem de um drone" />
      </div>
     <div className="c-texts">
       <h1 className="title">Agrox é um sistema inteligente de monitoramento</h1>
       <p className="text">
         A AgroX é um sistema de monitoramento para 
          fazendas de pequenos, médios e grandes portes. 
          Tenha controle de tudo e de todos os animais
          em seu dispositivo.
       </p>
     </div>
     <Button type="primary">Conferir planos</Button>
   </section>
  )
}

export default BigCard