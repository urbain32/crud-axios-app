import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3003/users').then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div class=' md:ml-48  mt-10 overflow-x-auto relative sm:rounded-lg'>
      <h1 className='flex justify-center items-center text-2xl mb-5 font-bold'>ALL USERS</h1>
      <table class=' text-sm text-left text-white  '>
        <thead class='border bg-black'>
          <tr>
            <th scope='col' class='py-3 px-6'>
              #
            </th>
            <th scope='col' class='py-3 px-6'>
              Name
            </th>
            <th scope='col' class='py-3 px-6'>
              Email
            </th>
            <th scope='col' class='py-3 px-6'>
              Phone
            </th>
            <th scope='col' class='py-3 px-6'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              className='bg-white border-b border-b-slate-900 hover:bg-gray-200 '
              key={index}
            >
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 '>
                {index}
              </td>
              <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap '>
                {user.name}
              </td>
              <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap '>
                {user.email}
              </td>
              <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap '>
                {user.phone}
              </td>
              <td className='flex justify-center items-center space-x-4 mt-1 p-4 '>
                <Link to={`/users/${user.id}`}>
                  <button className='text-white bg-slate-700 hover:border hover:border-black hover:bg-transparent hover:text-black font-light px-6 py-2 rounded-lg '>
                    <TbListDetails />
                  </button>
                </Link>
                <button className='text-white bg-blue-700 hover:border hover:border-blue-700  hover:bg-transparent hover:text-blue-700 font-light px-6 py-2 rounded-lg'>
                  <FaEdit />
                </button>
                <button className='text-white bg-red-700 hover:border hover:border-red-900  hover:bg-transparent hover:text-red-700  font-light px-6 py-2 rounded-lg'>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </div>
  );
};
export default Home;
