import { useState } from "react";

import Game from "./pages/Game";
import Settings from "./pages/Settings";
import { TPage } from "./interfaces/types";

const App = () => {
  const [page, setPage] = useState<TPage>("game");

  const onChangePage = (newPage: TPage) => {
    setPage(newPage);
  };

  if (page === "settings") {
    return <Settings onChangePage={onChangePage} />;
  }
  return <Game onChangePage={onChangePage} />;
};

export default App;
