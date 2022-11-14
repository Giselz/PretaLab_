import './App.css'
import Titulo from './components/Titulo'
import Paragrafo from './components/Paragrafo'
import Info from './components/Info'
import Texto from './components/Texto'

function App() {

  return (
    <div>
      <h1>Olá mundo!</h1>
      <Titulo />
      <Titulo />
      <Paragrafo />
      <Info quantidade="234" tipo="publicações" />
      <Info quantidade="7,354" tipo="seguidores"/>
      <Info quantidade="405" tipo="seguindo"/>
      <Texto>Um texto</Texto>
    </div>
  )
}

export default App
