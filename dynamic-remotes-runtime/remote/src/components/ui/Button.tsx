const Button = () => {
  const handleClick = () => {
    console.log('Click me - remote');
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="font-bold rounded-lg text-base uppercase w-56 h-16 bg-[#374151] text-[#ffffff] justify-center cursor-pointer
"
      >
        Click me
      </button>
    </>
  );
};

export default Button;
