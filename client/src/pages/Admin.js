import React from 'react'
import AdminNavbarAdmin from '../components/AdminNavbarAdmin'
import AdminNavbar from '../components/AdminNavbar'
import '../navbarAdmin.css'
import AdminCategoryForm from '../components/AdminCategoryForm'
import AdminSeriesForm from '../components/AdminSeriesForm'
import AdminCarForm from '../components/AdminCarForm'
import AdminTables from '../components/AdminTables'
// import CkEditor from '../components/CkEditor'

function Admin() {
  return (
    <div>
        <AdminNavbar />
        <AdminNavbarAdmin />
        <AdminCategoryForm/>
        <AdminSeriesForm />
        <AdminCarForm />
        <AdminTables />
        {/* <CkEditor /> */}
    </div>
  )
}

export default Admin