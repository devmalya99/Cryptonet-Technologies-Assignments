import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";


const ProfileCard = () => {
     
    const [Loading,setLoadng]=useState(true)
    const [user,setUser]=useState({name: {title: '', first: '', last: ''}, gender: '', email: '', phone: ''})
  useEffect(()=>{
    axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
    .then(res=>{
        console.log(res.data.results[0])
        setUser(res.data.results[0])
        console.log(user.name.title);
        setLoadng(false)
    })
  },[])


  return (
    Loading?<div>Loading...</div> :
    <Card className="w-full max-w-[48rem] flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-lg my-2 mx-auto bg-gray-800 text-white">
    <CardHeader className="flexitems-center m-2 w-2/5 sm:w-2/6 ">
        <img
          src="https://randomuser.me/api/portraits/women/88.jpg"
          alt={`Profile of ${user.name.title} ${user.name.first} ${user.name.last}`}
          className="h-full w-full object-cover"
        />
    </CardHeader>

    <CardBody className="py-5 sm:py-10 sm:px-6 text-center sm:text-left">
      <Typography variant="h4" color="text-blue-500 dark:text-blue-400" className="mb-2">
        {user.name.title} {user.name.first} {user.name.last}
      </Typography>
      <Typography color="text-gray-500 dark:text-gray-300" className="mb-6 mt-4 text-xl">
        <span role="img" aria-label="gender">⚤</span> {`${user.gender.charAt(0).toUpperCase()}${user.gender.slice(1).toLowerCase()}`}
      </Typography>
      <Typography color="text-gray-500 dark:text-gray-300" className="mb-6 mt-4 text-xl">
        <span role="img" aria-label="phone">📞</span> {user.phone}
      </Typography>
      <Typography color="text-gray-500 dark:text-gray-300" className="mb-6 mt-4 text-xl">
        <span role="img" aria-label="email">📧</span> {user.email}
      </Typography>
    </CardBody>
</Card>
  );
}
         

export default ProfileCard