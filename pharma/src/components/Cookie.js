
function Cookie(){

    return (
        <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="agree-cookie" aria-labelledby="offcanvasBottomLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body small">
                <p className="text-center">Nos partenaires et nous déposons des cookies et utilisons des informations non sensibles de votre appareil pour améliorer nos produits et afficher des publicités et contenus personnalisés. Vous pouvez accepter ou refuser ces différentes opérations. Pour en savoir plus sur les cookies, les données que nous utilisons, les traitements que nous réalisons et les partenaires avec qui nous travaillons, vous pouvez consulter notre politique de confidentialité.</p>

                <div className="container">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="offcanvas" aria-label="Accepter">Refuser</button>
                    <button type="button" className="btn btn-success" aria-label="Refuser">Accepter</button>
                </div>
            </div>
        </div>
    );
}

export default Cookie;