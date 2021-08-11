import { React, useState, createContext } from 'react';

const PlaylistContext = createContext();

const PlaylistContextProvider = (props) => {
  const [items, setItems] = useState(null);
  const [count, setCount] = useState(0);
  const [allow, setAllow] = useState(false);
  return (
    <PlaylistContext.Provider
      value={{
        items,
        setItems,
        count,
        setCount,
        allow,
        setAllow,
      }}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export { PlaylistContext, PlaylistContextProvider };
