import React from 'react'

export default (props)=>{
    return(
        <div>
            <h1>Me chamo {props.nome}.</h1>
            <figure>
                <img src="https://pm1.narvii.com/7462/e940b42c0a56438dfb945f7e98d8548ce778a289r1-564-576v2_00.jpg"
                     alt="Tahomaru"/>
                <figcaption>Vilão de Dororo</figcaption>
            </figure>
        </div>

    )
}
/*
        <div>
            <h1>Me chamo {props.nome}.</h1>
            <figure>
                <img src="./imag/tahomaru.jpeg"
                     alt="Tahomaru"/>
                <figcaption>Vilão de Dororo</figcaption>
            </figure>
        </div>*/