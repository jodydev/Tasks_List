import IconReact from './IconReact';

function Footer() {
    return (
        <div className="container my-5 py-5">
            <div className="container-fluid  py-3 my-5">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-5 border-top slide-in-blurred-bottom ">
                    <p className="col-md-4 mb-0 text-light">© 2023 Jody</p>
                
                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <IconReact/>
                    </a>
                
                    <div className="d-flex justify-content-end text-light">
                    <p className=" mb-0 text-light text-break">Grazie per aver utilizzato la mia applicazione! :)</p>

                    </div>
                </footer>
            </div>
            
        </div>
      )
}


export default Footer