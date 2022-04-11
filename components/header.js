import React from 'react';
import HeaderStyle from '../styles/header.module.css';


const Header = () => {

   const x = 5;

    return (
    <div>
        <h1 className={HeaderStyle.title}>
         <span>Web Development</span> News
        </h1>
      <p className={HeaderStyle.description}>
            Keep Up to date with Latest web development News
      </p>
    </div>
  )
}

export default Header