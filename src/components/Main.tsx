import React from "react";

import Header from "./Header";
import Content from "./Content";

type IMainProps = {
  value: string;
};

const Main: React.FC<IMainProps> = ({ value }) => {
  return (
    <main>
      <table>
        <Header />
        <Content value={value} />
      </table>
    </main>
  );
};

export default Main;
