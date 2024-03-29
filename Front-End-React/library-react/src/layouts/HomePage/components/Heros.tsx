export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>

                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                The library team would love to know what you've been reading.
                                Wheter to learn new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Sign up </a>

                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Our collection is always expanding</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing!
                                We work nonstop to provide you with the best possible selection!
                                We hope that you would enjoy our selected books
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                The library team would love to know what you've been reading.
                                Wheter to learn new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Sign up </a>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Our collection is always expanding</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing!
                                We work nonstop to provide you with the best possible selection!
                                We hope that you would enjoy our selected books
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}