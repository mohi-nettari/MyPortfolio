import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faPencilRuler} from '@fortawesome/free-solid-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MyService = () => {
    return (
        <section className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="section-heading text-center">
                        <h3>
                            My <strong>Services</strong>
                        </h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="site-service-item text-center mb-4">
                            <span class="icon">
                                <span class="icon-video2"> 
                                <FontAwesomeIcon icon={faPencilRuler}></FontAwesomeIcon>
                                </span>
                            </span>
                            <h3 className="mb-4">Static Website</h3>
                            <p>
                                Fixing small issues and bugs on existing website or design a new static one
                            </p>
                            <p></p>
                        </div>

                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="site-service-item text-center mb-4">
                            <span class="icon">
                                <span class="icon-video2"> 
                                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                                </span>
                            </span>
                            <h3 className="mb-4">Dynamic Website</h3>
                            <p>
                                Developing Profissional website or web Application small/medium
                            </p>
                            <p></p>
                        </div>

                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="site-service-item text-center mb-4">
                            <span class="icon">
                                <span class="icon-video2"> 
                                <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
                                </span>
                            </span>
                            <h3 className="mb-4">Developing Profissional Website</h3>
                            <p>
                                Developing Profissional website or webApplication midium/large<br/>
                                containing Uploadin files like Message or Photos
                            </p>
                            <p></p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyService
