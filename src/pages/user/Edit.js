import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Edit = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {id} = useParams()
  const url = `http://localhost:3003/users/${id}`;
  const data = { name, username, email, phone };
  const navigate = useNavigate();
useEffect(() => {
  axios.get(url)
    .then((res) => {
      setName(res.data.name);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    
    })
    .catch((err) => {
      console.log('data has not been added reason:', err.message);
    });
}, [url]);

  // editing the user
  const handleEdit = (e) => {
    e.preventDefault()
    axios
      .put(url,data)
      .then((res) => {       
        console.log('THE data has been updated',res.data)
        navigate('/')
      })
      .catch((err) => {
        console.log('data has not been added reason:', err.message);
      });
  };

  return (
    <div className='w-screen h-full flex items-center justify-center mt-16 px-6 py-4 '>
      <form className='w-[50%] h-full ' onSubmit={handleEdit}>
        <h1 className='text-xl font-bold flex items-center justify-center mb-4'>
          Edit User
        </h1>
        <div className='mb-6'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Name
          </label>
          <input
            type='text'
            placeholder='Enter your name.'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required=''
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='username'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Username
          </label>
          <input
            type='text'
            placeholder='Enter your username.'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required=''
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your email
          </label>
          <input
            type='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name@flowbite.com'
            required=''
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='text'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Phone Number
          </label>
          <input
            type='tel'
            placeholder='phone number...'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required=''
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Update User
        </button>
      </form>
    </div>
  );
};
export default Edit;
