import React, { useState } from 'react';
import { getHeapStatistics } from 'v8';
import { Fullscreen } from '../components/fullscreen';
import Resumed from '@/markdown/resume.mdx';
import s from '@/styles/mdx.module.scss';


export async function getStaticProps(context) {
  return {
    props: {
      result: null
    },
  }
}

export default function Resume(props) {
  return <>
    <div className="mx-10 my-20">
      <div className={s.mdx}>
        <Resumed/>
      </div>
    </div>
  </>
}