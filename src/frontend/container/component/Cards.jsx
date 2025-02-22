import React from 'react'

function Cards() {
  return (
    <>
      <div class="cards">
          <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="card_sidebar">
                <img src="./assets/001-clipboard.png" alt="" />
                <span>Cause List</span>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="card_sidebar">
                <img src="./assets/002-law.png" alt="" />
                <span>Case Search</span>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="card_sidebar">
                <img src="./assets/003-stamp.png" alt="" />
                <span>Case Status</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="card_sidebar">
                <img src="./assets/004-auction.png" alt="" />
                <span>Daily Orders</span>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="card_sidebar">
                <img src="./assets/005-right-to-objection.png" alt="" />
                <span>Case Under Objection</span>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="card_sidebar">
                <img src="./assets/006-regulation.png" alt="" />
                <span>Final Orders / Judgements</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cards
