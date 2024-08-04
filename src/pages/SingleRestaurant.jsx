import React, { useEffect, useState } from 'react'
import { API } from '../constants/api'
import { useParams } from 'react-router-dom'
import Nav from '../components/Navbar'

const SingleRestaurant = () => {
    const [product, setProduct] = useState([])
    const [popular,setPopular] = useState([])
    const { firmId } = useParams()
    const {firmName} = useParams()

    const popularRestaurants = async()=>{
        try {
          const response = await fetch(`${API}/firm/getFirm/${firmId}`)
          const newData = await response.json()
          setPopular(newData.firm);
          console.log("This is Api data for single",newData.firm)
        } catch (error) {
          console.log(error)
          /* alert("Failed to fetch data") */
        }
      }
    
      useEffect(()=>{
        popularRestaurants()
      },[])
    
    const productHandler = async () => {
        try {
            const response = await fetch(`${API}/product/${firmId}/products`)
            const newData = await response.json()
            setProduct(newData.products)
            console.log(newData.products)
        } catch (error) {
            console.log("Failed to fetch", error)
        }
    }

    useEffect(() => {
        productHandler()
    }, [firmId])

    return (
        <div>
            <Nav />
            <section className='justify-center flex flex-col items-center my-2'>
            <h1 className='text-2xl font-bold '>{firmName}</h1>
            {
                <div>{popular.area}</div>
            }
            {product.length > 0 ? (
                product.map((item) => (
                    <div key={item.id}>
                        {item.description}
                    </div>
                ))
            ) : (
                <p>No products found</p>
            )}
            </section>
        </div>
    )
}

export default SingleRestaurant
