document.oncontextmenu = disableRightClick;
document.onkeydown = disableCtrlU;

function disableRightClick(e) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "View Source Disabled",
  });
  return false;
}

function disableCtrlU(e) {
  if (
    (e.ctrlKey && e.key === "u") ||
    e.key === "U" ||
    e.key === "f12" ||
    e.key === "F12"
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "View Source Disabled",
    });

    return false;
  }
}
