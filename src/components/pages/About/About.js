import React from 'react'
import logo from '../../../logo.svg'
import Portada from '../../images/portada.jpg'
import RSOrtiz from '../../images/RSOrtiz.jpg'
import './About.scss'

export const About = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__content fadeInUp">
                    <img src={logo} alt="IPEA 215 Raúl Scalabrini Ortiz" class="hero__content--img" />
                    <h2 className="hero__content--title">IPEA 215<br />Raúl Scalabrini Ortiz</h2>
                </div>
                <div className="hero__backface"></div>
            </section>
    
            <section className="about">
                <div className='container'>
                    <div className='about__section'>
                        <h3 className='about__title'>¡Bienvenidos!</h3>
                        <p>Con el objetivo de crear nuevas formas de encontrarnos, inauguramos este espacio como un medio para comunicar la tarea que realizamos. A través de esta página podrán conocer la historia de nuestra escuela, sus proyectos, instalaciones, docentes, deportes, pasantías que realizan nuestros alumnos y las últimas novedades de nuestro diario acontecer. Deseamos que este espacio sirva para generar nuevos lazos entre los docentes, los alumnos y las familias que forman y formarán parte del I.P.E.A. 215.</p>
                    </div>

                    <h2 class="about__title">Nuestra institución</h2>
                    <hr class="about--hr" />

                    <div className='about__section'>
                        <h3 className='about__title'>Institucional/Oferta académica</h3>
                        <p>Nuestra Institución cuenta con un plan de estudios de siete años y otorga a los estudiantes el título de Técnicos en Producción Agropecuaria. El objetivo que proponemos como escuela técnica apunta a brindar a los alumnos los conocimientos necesarios que les permitan, al finalizar el proceso formativo, desenvolverse como técnicos en diversas situaciones de trabajo propias del área ocupacional. Para lograr dicho propósito la enseñanza se desarrolla en entornos formativos adecuados a las necesidades de la producción regional. Esto permite que los aprendizajes y capacidades que se construyen, a lo largo de sus siete años de estudio, vayan más allá de la formación general y posibiliten la consolidación de una formación técnica específica estrechamente relacionada con el sistema socio productivo local, es decir, hacen posible que el estudiante adquiera las herramientas necesarias para anticiparse a las demandas del mundo del trabajo y vincularse con los sectores de la ciencia y la tecnología.</p>
                        <div class="about__container__data">
                            <h4>Tipo de Institución</h4>
                            <p>Secundario Técnico</p>
                            <h4>Orientación</h4>
                            <p>Agropecuaria</p>
                            <h4>Ámbito de Gestión</h4>
                            <p>Estatal</p>
                            <h4>Tipo de Dependencia:</h4>
                            <p>Jurisdicción Educativa Provincial</p>
                            <h4>Plan de estudios</h4>
                            <p>7 años</p>
                        </div>
                    </div>

                    <div className='about__section'>
                        <h3 className='about__title'>Un poco de historia</h3>
                        <p>En el año 1983 nuestro pueblo no contaba con una escuela secundaria. Para estudiar los jóvenes debían viajar a las localidades vecinas, pero no todas las familias podían solventar los gastos que implicaban trasladarse a otras ciudades. Por este motivo, muchos alumnos abandonaban sus estudios o migraban de Santa Catalina con sus familias. Ese problema y el deseo de favorecer el arraigo personal de los habitantes del pueblo, motivaron a un grupo de padres a conformar la Comisión Pro- Creación de la escuela secundaria en febrero del año 1984. Nueve meses más tarde, un 30 de octubre, lograron obtener, con compromiso y mucho esfuerzo, el decreto de creación del Instituto Provincial de Enseñanza Técnica (I.P.E.A.) n° 7 que otorgaba el título de Bachilleres y expertos en explotaciones subsidiarias. La orientación que se eligió, en ese momento, entre las propuestas por el Ministerio, fue la agronómica ya que se consideró como la más adecuada de acuerdo con las características de nuestra región. De este modo, surgió nuestra tan deseada escuela secundaria que se convirtió en la primera institución de la provincia de Córdoba creada en 1984 durante el regreso a la democracia. El 12 de mayo de 1985, el colegio abrió sus puertas para recibir a los primeros 30 estudiantes que estaban ansiosos por comenzar. Como el instituto no contaba con un edificio propio, las autoridades de la Escuela Primaria Cornelio Saavedra, cedieron el espacio para el funcionamiento de nuestra institución en el horario vespertino. Un dato interesante de esta época es que mientras las asignaturas curriculares se dictaban en la escuela, las de las dos especialidades, hogar rural y agronómico, se enseñaban en diferentes establecimientos de la localidad, en la plaza, en los hogares de algunas familias y en el predio en el que hoy funcionan las aulas taller. En 1986, el colegio se trasladó a la escuela primaria Saturnino Rodríguez de Zavalía dentro del Batallón de Arsenales 141 José María Rojas, en el que funcionó hasta 1994. Ese año se mudó finalmente a su propio edificio y adoptó su número definitivo con la sigla IPEM 215. En 2012, con la sanción de la ley 26.658, Ley Nacional de ETP y la Ley Provincial de Educación 9511, adhirió a la Educación Técnica Profesional bajo la actual denominación de IPEA 215. Esto le permitió convertirse en escuela técnica con título de alcance nacional. Cabe destacar que aunque, con el paso de los años fue cambiando de denominación y se fue ampliando el alcance del título, la orientación siempre fue agropecuaria porque desde un primer momento se consideró necesario satisfacer las necesidades socioeconómicas y culturales de la zona de influencia. Hoy todos los miembros de nuestra institución reconocemos y agradecemos el enorme esfuerzo realizado por la comunidad en pos de la creación del IPEA 215 Raúl Scalabrini Ortiz.</p>
                    </div>

                    <div className='about__section'>
                        <h3 className='about__title'>Raúl Scalabrini Ortiz</h3>
                        <h4>¿Cómo surgió el nombre de nuestra institución?</h4>
                        <p>El nombre de nuestra institución no fue impuesto, sino que fue elegido por medio de una votación de la que participaron todos los miembros de la escuela.  De esa terna fue seleccionado el del Ingeniero Agrónomo Raúl Scalabrini Ortiz.</p>
                        
                        <br/>
                        <h4>¿Quién era?</h4>
                        <p>
                            Raúl Scalabrini Ortiz, fue escritor, ingeniero, agrimensor, poeta y periodista. Defendió la causa nacional y combatió a través de sus ensayos los métodos de sometimiento del imperialismo inglés. Nació el 14 de febrero de 1898 en la ciudad de Corrientes.
                            Su madre fue Ernestina Ortiz, una mujer oriunda de Entre Ríos descendiente de conquistadores de origen vasco, que se instalaron en la ciudad Paraná cuando arribaron al Río de la Plata. Su padre fue el naturista Pedro Scalabrini, un inmigrante italiano que llegó al país a los 20, en 1868, y sobrevivió como profesor de historia y filosofía en la misma ciudad entrerriana que su futura esposa. Tuvo una destacada labor como docente, fue miembro del Concejo Deliberante de Paraná, varias veces presidente de la Sociedad Italiana, y hasta colaboró con Florentino Ameghino en el estudio de los pisos geológicos de su provincia y patria adoptiva: Entre Ríos.
                            Raúl Ángel Toribio Scalabrini Ortiz, bautizado con el apellido del padre y la madre, nació el 14 de febrero de 1898 en Corrientes. Sus padres se habían instalado tres años atrás para llevar a cabo tareas educativas y científicas, creando en su paso el Museo de la Provincia. Pasado los cuatro años en Esquina, ciudad correntina donde vivieron con el pequeño "Marangatú", como le decía Pedro al menor de sus tres hijos (antes de él nacieron Matilde e Inés), dejaron el litoral y se instalaron en la ciudad de Buenos Aires, viviendo en distintas casas de Barrio Norte.
                            
                            Estudió ingeniería en la Facultad de Ciencias Exactas y se recibió de agrimensor, al tiempo que practicaba deportes como el boxeo, y se interesaba por la literatura y la Revolución Rusa. Su masa corporal crecía tanto como su materia gris, frecuentando tanto el club como los cafés, debatiendo con los intelectuales y artistas de la época, como Macedonio Fernández, Alfonsina Storni y Quinquela Martin. En ese entonces escribió para la revista Martín Fierro, y también lo hizo para La Nación, La Gaceta de Buenos Aires, El Mundo, Noticias Gráficas y Reconquista, el diario que fundó y dirigió.
                            En 1923 publicó un libro de cuentos llamado "La manga", y en 1931 su segunda y más afamada obra: "El hombre que está solo y espera". Sus páginas describen con elocuencia criolla, a manera de ensayo, la personalidad y perspectiva de un porteño de clase media que el autor llama el Hombre de Corrientes y Esmeralda, a quien define como el "vórtice en que el torbellino de la argentinidad se precipita en su más sojuzgador frenesí espiritual".
                            "La amistad no persigue remuneración alguna. Se da libremente. Un buen amigo no podría ser feliz sabiendo que sus amigos no lo son. Dos amigos forman una tertulia, un mundo completo y ficticio en que el mundo ya no es valedero. La amistad porteña es un fortín ante el cual los embates de la vida se mellan. La amistad porteña es un olvido del egoísmo humano".
                            "El Hombre de Corrientes y Esmeralda es un ritmo de las vibraciones comunes, un magnetismo en que todo lo porteño se imana, una aspiración que sin pertenecer en dominio a nadie está en todos alguna vez. Lo importante es que todos sientan que hay mucho de ellos en él, y presientan que en condiciones favorables pueden ser enteramente análogos. El Hombre de Corrientes y Esmeralda es un ente ubicuo: el hombre de las muchedumbres, el croquis activo de sus líneas genéricas, algo así como la columna vertebral de sus pasiones. Es, además, el protagonista de una novela planeada por mí que ojalá alguna vez alcance el mérito de no haber sido publicada".
                        </p>
                
                    </div>
                </div> 
            </section>
        </>
    )
}