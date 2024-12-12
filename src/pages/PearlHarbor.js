import Header from "../components/Header"
import "../pages/PearlHarbor.css"

const PearlHarbor = () => {
  return (
    <div className="mainp">
      <Header />
      <h1>Empire of Japan Attack on Pearl Harbor</h1>
      <img src="/PearlHarborPicture.jpg" className="pearlimg" alt="Ships on Fire"></img>
      <div className="coloumn">
        On December 7th of 1941, the Japan Empire attacked the U.S 
        Pacific Fleet at its base at Pearl Harbor. Their reason for attacking, 
        oil. Japan had been modernising its economy throughout the 20th century 
        and wanted to build an imperalistic empire of its own. However, Japan lacked the 
        natural resources to make it a reality with 94% of its oil being imported. 
        After capturing Manchuria, Japan enterted a full-on war with China in 1937. Consequently, 
        the USA was slowly awakening from its isolationism. When Japan invaded French Indochina 
        in 1941, America responded by freezing all Japanese assets in the states, 
        preventing Japan from purchasing oil. After losing 94% of its oil supply and not agreeing with Americas demands, 
        Japan improvised by taking their oil through British Malaya and the Dutch East Indies. 
        However, they knew it would prove an armed U.S response. To hinder America, Japan 
        decided to attack the U.S Pacific Fleet at Pearl Harbor, hoping that the 
        U.S would end their embargo or negotiate peace. However, the U.S was not seeking for peace, but for revenge
        and declared war on Japan the following day, officially ending their isolationism. 
      </div>
      <img src="/JapaneseEmpire.jpg" className="img2" alt="Japanese Empire"></img>
      <div className="description">
        A map of the Japanese Empire
      </div>
      <img src="/PeralHarborExplosion.webp" className="img3" alt="USS Shaw"></img>
      <div className="description2">
        Explosion of USS Shaw
      </div>
    </div>
  )
}
export default PearlHarbor