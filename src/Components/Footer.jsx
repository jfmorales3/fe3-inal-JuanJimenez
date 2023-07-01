import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import './Footer.css'

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  
  return (
    <footer className={`footer ${theme}`}>
        <div className="logo-container">
            <p>Powered by</p>
            <img className="logo" src="/images/DH.png" alt='DH-logo' />
        </div>
    </footer>
  )
}

export default Footer;
