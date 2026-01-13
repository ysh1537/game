/**
 * 심층 리소스 감사 스크립트 (Deep Resource Audit) - 단순화 버전
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.cwd();
console.log('PROJECT_ROOT:', PROJECT_ROOT);

// 등급 우선순위
const RARITY_PRIORITY = {
    'UR': 7, 'SSR': 6, 'SR': 5, 'Special': 4, 'Rare': 3, 'Unique': 2, 'Normal': 1
};

/**
 * 텍스트 파일에서 크리처 데이터 파싱
 */
function parseCreatureData(filePath, worldName) {
    const content = fs.readFileSync(filePath, 'utf8');
    const creatures = [];

    // 각 크리처 블록 찾기
    const creatureBlocks = content.split(/\n\s*\{/).slice(1);

    for (const block of creatureBlocks) {
        const idMatch = /id:\s*["']([^"']+)["']/.exec(block);
        const nameMatch = /name:\s*["']([^"']+)["']/.exec(block);
        const rarityMatch = /rarity:\s*(?:RANKS\.)?(\w+)/.exec(block);
        const imageMatch = /image:\s*["']([^"']+)["']/.exec(block);

        if (idMatch && nameMatch) {
            const creature = {
                id: idMatch[1],
                name: nameMatch[1],
                rarity: rarityMatch ? rarityMatch[1] : 'Unknown',
                image: imageMatch ? imageMatch[1] : null,
                world: worldName,
                sprites: {},
                gallery: {}
            };

            // 스프라이트 경로 추출
            const spriteTypes = ['idle', 'joy', 'sad', 'angry', 'skill', 'victory', 'defeat'];
            for (const type of spriteTypes) {
                const regex = new RegExp('"' + type + '":\\s*"([^"]+)"');
                const match = regex.exec(block);
                if (match) {
                    creature.sprites[type] = match[1];
                }
            }

            // 갤러리 경로 추출
            const galleryRegex = /"(lv[123])":\s*"([^"]+)"/g;
            let galleryMatch;
            while ((galleryMatch = galleryRegex.exec(block)) !== null) {
                creature.gallery[galleryMatch[1]] = galleryMatch[2];
            }

            creatures.push(creature);
        }
    }

    return creatures;
}

/**
 * 모든 Data.js 파일에서 크리처 데이터 로드
 */
function loadAllCreatures() {
    const worlds = [
        { name: 'Asgard', file: 'AsgardData.js' },
        { name: 'Olympus', file: 'OlympusData.js' },
        { name: 'ShangriLa', file: 'ShangriLaData.js' },
        { name: 'Abyss', file: 'AbyssData.js' },
        { name: 'Wild', file: 'WildData.js' }
    ];

    const allCreatures = [];

    for (const world of worlds) {
        const filePath = path.join(PROJECT_ROOT, 'js', 'data', 'creatures', world.file);
        try {
            const creatures = parseCreatureData(filePath, world.name);
            console.log('Loaded ' + world.name + ': ' + creatures.length + ' creatures');
            allCreatures.push(...creatures);
        } catch (e) {
            console.error('Failed ' + world.name + ':', e.message);
        }
    }

    return allCreatures;
}

/**
 * 크리처에서 모든 이미지 경로 추출
 */
function extractImagePaths(creature) {
    const paths = [];

    // 메인 이미지
    if (creature.image) {
        paths.push({
            id: creature.id,
            rarity: creature.rarity,
            world: creature.world,
            name: creature.name,
            type: 'main',
            path: creature.image
        });
    }

    // 스프라이트
    for (const spriteType in creature.sprites) {
        if (creature.sprites[spriteType]) {
            paths.push({
                id: creature.id,
                rarity: creature.rarity,
                world: creature.world,
                name: creature.name,
                type: 'sprite:' + spriteType,
                path: creature.sprites[spriteType]
            });
        }
    }

    // 갤러리
    for (const lvl in creature.gallery) {
        if (creature.gallery[lvl]) {
            paths.push({
                id: creature.id,
                rarity: creature.rarity,
                world: creature.world,
                name: creature.name,
                type: 'gallery:' + lvl,
                path: creature.gallery[lvl]
            });
        }
    }

    return paths;
}

/**
 * 실제 파일 스캔
 */
function scanPhysicalFiles(directory) {
    const files = [];

    function scan(dir) {
        if (!fs.existsSync(dir)) return;
        try {
            const items = fs.readdirSync(dir, { withFileTypes: true });
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var fullPath = path.join(dir, item.name);
                if (item.isDirectory()) {
                    scan(fullPath);
                } else if (/\.(png|jpg|jpeg|webp)$/i.test(item.name)) {
                    files.push({
                        fullPath: fullPath,
                        relativePath: path.relative(PROJECT_ROOT, fullPath).replace(/\\/g, '/'),
                        filename: item.name,
                        size: fs.statSync(fullPath).size
                    });
                }
            }
        } catch (e) {
            // ignore
        }
    }

    scan(directory);
    return files;
}

/**
 * 파일 매칭
 */
function findMatch(targetPath, files) {
    // 완전 일치
    for (var i = 0; i < files.length; i++) {
        if (files[i].relativePath === targetPath) {
            return { file: files[i], matchType: 'exact' };
        }
    }

    // 파일명만 동일
    var targetName = path.basename(targetPath).replace(/\.(png|jpg|jpeg|webp)$/i, '').toLowerCase();
    for (var i = 0; i < files.length; i++) {
        var fname = files[i].filename.replace(/\.(png|jpg|jpeg|webp)$/i, '').toLowerCase();
        if (fname === targetName) {
            return { file: files[i], matchType: 'name_only' };
        }
    }

    return null;
}

/**
 * 메인 감사 실행
 */
function runDeepAudit() {
    console.log('============================================================');
    console.log('Deep Resource Audit Starting...');
    console.log('============================================================');

    // 1. 크리처 데이터 로드
    var creatures = loadAllCreatures();
    console.log('Total creatures: ' + creatures.length);

    // 2. 모든 이미지 경로 추출
    var allPaths = [];
    for (var i = 0; i < creatures.length; i++) {
        var paths = extractImagePaths(creatures[i]);
        for (var j = 0; j < paths.length; j++) {
            allPaths.push(paths[j]);
        }
    }
    console.log('Total paths: ' + allPaths.length);

    // 3. 실제 파일 스캔
    var creaturesDir = path.join(PROJECT_ROOT, 'images', 'creatures');
    var tempDir = path.join(PROJECT_ROOT, 'images', 'temp');
    var archiveDir = path.join(PROJECT_ROOT, 'images', '_unused_archive');

    var productionFiles = scanPhysicalFiles(creaturesDir);
    var tempFiles = scanPhysicalFiles(tempDir);
    var archiveFiles = scanPhysicalFiles(archiveDir);

    console.log('Physical files: creatures=' + productionFiles.length + ', temp=' + tempFiles.length + ', archive=' + archiveFiles.length);

    // 4. 경로 검증 및 분류
    var results = {
        ok: [],
        mismatch: [],
        missing: [],
        recoverable: [],
        orphan: []
    };

    var matchedFiles = {};

    for (var i = 0; i < allPaths.length; i++) {
        var entry = allPaths[i];
        var targetPath = entry.path;

        // Production에서 찾기
        var prodMatch = findMatch(targetPath, productionFiles);
        if (prodMatch) {
            if (prodMatch.matchType === 'exact') {
                results.ok.push({ id: entry.id, rarity: entry.rarity, world: entry.world, name: entry.name, type: entry.type, path: targetPath });
            } else {
                results.mismatch.push({ id: entry.id, rarity: entry.rarity, world: entry.world, name: entry.name, type: entry.type, path: targetPath, actualPath: prodMatch.file.relativePath, matchType: prodMatch.matchType });
            }
            matchedFiles[prodMatch.file.fullPath] = true;
            continue;
        }

        // temp/archive에서 찾기
        var allRecoveryFiles = tempFiles.concat(archiveFiles);
        var recoveryMatch = findMatch(targetPath, allRecoveryFiles);
        if (recoveryMatch) {
            results.recoverable.push({ id: entry.id, rarity: entry.rarity, world: entry.world, name: entry.name, type: entry.type, path: targetPath, recoveryPath: recoveryMatch.file.relativePath });
            matchedFiles[recoveryMatch.file.fullPath] = true;
            continue;
        }

        // 누락
        results.missing.push(entry);
    }

    // 5. 고아 파일 찾기
    for (var i = 0; i < productionFiles.length; i++) {
        var file = productionFiles[i];
        if (!matchedFiles[file.fullPath]) {
            results.orphan.push({
                path: file.relativePath,
                filename: file.filename,
                size: file.size
            });
        }
    }

    // 6. 결과 정렬
    function sortByRarity(a, b) {
        return (RARITY_PRIORITY[b.rarity] || 0) - (RARITY_PRIORITY[a.rarity] || 0);
    }
    results.ok.sort(sortByRarity);
    results.mismatch.sort(sortByRarity);
    results.missing.sort(sortByRarity);
    results.recoverable.sort(sortByRarity);

    // 7. 결과 출력
    console.log('');
    console.log('=== RESULTS ===');
    console.log('OK: ' + results.ok.length);
    console.log('Mismatch: ' + results.mismatch.length);
    console.log('Missing: ' + results.missing.length);
    console.log('Recoverable: ' + results.recoverable.length);
    console.log('Orphan: ' + results.orphan.length);

    // 8. 리포트 생성
    generateReport(results, creatures.length, allPaths.length);
    generateJSON(results);

    console.log('');
    console.log('============================================================');
    console.log('Audit Complete!');
    console.log('============================================================');
}

/**
 * 마크다운 리포트 생성
 */
function generateReport(results, creatureCount, pathCount) {
    var total = pathCount;
    var okCount = results.ok.length;
    var mismatchCount = results.mismatch.length;
    var missingCount = results.missing.length;
    var recoverableCount = results.recoverable.length;
    var orphanCount = results.orphan.length;

    var md = '# Deep Resource Audit Report\n\n';
    md += '**Date**: ' + new Date().toLocaleString('ko-KR') + '\n';
    md += '**Creatures**: ' + creatureCount + '\n';
    md += '**Paths**: ' + pathCount + '\n\n';
    md += '## Summary\n\n';
    md += '| Status | Count | Ratio |\n';
    md += '|--------|-------|-------|\n';
    md += '| OK | ' + okCount + ' | ' + (okCount / total * 100).toFixed(1) + '% |\n';
    md += '| Mismatch | ' + mismatchCount + ' | ' + (mismatchCount / total * 100).toFixed(1) + '% |\n';
    md += '| Missing | ' + missingCount + ' | ' + (missingCount / total * 100).toFixed(1) + '% |\n';
    md += '| Recoverable | ' + recoverableCount + ' | ' + (recoverableCount / total * 100).toFixed(1) + '% |\n';
    md += '| Orphan | ' + orphanCount + ' | - |\n\n';

    // UR/SSR Missing
    md += '## UR/SSR Priority (Missing)\n\n';
    md += '| Rarity | ID | Name | Type | Path |\n';
    md += '|--------|-----|------|------|------|\n';
    var highPriority = results.missing.filter(function (e) { return e.rarity === 'UR' || e.rarity === 'SSR'; }).slice(0, 50);
    for (var i = 0; i < highPriority.length; i++) {
        var e = highPriority[i];
        md += '| ' + e.rarity + ' | ' + e.id + ' | ' + e.name + ' | ' + e.type + ' | ' + e.path + ' |\n';
    }

    // Mismatch
    md += '\n## Mismatch (' + mismatchCount + ')\n\n';
    md += '| Rarity | ID | Name | Type | Expected | Actual |\n';
    md += '|--------|-----|------|------|----------|--------|\n';
    for (var i = 0; i < Math.min(100, results.mismatch.length); i++) {
        var e = results.mismatch[i];
        md += '| ' + e.rarity + ' | ' + e.id + ' | ' + e.name + ' | ' + e.type + ' | ' + e.path + ' | ' + e.actualPath + ' |\n';
    }

    // Recoverable
    md += '\n## Recoverable (' + recoverableCount + ')\n\n';
    md += '| Rarity | ID | Name | Type | Recovery Path |\n';
    md += '|--------|-----|------|------|---------------|\n';
    for (var i = 0; i < Math.min(50, results.recoverable.length); i++) {
        var e = results.recoverable[i];
        md += '| ' + e.rarity + ' | ' + e.id + ' | ' + e.name + ' | ' + e.type + ' | ' + e.recoveryPath + ' |\n';
    }

    // Orphan
    md += '\n## Orphan Files (' + orphanCount + ')\n\n';
    md += '| Filename | Path | Size |\n';
    md += '|----------|------|------|\n';
    for (var i = 0; i < results.orphan.length; i++) {
        var e = results.orphan[i];
        md += '| ' + e.filename + ' | ' + e.path + ' | ' + (e.size / 1024).toFixed(1) + 'KB |\n';
    }

    // All Missing
    md += '\n## All Missing (' + missingCount + ')\n\n';
    md += '| Rarity | World | ID | Name | Type |\n';
    md += '|--------|-------|-----|------|------|\n';
    for (var i = 0; i < results.missing.length; i++) {
        var e = results.missing[i];
        md += '| ' + e.rarity + ' | ' + e.world + ' | ' + e.id + ' | ' + e.name + ' | ' + e.type + ' |\n';
    }

    var reportPath = path.join(PROJECT_ROOT, 'DEEP_AUDIT_REPORT.md');
    fs.writeFileSync(reportPath, md, 'utf8');
    console.log('Report: ' + reportPath);
}

/**
 * JSON 데이터 생성
 */
function generateJSON(results) {
    var jsonPath = path.join(PROJECT_ROOT, 'deep_audit_data.json');
    fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf8');
    console.log('JSON: ' + jsonPath);
}

// 실행
try {
    runDeepAudit();
} catch (e) {
    console.error('Error:', e.message);
    console.error(e.stack);
    process.exit(1);
}
