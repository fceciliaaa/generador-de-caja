import { useState } from 'react'
import './App.css'
import ColorForm from '../ColorForm/ColorForm'
import ColorDisplay from '../ColorDisplay/ColorDisplay';


const App = () => {
  const [colors, setColors] = useState([]); //genero una lista de colores por medio del array

  const cambiarColor = (nuevoColor) => {
    setColors([...colors, nuevoColor]); //hago una copia del color actual y añado el nuevo color
  }

  return (
    <>
      <ColorForm funcionColor={cambiarColor} />
      <div className='contenedor-color'>
        {colors.map((color, index) => ( //color es el color actual en la iteración e index es el índice del color en el array
          <ColorDisplay key={index} colorAMostrar={color} />))}
        {/* key es una prop especial en React que ayuda a identificar de 
          manera unica cada uno de los elementos de la lista cuando se renderizan
          y color es el valor del color actual en la iteración y se pasa como prop al componente ColorDisplay*/}
      </div>
      {/* Si por ej. el array colors es ['red', 'blue', 'green'] se genera esto
      <ColorDisplay key={0} colorAMostrar="red" />
      <ColorDisplay key={1} colorAMostrar="blue" />
      <ColorDisplay key={2} colorAMostrar="green" /> */}
    </>
  )
}

export default App
