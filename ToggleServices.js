import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ToggleServices = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="position" onClick={() => setToggle(!toggle)}>
      <motion.h5 layout ><button>more</button></motion.h5>
      
      {toggle ? children : ''}
      <div className="personnel-line"></div>
    </motion.div>
  );
}; 



export default ToggleServices;  