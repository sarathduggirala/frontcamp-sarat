export default function createChannelDropdown(result) {
  let select_channel = document.getElementById("select-channel");
  let channel = document.createElement("option");
  channel.setAttribute("selected", "selected");
  channel.setAttribute("disabled", "disabled");
  channel.innerText = `--Select Channel--`;
  select_channel.appendChild(channel);
  result.forEach(item => {
    let channel = document.createElement("option");
    channel.setAttribute("value", item.id);
    channel.innerText = item.name;
    select_channel.appendChild(channel);
  });
}
