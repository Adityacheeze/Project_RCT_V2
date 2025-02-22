import React, { useEffect, useState } from "react";
import axios from "axios";

function FooterBottom() {
  const [visitorData, setVisitorData] = useState([]);
  const [lastUpdatedData, setLastUpdatedData] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [error, setError] = useState(false);

  const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_GET_URL,
  });
  useEffect(() => {
    API.get("/getVisitor")
      .then((response) => {
        setVisitorData(response.data);
      })
      .catch((error) => {
        console.error("Error in fetching : ", error);
        setError(true);
      });

    API.get("/getlastupdate")
      .then((response) => {
        setLastUpdatedData(response.data);
      })
      .catch((error) => {
        console.error("Error in fetching : ", error);
        setError(true);
      });

    API.get("/get-footers/7")
      .then((response) => {
        setFooterData(response.data.data);
      })
      .catch((error) => {
        console.error("Error in fetching : ", error);
        setError(true);
      });
  }, []);

  return (
    <>
      <div class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="container_footer">
              <div className="footer-details">
                {error ? (
                  <div>
                    <h4>No Data Found</h4>
                  </div>
                ) : (
                  <div>
                    {footerData.map((data) => {
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
                  {error ? "No Data Found" : visitorData.data}{" "}
                </p>
                <p>
                  Site Updated: {error ? "No Data Found" : lastUpdatedData.data}
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
