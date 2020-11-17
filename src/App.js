import React, { useState } from 'react';
import Menu from './Menu';
import Regions from './Regions';
import items from './data';

const allRegions = ['all', ...new Set(items.map((itm) => itm.region))];

function App() {
  const [destinationItems, setDestinationItems] = useState(items);
  const [update, rerender] = useState(false);

  // Filter Function: filters all location items for those matching the given category and sets state
  const filterItems = (region) => {
    if (region === 'all') {
      setDestinationItems(items);
      return;
    }
    const newItems = items.filter((itm) => itm.region === region);
    setDestinationItems(newItems);
  }

  // Sort Function: reorders the array of destinations according to selected method, re-renders items
  // Unfortunately, the reordered array is too similar to the original array to trigger a re-render. Thus
  // a second state variable (update) is flipped to force rerender of menu items
  const sortItems = (method) => {
    switch (method) {
      case 'price':
        setDestinationItems(destinationItems.sort((a, b) => (a.price - b.price)));
        break;
      case 'region':
        setDestinationItems(destinationItems.sort((a, b) => {
          if (a.region > b.region) {
            return 1;
          } else {
            return -1;
          }
        }));
        break;
      default:
        setDestinationItems(destinationItems.sort((a, b) => (a.id - b.id)));
    }
    rerender(!update);
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Where to Next?</h2>
        <div className="underline"></div>
      </div>
      <Regions regions={allRegions} filterItems={filterItems} sortItems={sortItems} />
      <Menu items={destinationItems} />
    </section>
  </main>;
}

export default App;