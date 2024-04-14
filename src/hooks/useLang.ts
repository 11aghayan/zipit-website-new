export default function useLang() {
  const { pathname } = window.location;
  return pathname.split('/')[1];
}