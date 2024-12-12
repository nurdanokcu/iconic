import { slider01, slider02, slider03, slider04, slider05, modelOne, modelTwo, modelThree } from "~/assets/images";
import type { TypeProject } from "~/types/projects";
import { events } from "~/data/events";

export const singleProject: TypeProject = {
  id: 1,
  name: "A New Face for Fashion",
  featured_description:
    "Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner. Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.",
  date: "21/07/2023",
  slug: "a-new-face-for-fashion",
  featured_pictures: [slider01, slider02, slider03],
  pictures: [slider04, slider05],
  description:
    "Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner. Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.",
  event: events[0],
  featured_models: [
    {
      id: 1,
      name: "Aishawarya gupta",
      role: "Lead Model",
      featured_photo: modelOne,
      slug: "aishwarya-gupta",
    },
    {
      id: 2,
      name: "Jessica",
      role: "Model",
      featured_photo: modelTwo,
      slug: "jessica",
    },
    {
      id: 3,
      name: "Katrina",
      role: "Model",
      featured_photo: modelThree,
      slug: "katrina",
    },
  ],
  next_project_slug: null,
};
