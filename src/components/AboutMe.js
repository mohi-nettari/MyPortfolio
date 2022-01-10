import React from 'react'
import img from "../photos/--(image0).JPG"
const AboutMe = () => {
    return (
        <section className="site-section mb-lg-5 mb-xl-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pr-lg-5 mb-4 mb-lg-0 ">
                        <div className="about-item">

                        <img className="img-fluid" src={img} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 pr-lg-5 mb-4 mb-lg-0">
                        <div className="about-item">

                        <div className="section-heading">
                            <h3>About <strong>Me</strong></h3>
                        </div>
                        <p className="lead">I am Nettari Mohyieddin an andrid app Developer</p>
                        <p className="mb-5">I will build your Android App wether it is a simple and basic App or a Large scale App with databases.<br/>
                        <br/>
                        if you are looking for someone who can provide you custom Android application development then you have come to the right place. 
                        I am a professional Android App developer with more than 2 years of experience.
                        I developed many Android applications for different clients.
                        I use the MVVM architecture to write clear and clean code  which is easy to customize. 
                        Please feel free to contact me for any kind of Android applications whether it is small or with a big database.
                        we can do a google meet or zoom meeting to discuss your ideas and projects.
                        </p>
                        <p>
                        <a href="#contact-section" class="btn btn-primary px-4 py-2 btn-sm smoothscroll ">Hire Me</a>
                        <a href="#" class="btn btn-secondary px-4 py-2 btn-sm ms-2">Download CV</a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
