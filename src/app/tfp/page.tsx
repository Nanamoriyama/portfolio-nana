"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaGithubSquare } from "react-icons/fa";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="m-4 pt-8 md:pl-8"></div>

      <div className="m-4 flex justify-between">
        <div>
          <h4 className="font-light text-3xl m-4 md:text-4xl">
            Travel Foot Print Calculator
          </h4>
          <p className="m-4 p-2 mr-2 text-xs md:ml-6 md:mb-0 md:text-base">
            <a
              href="https://medium.com/@techlabs.rotterdam/travel-footprint-calculator-making-your-travels-more-sustainable-d1f9bc52a7fe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold md:text-base"
            >
              Click Here
            </a>
            <span className="p-2">to check the project summary</span>
            <br />
            TechLab Group Project
            <br />
            together with Data science Team and UX/UI Team.
            <br />
            We receive the award.🏆
          </p>
          <br />
          <div className="flex items-center ml-8 md:ml-8">
            <a
              href="https://tfc.nanamoriyama.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold md:text-base"
            >
              https://tfc.nanamoriyama.com/
            </a>
            <span className="ml-2 h-2.5 w-2.5 rounded-full bg-green-500"></span>
            <a
              href="https://github.com/Nanamoriyama/travel-footprint-calculator"
              className="text-slate-700 hover:text-black duration-300"
            >
              <FaGithubSquare className="h-6 w-6 ml-6" />
            </a>
          </div>
          <p className="m-6 p-4 md:p-14">
            With this app, you can see the difference in emissions between
            plane, car and train after that, you can choose the offset options
            whenever you make plans to travel. <br />
            <br />
            Introduction What are the ideas behind your project? For which
            problem should a solution be found? A lot of people like to travel,
            but a lot of people also want to live more sustainably and it can be
            difficult to combine those two. Especially flying has a reputation
            for being bad for the environment. We all know this, but we still
            actually travel quite a lot. <br />
            <br />
            Our initial idea was to show people the emissions they are causing
            with different modes of transport so they can compare them and
            choose the most sustainable option. We wanted to show them the
            difference in emissions between plane, car and train. But, it turned
            out that even though people who know how much CO2 emissions it
            causes to, for example, fly from Amsterdam to Barcelona (i.e. 857 kg
            CO2, as opposed to 177 kg by train and 589 kg by car), about 50% of
            them actually still choose to fly. <br />
            Making people aware of the amount of emissions does not seem enough,
            it’s too abstract. What does 857 kg even mean? So we decided to also
            include ways of compensating for the emissions by doing (or not
            doing) activities in your daily life, like eating less meat or
            buying secondhand clothing.
            <br /> That way you can show people the impact of their travels and
            make it less abstract, plus you offer people a way to travel more
            sustainably by giving them offset options. This way, you know that
            857 kg of CO2 emissions actually means you’ll have to cycle for 5714
            km (instead of driving your car) or do not eat 32 kg of beef.
            <br />
            <br /> This might lead you to make a different choice for your mode
            of transport for your travels, or at least it gives you ideas about
            how to compensate for your emissions. All of this would be
            incorporated into an application you can use to calculate your
            emissions and offset options whenever you make plans to travel.
          </p>
          <ul className="ml-6 p-6">
            <li>Date: June 2024</li>
            <li>Category: Front-end</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/tfc7.png")}
        >
          <Image
            className="object-cover"
            src="/images/tfc7.png"
            alt="Screenshot 1"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/tfc5.png")}
        >
          <Image
            className="object-cover"
            src="/images/tfc5.png"
            alt="Screenshot 2"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/tfc6.png")}
        >
          <p>We discussed ideas on Miro Boad </p>
          <Image
            className="object-cover"
            src="/images/tfc6.png"
            alt="Screenshot 3"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/tfc8.png")}
        >
          <Image
            className="object-cover"
            src="/images/tfc8.png"
            alt="Screenshot 4"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/tfc9.png")}
        >
          <Image
            className="object-cover"
            src="/images/tfc9.png"
            alt="Screenshot 4"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/tfc10.png")}
        >
          <Image
            className="object-cover"
            src="/images/tfc10.png"
            alt="Screenshot 4"
            width={400}
            height={200}
          />
        </div>
      </div>

      {/* モーダル */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="object-cover"
            />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-stone-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Page;
