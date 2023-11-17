import useUserContext from "../hooks/useUserContext";
import { toast } from "react-hot-toast";

export default function LogoutModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { setUser } = useUserContext();
  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logout Successful");
    closeModal();
  }

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-2 items-center bg-white rounded-md w-[80%] max-w-md overflow-hidden animate-zoom-in"
      >
        <div className="w-full p-6">
          <h2 className="text-xl font-semibold">Logout?</h2>
          <p>Are you sure you want to logout?</p>
        </div>
        <div className="flex justify-end w-full gap-4 p-4 bg-zinc-200">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-white border rounded-md border-zinc-400"
          >
            Cancel
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 text-white bg-red-600 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
