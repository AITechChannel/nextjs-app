import React from "react";

const About = ({ data }: { data: any }) => {
  console.log(data);
  return <div className="bg-red-400 h-[100vh]">About</div>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://ggg-kpi-service.mor.com.vn/api/goals`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default About;
