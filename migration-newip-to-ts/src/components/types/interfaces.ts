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

    drawNews(data: { articles: [] }): void;

    drawSources(data: { sources: [] }): void;
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
