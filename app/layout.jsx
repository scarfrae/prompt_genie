//import styles to entire application
import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';


export const metadata = {
    title: "Prompt Genie",
    description: 'Explore and Create Prompts'
}
//className gradient changes background
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        {/*user auth on all pages*/}
        <Provider>
          <div className="main">
              {/*change the color palette*/}
              <div className='gradient'/>
          </div>
          <main className='app'>
              <Navbar />
              {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;