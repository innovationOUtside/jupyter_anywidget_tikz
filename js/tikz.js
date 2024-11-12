import "./tikz.css";
import "./uuid.js";
import html from "./tikz.html";
import { generateUUID } from "./uuid.js";

//https://github.com/prinsss/node-tikzjax
import { load, tex2svg } from "https://cdn.jsdelivr.net/npm/node-tikzjax@1.0.3/+esm";
/*
**
 * Failed to bundle using Rollup v2.79.1: the file imports a not supported node.js built-in module "fs".
 * If you believe this to be an issue with jsDelivr, and not with the package itself, please open an issue at https://github.com/jsdelivr/jsdelivr
 */

// THere is is also simple js at https://tikzjax.com/
// One way might be to create a simple html page that loads that script, runs it in a page with the code
// added to a script element, then scrapes the inserted svg?

function render({ model, el }) {
   model.set("response", { status: "ready" });
   model.save_changes();

  load().then(() => {
    alert("ready 2...");
    const _headless = model.get("headless");
    model.set("response", { status: "ready" });
    model.save_changes();

    if (!_headless) {
      let el2 = document.createElement("div");
      el2.innerHTML = html;
      const uuid = generateUUID();
      el2.id = uuid;
      el.appendChild(el2);
    }

    model.on("change:doc_content", () => {
      const source = model.get("doc_content");

      if (source != "") {
        model.set("response", { status: "working...", tex: source });
        model.save_changes();
        async function handle_svg(model) {
          const params = {}; // TO DOMException
          const svg = await tex2svg(source, params);
          model.set("svg", svg);
          model.set("response", { status: "completed", svg: svg });
          model.save_changes();
          return svg;
        }

        handle_svg(model).then((svg) => {
          if (!_headless) {
            const img_el = el.querySelector('div[title="image-container"]');
            const dot_el = el.querySelector('pre[title="dot-container"]');
            dot_el.innerHTML = dot;
            img_el.innerHTML = "Processing...";
            img_el.innerHTML = svg;
          }
        });
      } else {
        model.set("response", { status: "completed", tex: source, svg: "" });
        model.save_changes();
      }
    });
  });
}

export default { render };
