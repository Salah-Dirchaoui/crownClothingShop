import Categories from "./Categories"

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {

        return <Categories key={category.id} categoryList={category} />
      })}
    </div>
  )
}

export default Directory
// 13. Reducers