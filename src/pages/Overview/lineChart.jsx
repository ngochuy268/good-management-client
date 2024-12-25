import Chart from 'react-apexcharts'

const ApexChart = ({ products }) => {
  const options = {
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
            borderRadius: 4
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: products.map(product => product.namegood),
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        title: {
            text: '数量',
        }
    },
    fill: {
        opacity: 1
    },
    title: {
        text: '1週間での商品在庫数',
        align: 'left',
        style: {
            fontSize: '24px'
        }
    },
    colors: ['#2E93fA'],
    tooltip: {
        y: {
            formatter: function(val) {
                return val + " 個"
            }
        }
    }
};

const series = [{
    name: '在庫数',
    data: products.map(product => product.quantity)
}];

return (
    <div >
        <Chart 
            options={options} 
            series={series} 
            type="bar" 
            height={350}
        />
    </div>
  )
}

export default ApexChart;