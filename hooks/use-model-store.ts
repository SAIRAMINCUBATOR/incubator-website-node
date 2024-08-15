import { RequestData } from "@/schema";
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
  Mentors,
  AdvisoryBoard,
  IPR,
  Funding,
  Assesment,
  StartUpData,
  MOU,
  SSTIFDetail,
  InternshipDetails,
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
  | "editfacilities"
  | "deletefacilities"
  | "addfacilities"
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
  | "editManagement"
  | "deleteManagement"
  | "editMentors"
  | "deleteMentors"
  | "editAdvisoryBoard"
  | "deleteAdvisoryBoard"
  | "editIPR"
  | "deleteIPR"
  | "editFunding"
  | "deleteFunding"
  | "addAssesment"
  | "editAssesment"
  | "deleteAssesment"
  | "addStartupData"
  | "editStartupData"
  | "deleteStartupData"
  | "addMOUData"
  | "editMOUData"
  | "deleteMOUData"
  | "addSSTIFData"
  | "editSSTIFData"
  | "deleteSSTIFData"
  | "addInternshipData"
  | "editInternshipData"
  | "deleteInternshipData";
interface ModalData {
  assesment?: Assesment;
  mainCarousel?: MainCarousel;
  testimony?: Testimony;
  team?: Team;
  lead?: Lead;
  mainGallery?: MainGallery;
  facilities?: AuxilaryGallery;
  startup?: StartUp;
  project?: Project;
  company?: Company;
  collaboration?: Collaboration;
  management?: Management;
  mentors?: Mentors;
  advisoryBoard?: AdvisoryBoard;
  iPR?: IPR;
  funding?: Funding;
  startupData?: RequestData;
  mou?: MOU;
  sstif?: SSTIFDetail;
  internships?: InternshipDetails;
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
