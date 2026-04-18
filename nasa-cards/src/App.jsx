import { useState } from 'react'
import Card from './Card'
import './App.css'
// Here we import the external data!
import { misionesNasa } from './datos' 

function App() {
  const missionsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(misionesNasa.length / missionsPerPage)
  const startIndex = (currentPage - 1) * missionsPerPage
  const currentMissions = misionesNasa.slice(startIndex, startIndex + missionsPerPage)

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  return (
    <div className="app-container">
      <h1>NASA Space Missions Repository</h1>

      <div className="pagination-controls">
        <button
          className="pagination-btn"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="pagination-btn"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="cards-grid">
        {/* We map over our new, larger external array */}
        {currentMissions.map((mission) => (
          <Card 
            key={mission.id} 
            nombre={mission.nombre} 
            imagen={mission.imagen} 
            descripcion={mission.descripcion} 
          />
        ))}
      </div>

      <a
        className="github-profile-btn"
        href="https://github.com/valnorena"
        target="_blank"
        rel="noreferrer"
      >
        Visit my GitHub profile
      </a>
    </div>
  )
}

export default App