import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../ui/data-table/data-column-header";
import { FormatDate } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import {  MOU,  } from "@prisma/client";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const mouDataColumn: ColumnDef<MOU>[] = [
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
    accessorKey: "department",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Department" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("department")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "name",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("name")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "fromDate",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="From Date" />;
    },
    cell: ({ row }) => {
      return <div className="text-center font-medium">{ FormatDate(row.getValue("fromDate")) }</div>; 
    },
    filterFn: (row, id, value) => {
      return value.includes(FormatDate(row.getValue(id)));
    },
  },
  {
    accessorKey: "toDate",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="To Date" />;
    },
    cell: ({ row }) => {
      return <div className="text-center font-medium">{ FormatDate(row.getValue("toDate")) }</div>;
    },
    filterFn: (row, id, value) => {
      return value.includes(FormatDate(row.getValue(id)));
    },
  },
  {
    accessorKey: "status",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("status") ? "Active" : "Inactive"}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "scannedCopy",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Scanned Copy" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        <a href={row.getValue("scannedCopy")} target="_blank" rel="noopener noreferrer">Click To View File</a>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "description",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Description" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("description")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "companyWebsite",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Company Website" />;
    },
    cell: ({ row }) => {
      const url = row.getValue("companyWebsite") as string;
      return (
        <div className="text-center font-medium">
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "aboutCompany",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="About Company" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("aboutCompany")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "companyAddress",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Company Address" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("companyAddress")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "industryContactPersonDetails",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Industry Contact Person Details" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("industryContactPersonDetails")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "institutionContactPersonDetails",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Institution Contact Person Details" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("institutionContactPersonDetails")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "clubsAligned",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Clubs Aligned" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("clubsAligned")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "alignedToSairamSDGGoals",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Aligned to Sairam SDG Goals" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("alignedToSairamSDGGoals")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "keywords",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Keywords" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("keywords")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "studentRegistrationCost",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Student Registration Cost" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("studentRegistrationCost")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "placementOpportunity",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Placement Opportunity" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("placementOpportunity")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "internshipOpportunity",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Internship Opportunity" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("internshipOpportunity")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "goingForRenewal",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Going for Renewal" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("goingForRenewal") ? "Yes" : "No"}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "benefittedSoFar",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Benefitted So Far" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("benefittedSoFar")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "relationshipWithCompany",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Relationship with Company" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("relationshipWithCompany")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },

 
];
