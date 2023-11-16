import logo from '../logo.svg';

function Header(){
    return(
        <header className="px-3 py-3 mb-4" id="header">
            <nav className="navbar bg-success text-white bg-opacity-75 fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Pages Vertes Bénin
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="menu" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Pages Vertes Bénin</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#cover">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#infos">Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#rubric">Bon à savoir</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#marketing">Espace santé</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#discover">Pharmacies</a>
                                </li>
                            </ul>
                        </div>
                        <div className="offcanvas-footer">
                            <p className="text-center text-body-secondary"><a href="#legal" className="nav-link px-2 text-body-secondary">Mentions légales</a> Copyright © {(new Date).getFullYear()} .CC - All rights reserved</p>
                        </div>    
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;