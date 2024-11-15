import { GiCampingTent } from "react-icons/gi"; 
import Link from "next/link";

import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
      <GiCampingTent className="w-10 h-10"/>
       
      </Link>
    </Button>
  );
}

export default Logo
