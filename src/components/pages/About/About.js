import React from 'react'
import logo from '../../../logo.svg'
import Portada from '../../images/portada.jpg'
import RSOrtiz from '../../images/RSOrtiz.jpg'
import './About.scss'

export const About = () => {
    return (
        <>
            <section class="hero">
        <div class="hero__content fadeInUp">
            <img src={logo} alt="IPEA 215 Raúl Scalabrini Ortiz" class="hero__content--img" />
            <h2 class="hero__content--title">IPEA 215<br />Raúl Scalabrini Ortiz</h2>
        </div>
        <div class="hero__backface"></div>
    </section>
    
    <section class="about" >
        <h2 class="about__title">Nuestra institución</h2>
        <hr class="about--hr" />
        <div class="about__container">
            
            
            <h3 class="about__container--subtitle">Un poco de historia</h3>
            <div class="row">
                <img class="about__container--img mr" src={Portada} alt="Edificio de nuestra institución." />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quidem, aperiam, placeat maiores consequatur explicabo necessitatibus delectus qui inventore, magnam cum minima voluptatum dignissimos praesentium iste accusamus iusto reprehenderit ipsam?</p>
            </div>
            
            
            <h3 class="about__container--subtitle">Raúl Scalabrini Ortiz</h3>
            <div class="row">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet explicabo consequuntur? Ea aliquid molestiae a in. Maxime, nostrum, nesciunt minus repellendus molestias aliquam debitis laborum, eaque tempora vel sed.</p>
                <img class="about__container--img ml" src={RSOrtiz} alt="Raúl Scalabrini Ortiz" />
            </div>
            
            <h3 class="about__container--subtitle">Datos generales de la institución</h3>
            <div class="row">
                
                <div class="about__container__data">
                    <h4>Tipo de Institución</h4>
                    <p>Secundario Técnico</p>
                    <h4>Orientación</h4>
                    <p>Agropecuaria</p>
                    <h4>Ámbito de Gestión</h4>
                    <p>Estatal</p>
                    <h4>Tipo de Dependencia:</h4>
                    <p>Jurisdicción Educativa Provincial</p>
                </div>
            </div>
        </div>

    </section>
        </>
    )
}