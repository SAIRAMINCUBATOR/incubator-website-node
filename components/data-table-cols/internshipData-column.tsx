import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../ui/data-table/data-column-header";
import { FormatDate } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import {  InternshipDetails, MOU,  } from "@prisma/client";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const internshipDataColumn: ColumnDef<InternshipDetails>[] = [
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
      <div className="text-center font-medium">{row.getValue("collegeName")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "internshipStartDate",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Internship Start Date" />;
    },
    cell: ({ row }) => {
      return <div className="text-center font-medium">{FormatDate(row.getValue("internshipStartDate"))}</div>;
    },
    filterFn: (row, id, value) => {
      const date = row.getValue(id);
      return value.includes(FormatDate(row.getValue("internshipStartDate")));
    },
  },
  {
    accessorKey: "internshipEndDate",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Internship End Date" />;
    },
    cell: ({ row }) => {
      return <div className="text-center font-medium">{FormatDate( row.getValue("internshipEndDate"))}</div>;
    },
    filterFn: (row, id, value) => {
      const date = row.getValue(id);
      return value.includes(FormatDate( row.getValue("internshipEndDate")));
    },
  },
  {
    accessorKey: "numberOfDays",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Number of Days" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("numberOfDays")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "topic",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Topic" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("topic")}</div>
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
      <div className="text-center font-medium">{row.getValue("sstifMentor")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "grade",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Grade" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("grade")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
 
];
