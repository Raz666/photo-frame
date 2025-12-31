export type MediaItemRecord = {
  id: string;
  filename: string;
  localPath: string;
  mimeType: string;
  createdAt: string;
};

export async function listMediaItems(): Promise<MediaItemRecord[]> {
  // TODO: Read cached media items from SQLite.
  return [];
}

export async function saveMediaItems(items: MediaItemRecord[]): Promise<void> {
  // TODO: Persist media items to SQLite.
  void items;
}
