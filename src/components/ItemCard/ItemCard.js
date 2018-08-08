import PropTypes from 'prop-types';
import React from 'react';

import './ItemCard.css';

export default function ItemCard({ description, title }) {
    return (
        <div>
            <h1 className="item-card-title">{title}</h1>
            <p className="shadowed-text">{description}</p>
        </div>
    );
}

ItemCard.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
