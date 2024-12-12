import { models } from "~/data/models";
import type { TypeModel } from "./../types/models";
import { pagePaths } from "~/config/paths";

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { currentModel, resetModel } = useSingleModel();
  resetModel();

  const modelSlug = to.params.slug as string;
  if (!modelSlug) {
    return navigateTo(pagePaths.models);
  }

  const findModel = (
    models: TypeModel[],
    slug: string
  ): Promise<TypeModel | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const model = models.find((model) => model.slug === slug);
        if (!model) {
          reject(new Error("Model not found"));
        } else {
          resolve(model);
        }
      }, 1000);
    });
  };

  try {
    const model = await findModel(models, modelSlug);
    if (!model) {
      return navigateTo(pagePaths.models);
    }
    currentModel.value = model;
  } catch (error) {
    return navigateTo(pagePaths.models);
  }
});
