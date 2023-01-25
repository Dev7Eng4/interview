import React, { RefObject, useCallback, useEffect, useRef } from 'react';

const useLoadDataScroll = (
  containerRef: RefObject<Element>,
  positionScroll: number,
  handler: () => Promise<boolean | undefined>
) => {
  const mountRef = useRef(true);
  const loadMoreRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const heightToBottom =
      containerRef.current.scrollHeight -
      containerRef.current.clientHeight -
      containerRef.current.scrollTop;

    if (heightToBottom <= positionScroll && loadMoreRef.current) {
      loadMoreRef.current = false;

      handler().then((_) => (loadMoreRef.current = !!_));
    }
  }, [containerRef.current, positionScroll, loadMoreRef.current]);

  useEffect(() => {
    containerRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef.current, handleScroll]);

  useEffect(() => {
    if (mountRef.current) {
      mountRef.current = false;
      handler().then((_) => (loadMoreRef.current = !!_));
    }
  }, []);
};

export default useLoadDataScroll;
