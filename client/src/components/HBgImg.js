import React from 'react'

function HBgImg() {
  return (
    <div>
        <div className='home d-none d-xl-flex'>
            <img src="/img/logo/bmwpng.png" alt="" className='bmwCar'></img>
        </div>
        <div className='d-flex d-xl-none'>
            <img src="/img/logo/bmwpng.png" alt="" className='bmwCar'></img>
        </div>
    </div>

  )
}

export default HBgImg