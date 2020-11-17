import React, { useState } from 'react';
import Menu from './Menu';
import Regions from './Regions';
import items from './data';

const allRegions = ['all', ...new Set(items.map((itm) => itm.region))];

function App() {
  const [destinationItems, setDestinationItems] = useState(items);
  const [regions, setRegions] = useState(allRegions);

  // Filter Function: filters all location items for those matching the given category and sets state
  const filterItems = (region) => {
    if (region === 'all') {
      setDestinationItems(items);
      return;
    }
    const newItems = items.filter((itm) => itm.region === region);
    setDestinationItems(newItems);
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Where to Next?</h2>
        <div className="underline"></div>
      </div>
      <Regions regions={regions} filterItems={filterItems} />
      <Menu items={destinationItems} />
    </section>
  </main>;
}

export default App;