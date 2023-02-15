import CoinsList from "@/components/coinslist/CoinsList";

const Trade = ({ coins }) => {
  return (
    <div>
      <CoinsList coins={coins} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  const coins = await res.json();
  console.log(coins);

  return {
    props: {
      coins,
    },
  };
}

export default Trade;
