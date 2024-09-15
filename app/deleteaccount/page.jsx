import React from 'react';

const DeleteRequestPage = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
      <div className='max-w-3xl w-full bg-white rounded-lg shadow-md p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>
          Data Deletion Request
        </h1>

        <p className='text-gray-600 mb-4'>
          At <strong>Farm Price 24</strong>, we value your privacy. While our
          app does not require personal information for use, we may collect
          non-personal data such as device information and usage analytics. If
          you would like to request the deletion of any data that may have been
          collected, please follow the instructions below.
        </p>

        <h2 className='text-2xl font-semibold text-gray-700 mt-8 mb-4'>
          What Data Can Be Deleted?
        </h2>
        <ul className='list-disc list-inside text-gray-600 mb-4'>
          <li>Device information (e.g., device model, operating system)</li>
          <li>Usage data (e.g., app activity, pages visited)</li>
          <li>General geographic information (e.g., city or country)</li>
        </ul>

        <h2 className='text-2xl font-semibold text-gray-700 mt-8 mb-4'>
          How to Request Data Deletion
        </h2>
        <p className='text-gray-600 mb-4'>
          If you would like to request the deletion of your non-personal data,
          please follow these steps:
        </p>
        <ol className='list-decimal list-inside text-gray-600 mb-6'>
          <li>
            Email us at <strong>farmprice24@gmail.com</strong>.
          </li>
          <li>
            Include "<strong>Data Deletion Request</strong>" in the subject
            line.
          </li>
          <li>
            Provide your <strong>device ID</strong> (if known) and a brief
            description of your request.
          </li>
        </ol>

        <h2 className='text-2xl font-semibold text-gray-700 mt-8 mb-4'>
          What Happens After a Deletion Request?
        </h2>
        <p className='text-gray-600 mb-4'>
          Once your request is confirmed, we will delete any non-personal data
          associated with your device and usage. You will receive a confirmation
          that your data has been deleted. Please note that data deletion may
          take up to <strong>[30 days]</strong> to be fully removed from our
          systems.
        </p>

        <h2 className='text-2xl font-semibold text-gray-700 mt-8 mb-4'>
          Automatic Data Deletion
        </h2>
        {/* <p className='text-gray-600 mb-4'>
          All non-personal data collected is automatically deleted after{' '}
          <strong>[90 days]</strong> from the collection date.
        </p> */}

        <h2 className='text-2xl font-semibold text-gray-700 mt-8 mb-4'>
          Contact Us
        </h2>
        <p className='text-gray-600'>
          If you have any questions or need further assistance, please contact
          us at:
        </p>
        <ul className='list-none text-gray-600 mt-4'>
          <li>
            <strong>Email:</strong> farmprice24@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeleteRequestPage;
