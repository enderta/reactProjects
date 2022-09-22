import React from 'react';

const NavProducts = () => {
    return (


                <nav className="site-header sticky-top py-1 bg-dark">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <a className="py-2" href="#" aria-label="Product">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true"
                                 className="d-block mx-auto" viewBox="0 0 24 24" focusable="false">
                                <title>Product</title>
                                <circle cx="12" cy="12" r="10"/>
                                <path
                                    d="M14.31 8a4 4 0 0 1 0 8M20.05 17.94a4 4 0 0 1-5.66 5.66M8 14.31a4 4 0 0 1 0-8M2.06 3.05a4 4 0 0 1 5.66-5.66"/>
                            </svg>
                        </a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
                        <nav/>

                    </div>
                </nav>




    );
};

export default NavProducts;