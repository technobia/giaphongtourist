import React, { useEffect, useState } from "react";
import HomeShowbiz from "../components/HomeShowbiz";
import HomePromotion from "../components/HomePromotion";
import HomeDestination from "../components/HomeDestination";
import HomeClients from "../components/HomeClients";
import { getTours } from "../services/tour";

const Homepage = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const getTourList = async () => {
      const data = await getTours();
      setTours(data)
    };
    getTourList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <HomeShowbiz tours={tours} />
      <div className="divider"><span /></div>
      <HomePromotion />
      <div className="divider"><span /></div>
      <HomeDestination tours={tours} />
      <div className="divider"><span /></div>
      <HomeClients />
      <div className="divider"><span /></div>
    </>
  );
};

export default Homepage;
