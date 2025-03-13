'use client'
import { useState } from "react";
import "./projeto.css"

function quizbandeiras(){
    
    const [b1, alterab1] = useState(0)
    const [b2, alterab2] = useState(0)
    const [b3, alterab3] = useState(0)
    const [b4, alterab4] = useState(0)

    const [mostrab1, alteraMostrab1] = useState(true)
    const [mostrab2, alteraMostrab2] = useState(false)
    const [mostrab3, alteraMostrab3] = useState(false)
    const [mostrab4, alteraMostrab4] = useState(false)
    const [mostrab5, alteraMostrab5] = useState(false)

    const [mostraResposta, alteraMostraResposta] = useState(false)


    const [TotalPontos, alteraTotalPontos] = useState(0)
    
    function somaPontos(valor){

        let totalAtualizado = 0
        totalAtualizado = b1+b2+b3+b4+valor
        
        alteraTotalPontos(totalAtualizado)

        let valorDoBanco = parseInt(localStorage.getItem("total"))

        localStorage.setItem("total", totalAtualizado + valorDoBanco )

    }
    
    return ( 
        <div>
            <h1>QUIZ BANDEIRAS</h1>

            {
                mostrab1 == true &&
               <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png"></img>
                  <div className="divisao">

                    <p onClick={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}> <strong>Brassil</strong> </p>
                    <p onClick={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}> <strong>Basil</strong></p>
                  </div>
                  <div className="divisao">

                    <p onClick={ ()=> {alterab1(0); alteraMostrab1(false); alteraMostrab2(true)}}> <strong>Drasil</strong></p>
                    <p onClick={ ()=> {alterab1(1); alteraMostrab1(false); alteraMostrab2(true)}}> <strong>Brasil</strong></p>

                  </div>
                </div>
            }


            {
                mostrab2 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/125px-Flag_of_Burkina_Faso.svg.png"></img>
                    <div className="divisao">
                        <p onClick={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}><strong>Gana</strong></p>
                        <p onClick={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}><strong>Camarões</strong></p>
                   </div>

                    <div className="divisao">
                        <p onClick={ ()=> {alterab2(1); alteraMostrab2(false); alteraMostrab3(true)}}><strong>Burkina Fasso</strong></p>
                        <p onClick={ ()=> {alterab2(0); alteraMostrab2(false); alteraMostrab3(true)}}><strong>Moçambique</strong></p>
                    </div>
                </div>

            }


            {
                mostrab3 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira </h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}><strong>Croácia</strong></p>
                        <p onClick={ ()=> {alterab3(1); alteraMostrab3(false); alteraMostrab4(true)}}><strong>Sérvia</strong></p>

                    </div>

                    <div className="divisao">

                        <p onClick={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}><strong>Russia</strong></p>
                        <p onClick={ ()=> {alterab3(0); alteraMostrab3(false); alteraMostrab4(true)}}><strong>Slováquia</strong></p>

                    </div>

                </div>
            }

            {
                mostrab4 == true &&
                <div>
                    
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png"></img>

                    <div className="divisao">

                    <p onClick={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}><strong>França</strong> </p>
                    <p onClick={ ()=> {alterab4(1); alteraMostrab4(false); alteraMostrab5(true)}}><strong>Itália </strong></p>

                    </div>

                    <div className="divisao">

                    <p onClick={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}><strong>México </strong></p>
                    <p onClick={ ()=> {alterab4(0); alteraMostrab4(false); alteraMostrab5(true)}}><strong>Austria</strong><strong></strong></p>

                    </div>

                </div>
            }

            {
                mostrab5 == true &&
                <div>
                    <h2 className="titulo"> Descubra a bandeira</h2>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg/125px-Flag_of_Vatican_City_%282023%E2%80%93present%29.svg.png"></img>
                    <div className="divisao">

                        <p onClick={ ()=> {alteraMostrab5(false); alteraMostraResposta(true); somaPontos(0)}}><strong>Chile</strong> </p>
                        <p onClick={ ()=> {alteraMostrab5(false); alteraMostraResposta(true); somaPontos(0)}}><strong>irã </strong></p>

                    </div>

                    <div className="divisao">

                        <p onClick={ ()=> {alteraMostrab5(false); alteraMostraResposta(true); somaPontos(1)}}><strong>Vaticano</strong> </p>
                        <p onClick={ ()=> {alteraMostrab5(false); alteraMostraResposta(true); somaPontos(0)}}><strong>Chipre</strong></p>

                    </div>

                </div>
            }   

            {
                mostraResposta == true && 
                <div>

                    <p className="resposta"> Você acertou {TotalPontos} de 5!</p>

                </div>
            }

                
                
            
            

        </div>
     );
}

export default quizbandeiras;