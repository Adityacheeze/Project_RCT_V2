import { useEffect, useState } from "react";

function Items({ currentItems , offset }) {
  // const [data, setData] = useState([]);
 
  return (
    <>
      <div className="container">
        <div className="row border fw-bold text-center">
          <div className="col-1 border">S No.</div>
          <div className="col-5 border">Title</div>
          <div className="col-2 border">Start Date</div>
          <div className="col-2 border">End Date</div>
          <div className="col-2 border">Documents</div>
        </div>
        {currentItems && currentItems.map((item, index) => {
          // console.log(index);
          return (
            <div className="row">
              <div className="col-1 border d-flex justify-content-center align-items-center">
                {index + offset + 1}
              </div>
              <div className="col-5 border">{item.title}</div>
              <div className="col-2 border d-flex justify-content-center align-items-center">
                {item.tender_date}
              </div>
              <div className="col-2 border d-flex justify-content-center align-items-center">
                {item.end_date}
              </div>
              <div className="col-2 border d-flex justify-content-center align-items-center">
                <a href={item.logo_hidden_images} target="_blank">
                  <i className="fa-solid fa-file-pdf"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Items;
