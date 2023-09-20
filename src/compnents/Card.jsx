import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="col-md-4 col-xl-4 col-sm-12 mt-2">
     <div className="card shadow p-3 mb-2 bg-body rounded" >
      <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Button</Link>
      </div>
    </div>
  </div>
  )
}

export default Card
