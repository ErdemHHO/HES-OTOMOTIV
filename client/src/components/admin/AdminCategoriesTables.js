import React from 'react'
import { useState } from 'react';
import DataTable from 'react-data-table-component'

function Tables() {
    const columns =[
        {
            name: 'Name',
            selector:row=>row.name,
            sortable:true
        },
        {
            name: 'Email',
            selector:row=>row.email,
            sortable:true,
        },
        {
            name: 'Age',
            selector:row=>row.age,
            sortable:true
        },
        
    ];
    const data = [
        { id: 1, name: 'John Doe',email:'erdemhho@gmail.com', age: 26 },
        { id: 2, name: 'Jane Doe',email:'234@gmail.com',  age: 32 },
        { id: 3, name: 'Bob Smith',email:'ts@gmail.com',  age: 45 },
        { id: 4, name: 'Bob Smith',email:'gg@gmail.com',  age: 1 },
        { id: 5, name: 'Bob Smith',email:'aa@gmail.com',  age: 3 },
        { id: 6, name: 'Bob Smith',email:'bb@gmail.com',  age: 5},
        { id: 7, name: 'Bob Smith',email:'gg@gmail.com',  age: 1 },
        { id: 8, name: 'Bob Smith',email:'aa@gmail.com',  age: 3 },
        { id: 9, name: 'Bob Smith',email:'bb@gmail.com',  age: 5},
        { id: 10, name: 'John Doe',email:'erdemhho@gmail.com', age: 26 },
        { id: 11, name: 'Jane Doe',email:'234@gmail.com',  age: 32 },
        { id: 12, name: 'Bob Smith',email:'ts@gmail.com',  age: 45 },
        { id: 13, name: 'Bob Smith',email:'gg@gmail.com',  age: 1 },
        { id: 14, name: 'Bob Smith',email:'aa@gmail.com',  age: 3 },
        { id: 15, name: 'Bob Smith',email:'bb@gmail.com',  age: 5},
        { id: 16, name: 'Bob Smith',email:'gg@gmail.com',  age: 1 },
        { id: 17, name: 'Bob Smith',email:'aa@gmail.com',  age: 3 },
        { id: 18, name: 'Bob Smith',email:'bb@gmail.com',  age: 5},
        { id: 19, name: 'John Doe',email:'erdemhho@gmail.com', age: 26 },
        { id: 20, name: 'Jane Doe',email:'234@gmail.com',  age: 32 },
        { id: 21, name: 'Bob Smith',email:'ts@gmail.com',  age: 45 },
        { id: 22, name: 'Bob Smith',email:'gg@gmail.com',  age: 1 },
        { id: 23, name: 'Bob Smith',email:'aa@gmail.com',  age: 3 },
        { id: 24, name: 'Bob Smith',email:'bb@gmail.com',  age: 5},
        { id: 25, name: 'Bob Smith',email:'gg@gmail.com',  age: 1 },
        { id: 26, name: 'Bob Smith',email:'aa@gmail.com',  age: 3 },
        { id: 27, name: 'Bob Smith',email:'bb@gmail.com',  age: 5},
        
        // verilerin burada olması gerekiyor
      ];
    const paginationOptions = {
        rowsPerPageText: 'Sayfa başına satır:',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Tüm satırları seç',
      };
    const [records,setRecords]=useState(data);

    const [searchText, setSearchText] = React.useState('');

    const handleSearch = (event) => {
      setSearchText(event.target.value);
    };
  
    const filteredData = data.filter((item) =>
  Object.keys(item).some(
    (key) =>
      item[key]
        .toString()
        .toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1
  )
);
  return (
    <div className='container mt-5'>
        <div className='text-end mb-2'>
            <input type="text" value={searchText} onChange={handleSearch} placeholder="Arayın"/>
        </div>
        <div style={{ overflowX: "auto" }}>
            <DataTable
            columns={columns}
            data={filteredData}
            selectableRows
            fixedHeader
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 50, 100, 200, 500]}
            paginationComponentOptions={paginationOptions}
            search={false}
        ></DataTable>
        </div>
        
    </div>
  )
}

export default Tables