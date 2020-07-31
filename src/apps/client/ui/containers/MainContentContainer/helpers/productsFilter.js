const productsFilter = (products, params) => {
    return products
        .find(item => item.productId === params.section);
}

export default productsFilter;