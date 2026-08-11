import React, { useState } from "react";
import { Building2, Mail, Phone, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrganizationRegister = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    orgName:"",
    email:"",
    phone:"",
    password:"",
    category:""
  });


  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };


  const handleSubmit=(e)=>{
    e.preventDefault();


    // temporary storage
    localStorage.setItem(
      "organization",
      JSON.stringify(formData)
    );


    navigate("/organization/setup");

  };


return (

<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">


<div className="bg-white w-full max-w-xl rounded-3xl shadow-lg p-8">


<h1 className="text-3xl font-bold text-[#2F2A76] text-center">
Create Organization Account
</h1>


<p className="text-gray-500 text-center mt-2">
Register your business on FastQueue
</p>



<form 
onSubmit={handleSubmit}
className="mt-8 space-y-5"
>


<div>
<label className="text-sm">
Organization Name
</label>

<div className="relative">

<Building2 
className="absolute left-3 top-3 text-gray-400"
/>

<input
name="orgName"
onChange={handleChange}
className="w-full border rounded-xl pl-10 p-3"
placeholder="Access Bank Ikeja"
/>

</div>

</div>




<div>

<label className="text-sm">
Business Email
</label>

<div className="relative">

<Mail 
className="absolute left-3 top-3 text-gray-400"
/>

<input
type="email"
name="email"
onChange={handleChange}
className="w-full border rounded-xl pl-10 p-3"
placeholder="admin@company.com"
/>

</div>

</div>




<div>

<label className="text-sm">
Phone Number
</label>

<div className="relative">

<Phone
className="absolute left-3 top-3 text-gray-400"
/>

<input
name="phone"
onChange={handleChange}
className="w-full border rounded-xl pl-10 p-3"
placeholder="08000000000"
/>

</div>

</div>





<div>

<label>
Business Category
</label>


<select
name="category"
onChange={handleChange}
className="w-full border rounded-xl p-3"
>


<option>
Select Category
</option>


<option>Bank</option>

<option>Hospital</option>

<option>Restaurant</option>

<option>School</option>

<option>Retail Store</option>

<option>Government Office</option>


</select>


</div>





<div>

<label>
Password
</label>


<div className="relative">

<Lock
className="absolute left-3 top-3 text-gray-400"
/>


<input
type="password"
name="password"
onChange={handleChange}
className="w-full border rounded-xl pl-10 p-3"
placeholder="********"
/>


</div>


</div>





<button

className="
w-full 
bg-[#F4400D]
text-white
py-3
rounded-xl
font-semibold
hover:bg-[#d93608]
transition
"

>

Create Account

</button>



</form>


</div>


</div>


);

};


export default OrganizationRegister;