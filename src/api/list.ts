export async function getList(page: number) {
  let url = `http://swapi.dev/api/people/?page=${page}`;
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}