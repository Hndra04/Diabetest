import React, { useState } from 'react';

const Form = ({ changeRes }) => {
  // State variables for each input
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [pregnancies, setPregnancies] = useState('');

  // Fetch request function to send data
  const predict = () => {
    const data = {
      age: age,
      bmi: bmi,
      blood_pressure: bloodPressure,
      pregnancies: pregnancies,
    };

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data['prediction']);
        if (changeRes) changeRes(data['prediction']);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="p-10 shadow-xl rounded-xl border-2">
      <div className="flex items-center gap-5 pb-5">
        <div>
          <img className="w-8" src="images/logo.png" alt="" />
        </div>
        <h1 className="text-3xl font-bold text-[#FF7373]">DiabeTest</h1>
      </div>

      <h1 className="text-2xl font-bold">Early Detection for a Healthier Tomorrow!</h1>
      <p className="mb-5">
        DiabeTest uses machine learning to predict whether you have diabetes with over 95% accuracy.
      </p>

      <div className="flex flex-col gap-10">
        <div>
          <label htmlFor="age" className="font-bold text-lg">Age</label>
          <input
            id="age"
            className="border-2 border-black w-full p-2 rounded-md"
            type="text"
            placeholder="How old are you?"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="bmi" className="font-bold text-lg">BMI</label>
          <input
            id="bmi"
            className="border-2 border-black w-full p-2 rounded-md"
            type="text"
            placeholder="What's your BMI?"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="bloodPressure" className="font-bold text-lg">Blood Pressure</label>
          <input
            id="bloodPressure"
            className="border-2 border-black w-full p-2 rounded-md"
            type="text"
            placeholder="What's your blood pressure?"
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="pregnancies" className="font-bold text-lg">Pregnancies</label>
          <input
            id="pregnancies"
            className="border-2 border-black w-full p-2 rounded-md"
            type="text"
            placeholder="How many times have you been pregnant?"
            value={pregnancies}
            onChange={(e) => setPregnancies(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button onClick={predict} className="font-bold bg-[#FF7373] px-5 py-2 rounded-xl text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
