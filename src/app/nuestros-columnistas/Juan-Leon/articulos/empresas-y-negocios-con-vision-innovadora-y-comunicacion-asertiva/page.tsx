import Menu from "@/Components/Menu/Menu";
import juanImage from "../../../../../../public/images/juan.jpeg";
import "./styles.css";
import Image from "next/image";

export default function NuestrosColumnistas() {
  return (
    <div>
      <Menu title="EL NEGOCIO" />
      <section className="about-us section-container">
        <h1>
          EMPRESAS Y NEGOCIOS CON VISIÓN INNOVADORA Y COMUNICACIÓN ASERTIVA
        </h1>

        <div className="content-wrapper">
          <article className="about-item">
            <div className="image-container">
              <Image src={juanImage} alt="Sobre nosotros" />
            </div>
            <div>
              <p>
                <data>26 de Marzo, 2021</data>
              </p>
              <p>
                El mundo de los negocios se encuentra en una continua evolución
                a través del paso del tiempo. El modelo de empresa que operaba
                hace 30 años es radicalmente diferente al modelo actual, las
                costumbres de antaño han sido evaluadas y han dado paso a la
                modernidad y tecnología generando que las empresas cada vez se
                vuelvan más vivas, humanas, dinámicas y flexibles.
              </p>

              <p>
                Los cambios generacionales, la tecnología y la continua
                trasformación del mercado son tres de las principales razones
                por las cuales las compañías han debido transformarse, abriendo
                un mundo lleno de posibilidades que probablemente no habrían
                sido evaluadas y que permiten asegurar la supervivencia de la
                organización.
              </p>
              <p>
                Uno de estos cambias consiste en que las empresas han
                evolucionado de dar un valor preponderante a los activos físicos
                y la perspectiva del personal humano como{" "}
                <u>
                  <strong>recursos</strong>
                </u>{" "}
                hacia dar el valor correcto al talento humano, en su condición
                de{" "}
                <u>
                  <strong> “esencia” </strong>
                </u>
                de las compañías, como elemento conductor y generador de
                cumplimiento de los objetivos empresariales.
              </p>

              <p>
                La evolución del concepto de “Jefe” como responsable del
                control, toma de decisiones estratégicas y manejo de un equipo
                de trabajo a la evolución y entendimiento de la necesidad de un
                concepto de “Jefe - Líder”, que incluye la búsqueda del
                desarrollo máximo del potencial de la empresa y sus
                trabajadores.
              </p>
              <p>
                El éxito de una compañía tiene su origen en la formación de
                líderes en su interior; la existencia de trabajadores con
                características como carisma, entusiasmo, capacidad de
                resolución, disciplina, creatividad, honestidad, visión del
                futuro, organización, comunicación, y capacidad de motivación de
                su equipo de trabajo y toma de decisiones.
              </p>

              <p>
                Un líder debe desarrollar competencias en el saber, en el hacer
                y en el ser; es decir, en el conocimiento, la experiencia y la
                actitud frente a los desafíos que se le puedan presentar,
                agrupación de competencias, actitudes y aptitudes especiales y
                diferenciadoras que permiten aportar a la gestión de la empresa
                y a su administración.
              </p>

              <p>
                La existencia de talento que toma el liderazgo en una compañía,
                a partir de sus distintos roles y funciones, permite el
                crecimiento de la misma en pro lograr su fin teleológico que es
                conseguir sus objetivos y satisfacer las necesidades del
                mercado.
              </p>

              <p>
                Existen diversos beneficios generados por un buen liderazgo
                empresarial, entre los cuales resalto el aumento de ventas de la
                empresa, la mejoría del clima empresarial, la mejoría en la
                imagen interna y externa de la compañía, la competitividad de la
                empresa, y por supuesto el rendimiento en los procesos.
              </p>

              <p>
                Toda organización debe evolucionar al mismo ritmo del mercado y
                de la sociedad, virtud que denominamos como visión innovadora,
                lo cual generará que las organizaciones se anticipen a las
                expectativas de sus clientes, basados en la información del
                contexto y lo interpretado en los cambios del mercado. Esta
                virtud permite una comunicación asertiva, que consiste en
                transmitir los mensajes de manera clara y oportuna.
              </p>

              <p>
                La comunicación asertiva es una habilidad fundamental, tanto
                para el tratamiento interno del equipo de trabajo, donde se
                busca generar relaciones auténticas que hagan que los miembros
                del equipo trabajen con mayor motivación, como para el
                tratamiento hacia sus clientes, generando confianza en el
                cumplimiento de los objetivos y la satisfacción de sus
                necesidades por las que fueron contratados.
              </p>

              <p>
                La visión innovadora y la comunicación asertiva son habilidades
                que deben desarrollar los líderes de su compañía. Sin lugar a
                dudas, de la existencia de líderes en la compañía dependerá este
                análisis de visión innovadora y comunicación asertiva de la
                organización, elementos que permitirán la supervivencia,
                desarrollo y éxito de su empresa.
              </p>

              <p className="autor-col">
                {" "}
                <a
                  href="/nuestros-columnistas/Juan-Leon/"
                  className="autor-col"
                >
                  by: Juan León{" "}
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
