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
} from "@mui/material";
import { motion } from "framer-motion";
import {
  SearchOutlined,
  StorageOutlined,
  SecurityOutlined,
  TaskOutlined,
} from "@mui/icons-material";

const impactData = [
  {
    icon: <SearchOutlined sx={{ fontSize: 42 }} />,
    percent: "80%",
    highlight: "reduction in document search time",
    title: "Search Efficiency",
    subtitle: "Faster information retrieval",
    gradient: "linear-gradient(135deg, #f04845ff, #EC407A)",
  },
  {
    icon: <StorageOutlined sx={{ fontSize: 42 }} />,
    percent: "60%",
    highlight: "reduction in storage needs",
    title: "Storage Optimization",
    subtitle: "Cost-effective document management",
    gradient: "linear-gradient(135deg,   #7E30E1, #FF4ECD)",
  },
  {
    icon: <SecurityOutlined sx={{ fontSize: 42 }} />,
    percent: "99%",
    highlight: "reduction in lost documents",
    title: "Data Security",
    subtitle: "Enhanced data protection",
    gradient: "linear-gradient(135deg, #EF5350, #FFA726)",
  },
  {
    icon: <TaskOutlined sx={{ fontSize: 42 }} />,
    percent: "90%",
    highlight: "faster audit preparation",
    title: "Compliance Efficiency",
    subtitle: "Streamlined compliance processes",
    gradient: "linear-gradient(135deg, #B621FE, #1FD1F9)",
  },
];

const WhyChooseSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2d1b69 0%, #1a1a40 100%)",
        color: "white",
        py: { xs: 8, md: 12 },
        // textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.75rem" },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#B9AFFF",
              }}
            >
              Why Choose Our
            </Box>
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              File Management
            </Box>
            <Box
              component="span"
              sx={{
                color: "#B9AFFF",
              }}
            >
              Solution?
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              mb: 4,
              textAlign: "center",
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Experience unparalleled efficiency, security, and collaboration with
            our cutting-edge file management platform.
          </Typography>
        </motion.div>

        <Box sx={{ mt: 8 }}>
          <Grid container spacing={3} justifyContent="center">
            {impactData.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{ display: "flex" }}
              >
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.2,
                    ease: "easeOut",
                  }}
                  style={{ width: "100%" }}
                >
                  <Card
                    elevation={1}
                    sx={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: 3,
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      px: 1,
                      py: 2,
                      position: "relative",
                      color: "white",
                      boxShadow: `0 4px 16px rgba(0,0,0,0.25), 0 0 10px ${theme.palette.primary.main}15`,
                      overflow: "hidden",
                      transition:
                        "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.03)",
                        background: "rgba(255, 255, 255, 0.07)",
                        boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.primary.main}55`,
                        transition: "all 0.4s ease",
                      },
                      "&:hover .icon-box": {
                        transform: "scale(1.09)",
                        boxShadow: `0 0 18px rgba(255, 107, 107, 0.4), 0 0 24px rgba(132, 94, 247, 0.3)`,
                      },
                      "&:hover .percent-text": {
                        transform: "scale(1.15)",
                      }
                    }}
                  >
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        textAlign: "center",
                        gap: 1.2,
                      }}
                    >
                      {/* Icon */}
                      <Box
                        className="icon-box"
                        sx={{
                          background: item.gradient,
                          borderRadius: 3,
                          width: 70,
                          height: 70,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                      >
                        {item.icon}
                      </Box>

                      {/* Percent */}
                      <Typography
                      className="percent-text"
                        variant="h3"
                        fontWeight="bold"
                        lineHeight={0.8}
                        sx={{
                          transition: "transform 0.3s ease , background 0.3s ease",
                        }}
                      >
                        {item.percent}
                      </Typography>

                      {/* Highlight Text */}
                      <Typography
                        variant="body2"
                        sx={{ color: "#B39DFF", mb: 0 }}
                      >
                        {item.highlight}
                      </Typography>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ mb: 0.5 }}
                      >
                        {item.title}
                      </Typography>

                      {/* Subtitle */}
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.8, color: "#E0E0E0" }}
                      >
                        {item.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseSection;
