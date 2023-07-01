import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const initialState = {theme: "light", data: [], favs: JSON.parse(localStorage.getItem('favs')) || []}

export const ContextGlobal = createContext(undefined)

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.theme};
    case "SET_DATA":
      return { ...state, data: action.data};
    case "TOGGLE_FAV": {
      const isFav = state.favs.some(fav => fav.id === action.payload.id);
      const newFavs = isFav 
        ? state.favs.filter(fav => fav.id !== action.payload.id) 
        : [...state.favs, action.payload];

      localStorage.setItem('favs', JSON.stringify(newFavs));
      return { ...state, favs: newFavs };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DATA', data: response.data });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', theme: state.theme === 'light' ? 'dark' : 'light' });
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};