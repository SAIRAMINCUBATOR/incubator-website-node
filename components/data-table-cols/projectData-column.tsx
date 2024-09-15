import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../ui/data-table/data-column-header";
import { FormatDate } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import {  SSTIFDetail } from "@prisma/client";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const projectDataColumn: ColumnDef<SSTIFDetail>[] = [
  {
    id: "#",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="S.No." />;
    },
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        //@ts-ignore
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "studentName",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Student Name" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("studentName")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "studentID",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Student ID" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("studentID")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "year",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Year" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("year")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "collegeName",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="College Name" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("collegeName")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "sstifStartDate",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="SSTIF Start Date" />;
    },
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {FormatDate(row.getValue("sstifStartDate"))}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const date = row.getValue(id);
      return value.includes(FormatDate(row.getValue("sstifStartDate")));
    },
  },
  {
    accessorKey: "sstifEndDate",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="SSTIF End Date" />;
    },
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {FormatDate(row.getValue("sstifEndDate"))}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const date = row.getValue(id);
      return value.includes(FormatDate(row.getValue("sstifEndDate")));
    },
  },
  {
    accessorKey: "numberOfDays",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Number of Days" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("numberOfDays")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "projectTitle",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Project Title" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("projectTitle")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "projectStatus",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Project Status" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("projectStatus")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "projectReport",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Project Report" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("projectReport")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "sstifMentor",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="SSTIF Mentor" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("sstifMentor")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "studentCategory",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Student Category" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("studentCategory")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
];
