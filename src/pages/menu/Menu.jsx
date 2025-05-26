// import saj1 from "@/assets/sajs/saj1.jpeg";
// import saj2 from "@/assets/sajs/saj2.jpeg";
// import saj3 from "@/assets/sajs/saj3.jpeg";
// import saj4 from "@/assets/sajs/saj4.jpeg";
// import saj5 from "@/assets/sajs/saj5.jpeg";
// import { Box, Typography } from "@mui/material";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const Menu = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const menuItems = [
//     {
//       image: saj3,
//       name: "Zaatar Saj",
//       desc: "Freshly baked saj with thyme & olive oil",
//     },
//     {
//       image: saj4,
//       name: "Cheese Saj",
//       desc: "Melted Syrian cheese wrapped in saj",
//     },
//     { image: saj2, name: "Meat Saj", desc: "Grilled minced meat with spices" },
//     {
//       image: saj1,
//       name: "Vegetable Saj",
//       desc: "Sautéed veggies in soft saj bread",
//     },
//     {
//       image: saj5,
//       name: "Nutella Saj",
//       desc: "Sweet saj filled with Nutella & banana",
//     },
//     {
//       image: saj3,
//       name: "Zaatar Saj",
//       desc: "Freshly baked saj with thyme & olive oil",
//     },
//     {
//       image: saj4,
//       name: "Cheese Saj",
//       desc: "Melted Syrian cheese wrapped in saj",
//     },
//     { image: saj2, name: "Meat Saj", desc: "Grilled minced meat with spices" },
//     {
//       image: saj1,
//       name: "Vegetable Saj",
//       desc: "Sautéed veggies in soft saj bread",
//     },
//     {
//       image: saj5,
//       name: "Nutella Saj",
//       desc: "Sweet saj filled with Nutella & banana",
//     },
//     {
//       image: saj3,
//       name: "Zaatar Saj",
//       desc: "Freshly baked saj with thyme & olive oil",
//     },
//     {
//       image: saj4,
//       name: "Cheese Saj",
//       desc: "Melted Syrian cheese wrapped in saj",
//     },
//     { image: saj2, name: "Meat Saj", desc: "Grilled minced meat with spices" },
//     {
//       image: saj1,
//       name: "Vegetable Saj",
//       desc: "Sautéed veggies in soft saj bread",
//     },
//     {
//       image: saj5,
//       name: "Nutella Saj",
//       desc: "Sweet saj filled with Nutella & banana",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         px: { xs: "20px", md: "60px" },
//         py: "80px",
//         backgroundColor: "#FFF8F0",
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: { xs: "32px", md: "48px" },
//           fontWeight: "bold",
//           textAlign: "center",
//           mb: 6,
//           color: "#3E2723",
//         }}
//         data-aos="fade-down"
//       >
//         Our Saj Menu
//       </Typography>

//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "repeat(1, 1fr)",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(3, 1fr)",
//             lg: "repeat(4, 1fr)",
//           },
//           gap: "30px",
//         }}
//       >
//         {menuItems.map((item, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: "relative",
//               borderRadius: "20px",
//               overflow: "hidden",
//               boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//               transition: "transform 0.3s, box-shadow 0.3s",
//               cursor: "pointer",
//               ":hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
//               },
//             }}
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{
//                 width: "100%",
//                 height: "220px",
//                 objectFit: "cover",
//               }}
//             />
//             <Box sx={{ p: 2, backgroundColor: "#fff" }}>
//               <Typography
//                 variant="h6"
//                 sx={{ fontWeight: "bold", color: "#6D4C41" }}
//               >
//                 {item.name}
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 1, color: "#5D4037" }}>
//                 {item.desc}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Menu;

// import saj1 from "@/assets/sajs/saj1.jpeg";
// import saj2 from "@/assets/sajs/saj2.jpeg";
// import saj3 from "@/assets/sajs/saj3.jpeg";
// import saj4 from "@/assets/sajs/saj4.jpeg";
// import saj5 from "@/assets/sajs/saj5.jpeg";
// import { Box, Typography } from "@mui/material";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const Menu = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const menuItems = [
//     {
//       image: saj3,
//       name: "Zaatar Saj",
//       desc: "Freshly baked saj with thyme & olive oil",
//     },
//     {
//       image: saj4,
//       name: "Cheese Saj",
//       desc: "Melted Syrian cheese wrapped in saj",
//     },
//     { image: saj2, name: "Meat Saj", desc: "Grilled minced meat with spices" },
//     {
//       image: saj1,
//       name: "Vegetable Saj",
//       desc: "Sautéed veggies in soft saj bread",
//     },
//     {
//       image: saj5,
//       name: "Nutella Saj",
//       desc: "Sweet saj filled with Nutella & banana",
//     },
//     {
//       image: saj3,
//       name: "Zaatar Saj",
//       desc: "Freshly baked saj with thyme & olive oil",
//     },
//     {
//       image: saj4,
//       name: "Cheese Saj",
//       desc: "Melted Syrian cheese wrapped in saj",
//     },
//     { image: saj2, name: "Meat Saj", desc: "Grilled minced meat with spices" },
//     {
//       image: saj1,
//       name: "Vegetable Saj",
//       desc: "Sautéed veggies in soft saj bread",
//     },
//     {
//       image: saj5,
//       name: "Nutella Saj",
//       desc: "Sweet saj filled with Nutella & banana",
//     },
//     {
//       image: saj3,
//       name: "Zaatar Saj",
//       desc: "Freshly baked saj with thyme & olive oil",
//     },
//     {
//       image: saj4,
//       name: "Cheese Saj",
//       desc: "Melted Syrian cheese wrapped in saj",
//     },
//     { image: saj2, name: "Meat Saj", desc: "Grilled minced meat with spices" },
//     {
//       image: saj1,
//       name: "Vegetable Saj",
//       desc: "Sautéed veggies in soft saj bread",
//     },
//     {
//       image: saj5,
//       name: "Nutella Saj",
//       desc: "Sweet saj filled with Nutella & banana",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         px: { xs: "20px", md: "60px" },
//         py: "80px",
//         backgroundColor: "#FFF8F0",
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: { xs: "32px", md: "48px" },
//           fontWeight: "bold",
//           textAlign: "center",
//           mb: 6,
//           color: "#3E2723",
//         }}
//         data-aos="fade-down"
//       >
//         Our Saj Menu
//       </Typography>

//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "repeat(1, 1fr)",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(3, 1fr)",
//             lg: "repeat(4, 1fr)",
//           },
//           gap: "30px",
//         }}
//       >
//         {menuItems.map((item, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: "relative",
//               borderRadius: "20px",
//               overflow: "hidden",
//               boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//               transition: "transform 0.3s, box-shadow 0.3s",
//               cursor: "pointer",
//               ":hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
//               },
//             }}
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{
//                 width: "100%",
//                 height: "220px",
//                 objectFit: "cover",
//               }}
//             />
//             <Box sx={{ p: 2, backgroundColor: "#fff" }}>
//               <Typography
//                 variant="h6"
//                 sx={{ fontWeight: "bold", color: "#6D4C41" }}
//               >
//                 {item.name}
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 1, color: "#5D4037" }}>
//                 {item.desc}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Menu;

import saj1 from "@/assets/sajs/saj1.jpeg";
import saj2 from "@/assets/sajs/saj2.jpeg";
import saj3 from "@/assets/sajs/saj3.jpeg";
import saj4 from "@/assets/sajs/saj4.jpeg";
import saj5 from "@/assets/sajs/saj5.jpeg";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const menuItems = [
    {
      image: saj3,
      name: "Zaatar Saj",
      desc: "Freshly baked with thyme & olive oil",
    },
    {
      image: saj4,
      name: "Cheese Saj",
      desc: "Soft saj filled with melted cheese",
    },
    {
      image: saj2,
      name: "Lahm Bi Ajeen",
      desc: "Minced meat with spices on saj",
    },
    {
      image: saj1,
      name: "Veggie Saj",
      desc: "Crispy saj stuffed with vegetables",
    },
    {
      image: saj5,
      name: "Nutella Saj",
      desc: "Dessert saj with Nutella & banana",
    },
    {
      image: saj3,
      name: "Spicy Chicken Saj",
      desc: "Grilled spicy chicken on saj",
    },
    {
      image: saj3,
      name: "Zaatar Saj",
      desc: "Freshly baked with thyme & olive oil",
    },
    {
      image: saj4,
      name: "Cheese Saj",
      desc: "Soft saj filled with melted cheese",
    },
    {
      image: saj2,
      name: "Lahm Bi Ajeen",
      desc: "Minced meat with spices on saj",
    },
    {
      image: saj1,
      name: "Veggie Saj",
      desc: "Crispy saj stuffed with vegetables",
    },
    {
      image: saj5,
      name: "Nutella Saj",
      desc: "Dessert saj with Nutella & banana",
    },
    {
      image: saj3,
      name: "Spicy Chicken Saj",
      desc: "Grilled spicy chicken on saj",
    },
    {
      image: saj3,
      name: "Zaatar Saj",
      desc: "Freshly baked with thyme & olive oil",
    },
    {
      image: saj4,
      name: "Cheese Saj",
      desc: "Soft saj filled with melted cheese",
    },
    {
      image: saj2,
      name: "Lahm Bi Ajeen",
      desc: "Minced meat with spices on saj",
    },
    {
      image: saj1,
      name: "Veggie Saj",
      desc: "Crispy saj stuffed with vegetables",
    },
    {
      image: saj5,
      name: "Nutella Saj",
      desc: "Dessert saj with Nutella & banana",
    },
    {
      image: saj3,
      name: "Spicy Chicken Saj",
      desc: "Grilled spicy chicken on saj",
    },
    {
      image: saj3,
      name: "Zaatar Saj",
      desc: "Freshly baked with thyme & olive oil",
    },
    {
      image: saj4,
      name: "Cheese Saj",
      desc: "Soft saj filled with melted cheese",
    },
    {
      image: saj2,
      name: "Lahm Bi Ajeen",
      desc: "Minced meat with spices on saj",
    },
    {
      image: saj1,
      name: "Veggie Saj",
      desc: "Crispy saj stuffed with vegetables",
    },
    {
      image: saj5,
      name: "Nutella Saj",
      desc: "Dessert saj with Nutella & banana",
    },
    {
      image: saj3,
      name: "Spicy Chicken Saj",
      desc: "Grilled spicy chicken on saj",
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: 10,
        mt: "20px",
        // background: "linear-gradient(to bottom, #fefcea, #F6CA8AFF)",
      }}
    >
      <Typography
        variant="h2"
        data-aos="fade-down"
        sx={{
          fontSize: { xs: "32px", md: "48px" },
          fontWeight: "bold",
          textAlign: "center",
          mb: 6,
          background: "linear-gradient(to right, #8B4513, #D2691E)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Discover Our Signature Saj
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 5,
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              border: "1px solid rgba(128, 125, 125, 0.2)",
              background: "rgba(255, 255, 255, 0.032)",
              boxShadow: "0 5px 22px 5px rgba(197, 197, 197, 0.1)",
              transition: "transform 0.4s ease",
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.3)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "220px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  ":hover": {
                    opacity: 1,
                  },
                }}
              />
            </Box>
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#e1dede", fontStyle: "italic" }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
