const isPro = process.env.NODE_ENV === 'production'

export const startURL = isPro ? '/admin' : '';
