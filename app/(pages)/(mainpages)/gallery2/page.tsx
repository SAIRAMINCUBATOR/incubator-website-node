"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Menu, Pencil } from "lucide-react";
import axios from "axios";
import { Category, CategoryType, AuxilaryGallery } from "@prisma/client";
import GalleryComponent from "@/components/Gallery";
import { useSession } from "@/components/providers/context/SessionContext";
const GalleryPage = () => {
  const params = useSearchParams();
  const section = params.get("cat");
  const { token } = useSession();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<AuxilaryGallery[]>([]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "/api/components/category?type=" + CategoryType.AuxilaryGallery
      );
      setCategories(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };
  const getGallery = async () => {
    try {
      const response = await axios.get("/api/components/auxGallery");
      setImages(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getCategories();
    getGallery();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setSheetOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollToSection = (id: string) => {
    if (id) {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => scrollToSection(section), 1000);
    return () => clearTimeout(timer);
  }, [section]);

  function SmoothScrollLink({ href, children }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const scrollHandler = () => {
        const element = document.getElementById(href.split("#")[1]);
        if (element) {
          const elementRect = element.getBoundingClientRect();

          const isElementInScrollView =
            elementRect.bottom > 200 && elementRect.top < 200;
          setVisible(isElementInScrollView);
        }
      };

      document.addEventListener("scroll", scrollHandler);
      scrollHandler();
      return () => {
        document.removeEventListener("scroll", scrollHandler);
      };
    }, []);
    return (
      <Link
        href={href}
        className={
          visible
            ? " underline bg-gray-400 rounded-xl transition-all duration-150 ease-in"
            : ""
        }
      >
        <Button
          variant={"link"}
          className="text-xl "
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            const sectionId = href.split("#")[1]; // Extract section ID from href
            scrollToSection(sectionId); // Scroll to the section
            setSheetOpen(false);
          }}
        >
          {children}
        </Button>
      </Link>
    );
  }

  function SideBarComponets() {
    return (
      <div className="flex flex-col p-3 items-center gap-5 ">
        {token && (
          <Link href={"/edit?section=auxGallery"}>
            <Button
              variant={"ghost"}
              className="bg-green-400 w-[100px] text-white shadow-md"
            >
              <Pencil className="h-4 w-4 mr-2 fill-green-800" stroke="false" />
              Edit
            </Button>
          </Link>
        )}
        <span className=" text-2xl font-bold">Categories</span>
        {categories &&
          categories.map((cat) => (
            <>
              {
                //@ts-ignore
                cat.AuxilaryGallery.length > 0 && (
                  <SmoothScrollLink href={"#" + cat.id}>
                    {cat.name}
                  </SmoothScrollLink>
                )
              }
            </>
          ))}
      </div>
    );
  }
  return (
    <div className="flex justify-center w-full flex-col items-center p-3">
      {/* <h2
        className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-splitting
      >
        GALLERY
      </h2> */}

      <div className="flex items-start w-full lg:w-[90%]">
        <div className="hidden lg:flex sticky top-[30%] left-0 flex-col p-3 items-center gap-5 w-[12%] ">
          <SideBarComponets />
        </div>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="lg:hidden block sticky top-[20%] -translate-y-[50%] left-2 w-fit">
            <ChevronRight className="m-0 p-0 text-2xl" size={28} />
          </SheetTrigger>
          <SheetContent className="w-1/2" side="left">
            <SheetHeader>
              <SheetTitle>Sairam Techno Incubator</SheetTitle>
            </SheetHeader>
            <SideBarComponets />
          </SheetContent>
        </Sheet>

        <div className=" lg:w-[90%] lg:ml-0 w-full flex flex-col">
          {categories &&
            categories.map((cat) => {
              const imgs = images.filter((img) => img.categoryId == cat.id);
              if (imgs.length > 0)
                return (
                  <GalleryComponent
                    images={imgs}
                    id={cat.id}
                    heading={cat.name}
                  />
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
