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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo magni atque aspernatur nemo porro asperiores tempore officiis odit, aperiam dolores necessitatibus perferendis dignissimos animi, molestiae omnis debitis! Corporis amet veritatis rem magnam sint tempora in ducimus id totam veniam! Ducimus mollitia tempora dignissimos perspiciatis! Ex sapiente quibusdam perferendis eveniet earum atque, aspernatur repudiandae quisquam numquam sint tenetur dolore iure recusandae deleniti facilis quasi explicabo sunt. Maiores repellat nisi, saepe praesentium ipsam adipisci. Molestias ullam culpa velit, a ea minus adipisci exercitationem necessitatibus animi, molestiae magni temporibus laborum beatae natus accusamus. Alias adipisci natus nostrum voluptatibus sequi nisi, labore suscipit hic sed harum unde eius sit in. Excepturi perferendis amet culpa nemo, nesciunt nobis aliquam facilis voluptatem distinctio quasi iure laudantium ipsum omnis animi dolores odit atque! Ipsum laboriosam natus deserunt quidem, blanditiis praesentium consequatur laudantium, explicabo alias aut consequuntur iusto qui ullam ut aperiam repellat eaque quos corporis nihil! Beatae nisi nesciunt ullam facere aperiam, provident ipsa a, iste blanditiis nulla rem ex dolorem alias tempore incidunt autem ratione qui tenetur sit aspernatur laborum aliquam. Reiciendis illum omnis distinctio eligendi, impedit in quis quos odio sit vitae beatae numquam doloribus! Dolorum minima provident ad quo? Ducimus quidem consectetur reprehenderit!",

    "Asperiores culpa veniam, fuga perferendis nobis at tempore officiis amet architecto aut nihil quibusdam a accusamus quam atque dolores minus? Nihil dolores cumque iusto deserunt perferendis corporis consequatur omnis rem repellat quis eveniet ipsum culpa id, facilis, tempora nobis repellendus saepe commodi magnam molestias veniam? Eveniet voluptate repudiandae, nihil vel doloribus nostrum rem iure omnis culpa odio incidunt, soluta eius error numquam quis quam fugiat quas possimus? Aliquam architecto nisi corrupti ratione beatae corporis, fugit maiores est esse enim dolore quisquam tempore dicta quas repellendus harum similique sit expedita quis tempora voluptates sed incidunt. Facilis, assumenda est. Repellendus hic eos asperiores unde vel maxime aliquam perspiciatis, velit, iure voluptatum vitae, adipisci repellat excepturi at architecto eligendi modi! Delectus ut similique alias ipsa harum autem, ad, sunt nisi cupiditate architecto nemo repellendus doloremque in. Perspiciatis odit consequuntur voluptate, saepe magnam facere mollitia, ab quidem totam error corrupti modi earum tenetur deleniti voluptatum explicabo neque non iste voluptatibus accusantium perferendis sed assumenda! Numquam itaque quam porro cupiditate eligendi voluptate inventore molestiae neque ad?",
  ];
  return (
    <>
      <NavItemContent title={"About Us"} content={content} />
      <hr />
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
      <h3>Last Update : {lastUpdateData?.data} </h3>
    </>
  );
}

export default AboutUs;
