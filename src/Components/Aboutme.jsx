import React from 'react';


const AboutMe = () => {
  return (
    <div
      id="top"
      className="relative w-full h-screen flex items-center pt-40  justify-center text-white overflow-y-auto "
    >
      <img
        className="absolute w-full h-full left-0 top-0 object-cover pointer-events-none"
        src="https://images7.alphacoders.com/128/1289611.jpg"
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
      
      <div className="relative max-w-4xl p-8 sm:p-10 bg-black/50 backdrop-blur-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">AMAN KUMAR CHHARI</h1>
        <h2 className="text-2xl font-semibold text-gray-300 sm:text-3xl">AS META DEV</h2>
        <p className="mt-2 italic text-sm sm:text-lg">Where Aesthetics Meet Algorithms</p>
        
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-200">
          I help brands and businesses transform ideas into powerful digital experiences by merging creativity with technology.
          As a <strong>Full Stack Web Developer</strong>, I specialize in <strong>UI/UX design</strong>, <strong>mobile-first development</strong>, and <strong>project management</strong>, ensuring every project is visually stunning, high-performing, and user-friendly.
        </p>
        
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-200">
          I don’t just build websites—I create intelligent, scalable, and innovative solutions that enhance productivity and engagement.
          By leveraging modern technologies in unique ways, I optimize workflows, automate processes, and deliver seamless experiences that make an impact.
        </p>
        
        <button className="mt-6 px-8 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-lg font-semibold">
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
