export function useLockScreen() {
  const isLockScreenVisible = useState('isLockScreenVisible', () => true);

  const disableScroll = () => {
    document.body.classList.add('overflow-hidden');
  };

  const enableScroll = () => {
    document.body.classList.remove('overflow-hidden');
  };

  const dismissLockScreen = () => {
    isLockScreenVisible.value = false;
    setTimeout(enableScroll, 700);
  };

  return {
    isLockScreenVisible,
    disableScroll,
    enableScroll,
    dismissLockScreen,
  };
}
