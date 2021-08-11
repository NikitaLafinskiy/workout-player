import { React, useState, createContext } from 'react';

const PlaylistContext = createContext();

const PlaylistContextProvider = (props) => {
  const [items, setItems] = useState(null);
  const [intermissionItems, setIntermissionItems] = useState(null);
  const [allow, setAllow] = useState(false);
  return (
    <PlaylistContext.Provider
      value={{
        items,
        setItems,
        allow,
        setAllow,
        intermissionItems,
        setIntermissionItems,
      }}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export { PlaylistContext, PlaylistContextProvider };
