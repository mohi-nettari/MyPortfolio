import React from 'react'
import Navbar from './Navbar';
import Particles from "react-tsparticles";


const Header = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return(
        <section className="width-auto bg-dark hero site-section">
        <Particles
        className="header-particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 6,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
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