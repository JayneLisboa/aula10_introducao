'use client'
import { useState } from "react";

function quizbandeiras(){
    
    const [b1, alterab1] = useState(0)
    const [b2, alterab2] = useState(0)
    const [b3, alterab3] = useState(0)
    const [b4, alterab4] = useState(0)
    const [b5, alterab5] = useState(0)

    const [mostrab1, alteraMostrab1] = useState(true)
    const [mostrab2, alteraMostrab2] = useState(false)
    const [mostrab3, alteraMostrab3] = useState(false)
    const [mostrab4, alteraMostrab4] = useState(false)
    const [mostrab5, alteraMostrab5] = useState(false)


    const [TotalPontos, alteraTotalPontos] = useState(0)
    
    function somaPontos(){

        let totalAtualizado = 0
        totalAtualizado = b1+b2+b3+b4+b5
        
        alteraTotalPontos(totalAtualizado)

        let valorDoBanco = parseInt(localStorage.getItem("total"))

        localStorage.setItem("total", totalAtualizado + valorDoBanco )

    }
    
    return ( 
        <div>
            <h1>Quiz Bandeiras de cada país</h1>

            {
                mostrab1 == true &&
               <div>
                    <h2> Descubra a bandeira</h2>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"></img>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}/> Brassil </p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}/> Basil</p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}/> Drasil</p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab1(1); alteraMostrab1(false); alteraMostrab2(true)}}/> Brasil</p>
                </div>
            }


            {
                mostrab2 == true &&
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/125px-Flag_of_Burkina_Faso.svg.png"></img>
                    <h2> Descubra a bandeira</h2>
                    <p> <input name=" b2" type="radio" onChange={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}/>Gana</p>
                    <p> <input name=" b2" type="radio" onChange={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}/>Camarões</p>
                    <p> <input name=" b2" type="radio" onChange={ ()=> {alterab2(1); alteraMostrab2(false); alteraMostrab3(true)}}/>Burkina Fasso</p>
                    <p> <input name=" b2" type="radio" onChange={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}/>Moçambique</p>
                </div>

            }


            {
                mostrab3 == true &&
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png"></img>
                    <h2> Descubra a bandeira </h2>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}/>Croácia</p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab3(1); alteraMostrab3(false); alteraMostrab4(true)}}/>Sérvia</p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}/>Russia</p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}/>Slováquia</p>

                </div>
            }

            {
                mostrab4 == true &&
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png"></img>
                    <h2> Descubra a bandeira</h2>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}/>França </p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab4(1); alteraMostrab4(false); alteraMostrab5(true)}}/>Itália </p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}/>México </p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}/>Austria</p>

                </div>
            }

            {
                mostrab5 == true &&
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg/125px-Flag_of_Vatican_City_%282023%E2%80%93present%29.svg.png"></img>
                    <h2> Descubra a bandeira</h2>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab5(0); alteraMostrab5(false)}}/>Chile </p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab5(0); alteraMostrab5(false)}}/>irã </p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab5(1); alteraMostrab5(false)}}/>Vaticano </p>
                    <p> <input name=" b1" type="radio" onChange={ ()=> {alterab5(0); alteraMostrab5(false)}}/>Chipre</p>

                </div>
            }

                <button onClick={()=> somaPontos()}>Enviar</button>
                
                
            
            

        </div>
     );
}

export default quizbandeiras;