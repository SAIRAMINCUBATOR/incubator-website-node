import { Gallery, Lead, MainCarousel, Project, StartUp, Team, Testimony } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "addMainCarousel" | "editMainCarousel" | "deleteMainCarousel" | "addTestimony" | "editTestimony" | "deleteTestimony" | "editTeam" | "addTeam" | "deleteTeam" | "addLead" | "editLead" | "deleteLead" | "editGallery" | "deleteGallery" | "addGallery" | "addStartUp" | "editStartUp" | "deleteStartUp" | "addProject" | "deleteProject" | "editProject";

interface ModalData {
  mainCarousel?: MainCarousel
  testimony?:Testimony
  team?:Team
  lead?:Lead
  gallery?:Gallery
  startup?:StartUp
  project?:Project
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false })
}));