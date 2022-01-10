
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
    var bios = ["Omar Samad is an award winning Pakistani-American director, producer and writer known for his work in both TV and New Media. As an immigrant, he comes to 5 Rings with a 1st hand knowledge on the importance and need of diversity, inclusion and representation in the stories we consume. The founding of 5 Rings Pictures is the culmination of efforts set in motion by a 6 year old Omar who was deeply impacted by the lack of representation, stereotypes and misguided storytelling that remains prevalent in Hollywood.", "Samuel Limor is known for his work on Smosh: The Movie (2015), Side Effects (2013) and Malibu Surf (2017).", "Hannah Gómez has worked in and around the publishing industry for nearly a decade, with stints as a school librarian, We Need Diverse Books project manager, audiobook proofer, podcast host, editor, author, and critic for highly regarded magazines like Kirkus and The Horn Book. She is highly regarded in libraries, publishing, and academia for her anti-racism and anti-oppression work in children's and young adult literature. Hannah is committed to centering the voices of marginalized creators in media. She holds master's degrees in children's literature and library science from Simmons University and is nearing completion of her PhD in critical theory of children's and young adult literature at the University of Arizona."]
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