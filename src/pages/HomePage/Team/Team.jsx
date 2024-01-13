import React, { useEffect, useState } from "react";
import TeamMemberCard from "../Team/TeamMemberCard ";
import demo_team from "../../../assets/demo_team.jpg";
import useData from "../../../hooks/useData";
import LoadingIcon from "../../../components/LoadingIcon";

const Team = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [team, setTeam] = useState([]);
  
  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("https://code-analyzer-server.vercel.app/team-members");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await response.json();
  //     setLoading(false);
  //     setTeam(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setError(true);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const baseURL = "https://code-analyzer-server.vercel.app/team-members";
  const {data : team, loading, error} = useData(baseURL);
  return (
    <section className="bg-gray-100  min-h-screen px-2 sm:px-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto p-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Our Team
          </h2>
          <p className="text-gray-600 leading-6">
            Meet the talented individuals who are making waves in our team and
            contributing to our success.
          </p>
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, id) => (
            <TeamMemberCard key={id} member={member} loading={loading} error={error} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
