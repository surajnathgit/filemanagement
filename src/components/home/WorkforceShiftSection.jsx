import { useEffect, useRef, useState, React } from "react";
import { Box, Container, Typography, Grid, Card, Chip, useTheme } from "@mui/material";
import {TrendingDown, FlashOn, BarChart , TrendingUp, Bolt,} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";

const rolesReduced = [
  {
    title: "File Clerks",
    description: "Physical file management eliminated with digital system",
    impact: "-90%",
  },
  {
    title: "Document Processors",
    description: "Document categorization and filing automated",
    impact: "-85%",
  },
  {
    title: "Records Managers",
    description: "Records management and retrieval automated",
    impact: "-75%",
  },
];

const newRoles = [
  {
    title: "Digital Asset Strategist",
    description: "Develops strategies for digital document management",
  },
  {
    title: "Workflow Automation Designer",
    description: "Optimizes AI search algorithms for document retrieval",
  },
  {
    title: "Information Architecture Designer",
    description: "Creates optimal document organization structures",
  },
];

const netImpact = [
  {
    icon: <TrendingDown sx={{ fontSize: 34 }} />,
    title: "-83%",
    description: "Average Role Reduction",
  },
  {
    icon: <TrendingUp sx={{ fontSize: 34 }} />,
    title: "+3",
    description: "New Specialized Roles",
  },
  {
    icon: <Bolt sx={{ fontSize: 34 }} />,
    title: "Upskilling",
    description: "Focus on Higher-Value Work",
  },
];

const RoleCard = ({ role }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  return (
    <Box ref={ref} sx={{ mb: 2.5, pb: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          mb: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            flex: 1,
            pr: 1,
            color: "#a5b4fc",
            fontSize: { xs: "1.1rem", sm: "1.15rem", md: "1.25rem" },
            flex: "1 1 70%",
            minWidth: {
              xs: "200px",
              sm: "unset",
            },
          }}
        >
          {role.title}
        </Typography>
        <Chip
          label={`${role.impact}`}
          size="small"
          sx={{
            mt: 0.5,
            fontWeight: 600,
            background: "linear-gradient(90deg, #2563eb, #3a37f4ff)",
            color: "#fff",
            overflow: "hidden",
            fontSize: {
              xs: "0.71rem",
              sm: "0.75rem",
              md: "0.8rem",
            },
            height: {
              xs: 22,
              sm: 22,
              md: 24,
            },
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          mb: 1.5,
          color: "white",
          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
        }}
      >
        {role.description}
      </Typography>

      {/* Impact Bar */}
      <Box
        sx={{
          width: "100%",
          height: 8,
          borderRadius: 5,
          backgroundColor: "#a5b4fc",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: visible ? `${Math.abs(parseInt(role.impact))}%` : 0,
            background: "linear-gradient(90deg, #2563eb, #3a37f4)",
            height: "100%",
            borderRadius: 5,
            position: "absolute",
            top: 0,
            left: 0,
            transition: "width 1s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

const WorkforceShiftSection = () => {
  const theme = useTheme();

  return (
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
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#B9AFFF	",
              }}
            >
              Role Shifts Powered by
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
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
              lineHeight: 1.6,
              maxWidth: 700,
              mx: "auto",
              mb: 6,
              opacity: 0.8,
              fontWeight: 600,
            }}
          >
            See how roles evolve with File Management — reducing outdated
            functions and enabling future-ready positions.
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <Grid container spacing={4}>
            {/* Roles Reduced */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(10, 62, 235, 0.07)",
                    border: "1px solid rgba(78, 64, 180, 0.25)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "18px",
                    boxShadow: "0 4px 24px rgba(64, 104, 180, 0.1)",
                    color: "#fff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 6px 32px rgba(64, 104, 180, 0.25)",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(90deg, #2563eb, #3a37f4)",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      px: 3,
                      py: 3,                 
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="white"
                      sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
                    >
                      <TrendingDown sx={{ mr: 1.5, fontSize: 30 }} />
                      Roles Replaced
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", lineHeight: 1.2 }}
                    >
                      Declining job roles due to AI and Automation
                    </Typography>
                  </Box>

                  <Box sx={{ p: 3, pt: 3 }}>
                    {rolesReduced.map((role, i) => (
                      <RoleCard key={i} role={role} />
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* New Roles */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(249, 4, 184, 0.07)",
                    border: "1px solid rgba(255, 105, 165, 0.25)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "18px",
                    boxShadow: "0 4px 24px rgba(255, 105, 165, 0.1)",
                    color: "#fff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 6px 32px rgba(255, 105, 165, 0.25)",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      background:
                        "linear-gradient(90deg, rgba(215, 57, 247, 1), rgba(253, 81, 161, 1))",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      px: 3,
                      py: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        mb: 1.5,
                      }}
                    >
                      <FlashOn sx={{ mr: 1, fontSize: 28 }} />
                      New Roles Created
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", lineHeight: 1.2 }}
                    >
                      Emerging roles shaped by automation and AI
                    </Typography>
                  </Box>

                  <Box sx={{ p: 3, pt: 3 }}>
                    {newRoles.map((role, i) => (
                      <Box
                        key={i}
                        sx={{
                          mb: { xs: 3, sm: 3, md: 2.8 },
                          pb: { xs: 3.5, sm: 3.5, md: 2.5 },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            flexWrap: "wrap",
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{
                              color: "#f890da",
                              flex: 1,
                              pr: 1,
                              fontSize: {
                                xs: "1.1rem",
                                sm: "1.15rem",
                                md: "1.25rem",
                              },
                              flex: "1 1 70%",
                              minWidth: {
                                xs: "200px",
                                sm: "unset",
                              },
                              wordBreak: "break-word",
                            }}
                          >
                            {role.title}
                          </Typography>
                          <Chip
                            label="New"
                            size="small"
                            sx={{
                              mt: 0.5,
                              fontWeight: 600,
                              background:
                                "linear-gradient(90deg, rgba(215, 57, 247, 1), rgba(253, 81, 161, 1))",
                              color: "#fff",
                              overflow: "hidden",
                              fontSize: {
                                xs: "0.71rem",
                                sm: "0.75rem",
                                md: "0.8rem",
                              },
                              height: {
                                xs: 22,
                                sm: 22,
                                md: 24,
                              },
                            }}
                          />
                        </Box>

                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: {
                              xs: "0.85rem",
                              sm: "0.9rem",
                              md: "0.95rem",
                            },
                            color: "white",
                          }}
                        >
                          {role.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* Net Impact */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(144, 78, 251, 0.08)",
                    border: "1px solid rgba(155, 95, 255, 0.25)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "18px",
                    boxShadow: "0 4px 24px rgba(155, 95, 255, 0.1)",
                    color: "#fff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 6px 32px rgba(155, 95, 255, 0.25)",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      background:
                        "linear-gradient(90deg, #a34bf5ff, #831be4ff)",
                      borderTopLeftRadius: "18px",
                      borderTopRightRadius: "18px",
                      px: 3,
                      py: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        mb: 1.5,
                      }}
                    >
                      <BarChart sx={{ mr: 1, fontSize: 30 }} />
                      Net Impact Summary
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", lineHeight: 1.2 }}
                    >
                      Overall transformation metrics and outcomes
                    </Typography>
                  </Box>

                  <Box sx={{ p: 3, pt: 3 }}>
                    {netImpact.map((impact, i) => (
                      <Box
                        key={i}
                        sx={{
                          backgroundColor: "rgba(190, 160, 255, 0.05)",
                          border: "1px solid rgba(190, 120, 255, 0.25)",
                          borderRadius: 3,
                          py: 2,
                          px: 2,
                          mb: 2,
                          overflow: "hidden",
                          textAlign: "center",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          transition:
                            "background-color 0.25s ease-in-out, transform 0.25s ease-in-out",
                          "&:hover": {
                            backgroundColor: "rgba(190, 160, 255, 0.08)",
                            transform: "scale(1.018)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 1,
                            color: "#d8b4fe ",
                          }}
                        >
                          {impact.icon}
                        </Box>
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          sx={{
                            fontSize: {
                              xs: "1.25rem",
                              sm: "1.5rem",
                              md: "1.75rem",
                            },
                            color: "#b46af9ff ",
                          }}
                        >
                          {impact.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "white",
                            fontSize: {
                              xs: "0.85rem",
                              sm: "0.9rem",
                              md: "0.95rem",
                            },
                          }}
                        >
                          {impact.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WorkforceShiftSection;
