const TextCard = ({ item }) => {
  return (
    <div className="bg-blue-shade-20 rounded-md flex items-center py-6 px-8">
      <p
        className={`text-xl ${
          item.color === "orange" ? "text-orange-shade-20" : "text-white"
        }`}
      >
        {item.text}
      </p>
    </div>
  );
};

export default TextCard;
