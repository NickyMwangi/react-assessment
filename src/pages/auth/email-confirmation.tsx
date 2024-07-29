import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/slice/theme-config-slice';
import { authRoutes } from '../../routes/app-routes';
import { Link } from 'react-router-dom';

export const AccountConfirmation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('account-confirmation'));
  });

  return (
    <div className="w-full max-w-[440px] lg:mt-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold !leading-snug text-primary md:text-4xl">Account confirmation</h1>
        <p className="text-base font-semibold leading-normal text-white-dark">Account confirmation was successful.</p>
      </div>

      <div className="text-center dark:text-white mt-2">
        Already have an account ?&nbsp;
        <Link
          to={authRoutes.login()}
          className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};
