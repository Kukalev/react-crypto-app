import { Layout, Typography } from 'antd'
import { useCrypto } from '../../context/crypto-context'
import AssetsTable from '../AssetsTable'
import PortfolioChart from '../PortfolioChart'

const contentStyle = {
	textAlign: 'center',

	minHeight: 'calc(100vh - 60px)',
	color: '#fff',
	backgroundColor: '#001529',
	padding: '1rem 2rem',
}

const chartTableContainer = {
	display: 'flex',
	flexDirection: 'column',
	gap: '2rem',
	padding: '1rem',
	marginTop: '7rem', // отступ от заголовка
}

export default function AppContent() {
	const { assets, crypto } = useCrypto()

	const cryptoPriceMap = crypto.reduce((acc, c) => {
		acc[c.id] = c.price
		return acc
	}, {})

	return (
		<Layout.Content style={contentStyle}>
			<Typography.Title
				level={2}
				style={{ textAlign: 'left', color: '#fff', margin: 0 }}
			>
				Portfolio:{' '}
				{assets
					.map(asset => asset.amount * cryptoPriceMap[asset.id])
					.reduce((acc, v) => (acc += v), 0)
					.toFixed(2)}
				$
			</Typography.Title>
			<div style={chartTableContainer}>
				<PortfolioChart />
				<AssetsTable />
			</div>
		</Layout.Content>
	)
}
