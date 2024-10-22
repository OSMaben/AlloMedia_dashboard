import { Button, Typography, Card } from "@material-tailwind/react";
// import BackImg from "../assets/image8.svg"
import CoinBase from "../assets/logo-coinbase.svg"
import Google from "../assets/logo-google.svg"
import Netflix from "../assets/logo-netflix.svg"
import Pinterest from "../assets/logo-pinterest.svg"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Home() {
  return (
      <div className="!flex h-[55vh] w-full items-center justify-between px-10">
        <img
            width={1200}
            height={1200}
            src="https://img.freepik.com/free-photo/food-delivery-man-with-boxes-with-food_1303-27723.jpg"
            alt="bg-img"
            className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
        />
        <div className="container mx-auto mt-28">
          <div className="grid grid-cols-12 text-center lg:text-left">
            <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
              <Typography
                  variant="h1"
                  color="blue-gray"
                  className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
              >
                Experience Fast and Reliable Delivery at Your Fingertips
              </Typography>
              <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
                Are you ready to simplify your life with our top-notch delivery services? Look no further! We are your trusted partner for all your delivery needs.
              </Typography>
              <div className="mb-8 flex justify-center gap-4 lg:justify-start">
                <Button color="gray"><FontAwesomeIcon icon={faArrowRight} className="mr-1" /></Button>
                <Button color="gray" variant="outlined">
                  see Articles
                </Button>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
                <img
                    width={144}
                    height={144}
                    className="w-36 grayscale opacity-60"
                    src={Pinterest}
                    alt="pinterest"
                />
                <img
                    width={144}
                    height={144}
                    className="w-36 grayscale opacity-60"
                    src={Netflix}
                    alt="netflix"
                />
                <img
                    width={144}
                    height={144}
                    className="w-36 grayscale opacity-60"
                    src={CoinBase}
                    alt="coinbase"
                />
                <img
                    width={144}
                    height={144}
                    className="w-36 grayscale opacity-60"
                    src={Google}
                    alt="google"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
  );
}

export default Home;
