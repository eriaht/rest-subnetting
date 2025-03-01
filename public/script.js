const form = document.querySelector(".form");
const networkClass = document.querySelector("#network_class");
const ip = document.querySelector("#ip");
const cidr = document.querySelector("#cidr");
const output = document.querySelector(".output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let subnetInputs = {};

  subnetInputs.networkClass = networkClass.value.toUpperCase();
  subnetInputs.ip = ip.value;
  subnetInputs.cidr = cidr.value;

  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/subnetting?networkClass=${subnetInputs.networkClass}&ip=${subnetInputs.ip}&cidr=${subnetInputs.cidr}`
    );
    const data = (await res.json()).data.subnetData;

    const outputString = Object.keys(data)
      .map(
        (key) => `<div class="detail">
                <p>${key}: ${data[key]}</p>
            </div>`
      )
      .join("");

    output.innerHTML = outputString;
  } catch (err) {
    output.innerHTML = "";
    alert(err.message);
  } finally {
    // networkClass.value = "";
    // ip.value = "";
    // cidr.value = "";
  }
});
