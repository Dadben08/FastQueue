import React from "react";
import { Bell, Clock, Menu } from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const Topbar = ({ setIsOpen }) => {

const { orgData, stats } = useDashboard();


const getCurrentDate = () => {

const options = {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
};

return new Date().toLocaleDateString("en-US", options);

};



const getOrgInitials = (name) => {

if (!name) return "FQ";

return name
.split(" ")
.map((word) => word[0])
.join("")
.toUpperCase()
.slice(0,2);

};



return (

<header className="
bg-white
rounded-2xl
shadow-sm
p-4
md:p-6
">


<div className="
flex
items-center
justify-between
gap-4
">


{/* Left Section */}
<div className="flex items-start gap-3">


{/* Mobile Menu Button */}
<button
onClick={() => setIsOpen(true)}
className="
lg:hidden
p-2
rounded-lg
bg-gray-100
hover:bg-gray-200
"
>

<Menu size={24}/>

</button>



<div>

<h1 className="
text-xl
md:text-2xl
font-bold
text-[#2F2A76]
">

Welcome back, {orgData?.orgName || "Organization"} 👋

</h1>



<div className="
flex
flex-col
sm:flex-row
sm:items-center
gap-2
sm:gap-4
mt-2
text-gray-500
text-sm
">

<span>
{getCurrentDate()}
</span>



<div className="
flex
items-center
gap-2
">

<Clock size={16}/>

<span>
Current queue: {stats.currentQueue || "A001"}
</span>

</div>


</div>

</div>

</div>




{/* Right Section */}
<div className="
flex
items-center
gap-3
">


{/* Notification */}
<button
className="
relative
p-3
rounded-xl
bg-gray-100
hover:bg-orange-50
"
>

<Bell 
size={20}
className="text-[#2F2A76]"
/>


<span
className="
absolute
-top-1
-right-1
w-5
h-5
bg-[#F4400D]
text-white
text-xs
rounded-full
flex
items-center
justify-center
font-bold
"
>
3
</span>


</button>




{/* Organization Profile */}
<div className="
hidden
sm:flex
items-center
gap-3
px-4
py-2
bg-gray-100
rounded-xl
"
>


<div className="
w-10
h-10
rounded-full
bg-[#F4400D]
flex
items-center
justify-center
text-white
font-bold
">

{getOrgInitials(orgData?.orgName)}

</div>



<div>

<p className="
text-sm
font-semibold
text-gray-800
">

{orgData?.orgName || "Organization"}

</p>


<p className="
text-xs
text-gray-500
">

{orgData?.category || "Queue Management"}

</p>


</div>


</div>



</div>


</div>


</header>

);

};


export default Topbar;