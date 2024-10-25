export default function Menu() {
    return (
        <>
            <section class="section recipes" id="recipes">
                <h2>Try Our Special Recipes</h2>
                <div class="row container">
                    <div class="filters d-flex">
                        <span data-filter="All Product">See All Product</span>
                        <span data-filter="Fast Food">Fast Food</span>
                        <span data-filter="Rice Menu">Rice Menu</span>
                        <span data-filter="Desserts">Desserts</span>
                        <span data-filter="Coffee">Coffee</span>
                        <span data-filter="Pizza">Pizza</span>
                    </div>
                    <div class="products">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper" id="products-wrapper">
                                <div class="swiper-slide">
                                    <div class="card">
                                        <div class="image"><img src="./images/meat-2.svg" alt=""/></div>
                                        <div class="rating">
                                            <span><i class="bx bxs-star"></i></span>
                                            <span><i class="bx bxs-star"></i></span>
                                            <span><i class="bx bxs-star"></i></span>
                                            <span><i class="bx bxs-star"></i></span>
                                            <span><i class="bx bxs-star"></i></span>
                                        </div>
                                        <h4>Crispy Fried Chicken</h4>
                                        <div class="price">
                                            <span>Price</span><span class="color">$13.00</span>
                                        </div>
                                        <div class="button">Add To Cart+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination">
                            <div class="custom-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}