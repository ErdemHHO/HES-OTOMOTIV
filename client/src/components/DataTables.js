import React from 'react';
import DataTable from 'react-data-table-component';

const data = [
  { id: 1, name: 'John Doe', age: 26 },
  { id: 2, name: 'Jane Doe', age: 32 },
  { id: 3, name: 'Bob Smith', age: 45 },
  { id: 4, name: 'Bob Smith', age: 1 },
  { id: 5, name: 'Bob Smith', age: 3 },
  { id: 6, name: 'Bob Smith', age: 5},
  
  // verilerin burada olması gerekiyor
];

const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'İsim',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Yaş',
    selector: 'age',
    sortable: true,
  },
  // sütunlar burada olması gerekiyor
];

const paginationOptions = {
  rowsPerPageText: 'Sayfa başına satır:',
  rangeSeparatorText: 'of',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Tüm satırları seç',
};

const DataTables = () => {
  return (
    <DataTable 
      title="Örnek Datatable"
      columns={columns}
      data={data}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 20, 50, 100, 200, 500]}
      paginationComponentOptions={paginationOptions}
    />
  );
};

export default DataTables;