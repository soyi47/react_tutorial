import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={props.products} />
        </div>
        
    )
}

export default FilterableProductTable;