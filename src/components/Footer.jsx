import React from 'react'
import { Nav } from 'react-bootstrap';
import { BsCashCoin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <hr />

            <div className='text-center'>
                <h3><BsCashCoin />CryptoSphere</h3>
                <p>
                    <Link as={Link} to="/" className="mx-3 linkText">Home</Link>
                    <Link as={Link} to="/cryptocurrencies" className="mx-3 linkText">Cryptocurrencies</Link>
                    <Link as={Link} to="/news" className="mx-3 linkText" >News</Link>
                </p>

            </div>

        </>
    )
}

export default Footer