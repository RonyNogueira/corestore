import React from "react";
import logoMini from "../../assets/img/corebizMini.png"
import vetexLogo  from "../../assets/img/vetex.png"
import { faEnvelope, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from "../Button";
import './style.css'


const Footer = ()=> {
    return(
        <footer className="footer">
            <div className="container m-auto">
                <div className="footer-address">
                    <h5>Localização</h5>
                    <ul>
                        <li>Avenida Andrômeda, 2000, Bloco 6 e 8</li>
                        <li>Alphavile-SP</li>
                        <li>brasil@corebiz.ag</li>
                        <li>+55 11 3090 1039</li>
                    </ul>
                </div>

                <div className="footer-contact-btn">
                    <a href="mailto:brasil@corebiz.ag">
                        <Button
                            text="Entre em contato"
                            icon={faEnvelope}
                        />
                    </a>
                    <a href="#">
                        <Button
                            text="Consulta online"
                            icon={faHeadphonesAlt}
                        />
                    </a>
                </div>

                <div className='footer-powered'>
                    <div className='footer-powered-content'>
                        <span>Powered by</span>
                        <img src={logoMini} alt="logo da corebiz em menor escala" />
                    </div>

                    <div className='footer-powered-content'>
                        <span>Powered by</span>
                        <img src={vetexLogo} alt="logo da vtex" />
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export {Footer}