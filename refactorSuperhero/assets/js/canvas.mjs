function crearGrafico(response) {
  const chartData = [];
  for (const power in response.powerstats) {
    if (response.powerstats[power] !== "null") {
      chartData.push({ y: Number(response.powerstats[power]), label: power });
    }
  }

  let chart = new CanvasJS.Chart("chartContainer", {
    theme: "dark1",
    backgroundColor: "#212529",
    title: {
      animationEnabled: true,
      text: `Estadísticas de Poder para ${response.name}`,
      fontSize: 28
    },
    data: [
      {
        type: "doughnut",
        startAngle: 60,
        innerRadius: 40,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        connectNullData: true,
        dataPoints: chartData
      }
    ]
  });
  return chart
}

export {crearGrafico}