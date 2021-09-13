import React from "react";
import { Button } from "../Button";
import './style.css'

const News = () =>{
    return(
        <div className="news">
            <div className="container m-auto">
                <div className='news-content'>
                    <h4>Participe de nossas news com promoções e novidades!</h4>
                    <div>
                        <form action="#">
                            <input type="text" placeholder="Digite seu nome" required/>
                            <input type="email" placeholder="Digite seu email"required />
                            <Button
                                text="Eu quero!"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export {News}