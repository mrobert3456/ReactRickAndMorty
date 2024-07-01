export const getEpisodeNumberIdFromUrl = (url: string) => {
  const match = url.match(/\/(\d+)$/);

  if (match) {
    const number = parseInt(match[1], 10);
    return number;
  }
  return -1;
};
