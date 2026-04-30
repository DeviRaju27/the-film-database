import db from "../assets/tfdb_logo_orginial_bg.png";


function Header() {
    return (
        <header className="bg-light text-dark p-1">
            <nav className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className=" text-center my-2 d-md-none">
                        <img src={db} className="img-fluid logo-header" />
                    </div>
                    <div className="text-center my-2 d-none d-md-block">
                        <img src={db} className="img-fluid logo-header" />
                    </div>

                    <div className=" text-center my-2 d-md-none">
                        <h5 className="m-0"><a href="" className="text-decoration-none text-dark">The Film DataBase</a></h5>
                    </div>

                    <div className="header-center ft-inter d-none d-md-block">
                        <h3 className="m-0"><a href="" className="text-decoration-none text-dark">The Film DataBase</a></h3>
                    </div>

                    <div className="header-right link-border my-auto d-none d-md-block">
                        {/* <a href='' className="text-white me-3 text-decoration-none">Home</a> */}
                        <a href='' className="text-dark text-decoration-none fs-5 ft-bebas">Trending movies</a>
                    </div>
                    <div className="header-right  link-border  my-auto d-md-none">
                        {/* <a href='' className="text-white me-3 text-decoration-none">Home</a> */}
                        <a href='' className="text-dark text-decoration-none">Trending <br/> movies</a>
                    </div>

                </div>
            </nav>
        </header>
    )
}
export default Header