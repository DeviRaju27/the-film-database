import db from "../assets/tfdb_logo_orginial_bg.png";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="bg-light text-dark p-1">
            <nav className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className=" text-center my-2 d-md-none">
                        <Link to='/'><img src={db} className="img-fluid logo-header" /></Link>
                    </div>
                    <div className="text-center my-2 d-none d-md-block">
                         <Link to='/'><img src={db} className="img-fluid logo-header" /></Link>
                    </div>

                    <div className=" text-center my-2 d-md-none">
                        <h5 className="m-0"><Link to='/' className="text-decoration-none text-dark">The Film DataBase</Link></h5>
                    </div>

                    <div className="header-center ft-inter d-none d-md-block">
                        <h3 className="m-0"><Link to='/' className="text-decoration-none text-dark">The Film DataBase</Link></h3>
                    </div>

                    <div className="header-right link-border my-auto d-none d-md-block">
                    
                       <Link to='/' className="text-dark text-decoration-none fs-5 ft-bebas">Trending movies</Link>
                    </div>
                    <div className="header-right  link-border  my-auto d-md-none">
                        <Link to='/' className="text-dark text-decoration-none">Trending <br/> movies</Link>
                    </div>

                </div>
            </nav>
        </header>
    )
}
export default Header