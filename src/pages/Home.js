import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3003/users').then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className='w-full h-full flex flex-col px-10 py-8'>
      <div className='w-full flex flex-col min-h-[50vh] justify-center items-center'>
        <h1 className='text-black text-3xl font-semibold '>Home Page</h1>
        <table className='w-[90%] flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5'>
          <thead className='border-b bg-gray-800 '>
            <tr>
              <th
                scope='col'
                className='text-sm font-medium text-white px-6 py-4'
              >
                #
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-white px-6 py-4'
              >
                Name
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-white px-6 py-4'
              >
                Email
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-white px-6 py-4'
              >
                Phone
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-white px-6 py-4'
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class='flex-1 sm:flex-none'>
            {users.map((user, index) => (
              <tr
                className='bg-white border-b border-b-slate-900 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0'
                key={index}
              >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  {index}
                </td>
                <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                  {user.name}
                </td>
                <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                  {user.email}
                </td>
                <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                  {user.phone}
                </td>
                <td className='flex justify-center items-center space-x-4 mt-1 p-4 '>
                  <button className='text-white bg-slate-700 hover:border hover:border-black hover:bg-transparent hover:text-black font-light px-6 py-2 rounded-lg '>
                    View
                  </button>
                  <button className='text-white bg-blue-700 hover:border hover:border-blue-700  hover:bg-transparent hover:text-blue-700 font-light px-6 py-2 rounded-lg'>
                    Edit
                  </button>
                  <button className='text-white bg-red-700 hover:border hover:border-red-900  hover:bg-transparent hover:text-red-700  font-light px-6 py-2 rounded-lg'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
