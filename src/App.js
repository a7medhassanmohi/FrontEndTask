import { Route, Routes } from "react-router-dom";
import Container from "./component/container/Container";
import ErrorPage from "./component/errorPage/ErrorPage";
import Nav from "./component/nav/Nav";

import AllUser from "./component/allUser/AllUser";
import Posts from "./component/posts/Posts";
function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<AllUser />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route
            path="*"
            element={
              <ErrorPage message="We can't find the page you're looking for" />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
