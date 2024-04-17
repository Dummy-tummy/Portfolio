import React from "react"
import myImage from '../assets/images/my-picture.jpg';
import '../assets/css/about.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resume from "../assets/documents/Aum_Zaveri_Resume.pdf";

function About() {

    return (
        <section id="about">
            <h1 className="text-center mb-5">
                About Me
            </h1>
            <div className="container">
                <div className="row align-item-center">
                    <div className="col-md-4">
                        {/* <br className="hidden lg:inline-block" /> */}
                        <img src={myImage} alt='my-picture' className='my-picture img-fluid' />
                    </div>
                    <div className="col-md-8">
                        <p className="introduction content">
                            Welcome to my digital domain! I'm excited to extend a warm greeting as you step into this virtual space.
                            While my journey into the realm of technology didn't commence in my childhood, the moment I set foot on this path,
                            I found myself enthralled and invigorated by its boundless possibilities.
                        </p>
                        <p className="background content">
                            Though my formative years weren't replete with gadgets and gizmos,
                            immersing myself in the world of technology revealed a passion I had yet to uncover.
                            Pursuing my degree in computer science opened doors to daily epiphanies and newfound discoveries,
                            igniting my fervor for this perpetually evolving field.
                        </p>
                        <p className="goal content">
                            Looking ahead, my aspirations in technology soar to greater heights.
                            I aim to evolve into a versatile and adept developer, proficient across various technologies and platforms.
                            My ambition is to make meaningful contributions to innovative projects that positively impact lives. Fueled by a fervent dedication to continuous learning and growth,
                            I eagerly anticipate embracing fresh challenges and refining my expertise in software development.
                        </p>
                        <a href="https://drive.google.com/file/d/1u39hymQPPC53ZBhuOk6KZWSUAU-JAnWS/view?usp=sharing" className="btn btn-outline-secondary"> My Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default About