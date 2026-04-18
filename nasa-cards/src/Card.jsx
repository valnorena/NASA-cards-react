import { useState } from 'react'

function Card({ nombre, imagen, descripcion }) {
  // Declarar el estado para el 'me gusta'
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      {/* Mostrar la imagen, el nombre y la descripcion */}
      <img src={imagen} alt={`Imagen de la misión ${nombre}`} className="card-image" />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      
      {/* Botón que cambia de apariencia según el estado */}
      <button 
        className={liked ? "btn-liked" : "btn-unliked"} 
        onClick={() => setLiked(!liked)}
      >
        {liked ? '🚀 Liked!' : 'Like'}
      </button>
    </div>
  )
}

export default Card