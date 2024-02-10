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
    <Card className="w-full max-w-[48rem] sm:flex-row flex-col">
    <CardHeader
      shadow={false}
      floated={false}
      className="m-0 w-2/5 shrink-0 rounded-r-none"
    >
      <img
        src="https://randomuser.me/api/portraits/women/88.jpg"
        alt="card-image"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody>
  
      <Typography variant="h4" color="blue-gray" className="mb-2">
        {user.name.title} {user.name.first} {user.name.last}
      </Typography>
      <Typography color="gray" className="mb-6 mt-4 text-xl">
      ⚤{`${user.gender.charAt(0).toUpperCase()}${user.gender.slice(1).toLowerCase()}`}
      </Typography>
      <Typography color="gray" className="mb-6 mt-4 text-xl">
      📞{user.phone}
      </Typography>
      <Typography color="gray" className="mb-6 mt-4 text-xl">
      📧{user.email}
      </Typography>
    </CardBody>
  </Card>
  );
}
         

export default ProfileCard