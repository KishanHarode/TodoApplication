import React, {  useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button";
import Todos from "./Todos";
import Text from "./Text";
import Clear from "./Clear";


const Main = () => {
  const inputref = useRef()
  const [data,setData] = useState([])
  const [todo,setTodo] = useState('');

  const handleFocus = () => {
    if(inputref.current){
        inputref.current.focus();
    }
    if(todo.trim()==''){
       alert("Please Add the Todo");
    }
    else if(todo.length < 3 || todo.length > 30){
        alert("Please add Proper todo");
    }
    else{
        setData((prevData)=>{
            return [...prevData,todo]
        });
        setTodo('');
    }
    console.log(data);
  };

  useEffect(()=>{
     const storedData = JSON.parse(localStorage.getItem('todos'));
     setData(storedData);
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(data));
 },[data])

  const handleClear = ()=>{
    setData([]);
    localStorage.removeItem('todos');
  }

  const handleDelete = (index)=>{
    const updatedData = data.filter((item,id)=>{
        return index!=id
    })
    setData(updatedData);
  }
  

  return (
    <div className="py-[5%]">
    <div className="flex items-center  flex-col p-3 bg-white rounded-lg justify-center max-w-[70%] md:max-w-[40%] border mx-auto">
      <div className="flex justify-center p-5">
        <Heading />
      </div>
      <div className="grid grid-flow-col gap-6">
        <Input ref={inputref} values={todo} handleTodo={(e)=>setTodo(e.target.value)}  />
        <Button data={handleFocus} />
      </div>
      <br/>
      {data.length === 0 && <Text/>}
      <div className="flex flex-col gap-2">
        {
           data.map((item,index)=>{
            return(
                <Todos item={item} index={index} onhandleDelete = {()=>handleDelete(index)}/>
            )
           })
        } 
        {data.length > 0 && <Clear onhandleClear = {handleClear}/>}
      </div>
    </div>
    </div>
  );
};

export default Main;
