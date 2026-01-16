name: self-optimizer
description: Intelligently analyzes the project structure and applies optimal configurations for performance and memory efficiency.

# Self-Optimizer Protocols

## 🧠 Philosophy

Instead of applying a "one-size-fits-all" template, this skill analyzes the specific contents of the workspace (e.g., Is it a Node project? A Python project? Are there large dataset folders?) and tailors the IDE configuration (`.vscode`, `jsconfig.json`, `.gitignore`) accordingly.

## 🎯 Trigger Conditions

Activate this skill when:

1. The user asks to "optimize the project" or "fix memory issues".
2. You detect "sluggish" IDE performance or excessive resource usage.
3. You are initializing a new workspace / project.

## 🛠️ Execution Strategy

### Step 1: Analyze & Plan

Run the analysis script to inspect the project structure:
`python .agent/skills/self-optimizer/scripts/optimize.py --analyze`

This script will check for:

- **Project Type**: `package.json` (Node), `requirements.txt` (Python), `project.godot` (Godot), etc.
- **Heavy Assets**: Folders > 100MB or containing high-res images/videos.
- **Artifacts**: `.agent`, `logs`, `backups` folders.

### Step 2: Apply Optimization

If the analysis suggests improvements, execute the applying mode:
`python .agent/skills/self-optimizer/scripts/optimize.py --apply`

This will:

1. **Update `.vscode/settings.json`**: Add specific `files.watcherExclude` and `search.exclude` rules for the detected heavy folders.
2. **Update Language Configs**: Modify `jsconfig.json` or `tsconfig.json` to exclude heavy non-source directories.
3. **Clean Up**: Suggest removing localized temp files if safe.

### Step 3: Report

Inform the user of what specific optimizations were applied based on the project's unique structure.
