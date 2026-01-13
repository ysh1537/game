const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '../js/data/creatures/AsgardData.js');
const code = fs.readFileSync(filePath, 'utf8');

const sandbox = {
    RANKS: { UR: "UR", SSR: "SSR", SR: "SR", RARE: "Rare", UNIQUE: "Unique", NORMAL: "Normal" },
    WORLDS: { ASGARD: "ASGARD" }
};
const ctx = vm.createContext(sandbox);

try {
    vm.runInContext(code, ctx);
    console.log("Syntax OK");
} catch (e) {
    console.error("Syntax Error:", e);
    // e.stack might show line number in the VM
}
