export default {
  particles: {
    color: {
      value: '#f9c6c6',
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1100,
      },
    },
    opacity: {
      value: 0.95,
      random: true,
      anim: {
        enable: false,
        opacity_min: 0,
        sync: false,
      },
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#eb9091',
      },
      polygon: {
        nb_sides: 3,
      },
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 0,
        size: 0,
        duration: 0,
        opacity: 0.3,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  detectRetina: true,
};
