import React from 'react'
import {herolink,enemylink} from './constantes'

const Hero = props =>{
    return(
        <div>
            <h1>{props.nome}</h1>
            <img src={props.link} alt="Heroi de Dororo"/>
        </div>
    );
}

const Enemy = props =>{
    return(
        <div>
            <h1>{props.nome}</h1>
            <img src={props.link} alt="Inimigo de Dororo"/>
        </div>
    );
}

const Arena = props =>{
    return(
        <div>
            props.nome}
            <Hero nome="Hyakkimaru"  link={herolink}/> 
            <Enemy nome="Tahomaru" link={enemylink}/>           
        </div>
    );
}

export {Arena}