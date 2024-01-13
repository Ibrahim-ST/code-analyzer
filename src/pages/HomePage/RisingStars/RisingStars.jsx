import React, { useEffect, useState } from "react";
import RisingStarCard from "./RisingStarCard";
import star_1 from "../../../assets/r1.jpg";
import star_2 from "../../../assets/r2.jpg";
import star_3 from "../../../assets/r3.jpg";
import star_4 from "../../../assets/r4.jpg";
import useData from "../../../hooks/useData";
import LoadingIcon from "../../../components/LoadingIcon";

const RisingStars = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [risingStars, setRisingStars] = useState([]);

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("https://code-analyzer-server.vercel.app/rising-stars");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await response.json();
  //     setLoading(false);
  //     setRisingStars(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setError(true);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const baseURL = "https://code-analyzer-server.vercel.app/rising-stars";

  const { data: risingStars, loading, error } = useData(baseURL);
  return (
    <section className="bg-gray-100 py-48 px-20">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto p-8 text-secondary font-medium text-center">
          <h2 className="text-4xl font-bold mb-8  text-gray-800">
            Rising Stars
          </h2>
          <p className="text-gray-600 leading-6">
            Our Extraordinary Talent & Dedicated Rising Stars
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {risingStars.map((member, index) => (
            <RisingStarCard
              key={index}
              member={member}
              loading={loading}
              error={error}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisingStars;
