import React from 'react';

const Header = () => (
    <header className="d-flex flex-column">
        <nav className="w-100">
            <div className="d-flex align-items-center">
                <img  className="logo" src={require('../../images/logo.png')} alt="logo" />
                <h3 className="title-project">Loren</h3>
            </div>
            <div className="d-flex align-items-center">
                <ul className="navbar-nav d-flex flex-row mr-5">
                    <li className="nav-item mr-3">
                        Página Inicial
                    </li>
                    <li className="nav-item mr-3">
                        Sobre Nós
                    </li>
                    <li className="nav-item mr-3">
                        Feed de Notícias
                    </li>
                    <li className="nav-item mr-3">
                        Reportar Caso
                    </li>
                    <li className="nav-item">
                        Estatisticas
                    </li>
                </ul>
            </div>
        </nav>
        <main className="carousel slide" data-rite="carousel" id="carousel-header">
            <ol className="carousel-indicators">
                <li data-target="#carousel-header" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-header" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={require('../../images/pink.png')} alt="first slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={require('../../images/green.png')} alt="second slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-header" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carousel-header" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </main>
    </header>
);

export default Header;