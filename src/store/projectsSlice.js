import { createSlice } from "@reduxjs/toolkit";

export const initialProjects = [
  {
    slug: "nlp-sentiment-analysis",
    title: "NLP Sentiment Analysis",
    role: "Personal / Academic Project",
    year: "2025",
    tags: ["AI"],
    summary:
      "A sentiment analysis project using Natural Language Processing and Machine Learning.",
    description: [
      "Built a sentiment analysis model using Natural Language Processing and Machine Learning techniques to classify text by sentiment.",
    ],
    repoLink:
      "https://github.com/Abra0789/NLP-Project_Sentimental_Analysis_ML.git",
  },
  {
    slug: "nanogpt",
    title: "nanoGPT",
    role: "Personal Project",
    year: "2025",
    tags: ["AI"],
    summary:
      "An exploration of building and training a minimal GPT-style language model from scratch.",
    description: [
      "Explored the architecture and training process of a GPT-style transformer language model, building a minimal implementation to understand how large language models work under the hood.",
    ],
    repoLink: "https://github.com/Abra0789/Nano_GPT.git",
  },
  {
    slug: "automated-parcel-sorting-robot",
    title: "Automated Parcel-Sorting Robot",
    role: "Bachelor's Final Year Project",
    year: "2025",
    tags: ["Robotics"],
    summary:
      "A wireless Bluetooth-controlled parcel-sorting robot built for automated logistics.",
    description: [
      "Built a wireless Bluetooth-controlled parcel-sorting robot using an ESP32-WROOM-32 as the core controller.",
      "Used NEMA-17 stepper motors for linear motion and parcel dropping, and designed a turntable mechanism for 90° path switching on linear tracks.",
      "Implemented a timing belt system to drive four wheels in sync, keeping motion coordinated across the whole robot.",
    ],
    repoLink: "https://github.com/Abra0789/Thesis.git",
  },
  {
    slug: "automated-parcel-sorting-robot",
    title: "Automated Parcel-Sorting Robot",
    role: "Bachelor's Final Year Project",
    year: "2025",
    tags: ["Robotics"],
    summary:
      "A wireless Bluetooth-controlled parcel-sorting robot built for automated logistics.",
    description: [
      "Built a wireless Bluetooth-controlled parcel-sorting robot using an ESP32-WROOM-32 as the core controller.",
      "Used NEMA-17 stepper motors for linear motion and parcel dropping, and designed a turntable mechanism for 90° path switching on linear tracks.",
      "Implemented a timing belt system to drive four wheels in sync, keeping motion coordinated across the whole robot.",
    ],
  },
  {
    slug: "mealservice",
    title: "MealService",
    role: "Food Ordering & Monthly Meal Subscription",
    year: "2025",
    tags: ["Web Development", "Frontend"],
    summary:
      "A frontend-focused food ordering and monthly meal subscription platform.",
    description: [
      "A frontend-focused food ordering and monthly meal platform for people who have limited time to cook and prefer to order homemade meals for the entire month.",
      "Built with React, Tailwind CSS, Redux Toolkit, Vite, and Firebase Authentication — featuring meal browsing, search & filtering, cart management, monthly meal planning, and user login/signup.",
    ],
    demoLink: "https://meal-service-react-js-1-3kb5.vercel.app",
  },
  {
    slug: "theme-switcher",
    title: "Theme Switcher",
    role: "React Project",
    year: "2025",
    tags: ["Frontend"],
    summary:
      "A dynamic theme-switching application with 5 themes and system detection.",
    description: [
      "Built a dynamic theme-switching application using React Context API and custom hooks, supporting Light, Dark, Purple, Orange, and System themes.",
      "Includes localStorage persistence and automatic system theme detection.",
    ],
    demoLink: "https://theme-switcher-psi-seven.vercel.app",
  },
  {
    slug: "bibliophile-bliss",
    title: "Bibliophile Bliss",
    role: "Online Bookstore Platform",
    year: "2024",
    tags: ["Django", "Backend"],
    summary:
      "A full-stack Django bookstore where users can browse, search, and purchase books.",
    description: [
      "Developed a full-stack web application using Django, SQL, and Python that allows users to browse, search, and purchase books online.",
      "Implemented core features like user authentication, a shopping cart, and order management.",
    ],
    repoLink: "https://github.com/Shipra890/Bibliophile-Bliss-Project.git",
  },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    items: initialProjects,
    activeFilter: "All",
  },
  reducers: {
    setFilter(state, action) {
      state.activeFilter = action.payload;
    },
  },
});

export const { setFilter } = projectsSlice.actions;

export const selectAllProjects = (state) => state.projects.items;
export const selectActiveFilter = (state) => state.projects.activeFilter;

export const selectFilteredProjects = (state) => {
  const { items, activeFilter } = state.projects;
  if (activeFilter === "All") return items;
  return items.filter((project) => project.tags.includes(activeFilter));
};

export const selectFilterTags = (state) => {
  const tags = new Set();
  state.projects.items.forEach((project) =>
    project.tags.forEach((tag) => tags.add(tag)),
  );
  return ["All", ...Array.from(tags)];
};

export default projectsSlice.reducer;
