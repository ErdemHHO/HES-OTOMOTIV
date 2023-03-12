import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { getCars} from '../../actions/car';

function AdminSeriesTable() {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCars());
  },[dispatch])

  const cars=useSelector((state)=>{
      return state.cars
  })


  return (
    <>
      {cars.length===0 ? (
        <div className="text-center mt-2">
          sdfdsfsdfsdf
        </div>
      ) : (
        <Table striped bordered hover className='text-center mt-2'>
          <thead>
            <tr>
              <th>Seri Adı</th>
              <th>Kasa Adı</th>
            </tr>
          </thead>
          <tbody>
            
              {
                cars.map((item, index) => (
                  <tr key={index}>
                    <td>{item.series_id.seriesName}</td>
                    <td>{item.carName}</td>
                  </tr>
                  ))
              }
          </tbody>
        </Table>
      )}
    </>
  );
}

export default AdminSeriesTable;
