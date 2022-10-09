import { Grid, styled } from "@mui/material";
import { imageURLforMidBanner as data } from "../../Constants/data";

const MidBanner = () => {
  const covidUrl =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Grid
        lg={12}
        md={12}
        sm={12}
        xs={12}
        container
        style={{ marginTop: "10px" }}
      >
        {data.map((image) => (
          <Grid lg={4} md={4} sm={4} xs={12}>
            <img src={image} alt="banner" width="100%" />
          </Grid>
        ))}
      </Grid>

      <Image src={covidUrl} alt="covid19" />
    </>
  );
};

const Image = styled("img")(({ theme }) => ({
  marginTop: "10px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));

export default MidBanner;
