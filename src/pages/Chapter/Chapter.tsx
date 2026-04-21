import { useLocation } from "react-router-dom";

function Chaper() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return <div>Chaper nè bạn ơi</div>;
}

export default Chaper;
