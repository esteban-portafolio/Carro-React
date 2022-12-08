const resp = fetch('https://fakestoreapi.com/products')
      //fetch('https://dummyjson.com/products')
      .then(data => data.json())
      .catch(err => console.error(err))

export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        const condition = true
        if (condition) {
            setTimeout(()=>{
                resolve(resp)
            }, 2000)
        } else {
            reject('No hay Cash')
        }
    })
}