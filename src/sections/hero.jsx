import React from 'react';

const Hero = () => {
    return (
        <header className="bg-light py-5 pt-5 mt-5">
            <div className="container px-lg-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="p-4 p-lg-5">
                        <div className="m-4 m-lg-5 text-center ">
                            <h1 className="display-5 fw-bold mb-2 text-center">A warm welcome!</h1>
                            <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center ">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Call to action</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;