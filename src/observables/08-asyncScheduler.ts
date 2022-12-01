import { asyncScheduler } from "rxjs";

//setTimeout(() => {}, 3000);
//setInterval(() => {}, 3000);

const saludar = () => {
  console.log("Mahalo");
};
const saludar2 = (arg: { nom: string; ape: string }) => {
  console.log(`Mahalo ${arg.nom} ${arg.ape}`);
};

// asyncScheduler.schedule(saludar2, 1000, { nom: "Gaston", ape: "Chatelet" });
const susp = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);
    this.schedule(state + 1, 1000);
  },
  1000,
  0
);

asyncScheduler.schedule(() => susp.unsubscribe(), 6000);
