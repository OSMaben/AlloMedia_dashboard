export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="row container">
                    <div className="col">
                        <div className="logo d-flex">
                            <img src="./images/logo.png" alt="logo" />
                        </div>
                        <p>
                            Retail food delivery is a courier service in which a restaurant,
                            store, or independent food-delivery
                        </p>
                        <div className="icons d-flex">
                            <div className="icon d-flex">
                                <i className="bx bxl-facebook"></i>
                            </div>
                            <div className="icon d-flex"><i className="bx bxl-twitter"></i></div>
                            <div className="icon d-flex"><i className="bx bxl-linkedin"></i></div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h4>Company</h4>
                            <a href="">About Us</a>
                            <a href="">Blog</a>
                            <a href="">All Products</a>
                            <a href="">Locations Map</a>
                        </div>
                        <div>
                            <h4>Services</h4>
                            <a href="">Order tracking</a>
                            <a href="">Wish List</a>
                            <a href="">My account</a>
                            <a href="">Terms & Conditions</a>
                        </div>
                        <div>
                            <h4>Support</h4>
                            <a href="">FAQ</a>
                            <a href="">Policy </a>
                            <a href="">Business</a>
                            <a href="">Support Carrer</a>
                        </div>
                        <div>
                            <h4>Contact</h4>
                            <a href="">WhatsApp</a>
                            <a href="">Support 24 </a>
                            <a href="">Quick Chat</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}