import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import Character from "./Character";
import Empty from "./Empty";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";

const FavoriteList = (props) => {
  const { favoriteCharacters } = props;
  const [localFav, setLocalFav] = useLocalStorage("LocalFav", "");

  useEffect(() => {
    if (favoriteCharacters.length > 0) {
      setLocalFav(favoriteCharacters);
    }
    else {
      setLocalFav(localFav)
    }

    console.log(localFav);
  }, [localFav, favoriteCharacters]);

  return (
      <div className="characterList">
      {!localFav.length ? (
        <Empty />
      ) : (
        localFav.map((character) => (
          <Character key={character.data.id} data={character.data} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

export default connect(mapStateToProps, null)(FavoriteList);
