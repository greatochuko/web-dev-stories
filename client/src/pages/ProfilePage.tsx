import { Link, useParams } from "react-router-dom";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { User } from "../context/userContext";
import { fetchUserProfile } from "../services/userServices";
import useUserContext from "../hooks/useUserContext";

export default function ProfilePage() {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const { user } = useUserContext();

  useEffect(() => {
    async function getUserProfile() {
      const userProfile = await fetchUserProfile(userId as string);
      setUserProfile(userProfile);
    }
    getUserProfile();
  }, [userId]);
  if (!userProfile) return;
  return (
    <div className="max-w-7xl w-[90%] mx-auto flex-1 py-4">
      <div className="flex flex-col gap-6 text-zinc-800">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-md h-28 aspect-square bg-zinc-500"></div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">{userProfile?.fullName}</h1>
            <h2>Full Stack Developer</h2>
          </div>
          {user._id === userProfile._id ? (
            <Link
              to={"/create"}
              className="py-2 px-4 rounded-md bg-zinc-100 border border-zinc-200"
            >
              Create New Post
            </Link>
          ) : null}
          <div className="flex justify-between w-full max-w-3xl gap-4 text-zinc-700">
            <div className="flex flex-col items-center flex-1 p-2 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-center">
                {userProfile?.posts.length}
              </h3>
              <p>{userProfile?.posts.length > 1 ? "Posts" : "Post"}</p>
            </div>
            <div className="flex flex-col items-center flex-1 p-2 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-center">
                {userProfile?.posts.reduce((acc, curr) => acc + curr.reads, 0)}
              </h3>
              <p>Reads</p>
            </div>
            <div className="flex flex-col items-center flex-1 p-2 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-center">
                {userProfile?.posts.reduce(
                  (acc, curr) => acc + curr.comments.length,
                  0
                )}
              </h3>
              <p>Comments</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userProfile?.posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
