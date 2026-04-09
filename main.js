document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const kWh = document.getElementById("inputkWh");

    const popover = new bootstrap.Popover(btn, {trigger:'manual'});

    btn.addEventListener("click", function () {
        const value = parseInt(kWh.value);

        if (isNaN(value) || value < 0) {
            popover.show();
        } 
        else {
            popover.hide();

            let message = "";
            if (value >= 0 && value <= 100) {
                message = "Lifline Consumer: Discounted electricity rates";
            }
            else if (value <= 200) {
                message = "Low Consumption: Normal residential rate";
            }
            else if (value <= 300) {
                message = "Average Consumption: Typical electricity usage";
            }
            else if (value <= 500) {
                message = "High Consumption: Higher electricity usage";
            }
            else {
                message = "Very High Consumption: Heavy electricity users";
            }

            alert(message);
        }
    });
});
