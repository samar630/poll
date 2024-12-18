"use client"

import "./globals.css";
import {Cario} from '@fontsource/cairo'
import { Provider } from 'react-redux';
import store from "../redux/store";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>استبيان</title>
        <meta name="استبيان" content="استبيان" />
      <link rel="icon" href="/list.svg" />
      </head>
      <body>
      <Provider store={store}>
         {children}
         </Provider>
      </body>
    </html>
  );
}
