import React from 'react';

function Header() {
    return (
        <div className='header-content'>
            <div className='name-content'>
                <h1>Rick and Morty</h1>
            </div>
            <div className='content-header'>
                <img src='./Images/Foto-Rick-and-Morty-PNG.png' />
                <div className='header-description'>
                    <h2>Sobre Rick &amp; Morty</h2>
                    <p>
                    Criada por Justin Roiland e Dan Harmon, Rick &amp; Morty é uma série animada de comédia que mostra as aventuras interdimensionais de Rick, a mente mais brilhante 
                    da galáxia, e seu neto Morty.
                    <br></br><br></br>
                    Com sua arma capaz de criar portais para viajar no tempo-espaço, Rick leva Morty para explorar todos as absurdas formas de vida que o universo é capaz de 
                    sustentar. 
                    <br></br><br></br>
                    Apesar de genial, Rick tem sofre de alcoolismo e possui uma relação conflituosa com sua família, fruto da sua visão cínica da vida e seu egoísmo. Por outro 
                    lado, Morty está longe de ter o intelecto do seu avô, mas é o único capaz de fazê-lo ser um pouquinho mais gentil.
                    <br></br><br></br>
                    Entre momentos hilários e reflexões interessantes sobre a vida, Rick &amp; Morty arranca gargalhadas e ainda rende ótimas discussões filosóficas.   
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;