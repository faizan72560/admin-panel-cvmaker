import axios from 'axios';
import baseurl from 'views/admin/baseurl';
export class CustomerService {

    getCustomersSmall() {
        return fetch('data/customers-small.json').then(res => res.json())
            .then(d => d.data);
    }

    getCustomersMedium() {
        return fetch('data/customers-medium.json').then(res => res.json())
            .then(d => d.data);
    }

    getCustomersLarge() {
        return fetch('https://www.primefaces.org/data/customers?').then(res => res.json())
            .then(d => d.data)
            .catch(e => alert(e))
    }

    getCustomersXLarge() {
        return fetch('data/customers-xlarge.json').then(res => res.json())
            .then(d => d.data);
    }

    getCustomers(params) {
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }



    getAllCustomer() {
        const queryParams = '';
        return fetch(`${baseurl}/all-users`).then(res => res.json());
    }




    async blockCustomer(id, b) {
        try {
            const response = await axios.post(`${baseurl}/user-block`, {
                userId: id,
                is_blocked: b === true ? false : true
            });
            console.log(response);
            return response;
        }
        catch (erx) {
            console.error(erx)
        }
    }

    async deleteCustomer(id) {

        try {
            const response = await axios.delete(`${baseurl}/users/${id}`);
            console.log(response);
            return response;
        }
        catch (erx) {
            console.error(erx)
        }

    }


    getAllTransactions() {
        const queryParams = '';
        return fetch(`${baseurl}/all-Transactions`).then(res => res.json());
    }








}
