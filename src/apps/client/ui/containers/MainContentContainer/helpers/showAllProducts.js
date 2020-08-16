import addArticles from './addArticles';

export default function(products) {
    return addArticles(products).flatMap(item => item.value);
}