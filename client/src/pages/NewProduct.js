import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import HeaderAdmin from '../components/HeaderAdmin'
import ProductForm from '../components/ProductForm'

function NewProduct() {
  return (
    <div>
        <HeaderAdmin />
        <NavbarAdmin />
        <ProductForm/>
    </div>
  )
}

export default NewProduct