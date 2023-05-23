import React from 'react'
import AddFlavour from '../components/AddFlavour/AddFlavour'
import AddCake from '../components/AddCake/AddCake'
import AddAddOn from '../components/AddAddOn/AddAddOn'

function Panel() {
   
  return (
     <div>
        <AddFlavour />
        <AddAddOn />
        <AddCake />
     </div>
  );
}

export default Panel