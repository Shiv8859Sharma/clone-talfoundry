import { SignalSlashIcon } from "@heroicons/react/24/outline";
import useNetworkStatus from "../../utills/customHooks";

const ConnectionLost = () => {
  useNetworkStatus();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Network issue</h2>
            <SignalSlashIcon className="w-full md:w-96 mx-auto" />
            {/* <img src="/htdocs_error/something-lost.png"  alt="Lost Page Illustration" /> */}
            <h1 className="text-3xl font-bold mt-8 mb-4"></h1>
            <p className="text-lg mb-8">
              Oops! It seems like you've lost your internet connection. Please check your network connection and try again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionLost;

