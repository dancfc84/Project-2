import React, { useEffect, useState } from "react"
import FishDay from "../Pages/FishDay"

function Dailyfish() {

  
  //let fishdex = 0
  let currentDate = "00/00/0000"
  //let currentFish = ""
  const [displayFish, setDisplayFish] = useState(undefined);

  useEffect(() => {
    
    function getDate() {
      //gets current date
      currentDate = new Date().toLocaleDateString();
      if (localStorage.getItem("date") === null || localStorage.getItem("current fish" === null)) {
        localStorage.setItem("date", currentDate);
        localStorage.setItem("current fish", "")
         //gets and sets fish of the day..
        getRandom()
      } else if (localStorage.getItem("date") === currentDate) {
        const getFish = localStorage.getItem("current fish")
        const storageFish = JSON.parse(getFish)
        setDisplayFish(storageFish)
      } else {
        getRandom()
      }
    } 
  
    async function getRandom () {
      const fishdex = Math.floor(Math.random() * 115);
      const res = await fetch("https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species")
      const data = await res.json()
      //picks random fish from the listed species
      const dailyfish = data[fishdex]
      setDisplayFish(dailyfish)
      localStorage.setItem("current fish", JSON.stringify(dailyfish));
      const updateDate = new Date().toLocaleDateString();
      localStorage.setItem("date", updateDate)
    }
    getDate()
  }, [])

  if (displayFish) {
    for (const property in displayFish) {
      if (displayFish[property] === null) {
        displayFish[property] = "Information Unavailable"
      }
    }
  }

  return displayFish ?
    <>
      
      <FishDay
        name={displayFish["Species Name"]}
        fishingRate={displayFish["Fishing Rate"]}
        population={displayFish["Population"]}
        images={displayFish["Species Illustration Photo"]["src"]}
        summary={displayFish["Biology"].replace(/\s*<.*?>\s*/g, "").replace("&nbsp;", "")} 
        scientificName={displayFish["Scientific Name"]} 
        habitat={displayFish["Habitat"].replace(/\s*<.*?>\s*/g, "").replace("&nbsp;", "")}/>
    </> : <p>Waiting for information</p>

}

export default Dailyfish