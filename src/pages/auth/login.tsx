import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/slice/theme-config-slice';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
  VStack
} from '@chakra-ui/react';
import { authRoutes, defaultRoute } from '../../routes/app-routes';
import { BiCard } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomToastMsg, loginSchema } from '../../utils';
import { accountEndpoints, setToken, setUserData } from '../../endpoints';
import { useForm } from 'react-hook-form';
import { useAxiosCrud } from '../../hooks';
import IconLoader from '../../components/loaders/icon-loader';

type loginInputs = {
  username: number;
  password: string;
};

export const Login = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { response, error, isLoading, axiosCrud } = useAxiosCrud();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginInputs>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmitHandler = (data: loginInputs) => {
    setLoading(true);
    axiosCrud({
      method: 'post',
      url: accountEndpoints.login(),
      requestConfig: {
        ...data
      }
    });
  };

  useEffect(() => {
    dispatch(setPageTitle('Login'));
    let toastMsg = 'An error has occurred. Please try again';
    if (!isLoading) {
      if (error) toastMsg = error.response.data.message;
      else if (response) {
        toastMsg = toastMsg = response.message;
        setUserData(response.user);
        setToken(response.token);
        navigate(defaultRoute);
      }
      toast({
        id: 'register-toast',
        position: 'top-right',
        render: ({ onClose }) => <CustomToastMsg onClose={onClose} msg={toastMsg} title="Registration" />
      });
      setLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="w-full max-w-[440px] lg:mt-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold !leading-snug text-primary md:text-4xl">Sign in</h1>
        <p className="text-base font-semibold leading-normal text-white-dark">
          Enter your national ID and password to login
        </p>
      </div>
      <form className="space-y-5 dark:text-white" onSubmit={handleSubmit(onSubmitHandler)}>
        <VStack>
          <FormControl isRequired isInvalid={!!errors.username}>
            <FormLabel htmlFor="username">National ID</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BiCard />
              </InputLeftElement>
              <Input id="username" {...register('username')} placeholder="Énter a valid national ID" />
            </InputGroup>
            {errors.username ? (
              <FormErrorMessage>{errors.username.message}</FormErrorMessage>
            ) : (
              <FormHelperText>Required</FormHelperText>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel htmlFor="Password">Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <RiLockPasswordLine />
              </InputLeftElement>
              <Input
                id="password"
                type={show ? 'text' : 'password'}
                {...register('password')}
                placeholder="Enter your password"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'ghost'} h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password ? (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            ) : (
              <FormHelperText>Required</FormHelperText>
            )}
          </FormControl>
        </VStack>

        <div>
          <Link to={authRoutes.forgotPassword()} className="flex cursor-pointer items-center">
            <span className="text-white-dark">Forgot password?</span>
          </Link>
        </div>
        <button
          type="submit"
          className="btn btn-gradient bg-primary-light !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(128 93 202,.44)]">
          {loading && (
            <IconLoader className="animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0" />
          )}
          Sign in
        </button>
      </form>

      <div className="text-center dark:text-white mt-2">
        Don't have an account ?&nbsp;
        <Link
          to={authRoutes.register()}
          className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};
