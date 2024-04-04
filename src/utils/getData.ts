export const getData = async (url: string, apiKey?: string) => {
  const headers = new Headers();

  if (apiKey) {
    headers.append("apiKey", apiKey);
  }

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  const data = await response.json();

  return data;
};
