
import React from "react"
import '../styles/contact.css'

const ContactPage = () => {
    var names = ['CONTACT', 'SUBMISSIONS', 'OMAR SAMAD', 'SAMUEL LIMOR', 'HANNAH GOMEZ']
    var emails = ['contact@5RingsPictures.com',
    'submissions@5RingsPictures.com',
    'omar@5RingsPictures.com',
    'sam@5RingsPictures.com',
    'hannah@5RingsPictures.com']
    var description = ['For general questions, etc.', 'Send us your stuff!', 'Founder, Executive Producern', 'Founder, Executive Producer', 'Development, Literary Scouting & Acquisitions']
    
    return (
        <div className="contactWrapper">
            <div className="contactContent">
                    {emails.map(function(email, index) {
                        return <div className="emailWrapper">
                            <div className="emailHeader"> {names[index]}  </div>
                            <div className="emailDescription"> {description[index]} </div>
                            <div className="email">  {email} </div>
                        </div>
                    })}
            </div>
        </div>
        
  )
}

export default ContactPage;



















