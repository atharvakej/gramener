export default function json2html(data) {
    // Create a Set of all unique keys across the objects
    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

    // Start building the HTML table as a string
    let html = `<table data-user="atharvados12121@gmail.com">`;
    
    // Add the table headers
    html += "<thead><tr>";
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
    
    // Add the table rows
    html += "<tbody>";
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        html += "</tr>";
    });
    html += "</tbody></table>";
    
    return html;
}
