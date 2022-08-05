import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='container fix-height'>
      <div className="row my-3">
        <div className="col-md-3">
          <ul className="list-group">
            <Link to="/admin/cats/all" className='list-group-item'>Categories</Link>
            <Link to="/admin/tags/all" className='list-group-item'>Tags</Link>
            <Link to="/admin/posts/all" className='list-group-item'>Posts</Link>
          </ul>
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin