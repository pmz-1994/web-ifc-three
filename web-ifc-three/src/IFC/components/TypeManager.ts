import { IfcState } from '../BaseDefinitions';
import { IfcElements } from './IFCElementsMap';
import { IFCWorkerHandler } from '../web-workers/IFCWorkerHandler';

/**
 * Contains the logic to manage the type (e. g. IfcWall, IfcWindow, IfcDoor) of
 * all the items within an IFC file.
 */
export class TypeManager {
    constructor(private state: IfcState) {
        this.state = state;
    }

    async getAllTypes(worker?: IFCWorkerHandler) {
        for (const modelID in this.state.models) {
            if (this.state.models.hasOwnProperty(modelID)) {
                const types = this.state.models[modelID].types;
                if (Object.keys(types).length === 0) {
                    const id = parseInt(modelID, 10);
                    await this.getAllTypesOfModel(id, worker);
                }
            }
        }
    }

    async getAllTypesOfModel(modelID: number, worker?: IFCWorkerHandler) {
        const result = {};
        const elements = Object.keys(IfcElements).map((e) => parseInt(e, 10));
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const lines = await this.state.api.GetLineIDsWithType(modelID, element);
            const size = lines.size();
            // @ts-ignore
            for (let j = 0; j < size; j++) result[lines.get(j)] = element;
        }
        if (this.state.worker.active && worker) {
            await worker.workerState.updateModelStateTypes(modelID, result);
        } else {
            this.state.models[modelID].types = result;
        }
    }
}
