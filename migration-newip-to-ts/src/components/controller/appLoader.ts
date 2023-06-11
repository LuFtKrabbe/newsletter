import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '937f06b97969489ea2c150d0dea274b3',
        });
    }
}

export default AppLoader;
