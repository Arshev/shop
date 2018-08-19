import { contactsPath } from '../helpers/routes';
import ContactsPage from '../src/ContactsPage';

export default {
    name: 'ContactsPage',
    exact: true,
    strict: true,
    path: contactsPath(),
    component: ContactsPage
};
