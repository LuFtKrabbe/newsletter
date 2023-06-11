import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataApp } from '../types/interfaces';

class App implements DataApp {
    controller: {
        getSources(callback: () => void): void;
        getNews(e: Event, callback: () => void): void;
    };
    view: {
        drawNews(data: { articles: [] } | undefined): void;
        drawSources(data: { sources: [] } | undefined): void;
    };

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources: HTMLElement | null = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data?: { articles: [] } | undefined) => this.view.drawNews(data))
            );
            this.controller.getSources((data?: { sources: [] } | undefined) => this.view.drawSources(data));
        }
    }
}

export default App;
