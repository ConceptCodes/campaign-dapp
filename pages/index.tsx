import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Campaign from "../components/Campaign";
import Layout from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Sponzee POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Layout>
        <div className="space-y-5">
          <h1 className="text-6xl font-bold">All Campaigns</h1>
          <p className="text-gray-500">Browse and discover campaigns</p>
          <section className="grid grid-cols-3 gap-4">
            <Campaign
              title="Campaign 1"
              description="This is a description of the campaign"
              image="https://via.placeholder.com/300"
              brand="Brand 1"
              brandImageUrl="https://via.placeholder.com/50"
              id="1"
            />
            <Campaign
              title="Campaign 1"
              description="This is a description of the campaign"
              image="https://via.placeholder.com/300"
              brand="Brand 1"
              brandImageUrl="https://via.placeholder.com/50"
              id="1"
            />
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
