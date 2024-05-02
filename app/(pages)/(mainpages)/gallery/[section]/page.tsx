"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2, Menu, Pencil } from "lucide-react";
import axios from "axios";
import { Category, CategoryType, MainGallery } from "@prisma/client";
import GalleryComponent from "@/components/Gallery";

import qs from "query-string";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const GalleryPage = (req, res) => {
  const [isLoading, setIsLoading] = useState(false);

  const { section } = req?.params;
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<MainGallery[]>([]);
  const router = useRouter();
  const [category, setCategory] = useState(section);
  const [categoryName, setCategoryName] = useState(null);
  const getCategories = async () => {
    try {
      setIsLoading(true);
      const url = qs.stringifyUrl({
        url: "/api/components/category",
        query: {
          type: CategoryType.MainGallery,
        },
      });
      const response = await axios.get(url);
      setCategories(response.data.response);
      setIsLoading(false);
    } catch (e) {
      console.log("FETCH Category:",  e);
    }
  };
  const getGallery = async () => {
    try {
      if (categoryName) {
        setIsLoading(true);
        const url = qs.stringifyUrl({
          url: "/api/components/mainGallery",
          query: {
            category,
          },
        });
        const response = await axios.get(url);
        setImages(response.data.response);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories.length>0) {
      const Fetchedcategory = categories.find((cat) => cat.id == category);
      if (!Fetchedcategory) {
        toast("Invalid Category Id");
        router.replace("/gallery");
      }
      setCategoryName(Fetchedcategory?.name);
    }
  }, [categories]);

  useEffect(() => {
    getGallery();
  }, [categoryName]);

  useEffect(() => {
    setCategory(section);
  }, [section]);

  return (
    <div className="flex justify-center w-full flex-col items-center p-3 ">
      <div className="relative flex items-center w-full">
        <div className="absolute md:left-16 top-5">
          <Link href={"/gallery"}>
            <Button variant={"link"} className="flex items-center w-fit ">
              <ChevronLeft className="h-5 w-5" />
              Back
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-start w-full ">
        {!isLoading ? (
          <div className="  w-full flex flex-col">
            {images && (
              <GalleryComponent
                images={images}
                id={category}
                heading={categoryName}
              />
            )}
          </div>
        ) : (
          <div className="min-h-[400px] flex w-full items-center justify-center">
            <Loader2 size={42} className="animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
