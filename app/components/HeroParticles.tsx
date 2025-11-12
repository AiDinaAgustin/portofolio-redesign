"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 120,
              links: {
                opacity: 0.4,
                color: "#a855f7",
              },
            },
            push: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: {
            value: ["#a855f7", "#8b5cf6", "#c084fc"],
          },
          links: {
            color: "#8b5cf6",
            distance: 120,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.6,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.3,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "circle", "circle", "bubble"],
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 1,
              sync: false,
            },
          },
          stroke: {
            width: 1,
            color: {
              value: "#a855f7",
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10 h-full w-full"
    />
  );
}
