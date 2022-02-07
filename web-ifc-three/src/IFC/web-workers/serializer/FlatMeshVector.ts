import { FlatMesh as WebIfcFlatMesh, Vector as WebIfcVector } from 'web-ifc';
import { SerializedVector } from '../BaseDefinitions';
import { Serializer } from './Serializer';

export class FlatMeshVector implements WebIfcVector<WebIfcFlatMesh> {
    private readonly vectorSize: number;
    private vectorData: { [key: number]: WebIfcFlatMesh } = {};

    constructor(serializer: Serializer, vector: SerializedVector) {
        this.vectorSize = vector.size;
        const keys = Object.keys(vector)
            .filter((key) => key.indexOf('size') === -1)
            .map((key) => parseInt(key, 10));
        keys.forEach((key) => (this.vectorData[key] = serializer.reconstructFlatMesh(vector[key])));
    }

    size() {
        return this.vectorSize;
    }

    get(index: number) {
        return this.vectorData[index];
    }
}
