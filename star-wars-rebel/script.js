(function ($) {
    const initValues = {
        red: 9,
        yellow: 9,
        blue: 9,
        violet: 9,
        bb: 10,
        fire: 9,
    };
    const counters = {};
    let total = 0;

    function setColorCounter(color) {
        $(`.box.${color} .counter`).html(counters[color]);
    }

    function updateTotal() {
        $('.total-left').html(total);
    }

    function updateFireRate() {
        const rate = Math.round((counters.fire / total) * 100);

        $('.fire-rate').html(`${rate}%`);
    }

    function updateAvg() {
        const avg = Math.round((total - counters.fire) / counters.fire);

        $('.cards-avg').html(avg);
    }

    function updateInfos() {
        updateTotal();
        updateFireRate();
        updateAvg();
    }

    function updateColor(color) {
        if (!counters[color]) {
            return;
        }

        --counters[color];
        --total;

        setColorCounter(color);
        updateInfos();
    }

    function init() {
        Object.assign(counters, initValues);
        total = Object.keys(counters).reduce((sum, color) => sum + counters[color], 0);

        setColorCounter('red');
        setColorCounter('yellow');
        setColorCounter('blue');
        setColorCounter('violet');
        setColorCounter('bb');
        setColorCounter('fire');

        updateInfos();
    }

    $(document).ready(() => {
        init();

        $('.box.red').on('click', () => updateColor('red'));
        $('.box.yellow').on('click', () => updateColor('yellow'));
        $('.box.blue').on('click', () => updateColor('blue'));
        $('.box.violet').on('click', () => updateColor('violet'));
        $('.box.bb').on('click', () => updateColor('bb'));
        $('.box.fire').on('click', () => updateColor('fire'));
        $('.reset-btn').on('click', () => init());
    });
}(jQuery));
