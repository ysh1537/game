name: runtime-guardian
description: Prevents 'terminate called' crashes by enforcing resource checks and micro-tasking.

# Runtime Guardian Protocols

## 🚨 When to Apply (Trigger Conditions)

You MUST activate this skill when:

1. The user asks for a **large refactoring** (affecting >3 files).
2. You are about to run a **build** or **test** command in the terminal.
3. You encounter a "laggy" response or previous tool use failure.
4. You are planning a task with more than **5 steps**.

## 🛡️ Safety Instructions

### Phase 1: Pre-Flight Resource Check

Before generating any code or editing files, you must execute the health check script:
`python .agent/skills/runtime-guardian/scripts/check_health.py`

**Analyze the Output:**

* **STATUS: GREEN** → Proceed with task.
* **STATUS: YELLOW** → **WARNING:** "Memory pressure detected. I will limit this task to modifying 1 file at a time."
* **STATUS: RED** → **CRITICAL STOP:** "System instability detected (High RAM/Zombie Processes). Please restart the IDE to avoid a 3-hour lockout." **DO NOT PROCEED.**

### Phase 2: Micro-Tasking Enforcement

To avoid the terminate error caused by long-running threads:

* **Do NOT** queue more than 2 edit_file operations in a single turn.
* **Do NOT** run npm install or heavy builds without explicitly asking for user confirmation.
* After every 3 steps of execution, stop and ask the user: *"Memory check passed. Shall I continue?"*

### Phase 3: Zombie Process Awareness

If the health check reports "Zombie Count > 0":

* Advise the user to run: `taskkill /F /IM node.exe` (Windows) or `pkill -f language_server` (Linux/Mac) before proceeding.
