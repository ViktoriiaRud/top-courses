import React from "react";
import './globals.css';
import { roboto_mono } from './fonts/font';
import { Button, HTag } from "./components";


export default function Page() {
  return (
    <>
      <div>
        <HTag tag='h3'>TEXT-TEST</HTag>
        <Button appearance='primary'>Click me </Button>
        <Button appearance='ghost'>Click me </Button>
        <h1 className={`${roboto_mono.className} text-center text-xl font-bold text-gray-900 mb-4`}>Profession designer from 0 to PRO</h1>
        <p className="text-center text-base text-gray-900 mb-4">Students will master not only the hard skills necessary to work as a web designer,
         but also soft skills - skills that will allow them to effectively interact in a team with managers,
         developers and marketers. Graduates of the faculty can successfully compete with middle-level web designers.</p>
      </div>
    </>
  )
}