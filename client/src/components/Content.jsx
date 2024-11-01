import React, { useState } from 'react';
import Form from './Form';

const Content = () => {
  const [result, setResult] = useState(false);

  // Conditional rendering based on result state
  let resultH1, resultP;

  if (result === 0) {
    resultH1 = (
      <h1 className="text-6xl font-bold text-[#40BB61] mb-5">
        NEGATIVE
      </h1>
    );
    resultP = (
      <p className="text-lg font-semibold text-[#40BB61]">
        Our test results indicate that you are clear of diabetes. We recommend maintaining a healthy lifestyle and scheduling regular check-ups to stay proactive about your health.
      </p>
    );
  } else if (result === 1) {
    resultH1 = (
      <h1 className="text-6xl font-bold text-[#B20000] mb-5">
        POSITIVE
      </h1>
    );
    resultP = (
      <p className="text-lg font-semibold text-[#B20000]">
        Our test results indicate that you may have diabetes. We recommend staying calm and consulting a healthcare professional for confirmation and guidance.
      </p>
    );
  } else {
    resultH1 = (
      <h1 className="text-2xl font-bold text-[#FF7373]">
        Your result will be shown here!
      </h1>
    );
    resultP = <></>;
  }

  return (
    <div className="flex justify-center gap-2 px-10 py-5">
      <div>
        <Form changeRes={setResult} />
      </div>

      <div className="w-2/3 flex flex-col gap-2">
        <div className="bg-[#FF7373] p-10 rounded-xl text-white font-bold text-lg">
          1 in 10 people worldwide have diabetes, but nearly half of them are undiagnosed. Early detection can prevent serious complications.
        </div>

        <div className="h-full flex flex-col justify-center items-center border-2 border-[#FF7373] rounded-xl p-5">
          {resultH1}
          {resultP}
        </div>
      </div>
    </div>
  );
};

export default Content;
