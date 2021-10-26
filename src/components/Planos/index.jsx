/* Components  */
import CardPlanos from "../CardPlanos"

/* Styles  */
import "./styles.css"

const Planos = () => {
  return (
   <section id="planos"  className="c-planos">
     <div className="c-title">
      <span className="title">Planos</span>
     </div>
    <div className="planos">
      <CardPlanos
       title="Plano Mensal"
       price="3.999,00"
      />
      <CardPlanos 
        title="Plano Trimestral"
        price="5.999,00"
      />
    </div>

   </section>
  )
}

export default Planos