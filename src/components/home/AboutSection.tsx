"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import {Groups, RocketLaunch, SmartToy } from "@mui/icons-material";
import { Speed, CloudDone, Storage, Language } from "@mui/icons-material";

const AboutSection = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery("(max-width:499px)");

  const stats = [
    {
      icon: <Speed sx={{ fontSize: 26 }} />,
      title: "3x Faster",
      description: "Productive Access",
    },
    {
      icon: <CloudDone sx={{ fontSize: 26 }} />,
      title: "99.9% Uptime",
      description: "Anytime Access",
    },
    {
      icon: <Language sx={{ fontSize: 26 }} />,
      title: "24/7",
      description: "Global Sync",
    },
    {
      icon: <Storage sx={{ fontSize: 26 }} />,
      title: "1M+ Files",
      description: "Secure Handling",
    },
    
  ];

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
        color: "white",
        py: { xs: 10, md: 18 },
        overflow: "hidden",
      }}
    >
      {/* Background Glows */}
      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          top: -50,
          left: -80,
          bgcolor: "#4E36FF",
          opacity: 0.15,
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          bottom: -60,
          right: -100,
          bgcolor: "#900BFF",
          opacity: 0.15,
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={7} alignItems="flex-start">
          {/* Left: Title + Description + Stats */}
          <Grid item xs={12} md={6} sx={{mt: 4}}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.25rem" },
                  background:
                    "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                ABOUT US
              </Typography>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.75rem" },
                  background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Smarter File Handling for Modern Teams
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >             
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.9,
                  fontSize: { xs: "0.9rem", sm: "1rem"},
                  lineHeight: { xs: 1.6, sm: 1.7 },
                  mb: 4,
                  color: "white",
                }}
              >
              File Management is a modern platform built to transform how teams collaborate, organize, and secure their information. With intelligent organization, secure access, and seamless collaboration, our solution delivers a streamlined file management experience that scales with your business.
              </Typography>
            </motion.div>

<Grid container spacing={3}>
  {stats.map((item, i) => (
    <Grid item xs={isExtraSmall ? 12 : 6} sm={6} key={item.title} sx={{ display: "flex" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: "easeOut", }}
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            gap: 2.5,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 2,
            px: 2,
            py: 2,
            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.04)",
            color: "white",
            transition: "all 0.3s ease", 
            transform: "scale(1)",
            "&:hover": {
              transform: "scale(1.05)",
              ".icon-box": {
                backgroundColor: "rgba(255, 107, 107, 0.22)",
              },
            },
          }}
        >
          <Box
          className="icon-box"
            sx={{
              color: '#FF6B6B',
              backgroundColor: "rgba(247, 107, 107, 0.15)",
              p: 1.2,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.3s ease"
            }}
          >
            {item.icon}
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.85rem", opacity: 0.8 }}
            >
              {item.description}
            </Typography>
          </Box>
        </Card>
      </motion.div>
    </Grid>
  ))}
</Grid>
          </Grid>

          {/* Right: Mission and Vision cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4} sx={{ mt: { md: 4 } }}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Card
                    elevation={2}
                    sx={{
                      background: "linear-gradient(135deg, #5B2EFF, #A349FF)",
                      color: "white",
                      borderRadius: 4,
                      boxShadow: "0 8px 30px rgba(144, 11, 255, 0.4)",
                      p: 2,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                        Our Mission
                      </Typography>
                      <Typography variant="body1" sx={{fontSize: { xs: "0.9rem", sm: "1rem"}}}>
                        To revolutionize how teams manage and access their files by delivering a secure, smart, and seamless experience — empowering organizations to stay focused, organized, and connected anywhere, anytime.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                      borderRadius: 4,
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 30px rgba(255, 255, 255, 0.08)",
                      p: 2,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                        Our Vision
                      </Typography>
                      <Typography variant="body1" sx={{fontSize: { xs: "0.9rem", sm: "1rem"}}}>
                        To make file handling effortless — where teams can collaborate without barriers, information flows securely, and productivity thrives without complexity.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

