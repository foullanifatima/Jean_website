
const btn = document.getElementById("button");

const form = document.getElementById('form');




btn.addEventListener("click", function(e) {
    e.preventDefault();

    [name, email, message] = [...form.elements].map((item)=>item.value);
    console.log(name, email , message);

    // sending form content using smtp
});

