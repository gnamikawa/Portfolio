import React, { useState } from 'react';
import { Fullscreen } from '../components/fullscreen';

export default function Resume(){
  return <>
    <div className='h-96'>
      <Fullscreen>
        <div className='absolute top-20'>
          asdfasdfasdfasdf<div>asdf</div>
          asdfasdfasdfasdf<div>asdf</div>
          asdfasdfasdfasdf<div>asdf</div>
          asdfasdfasdfasdf<div>asdf</div>
          asdfasdfasdfasdf<div>asdf</div>
        </div>
        <div className='absolute right-20'>this is another set of text</div>
      </Fullscreen>
    </div>
  </>
}