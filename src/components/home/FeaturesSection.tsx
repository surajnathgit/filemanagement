"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FiDatabase, FiSearch, FiShield, FiUpload, FiFileText, FiArchive, FiCopy } from "react-icons/fi";
import { LuTags, LuPlug, LuScanLine } from "react-icons/lu";
import { LiaMobileAltSolid } from "react-icons/lia";
import { IoGitBranchOutline } from "react-icons/io5";

const features = [
  {
    icon: FiDatabase,
    title: "Centralized Repository",
    description: "Store all your documents in one place with no limits on file size or volume.",
    color: "#1c52e6",
  },
  {
    icon: IoGitBranchOutline,
    title: "Version Control",
    description: "Complete history tracking with the ability to restore any previous version of your documents.",
    color: "#ff6b6b",
  },
  {
    icon: FiSearch,
    title: "AI-powered Search & Retrieval",
    description: "Semantic search capabilities that understand context and find exactly what you need instantly.",
    color: "#44A08D",
  },
  {
    icon: LuTags,
    title: "Document Categorization & Tagging",
    description: "Automated organization with smart tagging and categorization for effortless file management.",
    color: "#FF47B6",
  },
  {
    icon: FiShield,
    title: "Access Control & Permissions",
    description: "Granular permission settings to control who can view, edit, or share your sensitive documents.",
    color: "#5C6BC0",
  },
  {
    icon: FiUpload,
    title: "Secure Sharing",
    description: "Share files securely with expiry dates and password protection for enhanced security.",
    color: "#fb5a4f",
  },
  {
    icon: FiFileText,
    title: "Audit Trails",
    description: "Complete compliance tracking with detailed logs of all file activities and user actions.",
    color: "#4CAF50",
  },
  {
    icon: LuPlug,
    title: "System Integration",
    description: "Seamless integration capabilities with your existing tools and enterprise systems.",
    color: "#FF9800",
  },
  {
    icon: FiArchive,
    title: "Automated Archiving & Retention",
    description: "Smart policies that automatically archive and manage files based on your business rules.",
    color: "#2196F3",
  },
  {
    icon: LiaMobileAltSolid,
    title: "Mobile Access",
    description: "Full mobile access with offline sync to keep your files available even without internet.",
    color: "#AB47BC",
  },
  {
    icon: LuScanLine,
    title: "OCR Integration",
    description: "Advanced OCR technology that makes scanned documents searchable and editable.",
    color: "#26C6DA",
  },
  {
    icon: FiCopy,
    title: "Duplicate File Detection",
    description: "Intelligent cleanup tools that identify and remove duplicate files to optimize storage.",
    color: "#804df5",
  },
];

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

const KeyFeaturesSection = () => {
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
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
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
              mb: 2,
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#B9AFFF",
              }}
            >
              Everything You Need for
            </Box>
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Modern File Management
            </Box>
          </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mx: "auto",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                fontWeight: 600,
                lineHeight: 1.5,
                maxWidth: "700px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Powerful features designed to  simplify file access, streamline your workflow, enhance security, and boost team productivity.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
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
                  style={{ width: "100%" }}
                >
                  <Card
                    elevation={1}
                    sx={{
                      position: "relative",
                      px: 1,
                      py: 1,
                      background: "rgba(255, 255, 255, 0.04)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: 4,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      transition:
                        "transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        background: "rgba(255, 255, 255, 0.06)",
                        boxShadow: "0 8px 30px rgba(102, 51, 255, 0.25)", 
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "4px",
                          backgroundColor: feature.color,
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          boxShadow: `0 0 2px ${feature.color}, 0 0 4px ${feature.color}`,
                          transition:
                            "box-shadow 0.3s ease, background-color 0.3s ease",
                        },
                      },
                      "&:hover .feature-icon": {
                        transform: "rotate(8deg) scale(1.2)",
                        filter:
                          "brightness(1.4) drop-shadow(0 0 6px currentColor)",
                        transition: "transform 0.3s ease, filter 0.3s ease",
                      },
                      "&:hover .icon-bg": {
                        transform: "scale(1.1)",
                        background: `linear-gradient(135deg, ${feature.color}4D, ${feature.color}80)`,
                        transition:
                          "transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
                      },
                      "&:hover .feature-title": {
                        color: "#9b78fcff ",
                        transition: "color 0.3s ease",
                      },
                      "&:hover .feature-description": {
                        opacity: 1,
                        transition: "opacity 0.3s ease",
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box>
                        <Box
                          className="icon-bg"
                          sx={{
                            background: `${feature.color}33`,
                            width: 70,
                            height: 70,
                            borderRadius: 5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2.5,
                            p: 2,
                            transition:
                              "background 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease",
                          }}
                        >
                          <Icon
                            className="feature-icon"
                            size={36}
                            color={feature.color}
                            style={{
                              transition:
                                "transform 0.3s ease, filter 0.3s ease",
                            }}
                          />
                        </Box>

                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          className="feature-title"
                          sx={{
                            color: "white",
                            mb: 1.5,
                            transition:
                              "color 0.3s ease, text-shadow 0.3s ease",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="feature-description"
                          sx={{
                            opacity: 0.65,
                            color: "white",
                            fontSize: "0.95rem",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default KeyFeaturesSection;
