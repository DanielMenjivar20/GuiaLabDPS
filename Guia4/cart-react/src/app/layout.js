"use client"
import { Provider } from 'react-redux';
import store from '../app/redux/store';
import Navbar from '../app/components/Navbar';
import '../app/styles/globals.css';
export default function RootLayout({ children }) {
 return (
 <html lang="es">
 <body>
 <Provider store={store}>
 <Navbar />
 {children}
 </Provider>
 </body>
 </html>
 );
}


