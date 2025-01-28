import React from 'react'
import harvardLogo from '../../assets/harvard.svg'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <div className="l-container site-footer__container">
                <div className="site-footer__row site-footer__row--navigation">
                    <div className='site-footer__menu-col'>
                        <h2 className='site-footer__menu-heading'>Security & Brand</h2>
                        <nav className="site-footer__nav">
                            <ol>
                                <li>Report Copyright Infringement</li>
                                <li>Report Security Issue</li>
                                <li>Trademark Notice</li>
                            </ol>
                        </nav>
                    </div>
                    <div className='site-footer__menu-col'>
                        <h2 className='site-footer__menu-heading'>Website</h2>
                        <nav className="site-footer__nav">
                            <ol>
                                <li>Accessibility</li>
                                <li>Digital Accessibility</li>
                                <li>Privacy statement</li>
                            </ol>
                        </nav>
                    </div>
                    <div className='site-footer__menu-col'>
                        <h2 className='site-footer__menu-heading'>Get In Touch</h2>
                        <nav className="site-footer__nav">
                            <ol>
                                <li>Contact Harvard</li>
                                <li>Maps & Directions</li>
                                <li>Jobs</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="site-footer__row site-footer__row--secondary">
                    <div className='site-footer__copyright, .site-footer__copyright--below-logo'>
                        <p>Copyright © 2025 The President and Fellows of Harvard College</p>
                    </div>
                    <div className='site-footer__logo'>
                        <a href="https://www.harvard.edu/">
                            <img src={harvardLogo} alt="React Logo" width="190" height="48" />
                        </a>
                    </div>
                    <div className='site-footer__social'>
                        <ul className='social-follow__list'>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                            <li>d</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer