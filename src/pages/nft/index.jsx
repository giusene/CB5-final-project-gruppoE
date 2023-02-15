import NftList from "@/components/nftList/NftList";

const Nft = ({ data }) => {
  console.log(data);

  return (
    <div>
      <NftList data={data} />
    </div>
  );
};

export default Nft;

/* FETCH */
export async function getStaticProps() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  const res = await fetch(
    `https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=1&page_size=10&include=all&refresh_metadata=false`,
    options
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
