import { MdCheckCircle, MdSettings } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import { List, ListIcon, ListItem } from '@chakra-ui/react';

export const AuthLayout = () => {
  return (
    <div>
      <div className="absolute inset-0">
        <img src="/images/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
      </div>
      <div className="relative flex min-h-screen items-center justify-center bg-[url(/images/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
        <img
          src="/images/coming-soon-object1.png"
          alt="image"
          className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"
        />
        <img src="/images/coming-soon-object2.png" alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
        <img src="/images/coming-soon-object3.png" alt="image" className="absolute right-0 top-0 h-[300px]" />
        <img src="/images/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />
        <div className="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0">
          <div className="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]">
            <div className="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"></div>
            <div className="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
              <Link to="/" className="w-48 block lg:w-72 ms-10">
                <img src="/logo.svg" alt="Logo" className="w-full" />
              </Link>
              <div className="text-center mt-24 hidden w-full max-w-[430px] lg:block">
                <h1 className="text-center text-3xl font-extrabold !leading-snug text-primary md:text-4xl">
                  Nickson Assess Portal
                </h1>
                <p>For prooof of concept;</p>
                <List spacing={3} className="text-start mt-2">
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Users registration and login.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    User View Orders.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    User Clock.
                  </ListItem>
                  {/* You can also use custom icons from react-icons */}
                  <ListItem>
                    <ListIcon as={MdSettings} color="green.500" />
                    Others
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
            <div className="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full">
              <Link to="/" className="text-center w-84 block lg:hidden">
                <img src="/logo.svg" alt="Logo" className="mx-auto w-84" />
              </Link>
              <div className="dropdown ms-auto w-max"></div>
            </div>

            <Outlet />

            <p className="absolute bottom-6 w-full text-center dark:text-white">
              © {new Date().getFullYear()} Nickson Mwangi All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
