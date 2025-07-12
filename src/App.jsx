import { useState } from "react";

function App() {
  const [input1, setInput1] = useState([]);
  const [input2, setInput2] = useState([]);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (input1.length === 0 || input2.length === 0 || operation === null) return;
    const num1 = parseFloat(input1.join(""));
    const num2 = parseFloat(input2.join(""));
    let res;
    switch (operation) {
      case "+": res = num1 + num2; break;
      case "-": res = num1 - num2; break;
      case "x": res = num1 * num2; break;
      case "÷": res = num2 !== 0 ? num1 / num2 : "∞"; break;
      case "%": res = num1 % num2; break;
      default: res = null;
    }
    setResult(("= " + res).slice(0, 11));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-black flex items-center justify-center rounded-[20px] m-4 px-2 pt-6">
        <div className="w-[320px]">
          <div className="results flex flex-row justify-end items-center h-20">
            <div className="text-white text-right text-3xl px-4 py-6 mb-3">{input1}</div>
            <div className="text-gray-500 text-right text-2xl px-4 mb-3">{operation}</div>
            <div className="text-white text-right text-3xl px-4 py-6 mb-3">{input2}</div>
            <div className="text-orange-500 text-right text-3xl px-4 mb-3 max-lg:text-2xl">{result}</div>
          </div>

          <div className="grid grid-cols-4 gap-3 px-3 pb-3">
            <button onClick={() => { setInput1([]); setInput2([]); setOperation(null); setResult(null); }} className="bg-orange-500 hover:bg-orange-400 text-white text-2xl rounded-full h-16">AC</button>
            <button onClick={() => {
              if (operation === null && input1.length > 0) {
                const num = -parseFloat(input1.join(""));
                setInput1(String(num).split(""));
              } else if (input2.length > 0) {
                const num = -parseFloat(input2.join(""));
                setInput2(String(num).split(""));
              }
            }} className="bg-orange-500 hover:bg-orange-400 text-white text-2xl rounded-full h-16">+/-</button>
            <button onClick={() => { if (input1.length > 0) setOperation("%"); }} className="bg-orange-500 hover:bg-orange-400 text-white text-2xl rounded-full h-16">%</button>
            <button onClick={() => { if (input1.length > 0) setOperation("÷"); }} className="bg-orange-500 hover:bg-orange-400 text-white text-2xl rounded-full h-16">÷</button>
          </div>

          <div className="grid grid-cols-4 gap-3 px-3 pb-3">
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "7"]) : setInput2(prev => [...prev, "7"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">7</button>
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "8"]) : setInput2(prev => [...prev, "8"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">8</button>
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "9"]) : setInput2(prev => [...prev, "9"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">9</button>
            <button onClick={() => { if (input1.length > 0) setOperation("x"); }} className="bg-orange-500 hover:bg-orange-400 text-white text-2xl rounded-full h-16">x</button>
          </div>

          <div className="grid grid-cols-4 gap-3 px-3 pb-3">
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "4"]) : setInput2(prev => [...prev, "4"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">4</button>
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "5"]) : setInput2(prev => [...prev, "5"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">5</button>
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "6"]) : setInput2(prev => [...prev, "6"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">6</button>
            <button onClick={() => { if (input1.length > 0) setOperation("-"); }} className="bg-orange-500 hover:bg-orange-400 text-white text-2xl rounded-full h-16">-</button>
          </div>

          <div className="grid grid-cols-4 gap-3 px-3 pb-3">
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "1"]) : setInput2(prev => [...prev, "1"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">1</button>
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "2"]) : setInput2(prev => [...prev, "2"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">2</button>
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "3"]) : setInput2(prev => [...prev, "3"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">3</button>
            <button onClick={() => { if (input1.length > 0) setOperation("+"); }} className="bg-orange-500 hover:bg-orange-400 text-white text-2xl rounded-full h-16">+</button>
          </div>

          <div className="grid grid-cols-4 gap-3 px-3 pb-5">
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "0"]) : setInput2(prev => [...prev, "0"]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16 col-span-2 text-left pl-6">0</button>
            <button onClick={() => { operation === null ? setInput1(prev => [...prev, "."]) : setInput2(prev => [...prev, "."]); }} className="bg-[#333] hover:bg-[#444] text-white text-2xl rounded-full h-16">.</button>
            <button onClick={calculate} className="bg-orange-500 hover:bg-orange-400 text-white text-2xl rounded-full h-16">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
