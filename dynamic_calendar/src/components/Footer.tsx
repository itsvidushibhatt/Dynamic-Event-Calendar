const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-6 shadow-inner text-lg">
      <div className="container mx-auto text-center px-4 sm:px-6 md:px-8">
        <p className="text-sm sm:text-base md:text-lg">
          © {new Date().getFullYear()} Dynamic Calendar by Vidushi Bhatt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
