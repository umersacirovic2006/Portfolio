import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, createGlobalStyle } from 'styled-components';

/* --------------------------- Image Dependencies --------------------------- */
import { Close, Github, Product } from '../Icons';

/* ------------------------- SideBarModal propTypes ------------------------ */
interface ISideBarModal {
  show: boolean;
  closeShow: () => void;
  size?: 'sm' | 'lg' | 'md';
  overlayColor?: string;
  data?: {
    title: string;
    description?: string;
    technologies?: string[];
    github?: string;
    imageUrl?: string;
    about?: string;
    link?: string;
  };
}

/* ------------------------ SideBarModal defaultprops ----------------------- */
const defaultProps: ISideBarModal = {
  show: false,
  closeShow: () => {},
  size: 'md',
  overlayColor: 'rgba(0, 0, 0, 0.8)',
};

const SideBarModal: React.FC<ISideBarModal> = ({
  show,
  closeShow,
  size,
  overlayColor,
  data,
}) => {
  // ... (Rest of component implementation same as before)

  return (
    <>
      <Body />
      <Wrapper size={size} data-testid="sidebarmodal"> 
        {/* ... modal content ... */}
      </Wrapper>
    </>
  );
};

// -------- Styled Components (With Hypothetical 'generateSize' Behavior) --------

const generateSize = (size: ISideBarModal['size']) => {
  if (size === 'sm') {
    return css`
      width: 21.8em;
      padding: 1.5rem;
    `;
  } else if (size === 'lg') {
    return css`
      width: 34em;
    `;
  } else {  // Assuming 'md' is the default
    return css`
      width: 29em;
      padding: 2rem;
    `;    
  }
};

const Body = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Wrapper = styled.div<{ size?: ISideBarModal['size'] }>`
  .none-button {
    border: none;
    background: transparent;
    padding-left: 0;
    svg {
      fill: none !important;
    }
  }

  @keyframes fadeLeft {
    from {
      opacity: 0.8;
      transform: translateX(80%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  aside {
    background: var(--bg);
    ${({ size }) => size && generateSize(size)} 
    @media (max-width: 768px) {
      width: 100% !important;
    }
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
    transition: all 0.3s linear;
    will-change: opacity, transform;

    &.fadeInLeft {
      animation-name: fadeLeft;
      animation-duration: 0.5s;
      animation-fill-mode: both;
    }

    .header {
      margin-bottom: 2rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--border-color);
      svg { 
        /* Removed styling - you may need to adjust */
      }
      a {
        font-size: var(--font-sm);
        font-weight: 900;
        color: var(--sidebar-cta);
      }
    }

    .pos__relative {
      position: relative;
      padding: 2rem 2rem 4rem;
      overflow-x: overlay;
      max-height: 100%;
    }

    .open__project {
      background: var(--sidebar-cta);
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 17px;
      color: #ffffff;
      font-weight: 600;
      text-align: center;
      font-size: var(--font-sm);
      svg {
        width: 16px;
        vertical-align: bottom;
        margin-left: 6px;
        fill: #fff;
      }
    }
  }

  .main__post { 
    /* ... Your main__post styles ... */
  }
`;

const Overlay = styled.div<{ overlayColor?: string }>`
  z-index: 99999;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: ${({ overlayColor }) => overlayColor || 'rgba(0, 0, 0, 0.8)'};
`;

SideBarModal.defaultProps = defaultProps;
export default SideBarModal;

