import React, { useEffect, useState } from 'react'

type AvailableSocials = "facebook" | "twitter"

type ShareMakerArgs = {
  href: string;
  social: AvailableSocials
}

const socialShareUrls = {
  facebook: "https://www.facebook.com/sharer/sharer.php?u=",
  twitter: "http://twitter.com/intent/tweet?url="
}

const availableSocials: AvailableSocials[] = ["facebook", "twitter"];

const shareUrlMaker = ({href, social}: ShareMakerArgs)  => {
  return `${socialShareUrls[social]}${encodeURIComponent(href)}`
}

function useShareUrls() {
  const [shareUrls, setShareUrls] = useState<string[]>([]);

  useEffect(() => {
    const {href} = window?.location;
    const newShareUrls: string[] = availableSocials.map((social) =>{
      const isValidSocial = availableSocials.includes(social)
      if(!isValidSocial) return '';
      return shareUrlMaker({href, social})
    });
    setShareUrls(newShareUrls)
  }, []);

  return shareUrls;
}

export default useShareUrls