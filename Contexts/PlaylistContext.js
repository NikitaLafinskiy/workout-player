import { React, useState, createContext } from 'react';

const PlaylistContext = createContext();

const PlaylistContextProvider = (props) => {
  const [items, setItems] = useState(null);
  const [count, setCount] = useState(0);
  const [curr, setCurr] = useState([]);
  return (
    <PlaylistContext.Provider
      value={{ items, setItems, count, setCount, curr, setCurr }}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export { PlaylistContext, PlaylistContextProvider };
