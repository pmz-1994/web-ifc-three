import {PropertyManager} from '../../../../src/IFC/components/properties/PropertyManager';

describe('Property manager test suite', () => {

    it('should return string in uppercase', () => {
        const manager = new PropertyManager({} as any);
        expect(manager.getExpressId).toBeTruthy();
    })

})

