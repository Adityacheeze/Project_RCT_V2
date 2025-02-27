import {
  useGetFootersQuery,
  useGetLastUpdateQuery,
  useGetVisitorsQuery,
} from "../../../redux/slice/apiSlice";

function FooterBottom() {
  const { data: visitorsData, error: visitorsError } = useGetVisitorsQuery();
  const { data: lastUpdateData, error: lastUpdateError } =
    useGetLastUpdateQuery();
  const { data: footersData, error: footersError } = useGetFootersQuery();
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="container_footer">
              <div className="footer-details">
                {footersError ? (
                  <div>
                    <h4>No Data Found</h4>
                  </div>
                ) : (
                  <div>
                    {footersData?.data.map((data) => {
                      return (
                        <span key={data.id}>
                          <a href="#">{data.title}</a>
                        </span>
                      );
                    })}
                  </div>
                )}

                <div>
                  <a href="#">
                    Copyright &copy 2024 Railway Claim Tribunal, Government of
                    India, All Rights Reserved.
                  </a>
                </div>
              </div>
              <div className="footer-details">
                <p>
                  Number of Visitors:{" "}
                  {visitorsError ? "No Data Found" : visitorsData?.data}
                </p>
                <p>
                  Site Updated:{" "}
                  {lastUpdateError ? "No Data Found" : lastUpdateData?.data}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
