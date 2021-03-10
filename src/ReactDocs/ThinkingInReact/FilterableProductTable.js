import React, { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockonly] = useState(false);

    function handleFilterTextChange(filterText) {
        setFilterText(filterText);
    }

    function handleInStockChange(inStockOnly) {
        setInStockonly(inStockOnly);
    }

    return (
        <div>
            <SearchBar
                filterText = {filterText}
                inStockOnly = {inStockOnly}
                onFilterTextChange = {handleFilterTextChange}
                onInStockChange = {handleInStockChange}
            />
            <ProductTable 
                products={props.products} 
                filterText = {filterText}
                inStockOnly = {inStockOnly}
            />
        </div>
    )
}

export default FilterableProductTable;