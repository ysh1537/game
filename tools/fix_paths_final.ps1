$file = "d:\test\multiverse-creature-lab\js\data\creatures\AsgardTail.js"
$content = Get-Content -Path $file -Raw -Encoding UTF8

# Validated Replacements based on list_dir
$replacements = @{
    # Odin
    '"images/creature_god_odin.png"'                      = '"images/creatures/asgard/creature_god_odin.png"'
    '"images/creature_god_odin_gallery_lv1.png"'          = '"images/creatures/asgard/creature_god_odin_gallery_lv1.png"'
    '"images/creature_god_odin_gallery_lv2.png"'          = '"images/creatures/asgard/creature_god_odin_gallery_lv2.png"'
    '"images/creature_god_odin_gallery_lv3.png"'          = '"images/creatures/asgard/creature_god_odin_gallery_lv3.png"'

    # Valkyrie
    '"images/creature_valkyrie.png"'                      = '"images/creatures/asgard/creature_valkyrie.png"'
    '"images/creature_valkyrie_joy.png"'                  = '"images/creatures/asgard/creature_valkyrie_joy.png"'
    '"images/creature_valkyrie_sad.png"'                  = '"images/creatures/asgard/creature_valkyrie_sad.png"'
    '"images/creature_valkyrie_angry.png"'                = '"images/creatures/asgard/creature_valkyrie_angry.png"'
    '"images/creature_valkyrie_skill.png"'                = '"images/creatures/asgard/creature_valkyrie_skill.png"'
    '"images/creature_valkyrie_gallery.png"'              = '"images/creatures/asgard/creature_valkyrie_gallery.png"'

    # Loki - Fix directory without creature_ prefix
    '"images/creatures/asgard/god_loki.png"'              = '"images/creatures/asgard/creature_god_loki.png"'
    '"images/god_loki.png"'                               = '"images/creatures/asgard/creature_god_loki.png"'
    
    # Freya
    '"images/creatures/asgard/god_freya.png"'             = '"images/creatures/asgard/creature_god_freya.png"'
    '"images/god_freya.png"'                              = '"images/creatures/asgard/creature_god_freya.png"'

    # Hel
    '"images/creatures/asgard/god_hel.png"'               = '"images/creatures/asgard/creature_god_hel.png"'
    '"images/god_hel.png"'                                = '"images/creatures/asgard/creature_god_hel.png"'

    # Others
    '"images/creatures/asgard/ratatoskr_squirrel.png"'    = '"images/creatures/asgard/creature_ratatoskr_squirrel.png"'
    '"images/creatures/asgard/muninn_crow.png"'           = '"images/creatures/asgard/creature_muninn_crow.png"'
    '"images/creatures/asgard/elk_golden.png"'            = '"images/creatures/asgard/creature_elk_golden.png"'
    '"images/creatures/asgard/bifrost_wisp.png"'          = '"images/creatures/asgard/creature_bifrost_wisp.png"'
    '"images/creatures/asgard/einherjar_ghost.png"'       = '"images/creatures/asgard/creature_einherjar_ghost.png"'
    '"images/creatures/asgard/heimdall_horn_spirit.png"'  = '"images/creatures/asgard/creature_heimdall_horn_spirit.png"'
    '"images/creatures/asgard/mimir_spirit.png"'          = '"images/creatures/asgard/creature_mimir_spirit.png"'
    '"images/creatures/asgard/shieldmaiden_iron.png"'     = '"images/creatures/asgard/creature_shieldmaiden_iron.png"'
    '"images/creatures/asgard/ulfhednar_wolf.png"'        = '"images/creatures/asgard/creature_ulfhednar_wolf.png"'
    '"images/creatures/asgard/wolf_pup_asgard.png"'       = '"images/creatures/asgard/creature_wolf_pup_asgard.png"'
    '"images/creatures/asgard/yggdrasil_guardian.png"'    = '"images/creatures/asgard/creature_yggdrasil_guardian.png"'
    
    # Thor
    '"images/god_thor.png"'                               = '"images/creatures/asgard/creature_god_thor.png"'

    # Misc
    '"images/creatures/unknown/nordic_cat_freya.png"'     = '"images/creatures/asgard/creature_cat_freya.png"'
    '"images/creatures/unknown/creature_snow_spirit.png"' = '"images/creatures/asgard/creature_snow_spirit.png"'
    '"images/creature_dwarf.png"'                         = '"images/creatures/asgard/creature_dwarf.png"'
}

foreach ($key in $replacements.Keys) {
    if ($content.Contains($key)) {
        Write-Host "Replacing $key to $($replacements[$key])"
        $content = $content.Replace($key, $replacements[$key])
    }
}

Set-Content -Path $file -Value $content -Encoding UTF8
Write-Host "Final path correction complete."
