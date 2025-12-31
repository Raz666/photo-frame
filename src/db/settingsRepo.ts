export type AppSettings = {
  slideshowIntervalSeconds: number;
  shuffleEnabled: boolean;
  fitMode: 'contain' | 'cover';
};

export async function loadSettings(): Promise<AppSettings> {
  // TODO: Load settings from SQLite.
  return {
    slideshowIntervalSeconds: 10,
    shuffleEnabled: false,
    fitMode: 'cover',
  };
}

export async function saveSettings(settings: AppSettings): Promise<void> {
  // TODO: Persist settings to SQLite.
  void settings;
}
