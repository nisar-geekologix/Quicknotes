import { useState } from "react";

export default function EditNoteModal({ isOpen, onClose, note, onSave }) {
  const [editedNote, setEditedNote] = useState(note);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(editedNote); // Call the parent save function with the updated note
    onClose(); // Close the modal
  };

  const handleCategoryAdd = (category) => {
    if (!editedNote.tags.includes(category)) {
      setEditedNote({ ...editedNote, tags: [...editedNote.tags, category] });
    }
  };

  const handleCategoryRemove = (category) => {
    setEditedNote({
      ...editedNote,
      tags: editedNote.tags.filter((tag) => tag !== category),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Edit a Note</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div>
          {/* Note Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Note Title
            </label>
            <input
              type="text"
              value={editedNote.title}
              onChange={(e) =>
                setEditedNote({ ...editedNote, title: e.target.value })
              }
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter note title"
            />
          </div>

          {/* Note Content */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Note Content
            </label>
            <textarea
              value={editedNote.description}
              onChange={(e) =>
                setEditedNote({ ...editedNote, description: e.target.value })
              }
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="4"
              placeholder="Enter note content"
            ></textarea>
          </div>

          {/* Categories */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Categories
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {editedNote.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center bg-red-100 text-red-600 px-3 py-1 rounded text-sm"
                >
                  {tag}
                  <button
                    onClick={() => handleCategoryRemove(tag)}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    ✕
                  </button>
                </span>
              ))}
              {/* Add new category */}
              <input
                type="text"
                placeholder="Add a new category"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value) {
                    handleCategoryAdd(e.target.value.trim());
                    e.target.value = "";
                  }
                }}
                className="w-auto flex-1 px-3 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
