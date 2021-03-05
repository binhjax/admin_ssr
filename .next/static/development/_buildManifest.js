self.__BUILD_MANIFEST = {
  __rewrites: [{ source: '\u002Fapi\u002F:path*' }, { source: '\u002Fcms\u002F:path*' }],
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/diagram': ['static\u002Fchunks\u002Fpages\u002Fdiagram.js'],
  sortedPages: ['\u002F_app', '\u002F_error', '\u002Fdiagram'],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
