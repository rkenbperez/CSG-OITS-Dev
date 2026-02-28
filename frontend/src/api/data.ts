/* change the any utility type based on the data object */
export default async function fetchData() {
  try {
    const apiBaseUrl = import.meta.env.VITE_API_URL ?? '';
    const response = await fetch(`${apiBaseUrl}/get/data`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    const data = await response.json();

    return data;
  } catch (error) {
    /* throw the error to the tsx file and render the error using component or console it */
    throw error;
  }
}
