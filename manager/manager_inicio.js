$(document).ready(() => {

    const SwalColors = {
        rojo: "rgba(250, 0, 0, 0.45)",
        verde: "rgba(0, 250, 0, 0.45)",
        amarillo: "rgba(255, 233, 0, 0.45)",
        azul: "#0000FF59",
    };

    function SwalOverlayColor(color) {
        setTimeout(() => {
            $(".swal-overlay").css({ "background-color": SwalColors[color] });
        }, 10);
    }

    $("#btn_numeros").click(() => {
        $.ajax({
            type: "POST",
            url: "control/control_inicio.php",
            success: (r) => {
                r = jQuery.parseJSON(r);
                SwalOverlayColor("azul");
                swal({
                    title: "Numeros",
                    text: `Numeros aleatorios:\n${r}\n`,
                    icon: "info",
                    button: true,
                });
            }
        });
    });
});