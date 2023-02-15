const Navbar = () => {
    return (
        <div className="navbar bg-primary">
            <div className="container">
                <div className="navbar-brand text-light">
                    SHOP RAPHA
                </div>
                <div className="d-flex">
                    <button type="button" className="btn btn-primary">Home</button>
                    <button type="button" className="btn btn-primary">About</button>
                    <button type="button" className="btn btn-primary">Shop</button>

                </div>
            </div>
        </div>
    );
}

export default Navbar;