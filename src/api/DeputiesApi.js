class DeputiesApi {

    static requestHeaders() {
        return { 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}` }
    }

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