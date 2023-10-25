import React from 'react'
const pfp = '/pfp.jpg'
function Header() {
    return (
        <header className='container'>
            <div className='container-fluid mt-2'>
                <section className='row'>
                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className='row'>
                            <div className='col d-flex align-items-center headerPfp'>
                                <img className='img img-fluid' src={pfp} />
                            </div>
                            <div className='col text-start mt-4'>
                                <p className='headerName mb-0'>Hamad Ullah</p>
                                <p className='navText'>Software Engineer | MERN Stack</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className='row'>
                            <div className='col text-end mb-1 mt-3 p-0'>
                                <button>Light/Dark</button>
                            </div>
                        </div>
                        <div className='row text-end'>
                            <div className='col p-0 navText'><p>GitHub</p></div>
                            <div className='col p-0 navText'><p>Linkedin</p></div>
                            <div className='col p-0 navText'><p>Email</p></div>
                            <div className='col p-0 navText'><p>Upwork</p></div>
                            <div className='col p-0 navText'><p>Freelancer</p></div>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
