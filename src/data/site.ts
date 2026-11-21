export const site = {
  name: 'Abdul Aziz Butt',
  urduName: 'عبدالعزیز بھٹ',
  nickname: 'Abbaji',
  birth: '26 July 1916',
  death: '7 August 2016',
  birthISO: '1916-07-26',
  deathISO: '2016-08-07',
  saying: 'Sink your differences and Cement your relationships.',
  revision: '11 November 2026',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/biography', label: 'Life' },
  { href: '/timeline', label: 'Register' },
  { href: '/sources', label: 'Sources' },
] as const;
