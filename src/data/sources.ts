export type SourceKind =
  | 'Government list'
  | 'University record'
  | 'Book'
  | 'Newspaper'
  | 'Family';

export interface Source {
  id: string;
  kind: SourceKind;
  short: string;
  author: string;
  title: string;
  year: string;
  independence: string;
  read: string;
  url?: string;
}

export const sourceKinds: SourceKind[] = [
  'Government list',
  'University record',
  'Book',
  'Newspaper',
  'Family',
];

export const sources: Source[] = [
  {
    id: 'cl-1947',
    kind: 'Government list',
    short: 'Civil List, 1947',
    author: 'Government of Jammu and Kashmir',
    title: 'Civil List, about January–February 1947',
    year: '1947',
    independence: 'Contemporary government list, independent of the family and of the later biographies.',
    read: 'Read from the Digital Library of India scan. Abdul Aziz Butt appears in the Kashmir Education Service. A reading of his posting in this volume is uncertain, and is not used as a fact here.',
    url: 'https://archive.org/details/dli.ernet.449300',
  },
  {
    id: 'cl-127',
    kind: 'Government list',
    short: 'Civil List No. 127',
    author: 'Government of Jammu and Kashmir',
    title: 'Civil List No. 127, corrected to about October 1952',
    year: '1952',
    independence: 'Contemporary government list, independent of the family and of the later biographies.',
    read: 'Entry 19, in the grade that includes headmasters: “19. Abdul Aziz Butt | 26-7-1916 | • | 23-2-1998 | 17-12-2001.” The birth date is 26 July 1916. In the Bikrami calendar, 23-2-1998 falls in about May or June 1941, and 17-12-2001 in about March 1945. Those two conversions are approximate.',
    url: 'https://archive.org/details/dli.ernet.509481',
  },
  {
    id: 'cl-128',
    kind: 'Government list',
    short: 'Civil List No. 128',
    author: 'Government of Jammu and Kashmir',
    title: 'Civil List No. 128, about 1953',
    year: '1953',
    independence: 'Contemporary government list.',
    read: 'The same man remains in the Kashmir Education Service. Used to confirm the name, the birth date and the cadre, not a later university post.',
    url: 'https://archive.org/details/dli.ernet.471671',
  },
  {
    id: 'calendar-2010',
    kind: 'University record',
    short: 'University Calendar',
    author: 'University of Kashmir',
    title: 'University Calendar 2010, Volume I, pages xviii–xix',
    year: '2010',
    independence: 'The university’s own succession list. It gives no surname.',
    read: 'Read from the page image. The machine text garbles the name. The image reads: “4. Prof. Abdul Aziz — Sept1962 – 1971.” Prof. A. S. Dhar is the registrar immediately before him, and Prof. M. A. Chishti immediately after. The list begins with G. A. Ashai.',
    url: 'https://www.kashmiruniversity.net/download/UniCal.pdf',
  },
  {
    id: 'bhadarwah',
    kind: 'Book',
    short: 'Bhadarwah history',
    author: 'Bashir Bhadarwahi, translated by Ta-Ha Mughal',
    title: 'The History and Culture of Bhadarwah',
    year: '2023',
    independence: 'A local history. The life of Professor Abdul Aziz Bhat draws on his own account. It is not an independent service record.',
    read: 'Biography on pages 774–775, and the passing mentions on pages 628 and 671. Gulshan Books, ISBN 978-81-8339-419-2. Page 671 calls him the first M.A. of the place and a former registrar.',
    url: 'https://archive.org/details/the-history-and-culture-of-bhadarwah',
  },
  {
    id: 'khalid',
    kind: 'Book',
    short: 'Khalid Bashir Ahmad',
    author: 'Khalid Bashir Ahmad',
    title: 'Kashmir: A Walk Through History',
    year: '2017',
    independence: 'Draws on an interview the author took in December 2011. His own account.',
    read: 'The interview is the source for the Hari Singh headmastership, the shape of the later career, and the death on 7 August 2016 at the age of 100.',
    url: 'https://archive.org/details/burzahom-kashmirawalkthroughhistorykhalidbashira-69086',
  },
  {
    id: 'bhalessa',
    kind: 'Book',
    short: 'Bhalessa',
    author: 'Sadaket Ali Malik',
    title: 'Bhalessa',
    year: '2021',
    independence: 'A local booklet. It follows the other biographies and is not an independent record.',
    read: 'Used for the Sopore years 1974–1981 and the Gogjibagh residence, and checked against the obituary and the Bhadarwah history.',
    url: 'https://archive.org/details/b-h-a-l-e-s-s-a-by-sadaket-malik',
  },
  {
    id: 'kashmir-life',
    kind: 'Newspaper',
    short: 'Kashmir Life',
    author: 'Muhammad Raafi, informed by Jalal Ud Din Shah',
    title: 'KU Ex-Registrar Dies At 98',
    year: '2016',
    independence: 'An obituary from one informant. Independent of the family site, not a service file.',
    read: 'Published 8 August 2016. He died in Jammu on Sunday, lived at Gogjibagh in Srinagar, and was survived by three sons and three daughters. The headline says 98. The article names Javid Ahmad, a pilot, and Altaf Ahmad, an engineer. It also says a daughter was killed in 1947 and that his hand was damaged.',
    url: 'https://kashmirlife.net/day31-witnessed-1947-massacre-of-jammu-muslims-ku-ex-registrar-dies-at-98-114045/',
  },
  {
    id: 'family',
    kind: 'Family',
    short: 'Family',
    author: 'The family of Abdul Aziz Butt',
    title: 'What the family remembers',
    year: '2026',
    independence: 'Family knowledge. Not a public record.',
    read: 'Recorded 11 November 2026. The professorship, with no subject named. Oxford, as a travelling scholar, with no year. The father’s name Muhammad Sultan. The missing left thumb. The daughter’s name, Masooda. The nickname Abbaji. That 26 July 1916 is probably right. That he was the first person from his village to be educated, and that he taught himself to read.',
  },
];

export const notFound = [
  'That he was founding faculty of the university in 1948, or that he built it “from the rock”. The university began that year as an examining body. Teaching departments came later.',
  'That he was Dean of Education, held a doctorate, or was professor of English, of Social Work, or of Education. The Department of Education dates itself to 1965. Social Work at the university began in 2003.',
  'That he wrote the curriculum of the Department of Education. Published accounts of that department name Agha Ashraf Ali.',
  'Guest lectures at Warwick. No source names him there, and the family has not claimed it.',
  'That he studied at the Bhaderwah degree college. The college opened in the mid-1950s. He was its principal.',
  'The sentence beginning “Ever-smiling, soft spoken…”. It comes from a notice of 7 April 2017 about a Master Abdul Aziz Bhat, and that notice does not identify the registrar.',
  'A father’s name printed in one local history. It is not used here. The family remembers Muhammad Sultan, and the printed name has not been checked by eye against the page.',
  'A year, a college or a certificate for Oxford. The 1956 training course in England is a different fact, and is not offered as the explanation.',
] as const;

export const openRecords = [
  'The September 1962 order appointing the Registrar.',
  'The 1971 order relieving him.',
  'The first page of his service book, which would name his department.',
  'A year, a college and a certificate for the Oxford travelling scholarship.',
  'A signature, a letter or a gravestone for the Urdu spelling of the surname. Until one of those is in hand, the name is set as عبدالعزیز بھٹ.',
] as const;

export function sourceById(id: string): Source {
  const source = sources.find((item) => item.id === id);
  if (!source) {
    throw new Error(`Unknown source: ${id}`);
  }
  return source;
}
