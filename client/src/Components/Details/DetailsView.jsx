import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProudctsDetails } from "../../Redux/actions/productAction";
import { Box, Grid, styled } from "@mui/material";
import LeftItem from "./LeftItem";
import ProductDetails from "./ProductDetails";

const Component = styled(Box)`
  background: #f2f2f2;
`;

const GridContainer = styled(Grid)`
  background: #ffffff;
  display: flex;
`;

const RightContainerGrid = styled(Grid)`
  margin-top: 50px;
  padding-left: 25px;
  & > p {
    margin-top: 10px;
  }
`;

const DetailsView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { productDetails, loading } = useSelector(
    (state) => state.getProductDetails
  );

  useEffect(() => {
    if (productDetails && id !== productDetails.id) {
      dispatch(getProudctsDetails(id));
    }
  }, [dispatch, id, productDetails, loading]);
  return (
    <Component>
      {productDetails && Object.keys(productDetails)?.length && (
        <GridContainer container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <LeftItem product={productDetails} />
          </Grid>
          <RightContainerGrid item lg={8} md={8} sm={4} xs={12}>
            <ProductDetails productDetails={productDetails} />
          </RightContainerGrid>
        </GridContainer>
      )}
    </Component>
  );
};

export default DetailsView;
