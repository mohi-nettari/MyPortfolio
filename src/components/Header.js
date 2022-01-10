import React from 'react'
import Navbar from './Navbar';



const Header = () => {

    return(
        <section className="width-auto bg-dark hero site-section">

        <div className="container">
            <div className="intro-text row align-items-center justify-content-center">
                <div className="col-md-10 text-center pt-5">
                    <h1 className="text-secondary hero-text">
                        Hello there 
                        <strong class="d-block">i am Nettari Mohyieddin and i am an Android developer</strong>
                    </h1>
                        <strong className="d-block text-white text-uppercase letter-spacing">a fullstack developer</strong>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Header;