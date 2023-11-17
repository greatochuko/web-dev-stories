import { Link, useParams } from "react-router-dom";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { User } from "../context/userContext";
import { fetchUserProfile } from "../services/userServices";
import useUserContext from "../hooks/useUserContext";
import toast from "react-hot-toast";
import LoadingIndicator from "../components/LoadingIndicator";

export default function ProfilePage() {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState<
    (User & { error: string }) | null
  >(null);
  const { user } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function refreshUserProfile() {
    setLoading(true);
    const data = await fetchUserProfile(userId as string);
    if (data.error) {
      toast.error("Something went wrong");
      setError(data.error);
      setLoading(false);
      return;
    }
    setLoading(false);
    setUserProfile(data);
  }

  useEffect(() => {
    async function getUserProfile() {
      setLoading(true);
      const userProfile = await fetchUserProfile(userId as string);
      console.log(userProfile);
      if (userProfile.error) {
        toast.error("Something went wrong");
        setError(userProfile.error);
        setLoading(false);
        return;
      }
      setUserProfile(userProfile);
      setLoading(false);
    }
    getUserProfile();
  }, [userId]);

  if (loading) return <LoadingIndicator />;

  if (error)
    return (
      <main className="w-full flex-1 flex flex-col items-center justify-center text-2xl gap-3 text-zinc-700">
        <p>❌ {error} ❌</p>
        <button
          className="py-1 px-3 bg-zinc-100 border border-zinc-200 rounded-md hover:bg-zinc-200 hover:border-zinc-300 duration-200"
          onClick={refreshUserProfile}
        >
          Retry
        </button>
      </main>
    );

  if (userProfile)
    return (
      <div className="max-w-6xl w-[90%] mx-auto flex-1 py-4">
        <div className="flex flex-col gap-6 text-zinc-800">
          <div className="flex flex-col items-center gap-4">
            <div className="overflow-hidden rounded-md h-28 aspect-square bg-zinc-400">
              <img
                src={user.imageUrl}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">
                {userProfile?.fullName}
              </h1>
              <h2>Full Stack Developer</h2>
            </div>
            {user?._id === userProfile._id ? (
              <Link
                to={"/create"}
                className="px-4 py-2 border rounded-md bg-zinc-100 border-zinc-200"
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
                  {userProfile?.posts.reduce(
                    (acc, curr) => acc + curr.reads,
                    0
                  )}
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
              <Post
                showButtons
                post={post}
                key={post._id}
                refreshPosts={refreshUserProfile}
              />
            ))}
          </div>
        </div>
      </div>
    );
}
