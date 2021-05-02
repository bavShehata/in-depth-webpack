export const CreateImage = (url) => {
  const img = document.createElement("img");
  img.height = "300";
  img.src = url;
  document.body.appendChild(img);
};
