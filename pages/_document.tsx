import Document,{ Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(){
  return (
    <Html >
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      </Head>
      <body className='bg-fixed bg-gradient-to-r from-butter to-blue dark:from-black dark:to-black dark:text-butter'>
        <Main />
        <NextScript />
      </body> 
    </Html>
  )
  }
} 
export default MyDocument