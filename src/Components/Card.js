import React from 'react'
import { Link } from 'react-router-dom'
function Card() {
  return (
      <>
      <div className="card text-white bg-primary">
            <div className="card-header">Header</div>
        
            <div className="card-body">
                  <h5 className="card-title">Primary card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/project/1"><button className='btn btn-outline-danger text-white'>Go Somewhere</button></Link>
            </div>
      </div>

      <div className="card text-white bg-primary">
            <div className="card-header">Header</div>
        
            <div className="card-body">
                  <h5 className="card-title">Primary card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/project/2"><button className='btn btn-outline-danger text-white'>Go Somewhere</button></Link>
            </div>
      </div>

      <div className="card text-white bg-primary">
            <div className="card-header">Header</div>
        
            <div className="card-body">
                  <h5 className="card-title">Primary card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/project/3"><button className='btn btn-outline-danger text-white'>Go Somewhere</button></Link>
            </div>
      </div>
      <div className="card text-white bg-primary">
            <div className="card-header">Header</div>
        
            <div className="card-body">
                  <h5 className="card-title">Primary card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/project/4"><button className='btn btn-outline-danger text-white'>Go Somewhere</button></Link>
            </div>
      </div>
      </>
  )
}

export default Card