import AppLoader from './appLoader';
import { DataAppController } from '../types/interfaces';

class AppController extends AppLoader implements DataAppController {
    public getSources(callback: () => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: () => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId) {
                    if (<string>newsContainer.getAttribute('data-source') !== sourceId) {
                        <void>newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
