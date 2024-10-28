export default function Testimonials() {
    return (
        <>
            <section className="section testimonials" id="testimonials">
                <div className="row container">
                    <div className="col">
                        <div className="card" data-filter="rosele">
                            <div className="d-flex">
                                <div className="image">
                                    <img src="./images/profile-1.jpg" alt="" />
                                </div>
                                <div>
                                    <h4>Rosele Desoza</h4>
                                    <span>Marketing Coordinator</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-filter="marvin">
                            <div className="d-flex">
                                <div className="image">
                                    <img src="./images/profile-2.jpg" alt="" />
                                </div>
                                <div>
                                    <h4>Marvin McKinney</h4>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-filter="guy">
                            <div className="d-flex">
                                <div className="image">
                                    <img src="./images/profile-3.jpg" alt="" />
                                </div>
                                <div>
                                    <h4>Guy Hawkins</h4>
                                    <span>President of Sales</span>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-filter="kathryn">
                            <div className="d-flex">
                                <div className="image">
                                    <img src="./images/profile-4.jpg" alt="" />
                                </div>
                                <div>
                                    <h4>Kathryn Murphy</h4>
                                    <span>Marketing Coordinator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2>
                            What our Customers <br />
                            <span>are saying</span>
                        </h2>
                        <div className="test-wrapper">
                            <div className="testimonial active" data-id="rosele">
                                <div className="d-flex">
                                    <div>
                                        <h4>Rosele Desoza</h4>
                                        <span>Marketing Coordinator</span>
                                    </div>

                                    <div className="rating">
                                        <span><i className="bx bxs-star"></i></span>
                                        <span><i className="bx bxs-star"></i></span>
                                        <span><i className="bx bxs-star"></i></span>
                                        <span><i className="bx bxs-star"></i></span>
                                        <span><i className="bx bxs-star"></i></span>
                                    </div>
                                </div>

                                <p>
                                    “Having good restaurant reviews is crucial these days. It is not
                                    just making our decision to pick one easier, it is also helping
                                    the restaurant be more successful. You can quickly copy and
                                    paste these good restaurant review examples, publish them on
                                    Facebook”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}