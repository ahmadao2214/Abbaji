export const statuses = ['record', 'own-account', 'family-memory', 'not-found'] as const;

export type Status = (typeof statuses)[number];

export const statusLabel: Record<Status, string> = {
  record: 'Record',
  'own-account': 'His own account',
  'family-memory': 'Family memory',
  'not-found': 'Not found',
};
