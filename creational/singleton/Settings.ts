class Settings {
    static instance: Settings;
    public readonly mode = 'dark';

    // prevent new with private constructor
    private constructor() {
    }

    static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }

        return Settings.instance;
    }
}

const settings = Settings.getInstance();

// without boilerplate(JS built-in language features to implement singleton pattern):
const settingsJS = {
    dark: 'true'
};
