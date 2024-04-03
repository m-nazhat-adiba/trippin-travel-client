export const useFetch = async (url: string, apiKey?: string) => {
  const headers = new Headers();

  if (apiKey) {
    headers.append("apiKey", apiKey);
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("category cok", data);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};
