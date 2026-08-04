import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-6 border-neutral-200 bg-[#ffffff]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src={logo} alt="FastQueues" className="h-20 w-50 mr-2" />
        <p className="text-m font-raleway text-[#2f2a76] opacity-70">
          © {new Date().getFullYear()} FastQueues. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
