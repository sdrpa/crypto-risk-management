import React from 'react';
import { Link } from "@reach/router"

import './header.module.css';

export default () => {
   return (
      <header>
         <nav>
            <Link to="eth">Ethereum</Link>
            <Link to="btc">Bitcoin</Link>
            <Link to="lsk">Lisk</Link>
         </nav>
      </header>
   );
}
