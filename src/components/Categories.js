import React from 'react'
import "./Menu.css";

const Categories = ({categories, filterItems, activeCategory}) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button 
                    type="filterButton"
                    className={`${
                        activeCategory === category ? "filter-btn active" : "filter-btn"
                    }`}
                    key={index}
                    onClick={() => filterItems( category)}
                    >
                        { category}
                    </button>
                ) 
            })}
        </div>
    )
}

export default Categories 