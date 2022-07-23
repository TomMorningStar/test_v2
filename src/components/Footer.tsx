import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { fetchPosts } from "../redux/slices/posts.Slice";

import { useAppDispatch } from "../redux/store";

type IFooterProps = {
  skipPosts: number;
  setSkipPosts: (num: number) => void;
};

const Footer: React.FC<IFooterProps> = ({ skipPosts, setSkipPosts }) => {
  const pageLists = [1, 2, 3, 4, 5];

  const [pageCount, setPageCount] = React.useState<number>(1);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // Клик на "Далее"
  const onClickFurther = () => {
    setPageCount(pageCount + 1);
    navigate(`/page/${pageCount + 1}`);
    setSkipPosts(skipPosts + 10);
  };

  // Клик на "Назад"
  const onClickBack = () => {
    setPageCount(pageCount - 1);
    navigate(`/page/${pageCount - 1}`);
    setSkipPosts(skipPosts - 10);
  };

  // Клик на элементы пагинации
  const onClickHandlePage = (num: number) => {
    navigate(String(`/page/${num}`));
    setPageCount(num);

    switch (num) {
      case 1:
        setSkipPosts(0);
        return dispatch(fetchPosts({ skipPosts: 0 }));
      case 2:
        setSkipPosts(10);
        return dispatch(fetchPosts({ skipPosts: 10 }));
      case 3:
        setSkipPosts(20);
        return dispatch(fetchPosts({ skipPosts: 20 }));
      case 4:
        setSkipPosts(30);
        return dispatch(fetchPosts({ skipPosts: 30 }));
      default:
        setSkipPosts(40);
        return dispatch(fetchPosts({ skipPosts: 40 }));
    }
  };

  React.useEffect(() => {
    dispatch(fetchPosts({ skipPosts }));
  }, [skipPosts]);

  return (
    <footer>
      <button onClick={onClickBack} disabled={pageCount === 1}>
        Назад
      </button>
      <ul>
        {pageLists.map((el) => {
          return (
            <li
              onClick={() => onClickHandlePage(el)}
              className={`/page/${el}` === location.pathname ? "active" : ""}
              key={el}
            >
              {el}
            </li>
          );
        })}
      </ul>
      <button onClick={onClickFurther} disabled={pageCount === 5}>
        Далее
      </button>
    </footer>
  );
};

export default Footer;
