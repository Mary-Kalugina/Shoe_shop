import React from 'react';
import '../App.css';
import 'material-icons/iconfont/material-icons.css';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <>
    <span className="material-icons switcher" onClick={() => onSwitch(icon)}>
    {icon}
</span>
    </>
  );
};

export default IconSwitch;
