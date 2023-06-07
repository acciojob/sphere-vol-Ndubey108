function volume_sphere() {
    //Write your code here
  let radius = document.getElementById("radius").value;
  document.getElementById("volume").value = (4/3) * (Math.PI * (radius**3));
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
