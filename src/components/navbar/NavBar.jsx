import React from 'react'
import harvardLogo from '../../assets/harvard.svg'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-light ">
            <div className="container-fluid justify-content-between text-black">

                <img src={harvardLogo} alt="React Logo" width="190" height="48" />

                {/* Two cards styled using Bootstrap's card classes */}
                <div className="d-flex gap-4">
                    <div className="card" style={{ width: '150px' }}>
                        <div className="card-body bg-white text-white">
                            <h5 className="card-title">Card A</h5>
                            <p className="card-text">Content for card A</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '150px' }}>
                        <div className="card-body bg-white text-white">
                            <h5 className="card-title">Card B</h5>
                            <p className="card-text">Content for card B</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
