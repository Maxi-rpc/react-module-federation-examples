const Button = () => {
  const handleClick = () => {
    console.log('Click me - remote');
    alert('Click me - remote');
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="font-bold rounded-lg text-base uppercase w-full p-3 bg-blue-600 text-white justify-center cursor-pointer
"
      >
        Click me remote
      </button>
    </>
  );
};

export default Button;
