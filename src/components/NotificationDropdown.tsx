import React from 'react';

const NotificationDropdown: React.FC = () => {
  return (
    <div className="absolute mt-2 w-80 right-0 my-4 max-w-sm text-base list-none bg-white  divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl" aria-labelledby="dropdownNotificationButton">
      <div className="block py-2 px-4 rounded-t-lg text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
        Notifications
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        <a href="#" className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
          <div className="flex-shrink-0">
            <img className="rounded-full w-11 h-11" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
              <svg className="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
            </div>
          </div>
          <div className="w-full pl-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              New message from <span className="font-semibold text-gray-900 dark:text-white">Nova User</span>: "Message from user"
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
          </div>
        </a>
        <a href="#" className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
          <div className="flex-shrink-0">
            <img className="rounded-full w-11 h-11" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
              <svg className="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
              </svg>
            </div>
          </div>
          <div className="w-full pl-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">Jese leos</span> and <span className="font-medium text-gray-900 dark:text-white">5 others</span> started following you.
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
          </div>
        </a>
        {/* Add more notification items here as needed */}
      </div>
      <a href="#" className="block py-2 text-sm rounded-b-lg font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline">
        <div className="inline-flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
          </svg>
          View all
        </div>
      </a>
    </div>
  );
};

export default NotificationDropdown;