import Modal from "react-modal";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
    padding: "2rem",
    border: "none",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export function CreateTaskModal({ isOpen, onClose }: TaskModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Task Modal"
      style={customStyles}
      ariaHideApp={false} // Remova isso apenas se você não configurar o app element!
    >
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Criar Tarefa</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-xl font-bold"
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Título da tarefa"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <textarea
            placeholder="Descrição da tarefa"
            className="border border-gray-300 rounded-md p-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-medium rounded-md py-2 transition"
          >
            Criar Tarefa
          </button>
        </form>
      </div>
    </Modal>
  );
}
