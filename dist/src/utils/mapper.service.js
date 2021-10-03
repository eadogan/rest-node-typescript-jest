"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMapper = void 0;
var class_transformer_1 = require("class-transformer");
var EntityMapper = /** @class */ (function () {
    function EntityMapper() {
    }
    EntityMapper.mapTo = function (destinationClass, entity) {
        var entityJson = (0, class_transformer_1.classToPlain)(entity);
        return (0, class_transformer_1.plainToClass)(destinationClass, entityJson);
    };
    return EntityMapper;
}());
exports.EntityMapper = EntityMapper;
//# sourceMappingURL=mapper.service.js.map