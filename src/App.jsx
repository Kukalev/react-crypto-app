
import { CryptoContextProvider } from './context/crypto-context'
import AppLayaout from './components/layout/AppLayout'

export default function App() {
	return (
		<CryptoContextProvider>
			<AppLayaout />
		</CryptoContextProvider>
	)
}
