import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const logOutHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.logout());
  }

  const isAuthenticatedRender = (
    <>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && isAuthenticatedRender}
    </header>
  );
};

export default Header;
