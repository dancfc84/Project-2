import React from "react";
import Footer from "../UI/Footer";
import Dailyfish from "../UI/Dailyfish";

function Home () {
  return (
    <>
      <h2> About</h2>
      <p>This website allows you to see how climate change and overfishing has affected the fish population of the world</p>
      <Dailyfish />
      <Footer />
    </>
  )
}

export default Home