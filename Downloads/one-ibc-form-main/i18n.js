const data = {
  locales: ['vn-vi', 'en-us'],
  defaultLocale: 'vn-vi',
  localesToIgnore: ['en-us'],
  pages: {
    '*': ['common'],
    '/404': ['error'],
    '/': ['home'],
    '/dashboard': ['home'],
    'rgx:^/more-examples': ['more-examples'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: async () => null,
};

module.exports = data;
