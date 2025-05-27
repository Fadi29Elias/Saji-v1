import enFlag from "@/assets/icons/enFlag.svg";
import plLang from "@/assets/images/plLang.png";
import arFlag from "@/assets/images/arLang.png";
import WLogo from "@/assets/WLogo.png";
import { useSettingsStore } from "@/store/settingsStore";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";

const Navbar = () => {
  const fadeIn = keyframes`
    0% { opacity: 0; }
    30% { opacity: 0.4; }
    60% { opacity: 0.7; }
    100% { opacity: 1; }
  `;

  const { t, i18n } = useTranslation("navbar");
  const theme = useTheme();
  const getLang = Cookies.get("i18nextLng") || i18n.language; // Fallback to i18n.language
  const direction = useSettingsStore((state) => state.direction);
  const setDirection = useSettingsStore((state) => state.setDirection);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Debug language changes
  useEffect(() => {
    console.log("Current language:", i18n.language);
    console.log("Cookie i18nextLng:", Cookies.get("i18nextLng"));
    console.log("Current translations:", t(["home", "contact", "location", "menu"]));
  }, [i18n.language, t]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleLang = async (lang) => {
    try {
      const newDirection = lang === "ar" ? "rtl" : "ltr";
      await i18n.changeLanguage(lang); // Ensure async language change completes
      Cookies.set("i18nextLng", lang, { expires: 30 }); // Set cookie with 30-day expiry
      Cookies.set("direction", newDirection, { expires: 30 });
      setDirection(newDirection);
      console.log(`Language changed to: ${lang}, Direction: ${newDirection}`);
      handleClose();
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (key) => {
    if (key === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (key === "contact" || key === "location") {
      const element = document.getElementById(key);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else if (key === "menu") {
      navigate("/menus");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "60px",
        width: "100%",
        py: "15px",
        backgroundColor: "transparent !important",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "3px",
          width: "50%",
          bottom: 0,
          transform: "translateX(45%)",
          animation: `${fadeIn} 2.5s ease-in-out infinite alternate`,
          background:
            "linear-gradient(135deg, #25211b5f, #c83228e6, #25211b5f)",
        }}
      ></Box>
      <Box
        sx={{
          img: { objectFit: "cover", width: "100%", height: "100%" },
          width: "100px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img src={WLogo} alt="Logo" />
      </Box>
      <Box
        sx={{ display: "flex", gap: { xs: 1, md: 3 }, alignItems: "center" }}
      >
        {["home", "contact", "location"].map((key) => (
          <Button
            key={key}
            sx={{
              color: "#fff",
              fontWeight: 500,
              fontSize: "15px",
              px: 2,
              py: 1,
              borderRadius: "8px",
              transition: "all 0.3s ease",
              ":hover": {
                backgroundColor: "#c83228e6",
                transform: "scale(1.05)",
              },
            }}
            onClick={() => handleNavigation(key)}
          >
            {t(key)}
          </Button>
        ))}
        <Button
          onClick={() => handleNavigation("menu")}
          sx={{
            backgroundColor: "#c83228",
            color: "#fff",
            fontWeight: 600,
            fontSize: "15px",
            px: 3,
            py: 1.2,
            borderRadius: "10px",
            boxShadow: "0 4px 14px rgba(200, 50, 40, 0.4)",
            transition: "all 0.3s ease",
            ":hover": {
              backgroundColor: "#a1251e",
              boxShadow: "0 6px 20px rgba(200, 50, 40, 0.5)",
              transform: "translateY(-2px)",
            },
          }}
          aria-label={t("menuAriaLabel")}
        >
          {t("menu")}
        </Button>
      </Box>
      <Box>
        <IconButton
          onClick={handleMenuClick}
          sx={{
            padding: "15px",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100px",
            ":hover": { transform: "scale(1)" },
            color: "origin.secondary",
            gap: "6px",
            svg: { width: "20px", height: "20px", color: "#fff" },
            img: {
              borderRadius: "100%",
              objectFit: "cover",
              width: "18px",
              height: "18px",
            },
          }}
        >
          {getLang === "en" ? (
            <img src={enFlag} alt="English" />
          ) : getLang === "ar" ? (
            <img src={arFlag} alt="Arabic" />
          ) :  (
            <img src={plLang} alt="Polish" />
          )}
          <MdOutlineKeyboardArrowDown />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            elevation: 3,
            sx: {
              mt: 1,
              minWidth: 80,
              overflow: "visible",
              bgcolor: "card.main",
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 20,
                width: 10,
                height: 10,
                bgcolor: "card.main",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
        >
          <MenuItem
            onClick={() => toggleLang("ar")}
            sx={{
              img: {
                borderRadius: "100%",
                objectFit: "cover",
                width: "18px",
                height: "18px",
              },
              backgroundColor: "transparent",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <img src={arFlag} alt="Arabic" />
            <Typography sx={{ fontSize: "12px" }}>AR</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => toggleLang("en")}
            sx={{
              img: {
                borderRadius: "100%",
                objectFit: "cover",
                width: "18px",
                height: "18px",
              },
              backgroundColor: "transparent",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <img src={enFlag} alt="English" />
            <Typography sx={{ fontSize: "12px" }}>EN</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => toggleLang("pl")}
            sx={{
              img: {
                borderRadius: "100%",
                objectFit: "cover",
                width: "18px",
                height: "18px",
              },
              backgroundColor: "transparent",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <img src={plLang} alt="Polish" />
            <Typography sx={{ fontSize: "12px" }}>PL</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;