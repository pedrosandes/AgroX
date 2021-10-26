/* Components  */
import Button from "../Button"

/* Styles  */
import "./styles.css"

const CardPlanos = ({title, price}) => {
  return (
    <section className="c-card-planos">
    <div className="c-card-header"></div>
    <div className="c-card-body">
      <span className="title">{title}</span>
      <p className="text">Acesso a todos os benefícios.</p>
      <p className="price">R$ {price}</p>
      <Button type="primary">Entrar em contato</Button>
    </div>
  </section>
  )
}

export default CardPlanos