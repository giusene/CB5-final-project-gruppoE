import { currencyFormat } from "@/utils/currencyFormat";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import styles from "./styles.module.scss";
import { cartActions, favoriteActions } from "@/store/actions";
import { AppCtx } from "@/store/context";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

const CoinsItem = ({ data }) => {
  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);

  const {
    id,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
  } = data;

  const addToCartHandler = () => {
    dispatch({
      type: cartActions.ADD_TO_CART,
      payload: data,
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.icon_wrapper}>
        <Image src={image} alt={name} width={100} height={100} />
        <div className={styles.coin_name}>
          <p className={styles.name}>{name}</p>
          <p className={styles.symbol}>{symbol && symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className={styles.price}>
        <div>
          <p>{currencyFormat(current_price)}</p>
        </div>
        <div>
          <p
            className={`${styles.price_change} ${
              price_change_percentage_24h < 0
                ? styles.price_down
                : styles.price_up
            }`}
          >
            {price_change_percentage_24h < 0 ? (
              <FiTrendingDown />
            ) : (
              <FiTrendingUp />
            )}
            <span> </span>
            {price_change_percentage_24h}
          </p>
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <Link href={"/trade"}>
          <button onClick={() => addToCartHandler()}>TRADE</button>
        </Link>

        {/* FAVORITE BUTTON -> DISPATCH + CONDITIONAL RENDERING */}
        {currentUser.favorite.find((fav) => fav.id === data.id) ? (
          <i>
            <AiFillStar
              onClick={() =>
                dispatch({
                  type: favoriteActions.REMOVE_FAVORITE,
                  payload: data,
                })
              }
            />
          </i>
        ) : (
          <i>
            <AiOutlineStar
              onClick={() =>
                dispatch({ type: favoriteActions.ADD_FAVORITE, payload: data })
              }
            />
          </i>
        )}
      </div>
    </div>
  );
};

export default CoinsItem;
