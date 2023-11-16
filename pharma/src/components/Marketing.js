import logo from '../logo.svg';

function Marketing(){
    return (
        <section id="marketing">
            <div className="container-fluid px-4 py-5" id="marketing-content">
                <h1 className="display-5 fw-bold text-body-emphasis">Espace santé</h1>

                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="text-center px-3 py-3 mx-auto">
                            <img 
                                className="img-fluid img-thumbnail"
                                width="128"
                                height="128"
                                src="/icon/grossesse.png"
                            />
                        </div>
                        
                        <h2 className="text-uppercase">grossesse et bébé</h2>
                        <p className="text-capitalize">comment mettre toutes les chances de son côté ?</p>
                        <a href="#" className="icon-link">
                        Lire plus
                        </a>
                    </div>
                    <div className="feature col">
                    <   div className="text-center px-3 py-3 mx-auto">
                            <img 
                                className="img-fluid img-thumbnail"
                                width="128"
                                height="128"
                                src="/icon/grippe.png"
                            />
                        </div>
                        <h2 className="text-uppercase">Grippe</h2>
                        <p className="text-capitalize">Comment l'éviter et la soigner ?</p>
                        <a href="#" className="icon-link">
                        Lire plus
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="text-center px-3 py-3 mx-auto">
                            <img 
                                className="img-fluid img-thumbnail"
                                width="128"
                                height="128"
                                src="/icon/vitamine-d.png"
                            />
                        </div>
                        <h2 className="text-uppercase">Vitamine D</h2>
                        <p className="text-capitalize">la vitamine du Soleil !</p>
                        <a href="#" className="icon-link">
                        Lire plus
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="text-center px-3 py-3 mx-auto">
                            <img 
                                className="img-fluid img-thumbnail"
                                width="128"
                                height="128"
                                src="/icon/fatigue.png"
                            />
                        </div>
                        <h2 className="text-uppercase">Fatigue</h2>
                        <p className="text-capitalize">comment la combattre et retrouver la forme ?</p>
                        <a href="#" className="icon-link">
                        Lire plus
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="text-center px-3 py-3 mx-auto">
                            <img 
                                className="img-fluid img-thumbnail"
                                width="128"
                                height="128"
                                src="/icon/les-poux.png"
                            />
                        </div>
                        <h2 className="text-uppercase">Poux</h2>
                        <p className="text-capitalize">Comment éviter la contamination et transmission ?</p>
                        <a href="#" className="icon-link">
                        Lire plus
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="text-center px-3 py-3 mx-auto">
                            <img 
                                className="img-fluid img-thumbnail"
                                width="128"
                                height="128"
                                src="/icon/infection-urinaire.png"
                            />
                        </div>
                        <h2 className="text-uppercase">Infections urinaires</h2>
                        <p className="text-capitalize">comment traiter et prévenir une cystite ?</p>
                        <a href="#" className="icon-link">
                        Lire plus
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Marketing;