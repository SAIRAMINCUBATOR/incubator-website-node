import { useSession } from "@/components/providers/context/SessionContext";
import { useModal } from "@/hooks/use-model-store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

import qs from "query-string";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DeleteProject = () => {
  const router = useRouter();
  const { isOpen, type, data, onClose } = useModal();
  const { token, isTokenExpired } = useSession();
  const isModalOpen = isOpen && type === "deleteProject";
  const { project } = data;
  const onSubmit = async () => {
    try {
      if (!token && isTokenExpired()) {
        toast("Session Expired");
        handleClose();
      }
      const url = qs.stringifyUrl({
        url: "/api/components/project",
        query: {
          id: project?.id,
        },
      });

      const response = await axios.delete(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response) {
        // router.refresh();
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <AlertDialog open={isModalOpen} onOpenChange={handleClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete image and remove data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProject;
