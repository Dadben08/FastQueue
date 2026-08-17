import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import authService from "../services/authservice";

const SignUpModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isOpen) return null;

  const plan = location.state?.plan || "Free";
  const billing = location.state?.billing || "monthly";

  const [form, setForm] = useState({
    orgName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    if (event.target.value !== "other") {
      setCustomCategory("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const finalCategory =
      selectedCategory === "other" ? customCategory : selectedCategory;

    if (!finalCategory) {
      setError("Please select or enter a category");
      return;
    }

    const payload = {
      orgName: form.orgName,
      orgEmail: form.email,
      orgPassword: form.password,
      orgAddress: form.address,
      orgPhone: form.phone,
      category: finalCategory,
    };

    try {
      setLoading(true);

      const response = await authService.registerOrg(payload);

      // Redirect to Registration Success page
      navigate("/registration-success", {
        state: {
          companyName: form.orgName,
          email: form.email,
          plan,
          billing,
          message:
            response.data.message ||
            "Account created successfully! Check your email to verify your account.",
        },
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-10/12 max-w-3xl max-h-[90vh] p-8 rounded-xl bg-white shadow-xl overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#2f2a76]">
            Create an Organization Account
          </h2>
          <p className="text-gray-600 mt-2">
            Start managing your queues with FastQueue
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Keep all your existing form fields here */}

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-[#f4400d] text-white rounded-full font-semibold hover:bg-[#d63a0c] transition"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account? {" "}
          <Link
            to="/login"
            className="font-semibold text-[#2f2a76] hover:text-[#f4400d]"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;