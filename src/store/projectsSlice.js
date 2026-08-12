import { createSlice } from '@reduxjs/toolkit'

export const initialProjects = [
  {
    slug: 'automated-parcel-sorting-robot',
    title: 'Automated Parcel-Sorting Robot',
    role: "Bachelor's Final Year Project",
    year: '2025',
    tags: ['Robotics', 'ESP32', 'IoT'],
    summary: 'A wireless Bluetooth-controlled parcel-sorting robot built for automated logistics.',
    description: [
      'Built a wireless Bluetooth-controlled parcel-sorting robot using an ESP32-WROOM-32 as the core controller.',
      'Used NEMA-17 stepper motors for linear motion and parcel dropping, and designed a turntable mechanism for 90° path switching on linear tracks.',
      'Implemented a timing belt system to drive four wheels in sync, keeping motion coordinated across the whole robot.',
    ],
    link: '',
  },
  {
    slug: 'employee-management-system',
    title: 'Employee Management System',
    role: 'Personal Project',
    year: '2024',
    tags: ['Java', 'OOP'],
    summary: 'An object-oriented Java system for managing company employees and daily records.',
    description: [
      'A Java-based system developed with an object-oriented approach to manage company employees and their daily records.',
      'Categorizes employees into salaried, hourly, part-time, and commission-based types, while integrating company-wide operations and attendance tracking.',
    ],
    link: '',
  },
  {
    slug: 'bibliophile-bliss',
    title: 'Bibliophile Bliss',
    role: 'Online Bookstore Platform',
    year: '2024',
    tags: ['Django', 'Python', 'Full-Stack'],
    summary: 'A full-stack Django bookstore where users can browse, search, and purchase books.',
    description: [
      'Developed a full-stack web application using Django, SQLite, and Python that allows users to browse, search, and purchase books online.',
      'Implemented core features like user authentication, a shopping cart, and order management, while keeping the UI clean and the functionality database-driven.',
    ],
    link: '',
  },
]

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: initialProjects,
    activeFilter: 'All',
  },
  reducers: {
    setFilter(state, action) {
      state.activeFilter = action.payload
    },
  },
})

export const { setFilter } = projectsSlice.actions

export const selectAllProjects = (state) => state.projects.items
export const selectActiveFilter = (state) => state.projects.activeFilter

export const selectFilteredProjects = (state) => {
  const { items, activeFilter } = state.projects
  if (activeFilter === 'All') return items
  return items.filter((project) => project.tags.includes(activeFilter))
}

export const selectFilterTags = (state) => {
  const tags = new Set()
  state.projects.items.forEach((project) => project.tags.forEach((tag) => tags.add(tag)))
  return ['All', ...Array.from(tags)]
}

export default projectsSlice.reducer