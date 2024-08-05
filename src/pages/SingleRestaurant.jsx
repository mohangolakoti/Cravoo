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
            <section className='justify-center flex flex-col mx-72 my-10'>
            <h1 className='text-2xl font-bold '>{firmName}</h1>
            
                <div className='my-2 mt-6 border border-gray-300 py-4 px-6 rounded-3xl shadow-xl gap-1 flex flex-col'>
                    <p className='text-xl font-bold'>{popular.offer}</p>
                    <p className='text-lg font-semibold capitalize'>{popular.region}</p>
                    <p className='text-lg font-medium underline text-red-500 capitalize'>{popular.category}</p>
                    <p className='mb-4 text-gray-500'><span className='text-lg font-semibold mr-5 text-black'>Outlet </span>{popular.area}</p>
                    <hr />
                    <p className='font-medium text-gray-500'>30-40 mins | Free Delivery</p>
                </div>
                <div>
                    <h2 className='my-2 mt-10 font-bold text-xl'>Deals for you</h2>
                </div>
                <div>
                    {product.length > 0 ? (
                        product.map((item) => (
                            <div key={item.id}>
                                {item.description}
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
            </div>
            </section>
        </div>
    )
}

export default SingleRestaurant
