type Data = Array<Record<string, string | number>>;
type SortBy = string;

function drawTable(data: Data, sortBy: SortBy): string {
  if (data.length === 0) return "";

  function colLabel(index: number): string {
    let label = "";

    while (index >= 0) {
      label = String.fromCharCode(65 + (index % 26)) + label;
      index = Math.floor(index / 26) - 1;
    }

    return label;
  }

  const dataSorted = [...data].sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (typeof valueA === "number" && typeof valueB === "number")
      return valueA - valueB;
    return String(valueA).localeCompare(String(valueB));
  });

  const columns = Object.keys(dataSorted[0]);

  const columnWidth: Record<string, number> = {};
  for (let i = 0; i < columns.length; i++) {
    const key = columns[i];
    columnWidth[key] = colLabel(i).length;
  }

  for (const row of dataSorted) {
    for (const key of columns) {
      const len = String(row[key] ?? "").length;
      if (len > columnWidth[key]) columnWidth[key] = len;
    }
  }

  const buildBorder = () =>
    "+" + columns.map((k) => "-".repeat(columnWidth[k] + 2)).join("+") + "+";

  const buildRow = (cells: string[]) =>
    "|" +
    cells
      .map((cell, i) => {
        const key = columns[i];
        return ` ${cell}${" ".repeat(columnWidth[key] - cell.length)} `;
      })
      .join("|") +
    "|";

  const border = buildBorder();
  const header = buildRow(columns.map((_, i) => colLabel(i)));
  const body = dataSorted.map((row) =>
    buildRow(columns.map((k) => String(row[k] ?? "")))
  );

  return [border, header, border, ...body, border].join("\n");
}
