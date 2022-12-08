import React from 'react'
import { useState, useEffect } from 'react'
import { FidgetSpinner } from 'react-loader-spinner'
import './Content.css'

const Content = () => {

  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      //fetch('https://dummyjson.com/products')
      .then(data => data.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  //console.log(products)

  return (

    // <div id='content' style={{
    //   backgroundImage: `url(${props.imagen})`
    // }}><h2 className='contTitulo'>{props.titulo}</h2>

    // </div>

    <section id='content' className='container'>
      {loading ?
        <FidgetSpinner
          visible={true}
          height="180"
          width="180"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['#ff0000', '#00ff00', '#0000ff']}
          backgroundColor="#F4442E"
        />
        :
        products.map(product =>
          <div style={{ marginLeft: 30 }} className='col-12 col-sm-6 col-md-4 text-center' key={product.id}>
            <div className='card w-100 mt-3'>
              <div className='card-header' id='header'>
                {`${product.title}`}
              </div>
              <div className='card-subtitle text-muted'>
                {`Category: ${product.category}`}
              </div>
              <div className='card-body'>
                <img src={product.image} alt="" className='card-img-top img-fluid w-50 cards' />
              </div>
              <div className='card-footer'>
                Price: {product.price} $USD
                <button className='btn btn-outline-primary m-2'>
                  Detalle del producto
                </button>
              </div>

            </div>
          </div>

        )}
    </section>

  )
}

export default Content