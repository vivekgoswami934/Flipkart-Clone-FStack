import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProudctsDetails } from "../../Redux/actions/productAction";

const DetailsView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProudctsDetails(id));
  }, [dispatch, id]);
  return <div>Hello from details view</div>;
};

export default DetailsView;
