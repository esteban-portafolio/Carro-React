import { useEffect, useState } from "react";
import { gFetch } from "../../helpers/gFetch";
import React from 'react'

const DetailContainer = () => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        gFetch()
            .then(respProd => setProduct(respProd[0]))
            .catch(err => console.log(err))
    })

    //console.log('product', product)

    return (
        <div className="container border border-3 border-primary rounded">
            <div className="row">
                <div className="col">
                    <img className="w-50" src={product.image} alt="foto producto" />
                    <h3>Nombre: {product.title}</h3>
                    <h3>Categoria: {product.category} </h3>
                    <h3>Precio: {product.price} $USD </h3>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    )
}

export default DetailContainer