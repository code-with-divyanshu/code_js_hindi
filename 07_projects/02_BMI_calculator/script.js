const form = document.querySelector("form");

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");
  results.style.backgroundColor = "#212121";
  results.style.borderRadius = "10px";
  results.style.padding = "10px";

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    if (bmi <= 24.9 && bmi >= 18.6) {
      results.innerHTML = `<span>Normal Range: ${bmi}</span>`;
    } else if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight: ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Overweight : ${bmi}</span>`;
    }
  }
});
