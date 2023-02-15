import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-primary">
            <div className="container">
                <div className="navbar-brand text-light">
                    SHOP RAPHA
                </div>
                <div className="d-flex">
                    <Link href="/"> <button type="button" className="btn btn-primary">Home</button></Link>
                    <Link href="/about"><button type="button" className="btn btn-primary">About</button></Link>
                    <Link href="/shop"><button type="button" className="btn btn-primary">Shop</button></Link>

                </div>
            </div>
        </div >
    );
}

export default Navbar;