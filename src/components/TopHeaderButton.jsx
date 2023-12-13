import React from 'react';

const TopHeaderButton = ({title}) => {
    return (
      <button
        type="button"
        className="text-white bg-gradient-to-br from-emerald-400 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {title}
      </button>
    );
};

export default TopHeaderButton;