import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import CustomIcon from '../../assets/icons/customIcon';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const textVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const card = {
  open: (height = 400) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const scaleAnimation = keyframes`
    0% {
    transform: scale(0);
    -webkit-transform: scale(0);
    }
    50% {
    transform: scale(1);
    -webkit-transform: scale(1);
    }
    100% {
    transform: scale(0);
    -webkit-transform: scale(0);
    }
`;
const Card = styled(motion.div)`
  position: absolute;
  top: ${(props) => props.top + 'px'};
  left: 8rem;
  right: 0;
  width: 100px;
  height: 100px;
  background: #003561;
  border-radius: 0.5rem;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  display: grid;
  place-items: center;
  color: white;
  padding: 0.5rem;
  /* transition: all 0.3s linear, opacity 0.3s linear, cubic-bezier(0.17, 0.67, 0.83, 0.67);
  animation: ${scaleAnimation} 5s ease-in-out; */
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #003561;
    left: -8px;
    top: 5rem;
    bottom: 20px;
    align-items: center;
    justify-content: center;
  }
  &[data-visible='true'] {
    width: 200px;
    height: 200px;
  }
`;

const MenuToolTip = ({ visible, description, icon, top, bottom, left, right, title }) => {
  return (
    <Card
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      visible={visible}
      data-visible={visible}
      layout
      initial={{ borderRadius: 10 }}
      animate={visible ? 'open' : 'closed'}
      variants={textVariants}
    >
      <motion.div className="background" variants={card} />
      <motion.div className="grid place-content-center">
        <CustomIcon name={icon} />
      </motion.div>
      <motion.div variants={card} className="grid place-content-center">
        <motion.h4 variants={variants} className="text-center">
          {title}
        </motion.h4>
        <motion.span variants={variants} className="text-center">
          {description}
        </motion.span>
      </motion.div>
    </Card>
  );
};
export default MenuToolTip;
