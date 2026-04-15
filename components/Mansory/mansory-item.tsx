/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState } from 'react';
import styled from 'styled-components';
import { arrayRandomItem } from 'codewonders-helpers';
import { useRouter, withRouter } from 'next/router';
/* -------------------------- Internal Dependencies ------------------------- */
import Image from '../Image';
import SideBarModal from '../SidebarModal';

/* -------------------------- MansoryItem PropTypes ------------------------- */
interface MansoryItemProps {
  item: {
    title: string;
    description?: string;
    imageUrl: string;
    link?: string;
    github?: string;
    about?: string;
    technologies?: string[];
  };
}
const MansoryItem: React.FC<MansoryItemProps> = ({ item }) => {
  const router = useRouter();
  const { pathname } = router;
  const [show, setShow] = useState(false);
  const [height] = useState(arrayRandomItem(['400px', '454px', '310px']));

  return (
    <>
      {!pathname.includes('/projects') ? (
        <a
          href={item.link}
          target="_blank"
          style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
          rel="noopener noreferrer"
          title={item.title}
          id="cardHover"
          aria-label={`${item.title} ${item.description}`}
        >
          <MansoryItemStyle
            {...{ item }}
            style={{
              height,
            }}
            role="gridcell"
          >
            <Image src={item.imageUrl} alt={item.imageUrl} />
            <div className="content__slate">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </MansoryItemStyle>
        </a>
      ) : (
        <>
          <MansoryItemStyle
            {...{ item }}
            style={{
              height,
            }}
            role="gridcell"
            id="cardHover"
            aria-label={`${item.title} ${item.description}`}
            onClick={() => setShow(true)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') return setShow(true);
            }}
            tabIndex={0}
          >
            <Image src={item.imageUrl} alt={item.imageUrl} />
            <div className="content__slate">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.technologies && (
                <p className="d-flex flex-wrap">
                  {item.technologies.map((tech: string, index: number) => (
                    <span key={index} className="d-block mb-1">
                      {tech}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </MansoryItemStyle>

          <SideBarModal
            show={show}
            closeShow={() => setShow(false)}
            size="lg"
            data={item}
          />
        </>
      )}
    </>
  );
};

const MansoryItemStyle = styled.div`
  margin-bottom: 2rem;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  background: var(--lighter-gray);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  break-inside: avoid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  img {
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    top: 0 !important;
    left: 0 !important;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
    border-color: var(--cw);
    
    img {
      transform: scale(1.05);
    }

    .content__slate {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(12px);
    }
  }

  .content__slate {
    position: relative;
    z-index: 1;
    padding: 2rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
    width: 100%;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

    h3 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
    }

    p {
      color: rgba(255, 255, 255, 0.8) !important;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 1rem;

      span {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(4px);
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        color: #fff;
        text-transform: uppercase;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-right: 6px;
      }
    }
  }
`;

export default MansoryItem;
