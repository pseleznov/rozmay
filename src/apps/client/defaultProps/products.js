import data from '../../../seeds/data';

const defaultProducts = data.flatMap(item => item.value);

export default defaultProducts;