// pages/index.js
import { ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Jéssica Nathany Developer Backend</h1>
      <nav>
        <ul>
          <li><Link href="/book">Book</Link></li>
          <li><Link href="/howiam">How I am</Link></li>
          <li><Link href="/podcast">Podcast</Link></li>
          <li><Link href="/apis">APIs</Link></li>
          <li><Link href="/apis">Contact</Link></li>
        </ul>
      </nav>
      {/* content */}
    </div> 
  );
}
