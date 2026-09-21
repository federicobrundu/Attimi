import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "fs";
const r = new Resvg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10" fill="red"/></svg>',{fitTo:{mode:"width",value:64}});
const png = r.render().asPng();
writeFileSync("public/logo/png/_test.png", png);
console.log("resvg OK, bytes:", png.length);
