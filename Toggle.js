import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="position" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout >{title}</motion.h4>
      <motion.h6><em>Click here for more about our {title}...</em></motion.h6>
      
      {toggle ? children : ''}
      <div className="personnel-line"></div>
    </motion.div>
  );
}; 



export default Toggle;  