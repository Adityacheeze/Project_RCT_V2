function Items({ currentItems, offset }) {
  return (
    <>
      <div className="table-responsive border modal-table-custom">
        <table className="table table-striped table-hover">
          <thead>
            <tr className="border-top">
              <th scope="col">S No.</th>
              <th scope="col">Title</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Documents</th>
            </tr>
          </thead>
          <tbody>
          {currentItems &&
          currentItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + offset + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.tender_date}</td>
                  <td>{item.end_date}</td>
                  <td>
                    <a href={item.logo_hidden_images} target="_blank">
                      <i className="fa-solid fa-file-pdf"></i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Items;
