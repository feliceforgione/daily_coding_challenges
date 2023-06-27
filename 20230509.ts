/* Results summary component challenge from frontendmento */

import { Fragment } from "react";
import data from "../../data.json";

import "./App.css";

const COLORS = [
  "bg-red-200",
  "bg-yellow-100",
  "bg-emerald-300",
  "bg-indigo-300",
];

function App() {
  const score = Math.floor(
    data.reduce((acc, val) => acc + val.score, 0) / data.length
  );

  return (
    <>
      <main className="w-full h-screen bg-slate-200 flex justify-center items-center">
        <div className="bg-white w-[34rem] h-96 flex gap-5 rounded-3xl">
          <div className="bg-gradient-to-b from-violet-500 to-violet-800 w-6/12 rounded-3xl flex flex-col items-center py-8 px-5 justify-between text-indigo-100">
            <h1 className="text-lg font-medium ">Your Result</h1>
            <div className="rounded-full bg-gradient-to-b  from-violet-800 to-violet-500 w-36 h-36 flex justify-center items-center">
              <div className="text-center">
                <div className="text-white text-5xl font-bold">{score}</div>
                <div className="text-violet-900">of 100</div>
              </div>
            </div>
            <h2>Great</h2>
            <p className="text-center text-sm">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="p-6 w-6/12 mt-4">
            <h1 className="text-blue-950 font-bold">Summary</h1>
            <div className="my-6">
              {data.map((cat, ind) => (
                <Fragment key={cat.category}>
                  <div
                    className={`mb-4 flex  p-2 rounded-xl justify-between  text-sm font-medium ${COLORS[ind]}`}
                  >
                    <div className="flex gap-2">
                      <img src={cat.icon} alt="" />
                      <span className="">{cat.category}</span>
                    </div>
                    <span>{cat.score} / 100</span>
                  </div>
                </Fragment>
              ))}
            </div>
            <button className="rounded-3xl text-center bg-blue-950 text-white w-full p-2 mt-2">
              Continue
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
