import React from 'react';

const Regions = ({ regions, filterItems }) => {
    return (
        <div className="btn-container">
            {regions.map((region) => {
                return <button className="filter-btn" onClick={() => filterItems(region)}>{region}</button>
            })}
        </div>
    )
};

export default Regions;