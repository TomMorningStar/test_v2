import React from "react";

import arrow from "../assets/arrow.svg";
import { fetchPosts } from "../redux/slices/posts.Slice";
import { useAppDispatch } from "../redux/store";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const onClickSortByTitle = () => {
    dispatch(fetchPosts({ searchTitle: "&_sort=title&_order=asc" }));
  };
  const onClickSortByBody = () => {
    dispatch(fetchPosts({ searchTitle: "&_sort=body&_order=asc" }));
  };
  const onClickSortByUserId = () => {
    dispatch(fetchPosts({ searchTitle: "&_sort=userId&_order=asc" }));
  };

  return (
    <thead>
      <tr>
        <th onClick={onClickSortByUserId} className="itemId">
          ID <img src={arrow} alt="" />
        </th>
        <th onClick={onClickSortByTitle} className="title">
          Заголовок
          <img src={arrow} alt="" />
        </th>
        <th onClick={onClickSortByBody} className="desc">
          Описание <img src={arrow} alt="" />
        </th>
      </tr>
    </thead>
  );
};

export default Header;
