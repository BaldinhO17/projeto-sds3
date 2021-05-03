import NavBar from "./components/NavBar";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h1 className="text-primary">Hello, World</h1>
        <DataTable />
      </main>
      <Footer />
    </>
  );
}

export default App;
