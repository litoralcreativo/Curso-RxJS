import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

/* ajax.post(
  url,
  {
    id: 1,
    name: "Gaston",
  },
  {
    "mi-token": "ABC123",
  }
).subscribe(console.log); */

ajax({
  url: url,
  method: "DELETE",
  headers: {
    "mi-token": "ABC123",
  },
  body: {
    id: 1,
    name: "Gaston",
  },
}).subscribe(console.log);
