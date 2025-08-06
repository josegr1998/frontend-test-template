export const updateUrl = ({ newUrl }: { newUrl: string }) =>
  window.history.replaceState(null, "", newUrl);
