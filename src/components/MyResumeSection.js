import React from 'react'
const MyResumeSection = () => {
    return (
        <div className="site-section" id="resume-section">
            <div className="container">
            <div className="row mb-5">
                <div className="col-12 mb-5">
                <div className="section-heading text-center">
                        <h3>
                            My <strong>Resume</strong>
                        </h3>
                        </div>
                </div>
                <div className="col-md-6">
                <div className="section-heading text-center">
                        <h3>
                            My <strong>Education</strong>
                        </h3>
                        </div>
                    <div className="resume-item mb-4">
                        <h3>automation engineering degree</h3>
                        <p> 
                            I am currently a 2nd year college student at U.K.M.O 

                        </p>
                        <a target="_blank" href="https://www.univ-ouargla.dz/index.php/en/">
                            <span className="school">U.K.M.O</span>
                        </a>
                        
                    </div>
                    <div className="resume-item mb-4">
                        <h3>computer sience degree</h3>
                        <p>
                            I am enrolled in an institute for computer sience degree
                            where we learn backend and databases                             
                        </p>
                        <a target="_blank" href="https://dz.polomap.com/en/%D9%88%D8%B1%D9%82%D9%84%D8%A9%E2%80%8E/1100">
                        <span className="school">the Institute</span>
                        </a>
                    </div>

                    <div className="resume-item mb-4">
                        <h3>data structure and algorithme</h3>
                        <p>
                            I lought my self in dst-algo through alot of coding challenges with c++ on platforms like :
                            exercisme, CodeForces, CodeWars... 
                        </p>
                        <a target="_blank" href="https://github.com/mohi-nettari/data-structure-and-algoriths-and-some-coding-exercices-in-C-">
                        <span className="school">Coding challenges</span>
                        </a>
                    </div>
                </div>
                
                <div className="col-md-6">
                <div className="section-heading text-center">
                        <h3>
                            My <strong>Experience</strong>
                        </h3>
                        </div>
                    <div className="resume-item mb-4">
                        <h3>Front-end</h3>
                        <p>
                            I have solid knwoledge in Front-end technologies such as :<br/>
                            JavaScript - Css - Html.<br/>
                            Framworks:<br/>
                            React.js - Bootstrap - sass.
                        </p>
                        
                    </div>
                    <div className="resume-item mb-4">
                        <h3>back-end</h3>
                        <p>
                            I am experienced in  Back-end technologies such as :<br/>
                            PHP - Mysql.<br/>
                        </p>
                    </div>
                    
                    <div className="resume-item mb-4">
                        <h3>Data-bases</h3>
                        <p>
                            I usally use relational Databases like :<br/>
                            MySQL - SQLite 
                        </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
      
        
        )
    }

export default MyResumeSection
