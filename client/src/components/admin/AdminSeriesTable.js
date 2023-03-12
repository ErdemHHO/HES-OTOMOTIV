import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { getSeries} from '../../actions/seri';

function AdminSeriesTable() {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getSeries());
  },[dispatch])

  const series=useSelector((state)=>{
      return state.series
  })

  return (
    <>
      {series.length===0 ? (
        <div className="text-center mt-2">
          sdfdsfsdfsdf
        </div>
      ) : (
        <Table striped bordered hover className='text-center mt-2'>
          <thead>
            <tr>
              <th>Seriler</th>
            </tr>
          </thead>
          <tbody>
            
              {
                  series.map((item)=>(
                  <tr key={item._id}>
                      <td>{item.seriesName}</td>
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
