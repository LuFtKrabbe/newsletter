import './news.css';
import { DataNews } from '../../types/interfaces';
import type { DataNewsType } from '../../types/interfaces';
import { isNotNull } from '../utils';

enum ENUM_NEWS_ELEM {
    photo = '.news__meta-photo',
    author = '.news__meta-author',
    title = '.news__description-title',
    source = '.news__description-source',
    content = '.news__description-content',
    read = '.news__read-more a',
    date = '.news__meta-date',
}

class News implements DataNews {
    public draw(data: DataNewsType[]) {
        const news = <number>data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');

            if (isNotNull(newsItem) && idx % 2) {
                newsItem.classList.add('alt');
            }

            const photo: HTMLElement | null = newsClone.querySelector(ENUM_NEWS_ELEM.photo);
            const author: HTMLElement | null = newsClone.querySelector(ENUM_NEWS_ELEM.author);
            const title: HTMLElement | null = newsClone.querySelector(ENUM_NEWS_ELEM.title);
            const source: HTMLElement | null = newsClone.querySelector(ENUM_NEWS_ELEM.source);
            const content: HTMLElement | null = newsClone.querySelector(ENUM_NEWS_ELEM.content);
            const read: HTMLElement | null = newsClone.querySelector(ENUM_NEWS_ELEM.read);
            const date: HTMLElement | null = newsClone.querySelector(ENUM_NEWS_ELEM.date);

            if (
                isNotNull(author) &&
                isNotNull(photo) &&
                isNotNull(title) &&
                isNotNull(source) &&
                isNotNull(content) &&
                isNotNull(read) &&
                isNotNull(date)
            ) {
                photo.style.backgroundImage = `url(${<string>item.urlToImage || 'img/news_placeholder.jpg'})`;
                author.textContent = <string>item.author || <string>item.source.name;
                title.textContent = <string>item.title;
                source.textContent = <string>item.source.name;
                content.textContent = <string>item.description;
                read.setAttribute('href', <string>item.url);
                date.textContent = <string>item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            } else {
                throw Error('Element in the news not found');
            }

            fragment.append(newsClone);
        });

        const mainNews: HTMLElement | null = document.querySelector('.news');
        if (isNotNull(mainNews)) {
            mainNews.innerHTML = '';
            mainNews.appendChild(fragment);
        } else {
            throw Error('Element in the news not found');
        }
    }
}

export default News;
