import '../../../index.scss'
import './Contact.scss'

import React from 'react'

export const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="contact__map">
                    <div className="map-responsive">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.260444059897!2d-64.43485263314855!3d-33.20726771665574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d1f92cbd9bdadf%3A0xc4a9e5272bb9c9bf!2sIPEA+Raul+Scalabrini+Ortiz!5e0!3m2!1ses!2sar!4v1550547197750"
                            title="Ubicación IPEA 215 Raúl Scalabrini Ortiz"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={{border: 0}}
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="contact__info">
                    <h3>Datos de contacto</h3>
                    <hr />
                      <address>
                          <h3>Dirección</h3>
                          <a href="https://goo.gl/maps/mow3SFgScX12" target="_blank" rel="noopener noreferrer" >
                            <span>IPEA 215 Raúl Scalabrini Ortiz</span><br />
                            Av. Buenos Aires N° 725<br />
                            (5825) STA. CATALINA (Holmberg) Córdoba Rep. Argentina</a>
                          <h3>Teléfono</h3>
                          <a href="tel:+543584998962">(0358) 4998962</a> | <a href="tel:+543584298696">(0358) 154298696</a>
                          <h3>Correo</h3>
                          <a href="mailto:secretaria@ipea215.edu.ar">secretaria@ipea215.edu.ar</a>
                      </address>
                </div>
            </section>
        </>
    )
}