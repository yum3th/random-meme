'use server'

import Image from "next/image";
// import { useEffect, useState } from "react";

async function fetchRandomMemeImageUrl() {
  const response = await fetch("https://meme-api.com/gimme");
  const data = await response.json();
  return data.url;
}

export default async function Home() {
  const imageUrl = await fetchRandomMemeImageUrl();

  return (
    <div>
      <Image src={imageUrl} alt=""
        fill={true}
        style={{ objectFit: 'contain' }}
        loading="lazy"
      />
    </div>
  )
}