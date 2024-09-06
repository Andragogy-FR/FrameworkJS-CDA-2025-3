import { useState, useEffect } from 'react'
import WelcomeMessage from './Components/UX/WelcomeMessage'
import Button from './Components/UX/Button'
import styles from './App.module.css'
import { Link } from 'react-router-dom'
import './App.scss'


function App() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  // COUNT = GETTER
  // SETCOUNT = SETTER

  const studentList = [
    "Aboubakr",
    "Damien",
    "Justine",
    "Sofiane",
    "Stanley",
    "Valentin",
    "Yvanne"
  ]
  const specificCSS = {
    fontWeight: 700, 
    marginTop: '15%'
  }
  useEffect(()=>{
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
        if(data.slip.advice){
          setData(data.slip.advice)
          setLoading(false)
        }
        else setError(true)
      })
      .catch(__err => setError(true))
  },[])

  return (
    <>
      <h1 className="blue" style={specificCSS}>My best advice</h1>
      <div>TEST</div>
      <WelcomeMessage namePeople='Jeremy'/>
      <WelcomeMessage namePeople='HomeLander'/>
      <Button>Test bouton normal</Button>
      <Button error>Test erreur normal</Button>
      {loading && <p className={styles.welcomeText}>Advice en cours de chargement... - musique d'ascenseur</p>}
      {!loading && error && <p>Erreur : la récupération a subi un EMOTIONAL DAMAGE !</p>}
      {!loading && !error && <p className={styles.welcomeText}>{data}</p>}
      <Link to='/welcome'><Button>Appuye sur moi</Button></Link>
    </>
  )
}
// .env.local => .env.production / .env.developpement => .env
export default App