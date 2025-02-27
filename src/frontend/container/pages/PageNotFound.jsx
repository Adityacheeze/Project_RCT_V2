import React from 'react'
import NavItemContent from '../component/NavItemContent'

function PageNotFound() {
  return (
    <>
      <NavItemContent title={"Page-Not-Found"} />
      <div className='error-message'>
        <h2>ERROR 404 - PAGE NOT FOUND!!!</h2>
      </div>
    </>
  )
}

export default PageNotFound
