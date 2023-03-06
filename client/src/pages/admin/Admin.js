import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import '../../navbarAdmin.css'
import AdminCategoryForm from '../../components/admin/AdminCategoryForm'
import AdminSeriesForm from '../../components/admin/AdminSeriesForm'
import AdminCarForm from '../../components/admin/AdminCarForm'
import AdminTables from '../../components/admin/AdminTables'

function Admin() {
  return (
    <div>
        <AdminNavbar />
        <AdminCategoryForm/>
        <AdminSeriesForm />
        <AdminCarForm />
        <AdminTables />
        {/* <CkEditor /> */}
    </div>
  )
}

export default Admin