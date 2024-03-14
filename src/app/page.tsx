
const ENV_URL = process.env.API_URL;

const fetchData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}info/version`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    return response.text(); // Use .text() to inspect the raw response
  })
  .then(text => {
    return text;
  })
  .catch(error => {
    console.error("Failed to fetch API:", error);
  });
  return response;
}

export default async function Home() {
  const data = await fetchData();
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      Hello World!
      <pre>{data as string}</pre>
    </main>
  );
}
