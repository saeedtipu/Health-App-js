import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

// Import your background image
import backgroundImage from "../assets/Gems/HealthImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./HomePage";
const LandingPage = () => {
  const navigate = useNavigate();
  const bgImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full height of the viewport
    width: "100vw", // Full width of the viewport
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const StyledButton = {
    bgcolor: "#E7E7E7",
    borderRadius: "16px",
    color: "black",
    "&:hover": { backgroundColor: "grey" },
    marginTop: 2, // Adjust the margin as needed
  };

  return (
    <Box sx={bgImageStyle}>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          padding: 5,
          maxWidth: 900,
          borderRadius: 16,
          border: 1,
          position: "relative", // Added to make positioning easier
        }}
      >
        <Typography
          variant="h3"
          color="initial"
          textAlign={"center"}
          mb={2}
          mt={3}
        >
          Health benefits website
        </Typography>
        <Box maxWidth={600} display={"flex"} justifyContent={"center"} ml={6}>
          <Typography variant="h6" color="initial" textAlign={"center"} mb={3}>
            Welcome to our Health and Wellness Hub, where your journey to a
            healthier, happier life begins. At our dedicated platform, we are
            committed to providing you with valuable insights, expert advice,
            and practical tips to empower you on your quest for optimal
            well-being. Whether you're looking to enhance your physical fitness,
            cultivate mental resilience, or explore holistic approaches to
            health, our comprehensive resources aim to guide and inspire.
            Discover the transformative benefits of a balanced lifestyle and
            embark on a path to vitality. Your wellness adventure starts here!
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          mt={9}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              ...StyledButton,
              position: "absolute",
              left: "13%",
              padding: "15px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            onClick={(e) => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              ...StyledButton,
              position: "absolute",
              left: "35%",
              padding: "15px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            onClick={(e) => navigate("/registration")}
          >
            Registration
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              ...StyledButton,
              position: "absolute",
              left: "65%",
              padding: "15px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            onClick={(e) => navigate("/HomePage")}
          >
            Explore
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
