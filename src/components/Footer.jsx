import IconReact from './IconReact';

function Footer() {
    return (
        <div className="container py-5">
            <div className="container-fluid  py-3 my-5">
                <div className="row">
                    <div className="col-12">
                    <footer className="d-flex justify-content-between align-items-center py-4 my-5 border-top slide-in-blurred-bottom ">
                    <p className="col-md-4 mb-0 text-light">© 2023 Jody</p>
                
                    <div className='d-flex align-items-center justify-content-center d-none d-lg-block'>
                        <a href="/" className=" mb-3 mb-md-0 me-5 link-dark text-decoration-none">
                        <IconReact />
                        </a>

                    </div>
                   
                
                    <div className="d-flex justify-content-end text-light">
                    <p className=" mb-0 text-light text-break d-none d-lg-block">Grazie per aver utilizzato la mia applicazione! :)</p>

                    </div>
                </footer>
                    </div>
                </div>
                
            </div>
            
        </div>
      )
}


export default Footer