export default function AboutUs() {
    return (
        <>
            <section className="section about" id="about">
                <div className="row container">
                    <div className="col">
                        <img src="./images/delivery-guy-2.svg" alt="" />
                    </div>
                    <div className="col">
                        <h2>Take a look at the benefits we offer for you</h2>
                        <p>
                            Good service means a friendly, welcoming service. A restaurant owner
                            should not merely strive to avoid bad service,
                        </p>
                        <div className="d-grid">
                            <div className="card">
                                <img src="./images/car-icon.svg" alt="" />
                                <h4>Free Home Delivary</h4>
                                <span>For all orders over $50</span>
                            </div>
                            <div className="card">
                                <img src="./images/dollar-icon.svg" alt="" />
                                <h4>Return & Refund</h4>
                                <span>Money Back Guarantee</span>
                            </div>
                            <div className="card">
                                <img src="./images/security-icon.svg" alt="" />
                                <h4>Secure Payment</h4>
                                <span>100% Secure Payment</span>
                            </div>
                            <div className="card">
                                <img src="./images/time-icon.svg" alt="" />
                                <h4>Quality Support</h4>
                                <span>Alway Online 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}