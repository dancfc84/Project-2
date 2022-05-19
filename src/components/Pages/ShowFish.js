import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SelectedFish from "./SelectedFish"
import styles from "./ShowFish.module.css"


const linkStyle = {
  margin: "1rem",
  fontSize: "1.5rem",
  textDecoration: "none",
  color: "black",
  fontFamily: "Quicksand",
};

function ShowFish () {

  const [fish, setFish] = useState(null)

  const { fishName } = useParams()

  useEffect(() => {
    async function fetchFish() {
      const res = await fetch(`https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species/${fishName}`)
      const data = await res.json()
      setFish(data[0])
    } fetchFish()
    
    
  }, [])

  if (fish) {
    for (const property in fish) {
      if (fish[property] === null) {
        fish[property] = "Information Unavailable"
      }
    }
  }

  return fish ? <section className="section">
    <div className="container">
      <SelectedFish
        name={fish["Species Name"]}
        fishingRate={fish["Fishing Rate"]}
        population={fish["Population"]}
        images={fish["Species Illustration Photo"]["src"]}
        summary={fish["Biology"].replace(/\s*<.*?>\s*/g, "").replace("&nbsp;", "")} 
        scientificName={fish["Scientific Name"]} 
        habitat={fish["Habitat"].replace(/\s*<.*?>\s*/g, "").replace("&nbsp;", "")}/>
      <br></br>
      <Link to="/fish-index" style={linkStyle}>{"⬅ Back to the Fish Index"}</Link>
    </div>
  </section> : <div className={styles.waiting_Info}><p>Waiting for information</p></div>
        
}

export default ShowFish
