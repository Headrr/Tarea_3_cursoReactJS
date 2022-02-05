import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "../assets/styles/App.scss";
import Layout from "./../components/Layout";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary"

const Characters = lazy(() => import("../containers/Characters"));
const Favorites = lazy(() => import("../containers/Favorites"));
const NotFound = lazy(() => import("../components/NotFound"));
const FalseError = lazy(() => import("../components/FalseError"));

const App = () => (
  <BrowserRouter>
  <ErrorBoundary>
    <Layout>
      <Switch>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Route exact path="/" component={Characters} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/falseError" component={FalseError} />
          <Route path="/404" component={NotFound} />
        </Suspense>
      </Switch>
    </Layout>
    <Redirect from="*" to="/404" />
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
