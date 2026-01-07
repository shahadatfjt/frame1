const upload = document.getElementById("upload");
const photo = document.getElementById("photo");
const zoom = document.getElementById("zoom");
const canvas = document.getElementById("canvas");

upload.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    photo.src = reader.result;
  };
  reader.readAsDataURL(file);
});

zoom.addEventListener("input", function () {
  photo.style.transform = `scale(${this.value})`;
});

function downloadImage() {
  const size = 300;
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  const scale = zoom.value;
  const imgSize = size * scale;

  ctx.drawImage(
    photo,
    (size - imgSize) / 2,
    (size - imgSize) / 2,
    imgSize,
    imgSize
  );

  const link = document.createElement("a");
  link.download = "photo-frame.png";
  link.href = canvas.toDataURL();
  link.click();
}
