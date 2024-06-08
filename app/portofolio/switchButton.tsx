
const SwitchButton = ({ title, setContent }: { title: string, setContent: Function }) => {
  const handleClick = () => {
    setContent(title);
  };

  return (
    <button className="flex justify-center items-center border-port" onClick={handleClick}>
      {title}
    </button>
  );
};

export default SwitchButton;
