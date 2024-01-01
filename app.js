function Table() {
  return (
    <table class="table table-bordered sticky">
      <thead>
        <tr>
          <th
            rowspan="2"
            class="align-middle text-center fixed-col col-detail-label"
          >
            <div class="label">Detail Pekerjaan</div>
          </th>
          <th
            rowspan="2"
            class="align-middle text-center fixed-col col-detail-bobot"
          >
            <div class="label">Bobot (%)</div>
          </th>
          {Object.keys(months).map((month) => (
            <th class="text-center">{month}</th>
          ))}
        </tr>
        <tr>
          {Object.entries(months).map(([_, dateRange]) => (
            <th>
              <tr
                class="d-grid"
                style={{
                  gridTemplateColumns: formatString(
                    "repeat({0},60px)",
                    dateRange.length
                  ),
                }}
              >
                {new Array(dateRange.length).fill(0).map((_, idx) => (
                  <th class="text-center">{idx + 1}</th>
                ))}
              </tr>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="fixed-col col-detail-label"></td>
          <td class="fixed-col col-detail-bobot"></td>
          {Object.entries(months).map(([_, dateRange]) => (
            <td className="align-middle">
              <tr
                class="d-grid"
                style={{
                  gridTemplateColumns: formatString(
                    "repeat({0},60px)",
                    dateRange.length
                  ),
                }}
              >
                {dateRange.map((date) => (
                  <th class="text-center">{date}</th>
                ))}
              </tr>
            </td>
          ))}
        </tr>

        {WORKS_DETAIL.map((detail, detailIdx) => (
          <tr>
            <td class="fixed-col col-detail-label">
              <div class="label">{detail.label}</div>
            </td>
            <td class="fixed-col col-detail-bobot">
              <div class="text-center label">
                {data.Bobot.bobot_pekerjaan[detail.key]}%
              </div>
            </td>
            {groupBobotPerWorkDetail.at(detailIdx).map((detail) => (
              <td>
                <tr
                  class="d-grid"
                  style={{
                    gridTemplateColumns: formatString(
                      "repeat({0}, 60px)",
                      detail.length
                    ),
                  }}
                >
                  {detail.map((d) => (
                    <td class="text-center">
                      {Boolean(d) && formatString("{0}%", d)}
                    </td>
                  ))}
                </tr>
              </td>
            ))}
          </tr>
        ))}

        <tr>
          <td class="text-end fixed-col col-detail-label">
            <div class="label">Total (%)</div>
          </td>
          <td class="text-center fixed-col col-detail-bobot">
            <div class="label">
              {WORKS_DETAIL.reduce(
                (curr, detail) => curr + data.Bobot.bobot_pekerjaan[detail.key],
                0
              )}
              %
            </div>
          </td>
          {groupBobotRencanaAkumulatifPerDateRangeMonth.map((dArr, dArrIdx) => {
            return (
              <td>
                <tr
                  class="d-grid"
                  style={{
                    gridTemplateColumns: formatString(
                      "repeat({0}, 60px)",
                      dArr.length
                    ),
                  }}
                >
                  {dArr.map((d) => {
                    return <td />;
                  })}
                </tr>
              </td>
            );
          })}
        </tr>

        <tr>
          <td colspan="2" class="fw-bold fixed-col col-bobot">
            <div class="label">Bobot Rencana</div>
          </td>
          {Object.entries(groupBobotRencanaPerDateRangeMonth).map(
            ([_, percentages]) => (
              <td>
                <tr
                  class="d-grid"
                  style={{
                    gridTemplateColumns: formatString(
                      "repeat({0},60px)",
                      percentages.length
                    ),
                  }}
                >
                  {percentages.map((date) => (
                    <td class="text-center">
                      {Boolean(date) && formatString("{0}%", date)}
                    </td>
                  ))}
                </tr>
              </td>
            )
          )}
        </tr>
        <tr>
          <td colspan="2" class="fw-bold fixed-col col-bobot">
            <div class="label">Bobot Rencana Akumulatif</div>
          </td>
          {groupBobotRencanaAkumulatifPerDateRangeMonth.map((dArr, dArrIdx) => {
            return (
              <td>
                <tr
                  class="d-grid"
                  style={{
                    gridTemplateColumns: formatString(
                      "repeat({0}, 60px)",
                      dArr.length
                    ),
                  }}
                >
                  {dArr.map((d) => {
                    if (!d) {
                      return <td />;
                    }
                    return <td class="text-center">{Math.ceil(d)}%</td>;
                  })}
                </tr>
              </td>
            );
          })}
        </tr>
        <tr>
          <td colspan="2" class="fw-bold fixed-col col-bobot">
            <div class="label">Bobot Aktual</div>
          </td>
          {realisations.map((dArr) => (
            <td>
              <tr
                class="d-grid"
                style={{
                  gridTemplateColumns: formatString(
                    "repeat({0}, 60px)",
                    dArr.length
                  ),
                }}
              >
                {dArr.map((d) => (
                  <td class="text-center">{d}%</td>
                ))}
              </tr>
            </td>
          ))}
        </tr>
        <tr>
          <td colspan="2" class="fw-bold fixed-col col-bobot">
            <div class="label">Bobot Aktual Akumulatif</div>
          </td>
          {groupRelisasiAkumulatifPerDateRangeMonth.map((dArr, dArrIdx) => {
            return (
              <td>
                <tr
                  class="d-grid"
                  style={{
                    gridTemplateColumns: formatString(
                      "repeat({0}, 60px)",
                      dArr.length
                    ),
                  }}
                >
                  {dArr.map((d) => {
                    if (d === 0) {
                      return <td />;
                    }
                    return <td class="text-center">{d}%</td>;
                  })}
                </tr>
              </td>
            );
          })}
        </tr>
        <tr>
          <td colspan="2" class="fw-bold fixed-col col-bobot">
            <div class="label">Nilai Deviasi</div>
          </td>

          {deviasi.map((dArr) => {
            return (
              <td>
                <tr
                  class="d-grid"
                  style={{
                    gridTemplateColumns: formatString(
                      "repeat({0}, 60px)",
                      dArr.length
                    ),
                  }}
                >
                  {dArr.map((d) => {
                    if (!d) {
                      return <td />;
                    }
                    return <td class="text-center">{Math.ceil(d)}%</td>;
                  })}
                </tr>
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}
function Chart_() {
  const canvas = React.useRef(null);

  React.useEffect(() => {
    if (!canvas.current) return;

    const chartData = {
      labels: data.tanggal || [],
      datasets: [
        {
          label: "Rencana",
          data: groupBobotRencanaAkumulatifPerDateRangeMonth.flat(2),
          borderColor: "#dc3545",
          backgroundColor: "transparent",
          pointStyle: false,
        },
        {
          label: "Realisasi",
          data: groupRelisasiAkumulatifPerDateRangeMonth.flat(2),
          borderColor: "#0d6efd",
          backgroundColor: "transparent",
          pointStyle: false,
        },
      ],
    };

    const config = {
      type: "line",
      data: chartData,

      options: {
        height: 100,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },

          title: {
            display: true,
            text: "Grafik Kurva S",
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    };

    Chart.defaults.color = "#000";
    new Chart(canvas.current, config);
  }, []);

  return (
    <canvas
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 111, 164, 0.40) 0%, rgba(96, 154, 182, 0.16) 100%)",
        borderRadius: 15,
        padding: 10,
      }}
      ref={canvas}
    ></canvas>
  );
}

function App() {
  const [maxWidth, setMaxWidth] = React.useState(0);
  const container = React.useRef(null);

  React.useEffect(() => {
    if (!container.current) return;
    setMaxWidth(innerDimensions(container.current));
  }, []);

  return (
    <div ref={container} class="container-md py-4">
      <div class="row">
        <div class="col-5">
          <img src="./logo.png" alt="logo" class="mb-4" />

          <div class="text-center">
            <h3 class="display-5">
              <a href="" class="text-decoration-none text-black">
                {"<"}
              </a>{" "}
              Proyek: {data.nama_proyek}
            </h3>
            <p>Progress minggu ke : X</p>
          </div>
          <div
            class="rounded p-4 mx-auto my-5"
            style={{
              backgroundColor: "rgba(96, 154, 182, 0.4)",
              width: 242,
              height: 110,
            }}
          >
            <div class="d-flex align-items-center">
              <div class="bg-danger" style={{ height: 1, width: 45 }} />
              <div class="text-danger ms-2">Rencana</div>
            </div>
            <div class="d-flex align-items-center">
              <div class="bg-primary" style={{ height: 1, width: 45 }} />
              <div class="text-primary ms-2">Realisasi</div>
            </div>
          </div>
        </div>
        <div class="col-7">
          <Chart_ />
        </div>
      </div>

      <div className="mt-4">
        <div style={{ maxWidth: maxWidth || "unset", overflowX: "auto" }}>
          <Table />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
