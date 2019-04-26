import { useEffect } from 'react';

const useServiceWorker = (resources = []) => {
  useEffect(() => {
    if ('serviceWorker' in navigator && resources.length) {
      const resourcesList = resources.join(',');

      navigator.serviceWorker.register(`/static/service-worker.js?resources=${resourcesList}`);
    }
  }, []);
};

export default useServiceWorker;
