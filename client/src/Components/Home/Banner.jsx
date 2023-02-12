// npm i react-multi-carousel
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
// import { bannerData } from "../../Constants/data";
import "react-multi-carousel/lib/styles.css";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,    
  },
}));
const Word  = styled(Typography)(({ theme }) => ({
  fontSize : "70px",
  marginTop : "-17.5%" ,
  marginLeft : "40%",
  [theme.breakpoints.down("md")]: {
    marginTop : "-40%"   ,
    fontSize : "30px",
   marginLeft : "40%",
  },
}));

const Banner = ({bannerData}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData.map((data, id) => (
        <Box  style={{position : "relative"}}>
        <Image src={data.url} alt="banner" key={id} />
        <Word fontSize="900" fontWeight="bold" style={{position : "absolute" , color : "red", }}>Flipkart</Word>
        </Box>
      ))}
    </Carousel>
  );
};

export default Banner;
