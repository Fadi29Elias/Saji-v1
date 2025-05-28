import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Place, Phone, Email } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t: tLoc } = useTranslation("location");
  const { t: tCon } = useTranslation("contact");

  return (
    <Box component="footer" sx={{ backgroundColor: "#191919", py: 8, px: 3 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: -0.5,
            mb: 4,
          }}
        >
          {tLoc("title")}
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 4,
            backgroundColor: "#FCB040",
            mx: "auto",
            borderRadius: 2,
            mb: 6,
          }}
        />

        <Grid container spacing={4} justifyContent="center">
          {/* Location Info */}
          <Grid item xs={12} md={6}>
            <Box sx={{ color: "#fff" }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Place sx={{ color: "#FCB040", mr: 2, fontSize: "2.5rem" }} />
                <Typography variant="h6" fontWeight={600}>
                  {tLoc("visitUs")}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 1, color: "#cbcbcc" }}>
                <strong>{tLoc("addressLabel")}:</strong> {tLoc("address")}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, color: "#cbcbcc" }}>
                <strong>{tLoc("postalCodeLabel")}:</strong> {tLoc("postalCode")}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: "#cbcbcc" }}>
                <strong>{tLoc("cityLabel")}:</strong> {tLoc("city")}
              </Typography>
              <Box
                sx={{
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                }}
              >
                <iframe
                  title={tLoc("mapTitle")}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.998310065695!2d19.452756612646056!3d51.7696380717568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcad433a00775%3A0x30491857376e5b77!2zUGlvdHJrb3dza2EgNTUsIDkwLTQxMyDFgcOzZMW6LCBQb2xhbmQ!5e0!3m2!1sen!2s!4v1742469042561!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.032)",
                padding: "2.5rem",
                borderRadius: "1.5rem",
                boxShadow: "0 12px 40px rgba(255,255,255,0.1)",
                textAlign: "center",
              }}
            >
              <Box mb={4}>
                <IconButton sx={{ color: "#FCB040", mb: 1 }}>
                  <Phone fontSize="large" />
                </IconButton>
                <Typography variant="h6" color="#fff" fontWeight={600}>
                  {tCon("phone")}
                </Typography>
                <Link href="tel:+48503419238" underline="none" sx={{ display: "block", mt: 1, color: "#dbdbdb", fontSize: "1.2rem", ":hover": { color: "#FCB040" } }}>
                  +48 503 419 238
                </Link>
              </Box>

              <Box>
                <IconButton sx={{ color: "#FCB040", mb: 1 }}>
                  <Email fontSize="large" />
                </IconButton>
                <Typography variant="h6" color="#fff" fontWeight={600}>
                  {tCon("email")}
                </Typography>
                <Link href="mailto:info@sajisrestaurant.pl" underline="none" sx={{ display: "block", mt: 1, color: "#dbdbdb", fontSize: "1.2rem", ":hover": { color: "#FCB040" } }}>
                  info@sajisrestaurant.pl
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
