import Card from './Card'
import './App.css'
// Here we import the external data!
import { misionesNasa } from './datos' 

function App() {
  return (
    <div className="app-container">
      <h1>NASA Space Missions Repository</h1>
      <div className="cards-grid">
        {/* We map over our new, larger external array */}
        {misionesNasa.map((mission) => (
          <Card 
            key={mission.id} 
            nombre={mission.nombre} 
            imagen={mission.imagen} 
            descripcion={mission.descripcion} 
          />
        ))}
      </div>
    </div>
  )
}

export default App