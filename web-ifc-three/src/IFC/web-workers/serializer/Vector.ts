import { Vector as WebIfcVector } from 'web-ifc';
import { SerializedVector } from '../BaseDefinitions';

export class Vector<T> implements WebIfcVector<T> {
    private readonly vectorSize: number;
    private vectorData: { [key: number]: T } = {};

    constructor(vector: SerializedVector) {
        this.vectorSize = vector.size;
        const keys = Object.keys(vector)
            .filter((key) => key.indexOf('size') === -1)
            .map((key) => parseInt(key, 10));
        keys.forEach((key) => (this.vectorData[key] = vector[key]));
    }

    size() {
        return this.vectorSize;
    }

    get(index: number) {
        return this.vectorData[index];
    }
}
