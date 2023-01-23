export const Alert = ({ message }: { message: string }) =>
  message ? (
    <div className="bg-yellow-100 rounded-lg py-5 px-6 mb-4 my-3 text-base text-yellow-700" role="alert">
      {message}
    </div>
  ) : null;
