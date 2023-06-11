export interface DataNews {
    draw(
        data: {
            source: { name: string };
            author: string;
            title: string;
            description: string;
            url: string;
            publishedAt: string;
            urlToImage: string;
        }[]
    ): void;
}

export interface DataSource {
    draw(
        data: {
            id: string;
            name: string;
        }[]
    ): void;
}

export interface DataAppView {
    news: {
        draw(
            data: {
                source: { name: string };
                author: string;
                title: string;
                description: string;
                url: string;
                publishedAt: string;
                urlToImage: string;
            }[]
        ): void;
    };

    sources: {
        draw(
            data: {
                id: string;
                name: string;
            }[]
        ): void;
    };

    drawNews(data: { articles: [] } | undefined): void;
    drawSources(data: { sources: [] } | undefined): void;
}

export type Options = {
    sources?: string;
};

export interface DataLoader {
    baseLink: string;
    options: Record<string, string>;

    getResp({ endpoint, options = {} }: { endpoint: string; options: Options }): void;
    errorHandler(res: Response): Response;
    makeUrl(options: Record<string, string>, endpoint: string): string;
    load<T>(method: string, endpoint: string, callback: (data: T) => void, options: Options): void;
}

export interface DataAppController {
    getSources(callback: () => void): void;
    getNews(e: Event, callback: () => void): void;
}

export interface DataApp {
    controller: {
        getSources(callback: () => void): void;
        getNews(e: Event, callback: () => void): void;
    };
    view: {
        drawNews(data: { articles: [] } | undefined): void;
        drawSources(data: { sources: [] } | undefined): void;
    };
}
