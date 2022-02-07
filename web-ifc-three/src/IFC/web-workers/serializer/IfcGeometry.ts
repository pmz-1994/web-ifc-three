import { IfcGeometry as WebIfcIfcGeometry } from 'web-ifc';
import { SerializedIfcGeometry } from '../BaseDefinitions';

export class IfcGeometry implements WebIfcIfcGeometry {
    private readonly vertexData: number;
    private readonly vertexDataSize: number;
    private readonly indexData: number;
    private readonly indexDataSize: number;

    constructor(vector: SerializedIfcGeometry) {
        this.vertexData = vector.GetVertexData;
        this.vertexDataSize = vector.GetVertexDataSize;
        this.indexData = vector.GetIndexData;
        this.indexDataSize = vector.GetIndexDataSize;
    }

    GetVertexData() {
        return this.vertexData;
    }

    GetVertexDataSize() {
        return this.vertexDataSize;
    }

    GetIndexData() {
        return this.indexData;
    }

    GetIndexDataSize() {
        return this.indexDataSize;
    }
}
