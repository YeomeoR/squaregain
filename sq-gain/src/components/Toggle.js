import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="position" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout >{title}</motion.h4>
      
      {toggle ? children : ''}
      <div className="personnel-line"></div>
    </motion.div>
  );
}; 
 
export default Toggle;  