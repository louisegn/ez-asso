const TabSection = ({ title, opened }) => {
  return (
    <button className="px-2 text-left h-4">
      <h3>{title}</h3>
      {opened ? (
        <div className="flex">
          <div className="border-solid border-4 border-mygreen w-44"></div>
          <div className="border-solid border border-black w-28 h-0"></div>
        </div>
      ) : (
        <div className="border-solid border border-black w-72"></div>
      )}
    </button>
  );
};

export default TabSection;
