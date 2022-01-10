import React from 'react'

const Contact = () => {
    return (
        <section className="site-section contact-section">

            <div className="container">


                <div className="row">

                    <div className="col-12 mb-5">
                        <div className="section-heading text-center">
                            <h3>
                                Get <strong>In Touch</strong>
                            </h3>
                        </div>
                    </div>


                    <div className="col-lg-7">
                        <h3 className="mb-5">
                            My contact Details
                        </h3>

                        <form action="" className="sit-form">
                            <div className="form-group">
                                <input type="text" name="" id="" className="form-control py-3 px-4" placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="" id="" className="form-control py-3 px-4" placeholder="Enter Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="" id="" className="form-control py-3 px-4" placeholder="Enter Your Phone Number"/>
                            </div>
                            <div className="form-group mb-5">
                                <textarea name="" id="" cols="30" rows="10" className="form-control py-3 px-4" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" name="" id="" className=" py-3 px-4 btn btn-secondary" value="Send The Message"/>
                            </div>
                        </form>
                    </div>
                


                    <div className="col-lg-5">
                        <h3 className="mb-5">
                            My contact Details
                        </h3>
                        <ul className="site-contact-details">
                            <li>
                                <span className="text-uppercase">
                                    email
                                </span>
                                nettari.mohyieddin@gmail.com
                            </li>
                            <li>
                                <span className="text-uppercase">
                                    phone
                                </span>
                                +213 06 67 06 84 45   
                            </li>
                            <li>
                                <span className="text-uppercase">
                                    adress
                                </span>
                                city-bouzid beni-thour
                                ouargla
                                algeria
                            </li>
                        </ul>
                    </div>
              

            </div>

           </div>


        </section>
    )
}

export default Contact
