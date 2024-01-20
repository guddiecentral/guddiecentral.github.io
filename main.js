var notificationBtn = document.getElementById("sub");



function handlePermission(permission) {
    // set the button to shown or hidden, depending on what the user answers
    notificationBtn.style.display =
      Notification.permission === "granted" ? "none" : "block";
}

function askNotificationPermission() {
  // function to actually ask the permissions
  

  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support notifications.");
  } else {
    Notification.requestPermission().then((permission) => {
      handlePermission(permission);
      const notification = new Notification("Guddie Central", { body: "Thank you! We will be sure to notify you when we are finished.", icon: "/guddieclassic(no bg) HD.png" });

    });
  }
}
notificationBtn.addEventListener("click", askNotificationPermission);
