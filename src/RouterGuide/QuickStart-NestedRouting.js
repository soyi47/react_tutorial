import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function Example2() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          {/* The route '/topics' loads the 'Topics' component, 
                        which renders any further <Route>'s conditionally on the paths :id value */}
          <Route path="/topics">
            <Topics />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();
  console.log(match);
  /* What is 'useRouteMatch'...? 
        - takes no argument and returns the match object of the current <Route>
            => 현재 <Route>의 정보를 가져온다고 생각할 수 있음.
        - takes a single argument, which is identical to props arguments of matchPath.
            It can be either a pathnames as a string (like the example above) 
            or and object with the mathcing props that Route accepts. */

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
          {/* match.url => 현재 라우터의 URL, 실제 매칭된 문자열 URL. 중첩 <Links>를 만드는데 유용함. */}
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
        <li>
          <Link to={`${match.url}`}>Back to List</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
                that build on the /topics URL path. You can think of the 
                2nd <Route> here as an "index" page for all topics, or
                the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        {/* '{match.path}/something' 패턴이 모두 매칭되어
                    ':id'에 해당되는 parameter는 모두 match.params에서 읽어올 수 있음.*/}
        <Route path={match.path}>
          <h4>Please select a topic.</h4>
        </Route>
        {/* match.path => 매칭에 사용된 경로 패턴. 중첩 <Routes>를 만드는데 유용함. */}
      </Switch>
    </div>
  );
}

function Topic() {
  console.log(useParams());
  let { topicId } = useParams();
  /* What is useParams()...? 
        - 현재 <Route>의 match.params에 접근하기 위해 사용함.
        - URL 파라미터의 key-value 쌍으로 이루어진 객체를 반환함. */

  return <h4>Requested topic ID: {topicId}</h4>;
}
