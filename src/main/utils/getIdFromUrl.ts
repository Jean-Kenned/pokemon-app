export const getIdFromUrl = (url: string): string => {
  return url.split('/').slice(-2)[0] ?? '';
};
