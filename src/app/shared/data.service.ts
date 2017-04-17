import {InMemoryDbService} from 'angular-in-memory-web-api';
import {DataType} from './dataType';

export class InMemoryDb implements  InMemoryDbService {
    createDb(){
        let data1  : DataType = {
            flag: true,
            title: 'Wellcome to my DB',
            name: 'Nataliia',
            surname: 'Kravets',
            knowledge: ['HTML/HTML5', 'CSS/CSS3', 'JS', 'jQuery', 'Angular2', 'Angular-cli', 'Gulp, Grunt', 'Sass, Less', 'Git'],
            experience: ['http://blauberg-group.com',
                'http://blaubergventilatoren.de/',
                'http://blackorchid.co.uk',
                'http://azvuk.ua',
                'http://www.amrita.co.ua',
                'http://myarredo.ru'],
          personalSkills: 'Analytical mind, ability for self-learning, ability to work in a team, responsible, highly-motivated',
          graduation: 'I graduated from Institute of Physics and Technology in National Technical University of Ukraine "KPI"'
              }
        return {data1};
    }


}
