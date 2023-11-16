function Footer(){
    return(
        <footer className="py-3 my-4" id="footer">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#cover" className="nav-link px-2 text-body-secondary">Accueil</a></li>
                <li className="nav-item"><a href="#infos" className="nav-link px-2 text-body-secondary">Information</a></li>
                <li className="nav-item"><a href="#rubric" className="nav-link px-2 text-body-secondary">A savoir</a></li>
                <li className="nav-item"><a href="#marketing" className="nav-link px-2 text-body-secondary">Santé</a></li>
                <li className="nav-item"><a href="#discover" className="nav-link px-2 text-body-secondary">Pharmacies</a></li>
            </ul>
            <p className="text-center text-body-secondary">Copyright © {(new Date).getFullYear()} .CC - All rights reserved</p>
        </footer>
    );
}

export default Footer;