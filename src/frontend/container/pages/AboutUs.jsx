import React from "react";
import NavItemContent from "../component/NavItemContent";
import {
  useGetLastUpdateQuery,
  useGetVisitorsQuery,
} from "../../../redux/slice/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, reset } from "../../../redux/slice/counterSlice";

function AboutUs() {
  const nums = useSelector((state) => state.numbers.nums);
  const dispatch = useDispatch();
  const {
    data: visitorsData,
    error: vistorsError,
    isLoading: visitorsIsLoading,
  } = useGetVisitorsQuery();

  const {
    data: lastUpdateData,
    error: lastUpdateError,
    isLoading: lastUpdateIsLoading,
  } = useGetLastUpdateQuery();
  
  if (visitorsIsLoading || lastUpdateIsLoading) return <p>Loading...</p>;
  if (vistorsError || lastUpdateError)
    return <p>Error: {vistorsError?.error || lastUpdateError?.error}</p>;
  const content = [
    "In 1890 an enactment known as the Indian Railway Act was legislated and passed by the British Parliament. This piece of legislation was aimed at various matters concerning railways. After independence it was felt that some changes be brought in the Act to fulfill the needs of people in the present day. So maintaining some provisions of the Act of 1890 rendering some provisions redundant and replacing them with new provisions a new legislation named The Railways Act 1989 was enacted which came into force from 1st July 1990. ",

"Broad features of this Act are that Railways were re-constituted in zones with a General Manager for each zone. The Central Government had the power to fix the rates of carriage of passengers and goods. Provision for compensation by Railways on account of loss damage of goods etc. and also due to accidental deaths and injuries was maintained. Special provisions were introduced regarding the monetary liability of railways as carriers of goods etc. The Railway Claims Tribunal Act 1987 was enacted to provide speedy disposal of claims against the Railway Administration.",

"Although Railway Administration made a way to compensate the consignor/consignee of goods etc. and also for compensation for the loss of lives people were not often satisfied and went to Courts which took a very long time to decide the claims and litigation was protracted for an indefinite period. Therefore the necessity was felt to expedite the disposal of claims at the earliest which resulted in the establishment of the Claims Tribunal which would exclusively deal with such claims and speedily dispose of the same. As a result the burden of Courts was reduced and speedy relief was made available. Even the refund of fares and freights was also brought within the purview of the Tribunal.",

"The RCT Act is to provide for the establishment of a Railway Claims Tribunal for inquiring into and determining claims against a Railway Administration for loss destruction damage deterioration or non-delivery of animals or goods entrusted to it to be carried by railway or for the refund of fares or freight or for compensation for death or injury to passengers occurring as a result of railway accidents or untoward incidents and for matters connected therewith or incidental thereto.",

"The scheme of the Act shows that it made provisions for the establishment of the Tribunal its Benches officers and staff their term eligibility the jurisdiction powers and authority of the Tribunal its procedure execution of its orders and appeals. In this way the Act is a self-contained Act that has solved the problems of the public at large.",
  ];
  return (
    <>
      <NavItemContent title={"About Us"} content={content} />
      {/* <hr />
      <h3>First number is : {nums[0]}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(add());
        }}
      >
        Add
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(remove());
        }}
      >
        Remove
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <div>
        {nums.map((num, index) => {
          return <div key={index}>{num}</div>;
        })}
      </div>
      <hr />
      <h3>number of visitors : {visitorsData?.data} </h3>
      <h3>Last Update : {lastUpdateData?.data} </h3> */}
    </>
  );
}

export default AboutUs;
