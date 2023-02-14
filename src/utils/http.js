/* const BASE_URL = "https://api.coingecko.com/api/v3/";

const GET = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await res.json();
    if (res.status >= 400) {
      throw new Error("Can't establish a connection!");
    }

    return data;
  } catch (err) {
    return { status: false };
  }
};

export { GET }; */
