import { useState } from 'react';
import { Document, Page} from 'react-pdf';
import Legal from './Legal';

function Viewer(){

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="offcanvas offcanvas-top" tabIndex="-1" id="pdf-viewer" aria-labelledby="offcanvasTopLabel">
            <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <Document file="../magazine.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <Legal />
            </div>
        </div>
    );
}

export default Viewer;