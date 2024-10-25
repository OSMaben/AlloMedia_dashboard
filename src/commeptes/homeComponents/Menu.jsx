export default function Menu() {
    return (
        <>
            <section className="section recipes" id="recipes">
                <h2>Try Our Special Recipes</h2>
                <div className="row container">
                    <div className="filters d-flex">
                        <span data-filter="All Product">See All Product</span>
                        <span data-filter="Fast Food">Fast Food</span>
                        <span data-filter="Rice Menu">Rice Menu</span>
                        <span data-filter="Desserts">Desserts</span>
                        <span data-filter="Coffee">Coffee</span>
                        <span data-filter="Pizza">Pizza</span>
                    </div>
                    <div className="products">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper" id="products-wrapper">
                                <div className="swiper-slide">
                                    <div className="card">
                                        <div className="image"><img src="./images/meat-2.svg" alt=""/></div>
                                        <div className="rating">
                                            <span><i className="bx bxs-star"></i></span>
                                            <span><i className="bx bxs-star"></i></span>
                                            <span><i className="bx bxs-star"></i></span>
                                            <span><i className="bx bxs-star"></i></span>
                                            <span><i className="bx bxs-star"></i></span>
                                        </div>
                                        <h4>Crispy Fried Chicken</h4>
                                        <div className="price">
                                            <span>Price</span><span className="color">$13.00</span>
                                        </div>
                                        <div className="button">Add To Cart+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination">
                            <div className="custom-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}