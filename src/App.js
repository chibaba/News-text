import React, {useState, useCallback} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Auth    from  './authors/pages/Auth'
import UpdateNews from './news/pages/UpdateNews'
import NewsList from './news/pages/AuthorsList';
import { AuthContext } from './common/context/auth-context'
import Authors from './authors/pages/Authors';
import NewNews  from './news/pages/NewNews';
import MainNavigation from './common/components/Navigation/MainNavigation';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, [])

  const logout = useCallback(() => {
   setIsLoggedIn(false);
 }, [])
 let routes;
   if(isLoggedIn) {
     routes = (
      <Switch>
      <Route path="/" exact>
        <Authors/>  
      </Route>
      <Route path="/:authorId/news" exact>
        <NewsList />
      </Route>
      <Route path="/News/New" exact>
        <NewNews/>  
      </Route>
      <Route path="/news/:newsId">
          <UpdateNews/>
        </Route>
      <Redirect to="/" />
        </Switch>
     );
   } else {
     routes = (
          <Switch>
        <Route path="/" exact>
         <Authors />
        </Route>
        <Route path="/:authorId/news" exact>
        <NewsList />
      </Route>
      <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to ="/auth" />
       </Switch>
     )
   }
   return (
    <AuthContext.Provider value={ {isLoggedIn: isLoggedIn, login: login, logout:logout}}>
    <Router>

    <main> 
    <MainNavigation />
  {routes}
 </main>

</Router>
</AuthContext.Provider>
)

}
export default App;
