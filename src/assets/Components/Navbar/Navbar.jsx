

const Navbar = () => {

    const routes = [
        { id: 1, name: "Home", path: "/", place: "Main" },
        { id: 2, name: "About Us", path: "/about", place: "Main" },
        { id: 3, name: "Products", path: "/products", place: "Main" },
        { id: 4, name: "Contact", path: "/contact", place: "Main" },
        { id: 5, name: "Dashboard", path: "/dashboard", place: "User" },
    ];

    return (
        <nav>
            <ul className="md:flex">
                {
                    routes.map(route => <link key={route.id}></link>)
                
                }


            </ul>

        </nav>
    );
};

export default Navbar;