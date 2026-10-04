function openGift() {

    document.getElementById("hero").style.display = "none";

    document.getElementById("mainContent").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}