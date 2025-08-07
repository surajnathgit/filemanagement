"use client"
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import {RocketLaunch, BusinessOutlined, LaptopMacOutlined, GavelOutlined, School, PaletteOutlined } from "@mui/icons-material";

const WhoIsProductFor = () => {
  const theme = useTheme();

    const segments = [
    {
  title: "Growing Companies",
  desc: "Scale your file organization as your team and projects expand.",
  icon: <RocketLaunch sx={{ fontSize: "30px" }} />,
  iconBg: "linear-gradient(135deg, #3A8DFF, #00C9A7)",
},
{
  title: "Large Enterprises",
  desc: "Maintain control, compliance, and secure document workflows",
    icon: <BusinessOutlined sx={{ fontSize: "30px" }} />,
    iconBg: "linear-gradient(135deg, #FF9A8B, #FF6B6B)",
  },
  {
    title: "Remote & Hybrid Workers",
    desc: "Access files instantly from anywhere.",
    icon: <LaptopMacOutlined sx={{ fontSize: "30px" }} />,
    iconBg: "linear-gradient(135deg, #1DE9B6, #1DC4E9)", 
},
{
  title: "Legal & Finance Professionals",
  desc: "Ensure version control and audit-readiness.",
    icon: <GavelOutlined sx={{ fontSize: "30px" }} />,
    iconBg: "linear-gradient(135deg, #FDCB6E, #E17055)",
},
{
  title: "Educators & Institutions",
  desc: "Organize, search, and share academic resources.",
    icon: <School sx={{ fontSize: "30px" }} />,
    iconBg: "linear-gradient(135deg, #7FBCFF, #A685E2)", 
},
{
  title: "Creative Professionals",
  desc: "Store and share design files with instant preview and version control.",
    icon: <PaletteOutlined sx={{ fontSize: "30px" }} />,
    iconBg: "linear-gradient(135deg, #FF6FD8, #3813C2)", 
}
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2d1b69 0%, #1a1a40 100%)",
        color: "white",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
                        Who is 
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
                        For?
                      </Box>
                    </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
              mb: 6,
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
              opacity: 0.9,
            }}
          >
            Whether you're running a growing team, handling sensitive data, or simply tired of digital chaos—our file management solution is built to serve you.
          </Typography>

          <Grid container spacing={4}>
            {segments.map((segment, i) => (
              <Grid item xs={12} sm={6} md={4} key={i} sx={{display: "flex"}}>
                <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          style={{width: '100%'}}
                        >
                  <Card
                    sx={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 4,
                      height: '100%',
                      width: '100%',
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      px: 1,
                      py: 1.4,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
                      boxShadow: "0 0 0 transparent",
                      '&:hover': {
                        transform: "translateY(-6px)",
                        boxShadow: "0 8px 30px rgba(102, 51, 255, 0.25)", 
                        border: "1px solid rgba(144, 11, 255, 0.3)",
                      },
                       "&:hover .tilt-icon": {
                         transform: "scale(1.2) rotate(8deg)",
                      },
                      "&:hover .segment-title": {
                        color: "#ba78fc",
                      },
                    }}
                  >
                    <CardContent sx={{flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            textAlign: "center",}}>
                      <Box
                      className="tilt-icon"
                      component={motion.div}
                      sx={{
                        background: segment.iconBg,
                        width: 55,
                        height: 55,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb:2,
                        boxShadow: "0 0 12px rgba(127, 140, 255, 0.6)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <Typography sx={{ color: "white", mt:1 }}>{segment.icon}</Typography>
                    </Box>

                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        className="segment-title"
                        gutterBottom
                        sx={{ color: "white" }}
                      >
                        {segment.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, color: "white" }}>
                        {segment.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default WhoIsProductFor