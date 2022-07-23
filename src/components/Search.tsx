import React from "react";
import { Link } from "react-router-dom";

import search from "../assets/search.svg";
import { fetchPosts } from "../redux/slices/posts.Slice";
import { useAppDispatch } from "../redux/store";

type SearchPropsType = {
  setValue: (e: string) => void;
  value: string;
};

const Search: React.FC<SearchPropsType> = ({ value, setValue }) => {
  const dispatch = useAppDispatch();

  const onClickBack = () => {
    dispatch(
      fetchPosts({
        value: "",
        skipPosts: 0,
        searchTitle: "",
        searchUserId: 0,
        searchBody: "",
      })
    );
  };

  return (
    <div className="header">
      <div className="searchItems">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Поиск"
          type="text"
        />
        <button>
          <img src={search} alt="" />
        </button>
      </div>

      <Link onClick={onClickBack} to="/page/1" className="exit">
        Назад
      </Link>
    </div>
  );
};

export default Search;
