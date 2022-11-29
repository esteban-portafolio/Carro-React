import React from 'react'

const Content = (props) => {
  return (
    <div id='content' style={{
      backgroundImage: `url(${props.imagen})`
    }}><h2 className='contTitulo'>{props.titulo}</h2>     

    </div>
  )
}

export default Content