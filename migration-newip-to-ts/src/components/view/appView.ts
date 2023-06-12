import News from './news/news';
import Sources from './sources/sources';
import { DataAppView } from '../types/interfaces';

export class AppView implements DataAppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: { articles: [] } | undefined): void {
        const values: [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: { sources: [] } | undefined): void {
        const values: [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
