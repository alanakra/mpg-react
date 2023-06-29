import ClubList from './components/ClubList'
import './App.css'
import PlayerList from './components/PlayerList'

function App() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-5">🐐</h1>
      <ClubList/>
      <hr className="my-3"/>
      <PlayerList/>
    </>
  )
}

export default App
