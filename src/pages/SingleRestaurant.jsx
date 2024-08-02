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
          const response = await fetch(`${API}/vendor/all-vendors`)
          const newData = await response.json()
          setPopular(newData.vendors);
          setLoading(false)
          console.log("This is Api data",newData.vendors)
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
            {popular && popular.map((vendor)=>(
                <div>
                    {vendor.firm.filter(firmId==vendor.firmId).map((item)=>(
                        <div>
                            
                        </div>
                    ))}
                </div>
            ))}
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
