/**
 * AuthManager.js
 * Firebase Auth Wrapper
 */
export default class AuthManager {
    constructor() {
        this.user = null;
        this.isGuest = false;
        this.isAuthenticated = false;

        // [Google Login Only]
        // No guest session restoration
        this.isAuthenticated = false;
    }

    async init() {
        // Firebase listeners can be attached here if needed
        console.log("[AuthManager] Initialized");
        if (this.isAuthenticated && window.SaveManager) {
            await window.SaveManager.load();
        }

        // 2. Firebase session is handled by AuthView listener for now, 
        //    or ideally we wrap onAuthStateChanged here.
    }

    /**
     * Login as Guest (Local Only)
     */
    loginGuest() {
        this.isGuest = true;
        this.isAuthenticated = true;
        this.user = {
            uid: "guest_" + Date.now(),
            displayName: "Guest Explorer",
            photoURL: "assets/ui/guest_avatar.png"
        };
        localStorage.setItem('mclab_guest_session', JSON.stringify(this.user));
        console.log("[AuthManager] Guest Login Success:", this.user.displayName);

        // Notify other managers
        if (window.SaveManager) window.SaveManager.load();

        return this.user;
    }

    /**
     * Login with Google (Firebase)
     * Note: Requires Firebase SDK loaded globally or via Module
     */
    async loginGoogle() {
        if (!window.firebaseService) {
            console.error("[AuthManager] FirebaseService not found!");
            return null;
        }

        const result = await window.firebaseService.signInWithGoogle();
        if (result.success) {
            this.isGuest = false;
            this.isAuthenticated = true;
            this.user = result.user;
            console.log("[AuthManager] Google Login Success:", this.user.displayName);

            // Link Guest Data? (Future Feature)

            // Load Cloud Data
            if (window.SaveManager) await window.SaveManager.load();

            return this.user;
        } else {
            alert("Login Failed: " + result.error);
            return null;
        }
    }

    /**
     * [Compatibility] Generic Login
     * Used by AuthView mostly for restoring sessions or debug login.
     */
    async login(username, password) {
        console.log(`[AuthManager] Generic Login request for: ${username}`);
        this.isAuthenticated = true;
        this.isGuest = false;

        // If we don't have a user object yet, create a mock one or rely on what's set
        if (!this.user) {
            this.user = {
                uid: 'restored_' + Date.now(),
                displayName: username,
                email: username // basic fallback
            };
        }

        // Load data potentially
        if (window.SaveManager) await window.SaveManager.load();

        return { success: true, user: this.user };
    }

    logout() {
        if (!this.isGuest && window.firebaseService) {
            window.firebaseService.logout();
        }
        this.user = null;
        this.isAuthenticated = false;
        this.isGuest = false;
        console.log("[AuthManager] Logged out");

        // Reload page to clear state purely
        location.reload();
    }
}

// Global Instance
window.AuthManager = new AuthManager();
