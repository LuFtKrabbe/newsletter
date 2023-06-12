import './sources.css';
import { DataSource } from '../../types/interfaces';
import { DataSourceType } from '../../types/interfaces';
import { isNotNull } from '../utils';

class Sources implements DataSource {
    public draw(data: DataSourceType[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
            const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');

            if (isNotNull(sourceItemName) && isNotNull(sourceItem)) {
                sourceItemName.textContent = <string>item.name;
                sourceItem.setAttribute('data-source-id', <string>item.id);
            } else {
                throw Error('Element in the sources not found');
            }

            fragment.append(sourceClone);
        });

        const sources: HTMLElement | null = document.querySelector('.sources');

        if (isNotNull(sources)) {
            sources.append(fragment);
        } else {
            throw Error('Element in the sources not found');
        }
    }
}

export default Sources;
