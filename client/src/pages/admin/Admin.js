import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import '../../navbarAdmin.css'
import AdminCategoryForm from '../../components/admin/AdminCategoryForm'
import AdminSeriesForm from '../../components/admin/AdminSeriesForm'
import AdminCarForm from '../../components/admin/AdminCarForm'
import AdminCategoriesTables from '../../components/admin/AdminCategoriesTables'


function Admin() {

  return (
    <div>
        <AdminNavbar />
        <AdminCategoryForm/>
        <AdminSeriesForm />
        <AdminCarForm />
        <AdminCategoriesTables />
        {/* <CkEditor /> */}
    </div>
  )
}

export default Admin