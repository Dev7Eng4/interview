import React, { useEffect, useReducer } from 'react';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const RESET_REQUEST = 'RESET_REQUEST';

const initialState = {
  isLoading: true,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const CleanUpEffect = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      dispatch({ type: REQUEST_STARTED });

      try {
        const data = fetch('url', { signal: abortController.signal });

        dispatch({ type: REQUEST_SUCCESSFUL, payload: data });
      } catch (e) {
        if (!abortController.signal.aborted) {
          dispatch({ type: REQUEST_FAILED, payload: e.message });
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, ['url']);

  return <div>CleanUpEffect</div>;
};

export default CleanUpEffect;
