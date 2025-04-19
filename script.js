const form = document.getElementById("searchForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  search();
});

function search() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
  }
}