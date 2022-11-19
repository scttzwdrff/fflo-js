function newFilter(cols, rows) {
    let f = {
        cells: new Array(cols * rows).fill(0),
        cols: cols,
        rows: rows,
    };
    return f;
}
function seedFilter(filter) {
    for (let row = 0; row < filter.rows; row++) {
        for (let col = 0; col < filter.cols; col++) {
            filter.cells[col * filter.rows + row] = 1.0 - 2.0 * Math.random();
        }
    }
}
function randomSeededFilter() {
    let rows = Math.floor(Math.random() * 10 + 2);
    let cols = Math.floor(Math.random() * 10 + 2);
    let filter = newFilter(cols, rows);
    seedFilter(filter);
    return filter;
}
function newRedFilter() {
    red_filter = randomSeededFilter();
    console.log('red filter updated');
}
function newGreenFilter() {
    green_filter = randomSeededFilter();
}
function newBlueFilter() {
    blue_filter = randomSeededFilter();
}
function applyFilterCell(filter, layer, col, row) {
    let sum = 0;
    let counter = 0;
    let this_row = 0;
    let this_col = 0;
    let target_index = 0;
    for (let c = 0; c < filter.cols; c++) {
        for (let r = 0; r < filter.rows; r++) {
            this_row = r + row;
            if (this_row >= global_rows)
                this_row -= global_rows;
            this_col = c + col;
            if (this_col >= global_cols)
                this_col -= global_cols;
            target_index = this_col * global_rows + this_row;
            sum += layer[target_index] * filter.cells[c * filter.rows + r];
        }
    }
    return Math.tanh(sum);
}
function applyFilter(filter, layer) {
    let workspace = new Array(global_rows * global_cols).fill(0);
    for (let c = 0; c < global_cols; c++) {
        for (let r = 0; r < global_rows; r++) {
            workspace[c * global_rows + r] = applyFilterCell(filter, layer, c, r);
        }
    }
    return workspace;
}
//# sourceMappingURL=filter.js.map