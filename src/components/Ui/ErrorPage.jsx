import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let errorStatus;
  let errorStatusText;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 500;
    errorStatusText = "Internal Server Error";
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">
        Error {errorStatus}
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        {errorStatusText}
      </h2>
      <p className="text-gray-600 mb-8">
        عذراً، الصفحة التي تحاول الوصول إليها غير موجودة .
      </p>
      <Link
        to="/"
        replace={true}
        className="px-6 py-3 bg-main text-white rounded-lg hover:bg-main/35 transition duration-300"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default ErrorPage;
