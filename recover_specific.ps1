
# Manual Recovery for known specific cases
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
        Write-Warning "Source not found: $src"
    }
}

# 1. Tiamat (Asgard -> Abyss/dragon_chaos)
Move-If-Exists "images/creatures/asgard/creature_tiamat_idle.png" "images/creatures/abyss/creature_dragon_chaos.png"
Move-If-Exists "images/creatures/asgard/creature_tiamat_joy.png" "images/creatures/abyss/creature_dragon_chaos_joy.png"
Move-If-Exists "images/creatures/asgard/creature_tiamat_sad.png" "images/creatures/abyss/creature_dragon_chaos_sad.png"
Move-If-Exists "images/creatures/asgard/creature_tiamat_angry.png" "images/creatures/abyss/creature_dragon_chaos_angry.png"
Move-If-Exists "images/creatures/asgard/creature_tiamat_skill.png" "images/creatures/abyss/creature_dragon_chaos_skill.png"
Move-If-Exists "images/creatures/asgard/creature_tiamat_victory.png" "images/creatures/abyss/creature_dragon_chaos_victory.png"
Move-If-Exists "images/creatures/asgard/creature_tiamat_defeat.png" "images/creatures/abyss/creature_dragon_chaos_defeat.png"

# 2. Baal (Olympus -> Abyss/demon_king)
Move-If-Exists "images/creatures/olympus/creature_baal_idle.png" "images/creatures/abyss/creature_demon_king.png"
Move-If-Exists "images/creatures/olympus/creature_baal_joy.png" "images/creatures/abyss/creature_demon_king_joy.png"
Move-If-Exists "images/creatures/olympus/creature_baal_sad.png" "images/creatures/abyss/creature_demon_king_sad.png"
Move-If-Exists "images/creatures/olympus/creature_baal_angry.png" "images/creatures/abyss/creature_demon_king_angry.png"
Move-If-Exists "images/creatures/olympus/creature_baal_skill.png" "images/creatures/abyss/creature_demon_king_skill.png"
# Check if victory/defeat exist for Baal
Move-If-Exists "images/creatures/olympus/creature_baal_victory.png" "images/creatures/abyss/creature_demon_king_victory.png"
Move-If-Exists "images/creatures/olympus/creature_baal_defeat.png" "images/creatures/abyss/creature_demon_king_defeat.png"

# 3. Cthulhu (Legacy Orphan -> God Main)
# Main image is usually idle for these URs
Move-If-Exists "images/creatures/abyss/creature_cthulhu_idle.png" "images/creatures/abyss/creature_god_cthulhu.png"
# Previously recovered sprites: creature_cthulhu_joy -> creature_god_cthulhu_joy (Done by script)

# 4. Nyarlathotep (Idle suffix -> Main)
# The orphan list showed creature_god_nyarlathotep_idle.png. Data expects creature_god_nyarlathotep.png
Move-If-Exists "images/creatures/abyss/creature_god_nyarlathotep_idle.png" "images/creatures/abyss/creature_god_nyarlathotep.png"

# 5. Shub (Idle suffix -> Main)
# If orphan creature_shub_niggurath_idle.png exists, move to creature_god_shub.png
Move-If-Exists "images/creatures/abyss/creature_shub_niggurath_idle.png" "images/creatures/abyss/creature_god_shub.png"

Write-Host "Manual Recovery Complete."
