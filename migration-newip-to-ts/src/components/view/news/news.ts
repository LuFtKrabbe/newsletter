import './news.css';
import { DataNews } from '../../types/interfaces';

class News implements DataNews {
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
    ) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');

            if (newsItem && idx % 2) {
                newsItem.classList.add('alt');
            }

            const photo: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
            const author: HTMLElement | null = newsClone.querySelector('.news__meta-author');
            const title: HTMLElement | null = newsClone.querySelector('.news__description-title');
            const source: HTMLElement | null = newsClone.querySelector('.news__description-source');
            const content: HTMLElement | null = newsClone.querySelector('.news__description-content');
            const read: HTMLElement | null = newsClone.querySelector('.news__read-more a');
            const date: HTMLElement | null = newsClone.querySelector('.news__meta-date');

            if (photo && author && title && source && content && read && date) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                author.textContent = item.author || item.source.name;
                title.textContent = item.title;
                source.textContent = item.source.name;
                content.textContent = item.description;
                read.setAttribute('href', item.url);
                date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            } else {
                throw Error('Element in tne news not found');
            }

            fragment.append(newsClone);
        });

        const mainNews: HTMLElement | null = document.querySelector('.news');
        if (mainNews) {
            mainNews.innerHTML = '';
            mainNews.appendChild(fragment);
        } else {
            throw Error('Element in tne news not found');
        }
    }
}

export default News;
