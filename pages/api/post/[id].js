import data from './../../../data.json'

export default function handler({ query: { id } }, res) {
  const pageData = data['posts'][id - 1]

  pageData
    ? res.status(200).json(pageData)
    : res.status(404).json({ message: `Parameter ${id} not found.` })
}
