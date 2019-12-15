import {IpcService} from "./IpcService";

const ipc = new IpcService();

document.getElementById('request-os-info').addEventListener('click', async () => {
  const t = await ipc.send<{ kernel: string }>('system-info');
  document.getElementById('os-info').innerHTML = t.kernel;
});
