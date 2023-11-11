export default function ModalContainer({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) {
  return (
    <div
      onClick={closeModal}
      className="fixed top-0 z-20 flex items-center justify-center w-screen h-screen opacity-0 bg-black/50 animate-fade-in"
    >
      {children}
    </div>
  );
}
