function updatePlot() {
    red_layer = applyFilter(red_filter, red_layer);
    green_layer = applyFilter(green_filter, green_layer);
    blue_layer = applyFilter(blue_filter, blue_layer);
    if (heavy_mode) {
        red_layer = applyFilter(red_filter_heavy, red_layer);
        green_layer = applyFilter(green_filter_heavy, green_layer);
        blue_layer = applyFilter(blue_filter_heavy, blue_layer);
    }
    if (alt_mode) {
        red_layer = applyFilter(red_filter_alt, red_layer);
        green_layer = applyFilter(green_filter_alt, green_layer);
        blue_layer = applyFilter(blue_filter_alt, blue_layer);
    }
    plotCurrentCells();
}
//# sourceMappingURL=manager.js.map