document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("searchButton");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim();
    const sanitizedQuery = encodeURIComponent(query); 

    fetch(`superheroes.php?query=${sanitizedQuery}`)
      .then(response => response.text())
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        resultDiv.innerHTML = "<p>Error fetching data.</p>";
        console.error("AJAX error:", error);
      });
  });
});
