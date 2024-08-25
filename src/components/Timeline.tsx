import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="relative flex flex-col items-start ml-12">
        {/* 中央の縦線 */}
        <div className="absolute w-1 bg-blue-300 h-full left-0 transform"></div>

        {/* 各タイムラインエントリー */}
        <div className="mb-12 flex flex-col md:flex-row items-start w-full">
          <div className="relative flex items-center">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="ml-5 pt-5 flex flex-col md:flex-row md:items-start w-full md:pt-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-stone-400 md:pl-14">
                1993
              </h2>
              <p className="p-2 pr-8 mr-2 md:p-14">
                I was born in Osaka, Japan. During my school years, I loved
                unicycling, badminton, and swimming. However, I absolutely
                disliked piano lessons! <br />I participated in parades and
                competitions with my unicycle and really enjoyed it.
                <br />
                <br /> During high school, I studied in Sydney, London, and
                Oregon in the US. Then during my university years, I attended
                Macquarie University in Sydney to further improve my academic
                English.
              </p>
            </div>

            <video
              src="/ichi.mp4"
              controls
              className="w-full mr-4 pr-8 md:w-1/3 mt-4 md:mt-16 md:ml-4"
              muted
            />
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-start w-full">
          <div className="relative flex items-center">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="ml-5 pt-5 flex flex-col md:flex-row md:items-start w-full md:pt-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-stone-400 md:pl-14">
                2017
              </h2>
              <p className="p-2 pr-10 mr-2 md:p-14">
                {" "}
                After graduating from university, I decided to move to the
                Netherlands. I founded my own Japanese language school and
                helped launch two Japanese restaurants in Utrecht, managing them
                alongside the owners. My curiosity about creating websites for
                my school led me to dive into web development.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-start w-full">
          <div className="relative flex items-center">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="ml-5 pt-5 flex flex-col md:flex-row md:items-start w-full md:pt-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-stone-400 md:pl-14">
                2023
              </h2>
              <p className="p-2 pr-8 mr-2 md:p-14">
                {" "}
                I started my tech journey with the Udemy Web Developer Bootcamp,
                where I learned HTML, CSS, JavaScript, node.js, Json, axios, and
                express.js. I made my first website for my japanese school.
                That’s where I fell in love with making things that people can
                actually interact with online. I've also explored React,
                TypeScript, Next.js, AWS, MongoDB, Auth0, Firebase, and Redux to
                round out my skills. I am continuously learning the field. In
                addition, to improve my problem-solving skills, I do LeetCode
                daily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
