import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  // PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  // getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

import { DataTableToolbar } from "./data-table/data-toolbar";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { cn } from "../../lib/utils";
// import { DataTablePagination } from "./data-table/data-pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  visibleColumns?: VisibilityState;
  tableType: "startupData" | "sstifProject" | "mou" | "internships";
  title?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  tableType,
  title,
  visibleColumns,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>();
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>();
  // const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  React.useEffect(() => {
    setColumnVisibility({ select: false, ...visibleColumns });
  }, [visibleColumns]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      // rowSelection,
      globalFilter,
    },
  });

  return (
    <div className="space-y-4 bg-white/80 p-3 rounded-lg">
      <DataTableToolbar table={table} type={tableType} title={title} />
      <ScrollArea className={cn("rounded-md w-[75vw] h-[65vh]")}>
        <Table>
          <TableHeader className="sticky top-0 bg-slate-300 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className=" text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter className="sticky bottom-0 bg-slate-300 ">
            <TableRow>
              <TableCell
                colSpan={table.getVisibleFlatColumns().length - 1}
                className="text-right"
              >
                Total
              </TableCell>
              <TableCell>
                {table.getRowModel().rows?.length} {title}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <ScrollBar orientation="horizontal" />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
      {/* <div className="flex justify-center w-full">
      <div className="flex items-center justify-between w-[80%]">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}

      {/* <DataTablePagination table={table} /> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
