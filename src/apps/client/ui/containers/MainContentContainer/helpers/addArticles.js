import articles from '../../../../../../seeds/articles'

const addArticles = (products) => {
    const productsWithArticles = products
        .map(section => ({...section, value: section.value
            .map((product, i) => ({...product, article: articles
                .find(item => item.product === section.productId).article + `${10+i}`
            }))
        }));

    return productsWithArticles;
}

export default addArticles;