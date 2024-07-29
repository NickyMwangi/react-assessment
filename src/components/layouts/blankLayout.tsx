import { PropsWithChildren } from 'react';
import App from '../../App';

export const BlankLayout = ({ children }: PropsWithChildren) => {
  return (
    <App>
      <div className="text-black dark:text-white-dark min-h-screen">{children} </div>
    </App>
  );
};
