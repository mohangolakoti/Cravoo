import React, { useEffect, useState } from 'react'
import { API } from '../constants/api'
import { useParams } from 'react-router-dom'

const SingleRestaurant = () => {
    const [product, setProduct] = useState([])
    const { firmId } = useParams()
    const {firmName} = useParams()
    
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
            {firmName}
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
    )
}

export default SingleRestaurant
