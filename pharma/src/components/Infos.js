
function Infos(){

    return(
        <section id="infos">
            <div className="container-fluid px-4 py-5 my-5 ">
                <h1 className="display-5 fw-bold text-body-emphasis">Information</h1>
                <div className="text-center">
                    <div className="row">
                        <div className="col-lg col-md col-sm my-3">
                            <div className="card">
                                <img src="/img/msp.png" className="img-fluid card-img-top" id="logo-msp" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">MSP</h5>
                                    <p className="card-text">Ministère de la Santé Public du Bénin</p>
                                    <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#pdf-viewer">A propos</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md col-sm my-3">
                            <div className="card">
                                <img src="/img/abrp.png" className="img-fluid card-img-top" id="logo-abrp" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">ABRP</h5>
                                    <p className="card-text">Agence Béninoise de Régulation Pharmaceutique</p>
                                    <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#pdf-viewer">A propos</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md col-sm my-3">
                            <div className="card" >
                                <img src="/img/onpb.png" className="card-img-top" id="logo-onpb" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">ONPB</h5>
                                    <p className="card-text">Ordre National Des Pharmaciens du Bénin</p>
                                    <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#pdf-viewer">A propos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Infos;