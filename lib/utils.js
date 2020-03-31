function getJsType(fieldType) {
    let jsType;
    switch (fieldType) {
        case 'TINYINT':
        case 'SMALLINT':
        case 'MEDIUMINT':
        case 'INT':
        case 'BIGINT':
        case 'DECIMAL':
        case 'FLOAT':
        case 'DOUBLE':
        case 'YEAR':
            jsType = 'number';
            break;
        default:
            jsType = 'string';
            break;
    }
    return jsType;
}

module.exports = {
    getJsType,
};
