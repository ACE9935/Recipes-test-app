import styles from '../styles/globals.scss'
import React from "react";
import Layout from '../component/Layout'
const { motion, AnimatePresence } = require("framer-motion");
import {animation} from '../component/animation';


function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
      <motion.main
       key={router.route}
       variants={animation}
       initial={"hidden"}
       animate={"visible"}
       exit={"hidden"}
      >
      <Component {...pageProps} />
      </motion.main>
      </AnimatePresence>
    </Layout>
  )
}

export default App
