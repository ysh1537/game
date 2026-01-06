$file = "d:\test\multiverse-creature-lab\js\data\creatures\AsgardTail.js"
$content = Get-Content -Path $file -Raw -Encoding UTF8

# Define a mapping of incomplete/wrong paths to correct paths
# We use a specific order to avoid double replacements if possible, though exact match helps.
$replacements = @{
    '"images/creature_god_loki.png"' = '"images/creatures/asgard/creature_god_loki.png"'
    '"images/creature_god_loki_joy.png"' = '"images/creatures/asgard/creature_god_loki_joy.png"'
    '"images/creature_god_loki_sad.png"' = '"images/creatures/asgard/creature_god_loki_sad.png"'
    '"images/creature_god_loki_angry.png"' = '"images/creatures/asgard/creature_god_loki_angry.png"'
    '"images/creature_god_loki_skill.png"' = '"images/creatures/asgard/creature_god_loki_skill.png"'
    '"images/creature_god_loki_gallery.png"' = '"images/creatures/asgard/creature_god_loki_gallery.png"'

    '"images/creature_god_freya.png"' = '"images/creatures/asgard/creature_god_freya.png"'
    '"images/creature_god_freya_joy.png"' = '"images/creatures/asgard/creature_god_freya_joy.png"'
    '"images/creature_god_freya_sad.png"' = '"images/creatures/asgard/creature_god_freya_sad.png"'
    '"images/creature_god_freya_angry.png"' = '"images/creatures/asgard/creature_god_freya_angry.png"'
    '"images/creature_god_freya_skill.png"' = '"images/creatures/asgard/creature_god_freya_skill.png"'
    '"images/creature_god_freya_gallery.png"' = '"images/creatures/asgard/creature_god_freya_gallery.png"'

    '"images/creature_god_hel.png"' = '"images/creatures/asgard/creature_god_hel.png"'
    '"images/creature_god_hel_joy.png"' = '"images/creatures/asgard/creature_god_hel_joy.png"'
    '"images/creature_god_hel_sad.png"' = '"images/creatures/asgard/creature_god_hel_sad.png"'
    '"images/creature_god_hel_angry.png"' = '"images/creatures/asgard/creature_god_hel_angry.png"'
    '"images/creature_god_hel_skill.png"' = '"images/creatures/asgard/creature_god_hel_skill.png"'
    '"images/creature_god_hel_gallery.png"' = '"images/creatures/asgard/creature_god_hel_gallery.png"'

    '"images/creature_valkyrie.png"' = '"images/creatures/asgard/creature_valkyrie.png"'
    '"images/creature_valkyrie_joy.png"' = '"images/creatures/asgard/creature_valkyrie_joy.png"'
    '"images/creature_valkyrie_sad.png"' = '"images/creatures/asgard/creature_valkyrie_sad.png"'
    '"images/creature_valkyrie_angry.png"' = '"images/creatures/asgard/creature_valkyrie_angry.png"'
    '"images/creature_valkyrie_skill.png"' = '"images/creatures/asgard/creature_valkyrie_skill.png"'
    '"images/creature_valkyrie_gallery.png"' = '"images/creatures/asgard/creature_valkyrie_gallery.png"'

    '"images/creatures/asgard/god_loki.png"' = '"images/creatures/asgard/creature_god_loki.png"'
    '"images/creatures/asgard/god_freya.png"' = '"images/creatures/asgard/creature_god_freya.png"'
    '"images/creatures/asgard/god_hel.png"' = '"images/creatures/asgard/creature_god_hel.png"'
    '"images/creatures/asgard/ratatoskr_squirrel.png"' = '"images/creatures/asgard/creature_ratatoskr_squirrel.png"'
    '"images/creatures/asgard/muninn_crow.png"' = '"images/creatures/asgard/creature_muninn_crow.png"'
    '"images/creatures/asgard/elk_golden.png"' = '"images/creatures/asgard/creature_elk_golden.png"'
    '"images/creatures/asgard/bifrost_wisp.png"' = '"images/creatures/asgard/creature_bifrost_wisp.png"'
    '"images/creatures/asgard/einherjar_ghost.png"' = '"images/creatures/asgard/creature_einherjar_ghost.png"'
    
    '"images/creatures/asgard/heimdall_horn_spirit.png"' = '"images/creatures/asgard/creature_heimdall_horn_spirit.png"'
    '"images/creatures/asgard/mimir_spirit.png"' = '"images/creatures/asgard/creature_mimir_spirit.png"'
    '"images/creatures/asgard/shieldmaiden_iron.png"' = '"images/creatures/asgard/creature_shieldmaiden_iron.png"'
    '"images/creatures/asgard/ulfhednar_wolf.png"' = '"images/creatures/asgard/creature_ulfhednar_wolf.png"'
    '"images/creatures/asgard/wolf_pup_asgard.png"' = '"images/creatures/asgard/creature_wolf_pup_asgard.png"'
    '"images/creatures/asgard/yggdrasil_guardian.png"' = '"images/creatures/asgard/creature_yggdrasil_guardian.png"'
    
    '"images/creature_bear_ice.png"' = '"images/creatures/asgard/creature_bear_ice.png"'
    '"images/creature_eagle_iron.png"' = '"images/creatures/wild/creature_eagle_iron.png"'
    '"images/creatures/wild/creature_eagle_iron.png"' = '"images/creatures/wild/creature_eagle_iron.png"' 
    
    '"images/creatures/unknown/nordic_cat_freya.png"' = '"images/creatures/asgard/creature_cat_freya.png"'
    '"images/creatures/unknown/creature_snow_spirit.png"' = '"images/creatures/asgard/creature_snow_spirit.png"'

    '"images/creature_giant_hill.png"' = '"images/creatures/wild/creature_giant_hill.png"' 
    
    '"images/creature_dwarf.png"' = '"images/creatures/asgard/creature_dwarf.png"'
    '"images/creature_dwarf_joy.png"' = '"images/creatures/asgard/creature_dwarf_joy.png"'
    '"images/creature_dwarf_sad.png"' = '"images/creatures/asgard/creature_dwarf_sad.png"'
    '"images/creature_dwarf_angry.png"' = '"images/creatures/asgard/creature_dwarf_angry.png"'
    '"images/creature_dwarf_skill.png"' = '"images/creatures/asgard/creature_dwarf_skill.png"'
    '"images/creature_dwarf_gallery.png"' = '"images/creatures/asgard/creature_dwarf_gallery.png"'
}

foreach ($key in $replacements.Keys) {
    if ($content.Contains($key)) {
        Write-Host "Replacing $key"
        $content = $content.Replace($key, $replacements[$key])
    }
}

Set-Content -Path $file -Value $content -Encoding UTF8
Write-Host "Extended path correction complete."
