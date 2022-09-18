import { useContext } from 'react';
import AuthContext from '../../../../context/auth/AuthContext';
import styles from './AuthBtn.module.css';

export interface AuthBtnTemplateProps
  extends React.ComponentPropsWithoutRef<'button'> {}

const AuthBtnTemplate: React.FC<AuthBtnTemplateProps> = ({
  className,
  ...buttonProps
}) => {
  const { authenticated, login, logOut } = useContext(AuthContext);

  return (
    <button
      onClick={authenticated ? logOut : login}
      className={`${styles.container} ${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`}
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
};

export default AuthBtnTemplate;
