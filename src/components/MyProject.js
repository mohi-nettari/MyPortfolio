import React from 'react'
import { itemFromArray } from 'tsparticles';

import imgChat1 from "../photos/chat app/Screenshot_2022-01-10-11-28-17-375_com.example.whatsapp.jpg"
import imgChat2 from "../photos/chat app/Screenshot_2022-01-10-11-28-20-588_com.example.whatsapp.jpg"
import imgChat3 from "../photos/chat app/Screenshot_2022-01-10-11-28-47-556_com.example.whatsapp.jpg"
import imgChat4 from "../photos/chat app/Screenshot_2022-01-10-11-32-18-455_com.example.whatsapp.jpg"


import imgEcommerece1 from "../photos/ecommerce app/1641515472439.png" 
import imgEcommerece2 from "../photos/ecommerce app/1641761290451.png" 
import imgEcommerece3 from "../photos/ecommerce app/1641761301810.png" 
import imgEcommerece4 from "../photos/ecommerce app/1641761311833.png" 
import imgEcommerece5 from "../photos/ecommerce app/1641761320217.png" 

import imgGallery1 from "../photos/notes app/Screenshot_2022-01-10-11-02-29-076_com.codingstuff.notesapp.jpg"
import imgGallery2 from "../photos/notes app/Screenshot_2022-01-10-11-02-34-077_com.codingstuff.notesapp.jpg"
import imgGallery3 from "../photos/notes app/Screenshot_2022-01-10-11-02-45-501_com.codingstuff.notesapp.jpg"
import imgGallery4 from "../photos/notes app/Screenshot_2022-01-10-11-03-18-003_com.codingstuff.notesapp.jpg"
// calculate the height of the items if it biiger than 500px than the read more button will apear;
document.addEventListener("DOMContentLoaded",() =>{
    let projects = Array.from(document.querySelectorAll(".project"));
    projects.forEach((project) =>{
        if(project.clientHeight > 500){
            readLessFunction(project);
        }
    })
});
//read more event
function readMoreFunction (e)
{
    let project = e.target.parentElement;
    //selecting the image that is displayed in the project element
    let imgs =Array.from(project.children);

    imgs.forEach(img => {
        if(img.classList.contains("show-img")){
            img.classList.remove('show-img');
        }
    });
    e.target.innerText = "hide the text";
    project.classList.remove("project-min");
    e.target.addEventListener("click",readLessFunction);

}
function readLessFunction(item) {


    var project = item;
    
    if(item.classList == undefined)
    {
        project = item.target.parentElement;
    }
    //selecting the first image;
    let img = project.children[0];
    //showing the imafe 
    img.classList.add("show-img");
    //minimize the project dev and adding the readless button
    project.classList.add("project-min");
    let readMore = document.createElement('p');
    readMore.classList.add("read-more");
    readMore.innerText = "Read";
    readMore.addEventListener('click',readMoreFunction);
    project.appendChild(readMore);
}
const MyProject = () => {
    
    const clickImageHandler = (e) =>{
        // console.log(e.target.parentElement);
        let project =e.target.parentElement;
        let imgs = Array.from(project.children).filter((item) => item.nodeName == "IMG" );
        var indexOfShownImg = 0;
        imgs.forEach((item)=>{
            if(item.classList.contains('show-img')){
                indexOfShownImg = imgs.indexOf(item);
                item.classList.remove('show-img')
            }
        })
        
        indexOfShownImg == imgs.length-1 ? indexOfShownImg =0 :indexOfShownImg++;
        imgs[indexOfShownImg].classList.add('show-img')
        console.log('jit')

        // window.location.replace(img)
    }
    return (
        <section className="site-section myproject-section ">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                    <div className="section-heading text-center">
                        <h3>
                            My <strong>Projects</strong>
                        </h3>
                        <h5>click the image to switch</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="project">
                            
                                <img onClick={clickImageHandler} src={imgChat1} alt="" className="img-fluid show-img" />
                                <img onClick={clickImageHandler} src={imgChat2} alt="" className="img-fluid" />
                                <img onClick={clickImageHandler} src={imgChat3} alt="" className="img-fluid" />
                                <img onClick={clickImageHandler} src={imgChat4} alt="" className="img-fluid" />
                            
                            <div className="project-info text-center p-4">
                                <h3 className="mb-3">
                                <a href="#">M-Notes App</a>
                                </h3>
                                <p className="mb-3">
                                Notes Adler Notes is free, full-featured and easy to use M-Chat app for Android. 
                                You can use it as a digital notebook or diary  .
                                 It saves your inspirations, holiday plans, shopping lists or anything you want to organize or remember!
                                  Colors and tags help you to organize and classify everything.
                                   With M-Chat you can work everywhere, stay productive and get reminders at the right time.
                                </p>
                                <div className="meta">
                                    <p className="technologies">Java Language</p>
                                    <p className="technologies">SQLite</p>
                                    <p className="technologies">Room</p>
                                    <p className="technologies">Material Design</p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4  mb-4">
                        <div className="project">
                            
                                <img onClick={clickImageHandler} src={imgGallery1} alt="" className="img-fluid show-img" />
                                <img onClick={clickImageHandler} src={imgGallery2} alt="" className="img-fluid" />
                                <img onClick={clickImageHandler} src={imgGallery3} alt="" className="img-fluid" />
                                <img onClick={clickImageHandler} src={imgGallery4} alt="" className="img-fluid" />
                            
                            <div className="project-info text-center p-4">
                                <h3 className="mb-3">
                                <a href="#">M-Chat</a>
                                </h3>
                                <p className="mb-3">
                                    this project is a project that tought me a lot in MVVM design architecture  and Firebase Database, 
                                    with JAcVA and Firebase Databas.
                                    where you can regester and login then you can find the users to chat with theme.
                                    you can also creat a ChatGroup where you can chat  with a group of people.

                                </p>
                                <div className="meta">
                                    <p className="technologies">Java Language</p>
                                    <p className="technologies">Android SDK</p>
                                    <p className="technologies">FireBase,FireStore,FireBase Storage and Realtime </p>
                                    <p className="technologies">MVVM architecture(Design Pattern)</p>
                                    <p className="technologies">Material Design</p>
                                    <p className="technologies">Authentication(Email,Facebook,Gmail)</p>
                                    <p className="technologies">Google Admob</p>


                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4  mb-4">
                        <div className="project">
                            
                                <img onClick={clickImageHandler} src={imgEcommerece1} alt="" className="img-fluid show-img" />
                                <img onClick={clickImageHandler} src={imgEcommerece2} alt="" className="img-fluid" />
                                <img onClick={clickImageHandler} src={imgEcommerece3} alt="" className="img-fluid" />
                                <img onClick={clickImageHandler} src={imgEcommerece4} alt="" className="img-fluid" />
                                <img onClick={clickImageHandler} src={imgEcommerece5} alt="" className="img-fluid" />
                            
                            <div className="project-info text-center p-4">
                                <h3 className="mb-3">
                                <a href="#">E-commerce</a>
                                </h3>
                                <p className="mb-3">
                                    where you can regester and login .
                                    An ecommerce mobile app that aim at providing an immersive and unique experience 
                                    that makes online shopping a much simpler and seamless process. At the same time,
                                    it is includes features that drive sales and boost revenues for your business.
                                     
                                     I built this App  with JAVA and Firebase Databas for storing data,
                                    and used MVVM design architecture to make the code more cleaner and easy to customize. 
                                    
                    
                                </p>
                                <div className="meta">
                                    <p className="technologies">Java Language</p>
                                    <p className="technologies">Authentication(Email,Facebook,Gmail)</p>
                                    <p className="technologies">FireBase,FireStore,FireBase Storage and Realtime </p>
                                    <p className="technologies">MVVM architecture (Design Pattern)</p>
                                    <p className="technologies">Material Design</p>
                                    <p className="technologies">Android SDK</p>
                                    <p className="technologies">Push Notifications</p>
                                    <p className="technologies">Google Admob</p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default MyProject
