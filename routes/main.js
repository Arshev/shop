import { mainPath } from '../helpers/routes';
import CatalogPage from '../src/CatalogPage';

export default {
    name: 'CatalogPage',
    exact: true,
    strict: true,
    path: mainPath(),
    component: CatalogPage
};
