import type { TypeModel } from "../types/models";

export const useSingleModel = () => {
  const emptyModel: TypeModel = {
    id: 0,
    name: "",
    slug: "",
    characteristics: [],
    events: [],
    featured_photo: "",
    featured_project: null,
    images: [],
    is_promotional: false,
    role: "",
    cover_photo: "",
  };
  const currentModel = useState(
    "currentModel",
    (): TypeModel => ({
      ...emptyModel,
    })
  );
  const resetModel = () => {
    currentModel.value = { ...emptyModel };
  };
  return {
    currentModel,
    resetModel,
  };
};
