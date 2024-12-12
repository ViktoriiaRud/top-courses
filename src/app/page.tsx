import React from "react";
import './globals.css';
import './theme/globalStyles';
import { roboto_mono } from './theme/fonts/font';
import { Button, HTag, Rating, Tag } from "./components";


export default function Page() {
  return (
    <>
      <div>
        <HTag tag='h3'>TEXT-TEST</HTag>
        <Button variant='primary' arrow='right'>Click me </Button>
        <Button variant='ghost' arrow='down'>Click me </Button>
        <h1 className={`${roboto_mono.className} text-center text-xl font-bold text-gray-900 mb-4`}>Profession designer from 0 to PRO</h1>
        <p className="text-center text-base text-gray-900 mb-4">Students will master not only the hard skills necessary to work as a web designer,
         but also soft skills - skills that will allow them to effectively interact in a team with managers,
         developers and marketers. Graduates of the faculty can successfully compete with middle-level web designers.</p>
         <Tag size="s" color='primary'>Primary</Tag>
         <Tag size="m" color='green'>Green</Tag>
         <Tag size="m" color="red">Red</Tag>
         <Rating rating={4}/>
      </div>
    </>
  )
}