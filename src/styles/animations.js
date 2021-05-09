import {keyframes} from 'styled-components';

export const fadeIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
`;

export const bounceOutRight = keyframes`
  0% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateX(30px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateX(38px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateX(80px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateX(1000px);
    opacity: 0;
  }
`
export const fadeZoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.5, 0.5);
        filter: blur(10px);
        }
    to {
        opacity: 1;
        transform: scale(1, 1);
        filter: blur(0px);
        }
`;

export const vibrate = keyframes`
    0% {
        transform: translate(0);
    }
    10% {
        transform: translate(-2px, -2px);
    }
    20% {
        transform: translate(2px, -2px);
    }
    30% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(2px, 2px);
    }
    50% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, -2px);
    }
    70% {
        transform: translate(-2px, 2px);
    }
    80% {
        transform: translate(-2px, -2px);
    }
    90% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
    `
    export const pulsate = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
`