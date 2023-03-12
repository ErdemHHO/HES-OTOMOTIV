import React from 'react'
import Table from 'react-bootstrap/Table';
import { CircularProgressbar } from 'react-circular-progressbar';

import {useSelector} from 'react-redux';
import { getCategory } from '../../actions/category';


import {useEffect} from 'react';
import {useDispatch} from 'react-redux'




function AdminCategoryTable1() {

    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getCategory());
    },[dispatch])

    const categories=useSelector((state)=>{
        return state.categories
    })
  return (
    !categories ? <CircularProgressbar/> :
    (
        <Table striped bordered hover className='text-center mt-2'>
        <thead>
          <tr>
            <th>Kategoriler</th>
          </tr>
        </thead>
        <tbody>
          
            {
                categories.map((item)=>(
                <tr key={item._id}>
                    <td>{item.categoryName}</td>
                </tr>
                ))
            }
        </tbody>
        </Table>
    )

  )
}

export default AdminCategoryTable1