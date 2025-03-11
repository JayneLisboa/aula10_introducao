'use client'
import { useState } from "react";
import "./quiz.css"

function Quiz() {

    const[p1, alteraP1 ] =useState(0)
    const[p2, alteraP2 ] =useState(0)
    const[p3, alteraP3 ] =useState(0)
    const[p4, alteraP4 ] =useState("")
    const[total, alteraTotal ] =useState(0)

    const [ selecionado, alteraSelecionado ] = useState(["","","",""])

    
    function calculaPontos(){

        if(p4 == "Naruto"){
            alteraTotal(p1+p2+p3+1)
        }else{
            alteraP4(p1+p2+p3)
        }
    }

    return ( 
        <di>
            <h1> Quiz jay </h1>
            <br/>
            <p> Assina-le a opção correta!</p>

            <hr/>
            <br/>

            <h2> Qual a cor do cavalo branco de Napoleão?</h2>
            <br/>
            <label> <input name=" p1" type="radio" onChange={()=> alteraP1 (0)}/> Preto </label>
            <br/>
            <label> <input name=" p1" type="radio" onChange={()=> alteraP1 (0)}/> Azul </label>
            <br/>
            <label> <input name=" p1" type="radio" onChange={()=> alteraP1 (1)}/> Branco </label>
            <br/>
            <label> <input name=" p1" type="radio" onChange={()=> alteraP1 (0)}/> Transparente </label>

            <hr/>
            <br/>

            <h2 className="selecionado"> Qual a melhor letra?</h2>
            <br/>
            <label> <input name=" p2" type="radio" onChange={ ()=> alteraP2(1)}/> A </label>
            <br/>
            <label> <input name=" p2" type="radio" onChange={ ()=> alteraP2(0)}/> B </label>
            <br/>
            <label> <input name=" p2" type="radio" onChange={ ()=> alteraP2(0)}/> C </label>
            <br/>
            <label> <input name=" p2" type="radio" onChange={ ()=> alteraP2(0)}/> X </label>

            <hr/>


            <h2> Quanto é dois + 2</h2>
            <br/>
            <p className={selecionado [0]} onClick={ ()=> {alteraP3(0); alteraSelecionado (["selecionado","","",""])} }> 2  </p>
            <p className={selecionado [1]} onClick={ ()=> {alteraP3(0); alteraSelecionado (["","selecionado","",""])} }> 22 </p>
            <p className={selecionado [2]} onClick={ ()=> {alteraP3(1); alteraSelecionado (["","","selecionado",""])} }> 4  </p>
            <p className={selecionado [3]} onClick={ ()=> {alteraP3(0); alteraSelecionado (["","","","selecionado"])} }> sim</p>
            <hr/>


            <h2> Qual o melhor anime do mundo?</h2>
            <br/>
            <input onChange={(e)=> alteraP4(e.target.value)}/>



            <button onClick={ ()=>calculaPontos(p1+p2+p3)}>Enviar respostas </button>
            <p> Total de pontos: {total}</p>



        </di>
     );
    }
    
    export default Quiz;
   