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
  Tooltip,
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
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

  const { t, i18n } = useTranslation("header");
  const theme = useTheme();
  const getLang = Cookies.get("i18nextLng");
  const mode = useSettingsStore((state) => state.mode);
  const direction = useSettingsStore((state) => state.direction);

  const setDirection = useSettingsStore((state) => state.setDirection);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleLang = (lang) => {
    const newDirection = lang === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
    i18n.changeLanguage(lang);
    Cookies.set("i18nextLng", lang);
    Cookies.set("direction", newDirection);
    handleClose();
  };
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change to 0 if you want instant scroll effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        // background: "linear-gradient(135deg, #201f1f, #25211b5f)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "60px",
        width: "100%",
        // py: "4px",
        zIndex: 10,
        // backdropFilter: "blur(10px)",
        // backdropFilter: !scrolled ? "none" : "blur(10px)",
        // boxShadow:
        // "0 8px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)",
        // transition: "all 0.3s ease-in-out",
        // backgroundColor: "rgba(0,0,0,0.8)",
        py: "15px",
        backgroundColor: "transparent !important",
        position: "absolute",
        top: 0,
        left: 0,
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
        {["Home", "Contact", "Location"].map((label) => (
          <Button
            key={label}
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
          >
            {label}
          </Button>
        ))}
        <Button
          onClick={() => navigate("/menus")}
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
        >
          Menu
        </Button>
      </Box>
      <Box>
        {" "}
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
              color: "#fff",
            },
          }}
        >
          {getLang === "en" ? (
            <img src={enFlag} />
          ) : getLang === "ar" ? (
            <img src={arFlag} />
          ) : (
            <img src={plLang} />
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
            <img src={arFlag} />
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              AR
            </Typography>
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
            <img src={enFlag} />
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              EN
            </Typography>
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
            <img src={plLang} />
            <Typography sx={{ fontSize: "12px" }}>PL</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
