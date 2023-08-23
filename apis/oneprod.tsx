import React from 'react'

export default async function Oneprod(i:string) {
    let res = await fetch(`https://fakestoreapi.com/products/${i}`);
    return res.json();
}
