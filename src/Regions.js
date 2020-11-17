import React from 'react';

const Regions = ({ regions, filterItems, sortItems }) => {
    return (
        <>
            <div className="btn-container">
                {regions.map((region) => {
                    return <button className="filter-btn" onClick={() => filterItems(region)}>{region}</button>
                })}
            </div>
            <div className="btn-container">
                <h4 className="price text-center">Sort By:</h4>
                <button className="filter-btn" onClick={() => sortItems('')}>Default</button>
                <button className="filter-btn" onClick={() => sortItems('price')}>Price</button>
                <button className="filter-btn" onClick={() => sortItems('region')}>Region</button>
            </div>
        </>
    )
};

export default Regions;