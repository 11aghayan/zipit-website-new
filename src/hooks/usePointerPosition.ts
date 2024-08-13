export default function usePointerPosition() {
  const posX = window.ontouchmove = (e) => {
    console.log(e.changedTouches[0]);
  };
  return posX;
}