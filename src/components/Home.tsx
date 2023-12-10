import { Button, TextInput } from "@tremor/react";
import { ChangeEvent, useEffect, useState } from "react";

const Home = () => {

  const [userName , setUserName] = useState<string>("")

  const handleUserName = (e:ChangeEvent<HTMLInputElement>)=>{
    const value =  e.target.value;
    setUserName(value)
  }

  useEffect(()=>{
    console.log(userName)
  },[userName])


  return (
    <div className="flex flex-col gap-4 items-center text-center">
    <div className="">
    <label htmlFor="">Username</label>
    <TextInput value={userName} onChange={handleUserName} type="text" />
    </div>
      <div className="flex flex-col">
        <label htmlFor="">Create pomodoro Instance</label>
        <Button>Create</Button>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Join Pomodoro</label>
        <TextInput type="text" />
        <Button>Join</Button>
      </div>
    </div>
  );
};

export default Home;
