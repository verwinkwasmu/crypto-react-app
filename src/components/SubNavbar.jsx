import millify from 'millify';
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useGetGlobalStatsQuery } from '../services/cryptoApi';


const SubNavbar = () => {
    const { data, isFetching } = useGetGlobalStatsQuery('');
    const globalStats = data?.data;
    if (isFetching) return 'Loading...'

    return (
        <>
            <Navbar bg="dark" variant="dark" className="w-100 py-0 bg-gradient">
                <>
                    <Nav className="mx-auto">
                        <Nav.Link>Total Cryptocurrency: <span className="text-primary mx-3">{millify(globalStats.totalCoins)}</span></Nav.Link>
                        <Nav.Link>Total Exchanges: <span className="text-primary mx-3">{millify(globalStats.totalExchanges)}</span></Nav.Link>
                        <Nav.Link>Total Market Cap: <span className="text-primary mx-3">{millify(globalStats.totalMarketCap)}</span></Nav.Link>
                        <Nav.Link>Total 24h Volume: <span className="text-primary mx-3">{millify(globalStats.total24hVolume)}</span></Nav.Link>
                        <Nav.Link>Total Markets: <span className="text-primary mx-3">{millify(globalStats.totalMarkets)}</span></Nav.Link>
                    </Nav>
                </>
            </Navbar>
        </>
    )
}

export default SubNavbar