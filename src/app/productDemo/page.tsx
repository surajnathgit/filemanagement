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
  Sort,
  History,
  Search,
  Share,
  Checklist,
  AnalyticsOutlined,
} from "@mui/icons-material";
import {
  Cloud,
  IntegrationInstructions,
  PhoneIphone,
  Psychology,
  AutoFixHigh,
  PeopleAlt,
} from "@mui/icons-material";
import {
  FolderSpecial,
  HistoryToggleOff,
  ManageSearch,
} from "@mui/icons-material";
import {
  Workspaces,
  FindInPage,
  FolderOpen,
} from "@mui/icons-material";
import {
  RestorePage,
  ListAlt,
  CloudDone,
} from "@mui/icons-material";
import {
  Timeline,
  BarChart,
  Label,
} from "@mui/icons-material";
import Image from "next/image";

const features = [
  {
    title: "Unlimited Storage",
    desc: "Centralized repository that scales with your needs—no limits, no slowdowns.",
    icon: <Cloud sx={{ fontSize: "28px" }} />,
  },
  {
    title: "Seamless Integration",
    desc: " Works with your favorite tools and enterprise systems.",
    icon: <IntegrationInstructions sx={{ fontSize: "28px" }}/>,
  },
  {
    title: "Access Anywhere",
    desc: "Desktop, mobile, and offline sync so you can work anytime, anywhere.",
    icon: <PhoneIphone sx={{ fontSize: "28px" }}/>,
  },
  {
    title: "AI-Powered Management",
    desc: "Smart search, auto-tagging, and OCR for quick file organization.",
    icon: <Psychology sx={{ fontSize: "28px" }}/>,
  },
  {
    title: "Smart Cleanup",
    desc: "Detects and removes duplicate files automatically to save space and stay organized.",
    icon: <AutoFixHigh sx={{ fontSize: "28px" }}/>,
  },
  {
    title: "Collaboration & Sharing",
    desc: "Granular permissions and secure links with expiry dates.",
    icon: <PeopleAlt sx={{ fontSize: "28px" }}/>,
  },
];

const steps = [
  {
    step: 1,
    chip: "Organize",
    heading: "Smart File Organization",
    description:
      "Keep your digital workspace clutter-free with AI-powered file organization. Automatically categorize files by type, project, or activity so you can always find what you need without manual effort. Designed to save time and keep workflows smooth.",
    features: [
      { text: "AI-driven categorization", icon: <Psychology /> },
      { text: "Project-based grouping", icon: <Workspaces /> },
      { text: "Content recognition", icon: <FindInPage /> },
      { text: "Seamless navigation", icon: <FolderOpen /> },
    ],
    img: "/images/mockup1.png",
    icon: <FolderSpecial sx={{ color: "#fff", fontSize: 28 }} />,
    bg: "linear-gradient(to left bottom, #3f83ec, #1a70ef, #005cef, #0044ec, #1324e6)",
    boxShadow:
      "0 10px 30px rgba(0, 92, 239, 0.5), 0 4px 15px rgba(63, 131, 236, 0.35)",
    stepTextColor: "#5625f5",
  },
  {
    step: 2,
    chip: "Secure",
    heading: "Version Control & Recovery",
    description:
      "Never lose track of your files again. Our version vault lets you restore any file to any previous state, ensuring safety from accidental deletions or unwanted changes. Stay confident knowing your work is always recoverable.",
    features: [
      { text: "Version history tracking", icon: <History /> },
      { text: "One-click recovery", icon: <RestorePage /> },
      { text: "Change logs", icon: <ListAlt /> },
      { text: "Accident-proof storage", icon: <CloudDone /> },
    ],
    img: "/images/mockup2.png",
    icon: <HistoryToggleOff sx={{ color: "#fff", fontSize: 28 }} />,
    bg: "linear-gradient(to right top, #a666ff, #ac54e7, #af41ce, #ae2bb6, #ab0d9e)",
    boxShadow:
      "0 10px 30px rgba(171, 13, 158, 0.5), 0 4px 15px rgba(166, 102, 255, 0.35)",
    stepTextColor: "#AB0D9E",
  },
  {
    step: 3,
    chip: "Search",
    heading: "Insights & Quick Access",
    description:
      "Find files instantly and track storage usage with built-in insights. Our intelligent search and visual dashboards keep you in control, showing trends, recent activity, and space usage at a glance. Stay productive with quick access to the information that matters most.",
    features: [
      { text: "Instant file search", icon: <Search /> },
      { text: "Recent activity tracking", icon: <Timeline /> },
      { text: "Storage usage insights", icon: <BarChart /> },
      { text: "Quick filters & tags", icon: <Label /> },
    ],
    img: "/images/mockup3.png",
    icon: <ManageSearch sx={{ color: "#fff", fontSize: 28 }} />,
    bg: "linear-gradient(to right top, #6b00ff, #7b27f7, #883bef, #924ce7, #9a5cdf)",
    boxShadow:
      "0 10px 30px rgba(123, 39, 247, 0.5), 0 4px 15px rgba(107, 0, 255, 0.3)",
    stepTextColor: "#9725f5",
  },
];

const ProductDemoPage = () => {
  const theme = useTheme();

      const floatingBubblesVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        background:
          "linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)",
        color: "white",
        overflow: "hidden",
        paddingTop: "60px",
      }}
    >
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
              background: `linear-gradient(135deg, #4E36FF 0%, #FF6B6B 100%)`,
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


      <Box
        sx={{
          minHeight: "100vh",
          py: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 , ease: "easeOut"}}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  // mt: 2,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3.5rem" },
                  background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Explore File Management
              </Typography>
            </Box>

            {/* Overview */}
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                maxWidth: 900,
                mx: "auto",
                mb: 2,
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1rem",
                },
              }}
            >
              Discover how our intuitive design and smart features make file management effortless—helping you organize, access, and share documents quickly, securely, and efficiently at every step.
            </Typography>
          </motion.div>
        </Container>

        <Box sx={{ py: { xs: 6, md: 6 } }}>
          <Container
            maxWidth={false}
            sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}
          >
            {steps.map((step, index) => (
              <Grid
                key={index}
                container
                spacing={6}
                direction={{
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                }}
                alignItems="center"
                mb={{
                  xs: 6,
                  md: index < steps.length - 1 ? 16 : 12,
                }}
              >
                {/* Text Section */}
                <Grid item xs={12} md={6} sx={{ pl: { md: 6 } }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: step.step === 1 ? 0.2 : 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {/* Icon box */}
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 3,
                          background: step.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: step.boxShadow,
                          mr: 2.5,
                        }}
                      >
                        {step.icon}
                      </Box>

                      {/* Step Chip */}
                      <Box
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: 999,
                          backgroundColor: "#7160f628",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: step.stepTextColor, fontWeight: 700 }}
                        >
                          {step.chip}
                        </Typography>
                      </Box>
                    </Box>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: step.step === 1 ? 0.35 : 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      sx={{
                        mb: 2,
                        fontSize: {
                          xs: "1.5rem", 
                          sm: "1.75rem",
                          md: "2.25rem",
                        },
                      }}
                    >
                      {step.heading}
                    </Typography>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: step.step === 1 ? 0.45 : 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                    <Typography
                      variant="body1"
                      color="#ffffffd1"
                      sx={{
                        mb: 3,
                        fontSize: {
                          xs: "0.9rem",
                          sm: "1rem",
                          md: "1rem",
                        },
                      }}
                    >
                      {step.description}
                    </Typography>
                    </motion.div>

                    {/* Features */}
                    <Grid container spacing={2}>
                      {step.features.map((feature, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: step.step === 1 ? 0.55 + i * 0.1 : i * 0.1}}
                            viewport={{ once: true, amount: 0.4 }}
                          >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 35,
                                height: 35,
                                minWidth: 35,
                                minHeight: 35,
                                flexShrink: 0,
                                borderRadius: 3,
                                background: step.bg,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {feature.icon}
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#ffffff",
                                fontSize: {
                                  xs: "0.9rem",
                                  sm: "1rem",
                                },
                                fontWeight: 500,
                                mt: 0.8,
                                lineHeight: 1.3,
                              }}
                            >
                              {feature.text}
                            </Typography>
                          </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                </Grid>

                {/* Image Section */}
                <Grid item xs={12} md={6}>
                  <motion.div
                     initial={{
                     opacity: 0,
                     x: index === 1 ? -100 : 100, 
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25,  ease: "easeOut" }}
                  >
                    <Box
                      sx={{
                        borderRadius: 4,
                        // overflow: "hidden",
                        width: "100%",
                        maxWidth: { xs: "100%", md: "1000px" },
                        mx: "auto",
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "120%",
                            height: "120%",
                            borderRadius: "50%",
                            background:
                              "radial-gradient(circle, #4e36ff33, transparent 70%)",
                            filter: "blur(60px)",
                            zIndex: 0,
                          }}
                        />
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, ease: 'easeInOut'}}
                            style={{ width: "100%" }}
                          >
                          <Image
                            src={step.img}
                            alt={step.heading}
                            width={3000}
                            height={1200}
                            quality={100}
                            priority
                            style={{
                              width: "100%",
                              height: "auto",
                              transform: "scale(1)",
                              transformOrigin: "center", 
                              objectFit: "cover",
                            }}
                          />
                          </motion.div>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            ))}
          </Container>
        </Box>

        {/* Video Demo Section */}
        {/* <Container maxWidth="lg">
          <Box sx={{ mb: 12 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                textAlign="center"
                mb={2}
                sx={{
                  background:
                    "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: {
                    xs: "1.75rem", 
                    sm: "2rem",    
                    md: "2.5rem",  
                  },
                }}
              >
                See Task Master in Action
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                mb={4}
                sx={{ maxWidth: 600, mx: "auto",  fontSize: {
                  xs: "0.875rem", 
                  sm: "1rem",     
                } }}
              >
               Watch a quick overview of how Task Master boosts productivity and teamwork with AI-powered insights.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%",
                  borderRadius: 2,
                  overflow: "hidden",
                  maxWidth: "900px",
                  mx: "auto",
                  boxShadow: 6,
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/O8ivm7403rk"
                  title="Task Master Demo"                
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 'none'
                  }}
                ></iframe>
              </Box>
            </motion.div>
          </Box> */}

          {/* Key Features Section */}
          <Container maxWidth="lg">
          <Box sx={{ mb: 12 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                textAlign="center"
                sx={{
                  background:
                    "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1.8,
                  fontSize: {
                    xs: "1.8rem", sm: "2.4rem", md: "2.75rem"
                  },
                }}
              >
                Key Features
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                mb={6}
                sx={{ maxWidth: 700, mx: "auto", fontSize: {xs: "0.95rem", sm: "1.05rem", md: "1.15rem"}}}
              >
                Explore the smart features that make file management effortless
              </Typography>
            </motion.div>

            <Grid container spacing={4} sx={{ mb: 10 }}>
              {features.map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ width: "100%" }}
                  >
                    <Card
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 3,
                        px: 3,
                        py: 4.5,
                        "&:hover": {
                          background: "rgba(255,255,255,0.07)", 
                          boxShadow: "0 6px 24px rgba(13, 25, 184, 0.34)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2.5,
                        }}
                      >
                        <Box
                          sx={{
                            background:
                              "linear-gradient(135deg, #4E36FF, #FF6B6B)",
                            width: 50,
                            height: 50,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(144, 11, 255, 0.35)",
                          }}
                        >
                          <Typography
                            sx={{ color: "#fff", mt: 1 }}
                          >
                            {feature.icon}
                          </Typography>
                        </Box>

                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ color: "white" }}
                        >
                          {feature.title}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.9, color: "white", fontSize: "0.95rem" }}
                      >
                        {feature.desc}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* How It's Different */}
          <Box sx={{ mt: 10, mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                textAlign="center"
                sx={{
                  background:
                    "linear-gradient(135deg, #4E36FF 0%, #900BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1.8,
                  fontSize: {
                    xs: "1.8rem", sm: "2.4rem", md: "2.75rem"
                  },
                }}
              >
                How It's Different
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                mb={6}
                sx={{ maxWidth: 700, mx: "auto", fontSize: {xs: "0.95rem", sm: "1.05rem", md: "1.15rem"} }}
              >
                Discover why our File Management stands above the competition
              </Typography>
            </motion.div>

            <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
              <Grid container spacing={3}>
                {[
                  {
                    icon: <Sort sx={{ fontSize: "30px" }} />,
                    title: " Instant Search",
                    desc: "Find any file in seconds, no matter where it’s stored.",
                    bg: "linear-gradient(135deg, #D63384, #E91E63)",
                  },
                  {
                    icon: <History sx={{ fontSize: "30px" }} />,
                    title: "Effortless Sharing",
                    desc: "Send files securely—no account needed for recipients.",
                    bg: "linear-gradient(135deg, #96CEB4, #4CAF50)",
                  },
                  {
                    icon: <Search sx={{ fontSize: "30px" }} />,
                    title: "Version Vault",
                    desc: "Restore any file from any point in time.",
                    bg: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
                  },
                  {
                    icon: <Share sx={{ fontSize: "30px" }} />,
                    title: "Smart Sorting",
                    desc: "AI groups files by content, project, or activity.",
                    bg: "linear-gradient(135deg,  #AB47BC, #8E24AA)",
                  },
                  {
                    icon: <Checklist sx={{ fontSize: "30px" }} />,
                    title: "Bulk Actions",
                    desc: "Edit, tag, or move hundreds of files in one go.",
                    bg: "linear-gradient(135deg, #45B7D1, #2196F3)",
                  },
                  {
                    icon: <AnalyticsOutlined sx={{ fontSize: "30px" }} />,
                    title: "Insight Tracker",
                    desc: "See who’s viewed, downloaded, or updated your files.",
                    bg: "linear-gradient(135deg, #7B61FF, #FF47B6)",
                  },
                ].map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{ display: "flex" }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + Math.floor(index / 3) * 0.2,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.04 }}
                      style={{ width: "100%", transformOrigin: "center" }}
                    >
                      <Card
                        elevation={2}
                        sx={{
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: 5,
                          p: 1,
                          textAlign: "center",
                          height: "100%",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease",
                          "&:hover": {
                            boxShadow: "0 6px 24px rgba(10, 10, 10, 0.34)",
                            transform: "translateY(-2px)",
                          },
                          "&:hover .description": {
                            color: "white",
                          },
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
                          }}
                        >
                          <Box
                            sx={{
                              background: item.bg,
                              width: 50,
                              height: 50,
                              borderRadius: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mb: 2,
                              boxShadow: "0 4px 20px rgba(144, 11, 255, 0.35)",
                            }}
                          >
                            <Typography
                              mb={1}
                              sx={{
                                color: "white",
                                mt: 2,
                                transition: "all 0.3s ease",
                              }}
                            >
                              {item.icon}
                            </Typography>
                          </Box>
                          <Typography
                            variant="h6"
                            fontWeight="600"
                            color="white"
                            gutterBottom
                            sx={{ transition: "all 0.3s ease" }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            className="description"
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.92rem" }}
                          >
                            {item.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductDemoPage;
