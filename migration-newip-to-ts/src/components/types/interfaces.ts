export type DataNewsType = {
    source: { name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    urlToImage: string;
};

export type DataSourceType = {
    name: string;
    id: string;
};

export interface DataNews {
    draw(data: DataNewsType[]): void;
}

export interface DataSource {
    draw(data: DataSourceType[]): void;
}

export interface DataAppView {
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
}

export interface DataAppController {
    getSources(callback: () => void): void;
    getNews(e: Event, callback: () => void): void;
}

export interface DataApp {
    start(): void;
}
