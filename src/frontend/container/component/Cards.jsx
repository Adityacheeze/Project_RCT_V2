import React from 'react'
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <>
      <div className="cards">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Link to={"/causelist"} className="card_sidebar">
                <img src="./assets/001-clipboard.png" alt="" />
                <span>Cause List</span>
              </Link>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Link to={"/*"} className="card_sidebar">
                <img src="./assets/002-law.png" alt="" />
                <span>Case Search</span>
              </Link>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Link to={"/*"} className="card_sidebar">
                <img src="./assets/003-stamp.png" alt="" />
                <span>Case Status</span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Link to={"/*"} className="card_sidebar">
                <img src="./assets/004-auction.png" alt="" />
                <span>Daily Orders</span>
              </Link>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Link to={"/*"} className="card_sidebar">
                <img src="./assets/005-right-to-objection.png" alt="" />
                <span>Case Under Objection</span>
              </Link>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Link to={"/*"} className="card_sidebar">
                <img src="./assets/006-regulation.png" alt="" />
                <span>Final Orders / Judgements</span>
              </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cards
