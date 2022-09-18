import { useState } from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import HooksCounter from "./components/HooksCounter";
import Stats from "./components/Stats";
import store from "./redux/store";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];
function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });
    setState(updateCounter);
  };

  const decrement = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return { ...c };
    });
    setState(updateCounter);
  };

  return (
    <Provider store = {store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {state.map((count) => (
            <HooksCounter
              key={count.id}
              id={count.id}
              count={count.count}
              increment={increment}
              decrement={decrement}
            />
          ))}

          <Stats count={totalCount()} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
