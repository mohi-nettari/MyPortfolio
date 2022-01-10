import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
       <footer className="site-footer">
           <div className="row mb-5">
               <p className="col-12 text-center">
                   Copyright © 2022 All rights reserved | nejmeddin nettari
               </p>
           </div>
           <div className="row mb-5">
               <div className="col-12 text-center">
                   <p>
                       <a target="_blank" href="https://www.facebook.com/ned.jmo.3597/" className="social-item">
                           <span className="facebook-icon">
                           <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                           </span>
                       </a>
                       <a target="_blank" href="https://www.instagram.com/nejmo_dev/" className="social-item">
                           <span className="instagram-icon">
                               <FontAwesomeIcon icon={faInstagram}/>
                           </span>
                       </a>
                       <a target="_blank" href="https://github.com/nedjmo0662" className="social-item">
                           <span className="github-icon">
                           <FontAwesomeIcon icon={faGithub}/>

                           </span>
                       </a>
                       <a target="_blank" href="https://www.linkedin.com/in/nedjmeddin-nettari-6917bb211/" className="social-item">
                           <span className="linkedin-icon">
                           <FontAwesomeIcon icon={faLinkedin}/>
                           </span>
                       </a>
                   </p>
               </div>
           </div>
       </footer>
    )
}

export default Footer
