"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { RocketLaunch, Inventory2, Security, FactCheck } from "@mui/icons-material";
import { AccessTimeOutlined, CompareArrows, GppBad, RuleFolder } from "@mui/icons-material";
import ScheduleDemoModal from "../common/ScheduleDemoModal";

const ComparisonSection = () => {
  const theme = useTheme();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
          color: "white",
          py: { xs: 8, md: 12 },
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
                mb: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#B9AFFF",
                }}
              >
                Transformation With
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
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.9,
                mb: 6,
                textAlign: "center",
                fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
                maxWidth: 800,
                mx: "auto",
              }}
            >
              The gap between managing files and mastering them — see the
              AI-powered difference.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Before Implementation */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: { xs: "600px", md: "100%" },
                  mx: { xs: "auto", md: "unset" },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
    component={motion.div}
    whileHover={{
      scale: 1.02,
      boxShadow: "0px 10px 30px rgba(78, 54, 255, 0.2)",
    }}
    transition={{ duration: 0.3 }}
  >
                  <Paper
                    sx={{
                      position: "relative", 
                      background:
                        "linear-gradient(135deg, rgba(78,54,255,0.08), rgba(78,54,255,0.05))",
                      border: "1px solid rgba(78,54,255,0.25)",
                      borderRadius: 4,
                      px: 3,
                      py: 4,
                      height: "100%",
                      boxShadow: "0 4px 20px rgba(78,54,255,0.1)",
                      overflow: "hidden",
                      textAlign: "left",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        backgroundImage: "linear-gradient(to right, #1f71f4, #6551fd)",
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        transition: "opacity 0.3s ease",
                        opacity: 0.6,
                      },
                      "&:hover::after": {
                        opacity: 1, 
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {/* Icon */}
                      <WarningAmberRoundedIcon
                        sx={{ color: "#4E36FF", fontSize: 36, mr: 2, mb: 1 }}
                      />

                      {/* Text block */}
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          sx={{ color: "#4E36FF", lineHeight: 1.1, mb: 0.5 }}
                        >
                          Before Implementation
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#D1D5DB",
                            opacity: 0.8,
                            fontSize: "0.95rem",
                            fontWeight: "normal",
                          }}
                        >
                          Scattered Document Storage
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-block",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "white" }}
                      >
                        Current Challenges:
                      </Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          left: 0,
                          height: 2,
                          width: "50%",
                          borderRadius: 2,
                          background:
                            "linear-gradient(to right, #1f71f4, #6551fd)",
                        }}
                      />
                    </Box>

                    <Typography
                      component="ul"
                      variant="body1"
                      sx={{
                        pl: "1.2em",
                        mb: "1.5em",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {[
                        "Files scattered across multiple systems",
                        "Version confusion and conflicts",
                        "Time-consuming manual search",
                        "Inconsistent file organization",
                        "Security and access control issue",
                        "Lost or misplaced documents",
                      ].map((item, i) => (
                        <Typography
                          component={motion.li}
                          key={i}
                          variant="body1"
                          sx={{
                            position: "relative",
                            pl: "0.8em",
                            mb: 1,
                            color: "rgba(255,255,255,0.85)",
                            cursor: "default",
                            listStyleType: "none",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              left: "-0.8em",
                              top: "0.6em",
                              width: "0.5em",
                              height: "0.5em",
                              borderRadius: "50%",
                              backgroundColor: "#4E36FF",
                            },
                          }}
                          whileHover={{
                            x: 6,
                            color: "#FFFFFF",
                            transition: { type: "tween", duration: 0.2 },
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Typography>

                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-block",
                        mb: 2,
                        mt: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "white" }}
                      >
                        Key Pain Points:
                      </Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          left: 0,
                          height: 2,
                          width: "52%",
                          borderRadius: 2,
                          background:
                            "linear-gradient(to right, #1f71f4, #6551fd)",
                        }}
                      />
                    </Box>
                    <Box mt={1} display="flex" flexDirection="column" gap={1.2}>
                      {[
                        {
                          icon: (
                            <AccessTimeOutlined
                              sx={{ color: "#4E36FF", fontSize: 24 }}
                            />
                          ),
                          bold: "Average 20 minutes",
                          text: "to find documents",
                        },
                        {
                          icon: (
                            <CompareArrows
                              sx={{ color: "#4E36FF", fontSize: 24 }}
                            />
                          ),
                          bold: " Multiple versions",
                          text: "causing confusion",
                        },
                        {
                          icon: (
                            <GppBad sx={{ color: "#4E36FF", fontSize: 24 }} />
                          ),
                          bold: "Security breaches",
                          text: "and unauthorized access",
                        },
                        {
                          icon: (
                            <RuleFolder
                              sx={{ color: "#4E36FF", fontSize: 24 }}
                            />
                          ),
                          bold: "Compliance audit",
                          text: "difficulties",
                        },
                      ].map((item, index) => (
                        <Box
                          key={index}
                          component={motion.div}
                          whileHover={{
                            y: -4,
                            scale: 1.01,
                            boxShadow: "0px 4px 14px rgba(84, 62, 231, 0.12)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 1,
                            borderRadius: 2,
                            backgroundColor: "#4E36FF1A",
                            overflow: "hidden",
                            cursor: "default",
                            transition: "background-color 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#4E36FF33",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 1,
                              width: 36,
                              height: 36,
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#FFFFFF",
                              transition: "color 0.3s ease",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#939cfd",
                                transition: "color 0.3s ease",
                                "&:hover": {
                                  color: "#bcc1fc",
                                },
                              }}
                            >
                              {item.bold}
                            </Box>{" "}
                            {item.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                  </Box>
                </motion.div>
              </Box>
            </Grid>

            {/* After Implementation */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: { xs: "600px", md: "100%" },
                  mx: { xs: "auto", md: "unset" },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 10px 30px rgba(124, 58, 237, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      position: "relative", 
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(124,58,237,0.05))",
                      border: "1px solid rgba(124,58,237,0.25)",
                      borderRadius: 4,
                      px: 3,
                      py: 4,
                      height: "100%",
                      boxShadow: "0 4px 20px rgba(124,58,237,0.1)",
                      textAlign: "left",
                      overflow: "hidden",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        backgroundImage: "linear-gradient(to right top, #a654f7, #a856f8, #a958fa, #ab59fb, #ac5bfd, #a959fc, #a556fb, #a254fa, #994df7, #9047f3, #8640f0, #7c3aed)",
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        transition: "opacity 0.3s ease",
                        opacity: 0.6,
                      },
                      "&:hover::after": {
                        opacity: 1, 
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {/* Icon */}
                      <TaskAltOutlinedIcon
                        sx={{ color: "#7C3AED", fontSize: 34, mr: 2 }}
                      />

                      {/* Text block */}
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          sx={{ color: "#7C3AED", lineHeight: 1.1, mb: 0.5 }}
                        >
                          After Implementation
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#D1D5DB",
                            opacity: 0.8,
                            fontSize: "0.95rem",
                            fontWeight: "normal",
                          }}
                        >
                          AI-Powered Document Hub
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-block",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "white" }}
                      >
                        New Capabilities:
                      </Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          left: 0,
                          height: 2,
                          width: "50%",
                          borderRadius: 2,
                          background:
                            "linear-gradient(to right top, #a654f7, #a856f8, #a958fa, #ab59fb, #ac5bfd, #a959fc, #a556fb, #a254fa, #994df7, #9047f3, #8640f0, #7c3aed)",
                        }}
                      />
                    </Box>
                    <Typography
                      component="ul"
                      variant="body1"
                      sx={{
                        pl: "1.2em",
                        mb: "1.5em",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {[
                        "Centralized, organized document repository",
                        "Automatic version control and tracking",
                        "Instant AI-powered document search",
                        "Automated categorization and tagging",
                        "Robust security and access controls",
                        "Complete document lifecycle management",
                      ].map((item, i) => (
                        <Typography
                          component={motion.li}
                          key={i}
                          variant="body1"
                          sx={{
                            position: "relative",
                            mb: 1,
                            pl: "0.8em",
                            color: "rgba(255,255,255,0.85)",
                            cursor: "default",
                            listStyleType: "none",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              left: "-0.8em",
                              top: "0.6em",
                              width: "0.5em",
                              height: "0.5em",
                              borderRadius: "50%",
                              backgroundColor: "#7C3AED",
                            },
                          }}
                          whileHover={{
                            x: 6,
                            color: "#FFFFFF",
                            transition: { type: "tween", duration: 0.2 },
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Typography>

                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-block",
                        mb: 2,
                        mt: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "white" }}
                      >
                        Achieved Improvements:
                      </Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          left: 0,
                          height: 2,
                          width: "40%",
                          borderRadius: 2,
                          background:
                            "linear-gradient(to right top, #a654f7, #a856f8, #a958fa, #ab59fb, #ac5bfd, #a959fc, #a556fb, #a254fa, #994df7, #9047f3, #8640f0, #7c3aed)",
                        }}
                      />
                    </Box>

                    <Box mt={1} display="flex" flexDirection="column" gap={1.2}>
                      {[
                        {
                          icon: (
                            <RocketLaunch
                              sx={{ color: "#7C3AED", fontSize: 24 }}
                            />
                          ),
                          bold: "Average 2 minutes",
                          text: "to find documents",
                        },
                        {
                          icon: (
                            <Inventory2
                              sx={{ color: "#7C3AED", fontSize: 24 }}
                            />
                          ),
                          bold: "Single source of truth",
                          text: "for all versions",
                        },
                        {
                          icon: (
                            <Security sx={{ color: "#7C3AED", fontSize: 24 }} />
                          ),
                          bold: "Enhanced security",
                          text: "and compliance",
                        },
                        {
                          icon: (
                            <FactCheck
                              sx={{ color: "#7C3AED", fontSize: 24 }}
                            />
                          ),
                          bold: "Streamlined",
                          text: "audit processes",
                        },
                      ].map((item, index) => (
                        <Box
                          key={index}
                          component={motion.div}
                          whileHover={{
                            y: -4,
                            scale: 1.01,
                            boxShadow: "0px 4px 14px rgba(124, 58, 237, 0.12)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 1,
                            borderRadius: 2,
                            backgroundColor: "#7C3AED1A",
                            overflow: "hidden",
                            cursor: "default",
                            transition: "background-color 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#7C3AED33",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 1,
                              width: 36,
                              height: 36,
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#FFFFFF",
                              transition: "color 0.3s ease",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#BFA7FF",
                                transition: "color 0.3s ease",
                                "&:hover": {
                                  color: "#DCC7FF",
                                },
                              }}
                            >
                              {item.bold}
                            </Box>{" "}
                            {item.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Call to Action Section */}
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box
              sx={{
                mt: 10,
                py: { xs: 6, md: 10 },
                px: 4,
                background:
                  "linear-gradient(to left bottom, #f359de, #d74edf, #b947e0, #9541e0, #6a3edf)",
                textAlign: "center",
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  color: "white",
                  mb: 1,
                  fontSize: { xs: "1.6rem", md: "2rem" },
                }}
              >
                Ready to Upgrade Your File System?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  mb: 4,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                }}
              >
                Join thousands who’ve made the switch to a simpler, smarter way
                to manage and access files.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box
                  component="button"
                  sx={{
                    px: 3,
                    py: 2,
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    color: "white",
                    background:
                      "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                    borderRadius: 2,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s ease, background 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #5f48ff 0%, #a040ff 100%)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  Get Started Today
                </Box>

                <Box
                  component="button"
                  sx={{
                    px: 3,
                    py: 2,
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    backgroundColor: "white",
                    color: "#1e1e2f",
                    borderRadius: 2,
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    transition:
                      "transform 0.3s ease,  background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f4f4f4",
                      transform: "translateY(-3px)",
                    },
                  }}
                  onClick={() => setDemoOpen(true)}
                >
                  Schedule Demo
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <ScheduleDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default ComparisonSection;
