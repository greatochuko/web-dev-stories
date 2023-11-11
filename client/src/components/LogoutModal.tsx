import useUserContext from "../hooks/useUserContext";

export default function LogoutModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { setUser } = useUserContext();
  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    closeModal();
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 items-center bg-white rounded-md w-[80%] max-w-md overflow-hidden"
    >
      <div className="p-6 w-full">
        <h2 className="text-xl font-semibold">Logout?</h2>
        <p>Are you sure you want to logout?</p>
      </div>
      <div className="bg-zinc-200 flex justify-end w-full p-4 gap-4">
        <button
          onClick={closeModal}
          className="bg-white px-4 py-2 rounded-md border border-zinc-400"
        >
          Cancel
        </button>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
