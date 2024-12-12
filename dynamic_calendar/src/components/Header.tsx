const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6 shadow-lg">
      <div className="container mx-auto flex justify-center items-center px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
          Dynamic <span className="text-yellow-300">Calendar</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
