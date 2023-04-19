import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      {/* https://sepolia.infura.io/v3/f6909bfc7b2f4a49957d2ab163ec56fb */}
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
