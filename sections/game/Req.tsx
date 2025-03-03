export default function Req({ min, rec }) {
  const unknown = (v) => {
    if (v === 0) return v;
    else if (!v) return <p className="w-full text-center inline">--</p>;
    else return <p className="inline">{v}</p>;
  };
  const gbmb = (el) => {
    if (el >= 300) return "mb";
    else return "GB";
  };

  return (
    <section>
      <table
        className="w-full bg-bglight dark:bg-darker text-center"
        id="table"
      >
        <thead>
          <th></th>
          <th>Minimum</th>
          <th>Recomended</th>
        </thead>
        <tbody>
          <tr>
            <td>CPU</td>
            <td>{unknown(min.CPU)}</td>
            <td>{unknown(rec.CPU)}</td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>{unknown(min.GPU)}</td>
            <td>{unknown(rec.GPU)}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>
              {unknown(min.RAM)} {gbmb(min.RAM)}
            </td>
            <td>
              {unknown(rec.RAM)} {gbmb(rec.RAM)}
            </td>
          </tr>
          <tr>
            <td>VRAM</td>
            <td>
              {unknown(min.VRAM)} {gbmb(min.VRAM)}
            </td>
            <td>
              {unknown(rec.VRAM)} {gbmb(rec.VRAM)}
            </td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>
              {unknown(min.storage)} {gbmb(min.storage)}
            </td>
            <td>
              {unknown(rec.storage)} {gbmb(rec.storage)}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

// minCPU , minGPU , minRAM , minVRAM , recCPU , recGPU , recRAM , recVRAM , storage
