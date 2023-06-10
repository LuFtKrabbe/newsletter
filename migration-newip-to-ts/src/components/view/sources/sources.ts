import './sources.css';
import { DataSource } from '../../types/interfaces';

class Sources implements DataSource {
    draw(
        data: {
            id: string;
            name: string;
        }[]
    ) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
            const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');

            if (sourceItemName && sourceItem) {
                sourceItemName.textContent = item.name;
                sourceItem.setAttribute('data-source-id', item.id);
            } else {
                throw Error('Element in the sources not found');
            }

            fragment.append(sourceClone);
        });

        const sources: HTMLElement | null = document.querySelector('.sources');

        if (sources) {
            sources.append(fragment);
        } else {
            throw Error('Element in the sources not found');
        }
    }
}

export default Sources;
