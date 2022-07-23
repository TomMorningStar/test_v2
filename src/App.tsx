import React from "react";

import Main from "./components/Main";
import Footer from "./components/Footer";

import Search from "./components/Search";

import { useAppDispatch } from "./redux/store";
import { fetchPosts } from "./redux/slices/posts.Slice";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [skipPosts, setSkipPosts] = React.useState(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Когда был самый первый рендер, вшиваем путь
  React.useEffect(() => {
    navigate("/page/1");
  }, []);

  // Когда ведем поиск в поисковике
  React.useEffect(() => {
    dispatch(fetchPosts({ value }));
  }, [value]);

  return (
    <div className="App">
      <Search setValue={setValue} value={value} />
      <Main value={value} />
      <Footer skipPosts={skipPosts} setSkipPosts={setSkipPosts} />
    </div>
  );
};

export default App;
