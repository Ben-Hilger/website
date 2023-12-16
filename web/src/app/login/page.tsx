import ActionButton from "../components/action.button";
import { ButtonType } from "../components/action.button";
import Navigation from "../components/navigation";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navigation />
      <div className="w-50">
        <div className="w-100 flex flex-col items-center justify-between">
          <h1 className="title">Login</h1>
        </div>
        <div className="mb-3 mt-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
        </div> 
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
        </div>
        <div className="flex w-100 align-items justify-center">
          <div className="w-50 flex flex-col">
            <ActionButton
              className="mb-3"
              label="Log In"
              onClick={() => {}}
              type={ ButtonType.Primary }
            />
            <ActionButton 
              label="Create Account (Under Construction)"
              onClick={() => {}}
              type={ ButtonType.Primary }
            />
          </div>
        </div>
      </div>
    </main>
  );
}