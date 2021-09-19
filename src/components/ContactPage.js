
import React from "react"
import bg from '../images/pattern.jpg'

const ContactPage = () => {
    var names = ['CONTACT', 'SUBMISSIONS', 'OMAR SAMAD', 'SAMUEL LIMOR', 'HANNAH GOMEZ']
    var emails = ['contact@5RingsPictures.com',
    'submissions@5RingsPictures.com',
    'omar@5RingsPictures.com',
    'sam@5RingsPictures.com',
    'hannah@5RingsPictures.com']
    var description = ['For general questions, etc.', 'For submissions', 'contact description', 'contact description', 'contact description']
    return (
        <div className="contactContent">
            <img src={bg} className="aboutBackground" />
            <div className="emailsWrapper">
                <div>
                    {emails.map(function(email, index) {
                        return <div>
                            <div className="emailHeader"> {names[index]}  </div>
                            <div className="emailDescription"> {description[index]} </div>
                            <div className="email">  {email} </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        
  )
}

export default ContactPage;



















