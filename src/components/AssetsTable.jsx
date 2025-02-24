import { Table } from 'antd'
import { useCrypto } from '../context/crypto-context'

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
	},
	{
		title: 'Price, $',
		dataIndex: 'price',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.price - b.price,
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.amount - b.amount,
	},
	{
		title: 'Total, $',
		dataIndex: 'totalAmount',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.totalAmount - b.totalAmount,
		render: value => value.toFixed(2),
	},
]

export default function AssetsTable() {
	const { assets } = useCrypto()
	const data = assets.map(asset => ({
		key: asset.id,
		name: asset.name,
		price: asset.price,
		amount: asset.amount,
		totalAmount: asset.totalAmount,
	}))
	return (
		<Table 
			pagination={false}
			columns={columns}
			dataSource={data}
			showSorterTooltip={{
				target: 'sorter-icon',
			}}
		/>
	)
}
