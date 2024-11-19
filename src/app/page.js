"use client";

import Header from "@/components/header";
import { useState } from "react";


export default function Home() {
  const [notes, setNotes] = useState([]);

  const [filter, setFilter] = useState("All");

  const filteredNotes =
    filter === "All"
      ? notes
      : notes.filter((note) => note.tags.includes(filter.toLowerCase()));

  const categories = ["All", "recipe", "cooking", "fitness", "ideas"];

  const addNote = (newNote) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        ...newNote,
        id: prevNotes.length + 1,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }), // Format as "April 3, 2024"
      },
    ]);
  };
  
  return (
    <>
      <Header addNote={addNote} />
      <section className="px-40">
        <div className="container mt-10">
          {/* Filter Buttons */}
          <div className="flex space-x-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded border ${
                  filter === category
                    ? "bg-sky-500 text-white border-sky-500"
                    : "text-sky-500 border-sky-500"
                }`}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-40">
        <div className="container mt-10">
          {/* Notes Grid */}
          {filteredNotes.length > 0 ? (
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 bg-white rounded shadow hover:shadow-lg transition"
                >
                  <p className="text-gray-500 text-sm">{note.date}</p>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {note.title}
                  </h2>
                  <p className="text-gray-700">{note.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {note.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-lg font-medium text-center">
              No notes found for "{filter}" category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
