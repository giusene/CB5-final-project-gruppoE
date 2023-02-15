import NftList from "@/components/nft-list/NftList";

const Nft = ({ nft }) => {
  // console.log(nft);

  return (
    <div>
      <NftList data={nft} />
    </div>
  );
};

export default Nft;

/* FETCH */
export async function getStaticProps() {
  const res = await fetch(`https://api.coingecko.com/api/v3/nfts/list?per_page=20`);
  const nft = await res.json();

  return {
    props: {
      nft,
    },
  };
}
