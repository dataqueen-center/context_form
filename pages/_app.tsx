import App from 'next/app'
import { InputProvider } from '../components/InputProvider'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <InputProvider>
        <Component {...pageProps} />
      </InputProvider>
    )
  }
}

export default MyApp
