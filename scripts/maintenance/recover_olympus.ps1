
# Recover Olympus and Asgard Assets
$ErrorActionPreference = "Continue"

function Move-If-Exists {
    param($src, $dest)
    if (Test-Path $src) {
        Write-Host "Moving $src -> $dest"
        $destDir = Split-Path -Parent $dest
        if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
        Move-Item -Path $src -Destination $dest -Force
    }
    else {
        # Try finding in orphans list or alternative paths if basic check fails? 
        # For now, just warning is fine.
        Write-Warning "Source not found: $src"
    }
}

# 1. Rename God -> Standard (Olympus)
# Zeus (Note: creature_god_zeus.png is 9MB, creature_zeus.png is 898KB. We prefer God quality if valid)
# But creature_zeus.png exists (mismatch). We should overwrite it with God version if we want quality.
# Let's assume God version is the generated UR one.
Move-If-Exists "images/creatures/olympus/creature_god_zeus.png" "images/creatures/olympus/creature_zeus.png"
Move-If-Exists "images/creatures/olympus/creature_god_zeus_joy.png" "images/creatures/olympus/creature_zeus_joy.png"
Move-If-Exists "images/creatures/olympus/creature_god_zeus_sad.png" "images/creatures/olympus/creature_zeus_sad.png"
Move-If-Exists "images/creatures/olympus/creature_god_zeus_angry.png" "images/creatures/olympus/creature_god_zeus_angry.png" # typo in data? No, rename target
Move-If-Exists "images/creatures/olympus/creature_god_zeus_angry.png" "images/creatures/olympus/creature_zeus_angry.png"
Move-If-Exists "images/creatures/olympus/creature_god_zeus_skill.png" "images/creatures/olympus/creature_zeus_skill.png" # Data listed as .jpg, we updated to .png
Move-If-Exists "images/creatures/olympus/creature_god_zeus_victory.png" "images/creatures/olympus/creature_zeus_victory.png"
Move-If-Exists "images/creatures/olympus/creature_god_zeus_defeat.png" "images/creatures/olympus/creature_zeus_defeat.png"
Move-If-Exists "images/creatures/olympus/creature_god_zeus_gallery_lv1.png" "images/creatures/olympus/creature_zeus_gallery_lv1.png"
Move-If-Exists "images/creatures/olympus/creature_god_zeus_gallery_lv2.png" "images/creatures/olympus/creature_zeus_gallery_lv2.png"
Move-If-Exists "images/creatures/olympus/creature_god_zeus_gallery_lv3.png" "images/creatures/olympus/creature_zeus_gallery_lv3.png"

# Poseidon
Move-If-Exists "images/creatures/olympus/creature_god_poseidon.png" "images/creatures/olympus/creature_poseidon.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_joy.png" "images/creatures/olympus/creature_poseidon_joy.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_sad.png" "images/creatures/olympus/creature_poseidon_sad.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_angry.png" "images/creatures/olympus/creature_poseidon_angry.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_skill.png" "images/creatures/olympus/creature_poseidon_skill.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_victory.png" "images/creatures/olympus/creature_poseidon_victory.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_defeat.png" "images/creatures/olympus/creature_poseidon_defeat.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_gallery_lv1.png" "images/creatures/olympus/creature_poseidon_gallery_lv1.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_gallery_lv2.png" "images/creatures/olympus/creature_poseidon_gallery_lv2.png"
Move-If-Exists "images/creatures/olympus/creature_god_poseidon_gallery_lv3.png" "images/creatures/olympus/creature_poseidon_gallery_lv3.png"

# Hades
Move-If-Exists "images/creatures/olympus/creature_god_hades.png" "images/creatures/olympus/creature_hades.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_joy.png" "images/creatures/olympus/creature_hades_joy.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_sad.png" "images/creatures/olympus/creature_hades_sad.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_angry.png" "images/creatures/olympus/creature_hades_angry.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_skill.png" "images/creatures/olympus/creature_hades_skill.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_victory.png" "images/creatures/olympus/creature_hades_victory.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_defeat.png" "images/creatures/olympus/creature_hades_defeat.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_gallery_lv1.png" "images/creatures/olympus/creature_hades_gallery_lv1.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_gallery_lv2.png" "images/creatures/olympus/creature_hades_gallery_lv2.png"
Move-If-Exists "images/creatures/olympus/creature_god_hades_gallery_lv3.png" "images/creatures/olympus/creature_hades_gallery_lv3.png"

# 2. Restore Unused Archive (Asgard)
Move-If-Exists "images/_unused_archive/creature_thor_gallery_lv1.png" "images/creatures/asgard/creature_thor_gallery_lv1.png"
Move-If-Exists "images/_unused_archive/creature_thor_gallery_lv2.png" "images/creatures/asgard/creature_thor_gallery_lv2.png"
Move-If-Exists "images/_unused_archive/creature_thor_gallery_lv3.png" "images/creatures/asgard/creature_thor_gallery_lv3.png"

Move-If-Exists "images/_unused_archive/creature_loki_gallery_lv1.png" "images/creatures/asgard/creature_loki_gallery_lv1.png"
Move-If-Exists "images/_unused_archive/creature_loki_gallery_lv2.png" "images/creatures/asgard/creature_loki_gallery_lv2.png"
Move-If-Exists "images/_unused_archive/creature_loki_gallery_lv3.png" "images/creatures/asgard/creature_loki_gallery_lv3.png"

Write-Host "Olympus and Archive Recovery Complete."
