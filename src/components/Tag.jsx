import React from 'react'
import { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('car');
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2  bg-[#cbd1d4] rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
    {/* blue-500 */}
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random {tag} GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} />)
      }

      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
      />

      <button onClick={ () => fetchData(tag)}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      > 
        Gnerate
      </button>
    </div>
  )
}

export default Tag