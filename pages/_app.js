import App from 'next/app'
import { InputProvider } from '../components/InputProvider'

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props

//   }
// }
export const MyApp = (Component, pageProps) => {
  return (
    <InputProvider>
      <Component {...pageProps} />
    </InputProvider>
  )
}
