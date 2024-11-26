import CardList from "../components/CardList";
import HeadData from "../components/HeadData";
import Layout from "../components/Layout/Layout";
import TableData from "../components/TableData";

const HomePage = () => {
  return (
    <>
      {/* <Sidebar />
      <MainContent /> */}
      <Layout>
        <>
          <HeadData />

         <CardList/>
          
          <TableData/>
        </>
      </Layout>
    </>
  );
};

export default HomePage;
