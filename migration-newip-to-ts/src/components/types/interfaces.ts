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
