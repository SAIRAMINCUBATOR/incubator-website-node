import {
  MainGallery,
  Lead,
  MainCarousel,
  Project,
  StartUp,
  Team,
  Testimony,
  Company,
  AuxilaryGallery,
  Collaboration,
  Management,
} from "@prisma/client";
import { create } from "zustand";

export type ModalType =
  | "addMainCarousel"
  | "editMainCarousel"
  | "deleteMainCarousel"
  | "addTestimony"
  | "editTestimony"
  | "deleteTestimony"
  | "editTeam"
  | "addTeam"
  | "deleteTeam"
  | "addLead"
  | "editLead"
  | "deleteLead"
  | "editMainGallery"
  | "deleteMainGallery"
  | "addMainGallery"
  | "editAuxGallery"
  | "deleteAuxGallery"
  | "addAuxGallery"
  | "editStartUp"
  | "addProject"
  | "deleteProject"
  | "editProject"
  | "addCompany"
  | "editCompany"
  | "deleteCompany"
  | "editProject"
  | "addCollaboration"
  | "editCollaboration"
  | "deleteCollaboration"
  | "editManagement";

interface ModalData {
  mainCarousel?: MainCarousel;
  testimony?: Testimony;
  team?: Team;
  lead?: Lead;
  mainGallery?: MainGallery;
  auxGallery? : AuxilaryGallery;
  startup?: StartUp;
  project?: Project;
  company?: Company;
  collaboration?: Collaboration;
  management?: Management;
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
  onClose: () => set({ type: null, isOpen: false }),
}));
