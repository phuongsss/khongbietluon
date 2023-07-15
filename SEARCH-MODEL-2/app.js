const box = document.querySelector(".box-user");
const search = document.querySelector(".search");

const arr = [
  { ten: "Lê Nguyễn Phương", lop: "Lớp:12C9" },
  { ten: "Bích Ngọc", lop: "Lớp:12C9" },
  { ten: "Cao Thanh Toàn", lop: "Lớp:12C9" },
  { ten: "Đặng Lực", lop: "Lớp:12C9" },
  { ten: "Hồng Trà", lop: "Lớp:12C9" },
  { ten: "Huỳnh Gia", lop: "Lớp:12C9" },
  { ten: "Huỳnh Võ Trà My", lop: "Lớp:12C9" },
  { ten: "Hữu Bằng", lop: "Lớp:12C9" },
  { ten: "Kiều Phương", lop: "Lớp:12C9" },
  { ten: "Lê Đỉnh Khương", lop: "Lớp:12C9" },
  { ten: "Lương Tuấn Đạt", lop: "Lớp:12C9" },
  { ten: "Minh Thạnh", lop: "Lớp:12C9" },
  { ten: "Nguyễn Chí Tân", lop: "Lớp:12C9" },
  { ten: "Nguyễn Diệu Thanh", lop: "Lớp:12C9" },
  { ten: "Nguyễn Quốc Huy", lop: "Lớp:12C9" },
];

let html = ``;

const render = function () {
  arr.forEach((data) => {
    html += `
        <div class="box-main">
        <p class="ten">${data.ten}</p>
        <p class="lop">${data.lop}</p>
        </div>
        `;
  });
  box.innerHTML = html;
};
render();
const user = document.querySelectorAll(".box-main");

search.addEventListener("input", (e) => {
  const value = e.target.value;
  user.forEach((data) => {
    const text = data.querySelector(".ten");
    if (text.textContent.toLowerCase().includes(value)) {
      data.style.display = "";
    } else {
      data.style.display = "none";
    }
  });
});
