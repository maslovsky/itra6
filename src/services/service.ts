abstract class Service<T> {
    public getJson(url: string, params = {}) : Promise<T> {
        return this.sendRequest(`${url}?${this.getQuery(params)}`)
            .then(result => result.json());
    }

    public sendRequest(url: string, options?: any) {
        return fetch(url, options);
    }

    private getQuery(params: any) : string {
        const reduce = (query: string, key: string) => {
            return `${query}&${key}=${params[key]}`;
        };

        return Object.keys(params).reduce(reduce, '').slice(1);
    }
}

export default Service;