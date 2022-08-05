import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading';
import TagCard from './TagCard';

const AllTag = () => {

  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadTags = async() => {
    const response = await fetch("http://13.214.58.126:3001/tags");
    const resData = await response.json();
    if(resData) {
      setTags(resData.result);
    } else {
      console.log(resData);
    }
  }

  useEffect(() => {
    loadTags();
  }, [])

  const userData = useSelector(state => state.userData);

  const apiTagDestroy = async(id) => {
    const response = await fetch(`http://13.214.58.126:3001/tags/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`
      }
    })
    const resData = await response.json();
    loadTags();
    console.log(resData);
  }

  return (
    <>
    {isLoading && <Loading />}
      <Link to="/admin/tags/add" className='btn btn-success mb-3'>Add</Link>
      <div className="row">
        {tags.map(tag => <TagCard key={tag._id} tag={tag} apiTagDestroy={apiTagDestroy} />)}
      </div>
    </>
  )
}

export default AllTag
