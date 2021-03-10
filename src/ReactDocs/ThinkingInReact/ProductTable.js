import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows= [];
    let lastCategory = null;

    props.products.forEach((product) => {
        console.log(product);
        if (product.name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
        console.log("lastCategory : " + lastCategory);
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <tr>Price</tr>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;