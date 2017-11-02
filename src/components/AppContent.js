import React from 'react';
import AppBarIcon from './AppBar';
import DeputiesTable from './DeputiesTable';


const AppContent = ({data}) => (
  <div>
    <AppBarIcon />
    <DeputiesTable data={data}/>
  </div>
);
 
export default AppContent;
