const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#homeTitle">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutTitle">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolioTitle">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contactTitle">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;