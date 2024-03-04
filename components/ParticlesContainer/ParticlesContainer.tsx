import Particles, { ParticlesProps } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
//import { loadFull } from "tsparticles"; 
import { useCallback, useMemo } from "react";

interface ParticlesComponentProps extends ParticlesProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = (props: any) => {
  const options: any = useMemo(() => {
    return {
      fullScreen: { enable: false },
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
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
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#e68e2e",
        },
        links: {
          color: "#f5d393",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
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
    };
  }, []);

const particlesInit = useCallback((engine: any) => {
  loadSlim(engine);
  return Promise.resolve();
}, []);
  return (
    <Particles
      id={props.id}
      init={particlesInit}
      options={options}
      className="w-full h-full absolute translate-z-0"
    />
  );
};

export default ParticlesComponent;
