'use client';
import Image from 'next/image';
import { useState } from 'react';

const Header = ({ addNote }) => {
    const [openModal, setModal] = useState(false);

    const [noteData, setNoteData] = useState({
        title: "",
        description: "",
        tags: "",
    });

    const handleModal = () => {
        setModal(!openModal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNoteData({ ...noteData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteData.title && noteData.description && noteData.tags) {
            const newNote = {
                ...noteData,
                tags: noteData.tags.split(",").map((tag) => tag.trim()),
            };
            addNote(newNote); // Add note to parent state
            setNoteData({ title: "", description: "", tags: "" }); // Reset form
            setModal(false); // Close modal
        }
    };

    return (
        <>
            <header>
                <section className="px-40 py-5 bg-sky-100">
                    <div className="container flex justify-between">
                        <div className="LOGO">
                            <Image className="" src="/images/logo.svg" width={180} height={50} alt="Logo" />
                        </div>
                        <div className="">
                            <button
                                onClick={handleModal}
                                className="border-2 border-sky-500 shadow-lg rounded-lg bg-white text-sky-500 text-lg font-semibold py-2 px-4 hover:bg-sky-500 hover:text-white"
                            >
                                Add a Note
                            </button>
                        </div>
                    </div>
                </section>
            </header>
            {/* Modal */}
            {openModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-700">Add a Note</h2>
                                <button
                                    type="button"
                                    onClick={handleModal}
                                    className="text-gray-500 text-3xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="title" className="text-lg text-gray-600 font-medium">
                                    Note Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={noteData.title}
                                    onChange={handleChange}
                                    placeholder="Write a title"
                                    className="w-full border rounded-lg shadow-lg px-4 py-3 outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="text-lg text-gray-600 font-medium">
                                    Note Content
                                </label>
                                <textarea
                                    name="description"
                                    value={noteData.description}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Write a description"
                                    className="w-full border rounded-lg shadow-lg px-4 py-3 outline-none"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tags" className="text-lg text-gray-600 font-medium">
                                    Categories (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={noteData.tags}
                                    onChange={handleChange}
                                    placeholder="e.g., cooking, ideas"
                                    className="w-full border rounded-lg shadow-lg px-4 py-3 outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
                            >
                                Save Note
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
