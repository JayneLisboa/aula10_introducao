'use client'
import { useState } from "react";
import "./quiz.css"

function Quiz2() {

    const[p1, alteraP1 ] =useState(0)
    const[p2, alteraP2 ] =useState(0)
    const[p3, alteraP3 ] =useState(0)
    const[p4, alteraP4 ] =useState("")
    const[total, alteraTotal ] =useState(0)
    
    const [mostraP1, alteraMostraP1] = useState(true)
    const [mostraP2, alteraMostraP2] = useState(false)

    const [ selecionado, alteraSelecionado ] = useState(["","","",""])

    
    function calculaPontos(){

        let totalAtualizado

        if(p4 == "Naruto"){
            totalAtualizado = p1+p2+p3+1
            alteraTotal(totalAtualizado)
        }else{
            totalAtualizado = p1+p2+p3
            alteraP4(totalAtualizado)
        }

        localStorage.setItem("total", totalAtualizado)

    }

    return ( 
        <di>
            <h1> Quiz jay </h1>
            <br/>
            <p className="enunciado"> Assina-le a opção correta!</p>
            <br/>

            <hr/>


            {
                mostraP1 == true &&
                
                   
                    <div>
                        <h2> Qual a cor do cavalo branco de Napoleão?</h2>
                        <br/>
                        <label> <input name=" p1" type="radio" onChange={()=> { alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}}/> Preto </label>
                        <br/>
                        <label> <input name=" p1" type="radio" onChange={()=> { alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}}/> Azul </label>
                        <br/>
                        <label> <input name=" p1" type="radio" onChange={()=> { alteraP1(1); alteraMostraP2(true); alteraMostraP1(false)}}/> Branco </label>
                        <br/>
                        <label> <input name=" p1" type="radio" onChange={()=> { alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}}/> Transparente </label>

                    </div>


            }


            <br/>


            <hr/>
            <br/>

            {
                mostraP2 == true &&

                <div>
                    <h2 className="selecionado"> Qual a melhor letra?</h2>
                    <br/>
                    <label> <input name=" p2" type="radio" onChange={ ()=> {alteraP2(1); alteraMostraP1(true); alteraMostraP2(false)}}/> A </label>
                    <br/>
                    <label> <input name=" p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP1(true); alteraMostraP2(false)}}/> B </label>
                    <br/>
                    <label> <input name=" p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP1(true); alteraMostraP2(false)}}/> C </label>
                    <br/>
                    <label> <input name=" p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP1(true); alteraMostraP2(false)}}/> X </label>

                </div>
            }


            <hr/>



            

            <button onClick={ ()=> calculaPontos}>Enviar respostas </button>
            <p> Total de pontos: {total}</p>



        </di>
     );
    }
    
    export default Quiz2;
   