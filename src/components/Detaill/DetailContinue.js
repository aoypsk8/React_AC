import { useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import moviePopular from "../../data/dataPopular";
const DetailContinue = () => {
  const { continueId } = useParams();
  const singleProduct = moviePopular.find(
    (product) => product.id === parseInt(continueId)
  );
  const { id,image, title} = singleProduct;

  const navigate = useNavigate();
  return (
    <div className="container-menu-right">
      <div>HI{id}</div>
    </div>
  );
};
export default DetailContinue;
