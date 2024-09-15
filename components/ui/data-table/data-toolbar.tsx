"use client";

import { Download, X } from "lucide-react";
import { Table } from "@tanstack/react-table";
import * as XLSX from "xlsx";
import { Button } from "../button";
import { Input } from "../input";

import { cn } from "../../../lib/utils";
import { DataTableViewOptions } from "./data-view-options";
import { useSession } from "@/components/providers/context/SessionContext";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  type: "startupData" | "sstifProject" | "mou" | "internships";
  title: string;
}

export function DataTableToolbar<TData>({
  table,
  type,
  title,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const { token } = useSession();
  const handleExport = () => {
    const filteredRows = table.getFilteredRowModel().rows;
    const filteredData = filteredRows.map((row) => row.original);

    const processedData = [];
    filteredData.forEach((row) => {
      // Adding book and student details
      const processedRow = {
        ...row,
      };

      // Remove the nested book and student objects
      //@ts-ignore
      delete processedRow.addedByUserId;
      //@ts-ignore
      delete processedRow.id;

      // Append to processedData array
      processedData.push(processedRow);
    });
    const worksheet = XLSX.utils.json_to_sheet(processedData);
   
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${title}.xlsx`);
  };
  return (
    <div className="flex items-start justify-between gap-5">
      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="flex space-x-5">
          <Input
            placeholder="Search..."
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className="h-8  bg-slate-300 shadow-inner"
          />
        </div>
        <div className={cn("flex flex-wrap gap-1")}>
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <X className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      <DataTableViewOptions table={table} />
      {token && (
        <Button
          onClick={handleExport}
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex gap-1 items-center"
        >
          <Download className="h-5 w-5" /> Download {title}
        </Button>
      )}
    </div>
  );
}
