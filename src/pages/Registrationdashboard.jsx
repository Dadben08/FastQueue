import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  MapPin,
  Building2,
  School,
  Utensils,
  Hospital,
  Clock,
  Loader,
  User,
  Mail,
  Calendar,
  CheckCircle,
  Phone,
  ArrowLeft,
  Home,
} from "lucide-react";

// Primary color hex for buttons and accents: #f61b10 (Bright Red)
const PRIMARY_COLOR = "#f61b10";
const HOVER_COLOR = "#cc160d"; // Darker for hover/active state
const DISABLED_COLOR = "#fa918b"; // Lighter for disabled state
const LIGHT_BG_COLOR = "#fff1f1"; // Very light background for button hover

// --- MOCK DATA (Nigerian Context) ---
const MOCK_BUSINESSES = [
  // Banks (Lagos, Abuja, Port Harcourt)
  {
    id: 1,
    name: "Zenith Bank PLC - VI Branch",
    category: "Bank",
    location: "Victoria Island, Lagos",
    waitTime: 15,
    queueLength: 5,
    address: "Plot 14, Ahmadu Bello Way",
  },
  {
    id: 2,
    name: "Access Bank PLC - Head Office",
    category: "Bank",
    location: "Lagos Island, Lagos",
    waitTime: 8,
    queueLength: 3,
    address: "999c, Danmole Street",
  },
  {
    id: 3,
    name: "GTBank - Maitama Branch",
    category: "Bank",
    location: "Maitama, Abuja",
    waitTime: 20,
    queueLength: 7,
    address: "6 Adetokunbo Ademola Cres",
  },

  // Hospitals/Clinics (Lagos, Kano)
  {
    id: 4,
    name: "Lagos University Teaching Hospital (LUTH) - Clinic",
    category: "Hospital/Clinic",
    location: "Idi-Araba, Lagos",
    waitTime: 45,
    queueLength: 12,
    address: "PMB 12003, Idi-Araba",
  },
  {
    id: 5,
    name: "Aminu Kano Teaching Hospital",
    category: "Hospital/Clinic",
    location: "Gidan Murtala, Kano",
    waitTime: 30,
    queueLength: 9,
    address: "Zaria Road, Gidan Murtala",
  },

  // Restaurants (Abuja, Port Harcourt)
  {
    id: 6,
    name: "Jevinik Restaurant - Abuja",
    category: "Restaurant",
    location: "Wuse II, Abuja",
    waitTime: 20,
    queueLength: 7,
    address: "494 Bangui Street",
  },
  {
    id: 7,
    name: "Spice Route Indian Cuisine",
    category: "Restaurant",
    location: "Trans Amadi, Port Harcourt",
    waitTime: 12,
    queueLength: 3,
    address: "12 Aba Road, Trans Amadi",
  },

  // Schools/Universities (Ibadan, Enugu)
  {
    id: 8,
    name: "University of Ibadan - Student Services",
    category: "School",
    location: "Bodija, Ibadan",
    waitTime: 25,
    queueLength: 6,
    address: "University Road, Bodija",
  },
  {
    id: 9,
    name: "University of Nigeria, Nsukka (UNN) - Registry",
    category: "School",
    location: "Nsukka, Enugu",
    waitTime: 10,
    queueLength: 4,
    address: "UNN Campus, Nsukka",
  },

  // Retail/Other (Lagos)
  {
    id: 10,
    name: "Shoprite - Lekki Mall",
    category: "Retail/Other",
    location: "Lekki Phase 1, Lagos",
    waitTime: 18,
    queueLength: 6,
    address: "Lekki-Epe Expressway",
  },
  {
    id: 11,
    name: "Computer Village - Tech Hub",
    category: "Retail/Other",
    location: "Ikeja, Lagos",
    waitTime: 22,
    queueLength: 8,
    address: "Medical Road, Ikeja",
  },
];

// Utility Functions
const generateTimeSlots = () => {
  const slots = [];
  const start = 8 * 60;
  const end = 17 * 60;
  for (let m = start; m <= end; m += 30) {
    const hours = Math.floor(m / 60);
    const minutes = m % 60;
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const time = `${displayHours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
    slots.push(time);
  }
  return slots;
};

const getCategoryIcon = (category) => {
  const iconProps = { size: 20 };
  switch (category) {
    case "Bank":
      return <Building2 {...iconProps} className="text-blue-500" />;
    case "School":
      return <School {...iconProps} className="text-green-500" />;
    case "Hospital/Clinic":
      return <Hospital {...iconProps} className="text-red-500" />;
    case "Restaurant":
      return <Utensils {...iconProps} className="text-yellow-600" />;
    default:
      return <Building2 {...iconProps} className="text-gray-500" />;
  }
};

// Step 1: User Information
const RegStep1UserInfo = ({
  registrationData,
  setRegistrationData,
  nextRegStep,
  prevRegStep,
  showBackButton = false,
}) => {
  const handleChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    registrationData.fullName &&
    registrationData.sex &&
    registrationData.email &&
    registrationData.location &&
    registrationData.description &&
    registrationData.phoneNumber;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          1. Your Contact Information
        </h3>
        {showBackButton && (
          <button
            onClick={prevRegStep}
            className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition duration-150"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </button>
        )}
      </div>

      {/* Full Name */}
      <label className="block space-y-1">
        <span className="text-gray-700 font-medium flex items-center">
          <User size={16} className="mr-2" /> Full Name
        </span>
        <input
          type="text"
          name="fullName"
          value={registrationData.fullName}
          onChange={handleChange}
          placeholder="Chidinma Okoro"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
        />
      </label>

      {/* Sex */}
      <div className="space-y-1">
        <span className="text-gray-700 font-medium flex items-center">
          <User size={16} className="mr-2" /> Sex
        </span>
        <div className="flex gap-4">
          {["Male", "Female"].map((s) => (
            <button
              key={s}
              onClick={() =>
                setRegistrationData({ ...registrationData, sex: s })
              }
              className={`p-2 rounded-lg border-2 text-sm transition-all ${
                registrationData.sex === s
                  ? "bg-red-500 text-white border-red-500 shadow-md"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-red-50 hover:text-red-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Email & Phone (Grid Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block space-y-1">
          <span className="text-gray-700 font-medium flex items-center">
            <Mail size={16} className="mr-2" /> Email (for notification)
          </span>
          <input
            type="email"
            name="email"
            value={registrationData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-gray-700 font-medium flex items-center">
            <Phone size={16} className="mr-2" /> Phone Number (for alert)
          </span>
          <input
            type="tel"
            name="phoneNumber"
            value={registrationData.phoneNumber}
            onChange={handleChange}
            placeholder="080XXXXXXXXX"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
        </label>
      </div>

      {/* Location & Description */}
      <label className="block space-y-1">
        <span className="text-gray-700 font-medium flex items-center">
          <MapPin size={16} className="mr-2" /> Your Current Location (e.g.,
          city/town)
        </span>
        <input
          type="text"
          name="location"
          value={registrationData.location}
          onChange={handleChange}
          placeholder="Surulere, Lagos"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
        />
      </label>
      <label className="block space-y-1">
        <span className="text-gray-700 font-medium flex items-center">
          <User size={16} className="mr-2" /> Purpose of Joining Queue
        </span>
        <textarea
          name="description"
          value={registrationData.description}
          onChange={handleChange}
          placeholder="Account opening, medication pickup, etc."
          rows="2"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
        ></textarea>
      </label>

      <div className="flex justify-end pt-4">
        <button
          onClick={nextRegStep}
          disabled={!isFormValid}
          className={`flex items-center px-6 py-3 rounded-full font-semibold shadow-md border transition-all duration-300 ${
            isFormValid
              ? "bg-red-500 text-white border-transparent hover:bg-transparent hover:text-red-500 hover:border-red-500"
              : "bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300"
          }`}
        >
          Next: Select Time <MapPin size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Step 2: Date and Time Selection
const RegStep2DateTime = ({
  registrationData,
  setRegistrationData,
  nextRegStep,
  prevRegStep,
}) => {
  const handleChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  // Generate mock time slots (e.g., every 30 mins)
  const generateTimeSlots = () => {
    const slots = [];
    const start = 8 * 60; // 8:00 AM in minutes
    const end = 17 * 60; // 5:00 PM in minutes
    for (let m = start; m <= end; m += 30) {
      const hours = Math.floor(m / 60);
      const minutes = m % 60;
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const time = `${displayHours}:${
        minutes < 10 ? "0" + minutes : minutes
      } ${ampm}`;
      slots.push(time);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const isFormValid = registrationData.date && registrationData.time;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          2. Select Your Slot
        </h3>
        <button
          onClick={prevRegStep}
          className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition duration-150"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </button>
      </div>

      {/* Date Picker */}
      <label className="block space-y-1">
        <span className="text-gray-700 font-medium flex items-center">
          <Calendar size={16} className="mr-2" /> Preferred Date
        </span>
        <input
          type="date"
          name="date"
          value={registrationData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
        />
      </label>

      {/* Time Slot Picker */}
      <div className="space-y-1">
        <span className="text-gray-700 font-medium flex items-center">
          <Clock size={16} className="mr-2" /> Preferred Time Slot
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 max-h-60 overflow-y-auto p-2 border rounded-lg bg-gray-50">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() =>
                setRegistrationData({ ...registrationData, time: time })
              }
              className={`p-2 text-xs rounded-lg transition-all border-2 ${
                registrationData.time === time
                  ? "bg-red-500 text-white border-red-600 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-red-50 hover:border-red-200"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={nextRegStep}
          disabled={!isFormValid}
          className={`flex items-center px-6 py-3 text-white font-medium rounded-full transition duration-150 ${
            isFormValid
              ? "bg-red-500 hover:bg-red-600 shadow-md"
              : "bg-red-300 cursor-not-allowed"
          }`}
        >
          Submit <CheckCircle size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Step 3: Confirmation and Queue Number
const RegStep3Confirmation = ({
  registrationData,
  selectedBusiness,
  resetView,
}) => {
  // Generate a mock queue number for success notification
  const queueNumber = Math.floor(Math.random() * 20) + 1; // 1 to 20
  const mockQueuePosition = Math.floor(Math.random() * 5) + 1; // 1 to 5 people ahead

  return (
    <div className="space-y-8 text-center">
      <CheckCircle size={64} className="text-green-600 mx-auto" />
      <h2 className="text-3xl font-bold text-green-700">
        Congratulations! You are in the Queue!
      </h2>
      <p className="text-xl text-gray-700">
        Your queue request for <strong>{selectedBusiness.name}</strong> has been
        successfully logged.
      </p>

      {/* Queue Information Card */}
      <div className="bg-white p-6 rounded-xl shadow-2xl border-4 border-green-200 inline-block">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Your Queue Number (Reference ID)
        </p>
        <div className="text-7xl font-extrabold text-red-500 tracking-wider mb-4">
          {queueNumber}
        </div>
        <p className="text-lg text-gray-800 font-medium">
          There are currently <strong>{mockQueuePosition}</strong> people ahead
          of you.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          We will send an alert to{" "}
          <strong>{registrationData.phoneNumber}</strong> and an email
          notification to <strong>{registrationData.email}</strong> when your
          slot is near.
        </p>
      </div>

      <div className="pt-6">
        <button
          onClick={resetView}
          className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-150 shadow-lg"
        >
          Done & Return to Search
        </button>
      </div>
    </div>
  );
};

// --- Queue Registration Form (Main logic for the 3 steps) ---
const QueueRegistrationForm = ({
  selectedBusiness,
  setView,
  resetSelectedBusiness,
}) => {
  const [regStep, setRegStep] = useState(1);
  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    sex: "",
    email: "",
    location: "",
    description: "",
    phoneNumber: "",
    date: "",
    time: "",
  });

  const nextRegStep = () => setRegStep((prev) => Math.min(prev + 1, 3));
  const prevRegStep = () => setRegStep((prev) => Math.max(prev - 1, 1));
  const resetView = () => {
    resetSelectedBusiness();
    setView("search");
  };

  const renderRegStep = () => {
    switch (regStep) {
      case 1:
        return (
          <RegStep1UserInfo
            registrationData={registrationData}
            setRegistrationData={setRegistrationData}
            nextRegStep={nextRegStep}
            prevRegStep={prevRegStep}
            showBackButton={true}
          />
        );
      case 2:
        return (
          <RegStep2DateTime
            registrationData={registrationData}
            setRegistrationData={setRegistrationData}
            nextRegStep={nextRegStep}
            prevRegStep={prevRegStep}
          />
        );
      case 3:
        return (
          <RegStep3Confirmation
            registrationData={registrationData}
            selectedBusiness={selectedBusiness}
            resetView={resetView}
          />
        );
      default:
        return (
          <RegStep1UserInfo
            registrationData={registrationData}
            setRegistrationData={setRegistrationData}
            nextRegStep={nextRegStep}
            prevRegStep={prevRegStep}
            showBackButton={true}
          />
        );
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-red-500">
            Register for: {selectedBusiness.name}
          </h2>
          <p className="text-gray-500">Location: {selectedBusiness.address}</p>
        </div>
        <button
          onClick={resetView}
          className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition duration-150"
        >
          <Home size={16} className="mr-2" />
          Back to Search
        </button>
      </div>

      {/* Progress Bar (2 steps plus confirmation) */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 mx-10">
            <div
              className="h-full bg-red-500 transition-all duration-500"
              style={{ width: `${(regStep - 1) * 50}%` }}
            ></div>
          </div>

          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-300 border-2 ${
                  regStep > step
                    ? "bg-green-500 text-white border-green-500"
                    : regStep === step
                      ? "bg-red-500 text-white border-red-500 shadow-lg"
                      : "bg-white text-gray-500 border-gray-300"
                }`}
              >
                {step === 3 && regStep === 3 ? <CheckCircle size={18} /> : step}
              </div>
              <span className="text-sm mt-2 text-center text-gray-700 font-medium hidden sm:block">
                {step === 1
                  ? "User Details"
                  : step === 2
                    ? "Time Slot"
                    : "Confirmation"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {renderRegStep()}
    </div>
  );
};

// --- Search Result Card (Modified to trigger registration) ---
const SearchResultCard = ({ business, handleJoinQueueClick }) => {
  const getIcon = (category) => {
    switch (category) {
      case "Bank":
        return <Building2 size={20} className="text-blue-500" />;
      case "School":
        return <School size={20} className="text-green-500" />;
      case "Hospital/Clinic":
        return <Hospital size={20} className="text-red-500" />;
      case "Restaurant":
        return <Utensils size={20} className="text-yellow-600" />;
      default:
        return <Building2 size={20} className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center transition duration-300 hover:shadow-xl">
      <div className="flex-1 space-y-2">
        <div className="flex items-center space-x-2">
          {getIcon(business.category)}
          <h3 className="text-xl font-bold text-gray-800">{business.name}</h3>
        </div>
        <div className="text-sm text-gray-500 space-y-1">
          <p className="flex items-center">
            <MapPin size={14} className="mr-1.5 text-red-500" />
            {business.location}
          </p>
          <p className="flex items-center">
            <Clock size={14} className="mr-1.5 text-amber-500" />
            Est. Wait:{" "}
            <span className="font-semibold text-gray-700 ml-1">
              {business.waitTime} min
            </span>
            &bull;{" "}
            <span className="font-semibold ml-1">{business.queueLength}</span>{" "}
            people ahead
          </p>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 sm:ml-4">
       <button
  onClick={() => handleJoinQueueClick(business)}
  className="
    flex
    items-center
    px-6
    py-3
    font-semibold
    rounded-full
    transition
    duration-150
    shadow-md
    bg-[#F4400D]
    text-white
    hover:bg-[#f43f0d8a]
  "
>
  Join Queue
</button>
      </div>
    </div>
  );
};

// --- Main Dashboard Component ---
const RegistrationDashBoard = () => {
  const [view, setView] = useState("search");
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Bank",
    "School",
    "Hospital/Clinic",
    "Restaurant",
    "Retail/Other",
  ];

  const filteredResults = useMemo(() => {
    return MOCK_BUSINESSES.filter((business) => {
      const categoryMatch =
        selectedCategory === "All" || business.category === selectedCategory;

      const searchMatch =
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.location.toLowerCase().includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    }).sort((a, b) => a.waitTime - b.waitTime);
  }, [searchTerm, selectedCategory]);

  const handleJoinQueueClick = (business) => {
    setSelectedBusiness(business);
    setView("register");
  };

  if (view === "register" && selectedBusiness) {
    return (
      <div className="min-h-screen bg-gray-50 p-5 md:p-10">
        <div className="max-w-5xl mx-auto">
          <QueueRegistrationForm
            selectedBusiness={selectedBusiness}
            setView={setView}
            resetSelectedBusiness={() => setSelectedBusiness(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="
min-h-screen
bg-gradient-to-br
from-red-50
via-white
to-gray-100
px-5
py-10
"
    >
      <div
        className="
max-w-7xl
mx-auto
"
      >
        {/* HERO */}

       <div
  className="
    bg-[#F4400D]
    rounded-3xl
    p-8
    md:p-12
    text-white
    shadow-xl
    mb-10
  "
>
  <div
    className="
      flex
      flex-col
      md:flex-row
      justify-between
      gap-8
    "
  >

    <div>

      <h1
        className="
          text-4xl
          md:text-5xl
          font-extrabold
          tracking-tight
        "
      >
        FastQueue Smart Portal
      </h1>


      <p
        className="
          mt-4
          text-orange-100
          text-lg
          max-w-xl
        "
      >
        Find businesses, hospitals, schools and restaurants. Join queues
        remotely and get notified before your turn.
      </p>


      <div
        className="
          flex
          gap-4
          mt-6
        "
      >

        <div
          className="
            bg-white/20
            backdrop-blur
            px-5
            py-3
            rounded-xl
          "
        >
          <span className="block text-2xl font-bold">
            11+
          </span>
          Businesses
        </div>


        <div
          className="
            bg-white/20
            backdrop-blur
            px-5
            py-3
            rounded-xl
          "
        >
          <span className="block text-2xl font-bold">
            24/7
          </span>
          Availability
        </div>


      </div>

    </div>


    <div
      className="
        hidden
        md:flex
        items-center
        justify-center
      "
    >

      <div
        className="
          w-44
          h-44
          rounded-full
          bg-white/20
          flex
          items-center
          justify-center
        "
      >

        <Search size={80} />

      </div>

    </div>


  </div>
</div>

        {/* SEARCH BOX */}

        <div
          className="
bg-white
rounded-3xl
shadow-lg
p-6
mb-8
border
border-gray-100
"
        >
          <div
            className="
relative
"
          >
            <Search
              className="
absolute
left-5
top-1/2
-translate-y-1/2
text-gray-400
"
            />

            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="
Search business, location...
"
              className="
w-full
pl-14
pr-5
py-5
rounded-2xl
border
border-gray-200
text-lg
outline-none
focus:ring-2
focus:ring-red-500
"
            />
          </div>
        </div>

        {/* CATEGORY */}

        <div
          className="
flex
flex-wrap
gap-3
mb-10
"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
px-5
py-2.5
rounded-full
font-medium
transition

${
  selectedCategory === category
    ? "bg-[#F4400D] text-white shadow-lg"
    : "bg-white text-gray-700 border hover:border-[#F4400D] hover:text-[#F4400D]"
}

`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RESULTS */}

        <div
          className="
flex
justify-between
items-center
mb-6
"
        >
          <h2
            className="
text-2xl
font-bold
text-gray-800
"
          >
            Available Queues
          </h2>

          <span
            className="
bg-red-100
text-red-600
px-4
py-2
rounded-full
font-semibold
"
          >
            {filteredResults.length} Found
          </span>
        </div>

        <div
          className="
space-y-5
"
        >
          {filteredResults.length ? (
            filteredResults.map((business) => (
              <SearchResultCard
                key={business.id}
                business={business}
                handleJoinQueueClick={handleJoinQueueClick}
              />
            ))
          ) : (
            <div
              className="
bg-white
rounded-3xl
p-12
text-center
shadow
"
            >
              <MapPin size={50} className="mx-auto text-red-500" />

              <h3
                className="
text-xl
font-bold
mt-4
"
              >
                No queue found
              </h3>

              <p className="text-gray-500">Try another location</p>
            </div>
          )}
        </div>
        {/* BACK TO LANDING PAGE */}

        <div
          className="
mt-12
pt-8
border-t
border-gray-200
text-center
"
        >
          <a
            href="/"
            className="
inline-flex
items-center
gap-2
px-8
py-3
rounded-full
bg-gray-800
text-white
font-semibold
shadow-lg
hover:bg-gray-700
transition
duration-300
"
          >
            <Home size={18} />
            Back to Landing Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDashBoard;

// import React, { useState, useMemo } from "react";
// import {
//   Search,
//   MapPin,
//   Building2,
//   School,
//   Utensils,
//   Hospital,
//   Clock,
//   Loader,
//   User,
//   Mail,
//   Calendar,
//   CheckCircle,
//   Phone,
// } from "lucide-react";

// // Primary color hex for buttons and accents: #f61b10 (Bright Red)
// const PRIMARY_COLOR = "#f61b10";
// const HOVER_COLOR = "#cc160d"; // Darker for hover/active state
// const DISABLED_COLOR = "#fa918b"; // Lighter for disabled state
// const LIGHT_BG_COLOR = "#fff1f1"; // Very light background for button hover

// // --- MOCK DATA (Nigerian Context) ---
// const MOCK_BUSINESSES = [
//   // Banks (Lagos, Abuja, Port Harcourt)
//   {
//     id: 1,
//     name: "Zenith Bank PLC - VI Branch",
//     category: "Bank",
//     location: "Victoria Island, Lagos",
//     waitTime: 15,
//     queueLength: 5,
//     address: "Plot 14, Ahmadu Bello Way",
//   },
//   {
//     id: 2,
//     name: "Access Bank PLC - Head Office",
//     category: "Bank",
//     location: "Lagos Island, Lagos",
//     waitTime: 8,
//     queueLength: 3,
//     address: "999c, Danmole Street",
//   },
//   {
//     id: 3,
//     name: "GTBank - Maitama Branch",
//     category: "Bank",
//     location: "Maitama, Abuja",
//     waitTime: 20,
//     queueLength: 7,
//     address: "6 Adetokunbo Ademola Cres",
//   },

//   // Hospitals/Clinics (Lagos, Kano)
//   {
//     id: 4,
//     name: "Lagos University Teaching Hospital (LUTH) - Clinic",
//     category: "Hospital/Clinic",
//     location: "Idi-Araba, Lagos",
//     waitTime: 45,
//     queueLength: 12,
//     address: "PMB 12003, Idi-Araba",
//   },
//   {
//     id: 5,
//     name: "Aminu Kano Teaching Hospital",
//     category: "Hospital/Clinic",
//     location: "Gidan Murtala, Kano",
//     waitTime: 30,
//     queueLength: 9,
//     address: "Zaria Road, Gidan Murtala",
//   },

//   // Restaurants (Abuja, Port Harcourt)
//   {
//     id: 6,
//     name: "Jevinik Restaurant - Abuja",
//     category: "Restaurant",
//     location: "Wuse II, Abuja",
//     waitTime: 20,
//     queueLength: 7,
//     address: "494 Bangui Street",
//   },
//   {
//     id: 7,
//     name: "Spice Route Indian Cuisine",
//     category: "Restaurant",
//     location: "Trans Amadi, Port Harcourt",
//     waitTime: 12,
//     queueLength: 3,
//     address: "12 Aba Road, Trans Amadi",
//   },

//   // Schools/Universities (Ibadan, Enugu)
//   {
//     id: 8,
//     name: "University of Ibadan - Student Services",
//     category: "School",
//     location: "Bodija, Ibadan",
//     waitTime: 25,
//     queueLength: 6,
//     address: "University Road, Bodija",
//   },
//   {
//     id: 9,
//     name: "University of Nigeria, Nsukka (UNN) - Registry",
//     category: "School",
//     location: "Nsukka, Enugu",
//     waitTime: 10,
//     queueLength: 4,
//     address: "UNN Campus, Nsukka",
//   },

//   // Retail/Other (Lagos)
//   {
//     id: 10,
//     name: "Shoprite - Lekki Mall",
//     category: "Retail/Other",
//     location: "Lekki Phase 1, Lagos",
//     waitTime: 18,
//     queueLength: 6,
//     address: "Lekki-Epe Expressway",
//   },
//   {
//     id: 11,
//     name: "Computer Village - Tech Hub",
//     category: "Retail/Other",
//     location: "Ikeja, Lagos",
//     waitTime: 22,
//     queueLength: 8,
//     address: "Medical Road, Ikeja",
//   },
// ];

// // Utility Functions
// const generateTimeSlots = () => {
//   const slots = [];
//   const start = 8 * 60;
//   const end = 17 * 60;
//   for (let m = start; m <= end; m += 30) {
//     const hours = Math.floor(m / 60);
//     const minutes = m % 60;
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const displayHours = hours % 12 || 12;
//     const time = `${displayHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
//     slots.push(time);
//   }
//   return slots;
// };

// const getCategoryIcon = (category) => {
//   const iconProps = { size: 20 };
//   switch (category) {
//     case 'Bank': return <Building2 {...iconProps} className="text-blue-500" />;
//     case 'School': return <School {...iconProps} className="text-green-500" />;
//     case 'Hospital/Clinic': return <Hospital {...iconProps} className="text-red-500" />;
//     case 'Restaurant': return <Utensils {...iconProps} className="text-yellow-600" />;
//     default: return <Building2 {...iconProps} className="text-gray-500" />;
//   }
// };

// // Step 1: User Information
// const RegStep1UserInfo = ({
//   registrationData,
//   setRegistrationData,
//   nextRegStep,
// }) => {
//   const handleChange = (e) => {
//     setRegistrationData({
//       ...registrationData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid =
//     registrationData.fullName &&
//     registrationData.sex &&
//     registrationData.email &&
//     registrationData.location &&
//     registrationData.description &&
//     registrationData.phoneNumber;

//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
//         1. Your Contact Information
//       </h3>

//       {/* Full Name */}
//       <label className="block space-y-1">
//         <span className="text-gray-700 font-medium flex items-center">
//           <User size={16} className="mr-2" /> Full Name
//         </span>
//         <input
//           type="text"
//           name="fullName"
//           value={registrationData.fullName}
//           onChange={handleChange}
//           placeholder="Chidinma Okoro"
//           className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${PRIMARY_COLOR}] focus:border-[${PRIMARY_COLOR}]`}
//         />
//       </label>

//       {/* Sex */}
//       <div className="space-y-1">
//         <span className="text-gray-700 font-medium flex items-center">
//           <User size={16} className="mr-2" /> Sex
//         </span>
//         <div className="flex gap-4">
//           {["Male", "Female"].map((s) => (
//             <button
//               key={s}
//               onClick={() =>
//                 setRegistrationData({ ...registrationData, sex: s })
//               }
//               className={`p-2 rounded-lg border-2 text-sm transition-all ${
//                 registrationData.sex === s
//                   ? `bg-[${PRIMARY_COLOR}] text-white border-[${PRIMARY_COLOR}]`
//                   : `bg-gray-100 text-gray-700 border-gray-300 hover:bg-[${LIGHT_BG_COLOR}]`
//               }`}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Email & Phone (Grid Layout) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <label className="block space-y-1">
//           <span className="text-gray-700 font-medium flex items-center">
//             <Mail size={16} className="mr-2" /> Email (for notification)
//           </span>
//           <input
//             type="email"
//             name="email"
//             value={registrationData.email}
//             onChange={handleChange}
//             placeholder="example@mail.com"
//             className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${PRIMARY_COLOR}] focus:border-[${PRIMARY_COLOR}]`}
//           />
//         </label>
//         <label className="block space-y-1">
//           <span className="text-gray-700 font-medium flex items-center">
//             <Phone size={16} className="mr-2" /> Phone Number (for alert)
//           </span>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={registrationData.phoneNumber}
//             onChange={handleChange}
//             placeholder="080XXXXXXXXX"
//             className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${PRIMARY_COLOR}] focus:border-[${PRIMARY_COLOR}]`}
//           />
//         </label>
//       </div>

//       {/* Location & Description */}
//       <label className="block space-y-1">
//         <span className="text-gray-700 font-medium flex items-center">
//           <MapPin size={16} className="mr-2" /> Your Current Location (e.g.,
//           city/town)
//         </span>
//         <input
//           type="text"
//           name="location"
//           value={registrationData.location}
//           onChange={handleChange}
//           placeholder="Surulere, Lagos"
//           className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${PRIMARY_COLOR}] focus:border-[${PRIMARY_COLOR}]`}
//         />
//       </label>
//       <label className="block space-y-1">
//         <span className="text-gray-700 font-medium flex items-center">
//           <User size={16} className="mr-2" /> Purpose of Joining Queue
//         </span>
//         <textarea
//           name="description"
//           value={registrationData.description}
//           onChange={handleChange}
//           placeholder="Account opening, medication pickup, etc."
//           rows="2"
//           className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${PRIMARY_COLOR}] focus:border-[${PRIMARY_COLOR}]`}
//         ></textarea>
//       </label>

//       <div className="flex justify-end pt-4">
//         <button
//           onClick={nextRegStep}
//           disabled={!isFormValid}
//           className={`flex items-center px-6 py-2 rounded-full font-semibold shadow-md border border-transparent transition-all duration-300 ${
//             isFormValid
//               ? "bg-[#F4400D] text-white hover:bg-transparent hover:text-[#F4400D] hover:border-[#F4400D]"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//         >
//           Next: Select Time <MapPin size={18} className="ml-2" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Step 2: Date and Time Selection
// const RegStep2DateTime = ({
//   registrationData,
//   setRegistrationData,
//   nextRegStep,
//   prevRegStep,
// }) => {
//   const handleChange = (e) => {
//     setRegistrationData({
//       ...registrationData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Generate mock time slots (e.g., every 30 mins)
//   const generateTimeSlots = () => {
//     const slots = [];
//     const start = 8 * 60; // 8:00 AM in minutes
//     const end = 17 * 60; // 5:00 PM in minutes
//     for (let m = start; m <= end; m += 30) {
//       const hours = Math.floor(m / 60);
//       const minutes = m % 60;
//       const ampm = hours >= 12 ? "PM" : "AM";
//       const displayHours = hours % 12 || 12;
//       const time = `${displayHours}:${
//         minutes < 10 ? "0" + minutes : minutes
//       } ${ampm}`;
//       slots.push(time);
//     }
//     return slots;
//   };

//   const timeSlots = generateTimeSlots();

//   const isFormValid = registrationData.date && registrationData.time;

//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
//         2. Select Your Slot
//       </h3>

//       {/* Date Picker */}
//       <label className="block space-y-1">
//         <span className="text-gray-700 font-medium flex items-center">
//           <Calendar size={16} className="mr-2" /> Preferred Date
//         </span>
//         <input
//           type="date"
//           name="date"
//           value={registrationData.date}
//           onChange={handleChange}
//           required
//           className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${PRIMARY_COLOR}] focus:border-[${PRIMARY_COLOR}]`}
//         />
//       </label>

//       {/* Time Slot Picker */}
//       <div className="space-y-1">
//         <span className="text-gray-700 font-medium flex items-center">
//           <Clock size={16} className="mr-2" /> Preferred Time Slot
//         </span>
//         <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 max-h-60 overflow-y-auto p-2 border rounded-lg bg-gray-50">
//           {timeSlots.map((time) => (
//             <button
//               key={time}
//               onClick={() =>
//                 setRegistrationData({ ...registrationData, time: time })
//               }
//               className={`p-2 text-xs rounded-lg transition-all border-2 ${
//                 registrationData.time === time
//                   ? `bg-[${PRIMARY_COLOR}] text-white border-[${HOVER_COLOR}]`
//                   : `bg-white text-gray-700 border-gray-200 hover:bg-[${LIGHT_BG_COLOR}]`
//               }`}
//             >
//               {time}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between pt-4">
//         <button
//           onClick={prevRegStep}
//           className="flex items-center px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition duration-150"
//         >
//           Back
//         </button>
//         <button
//           onClick={nextRegStep}
//           disabled={!isFormValid}
//           className={`flex items-center px-6 py-2 text-white font-medium rounded-full transition duration-150 ${
//             isFormValid
//               ? `bg-[${PRIMARY_COLOR}] hover:bg-[${HOVER_COLOR}]`
//               : `bg-[${DISABLED_COLOR}] cursor-not-allowed`
//           }`}
//         >
//           Submit <CheckCircle size={18} className="ml-2" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Step 3: Confirmation and Queue Number
// const RegStep3Confirmation = ({
//   registrationData,
//   selectedBusiness,
//   resetView,
// }) => {
//   // Generate a mock queue number for success notification
//   const queueNumber = Math.floor(Math.random() * 20) + 1; // 1 to 20
//   const mockQueuePosition = Math.floor(Math.random() * 5) + 1; // 1 to 5 people ahead

//   return (
//     <div className="space-y-8 text-center">
//       <CheckCircle size={64} className="text-green-600 mx-auto" />
//       <h2 className="3xl font-bold text-green-700">
//         Congratulations! You are in the Queue!
//       </h2>
//       <p className="text-xl text-gray-700">
//         Your queue request for **{selectedBusiness.name}** has been successfully
//         logged.
//       </p>

//       {/* Queue Information Card */}
//       <div className="bg-white p-6 rounded-xl shadow-2xl border-4 border-green-200 inline-block">
//         <p className="text-sm font-semibold text-gray-500 mb-2">
//           Your Queue Number (Reference ID)
//         </p>
//         <div
//           className={`text-7xl font-extrabold text-[${PRIMARY_COLOR}] tracking-wider mb-4`}
//         >
//           {queueNumber}
//         </div>
//         <p className="text-lg text-gray-800 font-medium">
//           There are currently **{mockQueuePosition}** people ahead of you.
//         </p>
//         <p className="text-sm text-gray-500 mt-2">
//           We will send an alert to **{registrationData.phoneNumber}** and an
//           email notification to **{registrationData.email}** when your slot is
//           near.
//         </p>
//       </div>

//       <div className="pt-6">
//         <button
//           onClick={resetView}
//           className={`px-8 py-3 bg-[${PRIMARY_COLOR}] text-white font-semibold rounded-full hover:bg-[${HOVER_COLOR}] transition duration-150 shadow-lg`}
//         >
//           Done & Return to Search
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- Queue Registration Form (Main logic for the 3 steps) ---
// const QueueRegistrationForm = ({
//   selectedBusiness,
//   setView,
//   resetSelectedBusiness,
// }) => {
//   const [regStep, setRegStep] = useState(1);
//   const [registrationData, setRegistrationData] = useState({
//     fullName: "",
//     sex: "",
//     email: "",
//     location: "",
//     description: "",
//     phoneNumber: "",
//     date: "",
//     time: "",
//   });

//   const nextRegStep = () => setRegStep((prev) => Math.min(prev + 1, 3));
//   const prevRegStep = () => setRegStep((prev) => Math.max(prev - 1, 1));
//   const resetView = () => {
//     resetSelectedBusiness();
//     setView("search");
//   };

//   const renderRegStep = () => {
//     switch (regStep) {
//       case 1:
//         return (
//           <RegStep1UserInfo
//             registrationData={registrationData}
//             setRegistrationData={setRegistrationData}
//             nextRegStep={nextRegStep}
//           />
//         );
//       case 2:
//         return (
//           <RegStep2DateTime
//             registrationData={registrationData}
//             setRegistrationData={setRegistrationData}
//             nextRegStep={nextRegStep}
//             prevRegStep={prevRegStep}
//           />
//         );
//       case 3:
//         return (
//           <RegStep3Confirmation
//             registrationData={registrationData}
//             selectedBusiness={selectedBusiness}
//             resetView={resetView}
//           />
//         );
//       default:
//         return (
//           <RegStep1UserInfo
//             registrationData={registrationData}
//             setRegistrationData={setRegistrationData}
//             nextRegStep={nextRegStep}
//           />
//         );
//     }
//   };

//   return (
//     <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
//       <h2 className={`text-2xl font-bold text-[${PRIMARY_COLOR}] mb-4`}>
//         Register for: {selectedBusiness.name}
//       </h2>
//       <p className="text-gray-500 mb-6">Location: {selectedBusiness.address}</p>

//       {/* Progress Bar (2 steps plus confirmation) */}
//       <div className="mb-8">
//         <div className="flex items-center justify-between relative">
//           <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 mx-10">
//             <div
//               className={`h-full bg-[${PRIMARY_COLOR}] transition-all duration-500`}
//               style={{ width: `${(regStep - 1) * 50}%` }}
//             ></div>
//           </div>

//           {[1, 2, 3].map((step) => (
//             <div key={step} className="flex flex-col items-center z-10">
//               <div
//                 className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-300 border-2 ${
//                   regStep > step
//                     ? "bg-green-500 text-white border-green-500"
//                     : regStep === step
//                     ? `bg-[${PRIMARY_COLOR}] text-white border-[${PRIMARY_COLOR}] shadow-lg`
//                     : "bg-white text-gray-500 border-gray-300"
//                 }`}
//               >
//                 {step === 3 && regStep === 3 ? <CheckCircle size={18} /> : step}
//               </div>
//               <span className="text-sm mt-2 text-center text-gray-700 font-medium hidden sm:block">
//                 {step === 1
//                   ? "User Details"
//                   : step === 2
//                   ? "Time Slot"
//                   : "Confirmation"}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {renderRegStep()}
//     </div>
//   );
// };

// // --- Search Result Card (Modified to trigger registration) ---
// const SearchResultCard = ({ business, handleJoinQueueClick }) => {
//   const getIcon = (category) => {
//     switch (category) {
//       case "Bank":
//         return <Building2 size={20} className="text-blue-500" />;
//       case "School":
//         return <School size={20} className="text-green-500" />;
//       case "Hospital/Clinic":
//         return <Hospital size={20} className="text-red-500" />;
//       case "Restaurant":
//         return <Utensils size={20} className="text-yellow-600" />;
//       default:
//         return <Building2 size={20} className="text-gray-500" />;
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center transition duration-300 hover:shadow-xl">
//       <div className="flex-1 space-y-2">
//         <div className="flex items-center space-x-2">
//           {getIcon(business.category)}
//           <h3 className="text-xl font-bold text-gray-800">{business.name}</h3>
//         </div>
//         <div className="text-sm text-gray-500 space-y-1">
//           <p className="flex items-center">
//             <MapPin size={14} className={`mr-1.5 text-[${PRIMARY_COLOR}]`} />
//             {business.location}
//           </p>
//           <p className="flex items-center">
//             <Clock size={14} className="mr-1.5 text-amber-500" />
//             Est. Wait:{" "}
//             <span className="font-semibold text-gray-700 ml-1">
//               {business.waitTime} min
//             </span>
//             &bull;{" "}
//             <span className="font-semibold ml-1">{business.queueLength}</span>{" "}
//             people ahead
//           </p>
//         </div>
//       </div>

//       <div className="mt-4 sm:mt-0 sm:ml-4">
//         <button
//           onClick={() => handleJoinQueueClick(business)}
//           className={`flex items-center px-6 py-2 font-semibold rounded-full transition duration-150 shadow-md bg-[${PRIMARY_COLOR}] text-white hover:bg-[${HOVER_COLOR}]`}
//         >
//           Join Queue
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- Main Dashboard Component ---
// const RegistrationDashBoard = () => {
//   // State to control the main application view: 'search' or 'register'
//   const [view, setView] = useState("search");
//   const [selectedBusiness, setSelectedBusiness] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = [
//     "All",
//     "Bank",
//     "School",
//     "Hospital/Clinic",
//     "Restaurant",
//     "Retail/Other",
//   ];

//   // Memoized filtering logic
//   const filteredResults = useMemo(() => {
//     return MOCK_BUSINESSES.filter((business) => {
//       const matchesCategory =
//         selectedCategory === "All" || business.category === selectedCategory;
//       const matchesSearch =
//         business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         business.location.toLowerCase().includes(searchTerm.toLowerCase());
//       return matchesCategory && matchesSearch;
//     }).sort((a, b) => a.waitTime - b.waitTime);
//   }, [searchTerm, selectedCategory]);

//   const handleJoinQueueClick = (business) => {
//     setSelectedBusiness(business);
//     setView("register");
//   };

//   const getCategoryClasses = (category) => {
//     return `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 ${
//       selectedCategory === category
//         ? `bg-[${PRIMARY_COLOR}] text-white shadow-md`
//         : `bg-gray-200 text-gray-700 hover:bg-[${LIGHT_BG_COLOR}] hover:text-[${HOVER_COLOR}]`
//     }`;
//   };

//   const renderContent = () => {
//     if (view === "register" && selectedBusiness) {
//       return (
//         <QueueRegistrationForm
//           selectedBusiness={selectedBusiness}
//           setView={setView}
//           resetSelectedBusiness={() => setSelectedBusiness(null)}
//         />
//       );
//     }

//     // Default: Search Portal View
//     return (
//       <>
//         <header className="py-6 mb-8 border-b border-gray-200">
//           <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 flex items-center">
//             <Search size={36} className={`mr-3 text-[${PRIMARY_COLOR}]`} />
//             Queue Search Portal
//           </h1>
//           <p className="text-lg text-gray-600 mt-2">
//             Find a Nigerian business or location and join the waitlist
//             instantly.
//           </p>
//         </header>

//         {/* Search Bar */}
//         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mb-8">
//           <div className="relative">
//             <Search
//               size={24}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//             />
//             <input
//               type="text"
//               placeholder="Search by business name or location (e.g., 'GTBank' or 'Lagos')"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className={`w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-[${PRIMARY_COLOR}] focus:border-[${PRIMARY_COLOR}] transition`}
//             />
//           </div>
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap gap-2 mb-8 justify-center">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={getCategoryClasses(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Search Results */}
//         <main className="space-y-6">
//           <h2 className="text-2xl font-semibold text-gray-800">
//             {filteredResults.length} Results Found
//           </h2>

//           {filteredResults.length > 0 ? (
//             filteredResults.map((business) => (
//               <SearchResultCard
//                 key={business.id}
//                 business={business}
//                 handleJoinQueueClick={handleJoinQueueClick}
//               />
//             ))
//           ) : (
//             <div className="text-center p-12 bg-white rounded-xl shadow-inner text-gray-500">
//               <MapPin size={48} className="mx-auto mb-4" />
//               <p className="text-xl font-medium">
//                 No Nigerian businesses match your search criteria.
//               </p>
//               <p>Try a different location or category.</p>
//             </div>
//           )}
//         </main>

//         {/* Back to Home Link */}
//         {/* <footer className="mt-12 pt-6 border-t border-gray-200 text-center">
//           <a
//             href="/"
//             className={`inline-flex items-center text-[${PRIMARY_COLOR}] hover:text-[${HOVER_COLOR}] font-medium transition duration-150`}
//           >
//             <Building2 size={18} className="mr-2" /> Back to Landing Page
//           </a>
//         </footer> */}
//       </>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
//       <div className="max-w-6xl mx-auto">{renderContent()}</div>
//     </div>
//   );
// };

// export default RegistrationDashBoard;
