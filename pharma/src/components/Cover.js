
function Cover(){
    return (
        <section id="cover">
            <div className="container-fluid d-block w-300" id="cover-content">
                <div className="px-4 py-5 my-5 text-center">  
                    <h1>Pages Verte Bénin</h1>

                    <p className="opacity-75">Magazine, conseils et répertoire des Pharmacies.</p>
                </div>
                <div className="px-4 py-5 my-5 text-center">  
                    <p className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a className="btn btn-primary btn-lg px-4 gap-3">Télécharger le magazine</a>         
                        <a className="btn btn-outline-secondary btn-lg px-4" href="#infos">En savoir plus</a>         
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Cover;