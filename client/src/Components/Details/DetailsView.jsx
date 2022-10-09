import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProudctsDetails } from "../../Redux/actions/productAction";
import { Box, Grid, styled, Typography } from "@mui/material";
import LeftItem from "./LeftItem";

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
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const { productDetails, loading } = useSelector(
    (state) => state.getProductDetails
  );
  console.log(productDetails);

  console.log("productDetails12", productDetails);

  useEffect(() => {
    if (productDetails && id !== productDetails.id) {
      dispatch(getProudctsDetails(id));
    }
  }, [dispatch, id, productDetails, loading]);
  return (
    <Component>
      {productDetails && Object.keys(productDetails).length && (
        <GridContainer container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <LeftItem product={productDetails} />
          </Grid>
          <RightContainerGrid item lg={8} md={8} sm={4} xs={12}>
            <Typography>{productDetails.title.longTitle}</Typography>
            <Typography>
              & Rating & 1 Reviews
              <Box component="span">
                <img
                  src={fassured}
                  alt="fassured"
                  style={{ width: 77, marginLeft: 20 }}
                />
              </Box>
            </Typography>
            <Typography>
              <Box component="span" style={{ fontsize: 28 }}>
                {productDetails.price.cost}
              </Box>
              &nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: "#878787" }}>
                <strike>{productDetails.price.mrp}</strike>
              </Box>
              &nbsp;&nbsp;
              <Box component="span" style={{ color: "#388e3c" }}>
                {productDetails.price.discount}
              </Box>
            </Typography>
          </RightContainerGrid>
        </GridContainer>
      )}
    </Component>
  );
};

export default DetailsView;
