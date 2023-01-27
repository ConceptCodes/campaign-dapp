import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Campaign from "../components/Campaign";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Sponzee POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <main className="ml-[300px]">
          <h1 className="text-4xl font-bold">All Campaigns</h1>
          <section className="py-4">
            <Campaign
              title="Campaign 1"
              description="This is a description of the campaign"
              image="https://via.placeholder.com/300"
              brand="Brand 1"
              brandImageUrl="https://via.placeholder.com/50"
              id="1"
            />
          </section>
        </main>
      </Sidebar>
    </div>
  );
};

export default Home;
