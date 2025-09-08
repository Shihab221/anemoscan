"use client"
import { useEffect } from 'react';

interface PageVisitData {
  page: string;
  timestamp: Date;
  referrer?: string;
}

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

const usePageVisitTracker = () => {
  useEffect(() => {
    if (!isBrowser) return; // Don't run on server

    // Track initial page load
    trackPageVisit({
      page: window.location.pathname,
      timestamp: new Date(),
      referrer: document.referrer || 'Direct'
    });

    // Store the original pushState and replaceState methods
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    // Override pushState to track page visits
    history.pushState = function (...args) {
      const result = originalPushState.apply(this, args);
      trackPageVisit({
        page: window.location.pathname,
        timestamp: new Date(),
        referrer: 'History API'
      });
      return result;
    };

    // Override replaceState to track page visits
    history.replaceState = function (...args) {
      const result = originalReplaceState.apply(this, args);
      trackPageVisit({
        page: window.location.pathname,
        timestamp: new Date(),
        referrer: 'History API'
      });
      return result;
    };

    // Listen for popstate events (back/forward navigation)
    const handlePopState = () => {
      trackPageVisit({
        page: window.location.pathname,
        timestamp: new Date(),
        referrer: 'Browser Navigation'
      });
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup function
    return () => {
      // Restore original methods
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      // Remove event listener
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
};

const trackPageVisit = async (data: PageVisitData) => {
  try {
    await fetch('/api/track-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error tracking page visit:', error);
  }
};

export default usePageVisitTracker;