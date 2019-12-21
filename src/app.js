import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Header from './header'
import Home from './home';
import Ethereum from './ethereum';
import Bitcoin from './bitcoin';
import Lisk from './lisk';
//import Graph from './linear';

export default () => {
   return (
      <Fragment>
         <Header />
         <Router>
            <Home path="/" />
            <Ethereum path="eth" />
            <Bitcoin path="btc" />
            <Lisk path="lsk" />
         </Router>
      </Fragment>
   );
}
