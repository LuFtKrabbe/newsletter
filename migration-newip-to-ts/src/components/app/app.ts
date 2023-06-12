import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataApp } from '../types/interfaces';
import { isNotNull } from '../view/utils';

class App implements DataApp {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources: HTMLElement | null = document.querySelector('.sources');
        if (isNotNull(sources)) {
            sources.addEventListener('click', (e: MouseEvent) =>
                this.controller.getNews(e, (data?: { articles: [] } | undefined) => this.view.drawNews(data))
            );
            this.controller.getSources((data?: { sources: [] } | undefined) => this.view.drawSources(data));
        }
    }
}

export default App;
