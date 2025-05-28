import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Phone, Email, Place, Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#191919",
        py: 4,
        px: 3,
        color: "#dbdbdb",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
          {/* Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: "#FCB040" }}
            >
              contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ color: "#FCB040", mr: 1, fontSize: "1.2rem" }} />
              <Link
                href="tel:+48503419238"
                underline="none"
                sx={{ color: "#dbdbdb", ":hover": { color: "#FCB040" } }}
              >
                +48 503 419 238
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ color: "#FCB040", mr: 1, fontSize: "1.2rem" }} />
              <Link
                href="mailto:info@sajisrestaurant.pl"
                underline="none"
                sx={{ color: "#dbdbdb", ":hover": { color: "#FCB040" } }}
              >
                info@sajisrestaurant.pl
              </Link>
            </Box>
          </Grid>

          {/* Location Info */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: "#FCB040" }}
            >
              Visit Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Place sx={{ color: "#FCB040", mr: 1, fontSize: "1.2rem" }} />
              <Box>
                <Typography sx={{ color: "#dbdbdb" }}>Piotrkowska 55</Typography>
                <Typography sx={{ color: "#dbdbdb" }}>90-413 Łódź, Poland</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: "#FCB040" }}
            >
              social
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                sx={{ color: "#dbdbdb", ":hover": { color: "#FCB040" } }}
              >
                <Facebook fontSize="large" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                sx={{ color: "#dbdbdb", ":hover": { color: "#FCB040" } }}
              >
                <Instagram fontSize="large" />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Divider */}
        <Box
          sx={{
            borderTop: "1px solid #dbdbdb",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#cbcbcc" }}>
            © 2025 Sajis Restaurant. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;