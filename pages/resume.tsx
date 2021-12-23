import React, { useState } from 'react';
import { getHeapStatistics } from 'v8';
import { Fullscreen } from '../components/fullscreen';
import Resumed from '@/markdown/resume.mdx';
import s from '@/styles/mdx.module.scss';
import {run} from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime.js'

export async function getStaticProps(context) {
  return {
    props: {
      result: null
    },
  }
}

export default function Resume(props) {
  return <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"></link>
    <div className="bg-gray-100 py-10">
      <div className='rounded-md bg-white w-fit mx-auto p-10 shadow-sm'>
        <div className={s.mdx}>
          <Resumed/>
        </div>
      </div>
    </div>
  </>
}