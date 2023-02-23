import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import HeaderAdmin from '../components/HeaderAdmin'
import '../navbarAdmin.css'
import CategoryForm from '../components/CategoryForm'
import SeriesForm from '../components/SeriesForm'
import CarForm from '../components/CarForm'
import Tables from '../components/Tables'


function Admin() {
  return (
    <div>
        <HeaderAdmin />
        <NavbarAdmin />
        <CategoryForm/>
        <SeriesForm />
        <CarForm />
        <Tables />
    </div>
  )
}

export default Admin