import Image from "next/image";
import {Slider} from "@/components/Slider"
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import * as React from "react";
import {Navbar} from "@/components/Navbar";

export default function Home() {
    return (
        <div className={"flex justify-center items-center align-middle justify-items-center flex-col"}>
            <Navbar/>
            <div className={"flex justify-center"}>
                <Slider/>
                <Link href={"/form"} className={"absolute top-[80%]"}>
                    <Button className={buttonVariants({variant: "secondary"})}>
                        Apply Now
                    </Button>
                </Link>
            </div>
            <div id="about-us" className=" flex">

                <img loading="lazy" src="incubator-logo.png" alt="Sairam Incubator Foundation Logo"
                     className="incubation-main"/>

                <div className="data">
                    <h2 data-splitting> WHY INCUBATION<br/>IN SAIRAM?</h2>
                    <hr className="underline"/>
                    <p className="desc-info">
                        The incubation process allows entrepreneurs to preserve capital and gain
                        external support to accelerate their business growth.
                        <br/>Through business incubation, the enterprise center captures each
                        entrepreneur’s uniqueness and offers support and customized services to
                        maximize business potential.
                    </p>
                </div>
            </div>
        </div>
    );
}
