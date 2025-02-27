import Marquee from "react-fast-marquee";
import { useGetWhatsNewQuery } from "../../../redux/slice/apiSlice";

function TextSlider({ flag }) {
 
  const {data, error} = useGetWhatsNewQuery()
  return (
    <div>
      {error ? (
        <Marquee pauseOnHover={true} play={flag}>
          ERROR : Cannot Load Text... 
        </Marquee>
      ) : (
        <Marquee pauseOnHover={true} play={flag}>
          {data?.data.map((whats_new, index) => {
            return <h5 key={index}>{whats_new.title}</h5>;
          })}
        </Marquee>
      )}
    </div>
  );
}

export default TextSlider;
