"use client"
import { useState } from "react";
import "./home.css"



export default function Home() {
    let [carrinho, alteraCarrinho] = useState (0)

    
    

  return (
    <div>
        <h1>Jay Supermarket</h1>

        <br/>
        
        <p>O melhor Supermercado da cidade! </p>
        <hr/>
        <br/>

        <p className="carrinho">Itens no carrinho: {carrinho}</p>

        <br/>
        <h2>Produtos</h2>


        <br/>
        <div className="produto">

        <img src="https://placehold.co/150"/>
        <p>Uma cenoura </p>
        <p> R$ 4,50</p>
        <button onClick={ ()=> alteraCarrinho(button)}>Comprar</button>
        </div>

    </div>
  );
}
