const PostCards = ({ title, body }) => {
  return (
    <div className=" p-6 hover:bg-black hover:text-white rounded-lg h-52 cursor-pointer bg-white border-4 shadow-2xl text-black">
      <h1 className="text-yellow-800 font-bold">{title}</h1>
      <div className="mt-3 overflow-hidden text-ellipsis line-clamp-3">{body}</div>
    </div>
  );
};
export default PostCards;
