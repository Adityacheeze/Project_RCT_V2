import React from "react";

function CauseListItems({ items }) {
  return (
    <div className="table-responsive border modal-table-custom">
      <table class="table table-striped">
        <thead>
          <tr className="border-top">
            <th scope="col">Sr. No.</th>
            <th scope="col">Case Title</th>
            <th scope="col">Case No.</th>
            <th scope="col">Main Party</th>
            <th scope="col">Claim Type</th>
            <th scope="col">Petitioner Advocate</th>
            <th scope="col">Filling No.</th>
            <th scope="col">Proceeding Type</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.case_title}</td>
                <td>{item.case_no}</td>
                <td>{item.main_party}</td>
                <td>{item.claim_type}</td>
                <td>{item.pet_adv}</td>
                <td>{item.filing_no}</td>
                <td>{item.proceeding_type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CauseListItems;
