import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/slice/theme-config-slice';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack
} from '@chakra-ui/react';
import { authRoutes } from '../../routes/app-routes';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const ResetPassword = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('reset-password'));
  });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

  const submitForm = () => {
    navigate('/');
  };

  return (
    <div className="w-full max-w-[440px] lg:mt-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold !leading-snug text-primary md:text-4xl">Reset Password</h1>
        <p className="text-base font-semibold leading-normal text-white-dark">Enter your new password</p>
      </div>
      <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
        <VStack>
          <FormControl>
            <FormLabel htmlFor="Password">Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <RiLockPasswordLine />
              </InputLeftElement>
              <Input type={show ? 'text' : 'password'} id="Password" name="Password" placeholder="Enter password" />
              <InputRightElement width="4.5rem">
                <Button variant={'ghost'} h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="ConfirmPassword">Confirm Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <RiLockPasswordLine />
              </InputLeftElement>
              <Input
                type={confirmShow ? 'text' : 'password'}
                id="ConfirmPassword"
                name="ConfirmPassword"
                placeholder="Enter confirm password"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'ghost'} h="1.75rem" size="sm" onClick={() => setConfirmShow(!confirmShow)}>
                  {confirmShow ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>

        <button
          type="submit"
          className="btn btn-gradient bg-primary-light !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(128 93 202,.44)]">
          Sign in
        </button>
      </form>

      <div className="text-center dark:text-white mt-2">
        Don't have an account ?&nbsp;
        <Link
          to={authRoutes.login()}
          className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};
