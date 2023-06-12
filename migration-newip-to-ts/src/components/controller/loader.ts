import { DataLoader } from '../types/interfaces';
import { Options } from '../types/interfaces';

class Loader implements DataLoader {
    public baseLink: string;
    public options: Record<string, string>;

    constructor(baseLink: string, options: Record<string, string>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Options },
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!(<boolean>res.ok)) {
            if (<number>res.status === 401 || <number>res.status === 404)
                console.log(`Sorry, but there is ${<number>res.status} error: ${<string>res.statusText}`);
            throw Error(<string>res.statusText);
        }

        return res;
    }

    private makeUrl(options: Record<string, string>, endpoint: string): string {
        const urlOptions: Record<string, string> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: (data: T) => void, options: Options): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err: unknown) => console.error(err));
    }
}

export default Loader;
