import React from 'react';
import about from "../images/about.png";
import Title from './Title';

function About() {
  return (
    <section className="section" id="about">
    <Title main_title='about' sub_title='us' />
    <div className="section-center about-center">
        <div className="about-img">
            <img src={about} className="about-photo" alt="awesome landscape"/>
        </div>
        <article className="about-info">
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illo?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perspiciatis!</p>
            <a href="#home" className="btn">read more</a>
        </article>
    </div>
    </section>
  )
}

export default About