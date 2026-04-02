// Data Source - Array of project objects
const myProjects = [
  {
    title: "Dashboard Redesign",
    description: "A full overhaul of an analytics platform with a scalable component library.",
    category: "Web Design",
    imageURL: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
    link: "#"
  },
  {
    title: "Finance App UI",
    description: "A mobile banking experience focused on clarity and speed.",
    category: "Mobile",
    imageURL: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    link: "#"
  },
  {
    title: "Brand Identity",
    description: "End-to-end brand identity including logo, palette, and type system.",
    category: "Branding",
    imageURL: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80",
    link: "#"
  },
  {
    title: "E-Commerce Storefront",
    description: "A responsive online store with cart functionality and checkout flow.",
    category: "Web Design",
    imageURL: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    link: "#"
  },
  {
    title: "Fitness Tracker App",
    description: "A health and wellness app with workout logging and progress charts.",
    category: "Mobile",
    imageURL: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
    link: "#"
  },
  {
    title: "Portfolio Template",
    description: "A clean, reusable portfolio template for creative professionals.",
    category: "Branding",
    imageURL: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    link: "#"
  }
];

// Render projects into the DOM
function renderProjects(projects) {
  const container = document.getElementById("cardsContainer");

  if (projects.length === 0) {
    container.innerHTML = '<p class="no-results">No projects found.</p>';
    return;
  }

  const cardsHTML = projects.map(function (project) {
    return `
      <article class="card">
        <div class="card-image-wrap">
          <img src="${project.imageURL}" alt="${project.title}" />
          <span class="badge">${project.category}</span>
        </div>
        <div class="card-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="btn">View Project</a>
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = cardsHTML;
  console.log("Rendered " + projects.length + " project(s)");
}

// Filter projects based on search input
function filterProjects(searchTerm) {
  const term = searchTerm.toLowerCase();

  const filtered = myProjects.filter(function (project) {
    return (
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.category.toLowerCase().includes(term)
    );
  });

  console.log("Search: " + searchTerm + " — Found " + filtered.length + " result");
  renderProjects(filtered);
}

// Attach event listener to search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function (e) {
  filterProjects(e.target.value);
});

// Render all projects on page load
renderProjects(myProjects);
