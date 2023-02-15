import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container my-3">
                {children}
            </div>
        </div>
    );
}

export default Layout;