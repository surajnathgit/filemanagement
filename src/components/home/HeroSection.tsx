"use client";
import React, {useState}  from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import {Bolt } from "@mui/icons-material";
import ParticleBackground from "../animations/ParticleBackground";
import ScheduleDemoModal from "../common/ScheduleDemoModal";

const commonGradients = [
  "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
  "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
  "linear-gradient(135deg, #45B7D1 0%, #2196F3 100%)",
  "linear-gradient(135deg, #F7931E 0%, #FF9800 100%)",
  "linear-gradient(135deg, #96CEB4 0%, #4CAF50 100%)",
  "linear-gradient(135deg, #D63384 0%, #E91E63 100%)",
  "linear-gradient(135deg, #20C997 0%, #17A2B8 100%)",
];

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [demoOpen, setDemoOpen] = useState(false);

    const floatingBubblesVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
    },
  };
  
  return (
    <>
    <Box
      sx={{
        minHeight: { xs: "60vh", sm: "75vh", md: "85vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 12.5, sm: 12, md: 16 },  
        px: { xs: 2, sm: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)",
      }}
    >
      {/* Animated background */}
      <ParticleBackground
        count={30}
        colors={[
          theme.palette.primary.main,
          theme.palette.primary.light,
          theme.palette.secondary.main,
          theme.palette.secondary.light,
        ]}
        speed={0.3}
        minSize={1}
        maxSize={3}
        style={{ opacity: 0.5 }}
      />

            {/* Animated Background Elements */}
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    width: Math.random() * 8 + 4,
                    height: Math.random() * 8 + 4,
                    borderRadius: "50%",
                    background: commonGradients[i % commonGradients.length],
                    opacity: 0.3,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100],
                    scale: [1, Math.random() + 0.5, 1],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </Box>
      
            {/* Existing Animated Background Elements */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                overflow: "hidden",
              }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={floatingBubblesVariants}
                  animate="animate"
                  custom={i}
                  style={{
                    position: "absolute",
                    width: `${30 + Math.random() * 70}px`,
                    height: `${30 + Math.random() * 70}px`,
                    borderRadius: "50%",
                    background: "rgba(78, 54, 255, 0.05)",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    zIndex: 0,
                  }}
                />
              ))}
            </Box>
      

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          // sx={{ mt: 2 }}
        >
          {/* Text Content */}
          <Box sx={{ maxWidth: 700, width: "100%" }}>
                          <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
              <Box
                sx={{
                  display: { xs: "flex", sm: "block", md: "block" },
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: { xs: 1.5, sm: 2 },
                    py: { xs: 0.4, sm: 0.5 },
                    borderRadius: "50px",
                    fontSize: { xs: "0.82rem", sm: "0.92rem", md: "1rem" },
                    fontWeight: 600,
                    background: "rgba(60, 54, 187, 0.18)",
                    border: "0.5px solid rgb(22, 13, 91)",
                    color: "#C2C2FF",
                    width: { xs: "235px", sm: "fit-content" },
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    mb: 4,
                    boxShadow: `0 4px 12px #4E36FF22`, 
                  }}
                >
                  <Bolt
                    sx={{ fontSize: 18, color: "#A666FF", flexShrink: 0 }}
                  />
                  <Box
                    component="span"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      fontFamily: theme.typography.fontFamily
                    }}
                  >
                    AI-Powered File Management
                  </Box>
                </Box>
              </Box>
              </motion.div>

                            <motion.div
              initial={{ opacity: 0, scale: 1.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box textAlign="center" sx={{ mb: {xs: 3, sm: 4 }}}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: {xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3rem" },
                    color: "white",
                  }}
                >
                  Organize, Secure, & Collaborate
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: {xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3rem" },
                    background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  All in One File Management System
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <Typography
                variant="h6"
                color="white"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.1rem" , lg: "1.1rem" },
                  mb: { xs: 3, sm: 5 },
                  opacity: 0.9,
                  textAlign: 'center',
                  // maxWidth: { xs: "100%", sm: "80%", lg: "90%" },
                }}
              >
                Transform the way your team handles files — File Management streamlines storage, organization, and secure sharing in one powerful platform.
              </Typography>
            </motion.div>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent='center'
              alignItems='center'
              sx={{ mt: 2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    py: { xs: 1.1, sm: 1.2,  md: 1.5 },
                    px: { xs: 2.5, sm: 3.5, md: 4 },
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    background: "linear-gradient(90deg, #4E36FF, #900BFF)",
                    color: "white",
                    borderRadius: "30px",
                    boxShadow: "0 4px 14px rgba(78, 54, 255, 0.4)",
                    transition: "transform 0.3s ease, box-shadow 0.3 ease",
                    "&:hover": {
                      transform: "scale(1.06)",
                      boxShadow: "0 6px 20px rgba(78, 54, 255, 0.6)",
                    },
                  }}
                  onClick={() => setDemoOpen(true)}
                >
                  Book a Free Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    py: { xs: 1.1, sm: 1.2,  md: 1.5 },
                    px: { xs: 2.5, sm: 3.5, md: 4 },
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    color: "white",
                    borderRadius: "30px",
                    borderColor: "rgba(255,255,255,0.3)",
                    transition: "transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
                    transformOrigin: "center",
                    willChange: "transform",
                    "&:hover": {
                      transform: "scale(1.06)",
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  Learn More →
                </Button>
              </motion.div>
            </Stack>
                    </Box>          
        </Box>
      </Container>
    </Box>

    <ScheduleDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default HeroSection;


            {/* Image Content */}
  {/* <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: isSmallScreen ? 1.8 : 0.8 }}
    viewport={{ once: true }}
    style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "2rem" }}
  >
    <Box
      component={motion.div}
      // animate={{
      //   y: [0, -12, 0],
      //   rotateZ: [0, 0.8, 0, -0.8, 0],
      // }}
      // transition={{
      //   duration: 4.5,
      //   repeat: Infinity,
      //   ease: "easeInOut",
      // }}
      sx={{
        width: "100%",
        maxWidth: { xs: 160, sm: 240, md: 400 },
        height: 360,
      }}
    >
      <Box
        component="img"
        src="/images/edit-fm-hero-img.png"
        alt="Task Master Preview"
        sx={{
          width: "100%",
          // height: "auto",
          // objectFit: "contain",
        }}
      />
    </Box>
  </motion.div> */}
