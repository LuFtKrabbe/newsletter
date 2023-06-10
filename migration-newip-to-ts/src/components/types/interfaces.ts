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
