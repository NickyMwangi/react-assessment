import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/slice/theme-config-slice';
import { FormControl, FormLabel, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import { authRoutes } from '../../routes/app-routes';
import { BiCard } from 'react-icons/bi';

export const ForgotPasssword = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('forgot-password'));
  });
  const navigate = useNavigate();

  const submitForm = () => {
    navigate('/');
  };

  return (
    <div className="w-full max-w-[440px] lg:mt-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold !leading-snug text-primary md:text-4xl">Forgot Password</h1>
        <p className="text-base font-semibold leading-normal text-white-dark">
          Enter your national ID to send a password reset url.
        </p>
      </div>
      <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
        <VStack>
          <FormControl>
            <FormLabel htmlFor="nationalID">National ID</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BiCard />
              </InputLeftElement>
              <Input id="nationalID" type="number" name="nationalID" placeholder="Enter valid National ID" />
            </InputGroup>
          </FormControl>
        </VStack>

        <button
          type="submit"
          className="btn btn-gradient bg-primary-light !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(128 93 202,.44)]">
          Send
        </button>
      </form>

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
