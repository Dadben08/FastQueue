import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


const OrganizationSetup=()=>{


const navigate=useNavigate();


const [data,setData]=useState({
address:"",
services:"",
opening:"",
});


const handleChange=(e)=>{

setData({
...data,
[e.target.name]:e.target.value
})

}



const submit=(e)=>{

e.preventDefault();


localStorage.setItem(
"setup",
JSON.stringify(data)
);


navigate("/payment");

}



return (

<div className="min-h-screen bg-gray-50 flex items-center justify-center">


<div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-xl">


<h1 className="text-3xl font-bold text-[#2F2A76]">
Setup Organization
</h1>


<p className="text-gray-500 mt-2">
Complete your business information
</p>



<form 
onSubmit={submit}
className="space-y-5 mt-8"
>


<input

name="address"

onChange={handleChange}

placeholder="Business Address"

className="w-full border rounded-xl p-3"

/>




<input

name="services"

onChange={handleChange}

placeholder="Services e.g Account Opening, Complaint"

className="w-full border rounded-xl p-3"

/>



<input

name="opening"

onChange={handleChange}

placeholder="Opening Hours"

className="w-full border rounded-xl p-3"

/>



<button

className="
w-full
bg-[#2F2A76]
text-white
py-3
rounded-xl
font-semibold
"

>

Continue To Payment

</button>


</form>


</div>


</div>

)

}


export default OrganizationSetup;