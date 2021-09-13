import React, { useEffect } from "react";
import logo from "../../assets/img/gobeyond_logo.png"
import logoMobile from "../../assets/img/logoMobile.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faSearch, faShoppingCart, faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import "./style.css"
import { Link } from "react-router-dom";

const Header = () =>{

    const openMenu = () =>{
        let btn = document.querySelector(".btn-open")
        let menu = document.querySelector(".mob-nav-menu")
        btn.addEventListener("click", ()=>{
            menu.classList.remove("hide")
        })
    }

    const closeMenu = () =>{
        let btn = document.querySelector(".btn-close")
        let menu = document.querySelector(".mob-nav-menu")
        btn.addEventListener("click", ()=>{
            menu.classList.add("hide")
        })
    }

    useEffect(()=>{
        openMenu()
        closeMenu()
    },[])
    return(
        <header>
            <nav className='desk-nav container'>
               <Link to={"/"}> <img src={logo} className="desk-logo" alt="logo da corebiz" /></Link>
                <div>
                    <ul className="menu-itens">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Categoria 1 <FontAwesomeIcon icon={faCaretDown}/></Link>
                        </li>
                        <li>
                            <Link to={"/"}>Categoria 2 <FontAwesomeIcon icon={faCaretDown}/></Link>
                        </li>
                        <li>
                            <Link to={"/"}>Contato</Link>
                        </li>
                    </ul>
                </div>


                <div className='menu-search'>
                    <input type="text" placeholder="O que está procurando?" />
                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                </div>

                <div className="menu-profile">
                    <FontAwesomeIcon icon={faUser}/>
                    <Link to={"/"}>Minha conta</Link>
                </div>

                <div className="menu-cart">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <input type="text" value="1" disabled />
                </div>
            </nav>

            <div className="mob-nav">
                <div className="mob-nav-content">

                    <div className="mob-nav-top">
                        
                        <div className="menu-bars">
                             <FontAwesomeIcon className="btn-open" icon={faBars} size={"lg"}/>
                        </div>
                        
                        <Link to={"/"}> <img src={logoMobile} className="desk-logo" alt="logo da corebiz" /></Link>

                        <div className="menu-cart">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <input type="text" value="1" disabled />
                        </div>
                    </div>

                    <div className='menu-search'>
                        <input type="text" placeholder="O que está procurando?" />
                        <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                    </div>
                    
                </div>

                <div className="mob-nav-menu hide">
                    <div className="mob-nav-box">
                        <FontAwesomeIcon className="close-icon btn-close" icon={faTimesCircle}/>
                        <div className="mob-nav-menu-itens">
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/'}>Categorias 1</Link></li>
                                <li><Link to={'/'}>Categorias 2</Link></li>
                                <li><Link to={'/'}>Contato</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </header>
    )
}

export {Header}