import {InMemoryDbService} from 'angular-in-memory-web-api';
import {DataType} from 'dataType';

export class InMemoryDb implements  InMemoryDbService {
    createDb(){
        let data1  : DataType = {
            flag: true,
            title: 'Wellcome to my DB',
            name: 'Nataliia',
            surname: 'Kravets',
            knowledge: ['html', 'Css', 'js', 'Angular2'],
            experience: ['http://blauberg-group.com',
                'http://blaubergventilatoren.de/',
                'site3',
                'Angular2']
        }
        return {data1};
    }


}