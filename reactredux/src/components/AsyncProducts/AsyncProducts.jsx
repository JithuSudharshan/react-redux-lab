import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/products/productsAction'

// Functional component for displaying products
// It receives "productsData" (state) and "fetchProducts" (action) as props
const AsyncProducts = ({ productsData, fetchProducts }) => {

    // useEffect runs when the component mounts
    // Purpose: trigger the async action (fetchProducts) to load data from API/backend
    useEffect(() => {
        fetchProducts();
    }, []) // [] → ensures it runs only once when component is mounted

    return (
        <div>
            {/* Show loading message when API call is in progress */}
            {productsData.loading && <p>Loading....</p>}

            {/* Show error message if API call fails */}
            {productsData.error && <p>{productsData.error}</p>}

            {/* Show products if data is available */}
            {/* 
              Note: avoid <p> wrapping a .map() result directly,
              because you'll end up with <p><p> elements (invalid nesting). 
              Better to use a <div> or <ul>. 
            */}
            {productsData.products && (
                <div>
                    {productsData.products.map((title, index) => (
                        <p key={index}>{title}</p>  // each child should have a unique key
                    ))}
                </div>
            )}
        </div>
    )
}

// mapStateToProps
// Purpose: take data from Redux store and pass it into the component as props
const mapStateToProps = (state) => {
    return {
        productsData: state.product // "product" reducer holds loading, error, and products
    }
}

// mapDispatchToProps
// Purpose: make actions available as props to the component
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()) // dispatch async action
    }
}

// connect() links the component with Redux store (state + actions)
export default connect(mapStateToProps, mapDispatchToProps)(AsyncProducts)
