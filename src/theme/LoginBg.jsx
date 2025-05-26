import { loadFull } from "tsparticles";
import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
const LoginBg = ({ children }) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      //await loadBasic(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: { enable: true },
      background: {
        image:
          "linear-gradient(to bottom, #0F091B, #0F091B, #0F091B, #0F091B, #0F091B, #0F091B, #0F091B, #0F091B, #0F091B, #0F091B, #0F091B, #0F091B)",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#2680EB", "#2680EB", "#2680EB"],
          gradient: {
            angle: 45,
            type: "linear",
          },
        },
        links: {
          color: {
            value: ["#2680EB", "#2680EB", "#2680EB"],
            gradient: {
              angle: 45,
              type: "linear",
            },
          },
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      {children}
    </>
  );
};

export default LoginBg;
