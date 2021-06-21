import React from 'react';
import {Link}from 'gatsby';
import styles from './nav.module.css'

export default function Nav(){
    return(
        <div className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="contact">Contact</Link>
            <Link to="product">Product</Link>
        </div>
    )
}