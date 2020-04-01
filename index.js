const fs = require('fs');
const modelGenerator = require('./lib/model_generator');

async function generate(sqlFile, templateFile, modelPath) {
    const sqlContent = fs.readFileSync(sqlFile).toString('utf8');
    const sqlContentArr = sqlContent.split('\n\n');
    for (let content of sqlContentArr) {
        if (content.slice(0, 12).toUpperCase() === 'CREATE TABLE') {
            await modelGenerator.generate(content, templateFile, modelPath);
        }
    }
}

module.exports = {
    generate,
};