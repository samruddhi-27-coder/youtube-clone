function Categories({ setCategory }) {
  const categories = ["All", "Music", "Gaming", "Coding"];

  return (
    <div className="flex gap-3 p-3 overflow-x-auto">
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => setCategory(cat)}
          className="bg-gray-200 px-4 py-1 rounded-full"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;