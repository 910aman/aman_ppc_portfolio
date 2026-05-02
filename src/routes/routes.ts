import { IRoutes } from "../interfaces/IRoutes"

const baseUrl: string = import.meta.env.VITE_BASE_PAGES || '/src/html/'

const routes: IRoutes = {
  home: `${baseUrl}index.html`,
  about: `${baseUrl}about.html`,
  gallery: `${baseUrl}gallery.html`,
  services: `${baseUrl}services.html`,
  contact: `${baseUrl}contact.html`,
}

export default routes