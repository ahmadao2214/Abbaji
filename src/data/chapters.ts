export interface Chapter {
  id: string;
  years: string;
  place: string;
}

export const chapters: Chapter[] = [
  { id: 'kilhotran', years: '1916–1938', place: 'Kilhotran, Bhalessa and Bhaderwah' },
  { id: 'aligarh', years: '1938–1947', place: 'Aligarh, Kishtwar and Mirpur' },
  { id: 'jammu-1947', years: 'November 1947', place: 'Jammu' },
  { id: 'kashmir', years: '1948–1962', place: 'Anantnag, Bhaderwah and Srinagar' },
  { id: 'hazratbal', years: '1962–1971', place: 'Hazratbal' },
  { id: 'sopore', years: '1974–1986', place: 'Sopore and Jammu' },
  { id: 'later', years: '1986–2016', place: 'Gogjibagh and Jammu' },
  { id: 'family', years: 'Family', place: 'His children' },
];
