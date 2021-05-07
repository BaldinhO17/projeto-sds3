
import NavBar from '../../components/NavBar'
import BarChart from '../../components/BarChart'
import DonutChart from '../../components/DonutChart'
import DataTable from '../../components/DataTable'
import Footer from '../../components/Footer'


const Dashboard = () => {
    return (
        <>
            <NavBar />
            <main className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso  (%)</h5>
                        <DonutChart />
                    </div>
                </div>

                <h3 className="text-primary py-3">Todas vendas</h3>
                <DataTable />
            </main>
            <Footer />
        </>
    )
}


export default Dashboard;