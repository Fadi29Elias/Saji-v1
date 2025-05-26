import { useSettingsStore } from "@/store/settingsStore";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";

import saj1 from "@/assets/sajs/saj1.jpeg";
import saj2 from "@/assets/sajs/saj2.jpeg";
import saj3 from "@/assets/sajs/saj3.jpeg";
import saj4 from "@/assets/sajs/saj4.jpeg";
import saj5 from "@/assets/sajs/saj5.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const { t } = useTranslation("index");
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 100, once: true });
  }, []);

  const direction = useSettingsStore((state) => state.direction);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { image: saj3 },
    { image: saj4 },
    { image: saj2 },
    { image: saj1 },
    { image: saj5 },
  ];
  return (
    <Box component="section">
      <Box
        sx={{
          width: { xs: "100%" },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "400px !important",
          // minHeight: "100vh",
          height: "100vh",
        }}
        className="home"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          style={{ height: "100%", width: "100%" }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={{
            nextEl: ".home-arrow-right",
            prevEl: ".home-arrow-left",
          }}
          effect="fade"
          pagination={{
            clickable: true,
            el: ".auth .custom-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          loop
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          direction={direction === "rtl" ? "horizontal" : "horizontal"}
          onSlideChange={(swiper) => {
            const newIndex = swiper?.realIndex;
            if (newIndex !== currentSlide) {
              setCurrentSlide(newIndex);
            }
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={`${item}-${index}`}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  px: "100px",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundImage: `url(${item?.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: 0,
                  }}
                ></Box>
                <Box
                  sx={{
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "background.paper",
                      fontWeight: "700",
                      fontSize: "60px",
                    }}
                  >
                    Saji's
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fcb040",
                      fontWeight: "600",
                      fontSize: "70px",
                    }}
                  >
                    Restaurant & Cafeteria
                  </Typography>
                  <Typography
                    sx={{
                      color: "background.paper",
                      fontWeight: "700",
                      fontSize: "40px",
                    }}
                  >
                    Authentic Middle Eastern Cuisine
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "#c83228e6",
                      fontSize: "20px",
                      color: "background.paper",
                      transition: "all 0.3s ease",
                      mt: "20px",
                      ":hover": {
                        backgroundColor: "#c83228e6",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Coming Soon...
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Home;
