/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import styled, { createGlobalStyle, css } from 'styled-components';

const FontToken = css`
  @media (min-width: 787px) {
    --font-sm: 0.875em;
    --font-md: 1.124em;
    --font-x-md: 1.667em;
    --font-x-lg: 3.075em;
  }
  @media (max-width: 787px) {
    --font-sm: 0.813em;
    --font-md: 1.011em;
    --font-x-md: 1.517em;
    --font-x-lg: 2.775em;
  }
`;

const LightTheme = css`
  :root {
    --bg: #FAFAFA;
    --button-index: #F1F1F1;
    --cw: #111111;
    --invert: 0;
    --mark: #F5F5F5;
    --theme-amount: 0;
    --gray: #A1A1AA;
    --pattern: #F4F4F5;
    --light-gray: #E4E4E7;
    --lighter-gray: #F4F4F5;
    --article-color: #52525B;
    --header-bg: rgba(250, 250, 250, 0.85);
    --token: #71717A;
    --border-color: #E4E4E7;
    --sidebar-tag: #F4F4F5;
    --gray-alpha: rgba(244, 244, 245, 0.4);
    --sidebar-cta: #18181B;
    --nav-link: rgba(0, 0, 0, 0.65);
    --timeline: #D4D4D8;
    ${FontToken}
  }
`;

const DarkTheme = css`
  :root {
    --bg: #09090B;
    --invert: 1;
    --theme-amount: 1;
    --cw: #FAFAFA;
    --gray: #71717A;
    --pattern: transparent;
    --light-gray: #27272A;
    --lighter-gray: #18181B;
    --article-color: #A1A1AA;
    --header-bg: rgba(9, 9, 11, 0.85);
    --token: #D4D4D8;
    --border-color: #27272A;
    --button-index: #18181B;
    --mark: #121215;
    --sidebar-tag: #18181B;
    --sidebar-cta: #27272A;
    --gray-alpha: rgba(24, 24, 27, 0.6);
    --timeline: rgba(255, 255, 255, 0.15);
    --nav-link: rgba(255, 255, 255, 0.7);
    ${FontToken}
  }
`;

export const BodyStyling = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Abril+Fatface&display=swap');

${(props) => (props.theme ? LightTheme : DarkTheme)}

::selection {
  background: var(--cw);
  color: var(--bg);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

body {
  background: var(--bg) !important;
  color: var(--cw);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
    scroll-behavior: smooth;
}

a, h1, h2, h3, h4, h5, h6, p, button {
  font-family: 'Inter', sans-serif;
  text-rendering: optimizeLegibility;
}

:focus {
  outline-color:var(--cw) !important;
}

a {
  cursor: pointer;
}

mark.mark {
  color: inherit;
  padding: 0;
  background: none;
  /* background-image: linear-gradient(120deg, var(--mark) 0%, var(--mark) 100%); */
  background-repeat: no-repeat;
  background-size: 0% .3em;
  background-position: 0 80%;
  position: relative;
  background-size: 100% .3em;
}

.loading-img {
  object-fit: contain !important;
  transform: scale(0.5);
}

.page-transition-enter {
  opacity: 0;
}

.page-transition-enter-active {
  opacity: 1;
  transition: opacity 300ms;
}

.page-transition-exit {
  opacity: 1;
}

.page-transition-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}

.scout__bar-wrapper{
  --scout-white: var(--bg);
  --scout-theme-black: var(--cw);
  --scout-light-grey: var(--border-color);
  --scout-theme-grey: var(--gray);
  --scout-theme-card-hover: var(--gray-alpha);
  --scout-theme-keyboard: 0px 2px 0px 2px #8d8d8d;
  --scout-tutorial-grey: var(--article-color);
  --scout-box-shadow: 1px 2px 16px 10px rgba(0, 0, 0, 0.05);
}
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 20px 40px;

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .navbar-brand-external, .nav-link-external {
      background: transparent !important;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      
      &:hover {
        transform: scale(1.1);
        svg {
          fill: var(--cw);
        }
      }

      svg {
        width: 28px;
        height: auto;
        fill: var(--article-color);
        transition: fill 0.3s ease;
      }
    }

    nav.navbar {
      background: var(--header-bg) !important;
      backdrop-filter: blur(16px) saturate(180%);
      border: 1px solid var(--border-color);
      border-radius: 100px;
      padding: 6px 12px !important;
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
      
      .navbar-nav {
        display: flex;
        flex-direction: row;
        gap: 4px;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .nav-link {
        color: var(--nav-link) !important;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.01em;
        transition: all 0.3s ease;
        padding: 8px 20px !important;
        border-radius: 100px;
        text-decoration: none;

        &:hover {
          color: var(--cw) !important;
          background: var(--gray-alpha);
        }

        &.is-active {
          color: var(--cw) !important;
          background: var(--gray-alpha);
          font-weight: 700;
        }
      }
    }

    @media (max-width: 992px) {
      padding: 15px 20px;
      
      nav.navbar {
        padding: 4px 8px !important;
        .navbar-collapse {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg);
          z-index: 10000;
          display: none;
          align-items: center;
          justify-content: center;

          &.show {
            display: flex;
          }
        }

        .navbar-nav {
          flex-direction: column;
          align-items: center;
          gap: 20px;

          .nav-link {
            font-size: 24px;
          }
        }
      }
    }
`;

        export const SocialMedia = styled.div`  background: transparent;
  padding: 1rem 0;
  a {
    transition: all 1s ease;
    cursor: pointer;
    padding: 0 12px;
    &:first-child {
      padding-left: 0;
    }
  }
  svg {
    cursor: pointer;
    height: 15px;
    fill: var(--article-color);
    transition: all 1s ease;
    &:hover {
      stroke: var(--article-color);
      stroke-width: 1px;
      stroke-opacity: 0.8;
    }
  }
  @media (max-width: 992px) {
    position: fixed;
    backdrop-filter: blur(6px) saturate(2.5);
    background: var(--gray-alpha) !important;
    width: 100% !important;
    display: flex;
    padding: 0 !important;
    right: 0;
    z-index: 999;
    flex-direction: row !important;
    height: 60px !important;
    bottom: 0px !important;
    align-items: center;
    justify-content: space-evenly;
  }
`;


export const BackLay = styled.div`
  margin: 0;

  h1 {
    font-family: Abril FatFace;
    font-size: 29.42vmin;
    ${(props) =>
      props.title === 'About Me' ||
      props.title === 'Contact' ||
      props.title === 'Home'
        ? css`
            writing-mode: unset;
          `
        : css`
            writing-mode: tb-rl;
          `}

    letter-spacing: -0.3rem;
    white-space: pre;
    color: var(--mark);
    position: fixed;
    left: -4rem;
    opacity: 1;
    z-index: -1;
    bottom: 0px;
  }
`;

export const Main = styled.main`
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;

  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(var(--theme-amount), 0, 0, 0.05), transparent);
    background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
      linear-gradient(to right, var(--border-color) 1px, transparent 1px);
    background-size: 80px 80px;
    z-index: -1;
    opacity: 0.3;
    mask-image: radial-gradient(ellipse at center, black, transparent 80%);
  }

  &:after {
    position: fixed;
    content: '';
    z-index: -2;
    width: 140%;
    height: 140%;
    top: -20%;
    left: -20%;
    background-image: 
      radial-gradient(at 0% 0%, #3b82f622 0, transparent 50%),
      radial-gradient(at 100% 0%, #8b5cf622 0, transparent 50%),
      radial-gradient(at 100% 100%, #ec489922 0, transparent 50%),
      radial-gradient(at 0% 100%, #10b98122 0, transparent 50%);
    filter: blur(120px);
    animation: aurora 25s infinite alternate linear;
    opacity: ${(props) => (props.theme ? '0.4' : '0.6')};
  }

  @keyframes aurora {
    0% { transform: rotate(0deg) scale(1); }
    100% { transform: rotate(5deg) scale(1.1); }
  }
`;
