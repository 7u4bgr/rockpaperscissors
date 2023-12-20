import React, { useState } from "react";
import styles from "./index.module.css";
import Makas from "../../assets/images/cutting.png";
import Tas from "../../assets/images/granite.png";
import Paper from "../../assets/images/new-document.png";
import {ArrowIcon} from '../../icons/'
const Home = () => {
  const [data, setData] = useState([`${Makas}`, `${Tas}`, `${Paper}`]);
  const [rnd, setRnd] = useState(null);
  const [index, setIndex] = useState(true);
  const [win, setWin] = useState(null);

  const SelectHandler = (i) => {
    const random = Math.floor(Math.random() * data.length);
    setRnd(random);
    setIndex(i);
    CheckWin(i,random);
  };
  const CheckWin = (i, random) => {
    console.log(i,random)
    if (i === 0 && random === 1) {
      setWin("Computer Winner");
    } else if (i === 0 && random === 2) {
      setWin("Player Winner");
    } else if (i === 0 && random === 0) {
      setWin("It is equal");
    } else if (i === 1 && random === 0) {
      setWin("Player Winner");
    } else if (i === 2 && random === 1) {
      setWin("Player Winner");
    } else if (i === 2 && random === 2) {
      setWin("It is equal");
    } else if (i === 1 && random === 1) {
      setWin("It is equal");
    }
   
  };
  return (
    <>
      <div className={styles.background}>
        <div className={styles.flexs}>
          <div className={styles.controlimages}>
            <div className={styles.player1}>
              <div className={styles.svgcontrol}>

              <h2>Click Element</h2>
              <ArrowIcon/>
              </div>
              <div className={styles.playercontrol}>
                <img onClick={() => SelectHandler(0)} src={data[0]} alt="" />
                <img onClick={() => SelectHandler(1)} src={data[1]} alt="" />
                <img onClick={() => SelectHandler(2)} src={data[2]} alt="" />
              </div>
              <div className={styles.playerselect}>
                <h2>Player:</h2>
                <img src={data[index]} alt="" />
              </div>
            </div>
            <div className={styles.images}>
              <h2>Computer:</h2>
              <img onClick={() => SelectHandler()} src={data[rnd]} alt="" />
            </div>
          </div>
          <div className={styles.winner}>
            <h2>{win}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
