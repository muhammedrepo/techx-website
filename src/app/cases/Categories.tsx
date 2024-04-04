interface CategoriesProps {
  categories: string[]
  filterItems: (category: string) => void
}

const Categories = ({ categories, filterItems }: CategoriesProps) => {
  return (
    <div className="col-12 col-md-7 mt-4 mt-md-0 text-md-end">
      <div className="case-cat-filter">
        {categories.map((category, index) => (
          <button key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories
