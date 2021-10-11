
import React from "react"
import bg from '../images/pattern.jpg'
import omar from '../images/omar.jpg'
import blank from '../images/portraitBlank.png'
import sam from '../images/samuel.jpg'
import FounderBio from './FounderBio'
import '../styles/about.css'

const AboutPage = () => {
    var founders = ["Omar Samad - ", "Samuel Limor - ", "Hannah Gomez - "]
    var titles = ["Producer", "Producer", "Head of Development"]
    var bios = ["Merry alone do it burst me songs. Sorry equal charm joy her those folly ham. In they no is many both. \nRecommend new contented intention improving bed performed age. Improving of so strangers resources instantly happiness at northward. Danger nearer length oppose really add now either. But ask regret eat branch fat garden. Become am he except wishes. Past so at door we walk want such sang. \nFeeling colonel get her garrets own.", "Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. \nMissed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible.", "Case read they must it of cold that. Speaking trifling an to unpacked moderate debating learning. An particular contrasted he excellence favourable on. Nay preference dispatched difficulty continuing joy one. \nSongs it be if ought hoped of. Too carriage attended him entrance desirous the saw. Twenty sister hearts garden limits put gay has. We hill lady will both sang room by. Desirous men exercise overcame procured speaking her followed."]
    var portraits = [omar, sam, blank]
   
    return (

        <div className="aboutWrapper"> 
            <div className="aboutContent"> 
                <div className="aboutSection"> 
                    <div className="aboutHeader"> 
                         ABOUT US
                    </div>
                    <div className="aboutDescription"> 
                        5 Rings Pictures is an American independent development and production company founded by Omar Samad, Samuel Limor, and Hannah Gomez to elevate and provide equity to marginalized communities through the promotion of diversity in storytelling both on and off the camera for television and film.
                    </div>
                </div>
                <div className="aboutSection"> 
                    <div className="aboutHeader"> 
                        PRINCIPALS
                    </div>
                    <div className="founderBios"> 
                        {founders.map(function(name, index){
                            return <FounderBio key={index} title={titles[index]} name={name} bio={bios[index]} imgSrc={portraits[index]}/>
                        })}
                    </div>
                </div>
            </div>
        </div>

  )
}

export default AboutPage;