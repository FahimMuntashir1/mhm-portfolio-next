"use client";

// components

// image next
import Image from "next/image";

// motion
import { motion } from "framer-motion";

// varients
import { fadeIn } from "../../../variants";

const Hero = () => {
  return (
    <section className="h-screen xl:h-[90vh] bg-white " id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text and img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between h-full">
          {/* text */}
          <div className="text-center items-start xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Finest <span className="text-accent">Global</span>
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find your ideal roide for any adventure with our diverse range of
              affordable and dependable car rentals.
            </motion.p>

            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              {/* btn app store */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=""
                ></Image>
              </button>
              {/* btn google */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt=""
                ></Image>
              </button>
            </motion.div>
          </div>
          {/* img  car*/}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:right-0 xl:top-48"
          >
            <Image
              src={"/images/moon.png"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            ></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
