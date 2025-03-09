// src/pages/Home.jsx
import Transition from '../components/transition'
import Section from '../components/section'
import Article1 from '../components/article'
import Section2 from '../components/section2'
import Article2 from '../components/article2'

const Home = () => {
  return (
    <>
      <Transition/>
      <Section
        h2="Tecnología para la vida"
        p1="Bluegenetics se propone ser la empresa líder en ofrecer tanto al gremio médico como
                        a la familia en Venezuela y Latinoamerica el acceso a las pruebas de más alto nivel 
                        y de alta complejidad para el pronóstico y diagnóstico de enfermedades o alteraciones
                        genéticas a través de acuerdos exclusivos con laboratorios de alto nivel alrededor 
                        del mundo, para garantizar el mayor nivel de seguridad y confianza en los resultados"
        p2="Queremos ofrecer a los pacientes y familias con enfermedades poco comunes, 
                        los estudios basados en biología molecular que permitan su correcto pronóstico o
                        diagnóstico genético y brindar el asesoramiento necesario a sus familiares y 
                        a toda la comunidad médica."
      />
      <Article1 
        subtitulo="Nuestras Pruebas"
        parrafo="Calidad y seguridad son las bases de nuestras pruebas,consulta todo nuestro catálogo para encontrar lo que necesitas"
      />
      <Section2 />
      <Article2 
        p1="Bluegenetics Corp es una empresa de biotecnología que se dedica 
                              a ofrecer al gremio médico en Venezuela pruebas de alto nivel para el 
                              diagnóstico molecular de enfermedades genéticas."
        p2="Nuestra visión incluye un servicio integral en el que tanto el diagnóstico 
                                como el asesoramiento y consejo genético están incluidos para la tranquilidad 
                                del médico y del paciente."
        h4="Contacto"
        p3="Av. Rio Caura, Centro Empresarial Torre Humbolt, Piso 10, 
                                Oficina 10-10, Prados del Este"
        p4="Teléfono: +58 212-555-1234"
    
    />
    </>
  )
}

export default Home