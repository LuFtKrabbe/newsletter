import News from './news/news';
import Sources from './sources/sources';
import { DataAppView } from '../types/interfaces';

export class AppView implements DataAppView {
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

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: [] } | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: [] } | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
