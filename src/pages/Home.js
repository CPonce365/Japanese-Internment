import Header from "../components/Header"
import "../pages/Home.css"

const Home = () => {
  return (
    <div className="mainh">
      <Header />
      <h1>Encoding Japanese Internment</h1>
      <div className="Info">
        Hey there! Welcome to my historical website, Japanese-Internment!
        In this webiste you'll be able to look at the process of why and how 
        Japanese Americans were detained and sent to Internment Camps. This is 
        often a forgotten part of American History and hopefully you learn/explore
        more of this event! 
      </div>
      <div className="help">
        <h1>Please click on one of the three options at the top to visit different sites!</h1>
      </div>
    </div>
  )
}

export default Home