import { Routes, Route } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './page/home.jsx'
import QuienesSomos from './page/about.jsx'
import Pruebas from './page/test.jsx'
import Contacto from './page/contact.jsx'


function App() {
  return (
    <div>
      <Header
        inicio="Inicio" 
        somos="Quienes Somos" 
        prueba="Nuestras Pruebas" 
        contacto="Contacto"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<QuienesSomos />} />
        <Route path="/test" element={<Pruebas />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
     
      <Footer />
    </div>
  )
}

export default App