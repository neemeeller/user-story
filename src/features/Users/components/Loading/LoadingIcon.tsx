import logo from 'icons/logo.svg';

export const LoadingIcon = () => (
  <div className="flex justify-center items-center min-h-full w-full">
    <div className="animate-spin inline-block w-16 h-16 border-4 rounded-full" role="status">
      <img src={logo} className="" alt="loading-logo" />
    </div>
  </div>
);
