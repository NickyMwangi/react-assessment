import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { setPageTitle } from '../../store/slice/theme-config-slice';
import { authRoutes } from '../../routes/app-routes';
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
import { BiCard, BiPhone, BiUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IRegisterModel } from '../../models';
import { useForm } from 'react-hook-form';
import { accountEndpoints } from '../../endpoints';
import { registerSchema, CustomToastMsg } from '../../utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAxiosCrud } from '../../hooks';
import Select from 'react-select';
import IconLoader from '../../components/loaders/icon-loader';

export const Register = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    dispatch(setPageTitle('Register'));
  });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const { response, error, isLoading, axiosCrud } = useAxiosCrud();
  const { response: jbResp, isLoading: jbIsLoading, axiosCrud: jbCrud } = useAxiosCrud();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors }
  } = useForm<IRegisterModel>({
    resolver: yupResolver(registerSchema)
  });

  const onSubmitHandler = async (data: IRegisterModel) => {
    setLoading(true);
    await axiosCrud({
      method: 'post',
      url: accountEndpoints.register(),
      requestConfig: {
        ...data
      }
    });
  };
  const jobGroups = useMemo(() => {
    return jbResp.data;
  }, [jbIsLoading]);

  useEffect(() => {
    if (!isLoading) {
      let toastMsg = 'An error has occurred. Please try again';
      if (error) toastMsg = error.response.data.message;
      else if (response) {
        toastMsg = toastMsg = response.message;
        reset();
        setLoading(false);
        navigate(authRoutes.login());
      }
      toast({
        id: 'register-toast',
        position: 'top-right',
        render: ({ onClose }) => <CustomToastMsg onClose={onClose} msg={toastMsg} title="Registration" />
      });
    }
    getJobGroups();
  }, [isLoading]);

  const getJobGroups = () => {
    jbCrud({
      method: 'get',
      url: accountEndpoints.jobGroups('Job group')
    });
  };

  const onJobGroupChange = (selectedOption: any) => {
    setValue('jobGroup', selectedOption.value);
  };

  return (
    <div className="w-full max-w-[440px] lg:mt-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold !leading-snug text-primary md:text-4xl">Register Now.</h1>
        <p className="text-base font-semibold leading-normal text-white-dark">
          Enter the details below as they appear in your National ID.
        </p>
      </div>
      <form className="space-y-5 dark:text-white" onSubmit={handleSubmit(onSubmitHandler)}>
        <VStack align={'stretch'}>
          <FormControl isRequired isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Full name</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BiUser />
              </InputLeftElement>
              <Input id="name" {...register('name')} placeholder="Enter valid Full name" />
            </InputGroup>
            {errors.name ? (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            ) : (
              <FormHelperText>As they appear in your National ID</FormHelperText>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BiUser />
              </InputLeftElement>
              <Input id="email" {...register('email')} placeholder="Enter valid Full name" />
            </InputGroup>
            {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.nationalID}>
            <FormLabel htmlFor="nationalID">National ID</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BiCard />
              </InputLeftElement>
              <Input id="nationalID" {...register('nationalID')} placeholder="Enter valid National ID" />
            </InputGroup>
            {errors.nationalID && <FormErrorMessage>{errors.nationalID.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.phoneNumber}>
            <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BiPhone />
              </InputLeftElement>
              <Input id="phoneNumber" {...register('phoneNumber')} placeholder="Enter valid phone Number" />
            </InputGroup>
            {errors.phoneNumber && <FormErrorMessage>{errors.phoneNumber.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.jobGroup}>
            <FormLabel htmlFor="jobGroup">Job Group</FormLabel>
            <Select
              className="dark:text-white-dark/80 dark:bg-dark-dark-light"
              onChange={onJobGroupChange}
              value={jobGroups && jobGroups.find((n: any) => n.value === getValues('jobGroup'))}
              placeholder="Select an option"
              options={jobGroups}
            />
            {errors.jobGroup && <FormErrorMessage>{errors.jobGroup.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <RiLockPasswordLine />
              </InputLeftElement>
              <Input
                type={show ? 'text' : 'password'}
                id="password"
                {...register('password')}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'ghost'} h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.confirmPassword}>
            <FormLabel htmlFor="ConfirmPassword">Confirm Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <RiLockPasswordLine />
              </InputLeftElement>
              <Input
                type={confirmShow ? 'text' : 'password'}
                id="ConfirmPassword"
                {...register('confirmPassword')}
                placeholder="Enter confirm password"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'ghost'} h="1.75rem" size="sm" onClick={() => setConfirmShow(!confirmShow)}>
                  {confirmShow ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.confirmPassword && <FormErrorMessage>{errors.confirmPassword.message}</FormErrorMessage>}
          </FormControl>
        </VStack>
        <button
          type="submit"
          className="btn btn-gradient bg-primary-light !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(128 93 202,.44)]">
          {loading && (
            <IconLoader className="animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0" />
          )}
          Register
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
