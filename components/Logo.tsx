import React from "react";
import Image from "next/image";
import LogoAsset from 'public/favicon.png';


const Logo = () => <Image src={LogoAsset} alt="colchonfinito logo" layout='intrinsic' height='50px' width='50px'/>

export default Logo;