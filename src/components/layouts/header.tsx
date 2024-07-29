import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleSidebar, toggleTheme } from '../../store/slice/theme-config-slice';
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, Button, Box } from '@chakra-ui/react';
import { BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';
import { FaDesktop } from 'react-icons/fa';
import { LuTimer, LuUser } from 'react-icons/lu';
import { getUserData } from '../../endpoints';
import { authRoutes, defaultRoute, otherRoutes } from '../../routes/app-routes';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add('active');
      const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove('active');
      }
      const ul: any = selector.closest('ul.sub-menu');
      if (ul) {
        let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
        if (ele) {
          ele = ele[0];
          setTimeout(() => {
            ele?.classList.add('active');
          });
        }
      }
    }
  }, [location]);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  const user = useMemo(() => {
    return getUserData();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate(authRoutes.login());
    window.location.reload();
  };

  return (
    <header className={themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}>
      <div className="shadow-sm">
        <div className="relative bg-primary text-white flex w-full items-center px-5 py-1 dark:bg-primary-light">
          <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
            <Link to={defaultRoute} className="main-logo flex items-center shrink-0">
              <img className="w-30 h-10 ltr:-ml-1 rtl:-mr-1 inline" src="/images/logo.png" alt="logo" />
              <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">
                Nickson Assess Portal
              </span>
            </Link>
            <button
              type="button"
              className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
              onClick={() => {
                dispatch(toggleSidebar());
              }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="ltr:mr-2 rtl:ml-2 hidden sm:block"></div>
          <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
            <div>
              {themeConfig.theme === 'light' ? (
                <button
                  className={`${
                    themeConfig.theme === 'light' &&
                    'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('dark'));
                  }}>
                  <BsSun />
                </button>
              ) : (
                ''
              )}
              {themeConfig.theme === 'dark' && (
                <button
                  className={`${
                    themeConfig.theme === 'dark' &&
                    'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('system'));
                  }}>
                  <FiMoon />
                </button>
              )}
              {themeConfig.theme === 'system' && (
                <button
                  className={`${
                    themeConfig.theme === 'system' &&
                    'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('light'));
                  }}>
                  <FaDesktop />
                </button>
              )}
            </div>

            <Popover>
              <PopoverTrigger>
                <img
                  className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                  src="/images/user.png"
                  alt="userProfile"
                />
              </PopoverTrigger>

              <PopoverContent>
                <PopoverArrow />
                <div className="dropdown">
                  <ul className="text-dark dark:text-white-dark !py-0 font-semibold dark:text-white-light/90">
                    <li>
                      <div className="flex items-center px-4 py-4">
                        <img className="rounded-md w-10 h-10 object-cover" src="/images/user.png" alt="userProfile" />
                        <div className="ltr:pl-4 rtl:pr-4 truncate">
                          <h4 className="text-base">
                            {user ? user.name : 'Nickson Inc'}
                            {user
                              ? user.jobGroup && (
                                  <span className="text-xs bg-success-light rounded text-success px-1 ltr:ml-2 rtl:ml-2">
                                    {user.jobGroup}
                                  </span>
                                )
                              : 'Developer'}
                          </h4>
                          <button
                            type="button"
                            className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                            {user ? user.email : 'Niclausel@gmail.com'}
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to={defaultRoute} className="dark:hover:text-white">
                        <svg
                          className="ltr:mr-2 rtl:ml-2 shrink-0"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                          <path
                            opacity="0.5"
                            d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to={defaultRoute} className="dark:hover:text-white">
                        <svg
                          className="ltr:mr-2 rtl:ml-2 shrink-0"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            opacity="0.5"
                            d="M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <g opacity="0.5">
                            <path
                              d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z"
                              fill="currentColor"
                            />
                            <path
                              d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                              fill="currentColor"
                            />
                            <path
                              d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                        Lock Screen
                      </Link>
                    </li>
                    <li className="border-t border-white-light dark:border-white-light/10">
                      <button className="btn btn-outline-primary !py-3" onClick={() => logout()}>
                        <svg
                          className="ltr:mr-2 rtl:ml-2 rotate-90 shrink-0"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.5"
                            d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* horizontal menu */}
        <ul className="horizontal-menu hidden py-1 font-semibold px-4 lg:space-x-1 xl:space-x-1 rtl:space-x-reverse bg-white border-t border-[#ebedf2] dark:border-[#191e3a] dark:bg-black text-black dark:text-white-">
          <li className="menu nav-item relative">
            <Button variant={'ghost'} className="nav-link">
              <Box className="flex items-center dark:text-white-dark">
                <LuTimer />
                <span className="px-0.5 ">
                  <NavLink to={defaultRoute}>Timer</NavLink>
                </span>
              </Box>
            </Button>
          </li>
          <li className="menu nav-item relative">
            <Button variant={'ghost'} className="nav-link">
              <Box className="flex items-center dark:text-white-dark">
                <LuUser />
                <span className="px-0.5 ">
                  <NavLink to={otherRoutes.delivery()}>Delivery</NavLink>
                </span>
              </Box>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
