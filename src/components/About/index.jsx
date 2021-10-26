/* Assets  */
import PeopleDrone from "../../assets/img/drone-mao.png"

/* Styles  */
import "./styles.css"

const About = () => {
  return (
    <section id="about" className="c-about">
        <div className="c-title">
          <span className="title">Quem somos</span>
        </div>
        <div className="card">
            <img src={PeopleDrone} alt="Pessoa com o drone na mão" />
            <p className="text">
              A AgroX foi criado com o intuito de 
              modernizar a maneira com que lidamos 
              com o controle do agro negócio, automatizando 
              e  facilitando a maneira que você mantêm o 
              controle da sua fazenda.
            </p>
            <p className="text">
              Nossa meta e deixar o agronegócio mais 
              mordernizado, assim trazendo total controle 
              da sua fazenda no seu dispotivio móvel através 
              dos nossos sistemas.
            </p>
        </div>
    </section>
  )
}

export default About