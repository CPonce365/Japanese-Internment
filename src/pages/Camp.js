import Header from "../components/Header"
import "../pages/Camp.css"

const Camp = () => {
  return (
    <div className="mainp">
    <Header />
    <h1>Internment Camps</h1>
    <img src="/JapCamp4.jpg" className="img" alt="Camp Site"></img>
    <div className="coloumn">
      After the attack on Pearl Harbor and the several 
      magazines that were published to help distingushin Asian 
      Americans, President Franklin D. Roosevelt exectued Order 9066 on Feburary 19, 1942. 
      Order 9066 authorized the Secretary of War and military commanders to evacuate all 
      persons deemed a threat from the West Coast to internment camps, further inland.
      Approximately 122,000 Japanese Americans were forcibly moved to “assembly centers” 
      between March 1942 and June 1942. The assembly center evacuees were then transferred 
      to isolated, fenced, and guarded “relocation centers”, really internement camps, in 
      remote areas of six western states and Arkansas. The interment camps were located in areas 
      such as Heart Mountain in Wyoming, Tule Lake and Manzanar in California, Topaz in Utah, 
      Poston and Gila River in Arizona, Granada in Colorado, and Minidoka in Idaho. Eventually, 
      all Japanese Americans in these camps were released and allowed to travel back to their homes. 
      Unfortunately, order 9066 stripped them of all thier assests. They had no home, no source of income, 
      and no transportation of their own. 
    </div>
    <img src="/JapCamp3.png" className="img2" alt="Classroom"></img>
    <div className="description">
      A classroom in a Japanese Internment Camp
    </div>
    <img src="/Camp2.jpg" className="img3" alt="Inside Camp"></img>
    <div className="description2">
      A Japanese Internment Camp 
    </div>
  </div>
  )
}

export default Camp