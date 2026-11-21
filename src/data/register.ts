import type { Status } from './status';

export interface RegisterEntry {
  years: string;
  title: string;
  text: string;
  status: Status;
  sourceId: string;
}

export const register: RegisterEntry[] = [
  {
    years: '1916',
    title: 'Born at Kilhotran, Bhalessa',
    text: 'Abdul Aziz Butt is born on 26 July 1916 at Kilhotran, a village in Bhalessa.',
    status: 'record',
    sourceId: 'cl-127',
  },
  {
    years: 'Early 1920s',
    title: 'Learning to read',
    text: 'The family remembers that he taught himself to read as a small child.',
    status: 'family-memory',
    sourceId: 'family',
  },
  {
    years: '1930s',
    title: 'Kilhotran and Bhaderwah',
    text: 'Primary school at Kilhotran, then the school at Bhaderwah, in the first group of boys from Bhalessa to be admitted. Ghulam Rasool Azad is his classmate until the tenth class. The family remembers that he was the first person from his village to be educated.',
    status: 'own-account',
    sourceId: 'bhadarwah',
  },
  {
    years: '1938',
    title: 'B.A., Prince of Wales College, Jammu',
    text: 'Takes his B.A. at Prince of Wales College, Jammu, now Government Gandhi Memorial Science College.',
    status: 'own-account',
    sourceId: 'bhadarwah',
  },
  {
    years: 'After 1938',
    title: 'Aligarh and further study',
    text: 'M.A. in Arabic and LL.B. at Aligarh Muslim University; the B.T. teaching degree; Munshi Fazil in the first class.',
    status: 'own-account',
    sourceId: 'bhadarwah',
  },
  {
    years: '1941',
    title: 'Joins the education service',
    text: 'Appointed Second Teacher at Kishtwar High School, the start of thirty-three years in the state’s education service.',
    status: 'record',
    sourceId: 'cl-127',
  },
  {
    years: '1940s',
    title: 'Head Master',
    text: 'Rises to headmaster. In his own account, he is Head Master of Hari Singh High School.',
    status: 'own-account',
    sourceId: 'khalid',
  },
  {
    years: '1940s',
    title: 'Lecturer, Mirpur',
    text: 'One of his early postings is as a lecturer at the Intermediate College, Mirpur.',
    status: 'own-account',
    sourceId: 'bhadarwah',
  },
  {
    years: 'November 1947',
    title: 'Loss in Jammu',
    text: 'Aged 31, he is shot while holding his daughter Masooda when the bus taking the family out of Jammu is ambushed. Masooda is killed and he loses his left thumb. His wife, Saideh, is wounded and survives.',
    status: 'family-memory',
    sourceId: 'family',
  },
  {
    years: 'Early 1950s',
    title: 'Inspector of Schools, Anantnag',
    text: 'Now working in Kashmir, he serves as an Inspector of Schools at Anantnag.',
    status: 'own-account',
    sourceId: 'khalid',
  },
  {
    years: '1956',
    title: 'Training course in England',
    text: 'Completes a one-year training course in England with Ghulam Rasool Azad and others.',
    status: 'own-account',
    sourceId: 'bhadarwah',
  },
  {
    years: '1950s',
    title: 'College principal',
    text: 'Principal of the degree college at Bhaderwah, and later of S.P. College, Srinagar.',
    status: 'own-account',
    sourceId: 'bhadarwah',
  },
  {
    years: 'Before 1962',
    title: 'Board of School Education; Deputy Director',
    text: 'Secretary of the Jammu and Kashmir Board of School Education, and Deputy Director of Education, Kashmir.',
    status: 'own-account',
    sourceId: 'khalid',
  },
  {
    years: 'September 1962',
    title: 'Professor and Registrar',
    text: 'Becomes Registrar of the University of Jammu and Kashmir. The university’s list of its Registrars records him as Prof. Abdul Aziz.',
    status: 'record',
    sourceId: 'calendar-2010',
  },
  {
    years: '1969–1971',
    title: 'Registrar, University of Kashmir',
    text: 'When the university is divided in 1969, he continues as Registrar of the new University of Kashmir until 1971.',
    status: 'record',
    sourceId: 'calendar-2010',
  },
  {
    years: '1974',
    title: 'Retirement; Sopore',
    text: 'Retires from government service, and becomes Principal of the Muslim Educational Trust’s College of Education at Sopore, until 1981.',
    status: 'own-account',
    sourceId: 'khalid',
  },
  {
    years: '1986',
    title: 'College of Education, Jammu',
    text: 'Lays the foundation of the College of Education at the Model Institute of Education, Jammu, and advises its director.',
    status: 'own-account',
    sourceId: 'bhadarwah',
  },
  {
    years: '1990s–2000s',
    title: 'Elder years',
    text: 'Into his eighties and nineties he stays active. The family remembers that he keeps up his work with young people. In 2006 he joins a gathering in Jammu to honour Ghulam Nabi Azad, and in 2011 he gives an interview to the writer Khalid Bashir Ahmad.',
    status: 'own-account',
    sourceId: 'khalid',
  },
  {
    years: '2016',
    title: 'A century complete',
    text: 'He dies in Jammu on 7 August 2016, aged 100. He leaves his children and grandchildren, and the many students and teachers he worked with.',
    status: 'record',
    sourceId: 'khalid',
  },
];
