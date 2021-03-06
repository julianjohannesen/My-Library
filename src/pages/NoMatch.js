import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function NoMatch({ location }) {
    return (

        <React.Fragment>
        <Header />
        <div>
        
        <h1>No match for <code>{location.pathname}</code></h1>
        <p>Return <Link to="/">Home</Link></p>
        
        </div>
        <Footer />
        </React.Fragment>
    )
}
