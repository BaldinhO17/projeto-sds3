import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale'
import { BASE_URL } from 'utils/requests'
import { round } from 'utils/format'

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    },
    series: SeriesData[];
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "% Sucesso",
                data: []
            }
        ]
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(response => {
                const data = response.data as SaleSuccess[]
                const myLabels = data.map(saleSuccess => saleSuccess.sellerName)
                const mySeries = data.map(saleSuccess => round((100 * saleSuccess.deals / saleSuccess.visited), 1))
                setChartData(
                    {
                        labels: {
                            categories: myLabels
                        },
                        series: [
                            {
                                name: "% Sucesso",
                                data: mySeries
                            }
                        ]
                    }
                )
            })
    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type='bar'
            height='240'
        />
    );
}

export default BarChart;
