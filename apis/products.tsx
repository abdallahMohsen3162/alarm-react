import React from 'react'

export default async function Proucts() {
    let res = await fetch('https://fakestoreapi.com/products');
    let ret = res.json()
    
    return ret;
}
