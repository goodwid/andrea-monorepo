import { useMediaQuery } from 'react-responsive';

export function useMobile() {
  return useMediaQuery({ query: 'screen and (max-width: 599px)' });
}

export function useDesktop() {
  return useMediaQuery({ query: 'screen and (min-width: 600px)' });
}
