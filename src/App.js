import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from './components/UserProfile';

import { useSelector } from 'react-redux';


function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const isAuthenticatedRender = (
    <>
      <Header />
      <UserProfile/>
      <Counter />
    </>
  );

  const notAuthenticatedRender = (
    <>
      <Header/>
      <Auth/>
    </>
  )

  return (
    <>
      {isAuthenticated && isAuthenticatedRender}
      {!isAuthenticated && notAuthenticatedRender}
    </>
  );
}

export default App;
