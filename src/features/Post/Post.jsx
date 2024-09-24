import { useDispatch, useSelector } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  // console.log(count);
  return (
    <div className="border-4 border-blue-400 p-10">
      <h3 className="text-center text-4xl font-bold text-blue-400">
        All Posts
      </h3>
      <br />
      <div className="flex flex-wrap justify-around">
        {posts.map((post) => (
          <div className="border-2 border-blue-200 max-w-sm p-3" key={post.id}>
            <h2 className="text-center text-xl font-bold capitalize">
              {post.title}
            </h2>
            <p className="text-center text-gray-500">
              {post.description.substring(0, 120)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
