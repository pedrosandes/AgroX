/* Components  */
import DropDown from "../Dropdown"

/* Styles  */
import "./styles.css"

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="c-diferenciais">
        <section className="c-title-dif">
          <span className="title">Diferenciais</span>
        </section>
        <section className="c-dropdowns">
          <DropDown 
            title="Segurança" 
            text="Com o nosso sistema de monitoramento, 
            você tem total segurança, pois você tem 
            acesso aos drones a qualquer momento."
          />
          <DropDown 
            title="Mobilidade" 
            text="Tenha acesso ao sistema de qualquer dispositivo, você
            pode entrar nele a qualquer dia e em qualquer lugar."
          />
          <DropDown 
            title="Controle" 
            text="Você tem total controle da sua fazenda, 
            podentro cadastrar, monitorar e além dos diversos 
            benefícios do nosso sistema."
          />
          </section>
    </section>
  )
}

export default Diferenciais