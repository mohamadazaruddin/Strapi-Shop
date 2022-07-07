import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import People from "./component/Products/Products";
import Homepage from "./component/home/Homepage";
import Aboutus from "./component/Aboutus/Aboutus";
import Header from "./component/home/Header";
import Videoplayer from "./Videoplayer";
import Link from "next/link";
import Navbar from "./Navbar";
// import Pdf from "./component/Pdf";
const Home: NextPage = () => {
  return (
    <Box h="100%" bg="#000">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Aboutus /> */}

      <Homepage />
      {/*
    
      <People /> */}
      {/* <Videoplayer /> */}
      {/* <Pdf /> */}
    </Box>
  );
};

export default Home;
