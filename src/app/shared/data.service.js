"use strict";
var InMemoryDb = (function () {
    function InMemoryDb() {
    }
    InMemoryDb.prototype.createDb = function () {
        var data1 = {
            flag: true,
            title: 'Wellcome to my DB',
            name: 'Nataliia',
            surname: 'Kravets',
            knowledge: ['html', 'Css', 'js', 'Angular2'],
            experience: ['http://blauberg-group.com',
                'http://blaubergventilatoren.de/',
                'site3',
                'Angular2']
        };
        return { data1: data1 };
    };
    return InMemoryDb;
}());
exports.InMemoryDb = InMemoryDb;
//# sourceMappingURL=data.service.js.map