const fs = require('fs');
const filename = process.argv[2];

try {
    // Try reading as utf8 first
    let content = fs.readFileSync(filename, 'utf8');

    // If it looks like it has null bytes effectively (like utf16le interpreted as utf8), 
    // or if we suspect it's utf16le (common with powershell redirection), we can try decoding.
    // However, Node's fs.readFileSync with 'utf8' usually handles BOM.
    // If it was saved as UTF-16LE without BOM by powershell > operator, it might be messy.

    // Let's try to detect if it's UTF-16LE.
    const buffer = fs.readFileSync(filename);
    if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
        // BOM for UTF-16LE
        content = buffer.toString('utf16le');
    } else if (filename.endsWith('.js') && buffer.includes('\0')) {
        // Heuristic: JS files shouldn't have null bytes usually.
        // It's likely UTF-16LE without BOM
        content = buffer.toString('utf16le');
    }

    console.log(content);
} catch (e) {
    console.error("Error reading file:", e);
}
