export type SyncStatus = 'idle' | 'running' | 'error';

export interface SyncEngine {
  start: () => Promise<void>;
  stop: () => void;
}

export function createSyncEngine(): SyncEngine {
  return {
    start: async () => {
      // TODO: Implement sync scheduling, downloads, and eviction.
    },
    stop: () => {
      // TODO: Stop active sync work.
    },
  };
}
