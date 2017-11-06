/**
 * Deputies API Client.
 */
class DeputiesApi {
    /**
     * Get default headers.
     */
    static requestHeaders() {
        return { 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}` }
    }

    /**
     * Get all deputies.
     */
    static getAllDeputies() {
        const headers = this.requestHeaders();
        const request = new Request(`${process.env.REACT_APP_API_HOST}/deputies`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    /**
     * Get deputy by id.
     * @param {*} id Deputy id 
     */
    static getDeputyById(id) {
        const headers = this.requestHeaders();
        const request = new Request(`${process.env.REACT_APP_API_HOST}/deputies/${id}`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    /**
     * Update a deputy by id.
     * @param {*} deputy Deputy
     */
    static updateDeputy(deputy) {
        const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
        const request = new Request(`${process.env.REACT_APP_API_HOST}/deputies/${deputy._id}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(deputy)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    /**
     * Create a deputy.
     * @param {*} deputy Deputy 
     */
    static createDeputy(deputy) {
        const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
        const request = new Request(`${process.env.API_HOST}/deputies`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(deputy)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    /**
     * Delete a deputy.
     * @param {*} deputy Deputy 
     */
    static deleteDeputy(deputy) {
        const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
        const request = new Request(`${process.env.API_HOST}/deputies/${deputy._id}`, {
            method: 'DELETE',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default DeputiesApi;