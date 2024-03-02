import Menu from "@/Components/Menu/Menu";
import juanImage from "../../../../../../public/images/juan.jpeg";
import "./styles.css";
import Image from "next/image";

export default function NuestrosColumnistas() {
  return (
    <div>
      <Menu title="EL NEGOCIO" />
      <section className="about-us section-container">
        <h1>LOS 2 MALES DE MODA EN COLOMBIA</h1>

        <div className="content-wrapper">
          <article className="about-item">
            <div className="image-container">
              <Image src={juanImage} alt="Sobre nosotros" />
            </div>
            <div>
              <p>
                <data>13 de Octubre, 2020</data>
              </p>
              <p>
                Nos estamos adaptando a un país en crisis económica a causa de
                DOS MALES, uno tradicional, y otro de actualidad, ambos
                comúnmente conocidos, y que nos han adentrado a una nueva
                “normalidad”; el primero de ellos, un mal que ha sido
                desarrollado a través de la historia de Colombia, y que a pesar
                de estar “comprometidos” en su contra desde hace décadas, son
                más los esfuerzos a su favor que aquellos que lo combaten, lo
                llamamos: corrupción.
              </p>
              <p>
                El segundo de ellos, un mal que jamás esperamos tener, que llegó
                para quedarse, y que de forma invisible y paulatina se ha
                apoderado de gran parte de los recursos públicos de Colombia, de
                forma directa o indirecta, que más allá de congelar y retrasar
                el desarrollo económico de Colombia, ha afectado la salud de
                muchos hogares colombianos y del cual debemos tener
                “AUTOCUIDADO”; los expertos lo llaman: Coronavirus COVID-19.
              </p>
              <p>
                <strong>
                  ¿Quién podría imaginar que estos 2 males de moda podrían
                  combinarse?{" "}
                </strong>
                ¿Qué clase de seres son capaces de utilizar el COVID19 para sus
                fines de corrupción? ¿Cómo pasa por la cabeza de un colombiano
                doblar el costo o sobrefacturar productos y servicios que sirven
                para salvar vidas?
              </p>
              <p>
                Conocemos la respuesta a cada una de esas preguntas, por lo
                cual, surge una nueva inquietud ¿nos sorprende que esto suceda
                en Colombia? Lastimosamente nuestra respuesta es NO, estamos
                acostumbrados a estrenar escándalos de corrupción de forma
                mensual, nuestros noticieros nacionales se han convertido en una
                cartelera de cine que continuamente lanza nuevos espectáculos a
                todos los colombianos, una tendencia que se ha aumentado
                significativamente en este 2020, nuevos estrenos de entramados
                de sobornos, tráfico de influencias, sobrefacturación de
                productos, masacres, actos de vandalismo y abuso de autoridad, y
                otros más clásicos como la adjudicación de contratos a dedo y el
                clientelismo político.
              </p>
              <p>
                Según el Índice de Percepción de la Corrupción, Colombia ocupa
                el puesto 96 entre 180 países, con un puntaje de 37 puntos sobre
                100, en donde 0 significa una corrupción muy elevada y 100 la
                ausencia de corrupción; somos vecinos en materia de corrupción
                con países como Ethiopia, Vietnam, Tanzania y Gambia.
              </p>

              <p>
                La puntuación media asignada para el continente americano es de
                43 puntos; sorpresivamente no nos encontramos en los últimos
                lugares de Latinoamérica, tres vecinos nos llevan ventaja,
                Nicaragua con un puntaje de 22/100, Haití 18/100 y nuestra
                vecina Venezuela 16/100, sin embargo, al paso que vamos, es como
                si quisiéramos ingresar en la competencia de quien aumenta sus
                índices de corrupción.
              </p>
              <p>
                Según diarios internacionales, Colombia se encuentra estacada en
                la lucha contra la corrupción, debido a la existencia de casos
                de gran magnitud de corrupción en diferentes sectores como la
                Justicia, inversión pública, salud, educación e infraestructura,
                aunado de la inexistencia y ausencia de sanciones efectivas en
                los grandes casos, decantado en “impunidad”.
              </p>

              <p>
                No es otro el objetivo del presente que recordar a cada uno de
                los colombianos, especialmente a aquellos que cuentan con
                posiciones privilegiadas y el manejo y administración de
                recursos públicos, que así como esta en furor el autocuidado
                para contrarrestar el COVID, pues tememos de las consecuencias
                de ser infectados por el virus, deberíamos comprometernos para
                implementar también ese <strong>AUTOCUIDADO </strong> en aquel
                mal que por desgracia nos ha acompañado durante décadas, la
                nefasta <strong>CORRUPCIÓN</strong>¸ equiparable a un virus, al
                cual deberíamos temer, con la plena certeza que es mucho más
                malévolo y destructivo que el mismo COVID.
              </p>

              <p className="autor-col">
                {" "}
                <a
                  href="/nuestros-columnistas/Juan-Leon/"
                  className="autor-col"
                >
                  by: Juan León
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
